use std::error::Error;
use std::string::FromUtf8Error;

use axum::response::IntoResponse;
use axum::Json;
use hyper::StatusCode;
use tracing::error;
use validator::ValidationErrors;

use crate::controllers::json_api::{PayloadError, ProblemDetails};
use crate::services::connectors::ConnectorError;
use crate::services::sessions::SessionError;

/// Application errors that can be automatically turned into an appropriate HTTP
/// response.
#[derive(Debug, thiserror::Error)]
pub enum AppError {
    #[error("access denied")]
    AccessDenied,

    #[error("connector error")]
    Connector(#[from] ConnectorError),

    #[error("io error")]
    Io(#[from] std::io::Error),

    #[error("json serialization error")]
    Serde(#[from] serde_json::Error),

    #[error("session error")]
    Session(#[from] SessionError),

    #[error("database error")]
    Sqlx(#[from] sqlx::Error),

    #[error("subprocess error")]
    Subprocess(#[from] SubprocessError),

    #[error(transparent)]
    Other(#[from] anyhow::Error),

    #[error("validation error")]
    Validation(#[from] ValidationErrors),
}

impl IntoResponse for AppError {
    fn into_response(self) -> axum::response::Response {
        let status = match &self {
            AppError::AccessDenied => StatusCode::FORBIDDEN,
            AppError::Connector(ConnectorError::MalformedConfig(_)) => StatusCode::BAD_REQUEST,
            AppError::Connector(ConnectorError::UnsupportedOperation(_)) => StatusCode::BAD_REQUEST,
            AppError::Connector(_) => StatusCode::INTERNAL_SERVER_ERROR,
            AppError::Io(_e) => StatusCode::INTERNAL_SERVER_ERROR,
            AppError::Serde(_e) => StatusCode::INTERNAL_SERVER_ERROR,
            AppError::Session(_e) => StatusCode::BAD_REQUEST,
            AppError::Sqlx(sqlx::Error::RowNotFound) => StatusCode::NOT_FOUND,
            AppError::Sqlx(sqlx::Error::Database(_e)) => StatusCode::BAD_REQUEST,
            AppError::Sqlx(_e) => StatusCode::INTERNAL_SERVER_ERROR,
            AppError::Subprocess(_e) => StatusCode::INTERNAL_SERVER_ERROR,
            AppError::Other(_e) => StatusCode::INTERNAL_SERVER_ERROR,
            AppError::Validation(_e) => StatusCode::UNPROCESSABLE_ENTITY,
        };

        if status.is_server_error() {
            error!(status = ?status, message = ?self, details = ?self.source());
        }

        let body = Json(PayloadError::new(ProblemDetails::from(&self)));

        (status, body).into_response()
    }
}

impl From<&AppError> for ProblemDetails {
    fn from(error: &AppError) -> Self {
        let title = error.to_string();
        let detail = match error {
            AppError::Validation(err) => match serde_json::to_value(err) {
                Ok(value) => Some(value),
                Err(serde_err) => {
                    tracing::error!(original_error = ?err, serde_err = ?serde_err, "failed to serialize validation errors");
                    None
                }
            },
            _ => error.source().map(|err| serde_json::json!(err.to_string())),
        };

        ProblemDetails { title, detail }
    }
}

#[derive(Debug, thiserror::Error)]
pub enum SubprocessError {
    #[error("subprocess failed with status {status}")]
    Failure {
        status: std::process::ExitStatus,
        stdout: String,
        stderr: String,
    },
    #[error("subprocess encountered io error")]
    IO(#[from] std::io::Error),
    #[error("subprocess output was not UTF8")]
    Utf8(#[from] FromUtf8Error),
}

"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4609],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9542:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Amazon Kinesis",c={unversionedId:"reference/Connectors/capture-connectors/amazon-kinesis",id:"reference/Connectors/capture-connectors/amazon-kinesis",title:"Amazon Kinesis",description:"This connector captures data from Amazon Kinesis streams.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-kinesis.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-kinesis",permalink:"/reference/Connectors/capture-connectors/amazon-kinesis",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-kinesis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Capture connectors",permalink:"/reference/Connectors/capture-connectors/"},next:{title:"Apache Kafka",permalink:"/reference/Connectors/capture-connectors/apache-kafka"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Configuration",id:"configuration",children:[{value:"Values",id:"values",children:[{value:"Endpoint",id:"endpoint",children:[],level:4},{value:"Bindings",id:"bindings",children:[],level:4}],level:3},{value:"Sample",id:"sample",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amazon-kinesis"},"Amazon Kinesis"),(0,i.kt)("p",null,"This connector captures data from Amazon Kinesis streams."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-kinesis"},(0,i.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-kinesis:dev"))," provides the latest connector image when using the Flow GitOps environment. You can also follow the link in your browser to see past image versions."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You'll need one or more Amazon Kinesis streams. For a given capture, all streams must:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contain JSON data only"),(0,i.kt)("li",{parentName:"ul"},"Be accessible from a single root user or ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user")," in AWS"),(0,i.kt)("li",{parentName:"ul"},"Be in the same ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"AWS region"))),(0,i.kt)("p",null,"You'll also need the AWS ",(0,i.kt)("strong",{parentName:"p"},"access key")," and ",(0,i.kt)("strong",{parentName:"p"},"secret access key")," for the user.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/"},"AWS blog")," for help finding these credentials."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Beta")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your root or IAM user in AWS must have appropriate ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iam/features/manage-permissions/"},"permissions"),".\nAdditional details will be added to this article soon.\nIn the meantime, you can ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"contact Estuary Support")," if you encounter unexpected behavior."))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"There are various ways to configure and implement connectors. See ",(0,i.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about these methods. The values and code sample below provide configuration details specific to the Amazon Kinesis source connector."),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"endpoint"},"Endpoint"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"awsAccessKeyId")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Access Key ID"),(0,i.kt)("td",{parentName:"tr",align:null},"AWS credential used to connect to Kinesis."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"awsSecretAccessKey")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key"),(0,i.kt)("td",{parentName:"tr",align:null},"AWS credential used to connect to Kinesis."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"The AWS endpoint URI to connect to. Useful if you're capturing from a kinesis-compatible API that isn't provided by AWS."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"region")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Region"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the AWS region where the Kinesis stream is located."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"us-east-1"'),", Required")))),(0,i.kt)("h4",{id:"bindings"},"Bindings"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"stream")),(0,i.kt)("td",{parentName:"tr",align:null},"Stream"),(0,i.kt)("td",{parentName:"tr",align:null},"Stream name."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"syncMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,i.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,i.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")))),(0,i.kt)("h3",{id:"sample"},"Sample"),(0,i.kt)("p",null,"A minimal capture definition within the catalog spec will look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${TENANT}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-kinesis:dev\n        config:\n          awsAccessKeyId: "example-aws-access-key-id"\n          awsSecretAccessKey: "example-aws-secret-access-key"\n          region: "us-east-1"\n    bindings:\n      - resource:\n          stream: ${STREAM_NAME}\n          syncMode: incremental\n        target: ${TENANT}/${COLLECTION_NAME}\n\n')),(0,i.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each Kinesis stream."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions."),"."))}m.isMDXComponent=!0}}]);
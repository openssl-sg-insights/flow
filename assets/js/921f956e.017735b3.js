"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8045],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:9},l="Hubspot",p={unversionedId:"reference/Connectors/capture-connectors/hubspot",id:"reference/Connectors/capture-connectors/hubspot",title:"Hubspot",description:"This connector captures data from a Hubspot account.",source:"@site/docs/reference/Connectors/capture-connectors/hubspot.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/hubspot",permalink:"/reference/Connectors/capture-connectors/hubspot",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/hubspot.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Google Sheets",permalink:"/reference/Connectors/capture-connectors/google-sheets"},next:{title:"Mailchimp",permalink:"/reference/Connectors/capture-connectors/mailchimp"}},c={},u=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prerequisites for OAuth",id:"prerequisites-for-oauth",level:3},{value:"Prerequisites using an API key",id:"prerequisites-using-an-api-key",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hubspot"},"Hubspot"),(0,o.kt)("p",null,"This connector captures data from a Hubspot account."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/airbyte-source-hubspot:dev"},(0,o.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/airbyte-source-hubspot:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/hubspot"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,o.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,o.kt)("p",null,"By default, each resource associated with your Hubspot account is mapped to a Flow collection through a separate binding."),(0,o.kt)("p",null,"The following data resources are supported for all subscription levels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_campaign_data"},"Campaigns")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/companies"},"Companies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://developers.hubspot.com/docs/methods/lists/get_lists"},"Contact Lists")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/contacts/get_contacts"},"Contacts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts"},"Contacts List Memberships")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/pipelines/get_pipelines_for_object_type"},"Deal Pipelines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/deals"},"Deals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_events"},"Email Events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/engagements/get-all-engagements"},"Engagements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/calls"},"Engagements Calls")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/email"},"Engagements Emails")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/meetings"},"Engagements Meetings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/notes"},"Engagements Notes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/tasks"},"Engagements Tasks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/marketing/forms"},"Forms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/forms/get-submissions-for-a-form"},"Form Submissions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/line-items"},"Line Items")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/owners/get_owners"},"Owners")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/products"},"Products")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/contacts/get_contacts"},"Property History")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/quotes"},"Quotes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/methods/email/get_subscriptions_timeline"},"Subscription Changes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/tickets"},"Tickets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/pipelines"},"Ticket Pipelines"))),(0,o.kt)("p",null,"The following data resources are supported for pro accounts (set ",(0,o.kt)("strong",{parentName:"p"},"Subscription type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"pro")," in the ",(0,o.kt)("a",{parentName:"p",href:"#endpoint"},"configuration"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.hubspot.com/docs/api/crm/feedback-submissions"},"Feedback Submissions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/cms_email/get-all-marketing-email-statistics"},"Marketing Emails")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://legacydocs.hubspot.com/docs/methods/workflows/v3/get_workflows"},"Workflows"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"There are two ways to authenticate with Hubspot when capturing data: using OAuth, and with an API key.\nTheir prerequisites differ."),(0,o.kt)("p",null,"OAuth is recommended for simplicity in the Flow web app;\nthe API key method is the only supported method using the command line."),(0,o.kt)("h3",{id:"prerequisites-for-oauth"},"Prerequisites for OAuth"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Beta")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"OAuth implementation is under active development and is coming soon.\nUse the API key method for now."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Hubspot account")),(0,o.kt)("h3",{id:"prerequisites-using-an-api-key"},"Prerequisites using an API key"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Hubspot account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Hubspot ",(0,o.kt)("a",{parentName:"p",href:"https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key"},"API key")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog spec YAML.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and YAML sample below provide configuration details specific to the Hubspot source connector."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("p",null,"The following properties reflect the API Key authentication method."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,o.kt)("td",{parentName:"tr",align:null},"Authentication mechanism"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose how to authenticate to HubSpot."),(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/credentials/credentials_title"))),(0,o.kt)("td",{parentName:"tr",align:null},"Credentials set"),(0,o.kt)("td",{parentName:"tr",align:null},"Type of credentials. Set to ",(0,o.kt)("inlineCode",{parentName:"td"},"API Key Credentials")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/credentials/api_key"))),(0,o.kt)("td",{parentName:"tr",align:null},"API Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Your Hubspot API key"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,o.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,o.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2017-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/subscription_type")),(0,o.kt)("td",{parentName:"tr",align:null},"Your HubSpot account subscription type"),(0,o.kt)("td",{parentName:"tr",align:null},"Some streams are only available to certain subscription packages, we use this information to select which streams to pull data from."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"starter"'))))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,o.kt)("td",{parentName:"tr",align:null},"Data resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the data resource."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,o.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Connection method"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"endpoint:\n  connector:\n    image: ghcr.io/estuary/airbyte-source-hubspot:dev\n      config:\n        credentials:\n          credentials_title: API Key Credentials\n          api_key: <secret>\n  bindings:\n    - resource:\n         stream: companies\n         syncMode: incremental\n      target: ${TENANT}/${COLLECTION_NAME}\n")),(0,o.kt)("p",null,"Your configuration will have many more bindings representing all supported ",(0,o.kt)("a",{parentName:"p",href:"#supported-data-resources"},"resources"),"\nin your Hubspot account."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions.")))}d.isMDXComponent=!0}}]);
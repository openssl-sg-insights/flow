"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4079],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Projections",c={unversionedId:"concepts/projections",id:"concepts/projections",title:"Projections",description:"Flow documents are arbitrary JSON, and may contain multiple levels of hierarchy and nesting.",source:"@site/docs/concepts/projections.md",sourceDirName:"concepts",slug:"/concepts/projections",permalink:"/concepts/projections",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/projections.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Materializations",permalink:"/concepts/materialization"},next:{title:"Schemas",permalink:"/concepts/schemas"}},p=[{value:"Logical Partitions",id:"logical-partitions",children:[{value:"Partition Selectors",id:"partition-selectors",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"projections"},"Projections"),(0,o.kt)("p",null,"Flow documents are arbitrary JSON, and may contain multiple levels of hierarchy and nesting.\nHowever systems that Flow integrates with often model flat tables of rows and columns, without hierarchy.\nOthers are somewhere in between."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Projections")," are the means by which Flow translates between the documents\nof a collection and a table representation.\nA projection defines a mapping between a structured document location,\ngiven as a ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6901"},"JSON-Pointer"),",\nand a corresponding ",(0,o.kt)("strong",{parentName:"p"},"field")," name used as, for example, a CSV file header or SQL table column."),(0,o.kt)("p",null,"Many projections are inferred automatically from a collection\u2019s JSON schema,\nusing a field that is simply the JSON Pointer with its leading slash removed.\nFor example a schema scalar with pointer ",(0,o.kt)("inlineCode",{parentName:"p"},"/myScalar")," will generate a projection with field ",(0,o.kt)("inlineCode",{parentName:"p"},"myScalar"),"."),(0,o.kt)("p",null,"You can supplement by providing additional collection projections,\nand a document location can have more than one projection field that references it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  acmeCo/user-sessions:\n    schema: session.schema.yaml\n    key: [/user/id, /timestamp]\n    projections:\n      # A "user/id" projection field is automatically inferred.\n      # Add an additional field that doesn\'t have a slash.\n      user_id: /user/id\n      # Partly decompose a nested array of requests into a handful of named projections.\n      "first request": /requests/0\n      "second request": /requests/1\n      "third request": /requests/2\n')),(0,o.kt)("h2",{id:"logical-partitions"},"Logical Partitions"),(0,o.kt)("p",null,"Projections can also be used to logically partition a collection,\nspecified as a longer-form variant of a projection definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/user-sessions:\n    schema: session.schema.yaml\n    key: [/user/id, /timestamp]\n    projections:\n      country:\n        location: /country\n        partition: true\n      device:\n        location: /agent/type\n        partition: true\n      network:\n        location: /agent/network\n        partition: true\n")),(0,o.kt)("p",null,"Logical partitions isolate the storage of documents\nby their differing values for partitioned fields.\nFlow extracts partitioned fields from each document,\nand every unique combination of partitioned fields\nis a separate logical partition."),(0,o.kt)("p",null,"Every logical partition has one or more ",(0,o.kt)("strong",{parentName:"p"},"physical partitions"),"\ninto which their documents are written,\nwhich in turn controls\nhow files are arranged within cloud storage."),(0,o.kt)("p",null,'For example, a document of "acmeCo/user-sessions" like:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"country": "CA", "agent": {"type": "iPhone", "network": "LTE"}, ...}\n')),(0,o.kt)("p",null,"Might produce files in cloud storage like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"s3://bucket/example/sessions/country=CA/device=iPhone/network=LTE/pivot=00/utc_date=2020-11-04/utc_hour=16/<name>.gz\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"country"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"device"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," together identify a ",(0,o.kt)("em",{parentName:"p"},"logical partition"),",\nwhile ",(0,o.kt)("inlineCode",{parentName:"p"},"pivot")," identifies a ",(0,o.kt)("em",{parentName:"p"},"physical partition"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"utc_date")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"utc_hour")," is the time at which the journal fragment was created."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/journals#physical-partitions"},"Learn more about physical partitions"),"."),(0,o.kt)("h3",{id:"partition-selectors"},"Partition Selectors"),(0,o.kt)("p",null,"When reading from a collection, Flow catalog entities like derivations, materializations,\nand tests can provide a ",(0,o.kt)("strong",{parentName:"p"},"partition selector")," which identifies the subset\nof partitions that should be read from a source collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Partition selectors are included as part of a larger entity,\n# such as a derivation or materialization.\npartitions:\n  # `include` selects partitioned fields and corresponding values which\n  # must be matched in order for a partition to be processed.\n  # All of the included fields must be matched.\n  # Default: All partitions are included. type: object\n  include:\n    # Include partitions from North America.\n    country: [US, CA]\n    # AND where the device is a mobile phone.\n    device: [iPhone, Android]\n\n  # `exclude` selects partitioned fields and corresponding values which,\n  # if matched, exclude the partition from being processed.\n  # A match of any of the excluded fields will exclude the partition.\n  # Default: No partitions are excluded. type: object\n  exclude:\n    # Skip sessions which were over a 3G network.\n    network: ["3G"]\n')),(0,o.kt)("p",null,"Partition selectors are efficient as they allow Flow to altogether\navoid reading documents that aren\u2019t needed."))}u.isMDXComponent=!0}}]);
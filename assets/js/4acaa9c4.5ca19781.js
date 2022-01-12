"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8428],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),o=t(7294),r=t(2389),i=t(9443);var s=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3616),c=t(6010),u="tabItem_vU9c";function m(e){var n,t,r,i=e.lazy,m=e.block,d=e.defaultValue,p=e.values,h=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.lx)(y,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=s(),b=w.tabGroupChoices,N=w.setTabGroupChoices,x=(0,o.useState)(g),O=x[0],C=x[1],S=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=b[h];null!=j&&j!==O&&y.some((function(e){return e.value===j}))&&C(j)}var F=function(e){var n=e.currentTarget,t=S.indexOf(n),a=y[t].value;a!==O&&(T(n),C(a),null!=h&&N(h,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;t=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;t=S[o]||S[S.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},f)},y.map((function(e){var n=e.value,t=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:F,onClick:F},r,{className:(0,c.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},2308:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=t(6396),s=t(8215),l=["components"],c={},u="Schemas",m={unversionedId:"concepts/schemas",id:"concepts/schemas",title:"Schemas",description:"Flow documents and collections always have an associated schema",source:"@site/docs/concepts/schemas.md",sourceDirName:"concepts",slug:"/concepts/schemas",permalink:"/concepts/schemas",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/schemas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Projections",permalink:"/concepts/projections"},next:{title:"Task Shards",permalink:"/concepts/shards"}},d=[{value:"JSON Schema",id:"json-schema",children:[{value:"Generation",id:"generation",children:[],level:3},{value:"Translations",id:"translations",children:[],level:3},{value:"Annotations",id:"annotations",children:[],level:3}],level:2},{value:"Writing Schemas",id:"writing-schemas",children:[{value:"Organization",id:"organization",children:[],level:3}],level:2},{value:"Reductions",id:"reductions",children:[{value:"<code>reduce</code> Annotations",id:"reduce-annotations",children:[{value:"Composition with Conditionals",id:"composition-with-conditionals",children:[],level:4}],level:3}],level:2}],p={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schemas"},"Schemas"),(0,r.kt)("p",null,"Flow documents and ",(0,r.kt)("a",{parentName:"p",href:"/concepts/collections"},"collections")," always have an associated schema\nthat defines the structure, representation, and constraints\nof your documents."),(0,r.kt)("p",null,'Schemas are a powerful tool for data quality.\nFlow verifies every document against its schema whenever its read or written,\nwhich provides a strong guarantee that your collections hold only "clean" data,\nand that bugs and invalid documents are caught before they can impact downstream data products.'),(0,r.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/"},"JSON Schema"),"\nis an expressive open standard for defining the schema and structure of documents.\nFlow uses it for all schemas defined within a Flow catalog."),(0,r.kt)("p",null,"JSON Schema goes well beyond basic type information and can model\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tagged_union"},"tagged unions"),",\nrecursion, and other complex, real-world composite types.\nSchemas can also define rich data validations like minimum & maximum values,\nregular expressions, dates, timestamps, email addresses, and other formats."),(0,r.kt)("p",null,"Together, these features let schemas represent structure ",(0,r.kt)("em",{parentName:"p"},"as well as"),"\nexpectations and constraints that are evaluated and must hold true\nfor every collection document ",(0,r.kt)("em",{parentName:"p"},"before")," it\u2019s added to the collection.\nThey\u2019re a powerful tool for ensuring end-to-end data quality:\nfor catching data errors and mistakes early,\nbefore they can impact your production data products."),(0,r.kt)("h3",{id:"generation"},"Generation"),(0,r.kt)("p",null,"When capturing data from an external system,\nFlow is often able to generate suitable JSON schemas on your behalf."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"Learn more about using connectors")),(0,r.kt)("h3",{id:"translations"},"Translations"),(0,r.kt)("p",null,"A central design tenant of Flow is that users need only provide\na model of their data ",(0,r.kt)("em",{parentName:"p"},"one time"),", as a JSON schema.\nHaving done that, Flow leverages static inference over your schemas\nto perform many build-time validations of your catalog entities,\nhelping you catch potential problems early."),(0,r.kt)("p",null,"Schema inference is also used to provide translations into other schema flavors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Most ",(0,r.kt)("a",{parentName:"li",href:"/concepts/projections"},"projections")," of a collection\nare automatically inferred from its schema.\nMaterializations use your projections to create appropriate representations\nin your endpoint system.\nA SQL connector will create table definitions with appropriate\ncolumns, types, and constraints."),(0,r.kt)("li",{parentName:"ul"},"Flow generates TypeScript definitions from schemas to provide\ncompile-time type checks of user lambda functions.\nThese checks are immensely helpful for surfacing mismatched expectations around,\nfor example, whether a field could ever be null or is misspelt \u2014\nwhich if not caught might otherwise fail later at runtime.")),(0,r.kt)("h3",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"The JSON Schema standard introduces the concept of\n",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/understanding-json-schema/reference/generic.html#annotations"},"annotations"),",\nwhich are keywords that attach metadata to a location within a validated JSON document.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," can be used to annotate a schema with its meaning:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"properties:\n  myField:\n    title: My Field\n    description: A description of myField\n")),(0,r.kt)("p",null,"Flow extends JSON Schema with additional annotation keywords,\nwhich provide Flow with further instruction of how documents should be processed."),(0,r.kt)("p",null,"What\u2019s especially powerful about annotations is that they respond to\n",(0,r.kt)("strong",{parentName:"p"},"conditionals")," within the schema.\nConsider a schema validating a positive or negative number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: number\noneOf:\n  - exclusiveMinimum: 0\n    description: A positive number.\n  - exclusiveMaximum: 0\n    description: A negative number.\n  - const: 0\n    description: Zero.\n")),(0,r.kt)("p",null,"Here, the activated ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," of this schema location depends\non whether the integer is positive, negative, or zero."),(0,r.kt)("h2",{id:"writing-schemas"},"Writing Schemas"),(0,r.kt)("p",null,"Your schema can be quite permissive or as strict as you wish.\nThere are a few things to know, however."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The top-level type must be ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),".\nFlow adds a bit of metadata to each of your documents under the ",(0,r.kt)("inlineCode",{parentName:"p"},"_meta")," property,\nwhich can only be done with a top-level object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any fields that are part of the collection's ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," must provably exist\nin any document that validates against the schema.\nPut another way, every document within a collection must include all of the fields\nof the collection's key, and the schema must guarantee that."))),(0,r.kt)("p",null,"For example, the following collection schema would be invalid because\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field which is used as its key is not ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),",\nso it might not actually exist in all documents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/whoops:\n    schema:\n      type: object\n      required: [value]\n      properties:\n        id: {type: integer}\n        value: {type: string}\n    key: [/id]\n")),(0,r.kt)("p",null,"To fix the above schema, change ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"[id, value]"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/concepts/collections#Schemas"},"Learn more of how schemas can be expressed within collections"),"."),(0,r.kt)("h3",{id:"organization"},"Organization"),(0,r.kt)("p",null,"JSON schema has a ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," keyword which is used to reference a schema stored elsewhere.\nFlow resolves ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," as a relative URL of the current file,\nand also supports\n",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6901#section-6"},"JSON fragment pointers"),"\nfor referencing a specific schema within a larger schema document,\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"../my/widget.schema.yaml#/path/to/schema"),".\nIt's recommended to use references in order to organize your schemas for reuse."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," can also be used in combination with other schema keywords\nto further refine a base schema.\nHere's an example with uses references to organize and\nfurther tighten the constraints of a re-used base schema:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"flow.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/coordinates:\n    key: [/id]\n    schema: schemas.yaml#/definitions/coordinate\n\n  acmeCo/integer-coordinates:\n    key: [/id]\n    schema: schemas.yaml#/definitions/integer-coordinate\n\n  acmeCo/positive-coordinates:\n    key: [/id]\n    schema:\n      # Compose in a restriction that `x` & `y` must be positive.\n      $ref: schemas.yaml#/definitions/coordinate\n      properties:\n        x: {exclusiveMinimum: 0}\n        y: {exclusiveMinimum: 0}\n"))),(0,r.kt)(s.Z,{value:"schemas.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  coordinate:\n    type: object\n    required: [id, x, y]\n    properties:\n      id: {type: string}\n      x:\n        description: The X axis value of the coordinate.\n        type: number\n      y:\n        description: The Y axis value of the coordinate.\n        type: number\n\n  integer-coordinate:\n    $ref: "#/definitions/coordinate"\n    # Compose in a restriction that `x` & `y` cannot be fractional.\n    properties:\n      x: {type: integer}\n      y: {type: integer}\n')))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can write your JSON schemas as either YAML or JSON across any number\nof files, all referenced from Flow catalog files or other schemas."),(0,r.kt)("p",{parentName:"div"},"Schema references are always resolved as URLs relative to the current file,\nbut you can also use absolute URLs to a third-party schema like\n",(0,r.kt)("a",{parentName:"p",href:"https://www.schemastore.org"},"schemastore.org"),"."))),(0,r.kt)("h2",{id:"reductions"},"Reductions"),(0,r.kt)("p",null,"Flow collections have keys, and multiple documents\nmay be added to collections which share a common key.\nWhen this happens Flow will opportunistically merge all such documents\ninto a single representative document for that key through a process\nknown as ",(0,r.kt)("em",{parentName:"p"},"reduction"),"."),(0,r.kt)("p",null,"Flow's default is simply to retain the most recent document of a given key,\nwhich is often the behavior that you're after.\nSchema ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," annotations allow for far more powerful behaviors."),(0,r.kt)("p",null,"Reductions are done eagerly and continuously within Flow's runtime\nto reduce the overall movement and cost of data transfer and storage.\nA torrent of input collection documents can often become a trickle\nof reduced updates which must be stored or materialized into your\nendpoints."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Flow never delays processing in order to batch or combine more documents,\nas some systems do (commonly known as ",(0,r.kt)("em",{parentName:"p"},"micro-batches"),", or time-based ",(0,r.kt)("em",{parentName:"p"},"polling"),").\nEvery document is processed as quickly as possible, from end to end."),(0,r.kt)("p",{parentName:"div"},"Instead Flow uses optimistic transaction pipelining to do as much useful work as possible,\nwhile it awaits the commit of a previous transaction.\nThis natural back-pressure affords ",(0,r.kt)("em",{parentName:"p"},"plenty")," of opportunity for\ndata reductions while minimizing latency."))),(0,r.kt)("h3",{id:"reduce-annotations"},(0,r.kt)("inlineCode",{parentName:"h3"},"reduce")," Annotations"),(0,r.kt)("p",null,"Reduction behaviors are defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce"),"\n",(0,r.kt)("a",{parentName:"p",href:"#annotations"},"JSON schema annotations"),"\nwithin your document schemas.\nThese annotations tell Flow of the specific reduction strategies\nto use at your various document locations."),(0,r.kt)("p",null,"If you're familiar with the ",(0,r.kt)("em",{parentName:"p"},"map")," and ",(0,r.kt)("em",{parentName:"p"},"reduce")," primitives present in\nPython, Javascript, and many other languages, this should feel familiar.\nWhen multiple documents map into a collection with a common key,\nFlow reduces them on your behalf by using your ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," annotations."),(0,r.kt)("p",null,"Here's an example that sums an integer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: integer\nreduce: { strategy: sum }\n\n# 1, 2, -1 => 2\n")),(0,r.kt)("p",null,"Or deeply merges a map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'type: object\nreduce: { strategy: merge }\n\n# {"a": "b"}, {"c": "d"} => {"a": "b", "c": "d"}\n')),(0,r.kt)("p",null,"Learn more in the\n",(0,r.kt)("a",{parentName:"p",href:"../../../reference/reduction-strategies/"},"reductions strategies"),"\nreference documentation."),(0,r.kt)("h4",{id:"composition-with-conditionals"},"Composition with Conditionals"),(0,r.kt)("p",null,"Like any other JSON Schema annotation,\n",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," annotations respond to schema conditionals.\nHere we compose ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastWriteWins")," strategies to\nreduce an appended array which can also be cleared:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: array\noneOf:\n  # If the array is non-empty, reduce by appending its items.\n  - minItems: 1\n    reduce: { strategy: append }\n  # Otherwise if the array is empty, reset the reduced array to be empty.\n  - maxItems: 0\n    reduce: { strategy: lastWriteWins }\n\n# [1, 2], [3, 4, 5] => [1, 2, 3, 4, 5]\n# [1, 2], [], [3, 4, 5] => [3, 4, 5]\n# [1, 2], [3, 4, 5], [] => []\n")),(0,r.kt)("p",null,"Combining schema conditionals with annotations can be used to build\n",(0,r.kt)("a",{parentName:"p",href:"/reference/reduction-strategies/composing-with-conditionals"},"rich behaviors"),"."))}h.isMDXComponent=!0}}]);
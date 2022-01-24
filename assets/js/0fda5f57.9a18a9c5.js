"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2665],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),o=n(7294),r=n(2389),l=n(9443);var i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),c=n(6010),p="tabItem_vU9c";function m(e){var t,n,r,l=e.lazy,m=e.block,u=e.defaultValue,d=e.values,h=e.groupId,f=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=y[0])?void 0:r.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),b=g.tabGroupChoices,N=g.setTabGroupChoices,T=(0,o.useState)(v),C=T[0],x=T[1],S=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=b[h];null!=E&&E!==C&&k.some((function(e){return e.value===E}))&&x(E)}var Z=function(e){var t=e.currentTarget,n=S.indexOf(t),a=k[n].value;a!==C&&(I(t),x(a),null!=h&&N(h,a))},F=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;n=S[o]||S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:F,onFocus:Z,onClick:Z},r,{className:(0,c.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},1504:function(e,t,n){var a=n(7294),o=n(7273);o.Z.initialize({startOnLoad:!0});t.Z=function(e){var t=e.chart;return(0,a.useEffect)((function(){o.Z.contentLoaded()}),[]),a.createElement("div",{className:"mermaid"},t)}},4379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(6396),i=n(8215),s=n(1504),c=["components"],p={},m="Imports",u={unversionedId:"concepts/import",id:"concepts/import",title:"Imports",description:"Catalog spec files may include an import section.",source:"@site/docs/concepts/import.md",sourceDirName:"concepts",slug:"/concepts/import",permalink:"/concepts/import",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/import.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flowctl",permalink:"/concepts/flowctl"},next:{title:"Journals",permalink:"/concepts/journals"}},d=[{value:"Fetch behavior",id:"fetch-behavior",children:[],level:2},{value:"Import types",id:"import-types",children:[],level:2},{value:"JSON Schema <code>$ref</code>",id:"json-schema-ref",children:[],level:2},{value:"TypeScript modules",id:"typescript-modules",children:[],level:2},{value:"NPM dependencies",id:"npm-dependencies",children:[],level:2},{value:"Import paths",id:"import-paths",children:[],level:2}],h={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"imports"},"Imports"),(0,r.kt)("p",null,"Catalog spec files may include an ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," section.\nThis is what allows you to organize your catalog spec across multiple\ninterlinked files, and in some cases, import other resources.\nWhen a catalog is deployed, the imported resources are treated as part of the file\ninto which they are imported."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," section is structured as a list of partial or absolute URLs,\nwhich Flow always evaluates relative to the base directory of the current source file.\nFor example, these are possible imports within a collection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# Suppose we\'re in file "/path/dir/flow.yaml"\nimport:\n  - sub/directory/flow.yaml        # Resolves to "file:///path/dir/sub/directory/flow.yaml".\n  - ../sibling/directory/flow.yaml # Resolves to "file:///path/sibling/directory/flow.yaml".\n  - https://example/path/flow.yaml # Uses the absolute url.\n')),(0,r.kt)("p",null,"The import rules flexible; a collection doesn\u2019t have to do anything special\nto be imported by another,\nand ",(0,r.kt)("a",{parentName:"p",href:"/concepts/flowctl"},(0,r.kt)("inlineCode",{parentName:"a"},"flowctl"))," can even directly build remote sources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Test an example from the flow-template repository.\n$ flowctl test --source https://raw.githubusercontent.com/estuary/flow-template/main/word-counts.flow.yaml\n")),(0,r.kt)("h2",{id:"fetch-behavior"},"Fetch behavior"),(0,r.kt)("p",null,"Flow resolves, fetches, and validates all imports during the catalog build process,\nand then includes their fetched contents within the built catalog.\nThe built catalog is thus a self-contained snapshot of all resources\n",(0,r.kt)("em",{parentName:"p"},"as they were")," at the time the catalog was built."),(0,r.kt)("p",null,"This means it's both safe and recommended to directly reference\nan authoritative source of a resource, such as a third-party JSON schema.\nIt will be fetched and verified only at catalog build time,\nand thereafter that fetched version will be used for execution,\nregardless of whether the authority URL itself later changes or errors."),(0,r.kt)("h2",{id:"import-types"},"Import types"),(0,r.kt)("p",null,"Almost always, the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," stanza is used to import other Flow\ncatalog source files.\nThis is the default when given a string path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"import:\n - path/to/source/catalog.flow.yaml\n")),(0,r.kt)("p",null,"A long-form variant also accepts a content type of the imported resource:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"import:\n - url: path/to/source/catalog.flow.yaml\n   contentType: CATALOG\n")),(0,r.kt)("p",null,"Other permitted content types include ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON_SCHEMA")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TYPESCRIPT_MODULE"),",\nbut these are not typically used and are needed only for advanced use cases."),(0,r.kt)("h2",{id:"json-schema-ref"},"JSON Schema ",(0,r.kt)("inlineCode",{parentName:"h2"},"$ref")),(0,r.kt)("p",null,"Certain catalog entities, like collections, commonly reference JSON schemas.\nIt's not necessary to explicitly add these to the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," section;\nthey are automatically resolved and treated as an import.\nYou can think of this as an analog to the JSON Schema ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," keyword,\nwhich is used to reference a schema that may\nbe contained in another file."),(0,r.kt)("p",null,"The one exception is schemas that use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$id")," keyword\nat their root to define an alternative canonical URL.\nIn this case, the schema must be referenced through its canonical URL,\nand then explicitly added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," section\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON_SCHEMA")," content type."),(0,r.kt)("h2",{id:"typescript-modules"},"TypeScript modules"),(0,r.kt)("p",null,"Certain entities in your catalog spec \u2014 typically derivations \u2014 may use\nTypeScript lambda definitions.\nThese lambdas are conventionally defined in TypeScript modules\nthat accompany the specific catalog spec file.\nFlow looks for and automatically imports TypeScript modules\nwhich live alongside a Flow catalog spec file."),(0,r.kt)("p",null,"Given a Flow catalog spec at ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/my.flow.yaml"),",\nFlow automatically imports the TypeScript module ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/my.flow.ts"),".\nThis is conventionally the module which implements all TypeScript lambdas\nrelated to catalog entities defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"my.flow.yaml"),".\nYou do not need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"my.flow.ts")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," stanza."),(0,r.kt)("p",null,"However, Flow must know of all additional TypeScript modules that\nare part of the catalog.\nIf other modules are needed, they must be added as a to the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," section\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"TYPESCRIPT_MODULE")," content type."),(0,r.kt)("h2",{id:"npm-dependencies"},"NPM dependencies"),(0,r.kt)("p",null,"Your TypeScript modules may depend on other\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM packages"),",\nwhich can be be imported through the ",(0,r.kt)("inlineCode",{parentName:"p"},"npmDependencies"),"\nstanza of a Flow catalog spec.\nFor example, ",(0,r.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"moment")," is a common library\nfor working with times:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"catalog.flow.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'npmDependencies:\n  moment: "^2.24"\n\ncollections: { ... }\n'))),(0,r.kt)(i.Z,{value:"catalog.flow.ts",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as moment from 'moment';\n\n// ... use `moment` as per usual.\n")))),(0,r.kt)("p",null,"Use any version string understood by ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),",\nwhich can include local packages, GitHub repository commits, and more.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies"},"package.json documentation"),"."),(0,r.kt)("p",null,"During the catalog build process, Flow gathers NPM dependencies\nacross all catalog source files and patches them into the catalog's\nmanaged ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),".\nFlow organizes its generated TypeScript project structure\nfor a seamless editing experience out of the box with VS Code\nand other common editors."),(0,r.kt)("h2",{id:"import-paths"},"Import paths"),(0,r.kt)("p",null,"If a catalog source file ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.flow.yaml")," references a collection in ",(0,r.kt)("inlineCode",{parentName:"p"},"bar.flow.yaml"),",\nfor example as a target of a capture,\nthere must be an ",(0,r.kt)("em",{parentName:"p"},"import path")," where either ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.flow.yaml"),"\nimports ",(0,r.kt)("inlineCode",{parentName:"p"},"bar.flow.yaml")," or vice versa."),(0,r.kt)("p",null,"Import paths can be direct:"),(0,r.kt)(s.Z,{chart:"\n\tgraph LR;\n\t\tfoo.flow.yaml--\x3ebar.flow.yaml;\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"Or they can be indirect:"),(0,r.kt)(s.Z,{chart:"\n\tgraph LR;\n\t\tbar.flow.yaml--\x3eother.flow.yaml;\n        other.flow.yaml--\x3efoo.flow.yaml;\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"The sources must still have an import path\neven if referenced from a common parent.\nThe following would ",(0,r.kt)("strong",{parentName:"p"},"not")," work:"),(0,r.kt)(s.Z,{chart:"\n\tgraph LR;\n\t\tparent.flow.yaml--\x3efoo.flow.yaml;\n\t\tparent.flow.yaml--\x3ebar.flow.yaml;\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"These rules make your catalog sources more self-contained\nand less brittle to refactoring and reorganization.\nConsider what might otherwise happen if ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.flow.yaml"),"\nwere imported in another project without ",(0,r.kt)("inlineCode",{parentName:"p"},"bar.flow.yaml"),"."))}f.isMDXComponent=!0}}]);
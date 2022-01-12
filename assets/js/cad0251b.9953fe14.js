"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6793],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={description:"Using conditionals statements to fine-tune reductions"},c="Composing with conditionals",u={unversionedId:"reference/reduction-strategies/composing-with-conditionals",id:"reference/reduction-strategies/composing-with-conditionals",title:"Composing with conditionals",description:"Using conditionals statements to fine-tune reductions",source:"@site/docs/reference/reduction-strategies/composing-with-conditionals.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/composing-with-conditionals",permalink:"/reference/reduction-strategies/composing-with-conditionals",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/composing-with-conditionals.md",tags:[],version:"current",frontMatter:{description:"Using conditionals statements to fine-tune reductions"},sidebar:"tutorialSidebar",previous:{title:"append",permalink:"/reference/reduction-strategies/append"},next:{title:"firstWriteWins and lastWriteWins",permalink:"/reference/reduction-strategies/firstwritewins-and-lastwritewins"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"composing-with-conditionals"},"Composing with conditionals"),(0,i.kt)("p",null,"Reduction strategies are JSON Schema ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.7.7"},"annotations"),", and as such their applicability at a given document location can be controlled through the use of ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/conditionals.html"},"conditional")," keywords within the schema like ",(0,i.kt)("inlineCode",{parentName:"p"},"oneOf")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"if/then/else"),". This means Flow\u2019s built-in strategies below can be combined with schema conditionals to construct a wider variety of custom reduction behaviors."),(0,i.kt)("p",null,"For example, here\u2019s a reset-able counter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/sum-reset\n    schema:\n      type: object\n      properties:\n        key: { type: string }\n        value: { type: number }\n      required: [key]\n      # Use oneOf to express a tagged union over "action".\n      oneOf:\n        # When action = reset, reduce by taking this document.\n        - properties: { action: { const: reset } }\n          reduce: { strategy: lastWriteWins }\n        # When action = sum, reduce by summing "value". Keep the LHS "action",\n        # preserving a LHS "reset", so that resets are properly associative.\n        - properties:\n            action:\n              const: sum\n              reduce: { strategy: firstWriteWins }\n            value: { reduce: { strategy: sum } }\n          reduce: { strategy: merge }\n    key: [/key]\n\ntests:\n  "Expect we can sum or reset numbers":\n    - ingest:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", action: sum, value: 5 }\n          - { key: "key", action: sum, value: -1.2 }\n    - verify:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", value: 3.8 }\n    - ingest:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", action: reset, value: 0 }\n          - { key: "key", action: sum, value: 1.3 }\n    - verify:\n        collection: example/reductions/sum-reset\n        documents:\n          - { key: "key", value: 1.3 }\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2011],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),y=a,m=p["".concat(c,".").concat(y)]||p[y]||u[y]||s;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={description:"Using the set reduction strategy"},c="set",l={unversionedId:"reference/reduction-strategies/set",id:"reference/reduction-strategies/set",title:"set",description:"Using the set reduction strategy",source:"@site/docs/reference/reduction-strategies/set.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/set",permalink:"/reference/reduction-strategies/set",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/set.md",tags:[],version:"current",frontMatter:{description:"Using the set reduction strategy"},sidebar:"tutorialSidebar",previous:{title:"minimize and maximize",permalink:"/reference/reduction-strategies/minimize-and-maximize"},next:{title:"sum",permalink:"/reference/reduction-strategies/sum"}},d=[],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"set"},"set"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"set")," interprets the document location as an update to a set."),(0,s.kt)("p",null,"The location must be an object having only \u201cadd\u201d, \u201cintersect\u201d, and \u201cremove\u201d properties. Any single \u201cadd\u201d, \u201cintersect\u201d, or \u201cremove\u201d is always allowed."),(0,s.kt)("p",null,"A document with \u201cintersect\u201d and \u201cadd\u201d is allowed, and is interpreted as applying the intersection to the LHS set, followed by a union with the additions."),(0,s.kt)("p",null,"A document with \u201cremove\u201d and \u201cadd\u201d is also allowed, and is interpreted as applying the removals to the base set, followed by a union with the additions."),(0,s.kt)("p",null,"\u201cremove\u201d and \u201cintersect\u201d within the same document are prohibited."),(0,s.kt)("p",null,"Set additions are deeply merged. This makes sets behave like associative maps, where the \u201cvalue\u201d of a set member can be updated by adding it to set again, with a reducible update."),(0,s.kt)("p",null,"Sets may be objects, in which case the object property serves as the set item key:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/set\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sets are always represented as an object.\n          type: object\n          reduce: { strategy: set }\n          # Schema for "add", "intersect", and "remove" properties\n          # (each a map of keys and their associated sums):\n          additionalProperties:\n            type: object\n            additionalProperties:\n              type: number\n              reduce: { strategy: sum }\n            # Flow requires that all parents of locations with a reduce\n            # annotation also have one themselves.\n            # This strategy therefore must (currently) be here, but is ignored.\n            reduce: { strategy: lastWriteWins }\n\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can apply set operations to incrementally build associative maps":\n    - ingest:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 1, "b": 1, "c": 1 } } }\n          - { key: "key", value: { "remove": { "b": 0 } } }\n          - { key: "key", value: { "add": { "a": 1, "d": 1 } } }\n    - verify:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 2, "c": 1, "d": 1 } } }\n    - ingest:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "intersect": { "a": 0, "d": 0 } } }\n          - { key: "key", value: { "add": { "a": 1, "e": 1 } } }\n    - verify:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 3, "d": 1, "e": 1 } } }\n')),(0,s.kt)("p",null,"Sets can also be sorted arrays, which are ordered using a provide ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," extractor. Keys are given as one or more JSON pointers, each relative to the item. As with ",(0,s.kt)("inlineCode",{parentName:"p"},"merge"),", arrays must be pre-sorted and de-duplicated by the key, and set reductions always maintain this invariant."),(0,s.kt)("p",null,"Use a key extractor of ",(0,s.kt)("inlineCode",{parentName:"p"},"[\u201c\u201d]")," to apply the natural ordering of scalar values."),(0,s.kt)("p",null,"Whether array or object types are used, the type must always be consistent across the \u201cadd\u201d / \u201cintersect\u201d / \u201cremove\u201d terms of both sides of the reduction."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/set-array\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sets are always represented as an object.\n          type: object\n          reduce:\n            strategy: set\n            key: [/0]\n          # Schema for "add", "intersect", & "remove" properties\n          # (each a sorted array of [key, sum] 2-tuples):\n          additionalProperties:\n            type: array\n            # Flow requires that all parents of locations with a reduce\n            # annotation also have one themselves.\n            # This strategy therefore must (currently) be here, but is ignored.\n            reduce: { strategy: lastWriteWins }\n            # Schema for contained [key, sum] 2-tuples:\n            items:\n              type: array\n              items:\n                - type: string\n                - type: number\n                  reduce: { strategy: sum }\n              reduce: { strategy: merge }\n\n      required: [key]\n    key: [/key]\n\ntests:\n  ? "Expect we can apply operations of sorted-array sets to incrementally build associative maps"\n  : - ingest:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 1], ["b", 1], ["c", 1]] } }\n          - { key: "key", value: { "remove": [["b", 0]] } }\n          - { key: "key", value: { "add": [["a", 1], ["d", 1]] } }\n    - verify:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 2], ["c", 1], ["d", 1]] } }\n    - ingest:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "intersect": [["a", 0], ["d", 0]] } }\n          - { key: "key", value: { "add": [["a", 1], ["e", 1]] } }\n    - verify:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 3], ["d", 1], ["e", 1]] } }\n')))}p.isMDXComponent=!0}}]);
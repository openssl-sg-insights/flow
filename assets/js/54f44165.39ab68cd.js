"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1,description:"Get set up to run Flow for local development."},s="Setting up a development environment",p={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Setting up a development environment",description:"Get set up to run Flow for local development.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Get set up to run Flow for local development."},sidebar:"tutorialSidebar",previous:{title:"Comparisons",permalink:"/overview/comparisons"},next:{title:"Flow tutorials",permalink:"/getting-started/flow-tutorials/"}},c=[{value:"Using GitHub Codespaces",id:"using-github-codespaces",children:[],level:2},{value:"Using Visual Studio Code locally",id:"using-visual-studio-code-locally",children:[{value:'Create a Git repository from the Flow Template <a href="#create-a-git-repository-from-the-flow-template" id="create-a-git-repository-from-the-flow-template"></a>',id:"create-a-git-repository-from-the-flow-template-",children:[],level:4},{value:'Open in VS Code <a href="#open-in-vs-code" id="open-in-vs-code"></a>',id:"open-in-vs-code-",children:[],level:4}],level:2},{value:"Test your environment",id:"test-your-environment",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-a-development-environment"},"Setting up a development environment"),(0,i.kt)("p",null,"Flow includes a ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},(0,i.kt)("strong",{parentName:"a"},"devcontainer")),", which provides a nice development experience using a self-contained Docker-based environment. This is an easy way to get a great development experience using Flow, with auto-completion and an ideal setup for your catalog. There are currently two ways to set this up: virtually, using GitHub Codespaces, and locally, using VS Code and Docker on your machine."),(0,i.kt)("h2",{id:"using-github-codespaces"},"Using GitHub Codespaces"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/features/codespaces"},"GitHub codespaces")," provides VM-backed, portable development environments that are ideal for getting started with Flow in minutes. Currently, Codespaces is available to GitHub Teams and Enterprise customers, as well as individuals enrolled in the beta. If you have access, this is the preferred method \u2014 setting up a devcontainer in Codespaces is much quicker than doing so locally."),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/estuary/flow-template"},"Flow Template repository"),", click ",(0,i.kt)("strong",{parentName:"p"},"Code"),", and choose ",(0,i.kt)("strong",{parentName:"p"},"New Codespace"),"."),(0,i.kt)("p",null,"The VM spins up within a minute or two, and you can immediately begin developing and testing. The template includes a PostgreSQL database for this purpose."),(0,i.kt)("h2",{id:"using-visual-studio-code-locally"},"Using Visual Studio Code locally"),(0,i.kt)("p",null,"If you don't have access to Codespaces, or prefer local development, use this method to create a local environment."),(0,i.kt)("p",null,"Download and install the following prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"VS Code")),(0,i.kt)("li",{parentName:"ul"},"VS Code ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/containers"},"Remote Containers extension"))),(0,i.kt)("h4",{id:"create-a-git-repository-from-the-flow-template-"},"Create a Git repository from the Flow Template ",(0,i.kt)("a",{href:"#create-a-git-repository-from-the-flow-template",id:"create-a-git-repository-from-the-flow-template"})),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/estuary/flow-template"},"Flow template repository")," on GitHub, click on ",(0,i.kt)("strong",{parentName:"p"},"Use this template"),", and proceed to create your repository."),(0,i.kt)("h4",{id:"open-in-vs-code-"},"Open in VS Code ",(0,i.kt)("a",{href:"#open-in-vs-code",id:"open-in-vs-code"})),(0,i.kt)("p",null,"Clone your repository locally and open it in VS Code. You'll see a popup in the lower right corner asking if you'd like to re-open the repository in a container. Click ",(0,i.kt)("strong",{parentName:"p"},"Re-open in container"),". It may take several minutes to download components and build the container."),(0,i.kt)("h2",{id:"test-your-environment"},"Test your environment"),(0,i.kt)("p",null,"Regardless of the method you used, first test everything is working as expected. The repository contains a sample project, which includes a test. (It also serves as a quick tutorial, which we recommend as a next step)."),(0,i.kt)("p",null,"In a terminal window, run: ",(0,i.kt)("inlineCode",{parentName:"p"},"$ flowctl test --source word-counts.flow.yaml"),". Verify that it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Ran 1 tests, 1 passed, 0 failed"),"."),(0,i.kt)("p",null,"You're now ready to start using Flow!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/getting-started/flow-tutorials/hello-flow"},"Proceed to the Flow introductory tutorial"),"."))}d.isMDXComponent=!0}}]);
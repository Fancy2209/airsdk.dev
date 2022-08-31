"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4387],{4137:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var a=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=d(i),h=o,m=y["".concat(s,".").concat(h)]||y[h]||c[h]||n;return i?a.createElement(m,r(r({ref:t},p),{},{components:i})):a.createElement(m,r({ref:t},p))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<n;d++)r[d]=i[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}y.displayName="MDXCreateElement"},3985:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=i(7462),o=(i(7294),i(4137));const n={title:"Adding display objects to the display list",sidebar_position:3},r=void 0,l={unversionedId:"development/display/display-programming/working-with-display-objects/adding-display-objects-to-the-display-list",id:"development/display/display-programming/working-with-display-objects/adding-display-objects-to-the-display-list",title:"Adding display objects to the display list",description:"When you instantiate a display object, it will not appear on-screen (on the Stage) until you add the display object instance to a display object container that is on the display list. For example, in the following code, the myText TextField object would not be visible if you omitted the last line of code. In the last line of code, the this keyword must refer to a display object container that is already added to the display list.",source:"@site/docs/development/display/display-programming/working-with-display-objects/adding-display-objects-to-the-display-list.md",sourceDirName:"development/display/display-programming/working-with-display-objects",slug:"/development/display/display-programming/working-with-display-objects/adding-display-objects-to-the-display-list",permalink:"/docs/development/display/display-programming/working-with-display-objects/adding-display-objects-to-the-display-list",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/working-with-display-objects/adding-display-objects-to-the-display-list.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Adding display objects to the display list",sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Properties and methods of the DisplayObject class",permalink:"/docs/development/display/display-programming/working-with-display-objects/properties-and-methods-of-the-displayobject-class"},next:{title:"Working with display object containers",permalink:"/docs/development/display/display-programming/working-with-display-objects/working-with-display-object-containers"}},s={},d=[],p={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you instantiate a display object, it will not appear on-screen (on the Stage) until you add the display object instance to a display object container that is on the display list. For example, in the following code, the ",(0,o.kt)("inlineCode",{parentName:"p"},"myText")," TextField object would not be visible if you omitted the last line of code. In the last line of code, the this keyword must refer to a display object container that is already added to the display list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'import flash.display.*;\nimport flash.text.TextField;\nvar myText:TextField = new TextField();\nmyText.text = "Buenos dias.";\nthis.addChild(myText);\n')),(0,o.kt)("p",null,"When you add any visual element to the Stage, that element becomes a ",(0,o.kt)("em",{parentName:"p"},"child")," of the Stage object. The first SWF file loaded in an application (for example, the one that you embed in an HTML page) is automatically added as a child of the Stage. It can be an object of any type that extends the Sprite class."),(0,o.kt)("p",null,"Any display objects that you create ",(0,o.kt)("em",{parentName:"p"},"without")," using ActionScript\u2014for example, by adding an MXML tag in a Flex MXML file or by placing an item on the Stage in Flash Professional\u2014are added to the display list. Although you do not add these display objects through ActionScript, you can access them through ActionScript. For example, the following code adjusts the width of an object named button1 that was added in the authoring tool (not through ActionScript):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"button1.width = 200;\n")))}c.isMDXComponent=!0}}]);
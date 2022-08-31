"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[6581],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(4137));const o={title:"Setting an opaque background color",sidebar_position:7},i=void 0,p={unversionedId:"development/display/display-programming/manipulating-display-objects/setting-an-opaque-background-color",id:"development/display/display-programming/manipulating-display-objects/setting-an-opaque-background-color",title:"Setting an opaque background color",description:"You can set an opaque background for a display object. For example, when your SWF has a background that contains complex vector art, you can set the opaqueBackground property to a specified color (typically the same color as the Stage). The color is specified as a number (commonly a hexadecimal color value). The background is then treated as a bitmap, which helps optimize performance.",source:"@site/docs/development/display/display-programming/manipulating-display-objects/setting-an-opaque-background-color.md",sourceDirName:"development/display/display-programming/manipulating-display-objects",slug:"/development/display/display-programming/manipulating-display-objects/setting-an-opaque-background-color",permalink:"/docs/development/display/display-programming/manipulating-display-objects/setting-an-opaque-background-color",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/manipulating-display-objects/setting-an-opaque-background-color.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Setting an opaque background color",sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Caching display objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/caching-display-objects"},next:{title:"Applying blending modes",permalink:"/docs/development/display/display-programming/manipulating-display-objects/applying-blending-modes"}},c={},l=[],s={toc:l};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can set an opaque background for a display object. For example, when your SWF has a background that contains complex vector art, you can set the opaqueBackground property to a specified color (typically the same color as the Stage). The color is specified as a number (commonly a hexadecimal color value). The background is then treated as a bitmap, which helps optimize performance."),(0,r.kt)("p",null,"When you set ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," , and also set the ",(0,r.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," property to a specified color, the ",(0,r.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," property allows the internal bitmap to be opaque and rendered faster. If you do not set ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheAsBitmap")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," , the ",(0,r.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," property adds an opaque vector-square shape to the background of the display object. It does not create a bitmap automatically."),(0,r.kt)("p",null,"The following example shows how to set the background of a display object to optimize performance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"myShape.cacheAsBitmap = true;\nmyShape.opaqueBackground = 0xFF0000;\n")),(0,r.kt)("p",null,"In this case, the background color of the Shape named myShape is set to red ( ",(0,r.kt)("inlineCode",{parentName:"p"},"0xFF0000")," ). Assuming the Shape instance contains a drawing of a green triangle, on a Stage with a white background, this would show up as a green triangle with red in the empty space in the Shape instance's bounding box (the rectangle that completely encloses the Shape)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Effect of setting opaqueBackground color",src:a(4698).Z,width:"117",height:"104"})),(0,r.kt)("p",null,"Of course, this code would make more sense if it were used with a Stage with a solid red background. On another colored background, that color would be specified instead. For example, in a SWF with a white background, the ",(0,r.kt)("inlineCode",{parentName:"p"},"opaqueBackground")," property would most likely be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0xFFFFFF")," , or pure white."))}m.isMDXComponent=!0},4698:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);
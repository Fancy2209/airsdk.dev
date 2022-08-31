"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[1413],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=d(o),u=i,g=f["".concat(l,".").concat(u)]||f[u]||s[u]||n;return o?r.createElement(g,p(p({ref:t},c),{},{components:o})):r.createElement(g,p({ref:t},c))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,p=new Array(n);p[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var d=2;d<n;d++)p[d]=o[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},5415:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var r=o(7462),i=(o(7294),o(4137));const n={title:"ADT Android application profiling options",sidebar_label:"Android application profiling",sidebar_position:4},p=void 0,a={unversionedId:"building/air-developer-tool/option-sets/android-application-profiling-options",id:"building/air-developer-tool/option-sets/android-application-profiling-options",title:"ADT Android application profiling options",description:"When the target of the package is apk-profile, the profiler options can be used to specify which preloaded SWF file to use for performance and memory profiling. The profiler options use the following syntax:",source:"@site/docs/building/air-developer-tool/option-sets/android-application-profiling-options.md",sourceDirName:"building/air-developer-tool/option-sets",slug:"/building/air-developer-tool/option-sets/android-application-profiling-options",permalink:"/docs/building/air-developer-tool/option-sets/android-application-profiling-options",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/option-sets/android-application-profiling-options.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"ADT Android application profiling options",sidebar_label:"Android application profiling",sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Debugger connection",permalink:"/docs/building/air-developer-tool/option-sets/debugger-connection-options"},next:{title:"Native extension",permalink:"/docs/building/air-developer-tool/option-sets/native-extension-options"}},l={},d=[{value:"<code>-preloadSWFPath</code>",id:"-preloadswfpath",level:3},{value:"<code>directory</code>",id:"directory",level:3}],c={toc:d};function s(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When the target of the package is ",(0,i.kt)("inlineCode",{parentName:"p"},"apk-profile"),", the profiler options can be used to specify which preloaded SWF file to use for performance and memory profiling. The profiler options use the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-preloadSWFPath directory\n")),(0,i.kt)("h3",{id:"-preloadswfpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"-preloadSWFPath")),(0,i.kt)("p",null,"If present, the app will attempt to find the preload SWF at the specified directory. If not specified, ADT includes the preload SWF file from the AIR SDK."),(0,i.kt)("h3",{id:"directory"},(0,i.kt)("inlineCode",{parentName:"h3"},"directory")),(0,i.kt)("p",null,"The directory containing the profiler preload SWF file."))}s.isMDXComponent=!0}}]);
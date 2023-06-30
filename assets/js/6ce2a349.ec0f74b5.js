"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[43],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),i=(n(7294),n(4137));const r={title:"ADT Native extension options",sidebar_label:"Native extension",sidebar_position:5},a=void 0,s={unversionedId:"building/air-developer-tool/option-sets/native-extension-options",id:"building/air-developer-tool/option-sets/native-extension-options",title:"ADT Native extension options",description:"The native extension options specify the options and files for packaging an ANE file for a native extension. Use these options with an ADT package command in which the -target option is ane.",source:"@site/docs/building/air-developer-tool/option-sets/native-extension-options.md",sourceDirName:"building/air-developer-tool/option-sets",slug:"/building/air-developer-tool/option-sets/native-extension-options",permalink:"/docs/building/air-developer-tool/option-sets/native-extension-options",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/option-sets/native-extension-options.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"ADT Native extension options",sidebar_label:"Native extension",sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Android application profiling",permalink:"/docs/building/air-developer-tool/option-sets/android-application-profiling-options"},next:{title:"ADT Error Messages",permalink:"/docs/building/air-developer-tool/error-messages"}},l={},p=[{value:"<code>extension-descriptor</code>",id:"extension-descriptor",level:3},{value:"<code>-swc</code>",id:"-swc",level:3},{value:"<code>-platform</code>",id:"-platform",level:3},{value:"<code>-platformoptions</code>",id:"-platformoptions",level:3},{value:"<code>FILE_OPTIONS</code>",id:"file_options",level:3}],c={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The native extension options specify the options and files for packaging an ANE file for a native extension. Use these options with an ADT package command in which the ",(0,i.kt)("inlineCode",{parentName:"p"},"-target")," option is ",(0,i.kt)("inlineCode",{parentName:"p"},"ane"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"extension-descriptor -swc swcPath \n  -platform platformName \n  -platformoptions path/platform.xml \n   FILE_OPTIONS\n")),(0,i.kt)("h3",{id:"extension-descriptor"},(0,i.kt)("inlineCode",{parentName:"h3"},"extension-descriptor")),(0,i.kt)("p",null,"The descriptor file for the native extension."),(0,i.kt)("h3",{id:"-swc"},(0,i.kt)("inlineCode",{parentName:"h3"},"-swc")),(0,i.kt)("p",null,"The SWC file containing the ActionScript code and resources for the native extension."),(0,i.kt)("h3",{id:"-platform"},(0,i.kt)("inlineCode",{parentName:"h3"},"-platform")),(0,i.kt)("p",null,"The name of the platform that this ANE file supports. You can include multiple -platform options, each with its own FILE_OPTIONS."),(0,i.kt)("h3",{id:"-platformoptions"},(0,i.kt)("inlineCode",{parentName:"h3"},"-platformoptions")),(0,i.kt)("p",null,"The path to a platform options (platform.xml) file. Use this file to specify non-default linker options, shared libraries, and third-party static libraries used by the extension. For more information and examples, see iOS native libraries."),(0,i.kt)("h3",{id:"file_options"},(0,i.kt)("inlineCode",{parentName:"h3"},"FILE_OPTIONS")),(0,i.kt)("p",null,"Identifies the native platform files to include in the package, such as static libraries to include in the native extension package. The file options are fully described in ",(0,i.kt)("a",{parentName:"p",href:"file-and-path-options"},"File and path options"),". (Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," option cannot be used when packaging an ANE file.)"))}f.isMDXComponent=!0}}]);
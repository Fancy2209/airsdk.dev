"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[728],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(4137));const r={title:"ADT commands",sidebar_label:"Overview",sidebar_position:1},o=void 0,l={unversionedId:"building/air-developer-tool/commands/index",id:"building/air-developer-tool/commands/index",title:"ADT commands",description:"The first argument passed to ADT specifies one of the following commands.",source:"@site/docs/building/air-developer-tool/commands/index.md",sourceDirName:"building/air-developer-tool/commands",slug:"/building/air-developer-tool/commands/",permalink:"/docs/building/air-developer-tool/commands/",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/air-developer-tool/commands/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"ADT commands",sidebar_label:"Overview",sidebar_position:1},sidebar:"mainSidebar",previous:{title:"About ADT",permalink:"/docs/building/air-developer-tool/"},next:{title:"package",permalink:"/docs/building/air-developer-tool/commands/package"}},p={},d=[],s={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The first argument passed to ADT specifies one of the following commands."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/package"},(0,i.kt)("inlineCode",{parentName:"a"},"-package"))," \u2014 packages an AIR application or AIR Native Extension (ANE).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/prepare"},(0,i.kt)("inlineCode",{parentName:"a"},"-prepare"))," \u2014 packages an AIR application as an intermediate file (AIRI), but does not sign it. AIRI files cannot be installed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/sign"},(0,i.kt)("inlineCode",{parentName:"a"},"-sign"))," \u2014 signs an AIRI package produced with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-prepare")," command. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-prepare")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-sign")," commands allow packaging and signing to be performed at different times. You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-sign")," command to sign or resign an ANE package.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/migrate"},(0,i.kt)("inlineCode",{parentName:"a"},"-migrate"))," \u2014 applies a migration signature to a signed AIR package, which allows you to use a new or renewed code signing certificate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/certificate"},(0,i.kt)("inlineCode",{parentName:"a"},"-certificate"))," \u2014 creates a self-signed digital code signing certificate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/checkstore"},(0,i.kt)("inlineCode",{parentName:"a"},"-checkstore"))," \u2014 verifies that a digital certificate in a keystore can be accessed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/installApp"},(0,i.kt)("inlineCode",{parentName:"a"},"-installApp"))," \u2014 installs an AIR application on a device or device emulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/launchApp"},(0,i.kt)("inlineCode",{parentName:"a"},"-launchApp"))," \u2014 launches an AIR application on a device or device emulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/appVersion"},(0,i.kt)("inlineCode",{parentName:"a"},"-appVersion"))," \u2014 reports the version of an AIR application currently installed on a device or device emulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/uninstallApp"},(0,i.kt)("inlineCode",{parentName:"a"},"-uninstallApp"))," \u2014 uninstalls an AIR application from a device or device emulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/installRuntime"},(0,i.kt)("inlineCode",{parentName:"a"},"-installRuntime"))," \u2014 installs the AIR runtime on a device or device emulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/runtimeVersion"},(0,i.kt)("inlineCode",{parentName:"a"},"-runtimeVersion"))," \u2014 reports the version of the AIR runtime currently installed on a device or device emulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/uninstallRuntime"},(0,i.kt)("inlineCode",{parentName:"a"},"-uninstallRuntime"))," \u2014 uninstalls the AIR runtime currently installed from a device or device emulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/version"},(0,i.kt)("inlineCode",{parentName:"a"},"-version"))," \u2014 reports the ADT version number.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/devices"},(0,i.kt)("inlineCode",{parentName:"a"},"-devices"))," \u2014 reports device information for connected mobile devices or emulators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/building/air-developer-tool/commands/help"},(0,i.kt)("inlineCode",{parentName:"a"},"-help"))," \u2014 displays the list of commands and options."))),(0,i.kt)("p",null,"Many ADT commands share related sets of option flags and parameters. These sets of option are described in detail separately:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/building/air-developer-tool/option-sets/code-signing-options"},"ADT code signing options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/building/air-developer-tool/option-sets/file-and-path-options"},"File and path options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/building/air-developer-tool/option-sets/debugger-connection-options"},"Debugger connection options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/building/air-developer-tool/option-sets/native-extension-options"},"Native extension options"))))}m.isMDXComponent=!0}}]);
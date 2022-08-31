"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[9571],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?i.createElement(f,a(a({ref:n},p),{},{components:t})):i.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(7462),r=(t(7294),t(4137));const o={title:"Application Descriptor File Structure"},a=void 0,l={unversionedId:"building/application-descriptor-files/file-structure",id:"building/application-descriptor-files/file-structure",title:"Application Descriptor File Structure",description:"The application descriptor file is an XML document with the following structure:",source:"@site/docs/building/application-descriptor-files/file-structure.md",sourceDirName:"building/application-descriptor-files",slug:"/building/application-descriptor-files/file-structure",permalink:"/docs/building/application-descriptor-files/file-structure",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/application-descriptor-files/file-structure.md",tags:[],version:"current",frontMatter:{title:"Application Descriptor File Structure"},sidebar:"mainSidebar",previous:{title:"windows",permalink:"/docs/building/application-descriptor-files/elements/windows"},next:{title:"Using native extensions",permalink:"/docs/building/using-native-extensions"}},s={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The application descriptor file is an XML document with the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<application xmlns="http://ns.adobe.com/air/application/33.1"> \n    <allowBrowserInvocation>...<allowBrowserInvocation> \n    <android> \n        <colorDepth>...</colorDepth> \n        <manifestAdditions \n                <manifest>...</manifest> \n            ]]> \n        </manifestAdditions \n    </android> \n    <copyright>...</copyright> \n    <customUpdateUI>...</customUpdateUI> \n    <description> \n        <text xml:lang="...">...</text> \n    </description> \n    <extensions> \n        <extensionID>...</extensionID> \n    </extensions> \n    <filename>...</filename> \n    <fileTypes> \n        <fileType> \n            <contentType>...</contentType> \n            <description>...</description> \n            <extension>...</extension> \n            <icon> \n                <imageNxN>...</imageNxN> \n            </icon> \n            <name>...</name> \n        </fileType> \n    </fileTypes> \n    <icon> \n        <imageNxN>...</imageNxN> \n    </icon> \n    <id>...</id> \n    <initialWindow> \n        <aspectRatio>...</aspectRatio> \n        <autoOrients>...</autoOrients> \n        <content>...</content> \n        <depthAndStencil>...</depthAndStencil> \n        <fullScreen>...</fullScreen> \n        <height>...</height> \n        <maximizable>...</maximizable> \n        <maxSize>...</maxSize> \n        <minimizable>...</minimizable> \n        <minSize>...</minSize> \n        <renderMode>...</renderMode> \n        <requestedDisplayResolution>...</requestedDisplayResolution> \n        <resizable>...</resizable> \n        <softKeyboardBehavior>...</softKeyboardBehavior> \n        <systemChrome>...</systemChrome> \n        <title>...</title> \n        <transparent>...</transparent> \n        <visible>...</visible> \n        <width>...</width> \n        <x>...</x> \n        <y>...</y> \n    </initialWindow> \n    <installFolder>...</installFolder> \n    <iPhone> \n        <Entitlements>...</Entitlements> \n        <InfoAdditions>...</InfoAdditions> \n        <requestedDisplayResolution>...</requestedDisplayResolution> \n        <forceCPURenderModeForDevices>...</forceCPURenderModeForDevices> \n        <externalSwfs>...</externalSwfs> \n    </iPhone> \n    <name> \n        <text xml:lang="...">...</text> \n    </name> \n    <programMenuFolder>...</programMenuFolder> \n    <publisherID>...</publisherID> \n    <supportedLanguages>...</supportedLanguages> \n    <supportedProfiles>...</supportedProfiles> \n    <versionNumber>...</versionNumber> \n    <versionLabel>...</versionLabel> \n</application>\n')))}d.isMDXComponent=!0}}]);
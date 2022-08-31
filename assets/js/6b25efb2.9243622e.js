"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[1927],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return t?i.createElement(k,o(o({ref:n},p),{},{components:t})):i.createElement(k,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=t(7462),a=(t(7294),t(4137));const l={title:"Android Elements",sidebar_label:"android",sidebar_position:5},o=void 0,r={unversionedId:"building/application-descriptor-files/elements/android",id:"building/application-descriptor-files/elements/android",title:"Android Elements",description:"The android element provides platform-specific settings for applications running on Android devices. It can contain the following optional elements.",source:"@site/docs/building/application-descriptor-files/elements/android.md",sourceDirName:"building/application-descriptor-files/elements",slug:"/building/application-descriptor-files/elements/android",permalink:"/docs/building/application-descriptor-files/elements/android",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/building/application-descriptor-files/elements/android.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Android Elements",sidebar_label:"android",sidebar_position:5},sidebar:"mainSidebar",previous:{title:"iPhone",permalink:"/docs/building/application-descriptor-files/elements/iPhone"},next:{title:"macOS",permalink:"/docs/building/application-descriptor-files/elements/macOS"}},d={},s=[{value:"Elements",id:"elements",level:2},{value:"<code>colorDepth</code>",id:"colordepth",level:3},{value:"Example",id:"example",level:4},{value:"<code>containsVideo</code>",id:"containsvideo",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>webContentsDebuggingEnabled</code>",id:"webcontentsdebuggingenabled",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>assetPacks</code>",id:"assetpacks",level:3},{value:"<code>manifestAdditions</code>",id:"manifestadditions",level:3},{value:"Details",id:"details",level:4},{value:"Example",id:"example-3",level:4},{value:"Restrictions",id:"restrictions",level:4},{value:"<code>BuildLegacyAPK</code>",id:"buildlegacyapk",level:3},{value:"Example",id:"example-4",level:4}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"android")," element provides platform-specific settings for applications running on Android devices. It can contain the following optional elements."),(0,a.kt)("h2",{id:"elements"},"Elements"),(0,a.kt)("h3",{id:"colordepth"},(0,a.kt)("inlineCode",{parentName:"h3"},"colorDepth")),(0,a.kt)("p",null,"The bit-depth of color to use when rendering on Android devices. By default this is ",(0,a.kt)("inlineCode",{parentName:"p"},"32bit")," but can be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"16bit")," as long as there is no use of ",(0,a.kt)("inlineCode",{parentName:"p"},"StageVideo")," in an application."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<android>\n    <colorDepth>16bit</colorDepth>\n    <manifestAdditions>...</manifestAdditions>\n</android>\n")),(0,a.kt)("h3",{id:"containsvideo"},(0,a.kt)("inlineCode",{parentName:"h3"},"containsVideo")),(0,a.kt)("p",null,"Specifies whether the application will contain any video content or not. This is used to determine whether to create a graphical surface for ",(0,a.kt)("inlineCode",{parentName:"p"},"StageVideo")," content in the application."),(0,a.kt)("p",null,"One of the following values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<android>\n    <containsVideo>true</containsVideo>\n    <manifestAdditions>...</manifestAdditions>\n</android>\n")),(0,a.kt)("h3",{id:"webcontentsdebuggingenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"webContentsDebuggingEnabled")),(0,a.kt)("p",null,"Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"StageWebView")," debugging, so that developers can debug web content (HTML / CSS / JavaScript) used in AIR Android applications."),(0,a.kt)("p",null,"To perform the debugging, connect your Android device to your machine via USB cable and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://inspect")," to debug embedded web content in your AIR application."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<android>\n    <webContentsDebuggingEnabled>true</webContentsDebuggingEnabled>\n    <manifestAdditions>...</manifestAdditions>\n</android>\n")),(0,a.kt)("h3",{id:"assetpacks"},(0,a.kt)("inlineCode",{parentName:"h3"},"assetPacks")),(0,a.kt)("p",null,"This section contains a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"assetPack")," entries that define folders that should be packaged up for use by Android's Play Asset Delivery mechanism."),(0,a.kt)("p",null,"Each asset pack item has attributes to provide an ID value (used to retrieve the asset pack from the Android application at runtime); a delivery mechanism (one of ",(0,a.kt)("inlineCode",{parentName:"p"},"on-demand"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fast-follow"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"install-time"),"); and a folder name. The contents of this folder will then be packaged into the asset pack rather than included in the main part of the App Bundle."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<android>\n    <assetPacks>\n        <assetPack id="my_asset_pack1" delivery="on-demand" folder="assetpack1"/>\n    </assetPacks>\n</android>\n')),(0,a.kt)("h3",{id:"manifestadditions"},(0,a.kt)("inlineCode",{parentName:"h3"},"manifestAdditions")),(0,a.kt)("p",null,"Contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"CDATA")," block of text that provides additional settings to be added to the generated Android application's manifest file (AndroidManifest.xml)."),(0,a.kt)("h4",{id:"details"},"Details"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"manifestAdditions")," element contains XML that will be injected into the AndroidManifest.xml file. It must contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest")," element where attributes and child elements can be specified subject to a set of rules and restrictions."),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<android>\n  <manifestAdditions>\n    <![CDATA[\n      <manifest android:sharedUserID="1001">\n        <uses-permission android:name="android.permission.CAMERA"/>\n        <uses-feature android:required="false" android:name="android.hardware.camera"/>\n        <application  android:allowClearUserData="true"\n                      android:enabled="true"\n                      android:persistent="true">\n          <meta-data android:name="android.max_aspect" android:value="2.16" />\n        </application>\n      </manifest>\n    ]]>\n  </manifestAdditions>\n</android>\n')),(0,a.kt)("h4",{id:"restrictions"},"Restrictions"),(0,a.kt)("p",null,"AIR sets several manifest entries in the generated Android manifest document to ensure that application and runtime features work correctly. You cannot override the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You cannot set the following attributes of the ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest")," element:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:versionCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:versionName")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You cannot set the following attributes for the main ",(0,a.kt)("inlineCode",{parentName:"p"},"activity")," element:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:label")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:icon")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You cannot set the following attributes of the ",(0,a.kt)("inlineCode",{parentName:"p"},"application")," element:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:theme")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:label")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:windowSoftInputMode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:configChanges")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:screenOrientation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"android:launchMode"))))),(0,a.kt)("h3",{id:"buildlegacyapk"},(0,a.kt)("inlineCode",{parentName:"h3"},"BuildLegacyAPK")),(0,a.kt)("p",null,"(optional)"),(0,a.kt)("p",null,"Available: 33.1.1.698"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," then ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," will use the legacy build process to create an APK. The current process uses Android build tools and Gradle to create AAB and APK outputs. Setting this value to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," will utilise the legacy Java build process for packaging an APK. It will not affect the AAB process. "),(0,a.kt)("p",null,"The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", which will use the modern Gradle build process."),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<android>\n    <manifestAdditions></manifestAdditions>\n    <BuildLegacyAPK>true</BuildLegacyAPK>\n</android>\n")))}c.isMDXComponent=!0}}]);
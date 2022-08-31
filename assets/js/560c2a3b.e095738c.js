"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[9770],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={title:"Initializing XML variables",sidebar_position:6},o=void 0,l={unversionedId:"development/core-actionscript-classes/working-with-xml/initialising-xml-variables",id:"development/core-actionscript-classes/working-with-xml/initialising-xml-variables",title:"Initializing XML variables",description:"You can assign an XML literal to an XML object, as follows:",source:"@site/docs/development/core-actionscript-classes/working-with-xml/initialising-xml-variables.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/initialising-xml-variables",permalink:"/docs/development/core-actionscript-classes/working-with-xml/initialising-xml-variables",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/initialising-xml-variables.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Initializing XML variables",sidebar_position:6},sidebar:"mainSidebar",previous:{title:"XMLList objects",permalink:"/docs/development/core-actionscript-classes/working-with-xml/xmllist-objects"},next:{title:"Assembling and transforming XML objects",permalink:"/docs/development/core-actionscript-classes/working-with-xml/assembling-and-transforming-xml-objects"}},s={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can assign an XML literal to an XML object, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"var myXML:XML =\n    <order>\n        <item id='1'>\n            <menuName>burger</menuName>\n            <price>3.95</price>\n        </item>\n        <item id='2'>\n            <menuName>fries</menuName>\n            <price>1.45</price>\n        </item>\n    </order>\n")),(0,a.kt)("p",null,"As the following snippet shows, you can also use the new constructor to create an instance of an XML object from a string that contains XML data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var str:String = "<order><item id=\'1\'><menuName>burger</menuName>" + "<price>3.95</price></item></order>";\nvar myXML:XML = new XML(str);\n')),(0,a.kt)("p",null,"If the XML data in the string is not well formed (for example, if a closing tag is missing), you will see a run-time error."),(0,a.kt)("p",null,"You can also pass data by reference (from other variables) into an XML object, as the following example shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'var tagname:String = "item";\nvar attributename:String = "id";\nvar attributevalue:String = "5";\nvar content:String = "Chicken";\nvar x:XML = <{tagname} {attributename}={attributevalue}>{content}</{tagname}>;\ntrace(x.toXMLString())\n// Output: <item id="5">Chicken</item>\n')),(0,a.kt)("p",null,"To load XML data from a URL, use the URLLoader class, as the following example shows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'import flash.events.Event;\nimport flash.net.URLLoader;\nimport flash.net.URLRequest;\n\nvar externalXML:XML;\nvar loader:URLLoader = new URLLoader();\nvar request:URLRequest = new URLRequest("xmlFile.xml");\nloader.load(request);\nloader.addEventListener(Event.COMPLETE, onComplete);\n\nfunction onComplete(event:Event):void\n{\n    var loader:URLLoader = event.target as URLLoader;\n    if (loader != null)\n    {\n        externalXML = new XML(loader.data);\n        trace(externalXML.toXMLString());\n    }\n    else\n    {\n        trace("loader is not a URLLoader!");\n    }\n}\n')),(0,a.kt)("p",null,"To read XML data from a socket connection, use the XMLSocket class. For more information, see the XMLSocket class in the ",(0,a.kt)("a",{parentName:"p",href:"http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),"."))}p.isMDXComponent=!0}}]);
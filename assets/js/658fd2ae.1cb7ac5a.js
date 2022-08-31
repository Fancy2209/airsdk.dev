"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[2720],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=s,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(7462),s=(n(7294),n(4137));const r={title:"Using XML namespaces",sidebar_position:9},o=void 0,p={unversionedId:"development/core-actionscript-classes/working-with-xml/using-xml-namespaces",id:"development/core-actionscript-classes/working-with-xml/using-xml-namespaces",title:"Using XML namespaces",description:"Namespaces in an XML object (or document) identify the type of data that the object contains. For example, in sending and delivering XML data to a web service that uses the SOAP messaging protocol, you declare the namespace in the opening tag of the XML:",source:"@site/docs/development/core-actionscript-classes/working-with-xml/using-xml-namespaces.md",sourceDirName:"development/core-actionscript-classes/working-with-xml",slug:"/development/core-actionscript-classes/working-with-xml/using-xml-namespaces",permalink:"/docs/development/core-actionscript-classes/working-with-xml/using-xml-namespaces",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/working-with-xml/using-xml-namespaces.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Using XML namespaces",sidebar_position:9},sidebar:"mainSidebar",previous:{title:"Traversing XML structures",permalink:"/docs/development/core-actionscript-classes/working-with-xml/traversing-xml-structures"},next:{title:"XML type conversion",permalink:"/docs/development/core-actionscript-classes/working-with-xml/xml-type-conversion"}},i={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Namespaces in an XML object (or document) identify the type of data that the object contains. For example, in sending and delivering XML data to a web service that uses the SOAP messaging protocol, you declare the namespace in the opening tag of the XML:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-actionscript"},'var message:XML =\n    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\n    soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">\n        <soap:Body xmlns:w="http://www.test.com/weather/">\n            <w:getWeatherResponse>\n                <w:tempurature >78</w:tempurature>\n            </w:getWeatherResponse>\n        </soap:Body>\n    </soap:Envelope>;\n')),(0,s.kt)("p",null,"The namespace has a prefix, soap , and a URI that defines the namespace, ",(0,s.kt)("a",{parentName:"p",href:"http://schemas.xmlsoap.org/soap/envelope/"},"http://schemas.xmlsoap.org/soap/envelope/")," ."),(0,s.kt)("p",null,"ActionScript 3.0 includes the Namespace class for working with XML namespaces. For the XML object in the previous example, you can use the Namespace class as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-actionscript"},'var soapNS:Namespace = message.namespace("soap");\ntrace(soapNS); // Output: http://schemas.xmlsoap.org/soap/envelope/\n\nvar wNS:Namespace = new Namespace("w", "http://www.test.com/weather/");\nmessage.addNamespace(wNS);\nvar encodingStyle:XMLList = message.@soapNS::encodingStyle;\nvar body:XMLList = message.soapNS::Body;\n\nmessage.soapNS::Body.wNS::GetWeatherResponse.wNS::tempurature = "78";\n')),(0,s.kt)("p",null,"The XML class includes the following methods for working with namespaces: ",(0,s.kt)("inlineCode",{parentName:"p"},"addNamespace()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"inScopeNamespaces()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"localName()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"name()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"namespaceDeclarations()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"removeNamespace()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"setLocalName()")," , ",(0,s.kt)("inlineCode",{parentName:"p"},"setName()")," , and ",(0,s.kt)("inlineCode",{parentName:"p"},"setNamespace()")," ."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," ",(0,s.kt)("inlineCode",{parentName:"p"},"xml")," ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace")," directive lets you assign a default namespace for XML objects. For example, in the following, both ",(0,s.kt)("inlineCode",{parentName:"p"},"x1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"x2")," have the same default namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-actionscript"},'var ns1:Namespace = new Namespace("http://www.example.com/namespaces/");\ndefault xml namespace = ns1;\nvar x1:XML = <test1 />;\nvar x2:XML = <test2 />;\n')))}m.isMDXComponent=!0}}]);
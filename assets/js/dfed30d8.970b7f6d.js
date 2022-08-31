"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[2992],{4137:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>h});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return t?n.createElement(u,s(s({ref:o},p),{},{components:t})):n.createElement(u,s({ref:o},p))}));function h(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5070:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(4137));const r={title:"Adjusting DisplayObject colors",sidebar_position:9},s=void 0,i={unversionedId:"development/display/display-programming/manipulating-display-objects/adjusting-displayobject-colors",id:"development/display/display-programming/manipulating-display-objects/adjusting-displayobject-colors",title:"Adjusting DisplayObject colors",description:"You can use the methods of the ColorTransform class (flash.geom.ColorTransform) to adjust the color of a display object. Each display object has a transform property, which is an instance of the Transform class, and contains information about various transformations that are applied to the display object (such as rotation, changes in scale or position, and so forth). In addition to its information about geometric transformations, the Transform class also includes a colorTransform property, which is an instance of the ColorTransform class, and provides access to make color adjustments to the display object. To access the color transformation information of a display object, you can use code such as this:",source:"@site/docs/development/display/display-programming/manipulating-display-objects/adjusting-displayobject-colors.md",sourceDirName:"development/display/display-programming/manipulating-display-objects",slug:"/development/display/display-programming/manipulating-display-objects/adjusting-displayobject-colors",permalink:"/docs/development/display/display-programming/manipulating-display-objects/adjusting-displayobject-colors",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/display-programming/manipulating-display-objects/adjusting-displayobject-colors.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Adjusting DisplayObject colors",sidebar_position:9},sidebar:"mainSidebar",previous:{title:"Applying blending modes",permalink:"/docs/development/display/display-programming/manipulating-display-objects/applying-blending-modes"},next:{title:"Rotating objects",permalink:"/docs/development/display/display-programming/manipulating-display-objects/rotating-objects"}},l={},c=[{value:"Setting color values with code",id:"setting-color-values-with-code",level:2},{value:"Altering color and brightness effects with code",id:"altering-color-and-brightness-effects-with-code",level:2}],p={toc:c};function d(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorTransform")," class (",(0,a.kt)("inlineCode",{parentName:"p"},"flash.geom.ColorTransform"),") to adjust the color of a display object. Each display object has a ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," property, which is an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Transform")," class, and contains information about various transformations that are applied to the display object (such as rotation, changes in scale or position, and so forth). In addition to its information about geometric transformations, the Transform class also includes a colorTransform property, which is an instance of the ColorTransform class, and provides access to make color adjustments to the display object. To access the color transformation information of a display object, you can use code such as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"var colorInfo:ColorTransform = myDisplayObject.transform.colorTransform;\n")),(0,a.kt)("p",null,"Once you\u2019ve created a ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorTransform")," instance, you can read its property values to find out what color transformations have already been applied, or you can set those values to make color changes to the display object. To update the display object after any changes, you must reassign the ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorTransform")," instance back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"transform.colorTransform")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"var colorInfo:ColorTransform = myDisplayObject.transform.colorTransform;\n\n// Make some color transformations here.\n\n// Commit the change.\nmyDisplayObject.transform.colorTransform = colorInfo;\n")),(0,a.kt)("h2",{id:"setting-color-values-with-code"},"Setting color values with code"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property of the ColorTransform class can be used to assign a specific red, green, blue (RGB) color value to the display object. The following example uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property to change the color of the display object named square to blue, when the user clicks a button named blueBtn :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},"// square is a display object on the Stage.\n// blueBtn, redBtn, greenBtn, and blackBtn are buttons on the Stage.\n\nimport flash.events.MouseEvent;\nimport flash.geom.ColorTransform;\n\n// Get access to the ColorTransform instance associated with square.\nvar colorInfo:ColorTransform = square.transform.colorTransform;\n\n// This function is called when blueBtn is clicked.\nfunction makeBlue(event:MouseEvent):void\n{\n    // Set the color of the ColorTransform object.\n    colorInfo.color = 0x003399;\n    // apply the change to the display object\n    square.transform.colorTransform = colorInfo;\n}\n\nblueBtn.addEventListener(MouseEvent.CLICK, makeBlue);\n")),(0,a.kt)("p",null,"Note that when you change a display object\u2019s color using the color property, it completely changes the color of the entire object, regardless of whether the object previously had multiple colors. For example, if there is a display object containing a green circle with black text on top, setting the color property of that object\u2019s associated ColorTransform instance to a shade of red will make the entire object, circle and text, turn red (so the text will no longer be distinguishable from the rest of the object)."),(0,a.kt)("h2",{id:"altering-color-and-brightness-effects-with-code"},"Altering color and brightness effects with code"),(0,a.kt)("p",null,"Suppose you have a display object with multiple colors (for example, a digital photo) and you don\u2019t want to completely recolor the object; you just want to adjust the color of a display object based on the existing colors. In this scenario, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorTransform")," class includes a series of multiplier and offset properties that you can use to make this type of adjustment. The multiplier properties, named ",(0,a.kt)("inlineCode",{parentName:"p"},"redMultiplier")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"greenMultiplier")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"blueMultiplier")," , and ",(0,a.kt)("inlineCode",{parentName:"p"},"alphaMultiplier")," , work like colored photographic filters (or colored sunglasses), amplifying or diminishing certain colors in the display object. The offset properties ( ",(0,a.kt)("inlineCode",{parentName:"p"},"redOffset")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"greenOffset")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"blueOffset")," , and ",(0,a.kt)("inlineCode",{parentName:"p"},"alphaOffset")," ) can be used to add extra amounts of a certain color to the object, or to specify the minimum value that a particular color can have."),(0,a.kt)("p",null,"These multiplier and offset properties are identical to the advanced color settings that are available for movie clip symbols in the Flash authoring tool when you choose Advanced from the Color pop-up menu on the Property inspector."),(0,a.kt)("p",null,"The following code loads a JPEG image and applies a color transformation to it, which adjusts the red and green channels as the mouse pointer moves along the x axis and y axis. In this case, because no offset values are specified, the color value of each color channel displayed on screen will be a percentage of the original color value in the image\u2014meaning that the most red or green displayed in any given pixel will be the original amount of red or green in that pixel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-actionscript"},'import flash.display.Loader;\nimport flash.events.MouseEvent;\nimport flash.geom.Transform;\nimport flash.geom.ColorTransform;\nimport flash.net.URLRequest;\n\n// Load an image onto the Stage.\nvar loader:Loader = new Loader();\nvar url:URLRequest = new URLRequest("http://www.helpexamples.com/flash/images/image1.jpg");\nloader.load(url);\nthis.addChild(loader);\n\n// This function is called when the mouse moves over the loaded image.\nfunction adjustColor(event:MouseEvent):void\n{\n    // Access the ColorTransform object for the Loader (containing the image)\n    var colorTransformer:ColorTransform = loader.transform.colorTransform;\n\n    // Set the red and green multipliers according to the mouse position.\n    // The red value ranges from 0% (no red) when the cursor is at the left\n    // to 100% red (normal image appearance) when the cursor is at the right.\n    // The same applies to the green channel, except it\'s controlled by the\n    // position of the mouse in the y axis.\n    colorTransformer.redMultiplier = (loader.mouseX / loader.width) * 1;\n    colorTransformer.greenMultiplier = (loader.mouseY / loader.height) * 1;\n\n    // Apply the changes to the display object.\n    loader.transform.colorTransform = colorTransformer;\n\n}\n\nloader.addEventListener(MouseEvent.MOUSE_MOVE, adjustColor);\n')))}d.isMDXComponent=!0}}]);
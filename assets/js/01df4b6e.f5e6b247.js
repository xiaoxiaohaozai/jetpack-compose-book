"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[640],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7187:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return b}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t.p+"assets/images/image-b442de16a7a566bd34fbe2e04eb3449c.png",l=t.p+"assets/images/demo-9e714aea57168cb26e44bef7ac6031d9.gif",p=t.p+"assets/images/image2-6a42d228e26877777c2b36c8a19048d8.png",c=t.p+"assets/images/demo2-39fdfeea4ec964ba44b9fa4a58c02ad2.gif",m=t.p+"assets/images/image3-8a7baeab4d0a9a483838ec2eb1351cf9.png",s=t.p+"assets/images/image4-2068ca93a8a6c0898c517c1732fb6016.png",u=t.p+"assets/images/image5-682b60337c8897718227f0c5a2cfaa11.png",d=["components"],g={title:"Image"},k=void 0,f={unversionedId:"elements/image",id:"elements/image",title:"Image",description:"!!! \u6ce8\u610f",source:"@site/docs/elements/image.mdx",sourceDirName:"elements",slug:"/elements/image",permalink:"/docs/elements/image",editUrl:"https://github.com/compose-museum/hello-compose/tree/master/docs/docs/elements/image.mdx",tags:[],version:"current",frontMatter:{title:"Image"},sidebar:"docs",previous:{title:"IconButton",permalink:"/docs/elements/iconbutton"},next:{title:"Slider",permalink:"/docs/elements/slider"}},b=[{value:"1. \u56fe\u7247\u5927\u5c0f",id:"1-\u56fe\u7247\u5927\u5c0f",children:[],level:2},{value:"2. \u56fe\u7247\u5f62\u72b6",id:"2-\u56fe\u7247\u5f62\u72b6",children:[],level:2},{value:"3. \u56fe\u50cf\u8fb9\u6846",id:"3-\u56fe\u50cf\u8fb9\u6846",children:[],level:2},{value:"4. \u4f7f\u7528 Coil \u6765\u52a8\u6001\u52a0\u8f7d\u56fe\u7247",id:"4-\u4f7f\u7528-coil-\u6765\u52a8\u6001\u52a0\u8f7d\u56fe\u7247",children:[{value:"\u52a0\u8f7d Svg \u56fe\u50cf",id:"\u52a0\u8f7d-svg-\u56fe\u50cf",children:[],level:3},{value:"\u653e\u5927\u7f29\u5c0f Svg \u56fe\u50cf\u6587\u4ef6",id:"\u653e\u5927\u7f29\u5c0f-svg-\u56fe\u50cf\u6587\u4ef6",children:[],level:3}],level:2},{value:"5. \u66f4\u591a",id:"5-\u66f4\u591a",children:[],level:2}],v={toc:b};function h(e){var n=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun Image(\n    painter: Painter,\n    contentDescription: String?,\n    modifier: Modifier = Modifier,\n    alignment: Alignment = Alignment.Center,\n    contentScale: ContentScale = ContentScale.Fit,\n    alpha: Float = DefaultAlpha,\n    colorFilter: ColorFilter? = null\n)\n")),(0,i.kt)("p",null,"!!! \u6ce8\u610f\n\u76ee\u524d\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Compose")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," \u6709\u4e09\u79cd\uff0c\u8be6\u60c5\u53ef\u5148\u5728",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/foundation/package-summary#image"},"\u5b98\u7f51"),"\u4e2d\u627e\u5230"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Image")," \u53ef\u4ee5\u5e2e\u6211\u4eec\u52a0\u8f7d\u4e00\u5f20\u56fe\u7247\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun ImageDemo() {\n\n    Image(\n        painter = painterResource(id = R.drawable.wallpaper),\n        contentDescription = null\n    )\n\n}\n")),(0,i.kt)("img",{src:o}),(0,i.kt)("h2",{id:"1-\u56fe\u7247\u5927\u5c0f"},"1. \u56fe\u7247\u5927\u5c0f"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Modifier.size()")," \u6765\u8bbe\u7f6e\u56fe\u7247\u5927\u5c0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun ImageDemo() {\n\n    Image(\n        painter = painterResource(id = R.drawable.wallpaper),\n        contentDescription = null,\n        modifier = Modifier.size(350.dp)\n    )\n\n}\n")),(0,i.kt)("img",{src:p}),(0,i.kt)("h2",{id:"2-\u56fe\u7247\u5f62\u72b6"},"2. \u56fe\u7247\u5f62\u72b6"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Surface")," \u6765\u5e2e\u52a9\u6211\u4eec\u8bbe\u7f6e\u5f62\u72b6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun ImageDemo() {\n\n    Surface(\n        shape = CircleShape\n    ) {\n        Image(\n            painter = painterResource(id = R.drawable.wallpaper),\n            contentDescription = null,\n            modifier = Modifier.size(350.dp)\n        )\n    }\n\n}\n")),(0,i.kt)("img",{src:m}),(0,i.kt)("p",null,"\u662f\u4e0d\u662f\u6709\u4e00\u70b9\u5c0f\u95ee\u9898\uff1f\u4f3c\u4e4e\u53ea\u6709\u5de6\u53f3\u4e24\u8fb9\u53d8\u6210\u4e86\u5706\u5f62\uff0c\u800c\u4e0a\u4e0b\u5e76\u6ca1\u6709\u3002"),(0,i.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," \u4e2d\u6e90\u7801\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"contentScale")," \u53c2\u6570\u9ed8\u8ba4\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"ContentScale.Fit"),"\uff0c"),(0,i.kt)("p",null,"\u4e5f\u5c31\u662f\u4fdd\u6301\u56fe\u7247\u7684\u5bbd\u9ad8\u6bd4\uff0c\u7f29\u5c0f\u5230\u53ef\u4ee5\u5b8c\u6574\u663e\u793a\u6574\u5f20\u56fe\u7247\u3002"),(0,i.kt)("p",null,"\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"ContentScale.Crop")," \u4e5f\u662f\u4fdd\u6301\u5bbd\u9ad8\u6bd4\uff0c\u4f46\u662f\u5c3d\u91cf\u8ba9\u5bbd\u5ea6",(0,i.kt)("strong",{parentName:"p"},"\u6216\u8005"),"\u9ad8\u5ea6\u5b8c\u6574\u7684\u5360\u6ee1\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"contentScale")," \u8bbe\u7f6e\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"ContentScale.Crop"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun ImageDemo() {\n\n    Surface(\n        shape = CircleShape\n    ) {\n        Image(\n            painter = painterResource(id = R.drawable.wallpaper),\n            contentDescription = null,\n            modifier = Modifier.size(350.dp),\n            contentScale = ContentScale.Crop\n        )\n    }\n\n}\n")),(0,i.kt)("img",{src:s}),(0,i.kt)("h2",{id:"3-\u56fe\u50cf\u8fb9\u6846"},"3. \u56fe\u50cf\u8fb9\u6846"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Surface")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"border")," \u53c2\u6570\u6765\u8bbe\u7f6e\u8fb9\u6846\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun ImageDemo() {\n\n    Surface(\n        shape = CircleShape,\n        border = BorderStroke(5.dp, Color.Gray)\n    ) {\n        Image(\n            painter = painterResource(id = R.drawable.wallpaper),\n            contentDescription = null,\n            modifier = Modifier.size(350.dp),\n            contentScale = ContentScale.Crop\n        )\n    }\n\n}\n")),(0,i.kt)("img",{src:u}),(0,i.kt)("h2",{id:"4-\u4f7f\u7528-coil-\u6765\u52a8\u6001\u52a0\u8f7d\u56fe\u7247"},"4. \u4f7f\u7528 Coil \u6765\u52a8\u6001\u52a0\u8f7d\u56fe\u7247"),(0,i.kt)("p",null,"Compose \u81ea\u5e26\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," \u53ea\u80fd\u52a0\u8f7d\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u7684\u56fe\u7247\u6587\u4ef6\uff0c\u5982\u679c\u60f3\u52a0\u8f7d\u7f51\u7edc\u56fe\u7247\u6216\u8005\u662f\u5176\u4ed6\u672c\u5730\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\uff0c\u5219\u9700\u8981\u8003\u8651\u5176\u4ed6\u7684\u5e93\uff0c\u6bd4\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://coil-kt.github.io/coil/compose/"},"Coil")),(0,i.kt)("p",null,"\u7b80\u5355\u4f7f\u7528 Coil \u52a0\u8f7d\u7f51\u7edc\u56fe\u7247:"),(0,i.kt)("p",null,"\u8bb0\u5f97\u6253\u5f00\u7f51\u7edc\u6743\u9650\u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<uses-permission android:name="android.permission.INTERNET" />\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Image(\n    painter = rememberImagePainter(data = "https://picsum.photos/300/300"),\n    contentDescription = null\n)\n')),(0,i.kt)("h3",{id:"\u52a0\u8f7d-svg-\u56fe\u50cf"},"\u52a0\u8f7d Svg \u56fe\u50cf"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Coil")," \u53ef\u4ee5\u52a0\u8f7d Svg \u56fe\u50cf"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4f9d\u8d56 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'implementation "io.coil-kt:coil-svg:1.3.2" // Gradle\nimplementation("io.coil-kt:coil-svg:1.3.2") // KTS\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val context = LocalContext.current\nval imageLoader = ImageLoader.Builder(context)\n    .componentRegistry {\n        add(SvgDecoder(context))\n    }\n    .build()\n\nImage(\n    painter = rememberImagePainter(\n        data = "https://coil-kt.github.io/coil/images/coil_logo_black.svg",\n        imageLoader = imageLoader\n    ),\n    contentDescription = null\n)\n')),(0,i.kt)("h3",{id:"\u653e\u5927\u7f29\u5c0f-svg-\u56fe\u50cf\u6587\u4ef6"},"\u653e\u5927\u7f29\u5c0f Svg \u56fe\u50cf\u6587\u4ef6"),(0,i.kt)("p",null,"\u867d\u7136 Coil \u53ef\u4ee5\u663e\u793a Svg \u56fe\u50cf\uff0c\u4f46\u662f\u5982\u679c\u5728\u6211\u4eec\u7684 app \u4e2d\uff0c\u9700\u8981\u52a8\u6001\u7684\u653e\u5927 Svg \u56fe\u50cf\uff0c\u90a3\u4e48\u4f60\u5927\u6982\u7387\u4f1a\u5f97\u5230\u5f3a\u884c\u62c9\u5347 Svg \u50cf\u7d20\u540e\u7684\u56fe\u50cf\uff0c\u800c\u4e0d\u662f\u65e0\u635f\u653e\u5927"),(0,i.kt)("p",null,"\u5bfc\u81f4\u7684\u539f\u56e0\u53ef\u80fd\u662f Coil \u4e2d\u7684 ImageLoader \u4f1a\u628a Svg \u8f6c\u6362\u6210\u4f4d\u56fe\uff0c\u800c\u4e0d\u662f\u5b89\u5353\u7684\u77e2\u91cf\u56fe vector drawable, \u800c\u4f4d\u56fe\u5219\u4e0d\u80fd\u65e0\u635f\u653e\u5927"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val context = LocalContext.current\nval imageLoader = ImageLoader.Builder(context)\n    .componentRegistry {\n        add(SvgDecoder(context))\n    }\n    .build()\n\nvar flag by remember { mutableStateOf(false) }\nval size by animateDpAsState(targetValue = if(flag) 450.dp else 50.dp)\n\nBox(\n    modifier = Modifier.fillMaxSize(),\n    contentAlignment = Alignment.Center\n) {\n    Column {\n        Image(\n            painter = rememberImagePainter(\n                data = "https://coil-kt.github.io/coil/images/coil_logo_black.svg",\n                imageLoader = imageLoader\n            ),\n            contentDescription = null,\n            modifier = Modifier\n                .size(size)\n                .clickable(\n                    onClick = {\n                        flag = !flag\n                    },\n                    indication = null,\n                    interactionSource = MutableInteractionSource()\n                )\n        )\n    }\n}\n')),(0,i.kt)("img",{src:l}),(0,i.kt)("p",null,"\u90a3\u4e48\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u5c1d\u8bd5\u5b9e\u73b0 svg \u8f6c\u6362\u4e3a vector drawable, \u5728 github \u4e0a\u53ef\u4ee5\u641c\u7d22\u5230\u8fd9\u4e2a\u5e93 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DevSrSouza/svg-to-compose"},"Svg to Compose"),"\uff0c\u4f46\u662f\u5b83\u5e76\u4e0d\u80fd\u652f\u6301\u52a8\u6001\u52a0\u8f7d\u56fe\u50cf\uff0c\u4f8b\u5982\u4ece\u7f51\u7edc\u4e0a\u52a0\u8f7d\uff0c\u6216\u8005\u662f\u4ece app \u7684\u5185\u90e8\u5b58\u50a8\u6216\u8005\u5916\u90e8\u5b58\u50a8\u52a0\u8f7d\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u5728\u6211\u641c\u5bfb\u4e2d\uff0c\u53d1\u73b0\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/skydoves/Landscapist"},"Landscapist")),(0,i.kt)("p",null,"\u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'implementation "com.github.skydoves:landscapist-coil:1.3.2"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'CoilImage(\n    imageModel = "https://coil-kt.github.io/coil/images/coil_logo_black.svg",\n    contentDescription = null,\n    modifier = Modifier\n        .size(size)\n        .clickable(\n            onClick = {\n                flag = !flag\n            },\n            indication = null,\n            interactionSource = MutableInteractionSource()\n        ),\n    imageLoader = imageLoader\n)\n')),(0,i.kt)("img",{src:c}),(0,i.kt)("h2",{id:"5-\u66f4\u591a"},"5. \u66f4\u591a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/foundation/package-summary#image"},"Image \u53c2\u6570\u8be6\u60c5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yalantis/uCrop"},"Ucrop \u4e00\u4e2a\u56fe\u7247\u88c1\u526a\u5e93")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://coil-kt.github.io/coil/"},"Coil")))}h.isMDXComponent=!0}}]);
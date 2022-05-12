"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6171],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i={id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},l=void 0,s={unversionedId:"api/nativeMethods/scrollTo",id:"version-2.3.x/api/nativeMethods/scrollTo",isDocsHomePage:!1,title:"scrollTo",description:"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags(which might occur when it would be asynchronous and based on a lot of events).",source:"@site/versioned_docs/version-2.3.x/api/nativeMethods/scrollTo.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/scrollTo",permalink:"/react-native-reanimated/docs/2.3.x/api/nativeMethods/scrollTo",version:"2.3.x",frontMatter:{id:"scrollTo",title:"scrollTo",sidebar_label:"scrollTo"},sidebar:"version-2.3.x/docs",previous:{title:"measure",permalink:"/react-native-reanimated/docs/2.3.x/api/nativeMethods/measure"},next:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/2.3.x/api/LayoutAnimations/customAnimations"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides synchronous scroll on the UI thread to a given offset using an animated ref to a scroll view. This allows performing smooth scrolling without lags(which might occur when it would be asynchronous and based on a lot of events)."),(0,a.kt)("p",null,"This function is implemented on native platforms only. On the web it's sufficient to use a standard version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollTo")," which comes with a ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," component(it's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/aebccd3f923c920bd85fb9e5fbdd2a8a75d3ad3d/Libraries/Components/ScrollView/ScrollView.js#L834"},"here"),"). In such a case it should be invoked in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const aref = useAnimatedRef();\naref.current.scrollTo({ x, y });\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"animatedref"},(0,a.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,a.kt)("p",null,"The product of ",(0,a.kt)("a",{parentName:"p",href:"../hooks/useAnimatedRef"},(0,a.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is a Reanimated's extension of a standard React's ref(delivers view tag on the UI thread)."),(0,a.kt)("h4",{id:"x-cord-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"x-cord")," ","[Float]"),(0,a.kt)("p",null,"Corresponds to the pixel along the horizontal axis of the element that you want displayed in the upper left."),(0,a.kt)("h4",{id:"y-cord-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"y-cord")," ","[Float]"),(0,a.kt)("p",null,"Corresponds to the pixel along the vertical axis of the element that you want displayed in the upper left."),(0,a.kt)("h4",{id:"animated-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"animated")," ","[Boolean]"),(0,a.kt)("p",null,"Indicates whether the scroll should be smooth."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"void"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n  const scroll = useSharedValue(0);\n\n  useDerivedValue(() => {\n    scrollTo(aref, 0, scroll.value * 100, true);\n  });\n\n  const items = Array.from(Array(10).keys());\n\n  return (\n    <View>\n      <Button\n        title=\"scroll down\"\n        onPress={() => {\n          scroll.value = scroll.value + 1;\n          if (scroll.value >= 10) scroll.value = 0;\n        }}\n      />\n      <View style={{ width: 120, height: 200, backgroundColor: 'green' }}>\n        <ScrollView\n          ref={aref}\n          style={{ backgroundColor: 'orange', width: 120 }}>\n          {items.map((_, i) => (\n            <View\n              key={i}\n              style={{\n                backgroundColor: 'white',\n                width: 100,\n                height: 100,\n                margin: 10,\n              }}\n            />\n          ))}\n        </ScrollView>\n      </View>\n    </View>\n  );\n};\n")))}d.isMDXComponent=!0}}]);
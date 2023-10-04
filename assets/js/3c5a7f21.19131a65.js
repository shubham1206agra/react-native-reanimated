"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6597],{17741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>R,contentTitle:()=>k,default:()=>j,frontMatter:()=>b,metadata:()=>g,toc:()=>w});var i=n(83117),o=n(67294),a=n(3905),r=n(67177),s=n(28033),l=n(10758),c=n(21739),u=n(35842),d=n(347),m=n(6328),f=n(49638);const p={code:"function anonymous(){const{reduceMotion,sv}=this.__closure;return{transform:[{translateX:reduceMotion?0:sv.value}]};}"};function v(){const e=(0,l.y)(-200),t=(0,c.J)(),n=(0,u.l)(function(){const n=()=>({transform:[{translateX:t?0:e.value}]});return n.__closure={reduceMotion:t,sv:e},n.__initData=p,n.__workletHash=8897056240564,n}());return o.useEffect((()=>{e.value=(0,d.D)((0,m.j)(200,{duration:2e3}),-1,!0)})),o.createElement(r.Z,{style:h.container},o.createElement(f.n,{style:[h.box,n]}))}const h=s.Z.create({box:{height:100,width:100,backgroundColor:"#b58df1",borderRadius:20},container:{flex:1,alignItems:"center"}}),y="import React from 'react';\nimport { StyleSheet, View } from 'react-native';\nimport Animated, {\n  useAnimatedStyle,\n  useReducedMotion,\n  useSharedValue,\n  withRepeat,\n  withTiming,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const sv = useSharedValue(-200);\n  // highlight-next-line\n  const reduceMotion = useReducedMotion();\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    // highlight-next-line\n    transform: [{ translateX: reduceMotion ? 0 : sv.value }],\n  }));\n\n  React.useEffect(() => {\n    sv.value = withRepeat(withTiming(200, { duration: 2000 }), -1, true);\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  box: {\n    height: 100,\n    width: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n",b={id:"useReducedMotion",title:"useReducedMotion",sidebar_label:"useReducedMotion"},k=void 0,g={unversionedId:"device/useReducedMotion",id:"device/useReducedMotion",title:"useReducedMotion",description:"useReducedMotion lets you query the reduced motion system setting. You can use it to disable animations.",source:"@site/docs/device/useReducedMotion.mdx",sourceDirName:"device",slug:"/device/useReducedMotion",permalink:"/react-native-reanimated/docs/device/useReducedMotion",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/device/useReducedMotion.mdx",tags:[],version:"current",frontMatter:{id:"useReducedMotion",title:"useReducedMotion",sidebar_label:"useReducedMotion"},sidebar:"tutorialSidebar",previous:{title:"useAnimatedSensor",permalink:"/react-native-reanimated/docs/device/useAnimatedSensor"},next:{title:"Layout Animations",permalink:"/react-native-reanimated/docs/category/layout-animations"}},R={},w=[{value:"Reference",id:"reference",level:2},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],A=(M="InteractiveExample",function(e){return console.warn("Component "+M+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var M;const _={toc:w},S="wrapper";function j(e){let{components:t,...n}=e;return(0,a.kt)(S,(0,i.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useReducedMotion")," lets you query the reduced motion system setting. You can use it to disable animations."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useReducedMotion } from 'react-native-reanimated';\n\nfunction App() {\n  const reduceMotion = useReducedMotion();\n\n  if (reduceMotion) {\n    // display static content \u2728\n  } else {\n    // run animations \u2728\n  }\n\n  // ...\n}\n")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useReducedMotion")," returns a boolean indicating whether the reduced motion setting was enabled when the app started."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(A,{src:y,component:(0,a.kt)(v,{mdxType:"UseReducedMotion"}),mdxType:"InteractiveExample"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changing the reduced motion system setting doesn't cause your components to rerender."),(0,a.kt)("li",{parentName:"ul"},"In contrast to ",(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/accessibilityinfo#isreducemotionenabled"},(0,a.kt)("inlineCode",{parentName:"a"},"AccessibilityInfo.isReduceMotionEnabled()"))," the ",(0,a.kt)("inlineCode",{parentName:"li"},"useReducedMotion")," hook lets you get the value synchronously.")),(0,a.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,a.kt)("div",{className:"compatibility"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Android"),(0,a.kt)("th",{parentName:"tr",align:null},"iOS"),(0,a.kt)("th",{parentName:"tr",align:null},"Web"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}j.isMDXComponent=!0},347:(e,t,n)=>{n.d(t,{D:()=>o});var i=n(76933);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;return(0,i.oF)(e,(()=>{const r="function"==typeof e?e():e;return{isHigherOrder:!0,onFrame:function(e,i){const o=r.onFrame(r,i);if(e.current=r.current,o){if(e.reps+=1,r.callback&&r.callback(!0,e.current),e.reduceMotion||t>0&&e.reps>=t)return!0;const o=n?r.current:e.startValue;return n&&(r.toValue=e.startValue,e.startValue=o),r.onStart(r,o,i,r.previousAnimation),!1}return!1},onStart:function(e,i,o,a){e.startValue=i,e.reps=0,void 0===r.reduceMotion&&(r.reduceMotion=e.reduceMotion),e.reduceMotion&&n&&(t<=0||t%2==0)?(e.current=e.startValue,e.onFrame=()=>!0):r.onStart(r,i,o,a)},reps:0,current:r.current,callback:e=>{o&&o(e),!e&&r.callback&&r.callback(!1)},startValue:0,reduceMotion:(0,i.uh)(a)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>a});var i=n(67177),o=n(17613);n(67294);const a=(0,o.F)(i.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>h});var i=n(67294),o=n(96085),a=n(97604),r=n(49402),s=n(76933),l=n(10758),c=n(40093),u=n(41956),d=n(83442);const m=!(0,d.Wr)();function f(e,t,n,i){if(Array.isArray(t)&&t.forEach(((t,o)=>{f(e,t,n&&n[o],i&&i[o])})),"object"==typeof t&&t.onFrame){const o=t;let a=o.current;void 0!==i&&("object"==typeof i?void 0!==i.value?a=i.value:void 0!==i.onFrame&&(void 0!==(null==n?void 0:n.current)?a=n.current:void 0!==(null==i?void 0:i.current)&&(a=i.current)):a=i),o.callStart=e=>{o.onStart(o,a,e,n)},o.callStart(e),o.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((o=>f(e,t[o],n&&n[o],i&&i[o])))}function p(e,t,n,i,o){if(!o.value)return!0;if(Array.isArray(e)){i[n]=[];let a=!0;return e.forEach(((e,r)=>{p(e,t,r,i[n],o)||(a=!1)})),a}if("object"==typeof e&&e.onFrame){let o=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),o=e.onFrame(e,t),e.timestamp=t,o&&(e.finished=!0,e.callback&&e.callback(!0))),i[n]=e.current,o}if("object"==typeof e){i[n]={};let a=!0;return Object.keys(e).forEach((r=>{p(e[r],t,r,i[n],o)||(a=!1)})),a}return i[n]=e,!0}function v(e,t){if(Array.isArray(e))for(const n of e)v(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))v(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function h(e,t,h){let y=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const b=(0,u.S)(),k=(0,i.useRef)();let g=Object.values(e.__closure??{});var R;m||!g.length&&null!==(R=t)&&void 0!==R&&R.length&&(g=t);const w=h?Array.isArray(h)?h:[h]:[],A=h?(0,c.Nq)(w):null,M=(0,l.y)(!0),_=(0,i.useRef)({});if(t?t.push(e.__workletHash):t=[...g,e.__workletHash],A&&t.push(A),!k.current){const t=(0,s.AX)(e);(0,c.Dl)(t),k.current={initial:{value:t,updater:e},remoteState:(0,o.I1)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:S,remoteState:j,viewDescriptors:E}=k.current,N=E.shareableViewDescriptors,x=m?void 0:b;return t.push(N),(0,i.useEffect)((()=>{let t,i=e;h&&(i=()=>{const t=e();return w.forEach((e=>{e(t)})),t}),t=(0,d.V5)()?()=>{!function(e,t,i,o,a,s){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];const u=i.animations??{},d=t()??{},m=i.last;let v,h=!1;Object.keys(u).forEach((e=>{const t=d[e];(0,c.mE)(t)||delete u[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,c.mE)(t)&&(v=n.g.__frameTimestamp||performance.now(),f(v,t,u[e],m[e]),u[e]=t,h=!0)})),h?(i.animations=u,i.isAnimationRunning||(i.isAnimationCancelled=!1,i.isAnimationRunning=!0,function t(n){const{animations:c,last:u,isAnimationCancelled:d}=i;if(d)return void(i.isAnimationRunning=!1);const m={};let f=!0;Object.keys(c).forEach((e=>{p(c[e],n,e,m,a)?(u[e]=m[e],delete c[e]):f=!1})),Object.keys(m).length&&(0,r.R)(e,m,o,s,l),f?i.isAnimationRunning=!1:requestAnimationFrame(t)}(v))):(i.isAnimationCancelled=!0,i.animations=[]),i.last=d,(0,c.wU)(m,d)||(0,r.R)(e,d,o,s,l)}(N,e,j,x,M,_,w)}:()=>{!function(e,t,i,o,a){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const l=i.animations??{},u=t()??{},d=i.last,m={};let v,h=!1,y=!1;for(const r in u){const e=u[r];(0,c.mE)(e)?(v=n.g.__frameTimestamp||performance.now(),f(v,e,l[r],d[r]),l[r]=e,h=!0):(y=!0,m[r]=e,delete l[r])}if(h){const t=n=>{const{animations:s,last:l,isAnimationCancelled:c}=i;if(c)return void(i.isAnimationRunning=!1);const u={};let d=!0;for(const e in s)p(s[e],n,e,u,a)?(l[e]=u[e],delete s[e]):d=!1;u&&(0,r.Z)(e,u,o),d?i.isAnimationRunning=!1:requestAnimationFrame(t)};i.animations=l,i.isAnimationRunning||(i.isAnimationCancelled=!1,i.isAnimationRunning=!0,t(v)),y&&(0,r.Z)(e,m,o)}else i.isAnimationCancelled=!0,i.animations=[],(0,c.wU)(d,u)||(0,r.Z)(e,u,o,s);i.last=u}(N,i,j,x,M,y)};const o=(0,a.R)(t,g);return()=>{(0,a.B)(o)}}),t),(0,i.useEffect)((()=>(M.value=!0,()=>{M.value=!1})),[]),v(S.value),(0,d.V5)()?{viewDescriptors:E,initial:S,viewsRef:b,animatedStyle:_}:{viewDescriptors:E,initial:S,viewsRef:b}}},40093:(e,t,n)=>{function i(e){return Object.values(e).reduce(((e,t)=>e+t.__workletHash.toString()),"")}function o(e,t){const n=Object.values(t).filter((e=>void 0!==e));return e?e.push(i(n)):e=n.map((e=>({workletHash:e.__workletHash,closure:e.__closure}))),e}function a(e,t){const n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};return function(e,t){if(!e||!t||t.length!==e.length)return!1;for(let i=0;i<t.length;++i)if(!n(e[i],t[i]))return!1;return!0}(e,t)}function r(e){return Array.isArray(e)?e.some(r):"object"==typeof e&&null!==e&&(void 0!==e.onFrame||Object.values(e).some(r))}function s(e,t){const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(e[n[o]]!==t[n[o]])return!1;return!0}function l(e){if("object"!=typeof e)throw new Error(`[Reanimated] \`useAnimatedStyle\` has to return an object, found ${typeof e} instead.`);if(Array.isArray(e))throw new Error("[Reanimated] `useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.")}n.d(t,{C1:()=>o,Dl:()=>l,Nq:()=>i,mE:()=>r,qD:()=>a,wU:()=>s})}}]);
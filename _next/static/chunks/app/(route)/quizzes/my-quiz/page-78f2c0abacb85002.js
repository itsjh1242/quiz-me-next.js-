(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[693],{8294:function(t,e,r){Promise.resolve().then(r.bind(r,995))},1316:function(t,e,r){"use strict";r.d(e,{$v:function(){return o},C3:function(){return s},C6:function(){return c},Vh:function(){return u},aL:function(){return a},rF:function(){return f}});var n=r(9842),i=r(18);let a=async()=>{try{let t=(0,n.hJ)(i.db,"quizzes");return(await (0,n.PL)(t)).docs.map(t=>t.id)}catch(t){console.error(t)}},c=async t=>{try{let e=(0,n.hJ)(i.db,"quizzes"),r=(0,n.IO)(e,(0,n.ar)("userName","==",t),(0,n.Xo)("timestamp","desc")),a=await (0,n.PL)(r),c=[];return a.forEach(t=>{c.push({id:t.id,...t.data()})}),c}catch(t){return console.error("Error getting documents: ",t),[]}},u=async t=>{try{let e=(0,n.JU)(i.db,"quizzes",t),r=await (0,n.QT)(e);if(r.exists())return{...r.data()};return null}catch(t){return console.error(t),null}},o=async t=>{try{let e=(0,n.hJ)(i.db,"participants/participantsCollection/".concat(t));return(await (0,n.PL)(e)).docs.map(t=>t.data())}catch(t){return console.error(t),null}},s=async t=>{try{let e=(0,n.JU)(i.db,"quizzes",t);return await (0,n.r7)(e,{available:!1}),!0}catch(t){return console.error(t),!1}},l=async t=>{try{let e=(0,n.JU)(i.db,"quizzes",t),r=(await (0,n.QT)(e)).data();r&&"number"==typeof r.participant?await (0,n.r7)(e,{participant:r.participant+1}):console.log("데이터베이스 파일 구조 오류")}catch(t){console.error(t)}},d=t=>{let e=0,r=Object.keys(t.quiz);return r.map(r=>{t.quiz[r].isCorrect&&(e+=1)}),{status:!0,totalQuestion:r.length,correctAnswer:e}},f=async t=>{let{quiz:e,participantName:r}=t,a=d(e),c={quiz:{...e},participantName:r,result:a};try{let t=(0,n.JU)(i.db,"participants/participantsCollection/".concat(e.id,"/").concat(r));return await (0,n.pl)(t,c),l(e.id),a}catch(t){return console.error(t),{status:!1,totalQuestion:0,correctAnswer:0}}}},995:function(t,e,r){"use strict";r.r(e);var n=r(7437),i=r(2265),a=r(6463),c=r(9188),u=r(1316),o=r(1404),s=r(5785);e.default=()=>{(0,o.bg)()||(0,a.redirect)("/");let t=(0,a.useRouter)(),e=(0,c.Z)(),r=(null==e?void 0:e.displayName)||"",[l,d]=(0,i.useState)([]);(0,i.useEffect)(()=>{let t=async()=>{d((await (0,u.C6)(r)).map(t=>({id:t.id,quiz:t.quiz,quizTitle:t.quizTitle,userName:t.userName,available:t.available,timestamp:t.timestamp})))};r&&t()},[r]);let f=e=>{t.push("/quizzes/detail/"+e.id)};return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen py-12 max-sm:px-3",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"내 퀴즈"}),(0,n.jsxs)("div",{className:"w-full max-w-md",children:[l.map(t=>(0,n.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition duration-300",onClick:()=>{f(t)},children:[(0,n.jsx)("p",{className:"w-2/3 truncate",children:t.quizTitle}),(0,n.jsx)(s.C,{bg_color:t.available?"bg-green-500":"bg-gray-500",children:t.available?"활성화":"비활성화"})]},t.id)),0===l.length&&(0,n.jsx)("p",{className:"text-gray-500",children:"퀴즈가 없습니다."})]})]})}},5785:function(t,e,r){"use strict";r.d(e,{C:function(){return c}});var n=r(7437),i=r(6273),a=r(6804);let c=t=>{let{className:e,children:r,text_color:c,bg_color:u}=t;return(0,n.jsx)("div",{className:(0,i.cn)("px-3 py-1 rounded-md ".concat(u||a.D.bg_color," ").concat(c||a.D.text_color),e),children:r})}},6804:function(t,e,r){"use strict";r.d(e,{D:function(){return n},e:function(){return i}});let n={bg_color:"bg-blue-500",text_color:"text-white"},i=async t=>{try{await navigator.clipboard.writeText("https://itsjh1242.github.io/quiz-me/quizzes/"+t),alert("복사 완료")}catch(t){alert("복사 실패, "+t)}}},1404:function(t,e,r){"use strict";r.d(e,{bg:function(){return a},qj:function(){return c},w7:function(){return u}});var n=r(18),i=r(5735);function a(){try{if(n.I8.currentUser)return!0;return!1}catch(t){console.error(t)}}async function c(){try{await (0,i.rh)(n.I8,n.Ap)}catch(t){console.error("Error signing in with Google",t)}}async function u(){try{return n.I8.signOut()}catch(t){console.error("Error signing out with Google",t)}}},6273:function(t,e,r){"use strict";r.d(e,{cn:function(){return a}});var n=r(4839),i=r(6164);let a=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,i.m6)((0,n.W)(e))}},18:function(t,e,r){"use strict";r.d(e,{Ap:function(){return s},I8:function(){return o},db:function(){return u}});var n=r(5236),i=r(5735),a=r(9842);let c=(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyAjJd8AOAqSmjCTlXLT73iIAx-HNyA8YKs",authDomain:"quizme-f366b.firebaseapp.com",projectId:"quizme-f366b",storageBucket:"quizme-f366b.appspot.com",messagingSenderId:"472802751724",appId:"1:472802751724:web:9ae831ce90bfcec734a1c9",measurementId:"G-5PY4F72WES"}),u=(0,a.ad)(c),o=(0,i.v0)(c),s=new i.hJ},9188:function(t,e,r){"use strict";var n=r(2265),i=r(18);e.Z=()=>{let[t,e]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let t=i.I8.onAuthStateChanged(t=>{t?e(t):e(null)});return()=>t()},[t]),t}},6463:function(t,e,r){"use strict";var n=r(1169);r.o(n,"redirect")&&r.d(e,{redirect:function(){return n.redirect}}),r.o(n,"useRouter")&&r.d(e,{useRouter:function(){return n.useRouter}})}},function(t){t.O(0,[358,54,177,971,23,744],function(){return t(t.s=8294)}),_N_E=t.O()}]);
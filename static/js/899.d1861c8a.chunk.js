"use strict";(self.webpackChunktodo_in_react=self.webpackChunktodo_in_react||[]).push([[899],{6899:function(t,a,e){e.r(a),e.d(a,{default:function(){return k}});var i=e(1413),n=e(2791),u=e(7613),s=e(184),c=function(t){return t.detailTask?(0,s.jsx)("div",{className:"task-detail",children:(0,s.jsx)("h1",{children:t.detailTask.title})}):(0,s.jsx)(u.h,{})},o=e(364),l=e(446),r=e(6871),d=e(3753),h=e(408),f=e(2661),k=(0,o.$j)((function(t){return{detailTask:t.todo.detailTask,uid:t.auth.uid,isAuth:t.auth.isAuth}}),{getDetailTask:l.Q,getAuthDataThunk:f.tc})((function(t){var a=(0,r.UO)().id;return(0,n.useEffect)((function(){t.getAuthDataThunk()}),[]),(0,n.useEffect)((function(){(0,h.U2)((0,h.iH)(d.F,t.uid+"/tasks/"+a)).then((function(a){a.exists()?t.getDetailTask(a.val()):console.log("No data available")})).catch((function(t){console.error(t)}))}),[t.isAuth]),(0,s.jsx)(c,(0,i.Z)({},t))}))}}]);
//# sourceMappingURL=899.d1861c8a.chunk.js.map
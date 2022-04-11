"use strict";(self.webpackChunktodo_in_react=self.webpackChunktodo_in_react||[]).push([[889],{3698:function(t,n,r){r.d(n,{C1:function(){return e},D6:function(){return a},uv:function(){return u}});var a=function(){var t=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");return function(n){return t.test(n)?void 0:"Invalid Email"}},e=function(t){return t?void 0:"Required Field"},u=function(t){return function(n){return void 0===n||0==n.length||n.length<t?"Min value "+t:void 0}}},8889:function(t,n,r){r.r(n),r.d(n,{default:function(){return g}});var a=r(1413),e=r(364),u=r(2661),s=r(6871),i=r(5078),o=r(9626),A=r(3698),c=r(3504),l=r(184),h=function(t){return(0,l.jsxs)("div",{className:"login",children:[(0,l.jsxs)("div",{className:"title login__title",children:[(0,l.jsx)("div",{className:"logo login__logo",children:(0,l.jsx)("img",{src:o,alt:"notepad"})}),(0,l.jsx)("h2",{children:"Todo App"})]}),(0,l.jsx)(i.l0,{onSubmit:function(n){return t.loginSubmit(n)},children:function(n){var r=n.handleSubmit;return(0,l.jsxs)("form",{onSubmit:r,className:"form login__form",children:[(0,l.jsx)(i.gN,{name:"email",validate:(0,A.D6)(),children:function(t){var n=t.input,r=t.meta;return(0,l.jsxs)("div",{className:"input login__form-input",children:[(0,l.jsx)("input",(0,a.Z)({type:"text",placeholder:"Email"},n)),r.error&&r.touched&&(0,l.jsx)("span",{children:r.error})]})}}),(0,l.jsx)(i.gN,{name:"password",validate:(0,A.uv)(6),children:function(t){var n=t.input,r=t.meta;return(0,l.jsxs)("div",{className:"input login__form-input",children:[(0,l.jsx)("input",(0,a.Z)({type:"password",placeholder:"Password"},n)),r.error&&r.touched&&(0,l.jsx)("span",{children:r.error})]})}}),!t.authSuccess&&(0,l.jsx)("div",{className:"error login__error",children:(0,l.jsx)("span",{children:t.errMessage})}),(0,l.jsx)("button",{className:"button login__button",children:"Login"})]})}}),(0,l.jsx)("hr",{className:"hr login__hr"}),(0,l.jsxs)("div",{className:"question login__question",children:[(0,l.jsx)("span",{children:"Do you don't have an account?"})," -"," ",(0,l.jsx)(c.OL,{to:"/register",children:"Create account"})]})]})},d=r(2791),g=(0,e.$j)((function(t){return{isAuth:t.auth.isAuth,authSuccess:t.auth.authSuccess,errMessage:t.auth.errMessage}}),{getAuthData:u.nr,handleAuthErr:u.s_,signIn:u.zB})((function(t){if((0,d.useEffect)((function(){return function(){t.handleAuthErr(!0,"")}}),[]),t.isAuth)return(0,l.jsx)(s.Fg,{to:"/"});return(0,l.jsx)(h,(0,a.Z)((0,a.Z)({},t),{},{loginSubmit:function(n){var r=n.email,a=n.password;t.signIn(r,a)}}))}))},9626:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=889.6be03973.chunk.js.map
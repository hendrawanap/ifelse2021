(self.webpackChunk=self.webpackChunk||[]).push([[494],{20494:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>u});var n=r(87757),s=r.n(n),o=r(44198);function a(t,e,r,n,s,o,a){try{var c=t[o](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,s)}const c={name:"Login",data:function(){return{hasError:!1,username:"",password:""}},methods:{login:function(){var t,e=this;return(t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.hasError=!1,t.next=3,o.Z.login({username:e.username,password:e.password});case 3:t.sent&&"student"!==o.Z.role()?e.$router.push("/"):(e.hasError=!0,o.Z.logout());case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,s){var o=t.apply(e,r);function c(t){a(o,n,s,c,u,"next",t)}function u(t){a(o,n,s,c,u,"throw",t)}c(void 0)}))})()}}};const u=(0,r(51900).Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c-app flex-row align-items-center"},[r("CContainer",[r("CRow",{staticClass:"justify-content-center"},[r("CCol",{attrs:{md:"8"}},[r("CCard",{staticClass:"p-4"},[r("CCardBody",[r("CForm",[r("h1",[t._v("Login")]),t._v(" "),r("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),t._v(" "),t.hasError?r("p",{staticClass:"text-danger"},[t._v("Validation Error")]):t._e(),t._v(" "),r("CInput",{attrs:{placeholder:"Username",autocomplete:"username email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),r("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"current-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("CRow",[r("CCol",{staticClass:"text-left",attrs:{col:"6"}},[r("CButton",{staticClass:"px-4",attrs:{color:"primary"},on:{click:t.login}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);
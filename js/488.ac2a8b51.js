"use strict";(self["webpackChunkboke"]=self["webpackChunkboke"]||[]).push([[488],{9488:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"loginView"},[s("form",{staticClass:"bd"},[s("ul",[s("li",[s("span",[e._v("账号:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerName,expression:"registerName"}],attrs:{type:"text"},domProps:{value:e.registerName},on:{input:function(s){s.target.composing||(e.registerName=s.target.value)}}})]),s("li",[s("span",[e._v("密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword,expression:"registerPassword"}],attrs:{type:"password"},domProps:{value:e.registerPassword},on:{input:function(s){s.target.composing||(e.registerPassword=s.target.value)}}})]),s("li",[s("span",[e._v("确认密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.affirmPsw,expression:"affirmPsw"}],attrs:{type:"password"},domProps:{value:e.affirmPsw},on:{input:function(s){s.target.composing||(e.affirmPsw=s.target.value)}}})]),s("li",[s("div",{staticClass:"send",on:{click:e.sends}},[e._v("确认注册")])])])])])},a=[],i={data(){return{registerName:"",registerPassword:"",affirmPsw:""}},methods:{sends(){let e=JSON.parse(localStorage.getItem("account"))||[],s={name:this.registerName,pasw:this.registerPassword,affirmpasw:this.affirmPsw};e.push(s),localStorage.setItem("account",JSON.stringify(e))}}},o=i,n=t(3736),l=(0,n.Z)(o,r,a,!1,null,"6084c9ba",null),m=l.exports}}]);
//# sourceMappingURL=488.ac2a8b51.js.map
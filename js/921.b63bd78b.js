"use strict";(self["webpackChunkboke"]=self["webpackChunkboke"]||[]).push([[921],{9921:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bx",on:{mousewheel:t.mouseindex,transitionend:t.mouseindexx}},[s("div",{ref:"boxs",staticClass:"boxa"},t._l(t.userOBJ,(function(i){return s("div",{key:i.id,staticClass:"releaseData"},[s("div",{staticClass:"box"},[s("div",{staticClass:"title"},[t._v(t._s(i.title))]),s("div",{staticClass:"text"},[t._v(t._s(i.text))])])])})),0),s("div",{staticClass:"toTop"},[s("div",{staticClass:"item"},[s("button",{on:{click:t.tohome}},[t._v("回到首页")])])])])},n=[],d=i(3822),o={name:"viewTwo",data(){return{indexd:0,io:!0}},methods:{slide(){this.$refs.boxs.style.transform=`translate(0,${100*-this.indexd}vh)`},mouseindex(t){this.io&&(this.io=!1,t.wheelDelta<0?(this.indexd===this.userOBJ.length-1&&(this.indexd-=1,this.io=!0),this.indexd++):(0===this.indexd&&(this.indexd=1,this.io=!0),this.indexd--),this.slide(this.indexd))},mouseindexx(){this.io=!0},tohome(){confirm("确认回到首页吗?")&&this.$router.push({name:"home"})}},computed:{...(0,d.rn)({userOBJ:t=>t.homeState.userinput})}},a=o,h=i(3736),l=(0,h.Z)(a,e,n,!1,null,"58f0d7a6",null),u=l.exports}}]);
//# sourceMappingURL=921.b63bd78b.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e33ef12"],{"1e99":function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"full-container"},[l("el-collapse",{staticClass:"coll",model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{attrs:{title:"奖项设置",name:"1"}},[l("div",[l("el-form",{ref:"form",attrs:{"label-width":"60px"}},t._l(t.list,(function(e,n){return l("el-form-item",{key:n,attrs:{label:"奖项"+(n+1)}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:t.list[n],callback:function(e){t.$set(t.list,n,e)},expression:"list[index]"}})],1)})),1)],1)])],1),l("div",{staticClass:"lucky-box"},t._l(t.list,(function(e,n){return l("div",{key:n,staticClass:"lucky-item",class:t.luckIndex===n?"lucky-active":""},[t._v(" "+t._s(e)+" ")])})),0),l("div",{staticClass:"btn-box"},[l("el-button",{attrs:{type:"success"},on:{click:t.onLucky}},[t._v("run！")])],1)],1)},c=[],a={data:function(){return{activeNames:["1"],list:[1,2,3,4,5,6,7,8,9],luckIndex:"",count:40,timer:null}},methods:{onLucky:function(){var t=this,e=0;this.timer=setInterval((function(){e++;var l=t.$tools.getRandom(1,9);t.luckIndex=l-1,e>=t.count&&(clearInterval(t.timer),t.timer=null,t.$alert("恭喜抽中了".concat(t.list[t.luckIndex]),"tips",{confirmButtonText:"我知道了",callback:function(t){}}))}),100)}},mounted:function(){}},s=a,i=(l("4a29"),l("2877")),o=Object(i["a"])(s,n,c,!1,null,"13f1572e",null);e["default"]=o.exports},"4a29":function(t,e,l){"use strict";l("dae9")},dae9:function(t,e,l){}}]);
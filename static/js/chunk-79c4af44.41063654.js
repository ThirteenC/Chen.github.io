(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c4af44"],{"09f4":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function i(e,t){t?document.querySelector(t).scrollTop=e:(document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e)}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,n,o){var l=r(),c=e-l,u=20,s=0;t="undefined"===typeof t?500:t;var d=function e(){s+=u;var r=Math.easeInOutQuad(s,l,c,t);i(r,n),s<t?a(e):o&&"function"===typeof o&&o()};d()}},"15fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("a4d3"),n("b64b");function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}function i(e,t){if(null==e)return{};var n,i,r=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},"1d11":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{attrs:{inline:!0,model:e.search}},[e._e(),e._e(),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.onAddOrUpdate()}}},[e._v(" "+e._s(e.$t("table.add"))+" ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{border:"","highlight-current-row":"",data:e.list}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",align:"center"}}),n("el-table-column",{attrs:{prop:"title",label:"消息标题","header-align":"center"}}),n("el-table-column",{attrs:{prop:"content",label:"系统消息",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.onContent(a)}}},[e._v("点击查看")])]}}])}),n("el-table-column",{attrs:{label:"管理员信息",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.sender?n.sender.name:"")+" ")]}}])}),n("el-table-column",{attrs:{prop:"created_at",label:"发送时间",width:"150",align:"center"}}),e._e(),n("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onAddOrUpdate(a)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.onDelete(a)}}},[e._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.pages.total>0,expression:"pages.total > 0"}],attrs:{total:e.pages.total,page:e.pages.current,limit:e.pages.limit},on:{"update:page":function(t){return e.$set(e.pages,"current",t)},"update:limit":function(t){return e.$set(e.pages,"limit",t)},pagination:function(t){return e.getList()}}}),e.addOrUpdateVisible?n("add-or-update",{ref:"addOrUpdate",attrs:{"add-or-update-visible":e.addOrUpdateVisible},on:{"update:addOrUpdateVisible":function(t){e.addOrUpdateVisible=t},"update:add-or-update-visible":function(t){e.addOrUpdateVisible=t},refreshList:function(t){return e.getList()}}}):e._e(),n("el-dialog",{attrs:{title:e.form.title,width:"800px","append-to-body":"",visible:e.editTinymceVisible},on:{"update:visible":function(t){e.editTinymceVisible=t}}},[n("div",{staticClass:"dialog-img",domProps:{innerHTML:e._s(e.form.content)}})])],1)},i=[],r=n("5530"),o=(n("d3b7"),n("ac1f"),n("841c"),n("333d")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.form.id?e.$t("table.edit"):e.$t("table.add"),width:"1000px",visible:e.addOrUpdateVisible,"before-close":e.handleBeforeClose},on:{"update:visible":function(t){e.addOrUpdateVisible=t},closed:function(t){return e.onClose()}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[0===e.form.id?n("el-form-item",{attrs:{label:"选择用户",prop:"type"}},[n("el-radio-group",{model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("el-radio",{attrs:{label:0}},[e._v("全部用户")]),n("el-radio",{attrs:{label:1}},[e._v("指定用户")])],1)],1):e._e(),0===e.form.id&&1===e.type?n("el-form-item",{attrs:{label:"用户账号"}},[n("el-input",{attrs:{placeholder:"用户账号",clearable:""},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1):e._e(),n("el-form-item",{attrs:{label:"消息标题",prop:"title"}},[n("el-input",{attrs:{placeholder:"消息标题",clearable:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"消息内容",prop:"content"}},[n("tinymce",{attrs:{height:400},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return e.onFormSubmit()}}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")]),n("el-button",{on:{click:function(t){return e.handleBeforeClose()}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")])],1)],1)},c=[],u=n("15fd"),s=n("b775"),d=["id"];function f(e){return s["a"].get("/messages",{params:e})}function p(e){var t=e.id,n=Object(u["a"])(e,d),a="POST",i="/messages";return t>0&&(a="PUT",i+="/".concat(t),n.id=t),Object(s["a"])({url:i,method:a,data:n})}function b(e){return s["a"].delete("/messages/".concat(e))}var m=n("8256"),v={name:"AddOrUpdate",components:{Tinymce:m["a"]},props:{addOrUpdateVisible:{type:Boolean,default:!1}},data:function(){return{btnLoading:!1,accountOptions:[],type:0,form:{id:0,account:"",title:"",content:""},rules:{title:[{required:!0,message:"请输入消息标题",trigger:["blur","change"]}],content:[{required:!0,message:"请输入消息内容",trigger:["blur","change"]}],account:[{required:!0,message:"请选择用户",trigger:["blur","change"]}]}}},methods:{init:function(e){if(e){var t=e.id,n=e.title,a=e.content;this.form=Object.assign({},this.form,{id:t,title:n,content:a})}},onFormSubmit:function(){var e=this;this.$refs["form"].validate((function(t){if(t){e.btnLoading=!0;var n=e.form;0===n.type&&""===n.period_id&&delete n.period_id,p(n).then((function(t){var n=t.msg;e.$message.success(n),e.handleBeforeClose(),e.$emit("refreshList")})).catch((function(){e.btnLoading=!1}))}}))},onClose:function(){this.$reset()},handleBeforeClose:function(){this.$emit("update:addOrUpdateVisible",!1)}}},g=v,h=n("2877"),y=Object(h["a"])(g,l,c,!1,null,null,null),w=y.exports,O=n("5f87"),k=n("3800"),_={name:"Message",components:{Pagination:o["a"],AddOrUpdate:w},data:function(){return{domin:Object(O["c"])(O["a"]),list:[],search:{start:"",end:""},form:{title:"",content:""},pages:{total:0,limit:20,current:1},dateRangeValue:[],pickerOptions:k["i"],loading:!1,addOrUpdateVisible:!1,editTinymceVisible:!1}},created:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pages.current,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.loading||(this.loading=n,1===t&&(this.pages.current=t),f(Object(r["a"])(Object(r["a"])({page:t},this.search),{},{limit:this.pages.limit})).then((function(t){e.list=t.data.data,e.pages.total=t.data.total})).catch((function(){})).finally((function(){e.loading=!1})))},onAddOrUpdate:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick((function(){t.$refs.addOrUpdate&&t.$refs.addOrUpdate.init(e)}))},onChangeDateRange:function(e){Array.isArray(e)?(this.search.start=e[0],this.search.end=e[1]):(this.search.start="",this.search.end="",this.getList(1))},onDelete:function(e){var t=this;this.$confirm("确定对[(#".concat(e.id,")]进行[删除]操作?"),"删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error",cancelButtonClass:"btn-custom-cancel"}).then((function(){b(e.id).then((function(e){var n=e.msg,a=void 0===n?"删除成功":n;t.$message.success(a),t.getList()})).catch((function(){t.$message.error("删除失败")}))})).catch((function(){}))},onContent:function(e){this.form=Object(r["a"])({},e),this.editTinymceVisible=!0}}},T=_,x=(n("37aa"),Object(h["a"])(T,a,i,!1,null,"1f9fb8ac",null));t["default"]=x.exports},3123:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("b775");function i(){return a["a"].get("/token")}},"37aa":function(e,t,n){"use strict";n("e461")},3800:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"j",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"l",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"k",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"i",(function(){return b}));var a=[{label:"全部",value:""}],i=[{label:"全部",value:""},{label:"微信",value:"wxpay"},{label:"京东",value:"jdpay"},{label:"支付宝",value:"alipay"},{label:"银行卡",value:"bank"}],r=[{label:"全部",value:""},{label:"上架",value:0},{label:"下架",value:1}],o=[{label:"全部",value:""},{label:"通过",value:1,type:"success"},{label:"失败",value:2,type:"danger"}],l=[{label:"全部",value:""},{label:"否",value:0},{label:"是",value:1}],c=[{label:"一次性",value:"once",type:"warning"},{label:"长期",value:"long",type:"success"},{label:"指定藏品",value:"appoint",type:"primary"}],u=[{label:"全部",value:""},{label:"常规藏品",value:0,type:"primary"},{label:"盲盒藏品",value:1,type:"warning"},{label:"空投藏品",value:2,type:"primary"},{label:"合成藏品",value:3,type:"success"},{label:"资格券",value:5,type:"danger"},{label:"活动藏品",value:7,type:"danger"}],s=[{label:"全部",value:""},{label:"藏品订单",value:"goods",type:"primary"},{label:"盲盒订单",value:"box",type:"warning"}],d=[{label:"全部",value:""},{label:"待付款",value:0,type:"warning"},{label:"待发放",value:1,type:"primary"},{label:"已完成",value:2,type:"success"},{label:"已关闭",value:3,type:"info"},{label:"异常订单",value:4,type:"danger"}],f=[{label:"普通",value:0,type:"info"},{label:"3D",value:1,type:"primary"},{label:"视频",value:2,type:"warning"}],p=[{label:"指定藏品",value:"goods",type:"primary"},{label:"指定专区",value:"issuer",type:"warning"}],b={shortcuts:[{text:"最近24小时",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-864e5),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]}},"72bc":function(e,t,n){"use strict";var a=n("d4ec"),i=n("bee2"),r=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("b0c0"),n("ac1f"),n("1276"),n("b680"),function(){function e(t,n){return Object(a["a"])(this,e),this.video=document.createElement("video"),this.video.preload="metadata",this.video.src=URL.createObjectURL(t),this.init(t,n)}return Object(i["a"])(e,[{key:"init",value:function(e,t){var n=this;return new Promise((function(a){var i=n.fileLengthFormat(e.size,t),r=n.getFileType(e.name);"mp4"===r?n.video.onloadedmetadata=function(){window.URL.revokeObjectURL(n.video.src);var e=n.video.duration;a({fileSize:i,duration:e,type:r,height:n.video.videoHeight,width:n.video.videoWidth})}:a({fileSize:i,duration:0,type:r,height:n.video.videoHeight,width:n.video.videoWidth})}))}},{key:"getFileType",value:function(e){var t=e.split("."),n="";return void 0!==t&&(t.length<=1&&e.indexOf("=")>-1?(console.log("输入是文件地址：",t),!1):(n=t[t.length-1],n=n.toLowerCase(),n))}},{key:"fileLengthFormat",value:function(e,t){var n,a=e/1024;if(a>1e3)return this.fileLengthFormat(a,++t);switch(t){case 1:n=a.toFixed(2);break;case 2:n=a.toFixed(2);break;case 3:n=a.toFixed(2);break;case 4:n=a.toFixed(2);break}return+n}}]),e}());t["a"]=r},e461:function(e,t,n){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ebb5230"],{"07ac":function(e,t,a){var i=a("23e7"),n=a("6f53").values;i({target:"Object",stat:!0},{values:function(e){return n(e)}})},"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function n(e,t){t?document.querySelector(t).scrollTop=e:(document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e)}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a,o){var l=r(),s=e-l,c=20,u=0;t="undefined"===typeof t?500:t;var d=function e(){u+=c;var r=Math.easeInOutQuad(u,l,s,t);n(r,a),u<t?i(e):o&&"function"===typeof o&&o()};d()}},"15fd":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("a4d3"),a("b64b");function i(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}function n(e,t){if(null==e)return{};var a,n,r=i(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}},"2bd7":function(e,t,a){"use strict";a("bd3a")},3123:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("b775");function n(){return i["a"].get("/token")}},3466:function(e,t,a){},3800:function(e,t,a){"use strict";a.d(t,"h",(function(){return i})),a.d(t,"g",(function(){return n})),a.d(t,"j",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"l",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"k",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return f})),a.d(t,"i",(function(){return p}));var i=[{label:"全部",value:""}],n=[{label:"全部",value:""},{label:"微信",value:"wxpay"},{label:"京东",value:"jdpay"},{label:"支付宝",value:"alipay"},{label:"银行卡",value:"bank"}],r=[{label:"全部",value:""},{label:"上架",value:0},{label:"下架",value:1}],o=[{label:"全部",value:""},{label:"通过",value:1,type:"success"},{label:"失败",value:2,type:"danger"}],l=[{label:"全部",value:""},{label:"否",value:0},{label:"是",value:1}],s=[{label:"一次性",value:"once",type:"warning"},{label:"长期",value:"long",type:"success"},{label:"指定藏品",value:"appoint",type:"primary"}],c=[{label:"全部",value:""},{label:"常规藏品",value:0,type:"primary"},{label:"盲盒藏品",value:1,type:"warning"},{label:"空投藏品",value:2,type:"primary"},{label:"合成藏品",value:3,type:"success"},{label:"资格券",value:5,type:"danger"},{label:"活动藏品",value:7,type:"danger"}],u=[{label:"全部",value:""},{label:"藏品订单",value:"goods",type:"primary"},{label:"盲盒订单",value:"box",type:"warning"}],d=[{label:"全部",value:""},{label:"待付款",value:0,type:"warning"},{label:"待发放",value:1,type:"primary"},{label:"已完成",value:2,type:"success"},{label:"已关闭",value:3,type:"info"},{label:"异常订单",value:4,type:"danger"}],m=[{label:"普通",value:0,type:"info"},{label:"3D",value:1,type:"primary"},{label:"视频",value:2,type:"warning"}],f=[{label:"指定藏品",value:"goods",type:"primary"},{label:"指定专区",value:"issuer",type:"warning"}],p={shortcuts:[{text:"最近24小时",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-864e5),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}},"6f53":function(e,t,a){var i=a("83ab"),n=a("e330"),r=a("df75"),o=a("fc6a"),l=a("d1e7").f,s=n(l),c=n([].push),u=function(e){return function(t){var a,n=o(t),l=r(n),u=l.length,d=0,m=[];while(u>d)a=l[d++],i&&!s(n,a)||c(m,e?[a,n[a]]:n[a]);return m}};e.exports={entries:u(!0),values:u(!1)}},"711b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{inline:!0}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.onAddOrUpdate()}}},[e._v(" "+e._s(e.$t("table.add"))+" ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.list,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",align:"center"}}),a("el-table-column",{attrs:{width:"120",label:"封面图","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("div",{staticClass:"info-wrapper"},[a("el-image",{staticClass:"image-item",attrs:{src:i.image&&e.domin+i.image,"preview-src-list":[e.domin+i.image]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1)]}}])}),a("el-table-column",{attrs:{"min-width":"180",label:"活动标题","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.title)+" ")]}}])}),a("el-table-column",{attrs:{width:"180",label:"活动时间","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("div",[e._v("开始："+e._s(i.start_time))]),a("div",[e._v("结束："+e._s(i.end_time))])]}}])}),a("el-table-column",{attrs:{width:"70",label:"上架状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-switch",{attrs:{"active-value":0,"inactive-value":1},on:{change:function(t){return e.onChangeStatus(i)}},model:{value:i.status,callback:function(t){e.$set(i,"status",t)},expression:"row.status"}})]}}])}),a("el-table-column",{attrs:{width:"60",prop:"sort",label:"排序",align:"center"}}),a("el-table-column",{attrs:{width:"140",prop:"created_at",label:"创建时间","header-align":"center"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onAddOrUpdate(i)}}},[e._v("编辑")]),a("el-button",{staticClass:"excel-btn",attrs:{loading:e.downloadLoading,type:"success",icon:"el-icon-document"},on:{click:function(t){return e.onHandleDownload(i)}}},[e._v(" "+e._s(e.$t("table.export"))+" Excel ")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.onDelete(i)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.pages.total>0,expression:"pages.total > 0"}],attrs:{total:e.pages.total,page:e.pages.current,limit:e.pages.limit},on:{"update:page":function(t){return e.$set(e.pages,"current",t)},"update:limit":function(t){return e.$set(e.pages,"limit",t)},pagination:function(t){return e.getList()}}}),e.addOrUpdateVisible?a("add-or-update-invite",{ref:"addOrUpdate",on:{refreshList:function(t){return e.getList()}}}):e._e()],1)},n=[],r=(a("d3b7"),a("5530")),o=a("15fd"),l=a("b775"),s=["id"],c=["id"];function u(e){return l["a"].get("/activity/filter/goods",{params:e})}function d(){return l["a"].get("/activity/filter/box")}function m(){return l["a"].get("/activity/invite_user/list")}function f(e){return l["a"].delete("/activity/invite_user/".concat(e))}function p(e){var t=e.id,a=Object(o["a"])(e,s),i="POST",n="/activity/invite_user";return t>0&&(i="PUT",n+="/".concat(t),a.id=t),Object(l["a"])({url:n,method:i,data:a})}function g(e){return l["a"].get("/activity/invite_user/".concat(e))}function b(e){var t=e.id,a=Object(o["a"])(e,c);return l["a"].put("/activity/invite_user/status/".concat(t),Object(r["a"])({},a))}function v(e){return l["a"].get("/activity/invite_user/export",{params:e})}var h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{visible:e.visible,title:e.form.id?e.$t("table.edit"):e.$t("table.add"),"close-on-click-modal":!1,"close-on-press-escape":!1,top:"30px"},on:{"update:visible":function(t){e.visible=t},closed:function(t){return e.onClose()}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"图片",prop:"image"}},[a("custom-upload",{attrs:{"class-name":"avatar-uploader"},on:{handleBeforeUpload:e.beforeAvatarUpload,handleSuccess:e.handleAvatarSuccess}},[e.form.image?a("img",{staticClass:"avatar",attrs:{src:e.domin+e.form.image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("div",{staticClass:"notice"},[e._v("注意：建议藏品图片尺寸 750*1000px")])],1),a("el-form-item",{attrs:{label:"活动标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入活动标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"开始时间",prop:"start_time"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"开始时间","picker-options":e.pickerOptions,clearable:""},model:{value:e.form.start_time,callback:function(t){e.$set(e.form,"start_time",t)},expression:"form.start_time"}})],1),a("el-form-item",{attrs:{label:"结束时间",prop:"end_time"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"结束时间","picker-options":e.pickerOptions,clearable:""},model:{value:e.form.end_time,callback:function(t){e.$set(e.form,"end_time",t)},expression:"form.end_time"}})],1),a("el-form-item",{attrs:{label:"开启活动",prop:"status"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-radio",{attrs:{label:0}},[e._v("是")]),a("el-radio",{attrs:{label:1}},[e._v("否")])],1)],1),a("el-form-item",{attrs:{label:"计数倍率",prop:"extend.power"}},[a("el-input-number",{attrs:{min:1,placeholder:"计数倍率"},model:{value:e.form.extend.power,callback:function(t){e.$set(e.form.extend,"power",t)},expression:"form.extend.power"}})],1),a("div",{staticClass:"level-box-wrap"},[a("div",{staticClass:"level-box"},[a("div",{staticClass:"title"},[e._v("等级奖励")]),a("div",{staticClass:"content"},e._l(e.form.reward,(function(t,i){return a("el-card",{key:i,staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tag",{attrs:{type:"warning"}},[e._v(e._s(i))]),Object.keys(e.form.reward).length>1?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){return e.deleteCard(i)}}},[a("i",{staticClass:"el-icon-delete"})]):e._e()],1),a("el-form-item",{staticClass:"reward-row",attrs:{label:"类型",prop:"reward."+i+".type",rules:{required:!0,message:"不能为空",trigger:["blur","change"]}}},[a("el-select",{attrs:{placeholder:"请选择奖品类型"},on:{change:function(a){return e.typeChange(t,i)}},model:{value:t.type,callback:function(a){e.$set(t,"type",a)},expression:"item.type"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"goods"===t.type?a("el-form-item",{staticClass:"reward-row",attrs:{label:"指定藏品",prop:"reward."+i+".target_id",rules:{required:!0,message:"不能为空",trigger:["blur","change"]}}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",clearable:"","popper-class":"popover-box"},on:{change:function(a){return e.goodsOrboxChange(t,i)}},model:{value:t.target_id,callback:function(a){e.$set(t,"target_id",a)},expression:"item.target_id"}},e._l(e.goodsOptions,(function(t,i){return a("el-option",{key:i,attrs:{label:t.label,value:t.value}},[a("el-tag",{attrs:{effect:"plain"}},[e._v(" "+e._s(t.serial)+" ")]),a("el-image",{staticClass:"good-img",attrs:{fit:"cover",src:t.image&&e.domin+t.image}}),a("span",[e._v(" "+e._s(t.label)+" ")]),a("span",[e._v("剩余库存："+e._s(t.stock))])],1)})),1)],1):e._e(),"box"===t.type?a("el-form-item",{staticClass:"reward-row",attrs:{label:"指定盲盒",prop:"reward."+i+".target_id",rules:{required:!0,message:"不能为空",trigger:["blur","change"]}}},[a("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",clearable:"","popper-class":"popover-box"},on:{change:function(a){return e.goodsOrboxChange(t,i)}},model:{value:t.target_id,callback:function(a){e.$set(t,"target_id",a)},expression:"item.target_id"}},e._l(e.boxOptions,(function(t,i){return a("el-option",{key:i,attrs:{label:t.label,value:t.value}},[a("el-tag",{attrs:{effect:"plain"}},[e._v(" "+e._s(t.value)+" ")]),a("el-image",{staticClass:"good-img",attrs:{fit:"cover",src:t.image&&e.domin+t.image}}),a("span",[e._v(" "+e._s(t.label)+" ")]),a("span",[e._v("剩余库存："+e._s(t.stock))])],1)})),1)],1):e._e(),a("el-form-item",{staticClass:"reward-row",attrs:{label:"奖励数量",prop:"reward."+i+".num",rules:{required:!0,message:"不能为空",trigger:["blur","change"]}}},[a("el-input-number",{staticStyle:{width:"180px"},attrs:{min:1,precision:0,"controls-position":"right"},model:{value:t.num,callback:function(a){e.$set(t,"num",a)},expression:"item.num"}})],1),a("el-form-item",{staticClass:"reward-row",attrs:{label:"邀请人数",prop:"reward."+i+".count",rules:{required:!0,message:"不能为空",trigger:["blur","change"]}}},[a("el-input-number",{staticStyle:{width:"180px"},attrs:{min:1,precision:0,"controls-position":"right"},model:{value:t.count,callback:function(a){e.$set(t,"count",a)},expression:"item.count"}})],1)],1)})),1)]),a("el-button",{staticClass:"level-btn",attrs:{icon:"el-icon-plus"},on:{click:e.addLevel}})],1),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input-number",{attrs:{min:0,label:"排序",precision:0,"controls-position":"right"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"活动详情",prop:"intro"}},[a("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.onTinymce(e.form)}}},[e._v(" 点击编辑 ")])],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:function(t){return e.onFormSubmit()}}},[e._v("确 定")]),a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")])],1)],1),e.editTinymceVisible?a("edit-tinymce",{ref:"editTinymce",on:{info:e.onInfo}}):e._e()],1)},y=[],w=(a("d9e2"),a("d81d"),a("b0c0"),a("caad"),a("2532"),a("07ac"),a("b64b"),a("a15b"),a("0eef")),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{top:"30px",width:"1000px","append-to-body":"",title:"活动详情",visible:e.visible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.visible=t},closed:function(t){return e.onClose()}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"活动详情",prop:"info"}},[e.visible?a("tinymce",{attrs:{height:400},model:{value:e.form.info,callback:function(t){e.$set(e.form,"info",t)},expression:"form.info"}}):e._e()],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onFormSubmit()}}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")]),a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")])],1)],1)},k=[],x=(a("ac1f"),a("5319"),a("8256")),O={name:"EditTinymce",components:{Tinymce:x["a"]},data:function(){return{visible:!1,form:{info:""},rules:{info:[{required:!0,message:"请输入内容",trigger:["blur","change"]}]}}},methods:{init:function(e){this.visible=!0,e&&(this.form.info=e.intro)},onFormSubmit:function(){var e=this;this.$refs["form"].validate((function(t){t&&(e.form.info=e.form.info.replace(/crossorigin=\"anonymous\"/g,""),e.$emit("info",e.form.info),e.visible=!1)}))},onClose:function(){this.$reset()}}},$=O,C=a("2877"),T=Object(C["a"])($,_,k,!1,null,"4ca00900",null),j=T.exports,L=a("5f87"),S={name:"AddOrUpdateInvite",components:{CustomUpload:w["a"],EditTinymce:j},data:function(){var e=this,t=function(t,a,i){Date.parse(e.form.start_time)-Date.parse(e.form.end_time)>0&&e.form.end_time?i(new Error("结束时间必须大于开始时间")):i()};return{domin:Object(L["c"])(L["a"]),visible:!1,btnLoading:!1,editTinymceVisible:!1,form:{id:0,title:"",image:"",intro:"",reward:{level1:{type:"box",num:0,count:1}},extend:{power:1},start_time:"",end_time:"",status:0,sort:0},stockFlag:{level1:!1},goodsOptions:[],boxOptions:[],typeOptions:[{value:"goods",label:"藏品"},{value:"box",label:"盲盒"}],pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},oldReward:{},rules:{title:[{required:!0,message:"不能为空",trigger:["blur","change"]}],image:[{required:!0,message:"不能为空",trigger:["blur","change"]}],reward_num:[{required:!0,message:"不能为空",trigger:["blur","change"]}],start_time:[{required:!0,message:"不能为空",trigger:["blur","change"]}],end_time:[{required:!0,message:"不能为空",trigger:["blur","change"]},{validator:t,trigger:["blur","change"]}],intro:[{required:!0,message:"不能为空",trigger:["blur","change"]}],status:[{required:!0,message:"不能为空",trigger:["blur","change"]}],sort:[{required:!0,message:"不能为空",trigger:["blur","change"]}],"reward.goods":[{required:!0,message:"不能为空",trigger:["blur","change"]}],"reward.box":[{required:!0,message:"不能为空",trigger:["blur","change"]}],"extend.power":[{required:!0,message:"不能为空",trigger:["blur","change"]}]}}},methods:{init:function(e){this.visible=!0,e&&this.getInviteDetail(e.id),this.getOptionsList()},getInviteDetail:function(e){var t=this;g(e).then((function(e){t.form=e.data}))},getOptionsList:function(){var e=this;u().then((function(t){e.goodsOptions=t.data.map((function(e){return{label:e.name,value:e.id,image:e.images&&e.images[0],serial:e.serial,stock:e.stock}}))})),d().then((function(t){e.boxOptions=t.data.map((function(e){return{label:e.name,value:e.id,image:e.images&&e.images[0],stock:e.stock}}))}))},onFormSubmit:function(){var e=this;this.$refs["form"].validate((function(t){t&&!Object.values(e.stockFlag).includes(!0)?(e.btnLoading=!0,p(e.form).then((function(t){var a=t.msg;e.$message.success(a),e.visible=!1,e.$emit("refreshList")})).catch((function(){e.btnLoading=!1}))):Object.values(e.stockFlag).includes(!0)&&e.$message.warning("库存数量或奖励数量有误")}))},addLevel:function(){var e=Object.keys(this.form.reward).length;this.$set(this.form.reward,"level".concat(e+1),{num:0,type:"box",count:1,target_id:""}),this.stockFlag["level".concat(e+1)]=!1},goodsOrboxChange:function(e,t){this.resetRewardData(e,t)},typeChange:function(e,t){this.$set(e,"target_id",""),this.resetRewardData(e,t)},resetRewardData:function(e,t){this.stockFlag[t]=!1,e.num=1,e.stock=0},deleteCard:function(e){var t=this;this.$confirm("此操作将删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$delete(t.form.reward,e),delete t.stockFlag[e],t.$message({type:"success",message:"删除成功!"})}))},validateReward:function(e,t,a){if(!Object.keys(t).length>0)return a(new Error("不能为空"));a()},onClose:function(){this.$reset()},beforeAvatarUpload:function(e,t){var a=["image/jpeg","image/jpg","image/png","image/gif"],i=e.size/1024/1024<20;return a.includes(e.type)?i?void t(!0):(this.$message.error("上传图片大小不能超过 20M"),void t(!1)):(this.$message.error("上传图片只能是 "+a.join(",")+" 格式!"),void t(!1))},handleAvatarSuccess:function(e,t){this.form.image=e.name},onTinymce:function(e){var t=this;this.editTinymceVisible=!0,this.$nextTick((function(){t.$refs.editTinymce&&t.$refs.editTinymce.init(e)}))},onInfo:function(e){this.form.intro=e}}},D=S,F=(a("2bd7"),Object(C["a"])(D,h,y,!1,null,"495212cb",null)),q=F.exports,U=a("333d"),A=a("3800"),E={name:"Invite",components:{AddOrUpdateInvite:q,Pagination:U["a"]},data:function(){return{domin:Object(L["c"])(L["a"]),list:[],loading:!1,downloadLoading:!1,data:{},addOrUpdateVisible:!1,exportActivityVisible:!1,statusOptions:A["j"],activityTypeOptions:A["a"],activity_id:0,pages:{total:0,limit:20,current:1}}},created:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pages.current,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.loading||(this.loading=a,1===t&&(this.pages.current=t),m({page:t,limit:this.pages.limit}).then((function(t){e.list=t.data.data,e.pages.total=t.data.total})).catch((function(){})).finally((function(){e.loading=!1})))},onDelete:function(e){var t=this;this.$confirm("确定[(#".concat(e.id,")]进行[删除]操作?"),"删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error",cancelButtonClass:"btn-custom-cancel"}).then((function(){f(e.id).then((function(e){var a=e.msg,i=void 0===a?"删除成功":a;t.$message.success(i),t.init()})).catch((function(){t.$message.error("删除失败")}))})).catch((function(){}))},onAddOrUpdate:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick((function(){t.$refs.addOrUpdate&&t.$refs.addOrUpdate.init(e)}))},onHandleDownload:function(e){var t=this;this.downloadLoading=!0,v({activity_id:e.id}).then((function(e){location.href="/"+e.data.filename})).catch((function(e){})).finally((function(e){t.downloadLoading=!1}))},onChangeStatus:function(e){var t=this;b({id:e.id,status:e.status}).then((function(e){t.$message.success(e.msg),t.getList()}))}}},I=E,R=(a("f798"),Object(C["a"])(I,i,n,!1,null,"2965966c",null));t["default"]=R.exports},"72bc":function(e,t,a){"use strict";var i=a("d4ec"),n=a("bee2"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("b0c0"),a("ac1f"),a("1276"),a("b680"),function(){function e(t,a){return Object(i["a"])(this,e),this.video=document.createElement("video"),this.video.preload="metadata",this.video.src=URL.createObjectURL(t),this.init(t,a)}return Object(n["a"])(e,[{key:"init",value:function(e,t){var a=this;return new Promise((function(i){var n=a.fileLengthFormat(e.size,t),r=a.getFileType(e.name);"mp4"===r?a.video.onloadedmetadata=function(){window.URL.revokeObjectURL(a.video.src);var e=a.video.duration;i({fileSize:n,duration:e,type:r,height:a.video.videoHeight,width:a.video.videoWidth})}:i({fileSize:n,duration:0,type:r,height:a.video.videoHeight,width:a.video.videoWidth})}))}},{key:"getFileType",value:function(e){var t=e.split("."),a="";return void 0!==t&&(t.length<=1&&e.indexOf("=")>-1?(console.log("输入是文件地址：",t),!1):(a=t[t.length-1],a=a.toLowerCase(),a))}},{key:"fileLengthFormat",value:function(e,t){var a,i=e/1024;if(i>1e3)return this.fileLengthFormat(i,++t);switch(t){case 1:a=i.toFixed(2);break;case 2:a=i.toFixed(2);break;case 3:a=i.toFixed(2);break;case 4:a=i.toFixed(2);break}return+a}}]),e}());t["a"]=r},bd3a:function(e,t,a){},f798:function(e,t,a){"use strict";a("3466")}}]);
webpackJsonp([4],{232:function(t,e,a){"use strict";function o(t){c||a(810)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(443),s=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);var i=a(812),l=(a.n(i),a(4)),c=!1,d=o,u=Object(l.a)(s.a,i.render,i.staticRenderFns,!1,d,"data-v-513cb354",null);u.options.__file="src\\views\\system\\user.vue",e.default=u.exports},443:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(33),r=function(t){return t&&t.__esModule?t:{default:t}}(o),s=function(t,e,a,o){return e("Button",{props:{type:"primary"},style:{margin:"0 5px"},on:{click:function(){t.formItem.id=a.id,t.formItem.username=a.username,t.formItem.nickname=a.nickname,t.formItem.password="ApiAdmin",r.default.get("Auth/getGroups").then(function(e){var a=e.data;1===a.code?t.groupList=a.data.list:-14===a.code?(t.$store.commit("logout",t),t.$router.push({name:"login"})):t.$Message.error(a.msg)}),t.formItem.groupId=a.groupId,t.modalSetting.show=!0,t.modalSetting.index=o}}},"编辑")},n=function(t,e,a,o){return e("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗? ",transfer:!0},on:{"on-ok":function(){r.default.get("User/del",{params:{id:a.id}}).then(function(e){a.loading=!1,1===e.data.code?(t.tableData.splice(o,1),t.$Message.success(e.data.msg)):t.$Message.error(e.data.msg)})}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top",loading:a.isDeleting}},"删除")])};e.default={name:"system_user",data:function(){return{columnsList:[{title:"序号",type:"index",width:65,align:"center"},{title:"用户账号",align:"center",key:"username"},{title:"真实姓名",align:"center",key:"nickname",width:120},{title:"登录次数",align:"center",key:"loginTimes",width:90},{title:"最后登录时间",align:"center",key:"lastLoginTime",width:160},{title:"最后登录IP",align:"center",key:"lastLoginIp",width:160},{title:"状态",align:"center",key:"status",width:100},{title:"操作",align:"center",key:"handle",width:175,handle:["edit","delete"]}],tableData:[],groupList:[],tableShow:{currentPage:1,pageSize:10,listCount:0},searchConf:{type:"",keywords:"",status:""},modalSetting:{show:!1,loading:!1,index:0},formItem:{username:"",nickname:"",password:"",groupId:[],id:0},ruleValidate:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],nickname:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"}]}}},created:function(){this.init(),this.getList()},methods:{init:function(){var t=this;this.columnsList.forEach(function(e){e.handle&&(e.render=function(e,a){var o=t.tableData[a.index];return e("div",[s(t,e,o,a.index),n(t,e,o,a.index)])}),"status"===e.key&&(e.render=function(e,a){var o=t.tableData[a.index];return e("i-switch",{attrs:{size:"large"},props:{"true-value":1,"false-value":0,value:o.status},on:{"on-change":function(e){r.default.get("User/changeStatus",{params:{status:e,id:o.id}}).then(function(e){var a=e.data;1===a.code?t.$Message.success(a.msg):-14===a.code?(t.$store.commit("logout",t),t.$router.push({name:"login"})):(t.$Message.error(a.msg),t.getList()),t.cancel()})}}},[e("span",{slot:"open"},"启用"),e("span",{slot:"close"},"禁用")])})})},alertAdd:function(){var t=this;r.default.get("Auth/getGroups").then(function(e){var a=e.data;1===a.code?t.groupList=a.data.list:-14===a.code?(t.$store.commit("logout",t),t.$router.push({name:"login"})):t.$Message.error(a.msg)}),this.modalSetting.show=!0},submit:function(){var t=this,e=this;this.$refs.myForm.validate(function(a){if(a){e.modalSetting.loading=!0;var o="";o=0===t.formItem.id?"User/add":"User/edit",r.default.post(o,t.formItem).then(function(t){1===t.data.code?e.$Message.success(t.data.msg):e.$Message.error(t.data.msg),e.getList(),e.cancel()})}})},cancel:function(){this.modalSetting.show=!1},doCancel:function(t){t||(this.formItem.id=0,this.$refs.myForm.resetFields(),this.modalSetting.loading=!1,this.modalSetting.index=0)},changePage:function(t){this.tableShow.currentPage=t,this.getList()},changeSize:function(t){this.tableShow.pageSize=t,this.getList()},search:function(){this.tableShow.currentPage=1,this.getList()},getList:function(){var t=this;r.default.get("User/index",{params:{page:t.tableShow.currentPage,size:t.tableShow.pageSize,type:t.searchConf.type,keywords:t.searchConf.keywords,status:t.searchConf.status}}).then(function(e){var a=e.data;1===a.code?(t.tableData=a.data.list,t.tableShow.listCount=a.data.count):-14===a.code?(t.$store.commit("logout",t),t.$router.push({name:"login"})):t.$Message.error(a.msg)})}}}},810:function(t,e,a){var o=a(811);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a(15).default;r("05a70c58",o,!1,{})},811:function(t,e,a){e=t.exports=a(14)(!1),e.push([t.i,"",""])},812:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",{staticStyle:{"margin-bottom":"10px"}},[a("Form",{attrs:{inline:""}},[a("FormItem",{staticStyle:{"margin-bottom":"0"}},[a("Select",{staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"请选择状态"},model:{value:t.searchConf.status,callback:function(e){t.$set(t.searchConf,"status",e)},expression:"searchConf.status"}},[a("Option",{attrs:{value:1}},[t._v("启用")]),t._v(" "),a("Option",{attrs:{value:0}},[t._v("禁用")])],1)],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0"}},[a("Select",{staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"请选择类别"},model:{value:t.searchConf.type,callback:function(e){t.$set(t.searchConf,"type",e)},expression:"searchConf.type"}},[a("Option",{attrs:{value:1}},[t._v("用户账号")]),t._v(" "),a("Option",{attrs:{value:2}},[t._v("真实姓名")])],1)],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0"}},[a("Input",{attrs:{placeholder:""},model:{value:t.searchConf.keywords,callback:function(e){t.$set(t.searchConf,"keywords",e)},expression:"searchConf.keywords"}})],1),t._v(" "),a("FormItem",{staticStyle:{"margin-bottom":"0"}},[a("Button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询/刷新")])],1)],1)],1)],1)],1),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("Card",[a("p",{staticStyle:{height:"32px"},attrs:{slot:"title"},slot:"title"},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.alertAdd}},[t._v("新增")])],1),t._v(" "),a("div",[a("Table",{attrs:{columns:t.columnsList,data:t.tableData,border:"","disabled-hover":""}})],1),t._v(" "),a("div",{staticClass:"margin-top-15",staticStyle:{"text-align":"center"}},[a("Page",{attrs:{total:t.tableShow.listCount,current:t.tableShow.currentPage,"page-size":t.tableShow.pageSize,"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":t.changePage,"on-page-size-change":t.changeSize}})],1)])],1)],1),t._v(" "),a("Modal",{attrs:{width:"668",styles:{top:"30px"}},on:{"on-visible-change":t.doCancel},model:{value:t.modalSetting.show,callback:function(e){t.$set(t.modalSetting,"show",e)},expression:"modalSetting.show"}},[a("p",{staticStyle:{color:"#2d8cf0"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"md-information-circle"}}),t._v(" "),a("span",[t._v(t._s(t.formItem.id?"编辑":"新增")+"用户")])],1),t._v(" "),a("Form",{ref:"myForm",attrs:{rules:t.ruleValidate,model:t.formItem,"label-width":80}},[a("FormItem",{attrs:{label:"用户账号",prop:"username"}},[a("Input",{attrs:{placeholder:"请输入账号"},model:{value:t.formItem.username,callback:function(e){t.$set(t.formItem,"username",e)},expression:"formItem.username"}})],1),t._v(" "),a("FormItem",{attrs:{label:"真实姓名",prop:"nickname"}},[a("Input",{attrs:{placeholder:"请输入账号"},model:{value:t.formItem.nickname,callback:function(e){t.$set(t.formItem,"nickname",e)},expression:"formItem.nickname"}})],1),t._v(" "),a("FormItem",{attrs:{label:"用户密码",prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"用户密码"},model:{value:t.formItem.password,callback:function(e){t.$set(t.formItem,"password",e)},expression:"formItem.password"}})],1),t._v(" "),a("FormItem",{attrs:{label:"权限组",prop:"groupId"}},[a("CheckboxGroup",{model:{value:t.formItem.groupId,callback:function(e){t.$set(t.formItem,"groupId",e)},expression:"formItem.groupId"}},t._l(t.groupList,function(e){return a("Checkbox",{key:e.id,attrs:{label:e.id+""}},[t._v(t._s(e.name))])}),1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-right":"8px"},attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"primary",loading:t.modalSetting.loading},on:{click:t.submit}},[t._v("确定")])],1)],1)],1)},r=[];o._withStripped=!0,e.render=o,e.staticRenderFns=r}});
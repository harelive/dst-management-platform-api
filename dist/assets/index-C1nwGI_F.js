import{h as B,_ as Se,o as Be,u as Ee,a as Le,g as De,c as me,E as Ue,r as p,b as Ae,d as f,e as ce,f as l,w as e,i as g,t as n,j as a,k as N,l as v,m as r,n as z,p as pe,q as fe,F as Me,s as Pe,v as Fe,x as J,y as Re,z as ve,A as d,B as ge}from"./index-CjVQdqiy.js";import{e as Q}from"./index-CRlSfwWO.js";import{f as Ne}from"./tools-CuQXwsJG.js";const $={roomInfo:{url:"/home/room_info",get:async function(h){return await B.get(this.url,h)}},sysInfo:{url:"/home/sys_info",get:async function(h){return await B.get(this.url,h)}},exec:{url:"/home/exec",post:async function(h){return await B.post(this.url,h)}},interface:{announce:{url:"/home/announce",post:async function(h){return await B.post(this.url,h)}},console:{url:"/home/console",post:async function(h){return await B.post(this.url,h)}}}},qe={class:"page-div"},Ke={class:"card-header"},Ge={class:"card-header"},Oe={class:"fcc"},je={class:"percentage-value"},He={class:"percentage-value"},We={class:"percentage-label"},Je={class:"card-header"},Qe={class:"card-header"},Xe={__name:"index",setup(h){Be(()=>{he(),be(),_e(),ye(),we()});const{t:o}=Ee(),{isMobile:C}=Le(),E=De();me(()=>E.isDark);const _=me(()=>E.language),he=()=>{E.needUpdatePassword&&(Ue({title:o("home.updatePasswordTitle"),message:o("home.updatePassword"),type:"warning"}),E.needUpdatePassword=!1)};p(!1);const q=p(!1),K=p(!1),V=p({server:0,local:0}),L=p(""),_e=()=>{q.value=!0,Q.dstVersion.get().then(u=>{V.value=u.data}).finally(()=>{q.value=!1})},ye=()=>{K.value=!0,Q.connectionCode.get().then(u=>{L.value=u.data}).finally(()=>{K.value=!1})},m=p({roomSettingBase:{},seasonInfo:{season:{},cycles:0,elapsedDays:0,seasonLength:{summer:15,autumn:20,spring:20,winter:15},phase:{}},modsCount:0}),be=()=>{$.roomInfo.get().then(u=>{m.value=u.data})},X=u=>m.value.seasonInfo.cycles>-1?`(${m.value.seasonInfo.elapsedDays}/${m.value.seasonInfo.seasonLength[u]})`:"",y=p({cpu:0,memory:0,master:0,caves:0}),ke=()=>{$.sysInfo.get().then(u=>{y.value=u.data})},Y=[{color:"#5cb87a",percentage:20},{color:"#1989fa",percentage:40},{color:"#e6a23c",percentage:60},{color:"#f56c6c",percentage:80},{color:"#6f7ad3",percentage:100}];let D=null;const we=()=>{D=setInterval(()=>{!U.value&&!A.value&&ke()},2e3)},Z=()=>{D&&(clearInterval(D),D=null)},U=p(!1),A=p(!1),ee=u=>{if(y.value.master,u==="master"){const t={type:"masterSwitch",info:y.value.master};U.value=!0,$.exec.post(t).finally(()=>{U.value=!1})}else{const t={type:"cavesSwitch",info:y.value.caves};A.value=!0,$.exec.post(t).finally(()=>{A.value=!1})}},c=(u,t)=>{const M={startup:{en:"STARTUP",zh:"启动"},rollback:{en:"ROLLBACK",zh:"回档"},shutdown:{en:"SHUTDOWN",zh:"关闭"},restart:{en:"RESTART",zh:"重启"},update:{en:"UPDATE GAME",zh:"更新游戏"},reset:{en:"RESET GAME",zh:"重置游戏"},delete:{en:"DELETE GAME",zh:"删除世界"}};Fe.confirm(_.value==="zh"?`将执行 ${M[u].zh} 操作，是否继续？`:`The ${M[u].en} operation will be performed. Do you want to continue?`,_.value==="zh"?"请确认您的操作":"Please confirm your operation",{confirmButtonText:_.value==="zh"?"确定":"confirm",cancelButtonText:_.value==="zh"?"取消":"cancel",type:"warning",beforeClose:(W,i,b)=>{if(W==="confirm"){i.confirmButtonLoading=!0;const P={type:u,info:t};$.exec.post(P).then(k=>{J(k.message),b()}).catch(()=>{}).finally(()=>{i.confirmButtonLoading=!1})}else b()}}).then(()=>{}).catch(()=>{Re(o("home.canceled"))})},G=p(!1),T=p({message:""}),le=()=>{if(T.value.message===""){ve(_.value==="zh"?"请输入要宣告的内容":"Please enter the content to be announced");return}G.value=!0,$.interface.announce.post(T.value).then(u=>{J(u.message),T.value.message=""}).finally(()=>{G.value=!1})},O=p(!1),x=p({cmd:"",world:"master"}),te=()=>{if(x.value.cmd===""){ve(_.value==="zh"?"请输入要执行的命令":"Please enter the command to execute");return}O.value=!0,$.interface.console.post(x.value).then(u=>{J(u.message),x.value.cmd=""}).finally(()=>{O.value=!1})},j=p(!1),H=p(!1),ae=p([]),ze=()=>{j.value=!0,H.value=!0,Q.modInfo.get().then(u=>{ae.value=u.data}).finally(()=>{H.value=!1})};return Ae(()=>{Z(),window.removeEventListener("beforeunload",Z)}),(u,t)=>{const M=d("DocumentCopy"),W=d("el-icon"),i=d("el-button"),b=d("el-descriptions-item"),P=d("el-tooltip"),k=d("el-tag"),Ce=d("el-descriptions"),F=d("el-card"),w=d("el-col"),oe=d("el-progress"),ne=d("el-row"),se=d("el-switch"),I=d("el-form-item"),R=d("el-form"),ue=d("el-input"),re=d("el-option"),xe=d("el-select"),S=d("el-table-column"),Ie=d("el-image"),$e=d("el-table"),Ve=d("el-dialog"),ie=ge("copy"),de=ge("loading");return f(),ce("div",qe,[l(ne,{gutter:10},{default:e(()=>[l(w,{span:12,lg:12,md:12,sm:24,xs:24,style:{"margin-top":"10px"}},{default:e(()=>[l(F,{shadow:"never",style:{"min-height":"250px"}},{header:e(()=>[g("div",Ke,n(a(o)("home.roomInfo")),1)]),default:e(()=>[l(Ce,{column:a(C)?1:2},{default:e(()=>[l(b,{label:a(o)("home.roomName")},{default:e(()=>[N((f(),v(i,{link:"",type:"primary"},{default:e(()=>[r(n(m.value.roomSettingBase.name)+" ",1),l(W,{style:{"margin-left":"3px"}},{default:e(()=>[l(M)]),_:1})]),_:1})),[[ie,m.value.roomSettingBase.name]])]),_:1},8,["label"]),l(b,{label:a(o)("home.connectionCode")},{default:e(()=>[l(P,{effect:"light",content:L.value,placement:"top"},{default:e(()=>[N((f(),v(i,{disabled:L.value==="",link:"",loading:K.value,type:"primary"},{default:e(()=>[r(n(a(o)("home.copy")),1)]),_:1},8,["disabled","loading"])),[[ie,L.value]])]),_:1},8,["content"])]),_:1},8,["label"]),l(b,{label:a(o)("home.cycles")},{default:e(()=>[l(k,{type:m.value.seasonInfo.cycles>-1?"success":"danger"},{default:e(()=>[r(n(m.value.seasonInfo.cycles),1)]),_:1},8,["type"])]),_:1},8,["label"]),l(b,{label:a(o)("home.phase")},{default:e(()=>[_.value==="en"?(f(),v(k,{key:0,type:m.value.seasonInfo.phase.en==="Failed to retrieve"?"danger":"success"},{default:e(()=>[r(n(m.value.seasonInfo.phase.en),1)]),_:1},8,["type"])):z("",!0),_.value==="zh"?(f(),v(k,{key:1,type:m.value.seasonInfo.phase.zh==="获取失败"?"danger":"success"},{default:e(()=>[r(n(m.value.seasonInfo.phase.zh),1)]),_:1},8,["type"])):z("",!0)]),_:1},8,["label"]),l(b,{label:a(o)("home.season")},{default:e(()=>[_.value==="en"?(f(),v(k,{key:0,type:m.value.seasonInfo.cycles>-1?"success":"danger"},{default:e(()=>[r(n(m.value.seasonInfo.season.en)+" "+n(X(m.value.seasonInfo.season.en)),1)]),_:1},8,["type"])):z("",!0),_.value==="zh"?(f(),v(k,{key:1,type:m.value.seasonInfo.cycles>-1?"success":"danger"},{default:e(()=>[r(n(m.value.seasonInfo.season.zh)+" "+n(X(m.value.seasonInfo.season.en)),1)]),_:1},8,["type"])):z("",!0)]),_:1},8,["label"]),l(b,{label:a(o)("home.mods")},{default:e(()=>[l(k,null,{default:e(()=>[r(n(m.value.modsCount),1)]),_:1}),l(i,{link:"",type:"primary",onClick:ze,style:{"margin-left":"10px"}},{default:e(()=>[r(n(a(o)("home.modsButton")),1)]),_:1})]),_:1},8,["label"]),l(b,{label:a(o)("home.version")},{default:e(()=>[N((f(),v(k,{type:V.value.local===V.value.server?"success":"danger"},{default:e(()=>[r("("+n(V.value.local)+"/"+n(V.value.server)+")",1)]),_:1},8,["type"])),[[de,q.value]])]),_:1},8,["label"])]),_:1},8,["column"])]),_:1})]),_:1}),l(w,{span:12,lg:12,md:12,sm:24,xs:24,style:{"margin-top":"10px"}},{default:e(()=>[l(F,{shadow:"never",style:{"min-height":"250px"}},{header:e(()=>[g("div",Ge,n(a(o)("home.sysInfo")),1)]),default:e(()=>[g("div",Oe,[l(oe,{type:"dashboard",percentage:y.value.cpu,color:Y},{default:e(({percentage:s})=>[g("span",je,n(s.toFixed(1)),1),t[24]||(t[24]=g("span",{class:"percentage-label"},"CPU",-1))]),_:1},8,["percentage"]),l(oe,{type:"dashboard",percentage:y.value.memory,color:Y,style:{"margin-left":"10%"}},{default:e(({percentage:s})=>[g("span",He,n(s.toFixed(1)),1),g("span",We,n(a(o)("home.mem")),1)]),_:1},8,["percentage"])])]),_:1})]),_:1})]),_:1}),l(ne,{gutter:10},{default:e(()=>[l(w,{span:12,lg:12,md:12,sm:24,xs:24,style:{"margin-top":"10px"}},{default:e(()=>[l(F,{shadow:"never",style:pe(a(C)?"min-height: 300px":"min-height: 400px")},{header:e(()=>[g("div",Je,n(a(o)("home.control")),1)]),default:e(()=>[g("div",null,[l(R,{size:"large",inline:""},{default:e(()=>[l(I,{label:u.$t("home.master")},{default:e(()=>[l(se,{modelValue:y.value.master,"onUpdate:modelValue":t[0]||(t[0]=s=>y.value.master=s),"active-value":1,"inactive-value":0,onChange:t[1]||(t[1]=s=>ee("master")),loading:U.value,"inline-prompt":"","active-text":u.$t("home.running"),"inactive-text":u.$t("home.terminated")},null,8,["modelValue","loading","active-text","inactive-text"])]),_:1},8,["label"]),l(I,{label:u.$t("home.caves")},{default:e(()=>[l(se,{modelValue:y.value.caves,"onUpdate:modelValue":t[2]||(t[2]=s=>y.value.caves=s),"active-value":1,"inactive-value":0,onChange:t[3]||(t[3]=s=>ee("caves")),loading:A.value,"inline-prompt":"","active-text":u.$t("home.running"),"inactive-text":u.$t("home.terminated")},null,8,["modelValue","loading","active-text","inactive-text"])]),_:1},8,["label"])]),_:1}),l(R,{size:"large"},{default:e(()=>[l(I,{label:u.$t("home.rollback")},{default:e(()=>[a(C)?(f(),v(w,{key:0},{default:e(()=>[l(i,{size:"small",onClick:t[4]||(t[4]=s=>c("rollback",1))},{default:e(()=>[r("1"+n(a(o)("home.day")),1)]),_:1}),l(i,{size:"small",onClick:t[5]||(t[5]=s=>c("rollback",2))},{default:e(()=>[r("2"+n(a(o)("home.days")),1)]),_:1}),l(i,{size:"small",onClick:t[6]||(t[6]=s=>c("rollback",3))},{default:e(()=>[r("3"+n(a(o)("home.days")),1)]),_:1})]),_:1})):z("",!0),a(C)?(f(),v(w,{key:1},{default:e(()=>[l(i,{size:"small",onClick:t[7]||(t[7]=s=>c("rollback",4))},{default:e(()=>[r("4"+n(a(o)("home.days")),1)]),_:1}),l(i,{size:"small",onClick:t[8]||(t[8]=s=>c("rollback",5))},{default:e(()=>[r("5"+n(a(o)("home.days")),1)]),_:1})]),_:1})):z("",!0),a(C)?(f(),v(w,{key:2})):z("",!0),a(C)?z("",!0):(f(),v(w,{key:3},{default:e(()=>[l(i,{size:"small",onClick:t[9]||(t[9]=s=>c("rollback",1))},{default:e(()=>[r("1"+n(a(o)("home.day")),1)]),_:1}),l(i,{size:"small",onClick:t[10]||(t[10]=s=>c("rollback",2))},{default:e(()=>[r("2"+n(a(o)("home.days")),1)]),_:1}),l(i,{size:"small",onClick:t[11]||(t[11]=s=>c("rollback",3))},{default:e(()=>[r("3"+n(a(o)("home.days")),1)]),_:1}),l(i,{size:"small",onClick:t[12]||(t[12]=s=>c("rollback",4))},{default:e(()=>[r("4"+n(a(o)("home.days")),1)]),_:1}),l(i,{size:"small",onClick:t[13]||(t[13]=s=>c("rollback",5))},{default:e(()=>[r("5"+n(a(o)("home.days")),1)]),_:1})]),_:1}))]),_:1},8,["label"])]),_:1}),l(R,{size:"large"},{default:e(()=>[l(I,null,{default:e(()=>[l(i,{type:"success",size:"default",onClick:t[14]||(t[14]=s=>c("startup",0))},{default:e(()=>[r(n(a(o)("home.startup")),1)]),_:1}),l(i,{type:"primary",size:"default",onClick:t[15]||(t[15]=s=>c("restart",0))},{default:e(()=>[r(n(a(o)("home.restart")),1)]),_:1}),l(i,{type:"warning",size:"default",onClick:t[16]||(t[16]=s=>c("update",0))},{default:e(()=>[r(n(a(o)("home.update")),1)]),_:1})]),_:1}),l(I,null,{default:e(()=>[l(i,{type:"warning",size:"default",onClick:t[17]||(t[17]=s=>c("shutdown",0))},{default:e(()=>[r(n(a(o)("home.shutdown")),1)]),_:1}),l(i,{type:"danger",size:"default",onClick:t[18]||(t[18]=s=>c("reset",0))},{default:e(()=>[r(n(a(o)("home.reset")),1)]),_:1}),l(P,{effect:"light",content:u.$t("home.deleteTips"),placement:"top"},{default:e(()=>[l(i,{color:"#626aef",size:"default",onClick:t[19]||(t[19]=s=>c("delete",0))},{default:e(()=>[r(n(a(o)("home.delete")),1)]),_:1})]),_:1},8,["content"])]),_:1})]),_:1})])]),_:1},8,["style"])]),_:1}),l(w,{span:12,lg:12,md:12,sm:24,xs:24,style:{"margin-top":"10px"}},{default:e(()=>[l(F,{shadow:"never",style:pe(a(C)?"min-height: 300px":"min-height: 400px")},{header:e(()=>[g("div",Qe,n(a(o)("home.interface")),1)]),default:e(()=>[g("div",null,[l(R,{"label-position":"top"},{default:e(()=>[l(I,{label:u.$t("home.announcement")},{default:e(()=>[l(ue,{modelValue:T.value.message,"onUpdate:modelValue":t[20]||(t[20]=s=>T.value.message=s),onKeyup:fe(le,["enter"])},{append:e(()=>[l(i,{loading:G.value,onClick:le},{default:e(()=>[r(n(a(o)("home.send")),1)]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(I,{label:"Console"},{default:e(()=>[l(ue,{modelValue:x.value.cmd,"onUpdate:modelValue":t[22]||(t[22]=s=>x.value.cmd=s),onKeyup:fe(te,["enter"])},{prepend:e(()=>[l(xe,{modelValue:x.value.world,"onUpdate:modelValue":t[21]||(t[21]=s=>x.value.world=s),style:{width:"115px"}},{default:e(()=>[l(re,{label:u.$t("home.master"),value:"master"},null,8,["label"]),l(re,{label:u.$t("home.caves"),value:"caves"},null,8,["label"])]),_:1},8,["modelValue"])]),append:e(()=>[l(i,{loading:O.value,onClick:te},{default:e(()=>[r(n(a(o)("home.execute")),1)]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1},8,["style"])]),_:1})]),_:1}),l(Ve,{modelValue:j.value,"onUpdate:modelValue":t[23]||(t[23]=s=>j.value=s),"close-on-click-modal":!1,title:a(o)("home.modsTable.title"),width:"80%"},{default:e(()=>[N((f(),v($e,{data:ae.value,"tooltip-effect":"light",height:"70vh",border:"",style:{width:"100%"},size:"small"},{default:e(()=>[l(S,{prop:"name",label:a(o)("home.modsTable.name")},null,8,["label"]),l(S,{prop:"preview_url",label:a(o)("home.modsTable.pics"),width:"120px"},{default:e(s=>[l(Ie,{style:{width:"100px",height:"100px"},src:s.row.preview_url,fit:"fill"},null,8,["src"])]),_:1},8,["label"]),l(S,{prop:"size",label:a(o)("home.modsTable.size")},{default:e(s=>[r(n(a(Ne)(s.row.size)),1)]),_:1},8,["label"]),l(S,{prop:"id",label:a(o)("home.modsTable.id")},null,8,["label"]),l(S,{prop:"tags",label:a(o)("home.modsTable.tags")},{default:e(s=>[(f(!0),ce(Me,null,Pe(s.row.tags,Te=>(f(),v(k,{style:{margin:"0 5px 5px 0"}},{default:e(()=>[r(n(Te.display_name),1)]),_:2},1024))),256))]),_:1},8,["label"])]),_:1},8,["data"])),[[de,H.value]])]),_:1},8,["modelValue","title"])])}}},ll=Se(Xe,[["__scopeId","data-v-9ec68a2b"]]);export{ll as default};

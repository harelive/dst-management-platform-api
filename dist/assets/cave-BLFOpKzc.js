import _ from"./log-CWn04bOs.js";import{u as g,r as s,B as o,d as h,e as R,f as e,w as l,j as i}from"./index-59SmMGpb.js";import"./index-Bo-qKgY6.js";import"./index-Wc3CB2WV.js";const y={class:"page-div"},B={__name:"cave",setup(k){const{t:n}=g(),a=s("current"),f=r=>{a.value==="current"&&t.value&&t.value.startRequests(),a.value==="historical"&&t.value&&t.value.cancelRequests(),a.value=r},t=s(),m=s();return(r,c)=>{const u=o("el-tab-pane"),p=o("el-tabs"),d=o("el-col"),v=o("el-row");return h(),R("div",y,[e(v,{gutter:10},{default:l(()=>[e(d,{span:24,lg:24,md:24,sm:24,xs:24},{default:l(()=>[e(p,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=b=>a.value=b),onTabChange:f},{default:l(()=>[e(u,{label:i(n)("logs.current"),name:"current"},{default:l(()=>[e(_,{ref_key:"logRef",ref:t,type:"caves"},null,512)]),_:1},8,["label"]),e(u,{label:i(n)("logs.historical"),name:"historical",lazy:!0},{default:l(()=>[e(_,{ref_key:"HistoricalLogRef",ref:m,type:"caves",historical:!0},null,512)]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}};export{B as default};

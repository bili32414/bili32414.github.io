import{a as i,i as r}from"./ip-c3c4sia2.js";import{l as Z,r as B,i as g,g as ee,a as d,o as u,c as b,d as k,b as a,w as s,F,j as M,u as o,e as m,t as O,k as $,m as z,E as c,p as le,f as ae,_ as te}from"./index-rFPsw6Vl.js";const oe=C=>(le("data-v-59c4ee4c"),C=C(),ae(),C),se={style:{"margin-top":"30px","margin-right":"30px"}},ne={key:0},de={key:1},ue={key:2},ie=["src"],re=["src"],pe=oe(()=>k("div",{style:{"font-size":"12px",color:"#ccc",display:"flex","justify-content":"flex-end"}},"(不超过15个中文字符)",-1)),ce={style:{"justify-content":"center",display:"flex"}},me=Z({__name:"ServiceView",setup(C){let _=B({});const h=g([]);let v=g([]);const x=g(!1);let n=B({});const j=t=>t.type==="image/jpeg"||t.type==="image/png"?t.size/1024/1024>20?(c.error("Avatar picture size can not exceed 20MB!"),!1):(c.success("文件上传成功"),!0):(c.error("文件上传失败"),!1),T=(t,e)=>{n.image=t.data},L=(t,e)=>{n.logo=t.data};let q=async()=>{if(h.value.length>0){let t=await i.post(r.url()+"/service/delBatch",h.value);v.value=t.data.data,console.log("选中的复选框数据:",h.value)}else c.warning("请至少选择一项进行删除")},U=g([]),G=async()=>{let t=await i.get(r.url()+"/service/content/"+_.service_type_id);console.log(t),t.data.data!=""?(console.log(1),U.value=t.data.data.map(e=>({label:e.content,value:e.service_content_id}))):(console.log(2),U.value=[])};const H=t=>{h.value=t.map(e=>e.id)};let J=async t=>{if(t.status===2||t.status==0){let e=await i.get(r.url()+"/service/update/"+t.id);v.value=e.data.data}else if(t.status===1){let e=await i.get(r.url()+"/service/toupdate/"+t.id);v.value=e.data.data}},K=async()=>{let t;n.id?(t=await i.post(r.url()+"/service/update",n),t.data.code==="200"?c.success("修改成功"):c.error("修改失败")):(t=await i.post(r.url()+"/service/insert",n),t.data.code==="200"?c.success("添加成功"):c.error("添加失败")),v.value=t.data.data,x.value=!1},P=async t=>{let e=await i.delete(r.url()+"/service/delete/"+t.id);console.log(e),e.data.code==="200"?(v.value=e.data.data,c.success("删除成功")):c.error("删除失败")},Q=async()=>{let t=await i.post(r.url()+"/service",_);v.value=t.data.data},R=async t=>{console.log(t);let e=await i.get(r.url()+"/service/"+t.id);n.image=g(e.data.data.image),n.logo=g(e.data.data.logo),n.service_type_id=g(e.data.data.service_type_id+""),n=B(e.data.data),x.value=!0},A=g([]);return ee(async()=>{const t=await i.get(r.url()+"/service"),e=await i.get(r.url()+"/service/type");console.log(e),A.value=e.data.data.map(p=>({label:p.name,value:p.id})),v.value=t.data.data}),(t,e)=>{const p=d("el-option"),S=d("el-select"),f=d("el-button"),I=d("el-popconfirm"),y=d("el-table-column"),W=d("el-table"),V=d("el-form-item"),w=d("el-input"),N=d("el-icon"),D=d("el-upload"),X=d("el-form"),Y=d("el-dialog");return u(),b("div",null,[k("div",se,[a(S,{modelValue:o(_).service_type_id,"onUpdate:modelValue":e[0]||(e[0]=l=>o(_).service_type_id=l),placeholder:"服务类型",style:{width:"240px"},onChange:o(G)},{default:s(()=>[(u(!0),b(F,null,M(o(A),l=>(u(),z(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),a(S,{modelValue:o(_).service_content_id,"onUpdate:modelValue":e[1]||(e[1]=l=>o(_).service_content_id=l),placeholder:"服务内容",style:{width:"240px"}},{default:s(()=>[(u(!0),b(F,null,M(o(U),l=>(u(),z(p,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),a(S,{modelValue:o(_).status,"onUpdate:modelValue":e[2]||(e[2]=l=>o(_).status=l),placeholder:"状态",style:{width:"240px"}},{default:s(()=>[a(p,{label:"待上架",value:"0"}),a(p,{label:"已上架",value:"1"}),a(p,{label:"已下架",value:"2"})]),_:1},8,["modelValue"]),a(f,{type:"success",onClick:e[3]||(e[3]=l=>o(Q)())},{default:s(()=>[m("搜索")]),_:1}),a(f,{type:"warning",onClick:e[4]||(e[4]=l=>x.value=!0)},{default:s(()=>[m("新增")]),_:1}),a(I,{title:"你确定要删除吗?",onConfirm:o(q)},{reference:s(()=>[a(f,{type:"danger"},{default:s(()=>[m("批量删除")]),_:1})]),_:1},8,["onConfirm"])]),k("div",null,[a(W,{data:o(v),onSelectionChange:H},{default:s(()=>[a(y,{type:"selection"}),a(y,{prop:"id",label:"序号"}),a(y,{prop:"type",label:"服务类型"}),a(y,{prop:"content",label:"服务内容"}),a(y,{prop:"introduction",label:"服务简介"}),a(y,{label:"定价"},{default:s(({row:l})=>[k("span",null,O(l.price)+"/每次",1)]),_:1}),a(y,{label:"状态"},{default:s(({row:l})=>[l.status===0?(u(),b("span",ne,"待上架")):$("",!0),l.status===1?(u(),b("span",de,"已上架")):$("",!0),l.status===2?(u(),b("span",ue,"已下架")):$("",!0)]),_:1}),a(y,{label:"操作",width:"200px"},{default:s(({row:l})=>[a(f,{size:"small",type:"primary",onClick:E=>o(R)(l),disabled:l.status==0||l.status==2},{default:s(()=>[m("编辑")]),_:2},1032,["onClick","disabled"]),a(f,{size:"small",type:"warning",onClick:E=>o(J)(l)},{default:s(()=>[m(O(l.status===2||l.status===0?"上架":"下架"),1)]),_:2},1032,["onClick"]),a(I,{title:"你确定要删除吗?",onConfirm:E=>o(P)(l)},{reference:s(()=>[a(f,{size:"small",type:"danger",disabled:l.status===0||l.status===1},{default:s(()=>[m("删除")]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),a(Y,{modelValue:x.value,"onUpdate:modelValue":e[12]||(e[12]=l=>x.value=l),width:"500"},{default:s(()=>[a(X,{model:o(n)},{default:s(()=>[a(V,{label:"服务类型："},{default:s(()=>[a(S,{modelValue:o(n).service_type_id,"onUpdate:modelValue":e[5]||(e[5]=l=>o(n).service_type_id=l),placeholder:"服务类型"},{default:s(()=>[a(p,{label:"上门护理",value:"1"}),a(p,{label:"上门体检",value:"2"})]),_:1},8,["modelValue"])]),_:1}),a(V,{label:"服务内容："},{default:s(()=>[a(w,{modelValue:o(n).content,"onUpdate:modelValue":e[6]||(e[6]=l=>o(n).content=l),maxlength:"20"},null,8,["modelValue"])]),_:1}),a(V,{label:"宣传图片："},{default:s(()=>[a(D,{class:"avatar-uploader",action:"https://a.anzzm7.top/file/upload","show-file-list":!1,"on-success":T,"before-upload":j},{default:s(()=>[o(n).image?(u(),b("img",{key:0,src:o(n).image,class:"avatar"},null,8,ie)):(u(),z(N,{key:1,class:"avatar-uploader-icon"}))]),_:1}),a(V,{label:"缩略图片："},{default:s(()=>[a(D,{class:"avatar-uploader",action:"https://a.anzzm7.top/file/upload","show-file-list":!1,"on-success":L,"before-upload":j},{default:s(()=>[o(n).logo?(u(),b("img",{key:0,src:o(n).logo,class:"avatar"},null,8,re)):(u(),z(N,{key:1,class:"avatar-uploader-icon"}))]),_:1})]),_:1})]),_:1}),a(V,{label:"服务简介："},{default:s(()=>[a(w,{modelValue:o(n).introduction,"onUpdate:modelValue":e[7]||(e[7]=l=>o(n).introduction=l),maxlength:"15"},null,8,["modelValue"]),pe]),_:1}),a(V,{label:"       定价："},{default:s(()=>[a(w,{modelValue:o(n).price,"onUpdate:modelValue":e[8]||(e[8]=l=>o(n).price=l),type:"number",style:{width:"100px"}},null,8,["modelValue"]),m("/次 ")]),_:1}),a(V,{label:"服务详情："},{default:s(()=>[a(w,{type:"textarea",modelValue:o(n).details,"onUpdate:modelValue":e[9]||(e[9]=l=>o(n).details=l),maxlength:"100"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),k("div",ce,[a(f,{onClick:e[10]||(e[10]=l=>x.value=!1)},{default:s(()=>[m("取消")]),_:1}),a(f,{type:"primary",onClick:e[11]||(e[11]=l=>o(K)())},{default:s(()=>[m("保存")]),_:1})])]),_:1},8,["modelValue"])])}}}),fe=te(me,[["__scopeId","data-v-59c4ee4c"]]);export{fe as default};
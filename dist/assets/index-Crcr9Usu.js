import{u as f,r as v,j as o}from"./index-BM6nJJOe.js";import{C as u}from"./index-CDvxTDSS.js";import{B as p}from"./index-C0F4rM6n.js";const x="_form_1pbp8_1",y="_answer_container_1pbp8_11",j="_children_1pbp8_16",b="_question__container_1pbp8_20",P="_question__field_1pbp8_25",r={form:x,answer_container:y,children:j,question__container:b,question__field:P},_=[{title:"Possui Política de Inovação?",value:1,code:"q_001",type:"check"},{title:"Possui Capacitação em Inovação ou Propriedade Intelectual?",value:1,code:"q_002",type:"check"},{title:"Proximidade com Distrito Industrial",value:1,code:"q_003",type:"check"},{title:"Proximidade com Parque Tecnológico?",value:1,code:"q_004",type:"check"},{title:"Possui Núcleo de Inovação Tecnológica",value:1,code:"q_005",children:[{title:"NIT possui Vitrine Tecnológica?",value:1,code:"q_005.1",type:"check"}],type:"check"},{title:"Possui Empresas Juniores?",value:1,code:"q_006",children:[{title:"Quantas?",value:1,code:"q_006.1",type:"number"}],type:"check"},{title:"Possui Laboratório Maker?",value:1,code:"q_007",type:"check"},{title:"Possui Pré Incubadora/Hotel de Projetos?",value:1,code:"q_008",type:"check"},{title:"Possui Incubadora?",value:1,code:"q_009",type:"check"}],I=()=>{const e=f(),[s,a]=v.useState([]),l=c=>{a(t=>t.some(i=>i===c)?t:[...t,c])},n=c=>{a(t=>t.some(i=>i===c)?t.filter(i=>i!==c):t)},d=c=>{c.preventDefault();let t=0;_.forEach(i=>{s.some(h=>h===i.code)&&(t+=i.value)}),localStorage.setItem("essay_result",String((t/_.length).toFixed(1))),e("/result")};return o.jsxs("form",{className:r.form,onSubmit:d,children:[o.jsx(p,{onClick:()=>e("/"),children:"Voltar"}),_.map(c=>o.jsx("div",{className:r.question__container,children:o.jsx(m,{question:c,add:l,remove:n,selected:s.some(t=>t===c.code)})},c.code)),o.jsx(p,{fullWidth:!0,type:"submit",children:"Confirmar"})]})},m=({question:e,add:s,remove:a,selected:l})=>{var n;return o.jsxs("div",{children:[o.jsxs("div",{className:r.question__field,children:[e.title,o.jsxs("div",{className:r.answer_container,children:[o.jsx(u,{name:e.code,type:"radio",onChange:()=>{s(e.code)},id:`accept-${e.code}`,label:"Sim"}),o.jsx(u,{name:e.code,type:"radio",onChange:()=>{a(e.code)},id:`deny-${e.code}`,label:"Não"})]})]}),l&&((n=e==null?void 0:e.children)==null?void 0:n.map(d=>o.jsx("div",{className:r.children,children:o.jsx(m,{add:s,remove:a,question:d})},d.code)))]})};export{I as default};
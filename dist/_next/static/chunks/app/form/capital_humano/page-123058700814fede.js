(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{40663:function(e,t,r){Promise.resolve().then(r.bind(r,81903))},81903:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var o=r(57437),s=r(62361),a=r(16463),i=r(2265),n=r(29873),l=r(55661),u=r(71514),c=r(33786),d=r(54768);function p(){let e=(0,a.useRouter)(),{setGrupoContexto:t,setProgress:r}=(0,c.Dz)();(0,i.useEffect)(()=>{t("GRUPO CONTEXTO - Capital Humano"),r(30)},[]);let{capitalHumano:p,updateCapitalHumano:m}=(0,l.G)(),x=(e,t)=>{m({[e]:t})},f=p.totalServidoresDoutores+p.totalServidoresMestres>p.totalDeServidores,v=p.totalCursosSuperioresEmTecnologia>p.totalCursosSuperioresCertificados;return(0,o.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e.push("/form/capital_humano/final")},className:"w-full flex flex-col justify-center gap-3",children:[(0,o.jsx)(s.t,{value:String(p.totalServidoresDoutores),onChange:e=>x("totalServidoresDoutores",Number(e.target.value)),min:0,max:p.totalDeServidores,type:"number",autoFocus:!0,label:"Total de servidores doutores"}),(0,o.jsx)(s.t,{value:String(p.totalServidoresMestres),onChange:e=>x("totalServidoresMestres",Number(e.target.value)),min:0,max:p.totalDeServidores,type:"number",label:"Total de servidores mestres"}),(0,o.jsx)(s.t,{value:String(p.totalCursosSuperioresEmTecnologia),onChange:e=>x("totalCursosSuperioresEmTecnologia",Number(e.target.value)),type:"number",label:"Cursos Superiores em \xc1reas Tecnol\xf3gicas"}),(0,o.jsx)(u.E,{value:p.forneceCapacitacaoEmPropriedadeIntelectualParaServidores,onChange:e=>x("forneceCapacitacaoEmPropriedadeIntelectualParaServidores",e),label:"A institui\xe7\xe3o fornece Capacita\xe7\xe3o em Propriedade Intelectual para servidores e discentes?"}),f&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.y,{text:"A soma entre servidores doutores e servidores mestres n\xe3o pode ser superior   ao total de servidores da institui\xe7\xe3o",className:"text-rose-600 mt-3"}),(0,o.jsx)(d.y,{text:"total de servidores: ".concat(p.totalDeServidores),className:"text-rose-600"})]}),v&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.y,{text:"A quantidade de Cursos Superiores em \xc1reas Tecnol\xf3gicas   n\xe3o pode ser maior que a quantidade de cursos superiores certificados pelo MEC",className:"text-rose-600 mt-3"}),(0,o.jsx)(d.y,{text:"total de cursos certificados: ".concat(p.totalCursosSuperioresCertificados),className:"text-rose-600"})]}),(0,o.jsx)(n.Y,{disabled:f||v,variant:"bordered",type:"submit",text:"Pr\xf3ximo"})]})}},33786:function(e,t,r){"use strict";r.d(t,{Dz:function(){return l},ku:function(){return n}});var o=r(57437),s=r(2265);let a={grupoContexto:"Identifica\xe7\xe3o da institui\xe7\xe3o",setGrupoContexto:()=>{throw Error(" not implemented.")},progress:0,setProgress:()=>{throw Error(" not implemented.")}},i=(0,s.createContext)(a),n=e=>{let{children:t}=e,[r,n]=(0,s.useState)(a.grupoContexto),[l,u]=(0,s.useState)(20);return(0,o.jsx)(i.Provider,{value:{grupoContexto:r,setGrupoContexto:n,progress:l,setProgress:u},children:t})},l=()=>(0,s.useContext)(i)},62361:function(e,t,r){"use strict";r.d(t,{t:function(){return a}});var o=r(57437),s=r(46576);let a=e=>{let{...t}=e;return(0,o.jsx)(s.Y,{labelPlacement:"outside",placeholder:" ",size:"sm",color:"primary",classNames:{base:["text-[#838383]"],label:["text-[#838383]"],input:["bg-transparent","placeholder:text-[#838383]"],innerWrapper:"bg-transparent",inputWrapper:["bg-[#202020]","text-[#838383]","hover:bg-[#252525]","group-data-[focus=true]:bg-[#252525]","!cursor-text"]},...t})}},54768:function(e,t,r){"use strict";r.d(t,{y:function(){return s}});var o=r(57437);let s=e=>{let{text:t,className:r,...s}=e,a="origin-top-left rtl:origin-top-right subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 group-data-[filled-within=true]:start-0 start-2 text-tiny group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)] pe-2 max-w-full text-ellipsis overflow-hidden text-[#838383]",i=r?"".concat(r," ").concat(a):a;return(0,o.jsx)("small",{"data-slot":"label",className:i,children:t})}}},function(e){e.O(0,[333,508,576,751,971,23,744],function(){return e(e.s=40663)}),_N_E=e.O()}]);
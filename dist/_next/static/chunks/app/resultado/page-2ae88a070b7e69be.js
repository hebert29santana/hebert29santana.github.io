(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{70609:function(e,a,t){Promise.resolve().then(t.bind(t,86137))},55661:function(e,a,t){"use strict";t.d(a,{o:function(){return E},G:function(){return C}});var o=t(57437),s=t(2265);let i={nome:"",sigla:"",telefone:"",cnpj:"",cep:"",estado:"",cidade:"",rua:"",numero:0,complemento:""},n=()=>{let[e,a]=(0,s.useState)(i);return{identificacao:e,updateIdentificacao:e=>{a(a=>({...a,...e}))}}},r=(e,a)=>0===e||0===a?0:e/a,l=e=>e?1:0,c={totalDeServidores:0,totalCursosSuperioresCertificados:0,totalProgramasPosGraduacao:0,totalEmpresasJunior:0,totalServidoresDoutores:0,totalServidoresMestres:0,totalCursosSuperioresEmTecnologia:0,forneceCapacitacaoEmPropriedadeIntelectualParaServidores:!1,quantidadeDeProgramasDePosGraduacao:0,possuiBolsaDePesquisaEFomentoPelaCAPES:!1,possuiBolsaDeProdutividadeEPesquisaPelaCNPQ:!1,possuiBolsaAtravesDaFAPEstadual:!1,possuiBolsaDePesquisaFornecidaPelaInstituicao:!1},d=()=>{let[e,a]=(0,s.useState)(c),t=r(e.totalServidoresDoutores,e.totalDeServidores),o=r(e.totalServidoresMestres,e.totalDeServidores),i=r(e.totalCursosSuperioresEmTecnologia,e.totalCursosSuperioresCertificados),n=r(e.quantidadeDeProgramasDePosGraduacao,e.totalProgramasPosGraduacao);return{capitalHumano:e,updateCapitalHumano:e=>{a(a=>({...a,...e}))},getCapitalHumano:()=>(t+o+i+l(e.forneceCapacitacaoEmPropriedadeIntelectualParaServidores)+n+l(e.possuiBolsaDePesquisaEFomentoPelaCAPES)+l(e.possuiBolsaDeProdutividadeEPesquisaPelaCNPQ)+l(e.possuiBolsaAtravesDaFAPEstadual)+l(e.possuiBolsaDePesquisaFornecidaPelaInstituicao))/8.3}},u={possuiLaboratorioMaker:!1,possuiPreIncubadoraDeProjetos:!1,possuiIncubadoraDeProjetos:!1,possuiNucleoDeInovacaoTecnologica:!1,possuiEmpresaJuniorEmAreaDeTecnologia:!1,quantidadeDeEmpresasJuniorEmAreaDeTecnologia:0,velocidadeInternetBandaLarga:0,possuiLaboratorioMultidisciplinarInformatizado:!1},p=e=>{let{totalEmpresasJunior:a}=e,[t,o]=(0,s.useState)(u),i=r(t.quantidadeDeEmpresasJuniorEmAreaDeTecnologia,a);return{infraestrutura:t,updateInfraestrutura:e=>{o(a=>({...a,...e}))},getInfraestrutura:()=>(l(t.possuiLaboratorioMaker)+(t.possuiPreIncubadoraDeProjetos?.5:0)+l(t.possuiIncubadoraDeProjetos)+l(t.possuiNucleoDeInovacaoTecnologica)+i+t.velocidadeInternetBandaLarga+l(t.possuiLaboratorioMultidisciplinarInformatizado))/6.5}},m={possuiProximidadeComParqueTecnologico:!1,possuiProximidadeComParqueIndustrial:!1,possuiProximidadeComCentroDeInovacao:!1,possuiPoliticaDeInovacaoInstituicional:!1},x=()=>{let[e,a]=(0,s.useState)(m);return{instituicoes:e,updateInstituicoes:e=>{a(a=>({...a,...e}))},getInstituicoes:()=>(l(e.possuiProximidadeComParqueTecnologico)+l(e.possuiProximidadeComParqueIndustrial)+l(e.possuiProximidadeComCentroDeInovacao)+l(e.possuiPoliticaDeInovacaoInstituicional))/4}},v={possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado:!1,possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento:!1,possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos:!1,possuiFinanciamentoAtravesDeEmendasParlamentares:!1},f=()=>{let[e,a]=(0,s.useState)(v),t=e.possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado?.9:0,o=e.possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento?.5:0,i=e.possuiFinanciamentoAtravesDeEmendasParlamentares?.5:0,n=e.possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos?1:0;return{economia:e,updateEconomia:e=>{a(a=>({...a,...e}))},getEconomia:()=>(t+o+i+n)/2.9}},g={depositosDePatentesDeInovacao:0,depositosDePatentesDeModeloDeUtilidade:0,producaoCientificaEmAreasTecnologicas:0,contratosDeTransferenciaDeTecnologiaAverbados:0},P=()=>{let[e,a]=(0,s.useState)(g);return{conhecimentoETecnologia:e,updateConhecimentoETecnologia:e=>{a(a=>({...a,...e}))},getConhecimentoETecnologia:()=>(e.depositosDePatentesDeInovacao+e.depositosDePatentesDeModeloDeUtilidade+e.producaoCientificaEmAreasTecnologicas+e.contratosDeTransferenciaDeTecnologiaAverbados)/4}},b={depositosDeMarcas:0,depositosDeDesenhoIndustrial:0,registroDeSoftware:0},h=()=>{let[e,a]=(0,s.useState)(b);return{economiaCriativa:e,updateEconomiaCriativa:e=>{a(a=>({...a,...e}))},getEconomiaCriativa:()=>(e.depositosDeMarcas+e.depositosDeDesenhoIndustrial+e.registroDeSoftware)/3}};var D=t(71418);let j=(0,s.createContext)({identificacao:i,updateIdentificacao:e=>{let{}=e},capitalHumano:c,updateCapitalHumano:e=>{let{}=e},getCapitalHumano:()=>0,infraestrutura:u,updateInfraestrutura:e=>{let{}=e},getInfraestrutura:()=>0,instituicoes:m,updateInstituicoes:e=>{let{}=e},getInstituicoes:()=>0,economia:v,updateEconomia:e=>{let{}=e},getEconomia:()=>0,conhecimentoETecnologia:g,updateConhecimentoETecnologia:e=>{let{}=e},getConhecimentoETecnologia:()=>0,economiaCriativa:b,updateEconomiaCriativa:e=>{let{}=e},getEconomiaCriativa:()=>0,getNívelDeMaturidade:()=>0}),E=e=>{let{children:a}=e,{identificacao:t,updateIdentificacao:s}=n(),{capitalHumano:i,updateCapitalHumano:r,getCapitalHumano:l}=d(),{infraestrutura:c,updateInfraestrutura:u,getInfraestrutura:m}=p({totalEmpresasJunior:i.totalEmpresasJunior}),{instituicoes:v,updateInstituicoes:g,getInstituicoes:b}=x(),{economia:E,updateEconomia:C,getEconomia:A}=f(),{conhecimentoETecnologia:I,updateConhecimentoETecnologia:S,getConhecimentoETecnologia:N}=P(),{economiaCriativa:T,updateEconomiaCriativa:M,getEconomiaCriativa:w}=h();return(0,o.jsx)(j.Provider,{value:{identificacao:t,updateIdentificacao:s,capitalHumano:i,updateCapitalHumano:r,getCapitalHumano:l,infraestrutura:c,updateInfraestrutura:u,getInfraestrutura:m,instituicoes:v,updateInstituicoes:g,getInstituicoes:b,economia:E,updateEconomia:C,getEconomia:A,conhecimentoETecnologia:I,updateConhecimentoETecnologia:S,getConhecimentoETecnologia:N,economiaCriativa:T,updateEconomiaCriativa:M,getEconomiaCriativa:w,getNívelDeMaturidade:()=>{let e=(l()+m()+b()+A()+N()+w())/6;return(0,D.d)(e)}},children:a})},C=()=>(0,s.useContext)(j)},20093:function(e,a,t){"use strict";t.d(a,{d:function(){return i},x:function(){return o}});let o=[{label:"Acre",value:"AC"},{label:"Alagoas",value:"AL"},{label:"Amap\xe1",value:"AP"},{label:"Amazonas",value:"AM"},{label:"Bahia",value:"BA"},{label:"Cear\xe1",value:"CE"},{label:"Distrito Federal",value:"DF"},{label:"Esp\xedrito Santo",value:"ES"},{label:"Goi\xe1s",value:"GO"},{label:"Maranh\xe3o",value:"MA"},{label:"Mato Grosso",value:"MT"},{label:"Mato Grosso do Sul",value:"MS"},{label:"Minas Gerais",value:"MG"},{label:"Par\xe1",value:"PA"},{label:"Para\xedba",value:"PB"},{label:"Paran\xe1",value:"PR"},{label:"Pernambuco",value:"PE"},{label:"Piau\xed",value:"PI"},{label:"Rio de Janeiro",value:"RJ"},{label:"Rio Grande do Norte",value:"RN"},{label:"Rio Grande do Sul",value:"RS"},{label:"Rond\xf4nia",value:"RO"},{label:"Roraima",value:"RR"},{label:"Santa Catarina",value:"SC"},{label:"S\xe3o Paulo",value:"SP"},{label:"Sergipe",value:"SE"},{label:"Tocantins",value:"TO"}],s={AC:"Acre",AL:"Alagoas",AP:"Amap\xe1",AM:"Amazonas",BA:"Bahia",CE:"Cear\xe1",DF:"Distrito Federal",ES:"Esp\xedrito Santo",GO:"Goi\xe1s",MA:"Maranh\xe3o",MT:"Mato Grosso",MS:"Mato Grosso do Sul",MG:"Minas Gerais",PA:"Par\xe1",PB:"Para\xedba",PR:"Paran\xe1",PE:"Pernambuco",PI:"Piau\xed",RJ:"Rio de Janeiro",RN:"Rio Grande do Norte",RS:"Rio Grande do Sul",RO:"Rond\xf4nia",RR:"Roraima",SC:"Santa Catarina",SP:"S\xe3o Paulo",SE:"Sergipe",TO:"Tocantins"},i=e=>s[e]},86137:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return R}});var o=t(57437),s=t(55661),i=t(54768);let n=()=>(0,o.jsxs)("div",{id:"footer",className:"relative sm:p-0 z-40 bottom-0 left-0 w-full flex flex-col items-center justify-center gap-2 p-3 mt-[24px]",children:[(0,o.jsxs)("div",{className:"flex flex-col gap-0",children:[(0,o.jsx)(i.y,{className:"leading-loose text-center",text:"CALMATI\xb2 - Calculadora de Maturidade de Inova\xe7\xe3o Institucional – 2024"}),(0,o.jsx)(i.y,{className:"leading-loose text-center",text:"Universidade Estadual de Santa Cruz – UESC Ilh\xe9us Bahia"})]}),(0,o.jsx)(i.y,{className:"leading-loose text-center",text:"PROFNIT - Programa de Mestrado Profissional em Propriedade Intelectual e Transfer\xeancia de Tecnologia na Inova\xe7\xe3o"})]});var r=t(20093),l=t(19992),c=t(79524),d=t(1165);let u=e=>{let{rua:a,numero:t,cidade:s,estado:i,cep:n,complemento:u,cnpj:p,telefone:m}=e;return(0,o.jsxs)("div",{className:"flex gap-2 md:gap-4 justify-between flex-wrap  text-xs sm:text-sm",children:[(0,o.jsxs)("div",{className:"mt-2 flex flex-col gap-2",children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("span",{className:"!font-bold",children:"Endere\xe7o: "}),(0,o.jsx)("span",{children:"".concat(a,", ").concat(0!==t?t:"S/N\xba")})]}),(0,o.jsx)("span",{children:"".concat(s," ").concat((0,r.d)(i),", CEP: ").concat((0,d.U)(n))}),(0,o.jsx)("span",{children:u})]}),(0,o.jsxs)("div",{className:"mt-2 flex flex-col gap-2",children:[(0,o.jsxs)("span",{children:[(0,o.jsx)("span",{className:"!font-bold",children:"CNPJ:"})," ".concat((0,l.i)(p))]}),(0,o.jsxs)("span",{children:[(0,o.jsx)("span",{className:"!font-bold",children:"Telefone:"})," ".concat((0,c.g)(m))]})]})]})};var p=t(29508),m=t(38533),x=t(16463);let v=()=>{let e=(0,x.useRouter)();return(0,o.jsx)("div",{className:"flex gap-2 items-center","data-ignore-print":"true",children:(0,o.jsx)(m.A,{onClick:()=>e.back(),isIconOnly:!0,variant:"ghost",size:"sm",children:(0,o.jsx)(p.s$$,{})})})};var f=t(2265);let g=()=>{let[e,a]=(0,f.useState)(!1);return(0,f.useLayoutEffect)(()=>{let e=()=>{a(window.innerWidth<768)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e};var P=t(96300),b=t(1766),h=t(22824),D=t(72321),j=t(55349);let E=e=>{let{data:a}=e,t=g();return(0,o.jsxs)(P.H,{cx:t?175:320,cy:t?100:150,outerRadius:t?50:100,width:t?300:640,height:t?200:300,data:a,compact:!0,children:[(0,o.jsx)(b.n,{}),(0,o.jsx)(h.I,{dataKey:"subject"}),(0,o.jsx)(D.S,{angle:90}),(0,o.jsx)(j.F,{name:"Resultado",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.5})]})};var C=t(71418);let A=e=>{let{loadPdf:a}=e,{getCapitalHumano:t,getInfraestrutura:i,getInstituicoes:n,getConhecimentoETecnologia:r,getEconomia:l,getEconomiaCriativa:c}=(0,s.G)();return(0,o.jsxs)("div",{className:"".concat(a?"":"sm:bg-gradient-to-b from-[#2c2c2c] to-[#292929]"," rounded-xl sm:px-5"),children:[(0,o.jsxs)("div",{className:"".concat(I," border-b border-b-[#3c3c3c]"),children:[(0,o.jsx)("span",{className:"".concat(S," border-r border-r-[#3c3c3c]"),children:"Grupo"}),(0,o.jsx)("span",{children:"Pilar"}),(0,o.jsx)("span",{className:"border-l border-l-[#3c3c3c]",children:"CALMATI\xb2"})]}),(0,o.jsxs)("div",{className:"".concat(I," border-b border-b-[#3c3c3c]"),children:[(0,o.jsx)("span",{className:"".concat(S," bg-teal-500/5 rounded-xl py-3 h-full grid content-center row-start-1 row-end-5"),children:"Contexto"}),(0,o.jsx)(N,{additionalClass:T,title:"Capital Humano",value:t()}),(0,o.jsx)(N,{additionalClass:T,title:"Infraestrutura",value:i()}),(0,o.jsx)(N,{additionalClass:T,title:"Institui\xe7\xf5es",value:n()}),(0,o.jsx)(N,{additionalClass:T,title:"Economia",value:l()})]}),(0,o.jsxs)("div",{className:I,children:[(0,o.jsx)("span",{className:"".concat(S," bg-amber-700/10 rounded-xl py-3 grid content-center h-full row-start-1 row-end-3"),children:"Resultados"}),(0,o.jsx)(N,{additionalClass:M,title:"Conhecimento e Tecnologia",value:r()}),(0,o.jsx)(N,{additionalClass:M,title:"Economia criativa",value:c()})]})]})},I="grid grid-cols-3 sm:p-2 gap-2 sm:gap-3 text-center py-3",S="self-center",N=e=>{let{title:a,value:t,additionalClass:s}=e;return(0,o.jsxs)("span",{className:"flex justify-around col-start-2 col-span-2 ".concat(s),children:[(0,o.jsx)("div",{className:"w-full text-start pl-2 py-3 h-full grid content-center",children:a}),(0,o.jsx)("div",{className:"w-full py-3 h-full grid content-center",children:t.toFixed(2)})]})},T="border-dotted border border-teal-100/20 rounded-md",M="border-dotted border border-amber-50/20 rounded-md";var w=t(77881);function R(){let{identificacao:e,capitalHumano:a,getNívelDeMaturidade:t,getCapitalHumano:i,getInfraestrutura:r,getInstituicoes:l,getConhecimentoETecnologia:c,getEconomia:d,getEconomiaCriativa:x}=(0,s.G)(),{nome:g,sigla:P,cep:b,cidade:h,cnpj:D,complemento:j,estado:I,numero:S,rua:N,telefone:T}=e,{totalDeServidores:M,totalCursosSuperioresCertificados:R,totalProgramasPosGraduacao:y,totalEmpresasJunior:F}=a,G=[{subject:"Conhecimento e tecnologia",A:(0,C.d)(c())},{subject:"Infraestrutura",A:(0,C.d)(r())},{subject:"Institui\xe7\xf5es",A:(0,C.d)(l())},{subject:"Capital Humano",A:(0,C.d)(i())},{subject:"Economia",A:(0,C.d)(d())},{subject:"Economia criativa",A:(0,C.d)(x())}],[B,$]=(0,f.useState)(!1),q=e=>(null==e?void 0:e.getAttribute("data-ignore-print"))==="true";return(0,o.jsx)("section",{className:"flex flex-col items-center justify-center gap-4 ".concat(B?"!text-slate-950":"!text-slate-200"," w-full max-w-screen-lg"),id:"element-to-print",children:(0,o.jsxs)("div",{className:"flex flex-col gap-6 max-w-[720px] p-4 md:p-10 text-sm font-light pb-12",children:[(0,o.jsx)(v,{}),(0,o.jsx)("h2",{className:"text-lg font-normal",children:"".concat(g.toUpperCase()," - ").concat(P)}),(0,o.jsx)(u,{cep:b,cidade:h,cnpj:D,complemento:j,estado:I,numero:S,rua:N,telefone:T}),(0,o.jsxs)("div",{className:"mt-2 flex flex-col gap-2 ".concat(B?"":"bg-[#343434]","  p-6 sm:p-8 rounded-lg  text-xs sm:text-sm"),children:[(0,o.jsxs)("span",{children:["Total de servidores da Institui\xe7\xe3o: ".concat(M)," "]}),(0,o.jsx)("span",{children:"Total de cursos Superiores Certificados pelo MEC: ".concat(R)}),(0,o.jsx)("span",{children:"Total de Programas de P\xf3s Gradua\xe7\xe3o Oferecido pela Institui\xe7\xe3o: ".concat(y)}),(0,o.jsx)("span",{children:"Total de Empresas Juniores: ".concat(F)})]}),(0,o.jsxs)("div",{className:"flex sm:justify-between items-center gap-2 flex-wrap ".concat(B?"":"bg-[#343434]"," p-6 sm:p-8 rounded-lg font-normal  text-xs sm:text-sm"),children:[(0,o.jsx)("h2",{children:"N\xcdVEL DE MATURIDADE DE INOVA\xc7\xc3O INSTITUCIONAL"}),(0,o.jsxs)("h2",{className:"font-bold ".concat(B?"":"bg-[#494949]"," p-2 rounded-md"),children:[t(),"%"]})]}),(0,o.jsx)(E,{data:G}),(0,o.jsx)(A,{loadPdf:B}),(0,o.jsx)("div",{className:"flex gap-4 mb-[-20px]",id:"ignore","data-ignore-print":"true",children:(0,o.jsx)(m.A,{isLoading:B,onClick:()=>{var e,a;$(!0);let t=()=>document.getElementById("element-to-print"),o=null===(e=t())||void 0===e?void 0:e.offsetHeight;null===(a=t())||void 0===a||a.offsetWidth;let s={method:"open",canvas:{qualityRatio:1,mimeType:"image/png",logging:!0},filename:"CAMATI\xb2 - Relat\xf3rio ".concat(P),page:{margin:w.Zt.NONE},resolution:1.5,overrides:{canvas:{height:o,width:1080,windowHeight:o,windowWidth:1400,ignoreElements:q}}};setTimeout(()=>{(0,w.ZP)(t,s).then(()=>$(!1))},1e3)},endContent:(0,o.jsx)(p.acj,{size:15}),variant:"flat",children:"Visualizar PDF"})}),(0,o.jsx)(n,{})]})})}},54768:function(e,a,t){"use strict";t.d(a,{y:function(){return s}});var o=t(57437);let s=e=>{let{text:a,className:t,...s}=e,i="origin-top-left rtl:origin-top-right subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 group-data-[filled-within=true]:start-0 start-2 text-tiny group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)] pe-2 max-w-full text-ellipsis overflow-hidden text-[#838383]",n=t?"".concat(t," ").concat(i):i;return(0,o.jsx)("small",{"data-slot":"label",className:n,children:a})}},19992:function(e,a,t){"use strict";t.d(a,{i:function(){return o}});let o=e=>e=(e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/,"$1.$2")).replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")).replace(/\.(\d{3})(\d)/,".$1/$2")).replace(/(\d{4})(\d)/,"$1-$2")},71418:function(e,a,t){"use strict";t.d(a,{d:function(){return o}});let o=e=>100*Number(e.toFixed(2))},79524:function(e,a,t){"use strict";t.d(a,{g:function(){return o}});let o=e=>e?e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2"):""},1165:function(e,a,t){"use strict";t.d(a,{U:function(){return o}});let o=e=>e?e=(e=e.replace(/\D/g,"")).replace(/(\d{5})(\d)/,"$1-$2"):""}},function(e){e.O(0,[505,337,333,508,549,971,23,744],function(){return e(e.s=70609)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{82704:function(e,a,o){Promise.resolve().then(o.bind(o,7405))},7405:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return c}});var t=o(57437),i=o(16463),s=o(2265),r=o(29873),n=o(33786),l=o(55661),u=o(88192);function c(){let e=(0,i.useRouter)(),{setGrupoContexto:a,setProgress:o}=(0,n.Dz)(),{economiaCriativa:c,updateEconomiaCriativa:d}=(0,l.G)();(0,s.useEffect)(()=>{a("GRUPO RESULTADO - Economia criativa"),o(100)},[]);let p=(e,a)=>{d({[e]:a})};return(0,t.jsxs)("form",{onSubmit:a=>{a.preventDefault(),e.push("/resultado")},className:"w-full flex flex-col justify-center gap-3",children:[(0,t.jsx)(u.L,{required:!0,label:"Dep\xf3sitos de Marcas",value:String(c.depositosDeMarcas),options:[{label:"0 dep\xf3sitos",value:0},{label:"De 1 a 10 dep\xf3sitos",value:.3},{label:"De 11 a 20 dep\xf3sitos",value:.6},{label:"Acima de 20 dep\xf3sitos",value:1}],onChange:e=>{p("depositosDeMarcas",Number(e))}}),(0,t.jsx)(u.L,{required:!0,label:"Dep\xf3sitos de Desenho Industrial",value:String(c.depositosDeDesenhoIndustrial),options:[{label:"0 dep\xf3sitos",value:0},{label:"De 1 a 10 dep\xf3sitos",value:.3},{label:"De 11 a 20 dep\xf3sitos",value:.6},{label:"Acima de 20 dep\xf3sitos",value:1}],onChange:e=>{p("depositosDeDesenhoIndustrial",Number(e))}}),(0,t.jsx)(u.L,{required:!0,label:"Registro de Software",value:String(c.registroDeSoftware),options:[{label:"0 dep\xf3sitos",value:0},{label:"De 1 a 10 dep\xf3sitos",value:.3},{label:"De 11 a 20 dep\xf3sitos",value:.6},{label:"Acima de 20 dep\xf3sitos",value:1}],onChange:e=>{p("registroDeSoftware",Number(e))}}),(0,t.jsx)(r.Y,{type:"submit",text:"Emitir relat\xf3rio"})]})}},55661:function(e,a,o){"use strict";o.d(a,{o:function(){return x},G:function(){return I}});var t=o(57437),i=o(2265);let s={nome:"",sigla:"",telefone:"",cnpj:"",cep:"",estado:"",cidade:"",rua:"",numero:0,complemento:""},r=()=>{let[e,a]=(0,i.useState)(s);return{identificacao:e,updateIdentificacao:e=>{a(a=>({...a,...e}))}}},n=(e,a)=>0===e||0===a?0:e/a,l=e=>e?1:0,u={totalDeServidores:0,totalCursosSuperioresCertificados:0,totalProgramasPosGraduacao:0,totalEmpresasJunior:0,totalServidoresDoutores:0,totalServidoresMestres:0,totalCursosSuperioresEmTecnologia:0,forneceCapacitacaoEmPropriedadeIntelectualParaServidores:!1,quantidadeDeProgramasDePosGraduacao:0,possuiBolsaDePesquisaEFomentoPelaCAPES:!1,possuiBolsaDeProdutividadeEPesquisaPelaCNPQ:!1,possuiBolsaAtravesDaFAPEstadual:!1,possuiBolsaDePesquisaFornecidaPelaInstituicao:!1},c=()=>{let[e,a]=(0,i.useState)(u),o=n(e.totalServidoresDoutores,e.totalDeServidores),t=n(e.totalServidoresMestres,e.totalDeServidores),s=n(e.totalCursosSuperioresEmTecnologia,e.totalCursosSuperioresCertificados),r=n(e.quantidadeDeProgramasDePosGraduacao,e.totalProgramasPosGraduacao);return{capitalHumano:e,updateCapitalHumano:e=>{a(a=>({...a,...e}))},getCapitalHumano:()=>(o+t+s+l(e.forneceCapacitacaoEmPropriedadeIntelectualParaServidores)+r+l(e.possuiBolsaDePesquisaEFomentoPelaCAPES)+l(e.possuiBolsaDeProdutividadeEPesquisaPelaCNPQ)+l(e.possuiBolsaAtravesDaFAPEstadual)+l(e.possuiBolsaDePesquisaFornecidaPelaInstituicao))/8.3}},d={possuiLaboratorioMaker:!1,possuiPreIncubadoraDeProjetos:!1,possuiIncubadoraDeProjetos:!1,possuiNucleoDeInovacaoTecnologica:!1,possuiEmpresaJuniorEmAreaDeTecnologia:!1,quantidadeDeEmpresasJuniorEmAreaDeTecnologia:0,velocidadeInternetBandaLarga:0,possuiLaboratorioMultidisciplinarInformatizado:!1},p=e=>{let{totalEmpresasJunior:a}=e,[o,t]=(0,i.useState)(d),s=n(o.quantidadeDeEmpresasJuniorEmAreaDeTecnologia,a);return{infraestrutura:o,updateInfraestrutura:e=>{t(a=>({...a,...e}))},getInfraestrutura:()=>(l(o.possuiLaboratorioMaker)+(o.possuiPreIncubadoraDeProjetos?.5:0)+l(o.possuiIncubadoraDeProjetos)+l(o.possuiNucleoDeInovacaoTecnologica)+s+o.velocidadeInternetBandaLarga+l(o.possuiLaboratorioMultidisciplinarInformatizado))/6.5}},m={possuiProximidadeComParqueTecnologico:!1,possuiProximidadeComParqueIndustrial:!1,possuiProximidadeComCentroDeInovacao:!1,possuiPoliticaDeInovacaoInstituicional:!1},f=()=>{let[e,a]=(0,i.useState)(m);return{instituicoes:e,updateInstituicoes:e=>{a(a=>({...a,...e}))},getInstituicoes:()=>(l(e.possuiProximidadeComParqueTecnologico)+l(e.possuiProximidadeComParqueIndustrial)+l(e.possuiProximidadeComCentroDeInovacao)+l(e.possuiPoliticaDeInovacaoInstituicional))/4}},D={possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado:!1,possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento:!1,possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos:!1,possuiFinanciamentoAtravesDeEmendasParlamentares:!1},v=()=>{let[e,a]=(0,i.useState)(D),o=e.possuiFinanciamentoAtravesDaFundacaoDeAmparoAPesquisaDoEstado?.9:0,t=e.possuiFinanciamentoAtravesDoBancoNacionalDoDesenvolvimento?.5:0,s=e.possuiFinanciamentoAtravesDeEmendasParlamentares?.5:0,r=e.possuiFinanciamentoAtravesDaFinanciadoraDeEstudosEProjetos?1:0;return{economia:e,updateEconomia:e=>{a(a=>({...a,...e}))},getEconomia:()=>(o+t+s+r)/2.9}},b={depositosDePatentesDeInovacao:0,depositosDePatentesDeModeloDeUtilidade:0,producaoCientificaEmAreasTecnologicas:0,contratosDeTransferenciaDeTecnologiaAverbados:0},g=()=>{let[e,a]=(0,i.useState)(b);return{conhecimentoETecnologia:e,updateConhecimentoETecnologia:e=>{a(a=>({...a,...e}))},getConhecimentoETecnologia:()=>(e.depositosDePatentesDeInovacao+e.depositosDePatentesDeModeloDeUtilidade+e.producaoCientificaEmAreasTecnologicas+e.contratosDeTransferenciaDeTecnologiaAverbados)/4}},P={depositosDeMarcas:0,depositosDeDesenhoIndustrial:0,registroDeSoftware:0},E=()=>{let[e,a]=(0,i.useState)(P);return{economiaCriativa:e,updateEconomiaCriativa:e=>{a(a=>({...a,...e}))},getEconomiaCriativa:()=>(e.depositosDeMarcas+e.depositosDeDesenhoIndustrial+e.registroDeSoftware)/3}};var C=o(71418);let h=(0,i.createContext)({identificacao:s,updateIdentificacao:e=>{let{}=e},capitalHumano:u,updateCapitalHumano:e=>{let{}=e},getCapitalHumano:()=>0,infraestrutura:d,updateInfraestrutura:e=>{let{}=e},getInfraestrutura:()=>0,instituicoes:m,updateInstituicoes:e=>{let{}=e},getInstituicoes:()=>0,economia:D,updateEconomia:e=>{let{}=e},getEconomia:()=>0,conhecimentoETecnologia:b,updateConhecimentoETecnologia:e=>{let{}=e},getConhecimentoETecnologia:()=>0,economiaCriativa:P,updateEconomiaCriativa:e=>{let{}=e},getEconomiaCriativa:()=>0,getNívelDeMaturidade:()=>0}),x=e=>{let{children:a}=e,{identificacao:o,updateIdentificacao:i}=r(),{capitalHumano:s,updateCapitalHumano:n,getCapitalHumano:l}=c(),{infraestrutura:u,updateInfraestrutura:d,getInfraestrutura:m}=p({totalEmpresasJunior:s.totalEmpresasJunior}),{instituicoes:D,updateInstituicoes:b,getInstituicoes:P}=f(),{economia:x,updateEconomia:I,getEconomia:S}=v(),{conhecimentoETecnologia:A,updateConhecimentoETecnologia:w,getConhecimentoETecnologia:j}=g(),{economiaCriativa:T,updateEconomiaCriativa:N,getEconomiaCriativa:y}=E();return(0,t.jsx)(h.Provider,{value:{identificacao:o,updateIdentificacao:i,capitalHumano:s,updateCapitalHumano:n,getCapitalHumano:l,infraestrutura:u,updateInfraestrutura:d,getInfraestrutura:m,instituicoes:D,updateInstituicoes:b,getInstituicoes:P,economia:x,updateEconomia:I,getEconomia:S,conhecimentoETecnologia:A,updateConhecimentoETecnologia:w,getConhecimentoETecnologia:j,economiaCriativa:T,updateEconomiaCriativa:N,getEconomiaCriativa:y,getNívelDeMaturidade:()=>{let e=(l()+m()+P()+S()+j()+y())/6;return(0,C.d)(e)}},children:a})},I=()=>(0,i.useContext)(h)},33786:function(e,a,o){"use strict";o.d(a,{Dz:function(){return l},ku:function(){return n}});var t=o(57437),i=o(2265);let s={grupoContexto:"Identifica\xe7\xe3o da institui\xe7\xe3o",setGrupoContexto:()=>{throw Error(" not implemented.")},progress:0,setProgress:()=>{throw Error(" not implemented.")}},r=(0,i.createContext)(s),n=e=>{let{children:a}=e,[o,n]=(0,i.useState)(s.grupoContexto),[l,u]=(0,i.useState)(20);return(0,t.jsx)(r.Provider,{value:{grupoContexto:o,setGrupoContexto:n,progress:l,setProgress:u},children:a})},l=()=>(0,i.useContext)(r)},29873:function(e,a,o){"use strict";o.d(a,{Y:function(){return s}});var t=o(57437),i=o(38533);let s=e=>{let{onClick:a,text:o,...s}=e;return(0,t.jsx)("div",{className:"fixed sm:relative z-40 bottom-0 left-0 w-full max-w-lg flex flex-col justify-center gap-3 py-6 px-4 sm:px-0",children:(0,t.jsx)(i.A,{onClick:a,className:"w-full max-w-lg h-[44px] rounded bg-[#fff] disabled:bg-[#99999999] disabled:cursor-not-allowed text-[#000]",...s,children:o})})}},88192:function(e,a,o){"use strict";o.d(a,{L:function(){return r}});var t=o(57437),i=o(18146),s=o(92537);let r=e=>{let{value:a,onChange:o,options:r,...n}=e;return(0,t.jsx)(i.g,{variant:"bordered",size:"md",classNames:{label:["!text-[#838383] text-left block border-box mt-1 sm:mt-0"],value:["!text-[#999999]"],base:["text-[#838383]"],mainWrapper:["bg-transparent","placeholder:text-[#838383]"]},selectedKeys:[a],className:"w-full",labelPlacement:"outside",onChange:e=>{o(e.target.value)},...n,children:r.map(e=>(0,t.jsx)(s.R,{value:e.value,children:e.label},e.value))})}},71418:function(e,a,o){"use strict";o.d(a,{d:function(){return t}});let t=e=>100*Number(e.toFixed(2))},46896:function(e,a,o){"use strict";o.d(a,{G:function(){return i}});var t=o(2265),i=(null==globalThis?void 0:globalThis.document)?t.useLayoutEffect:t.useEffect},60720:function(e,a,o){"use strict";o.d(a,{N:function(){return s}});var t=o(92117),i=o(37408);function s(e){let{id:a,label:o,"aria-labelledby":s,"aria-label":r,labelElementType:n="label"}=e;a=(0,t.Me)(a);let l=(0,t.Me)(),u={};return o?(s=s?`${l} ${s}`:l,u={id:l,htmlFor:"label"===n?a:void 0}):s||r||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:u,fieldProps:(0,i.b)({id:a,"aria-label":r,"aria-labelledby":s})}}},60357:function(e,a,o){"use strict";o.d(a,{z:function(){return n}});let t=new Set(["id"]),i=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),s=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),r=/^(data-.*)$/;function n(e,a={}){let{labelable:o,isLink:n,propNames:l}=a,u={};for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t.has(a)||o&&i.has(a)||n&&s.has(a)||(null==l?void 0:l.has(a))||r.test(a))&&(u[a]=e[a]);return u}},37408:function(e,a,o){"use strict";o.d(a,{b:function(){return i}});var t=o(92117);function i(e,a){let{id:o,"aria-label":i,"aria-labelledby":s}=e;return o=(0,t.Me)(o),s&&i?s=[...new Set([o,...s.trim().split(/\s+/)])].join(" "):s&&(s=s.trim().split(/\s+/).join(" ")),i||s||!a||(i=a),{id:o,"aria-label":i,"aria-labelledby":s}}},41821:function(e,a,o){"use strict";o.d(a,{z:function(){return i}});var t=o(2265);function i(e,a,o){let[i,s]=(0,t.useState)(e||a),r=(0,t.useRef)(void 0!==e),n=void 0!==e;(0,t.useEffect)(()=>{let e=r.current;e!==n&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${n?"controlled":"uncontrolled"}.`),r.current=n},[n]);let l=n?e:i,u=(0,t.useCallback)((e,...a)=>{let t=(e,...a)=>{o&&!Object.is(l,e)&&o(e,...a),n||(l=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),s((o,...i)=>{let s=e(n?l:o,...i);return(t(s,...a),n)?o:s})):(n||s(e),t(e,...a))},[n,l,o]);return[l,u]}}},function(e){e.O(0,[333,944,552,971,23,744],function(){return e(e.s=82704)}),_N_E=e.O()}]);
import{R as M,r as Ze,j as ae}from"./index-CTb8eloC.js";var fe=e=>e.type==="checkbox",se=e=>e instanceof Date,p=e=>e==null;const er=e=>typeof e=="object";var S=e=>!p(e)&&!Array.isArray(e)&&er(e)&&!se(e),hr=e=>S(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,vr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,_r=(e,s)=>e.has(vr(s)),br=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(pe&&(e instanceof Blob||e instanceof FileList))&&(t||S(e)))if(s=t?[]:{},!t&&!br(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=N(e[l]));else return e;return s}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],x=e=>e===void 0,d=(e,s,t)=>{if(!s||!S(e))return t;const l=Ae(s.split(/[,[\].]+?/)).reduce((a,u)=>p(a)?a:a[u],e);return x(l)||l===e?x(e[s])?t:e[s]:l},J=e=>typeof e=="boolean",Te=e=>/^\w*$/.test(e),rr=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let l=-1;const a=Te(s)?[s]:rr(s),u=a.length,g=u-1;for(;++l<u;){const h=a[l];let I=t;if(l!==g){const q=e[h];I=S(q)||Array.isArray(q)?q:isNaN(+a[l+1])?{}:[]}if(h==="__proto__")return;e[h]=I,e=e[h]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};M.createContext(null);var Vr=(e,s,t,l=!0)=>{const a={defaultValues:s._defaultValues};for(const u in e)Object.defineProperty(a,u,{get:()=>{const g=u;return s._proxyFormState[g]!==P.all&&(s._proxyFormState[g]=!l||P.all),e[g]}});return a},T=e=>S(e)&&!Object.keys(e).length,Fr=(e,s,t,l)=>{t(e);const{name:a,...u}=e;return T(u)||Object.keys(u).length>=Object.keys(s).length||Object.keys(u).find(g=>s[g]===P.all)},he=e=>Array.isArray(e)?e:[e];function Ar(e){const s=M.useRef(e);s.current=e,M.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var j=e=>typeof e=="string",xr=(e,s,t,l,a)=>j(e)?(l&&s.watch.add(e),d(t,e,a)):Array.isArray(e)?e.map(u=>(l&&s.watch.add(u),d(t,u))):(l&&(s.watchAll=!0),t),wr=(e,s,t,l,a)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[l]:a||!0}}:{},$e=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Ke=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const oe=(e,s,t,l)=>{for(const a of t||Object.keys(e)){const u=d(e,a);if(u){const{_f:g,...h}=u;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],a)&&!l)break;if(g.ref&&s(g.ref,g.name)&&!l)break;oe(h,s)}else S(h)&&oe(h,s)}}};var Dr=(e,s,t)=>{const l=he(d(e,t));return A(l,"root",s[t]),A(e,t,l),e},Le=e=>e.type==="file",Q=e=>typeof e=="function",_e=e=>{if(!pe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>j(e),Oe=e=>e.type==="radio",be=e=>e instanceof RegExp;const Ge={value:!1,isValid:!1},ze={value:!0,isValid:!0};var tr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!x(e[0].attributes.value)?x(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ge}return Ge};const Je={isValid:!1,value:null};var sr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,Je):Je;function Qe(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||J(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var te=e=>S(e)&&!be(e)?e:{value:e,message:""},Xe=async(e,s,t,l,a)=>{const{ref:u,refs:g,required:h,maxLength:I,minLength:q,min:w,max:_,pattern:ce,validate:K,name:L,valueAsNumber:xe,mount:G,disabled:z}=e._f,b=d(s,L);if(!G||z)return{};const W=g?g[0]:u,H=v=>{l&&W.reportValidity&&(W.setCustomValidity(J(v)?"":v||""),W.reportValidity())},m={},Z=Oe(u),de=fe(u),X=Z||de,ee=(xe||Le(u))&&x(u.value)&&x(b)||_e(u)&&u.value===""||b===""||Array.isArray(b)&&!b.length,C=wr.bind(null,L,t,m),ye=(v,V,E,R=$.maxLength,B=$.minLength)=>{const U=v?V:E;m[L]={type:v?R:B,message:U,ref:u,...C(v?R:B,U)}};if(a?!Array.isArray(b)||!b.length:h&&(!X&&(ee||p(b))||J(b)&&!b||de&&!tr(g).isValid||Z&&!sr(g).isValid)){const{value:v,message:V}=ve(h)?{value:!!h,message:h}:te(h);if(v&&(m[L]={type:$.required,message:V,ref:W,...C($.required,V)},!t))return H(V),m}if(!ee&&(!p(w)||!p(_))){let v,V;const E=te(_),R=te(w);if(!p(b)&&!isNaN(b)){const B=u.valueAsNumber||b&&+b;p(E.value)||(v=B>E.value),p(R.value)||(V=B<R.value)}else{const B=u.valueAsDate||new Date(b),U=le=>new Date(new Date().toDateString()+" "+le),ie=u.type=="time",ne=u.type=="week";j(E.value)&&b&&(v=ie?U(b)>U(E.value):ne?b>E.value:B>new Date(E.value)),j(R.value)&&b&&(V=ie?U(b)<U(R.value):ne?b<R.value:B<new Date(R.value))}if((v||V)&&(ye(!!v,E.message,R.message,$.max,$.min),!t))return H(m[L].message),m}if((I||q)&&!ee&&(j(b)||a&&Array.isArray(b))){const v=te(I),V=te(q),E=!p(v.value)&&b.length>+v.value,R=!p(V.value)&&b.length<+V.value;if((E||R)&&(ye(E,v.message,V.message),!t))return H(m[L].message),m}if(ce&&!ee&&j(b)){const{value:v,message:V}=te(ce);if(be(v)&&!b.match(v)&&(m[L]={type:$.pattern,message:V,ref:u,...C($.pattern,V)},!t))return H(V),m}if(K){if(Q(K)){const v=await K(b,s),V=Qe(v,W);if(V&&(m[L]={...V,...C($.validate,V.message)},!t))return H(V.message),m}else if(S(K)){let v={};for(const V in K){if(!T(v)&&!t)break;const E=Qe(await K[V](b,s),W,V);E&&(v={...E,...C(V,E.message)},H(E.message),t&&(m[L]=v))}if(!T(v)&&(m[L]={ref:W,...v},!t))return m}}return H(!0),m};function mr(e,s){const t=s.slice(0,-1).length;let l=0;for(;l<t;)e=x(e)?l++:e[s[l++]];return e}function Er(e){for(const s in e)if(e.hasOwnProperty(s)&&!x(e[s]))return!1;return!0}function k(e,s){const t=Array.isArray(s)?s:Te(s)?[s]:rr(s),l=t.length===1?e:mr(e,t),a=t.length-1,u=t[a];return l&&delete l[u],a!==0&&(S(l)&&T(l)||Array.isArray(l)&&Er(l))&&k(e,t.slice(0,-1)),e}var ke=()=>{let e=[];return{get observers(){return e},next:a=>{for(const u of e)u.next&&u.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(u=>u!==a)}}),unsubscribe:()=>{e=[]}}},Ve=e=>p(e)||!er(e);function Y(e,s){if(Ve(e)||Ve(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const t=Object.keys(e),l=Object.keys(s);if(t.length!==l.length)return!1;for(const a of t){const u=e[a];if(!l.includes(a))return!1;if(a!=="ref"){const g=s[a];if(se(u)&&se(g)||S(u)&&S(g)||Array.isArray(u)&&Array.isArray(g)?!Y(u,g):u!==g)return!1}}return!0}var ir=e=>e.type==="select-multiple",kr=e=>Oe(e)||fe(e),Se=e=>_e(e)&&e.isConnected,nr=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(S(e)||t)for(const l in e)Array.isArray(e[l])||S(e[l])&&!nr(e[l])?(s[l]=Array.isArray(e[l])?[]:{},Fe(e[l],s[l])):p(e[l])||(s[l]=!0);return s}function lr(e,s,t){const l=Array.isArray(e);if(S(e)||l)for(const a in e)Array.isArray(e[a])||S(e[a])&&!nr(e[a])?x(s)||Ve(t[a])?t[a]=Array.isArray(e[a])?Fe(e[a],[]):{...Fe(e[a])}:lr(e[a],p(s)?{}:s[a],t[a]):t[a]=!Y(e[a],s[a]);return t}var ge=(e,s)=>lr(e,s,Fe(s)),ur=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:l})=>x(e)?e:s?e===""?NaN:e&&+e:t&&j(e)?new Date(e):l?l(e):e;function Re(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Le(s)?s.files:Oe(s)?sr(e.refs).value:ir(s)?[...s.selectedOptions].map(({value:t})=>t):fe(s)?tr(e.refs).value:ur(x(s.value)?e.ref.value:s.value,e)}var Sr=(e,s,t,l)=>{const a={};for(const u of e){const g=d(s,u);g&&A(a,u,g._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:l}},ue=e=>x(e)?e:be(e)?e.source:S(e)?be(e.value)?e.value.source:e.value:e,Rr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ye(e,s,t){const l=d(e,t);if(l||Te(t))return{error:l,name:t};const a=t.split(".");for(;a.length;){const u=a.join("."),g=d(s,u),h=d(e,u);if(g&&!Array.isArray(g)&&t!==u)return{name:t};if(h&&h.type)return{name:u,error:h};a.pop()}return{name:t}}var pr=(e,s,t,l,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(s||e):(t?l.isOnBlur:a.isOnBlur)?!e:(t?l.isOnChange:a.isOnChange)?e:!0,Tr=(e,s)=>!Ae(d(e,s)).length&&k(e,s);const Lr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function Or(e={}){let s={...Lr,...e},t={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},a=S(s.defaultValues)||S(s.values)?N(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:N(a),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},I,q=0;const w={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:ke(),array:ke(),state:ke()},ce=$e(s.mode),K=$e(s.reValidateMode),L=s.criteriaMode===P.all,xe=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},G=async r=>{if(w.isValid||r){const i=s.resolver?T((await X()).errors):await C(l,!0);i!==t.isValid&&_.state.next({isValid:i})}},z=(r,i)=>{(w.isValidating||w.validatingFields)&&((r||Array.from(h.mount)).forEach(n=>{n&&(i?A(t.validatingFields,n,i):k(t.validatingFields,n))}),_.state.next({validatingFields:t.validatingFields,isValidating:!T(t.validatingFields)}))},b=(r,i=[],n,c,f=!0,o=!0)=>{if(c&&n){if(g.action=!0,o&&Array.isArray(d(l,r))){const y=n(d(l,r),c.argA,c.argB);f&&A(l,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=n(d(t.errors,r),c.argA,c.argB);f&&A(t.errors,r,y),Tr(t.errors,r)}if(w.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=n(d(t.touchedFields,r),c.argA,c.argB);f&&A(t.touchedFields,r,y)}w.dirtyFields&&(t.dirtyFields=ge(a,u)),_.state.next({name:r,isDirty:v(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(u,r,i)},W=(r,i)=>{A(t.errors,r,i),_.state.next({errors:t.errors})},H=r=>{t.errors=r,_.state.next({errors:t.errors,isValid:!1})},m=(r,i,n,c)=>{const f=d(l,r);if(f){const o=d(u,r,x(n)?d(a,r):n);x(o)||c&&c.defaultChecked||i?A(u,r,i?o:Re(f._f)):R(r,o),g.mount&&G()}},Z=(r,i,n,c,f)=>{let o=!1,y=!1;const F={name:r},D=!!(d(l,r)&&d(l,r)._f&&d(l,r)._f.disabled);if(!n||c){w.isDirty&&(y=t.isDirty,t.isDirty=F.isDirty=v(),o=y!==F.isDirty);const O=D||Y(d(a,r),i);y=!!(!D&&d(t.dirtyFields,r)),O||D?k(t.dirtyFields,r):A(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,o=o||w.dirtyFields&&y!==!O}if(n){const O=d(t.touchedFields,r);O||(A(t.touchedFields,r,n),F.touchedFields=t.touchedFields,o=o||w.touchedFields&&O!==n)}return o&&f&&_.state.next(F),o?F:{}},de=(r,i,n,c)=>{const f=d(t.errors,r),o=w.isValid&&J(i)&&t.isValid!==i;if(e.delayError&&n?(I=xe(()=>W(r,n)),I(e.delayError)):(clearTimeout(q),I=null,n?A(t.errors,r,n):k(t.errors,r)),(n?!Y(f,n):f)||!T(c)||o){const y={...c,...o&&J(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},_.state.next(y)}},X=async r=>{z(r,!0);const i=await s.resolver(u,s.context,Sr(r||h.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return z(r),i},ee=async r=>{const{errors:i}=await X(r);if(r)for(const n of r){const c=d(i,n);c?A(t.errors,n,c):k(t.errors,n)}else t.errors=i;return i},C=async(r,i,n={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...y}=f;if(o){const F=h.array.has(o.name);z([c],!0);const D=await Xe(f,u,L,s.shouldUseNativeValidation&&!i,F);if(z([c]),D[o.name]&&(n.valid=!1,i))break;!i&&(d(D,o.name)?F?Dr(t.errors,D,o.name):A(t.errors,o.name,D[o.name]):k(t.errors,o.name))}!T(y)&&await C(y,i,n)}}return n.valid},ye=()=>{for(const r of h.unMount){const i=d(l,r);i&&(i._f.refs?i._f.refs.every(n=>!Se(n)):!Se(i._f.ref))&&we(r)}h.unMount=new Set},v=(r,i)=>(r&&i&&A(u,r,i),!Y(Ce(),a)),V=(r,i,n)=>xr(r,h,{...g.mount?u:x(i)?a:j(r)?{[r]:i}:i},n,i),E=r=>Ae(d(g.mount?u:a,r,e.shouldUnregister?d(a,r,[]):[])),R=(r,i,n={})=>{const c=d(l,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&A(u,r,ur(i,o)),f=_e(o.ref)&&p(i)?"":i,ir(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?fe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(F=>F===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:r,values:{...u}})))}(n.shouldDirty||n.shouldTouch)&&Z(r,f,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&le(r)},B=(r,i,n)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,y=d(l,o);(h.array.has(r)||!Ve(f)||y&&!y._f)&&!se(f)?B(o,f,n):R(o,f,n)}},U=(r,i,n={})=>{const c=d(l,r),f=h.array.has(r),o=N(i);A(u,r,o),f?(_.array.next({name:r,values:{...u}}),(w.isDirty||w.dirtyFields)&&n.shouldDirty&&_.state.next({name:r,dirtyFields:ge(a,u),isDirty:v(r,o)})):c&&!c._f&&!p(o)?B(r,o,n):R(r,o,n),Ke(r,h)&&_.state.next({...t}),_.values.next({name:g.mount?r:void 0,values:{...u}})},ie=async r=>{g.mount=!0;const i=r.target;let n=i.name,c=!0;const f=d(l,n),o=()=>i.type?Re(f._f):hr(r),y=F=>{c=Number.isNaN(F)||F===d(u,n,F)};if(f){let F,D;const O=o(),re=r.type===He.BLUR||r.type===He.FOCUS_OUT,dr=!Rr(f._f)&&!s.resolver&&!d(t.errors,n)&&!f._f.deps||pr(re,d(t.touchedFields,n),t.isSubmitted,K,ce),me=Ke(n,h,re);A(u,n,O),re?(f._f.onBlur&&f._f.onBlur(r),I&&I(0)):f._f.onChange&&f._f.onChange(r);const Ee=Z(n,O,re,!1),yr=!T(Ee)||me;if(!re&&_.values.next({name:n,type:r.type,values:{...u}}),dr)return w.isValid&&G(),yr&&_.state.next({name:n,...me?{}:Ee});if(!re&&me&&_.state.next({...t}),s.resolver){const{errors:je}=await X([n]);if(y(O),c){const gr=Ye(t.errors,l,n),We=Ye(je,l,gr.name||n);F=We.error,n=We.name,D=T(je)}}else z([n],!0),F=(await Xe(f,u,L,s.shouldUseNativeValidation))[n],z([n]),y(O),c&&(F?D=!1:w.isValid&&(D=await C(l,!0)));c&&(f._f.deps&&le(f._f.deps),de(n,D,F,Ee))}},ne=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},le=async(r,i={})=>{let n,c;const f=he(r);if(s.resolver){const o=await ee(x(r)?r:f);n=T(o),c=r?!f.some(y=>d(o,y)):n}else r?(c=(await Promise.all(f.map(async o=>{const y=d(l,o);return await C(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!t.isValid)&&G()):c=n=await C(l);return _.state.next({...!j(r)||w.isValid&&n!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:n}:{},errors:t.errors}),i.shouldFocus&&!c&&oe(l,ne,r?f:h.mount),c},Ce=r=>{const i={...g.mount?u:a};return x(r)?i:j(r)?d(i,r):r.map(n=>d(i,n))},Ue=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),error:d((i||t).errors,r),isValidating:!!d(t.validatingFields,r),isTouched:!!d((i||t).touchedFields,r)}),ar=r=>{r&&he(r).forEach(i=>k(t.errors,i)),_.state.next({errors:r?t.errors:{}})},Ne=(r,i,n)=>{const c=(d(l,r,{_f:{}})._f||{}).ref,f=d(t.errors,r)||{},{ref:o,message:y,type:F,...D}=f;A(t.errors,r,{...D,...i,ref:c}),_.state.next({name:r,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&c&&c.focus&&c.focus()},or=(r,i)=>Q(r)?_.values.subscribe({next:n=>r(V(void 0,i),n)}):V(r,i,!0),we=(r,i={})=>{for(const n of r?he(r):h.mount)h.mount.delete(n),h.array.delete(n),i.keepValue||(k(l,n),k(u,n)),!i.keepError&&k(t.errors,n),!i.keepDirty&&k(t.dirtyFields,n),!i.keepTouched&&k(t.touchedFields,n),!i.keepIsValidating&&k(t.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&k(a,n);_.values.next({values:{...u}}),_.state.next({...t,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&G()},Me=({disabled:r,name:i,field:n,fields:c,value:f})=>{if(J(r)&&g.mount||r){const o=r?void 0:x(f)?Re(n?n._f:d(c,i)._f):f;A(u,i,o),Z(i,o,!1,!1,!0)}},De=(r,i={})=>{let n=d(l,r);const c=J(i.disabled);return A(l,r,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),n?Me({field:n,disabled:i.disabled,name:r,value:i.value}):m(r,!0,i.value),{...c?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){De(r,i),n=d(l,r);const o=x(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=kr(o),F=n._f.refs||[];if(y?F.find(D=>D===o):o===n._f.ref)return;A(l,r,{_f:{...n._f,...y?{refs:[...F.filter(Se),o,...Array.isArray(d(a,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),m(r,!1,void 0,o)}else n=d(l,r,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(_r(h.array,r)&&g.action)&&h.unMount.add(r)}}},Ie=()=>s.shouldFocusError&&oe(l,ne,h.mount),fr=r=>{J(r)&&(_.state.next({disabled:r}),oe(l,(i,n)=>{const c=d(l,n);c&&(i.disabled=c._f.disabled||r,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||r}))},0,!1))},Be=(r,i)=>async n=>{let c;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let f=N(u);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await X();t.errors=o,f=y}else await C(l);if(k(t.errors,"root"),T(t.errors)){_.state.next({errors:{}});try{await r(f,n)}catch(o){c=o}}else i&&await i({...t.errors},n),Ie(),setTimeout(Ie);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:T(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},cr=(r,i={})=>{d(l,r)&&(x(i.defaultValue)?U(r,N(d(a,r))):(U(r,i.defaultValue),A(a,r,N(i.defaultValue))),i.keepTouched||k(t.touchedFields,r),i.keepDirty||(k(t.dirtyFields,r),t.isDirty=i.defaultValue?v(r,N(d(a,r))):v()),i.keepError||(k(t.errors,r),w.isValid&&G()),_.state.next({...t}))},Pe=(r,i={})=>{const n=r?N(r):a,c=N(n),f=T(r),o=f?a:c;if(i.keepDefaultValues||(a=n),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)d(t.dirtyFields,y)?A(o,y,d(u,y)):U(y,d(o,y));else{if(pe&&x(r))for(const y of h.mount){const F=d(l,y);if(F&&F._f){const D=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(_e(D)){const O=D.closest("form");if(O){O.reset();break}}}}l={}}u=e.shouldUnregister?i.keepDefaultValues?N(a):{}:N(o),_.array.next({values:{...o}}),_.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!w.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Y(r,a)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&u?ge(a,u):t.dirtyFields:i.keepDefaultValues&&r?ge(a,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},qe=(r,i)=>Pe(Q(r)?r(u):r,i);return{control:{register:De,unregister:we,getFieldState:Ue,handleSubmit:Be,setError:Ne,_executeSchema:X,_getWatch:V,_getDirty:v,_updateValid:G,_removeUnmounted:ye,_updateFieldArray:b,_updateDisabledField:Me,_getFieldArray:E,_reset:Pe,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(r=>{qe(r,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:fr,_subjects:_,_proxyFormState:w,_setErrors:H,get _fields(){return l},get _formValues(){return u},get _state(){return g},set _state(r){g=r},get _defaultValues(){return a},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:le,register:De,handleSubmit:Be,watch:or,setValue:U,getValues:Ce,reset:qe,resetField:cr,clearErrors:ar,unregister:we,setError:Ne,setFocus:(r,i={})=>{const n=d(l,r),c=n&&n._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ue}}function Wr(e={}){const s=M.useRef(),t=M.useRef(),[l,a]=M.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Or(e),formState:l});const u=s.current.control;return u._options=e,Ar({subject:u._subjects.state,next:g=>{Fr(g,u._proxyFormState,u._updateFormState)&&a({...u._formState})}}),M.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),M.useEffect(()=>{if(u._proxyFormState.isDirty){const g=u._getDirty();g!==l.isDirty&&u._subjects.state.next({isDirty:g})}},[u,l.isDirty]),M.useEffect(()=>{e.values&&!Y(e.values,t.current)?(u._reset(e.values,u._options.resetOptions),t.current=e.values,a(g=>({...g}))):u._resetDefaultValues()},[e.values,u]),M.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),M.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),M.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),s.current.formState=Vr(l,u),s.current}const Cr="_input_1flnm_1",Ur={input:Cr},Nr=Ze.forwardRef(({...e},s)=>{const t=[Ur.input,e.className].filter(Boolean).join(" ");return ae.jsx("input",{className:t,...e,ref:s})}),Mr="_container_1kprl_1",Ir={container:Mr},Hr=Ze.forwardRef(({id:e,label:s,hint:t,...l},a)=>ae.jsxs("div",{className:Ir.container,children:[ae.jsx("label",{htmlFor:e,children:s}),ae.jsx(Nr,{id:e,"data-testid":e,...l,ref:a}),t&&ae.jsx("small",{children:t})]}));export{Hr as I,Wr as u};
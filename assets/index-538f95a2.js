import{i as ge,r as S,u as f,g as Oe,o as ie,n as $,b as Ie,e as ye,f as Le,w as k,c as x,j as we,s as Te,k as C,l as D,m as o,d as B,p as M,h as Pe,q as ke,T as Ae,t as p,v as b,x as X,F as ce,y as P,z as Ne}from"./vue-2b0d95ff.js";import{C as He}from"./codemirror-b39bf9d0.js";import{m as Me}from"./codemirror-lang-1e199681.js";import{P as u,r as Re,p as Ue}from"./markdown-wasm-cef297e8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();var z;const ue=typeof window<"u",Ce=e=>typeof e=="function",Ve=e=>typeof e=="string",xe=()=>{};ue&&((z=window?.navigator)!=null&&z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function V(e){return typeof e=="function"?e():f(e)}function Ke(e,s){function t(...a){return new Promise((r,l)=>{Promise.resolve(e(()=>s.apply(this,a),{fn:s,thisArg:this,args:a})).then(r).catch(l)})}return t}const de=e=>e();function $e(e=de){const s=S(!0);function t(){s.value=!1}function a(){s.value=!0}const r=(...l)=>{s.value&&e(...l)};return{isActive:Le(s),pause:t,resume:a,eventFilter:r}}function De(e){return e}function _e(e){return Ie()?(ye(e),!0):!1}function Be(e){return typeof e=="function"?x(e):S(e)}function fe(e,s=!0){Oe()?ie(e):s?e():$(e)}function We(e=!1,s={}){const{truthyValue:t=!0,falsyValue:a=!1}=s,r=ge(e),l=S(e);function d(n){if(arguments.length)return l.value=n,l.value;{const m=V(t);return l.value=l.value===m?V(a):m,l.value}}return r?d:[l,d]}var J=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,Xe=(e,s)=>{var t={};for(var a in e)je.call(e,a)&&s.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&J)for(var a of J(e))s.indexOf(a)<0&&Fe.call(e,a)&&(t[a]=e[a]);return t};function ze(e,s,t={}){const a=t,{eventFilter:r=de}=a,l=Xe(a,["eventFilter"]);return k(e,Ke(r,s),l)}var Je=Object.defineProperty,Ge=Object.defineProperties,Qe=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,G=(e,s,t)=>s in e?Je(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,qe=(e,s)=>{for(var t in s||(s={}))pe.call(s,t)&&G(e,t,s[t]);if(K)for(var t of K(s))me.call(s,t)&&G(e,t,s[t]);return e},Ye=(e,s)=>Ge(e,Qe(s)),Ze=(e,s)=>{var t={};for(var a in e)pe.call(e,a)&&s.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&K)for(var a of K(e))s.indexOf(a)<0&&me.call(e,a)&&(t[a]=e[a]);return t};function et(e,s,t={}){const a=t,{eventFilter:r}=a,l=Ze(a,["eventFilter"]),{eventFilter:d,pause:n,resume:m,isActive:h}=$e(r);return{stop:ze(e,s,Ye(qe({},l),{eventFilter:d})),pause:n,resume:m,isActive:h}}function tt(e){var s;const t=V(e);return(s=t?.$el)!=null?s:t}const R=ue?window:void 0;function Q(...e){let s,t,a,r;if(Ve(e[0])||Array.isArray(e[0])?([t,a,r]=e,s=R):[s,t,a,r]=e,!s)return xe;Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]);const l=[],d=()=>{l.forEach(E=>E()),l.length=0},n=(E,g,I,v)=>(E.addEventListener(g,I,v),()=>E.removeEventListener(g,I,v)),m=k(()=>[tt(s),V(r)],([E,g])=>{d(),E&&l.push(...t.flatMap(I=>a.map(v=>n(E,I,v,g))))},{immediate:!0,flush:"post"}),h=()=>{m(),d()};return _e(h),h}function st(e,s=!1){const t=S(),a=()=>t.value=!!e();return a(),fe(a,s),t}function ot(e,s={}){const{window:t=R}=s,a=st(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const l=S(!1),d=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",n):r.removeListener(n))},n=()=>{a.value&&(d(),r=t.matchMedia(Be(e).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",n):r.addListener(n))};return we(n),_e(()=>d()),l}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";j[F]=j[F]||{};const at=j[F];function he(e,s){return at[e]||s}function rt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var nt=Object.defineProperty,q=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,Y=(e,s,t)=>s in e?nt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,Z=(e,s)=>{for(var t in s||(s={}))lt.call(s,t)&&Y(e,t,s[t]);if(q)for(var t of q(s))it.call(s,t)&&Y(e,t,s[t]);return e};const ct={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ee="vueuse-storage";function ut(e,s,t,a={}){var r;const{flush:l="pre",deep:d=!0,listenToStorageChanges:n=!0,writeDefaults:m=!0,mergeDefaults:h=!1,shallow:E,window:g=R,eventFilter:I,onError:v=_=>{console.error(_)}}=a,i=(E?Te:S)(s);if(!t)try{t=he("getDefaultStorage",()=>{var _;return(_=R)==null?void 0:_.localStorage})()}catch(_){v(_)}if(!t)return i;const c=V(s),U=rt(c),w=(r=a.serializer)!=null?r:ct[U],{pause:y,resume:T}=et(i,()=>A(i.value),{flush:l,deep:d,eventFilter:I});return g&&n&&(Q(g,"storage",L),Q(g,ee,W)),L(),i;function A(_){try{if(_==null)t.removeItem(e);else{const O=w.write(_),N=t.getItem(e);N!==O&&(t.setItem(e,O),g&&g.dispatchEvent(new CustomEvent(ee,{detail:{key:e,oldValue:N,newValue:O,storageArea:t}})))}}catch(O){v(O)}}function H(_){const O=_?_.newValue:t.getItem(e);if(O==null)return m&&c!==null&&t.setItem(e,w.write(c)),c;if(!_&&h){const N=w.read(O);return Ce(h)?h(N,c):U==="object"&&!Array.isArray(N)?Z(Z({},c),N):N}else return typeof O!="string"?O:w.read(O)}function W(_){L(_.detail)}function L(_){if(!(_&&_.storageArea!==t)){if(_&&_.key==null){i.value=c;return}if(!(_&&_.key!==e)){y();try{i.value=H(_)}catch(O){v(O)}finally{_?$(T):T()}}}}}function ve(e){return ot("(prefers-color-scheme: dark)",e)}var dt=Object.defineProperty,te=Object.getOwnPropertySymbols,_t=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,se=(e,s,t)=>s in e?dt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,pt=(e,s)=>{for(var t in s||(s={}))_t.call(s,t)&&se(e,t,s[t]);if(te)for(var t of te(s))ft.call(s,t)&&se(e,t,s[t]);return e};function mt(e={}){const{selector:s="html",attribute:t="class",initialValue:a="auto",window:r=R,storage:l,storageKey:d="vueuse-color-scheme",listenToStorageChanges:n=!0,storageRef:m,emitAuto:h}=e,E=pt({auto:"",light:"light",dark:"dark"},e.modes||{}),g=ve({window:r}),I=x(()=>g.value?"dark":"light"),v=m||(d==null?S(a):ut(d,a,l,{window:r,listenToStorageChanges:n})),i=x({get(){return v.value==="auto"&&!h?I.value:v.value},set(y){v.value=y}}),c=he("updateHTMLAttrs",(y,T,A)=>{const H=r?.document.querySelector(y);if(H)if(T==="class"){const W=A.split(/\s/g);Object.values(E).flatMap(L=>(L||"").split(/\s/g)).filter(Boolean).forEach(L=>{W.includes(L)?H.classList.add(L):H.classList.remove(L)})}else H.setAttribute(T,A)});function U(y){var T;const A=y==="auto"?I.value:y;c(s,t,(T=E[A])!=null?T:A)}function w(y){e.onChanged?e.onChanged(y,U):U(y)}return k(i,w,{flush:"post",immediate:!0}),h&&k(I,()=>w(i.value),{flush:"post"}),fe(()=>w(i.value)),i}var ht=Object.defineProperty,vt=Object.defineProperties,bt=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,ae=(e,s,t)=>s in e?ht(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,gt=(e,s)=>{for(var t in s||(s={}))St.call(s,t)&&ae(e,t,s[t]);if(oe)for(var t of oe(s))Et.call(s,t)&&ae(e,t,s[t]);return e},Ot=(e,s)=>vt(e,bt(s));function be(e={}){const{valueDark:s="dark",valueLight:t="",window:a=R}=e,r=mt(Ot(gt({},e),{onChanged:(n,m)=>{var h;e.onChanged?(h=e.onChanged)==null||h.call(e,n==="dark"):m(n)},modes:{dark:s,light:t}})),l=ve({window:a});return x({get(){return r.value==="dark"},set(n){n===l.value?r.value="auto":r.value=n?"dark":"light"}})}var re;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(re||(re={}));var It=Object.defineProperty,ne=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,le=(e,s,t)=>s in e?It(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,wt=(e,s)=>{for(var t in s||(s={}))yt.call(s,t)&&le(e,t,s[t]);if(ne)for(var t of ne(s))Lt.call(s,t)&&le(e,t,s[t]);return e};const Tt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};wt({linear:De},Tt);var Pt=(e,s)=>{const t=e.__vccOpts||e;for(const[a,r]of s)t[a]=r;return t};const kt={},At={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-circle-half",viewBox:"0 0 16 16"},Nt=o("path",{d:"M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"},null,-1),Ht=[Nt];function Mt(e,s){return C(),D("svg",At,Ht)}var Se=Pt(kt,[["render",Mt]]),Rt=B({__name:"ToggleTheme",setup(e){const s=be(),t=We(s);return k(()=>s.value,a=>document.documentElement.setAttribute("data-bs-theme",a?"dark":"light")),(a,r)=>(C(),D("a",{href:"#",onClick:r[0]||(r[0]=l=>f(t)())},[M(Se)]))}});const Ut=e=>e?Object.entries(e).reduce((s,[t,a])=>(t=t.charAt(0).toUpperCase()+t.slice(1),t=`on${t}`,{...s,[t]:a}),{}):{};function Ct(e,s={},t){const{props:a,domProps:r,on:l,...d}=s,n=l!=null?Ut(l):{};return Pe(e,{...d,...a,...r,...n},t)}var Ee=B({name:"VueMarkdown",model:{prop:"modelValue"},props:{modelValue:{type:String,default:""},tag:{type:String,default:"article"},parseFlags:{type:Number,default:u.DEFAULT},format:{type:String,default:"xhtml"},bytes:{type:Boolean,default:!1},allowJsUri:{type:Boolean,default:!1},onCodeBlock:{type:Function,default:()=>{}}},emits:{render:e=>!0},setup(e,s){const t=S(),a=S("");k(()=>e,async l=>{a.value=r(l.modelValue,{parseFlags:l.parseFlags,format:l.format,bytes:e.bytes,allowJSURIs:l.allowJsUri,onCodeBlock:l.onCodeBlock}),await $()},{deep:!0}),ie(async()=>{await Re(),a.value=r(e.modelValue,{parseFlags:e.parseFlags,format:e.format,bytes:e.bytes,allowJSURIs:e.allowJsUri,onCodeBlock:e.onCodeBlock})});const r=(l,d)=>{const n=Ue(l,d);return s.emit("render",n),n};return s.expose({render:r}),{placeholder:t,html:a}},render(){return Ct(this.$props.tag,{ref:"placeholder",class:"vue-markdown",domProps:{innerHTML:this.html}})}});const Vt=e=>e.component("VueMarkdown",Ee);typeof window<"u"&&window.Vue&&window.Vue.use(Vt);var xt=""+new URL("logo-9d1d68e5.png",import.meta.url).href;const Kt=["href"],$t={class:"container"},Dt={class:"card my-3"},Bt=o("h2",{class:"card-header h5"},"Demo",-1),Wt={class:"card-body"},jt=o("p",null,[P(" Markdown editor uses "),o("a",{href:"https://github.com/logue/vue-codemirror6/",target:"_blank"}," vue-codemirror6 "),P(" . Also, the Markdown preview uses the "),o("a",{href:"https://github.com/sindresorhus/github-markdown-css/",target:"_blank"}," github-markdown-css "),P(" stylesheet. ")],-1),Ft={class:"row"},Xt={class:"col-6"},zt={class:"col-6"},Jt={class:"card my-3"},Gt=o("h2",{class:"card-header h5"},"Options",-1),Qt={class:"card-body"},qt=o("legend",null,"ParseFlags",-1),Yt={class:"list-unstyled card-columns",style:{"column-count":"2"}},Zt={class:"form-check"},es=["value"],ts=o("label",{class:"form-check-label",for:"COLLAPSE_WHITESPACE"}," COLLAPSE_WHITESPACE ",-1),ss=o("div",{id:"COLLAPSE_WHITESPACE_HELP",class:"form-text"}," In TEXT, collapse non-trivial whitespace into single ' ' ",-1),os={class:"form-check"},as=["value"],rs=o("label",{class:"form-check-label",for:"LATEX_MATH_SPANS"}," LATEX_MATH_SPANS ",-1),ns=o("div",{id:"LATEX_MATH_SPANS_HELP",class:"form-text"}," Enable $ and $$ containing LaTeX equations. ",-1),ls={class:"form-check"},is=["value"],cs=o("label",{class:"form-check-label",for:"NO_HTML_BLOCKS"}," NO_HTML_BLOCKS ",-1),us=o("div",{id:"NO_HTML_BLOCKS_HELP",class:"form-text"}," Disable raw HTML blocks. ",-1),ds={class:"form-check"},_s=["value"],fs=o("label",{class:"form-check-label",for:"NO_HTML_SPANS"}," NO_HTML_SPANS ",-1),ps=o("div",{id:"NO_HTML_BLOCKS_HELP",class:"form-text"}," Disable raw HTML (inline). ",-1),ms={class:"form-check"},hs=["value"],vs=o("label",{class:"form-check-label",for:"NO_INDENTED_CODE_BLOCKS"}," NO_INDENTED_CODE_BLOCKS ",-1),bs=o("div",{id:"NO_INDENTED_CODE_BLOCKS_HELP",class:"form-text"}," Disable indented code blocks. (Only fenced code works.) ",-1),Ss={class:"form-check"},Es=["value"],gs=o("label",{class:"form-check-label",for:"PERMISSIVE_ATX_HEADERS"}," PERMISSIVE_ATX_HEADERS ",-1),Os=o("div",{id:"PERMISSIVE_ATX_HEADERS_HELP",class:"form-text"}," Do not require space in ATX headers ( ###header ) ",-1),Is={class:"form-check"},ys=["value"],Ls=o("label",{class:"form-check-label",for:"PERMISSIVE_EMAIL_AUTO_LINKS"}," PERMISSIVE_EMAIL_AUTO_LINKS ",-1),ws=o("div",{id:"PERMISSIVE_EMAIL_AUTO_LINKS_HELP",class:"form-text"}," Recognize e-mails as links even without <...> ",-1),Ts={class:"form-check"},Ps=["value"],ks=o("label",{class:"form-check-label",for:"PERMISSIVE_URL_AUTO_LINKS"}," PERMISSIVE_URL_AUTO_LINKS ",-1),As=o("div",{id:"PERMISSIVE_URL_AUTO_LINKS_HELP",class:"form-text"}," Recognize URLs as links even without <...> ",-1),Ns={class:"form-check"},Hs=["value"],Ms=o("label",{class:"form-check-label",for:"PERMISSIVE_WWW_AUTOLINKS"}," PERMISSIVE_WWW_AUTOLINKS ",-1),Rs=o("div",{id:"PERMISSIVE_WWW_AUTOLINKS_HELP",class:"form-text"}," Enable WWW autolinks (without proto; just 'www.') ",-1),Us={class:"form-check"},Cs=["value"],Vs=o("label",{class:"form-check-label",for:"STRIKETHROUGH"}," STRIKETHROUGH ",-1),xs=o("div",{id:"STRIKETHROUGH_HELP",class:"form-text"}," Enable strikethrough extension. ",-1),Ks={class:"form-check"},$s=["value"],Ds=o("label",{class:"form-check-label",for:"TABLES"},"TABLES",-1),Bs=o("div",{id:"TABLES_HELP",class:"form-text"}," Enable tables extension. ",-1),Ws={class:"form-check"},js=["value"],Fs=o("label",{class:"form-check-label",for:"TASK_LISTS"}," TASK_LISTS ",-1),Xs=o("div",{id:"TASK_LISTS_HELP",class:"form-text"}," Enable task list extension. ",-1),zs={class:"form-check"},Js=["value"],Gs=o("label",{class:"form-check-label",for:"WIKI_LINKS"}," WIKI_LINKS ",-1),Qs=o("div",{id:"WIKI_LINKS_HELP",class:"form-text"}," Enable wiki links extension. ",-1),qs={class:"form-check"},Ys=["value"],Zs=o("label",{class:"form-check-label",for:"UNDERLINE"},"UNDERLINE",-1),eo=o("div",{id:"UNDERLINE",class:"form-text"}," Enable underline extension (disables '_' for emphasis) ",-1),to=o("legend",null,"Output Foramat",-1),so={class:"form-check form-check-inline"},oo=o("label",{class:"form-check-label",for:"formatHtml"},"html",-1),ao={class:"form-check form-check-inline"},ro=o("label",{class:"form-check-label",for:"formatXhtml"},"xhtml",-1),no=o("legend",null,"Other Options",-1),lo={class:"form-check form-switch"},io=o("label",{class:"form-check-label",for:"bytes"}," result as a Uint8Array ",-1),co={class:"form-check form-switch"},uo=o("label",{class:"form-check-label",for:"allowJsUri"},' Allow "javascript:" in links ',-1);var _o=B({__name:"DemoPage",setup(e){const s=S(),t=S(`# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3

## Images

![This is a alt text.](${xt} "This is a sample image.")

## Links

You may be using [Vue Markdown Wasm Live Preview](https://logue.dev/vue-markdown-wasm/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Center columns | Right columns |
|:------------- |:--------------:| -------------:|
| left foo      | center foo     | right foo     |
| left bar      | center bar     | right bar     |
| left baz      | center baz     | right baz     |

## Blocks of code

\`\`\`js
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markdown-wasm\`.`),a=S("xhtml"),r=S(u.DEFAULT),l=S(!1),d=S(!1),n=S([u.COLLAPSE_WHITESPACE,u.PERMISSIVE_ATX_HEADERS,u.PERMISSIVE_URL_AUTO_LINKS,u.STRIKETHROUGH,u.TABLES,u.TASK_LISTS]),m=be();k(()=>n.value,v=>{r.value=v.length!==0?Object.values(v).reduce((i,c)=>i+c):0});const h=()=>{n.value=[u.COLLAPSE_WHITESPACE,u.PERMISSIVE_ATX_HEADERS,u.PERMISSIVE_URL_AUTO_LINKS,u.STRIKETHROUGH,u.TABLES,u.TASK_LISTS]},E=()=>n.value=[u.NO_HTML_BLOCKS,u.NO_HTML_SPANS],g=()=>n.value=[],I=()=>n.value=[u.PERMISSIVE_URL_AUTO_LINKS,u.TABLES,u.STRIKETHROUGH,u.TASK_LISTS];return k(()=>m.value,async()=>await $()),(v,i)=>(C(),D(ce,null,[(C(),ke(Ae,{to:"head"},[o("link",{rel:"stylesheet",href:`https://cdn.jsdelivr.net/npm/github-markdown-css@5.2.0/github-markdown-${f(m)?"dark":"light"}.css`},null,8,Kt)])),o("main",$t,[o("div",Dt,[Bt,o("div",Wt,[jt,o("div",Ft,[o("div",Xt,[M(f(He),{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=c=>t.value=c),dark:f(m),lang:f(Me)(),wrap:"",basic:""},null,8,["modelValue","dark","lang"])]),o("div",zt,[M(f(Ee),{ref_key:"markdown",ref:s,modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=c=>t.value=c),class:"markdown-body px-3 py-3 rounded","parse-flags":r.value,format:a.value,bytes:l.value,"allow-js-uri":d.value},null,8,["modelValue","parse-flags","format","bytes","allow-js-uri"])])])])]),o("div",Jt,[Gt,o("div",Qt,[o("fieldset",null,[qt,o("div",{class:"d-grid gap-2 d-md-block my-1"},[o("button",{type:"button",class:"btn btn-primary mr-1",onClick:h}," DEFAULT "),o("button",{type:"button",class:"btn btn-info mx-1",onClick:E}," NO_HTML "),o("button",{type:"button",class:"btn btn-secondary mx-1",onClick:g}," COMMONMARK "),o("button",{type:"button",class:"btn btn-success ml-1",onClick:I}," GITHUB ")]),o("ul",Yt,[o("li",Zt,[p(o("input",{id:"COLLAPSE_WHITESPACE","onUpdate:modelValue":i[2]||(i[2]=c=>n.value=c),class:"form-check-input","aria-describedby":"COLLAPSE_WHITESPACE_HELP",type:"checkbox",value:f(u).COLLAPSE_WHITESPACE},null,8,es),[[b,n.value]]),ts,ss]),o("li",os,[p(o("input",{id:"LATEX_MATH_SPANS","onUpdate:modelValue":i[3]||(i[3]=c=>n.value=c),class:"form-check-input","aria-describedby":"LATEX_MATH_SPANS_HELP",type:"checkbox",value:f(u).LATEX_MATH_SPANS},null,8,as),[[b,n.value]]),rs,ns]),o("li",ls,[p(o("input",{id:"NO_HTML_BLOCKS","onUpdate:modelValue":i[4]||(i[4]=c=>n.value=c),class:"form-check-input","aria-describedby":"NO_HTML_BLOCKS_HELP",type:"checkbox",value:f(u).NO_HTML_BLOCKS},null,8,is),[[b,n.value]]),cs,us]),o("li",ds,[p(o("input",{id:"NO_HTML_SPANS","onUpdate:modelValue":i[5]||(i[5]=c=>n.value=c),class:"form-check-input","aria-describedby":"NO_HTML_SPANS_HELP",type:"checkbox",value:f(u).NO_HTML_SPANS},null,8,_s),[[b,n.value]]),fs,ps]),o("li",ms,[p(o("input",{id:"NO_INDENTED_CODE_BLOCKS","onUpdate:modelValue":i[6]||(i[6]=c=>n.value=c),class:"form-check-input","aria-describedby":"NO_INDENTED_CODE_BLOCKS_HELP",type:"checkbox",value:f(u).NO_INDENTED_CODE_BLOCKS},null,8,hs),[[b,n.value]]),vs,bs]),o("li",Ss,[p(o("input",{id:"PERMISSIVE_ATX_HEADERS","onUpdate:modelValue":i[7]||(i[7]=c=>n.value=c),class:"form-check-input","aria-describedby":"PERMISSIVE_ATX_HEADERS_HELP",type:"checkbox",value:f(u).PERMISSIVE_ATX_HEADERS},null,8,Es),[[b,n.value]]),gs,Os]),o("li",Is,[p(o("input",{id:"PERMISSIVE_EMAIL_AUTO_LINKS","onUpdate:modelValue":i[8]||(i[8]=c=>n.value=c),class:"form-check-input","aria-describedby":"PERMISSIVE_EMAIL_AUTO_LINKS_HELP",type:"checkbox",value:f(u).PERMISSIVE_EMAIL_AUTO_LINKS},null,8,ys),[[b,n.value]]),Ls,ws]),o("li",Ts,[p(o("input",{id:"PERMISSIVE_URL_AUTO_LINKS","onUpdate:modelValue":i[9]||(i[9]=c=>n.value=c),class:"form-check-input","aria-describedby":"PERMISSIVE_URL_AUTO_LINKS_HELP",type:"checkbox",value:f(u).PERMISSIVE_URL_AUTO_LINKS},null,8,Ps),[[b,n.value]]),ks,As]),o("li",Ns,[p(o("input",{id:"PERMISSIVE_WWW_AUTOLINKS","onUpdate:modelValue":i[10]||(i[10]=c=>n.value=c),class:"form-check-input","aria-describedby":"PERMISSIVE_WWW_AUTOLINKS_HELP",type:"checkbox",value:f(u).PERMISSIVE_WWW_AUTOLINKS},null,8,Hs),[[b,n.value]]),Ms,Rs]),o("li",Us,[p(o("input",{id:"STRIKETHROUGH","onUpdate:modelValue":i[11]||(i[11]=c=>n.value=c),class:"form-check-input","aria-describedby":"STRIKETHROUGH_HELP",type:"checkbox",value:f(u).STRIKETHROUGH},null,8,Cs),[[b,n.value]]),Vs,xs]),o("li",Ks,[p(o("input",{id:"TABLES","onUpdate:modelValue":i[12]||(i[12]=c=>n.value=c),class:"form-check-input","aria-describedby":"TABLES_HELP",type:"checkbox",value:f(u).TABLES},null,8,$s),[[b,n.value]]),Ds,Bs]),o("li",Ws,[p(o("input",{id:"TASK_LISTS","onUpdate:modelValue":i[13]||(i[13]=c=>n.value=c),class:"form-check-input","aria-describedby":"TASK_LISTS_HELP",type:"checkbox",value:f(u).TASK_LISTS},null,8,js),[[b,n.value]]),Fs,Xs]),o("li",zs,[p(o("input",{id:"WIKI_LINKS","onUpdate:modelValue":i[14]||(i[14]=c=>n.value=c),class:"form-check-input","aria-describedby":"WIKI_LINKS_HELP",type:"checkbox",value:f(u).WIKI_LINKS},null,8,Js),[[b,n.value]]),Gs,Qs]),o("li",qs,[p(o("input",{id:"UNDERLINE","onUpdate:modelValue":i[15]||(i[15]=c=>n.value=c),class:"form-check-input","aria-describedby":"UNDERLINE_HELP",type:"checkbox",value:f(u).UNDERLINE},null,8,Ys),[[b,n.value]]),Zs,eo])])]),o("fieldset",null,[to,o("div",so,[p(o("input",{id:"formatHtml","onUpdate:modelValue":i[16]||(i[16]=c=>a.value=c),class:"form-check-input",type:"radio",value:"html"},null,512),[[X,a.value]]),oo]),o("div",ao,[p(o("input",{id:"formatXhtml","onUpdate:modelValue":i[17]||(i[17]=c=>a.value=c),class:"form-check-input",type:"radio",value:"xhtml"},null,512),[[X,a.value]]),ro])]),o("fieldset",null,[no,o("div",lo,[p(o("input",{id:"bytes","onUpdate:modelValue":i[18]||(i[18]=c=>l.value=c),class:"form-check-input",type:"checkbox",role:"switch"},null,512),[[b,l.value]]),io]),o("div",co,[p(o("input",{id:"allowJsUri","onUpdate:modelValue":i[19]||(i[19]=c=>d.value=c),class:"form-check-input",type:"checkbox",role:"switch"},null,512),[[b,d.value]]),uo])])])])])],64))}});const fo={class:"navbar navbar-expand-md bg-dark","data-bs-theme":"dark"},po={class:"container-fluid d-flex justify-content-between"},mo=o("a",{class:"navbar-brand",href:"#"},"Vue Markdown wasm",-1),ho=o("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"navbar-toggler-icon"})],-1),vo={id:"navbarCollapse",class:"collapse navbar-collapse flex-grow-0"},bo={class:"navbar-nav"},So=o("li",{class:"nav-item"},[o("a",{class:"nav-link",href:"https://github.com/logue/vue-markdown-wasm"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16"},[o("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})])])],-1),Eo={class:"nav-item"},go={class:"bg-body-tertiary"},Oo={class:"container py-3"},Io=o("h1",null,"Vue Markdown wasm Demo",-1),yo={class:"lead"},Lo={class:"flex-glow-0 pt-4 bg-body"},wo=o("footer",{class:"footer mt-auto py-3 mb-0 bg-body-tertiary"},[o("div",{class:"container mb-0"},[P(" © 2022-2023 by "),o("a",{href:"http://logue.dev/"},"Logue"),P(" . Licensed under the "),o("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT License"),P(" . ")])],-1);var To=B({__name:"App",setup(e){return(s,t)=>(C(),D(ce,null,[o("nav",fo,[o("div",po,[mo,ho,o("div",vo,[o("ul",bo,[So,o("li",Eo,[M(Rt,{class:"nav-link",attribute:"data-bs-theme"})])])])])]),o("header",go,[o("div",Oo,[Io,o("p",yo,[P(" A rough demo of Vue Markdown wasm in action. You can switch between dark modes from the "),M(Se),P(" icon in the upper left. ")])])]),o("main",Lo,[M(_o)]),wo],64))}});Ne(To).mount("#app");

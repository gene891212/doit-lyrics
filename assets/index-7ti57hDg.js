const __vite__fileDeps=["assets/EditLyrics-CVGNbYOH.js","assets/EditLyrics-C-R1Xrpx.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var p_=Object.defineProperty;var g_=(e,t,n)=>t in e?p_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Pr=(e,t,n)=>(g_(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sh(Object(n),!0).forEach(function(r){Yt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wo(e){"@babel/helpers - typeof";return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wo(e)}function __(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v_(e,t,n){return t&&y_(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Yt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jl(e,t){return w_(e)||T_(e,t)||bd(e,t)||I_()}function ms(e){return E_(e)||b_(e)||bd(e)||A_()}function E_(e){if(Array.isArray(e))return il(e)}function w_(e){if(Array.isArray(e))return e}function b_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,l=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw l}}return r}}function bd(e,t){if(e){if(typeof e=="string")return il(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return il(e,t)}}function il(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oh=function(){},Zl={},Td={},Ad=null,Id={mark:oh,measure:oh};try{typeof window<"u"&&(Zl=window),typeof document<"u"&&(Td=document),typeof MutationObserver<"u"&&(Ad=MutationObserver),typeof performance<"u"&&(Id=performance)}catch{}var R_=Zl.navigator||{},ah=R_.userAgent,lh=ah===void 0?"":ah,$n=Zl,Ft=Td,ch=Ad,js=Id;$n.document;var vn=!!Ft.documentElement&&!!Ft.head&&typeof Ft.addEventListener=="function"&&typeof Ft.createElement=="function",Rd=~lh.indexOf("MSIE")||~lh.indexOf("Trident/"),zs,qs,Hs,Ks,Gs,mn="___FONT_AWESOME___",sl=16,Sd="fa",Pd="svg-inline--fa",hr="data-fa-i2svg",ol="data-fa-pseudo-element",S_="data-fa-pseudo-element-pending",tc="data-prefix",ec="data-icon",uh="fontawesome-i2svg",P_="async",C_=["HTML","HEAD","STYLE","SCRIPT"],Cd=function(){try{return!0}catch{return!1}}(),Mt="classic",qt="sharp",nc=[Mt,qt];function ps(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Mt]}})}var Ki=ps((zs={},Yt(zs,Mt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Yt(zs,qt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),zs)),Gi=ps((qs={},Yt(qs,Mt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Yt(qs,qt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),qs)),Wi=ps((Hs={},Yt(Hs,Mt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Yt(Hs,qt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Hs)),x_=ps((Ks={},Yt(Ks,Mt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Yt(Ks,qt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ks)),k_=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,xd="fa-layers-text",V_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,D_=ps((Gs={},Yt(Gs,Mt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Yt(Gs,qt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Gs)),kd=[1,2,3,4,5,6,7,8,9,10],O_=kd.concat([11,12,13,14,15,16,17,18,19,20]),N_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qi=new Set;Object.keys(Gi[Mt]).map(Qi.add.bind(Qi));Object.keys(Gi[qt]).map(Qi.add.bind(Qi));var M_=[].concat(nc,ms(Qi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nr.GROUP,nr.SWAP_OPACITY,nr.PRIMARY,nr.SECONDARY]).concat(kd.map(function(e){return"".concat(e,"x")})).concat(O_.map(function(e){return"w-".concat(e)})),Vi=$n.FontAwesomeConfig||{};function L_(e){var t=Ft.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function F_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ft&&typeof Ft.querySelector=="function"){var U_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];U_.forEach(function(e){var t=Jl(e,2),n=t[0],r=t[1],i=F_(L_(n));i!=null&&(Vi[r]=i)})}var Vd={styleDefault:"solid",familyDefault:"classic",cssPrefix:Sd,replacementClass:Pd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vi.familyPrefix&&(Vi.cssPrefix=Vi.familyPrefix);var zr=Z(Z({},Vd),Vi);zr.autoReplaceSvg||(zr.observeMutations=!1);var st={};Object.keys(Vd).forEach(function(e){Object.defineProperty(st,e,{enumerable:!0,set:function(n){zr[e]=n,Di.forEach(function(r){return r(st)})},get:function(){return zr[e]}})});Object.defineProperty(st,"familyPrefix",{enumerable:!0,set:function(t){zr.cssPrefix=t,Di.forEach(function(n){return n(st)})},get:function(){return zr.cssPrefix}});$n.FontAwesomeConfig=st;var Di=[];function $_(e){return Di.push(e),function(){Di.splice(Di.indexOf(e),1)}}var Rn=sl,tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function B_(e){if(!(!e||!vn)){var t=Ft.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Ft.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return Ft.head.insertBefore(t,r),e}}var j_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yi(){for(var e=12,t="";e-- >0;)t+=j_[Math.random()*62|0];return t}function ei(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rc(e){return e.classList?ei(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Dd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z_(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Dd(e[n]),'" ')},"").trim()}function jo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ic(e){return e.size!==tn.size||e.x!==tn.x||e.y!==tn.y||e.rotate!==tn.rotate||e.flipX||e.flipY}function q_(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(l)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:h}}function H_(e){var t=e.transform,n=e.width,r=n===void 0?sl:n,i=e.height,s=i===void 0?sl:i,a=e.startCentered,l=a===void 0?!1:a,c="";return l&&Rd?c+="translate(".concat(t.x/Rn-r/2,"em, ").concat(t.y/Rn-s/2,"em) "):l?c+="translate(calc(-50% + ".concat(t.x/Rn,"em), calc(-50% + ").concat(t.y/Rn,"em)) "):c+="translate(".concat(t.x/Rn,"em, ").concat(t.y/Rn,"em) "),c+="scale(".concat(t.size/Rn*(t.flipX?-1:1),", ").concat(t.size/Rn*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var K_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Od(){var e=Sd,t=Pd,n=st.cssPrefix,r=st.replacementClass,i=K_;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var hh=!1;function Da(){st.autoAddCss&&!hh&&(B_(Od()),hh=!0)}var G_={mixout:function(){return{dom:{css:Od,insertCss:Da}}},hooks:function(){return{beforeDOMElementCreation:function(){Da()},beforeI2svg:function(){Da()}}}},pn=$n||{};pn[mn]||(pn[mn]={});pn[mn].styles||(pn[mn].styles={});pn[mn].hooks||(pn[mn].hooks={});pn[mn].shims||(pn[mn].shims=[]);var je=pn[mn],Nd=[],W_=function e(){Ft.removeEventListener("DOMContentLoaded",e),bo=1,Nd.map(function(t){return t()})},bo=!1;vn&&(bo=(Ft.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ft.readyState),bo||Ft.addEventListener("DOMContentLoaded",W_));function Q_(e){vn&&(bo?setTimeout(e,0):Nd.push(e))}function gs(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Dd(e):"<".concat(t," ").concat(z_(r),">").concat(s.map(gs).join(""),"</").concat(t,">")}function fh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Oa=function(t,n,r,i){var s=Object.keys(t),a=s.length,l=n,c,h,f;for(r===void 0?(c=1,f=t[s[0]]):(c=0,f=r);c<a;c++)h=s[c],f=l(f,t[h],h,t);return f};function Y_(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function al(e){var t=Y_(e);return t.length===1?t[0].toString(16):null}function X_(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function dh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ll(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=dh(t);typeof je.hooks.addPack=="function"&&!i?je.hooks.addPack(e,dh(t)):je.styles[e]=Z(Z({},je.styles[e]||{}),s),e==="fas"&&ll("fa",t)}var Ws,Qs,Ys,Or=je.styles,J_=je.shims,Z_=(Ws={},Yt(Ws,Mt,Object.values(Wi[Mt])),Yt(Ws,qt,Object.values(Wi[qt])),Ws),sc=null,Md={},Ld={},Fd={},Ud={},$d={},ty=(Qs={},Yt(Qs,Mt,Object.keys(Ki[Mt])),Yt(Qs,qt,Object.keys(Ki[qt])),Qs);function ey(e){return~M_.indexOf(e)}function ny(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!ey(i)?i:null}var Bd=function(){var t=function(s){return Oa(Or,function(a,l,c){return a[c]=Oa(l,s,{}),a},{})};Md=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var l=s[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){i[c.toString(16)]=a})}return i}),Ld=t(function(i,s,a){if(i[a]=a,s[2]){var l=s[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){i[c]=a})}return i}),$d=t(function(i,s,a){var l=s[2];return i[a]=a,l.forEach(function(c){i[c]=a}),i});var n="far"in Or||st.autoFetchSvg,r=Oa(J_,function(i,s){var a=s[0],l=s[1],c=s[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:c}),i},{names:{},unicodes:{}});Fd=r.names,Ud=r.unicodes,sc=zo(st.styleDefault,{family:st.familyDefault})};$_(function(e){sc=zo(e.styleDefault,{family:st.familyDefault})});Bd();function oc(e,t){return(Md[e]||{})[t]}function ry(e,t){return(Ld[e]||{})[t]}function rr(e,t){return($d[e]||{})[t]}function jd(e){return Fd[e]||{prefix:null,iconName:null}}function iy(e){var t=Ud[e],n=oc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Bn(){return sc}var ac=function(){return{prefix:null,iconName:null,rest:[]}};function zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Mt:n,i=Ki[r][e],s=Gi[r][e]||Gi[r][i],a=e in je.styles?e:null;return s||a||null}var mh=(Ys={},Yt(Ys,Mt,Object.keys(Wi[Mt])),Yt(Ys,qt,Object.keys(Wi[qt])),Ys);function qo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Yt(t,Mt,"".concat(st.cssPrefix,"-").concat(Mt)),Yt(t,qt,"".concat(st.cssPrefix,"-").concat(qt)),t),a=null,l=Mt;(e.includes(s[Mt])||e.some(function(h){return mh[Mt].includes(h)}))&&(l=Mt),(e.includes(s[qt])||e.some(function(h){return mh[qt].includes(h)}))&&(l=qt);var c=e.reduce(function(h,f){var m=ny(st.cssPrefix,f);if(Or[f]?(f=Z_[l].includes(f)?x_[l][f]:f,a=f,h.prefix=f):ty[l].indexOf(f)>-1?(a=f,h.prefix=zo(f,{family:l})):m?h.iconName=m:f!==st.replacementClass&&f!==s[Mt]&&f!==s[qt]&&h.rest.push(f),!i&&h.prefix&&h.iconName){var g=a==="fa"?jd(h.iconName):{},w=rr(h.prefix,h.iconName);g.prefix&&(a=null),h.iconName=g.iconName||w||h.iconName,h.prefix=g.prefix||h.prefix,h.prefix==="far"&&!Or.far&&Or.fas&&!st.autoFetchSvg&&(h.prefix="fas")}return h},ac());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===qt&&(Or.fass||st.autoFetchSvg)&&(c.prefix="fass",c.iconName=rr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Bn()||"fas"),c}var sy=function(){function e(){__(this,e),this.definitions={}}return v_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=Z(Z({},n.definitions[l]||{}),a[l]),ll(l,a[l]);var c=Wi[Mt][l];c&&ll(c,a[l]),Bd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],l=a.prefix,c=a.iconName,h=a.icon,f=h[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[l][m]=h)}),n[l][c]=h}),n}}]),e}(),ph=[],Nr={},Lr={},oy=Object.keys(Lr);function ay(e,t){var n=t.mixoutsTo;return ph=e,Nr={},Object.keys(Lr).forEach(function(r){oy.indexOf(r)===-1&&delete Lr[r]}),ph.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),wo(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Nr[a]||(Nr[a]=[]),Nr[a].push(s[a])})}r.provides&&r.provides(Lr)}),n}function cl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Nr[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function fr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Nr[e]||[];i.forEach(function(s){s.apply(null,n)})}function gn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lr[e]?Lr[e].apply(null,t):void 0}function ul(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Bn();if(t)return t=rr(n,t)||t,fh(zd.definitions,n,t)||fh(je.styles,n,t)}var zd=new sy,ly=function(){st.autoReplaceSvg=!1,st.observeMutations=!1,fr("noAuto")},cy={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return vn?(fr("beforeI2svg",t),gn("pseudoElements2svg",t),gn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;st.autoReplaceSvg===!1&&(st.autoReplaceSvg=!0),st.observeMutations=!0,Q_(function(){hy({autoReplaceSvgRoot:n}),fr("watch",t)})}},uy={icon:function(t){if(t===null)return null;if(wo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:rr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zo(t[0]);return{prefix:r,iconName:rr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(st.cssPrefix,"-"))>-1||t.match(k_))){var i=qo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Bn(),iconName:rr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Bn();return{prefix:s,iconName:rr(s,t)||t}}}},Ve={noAuto:ly,config:st,dom:cy,parse:uy,library:zd,findIconDefinition:ul,toHtml:gs},hy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Ft:n;(Object.keys(je.styles).length>0||st.autoFetchSvg)&&vn&&st.autoReplaceSvg&&Ve.dom.i2svg({node:r})};function Ho(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return gs(r)})}}),Object.defineProperty(e,"node",{get:function(){if(vn){var r=Ft.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function fy(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(ic(a)&&n.found&&!r.found){var l=n.width,c=n.height,h={x:l/c/2,y:.5};i.style=jo(Z(Z({},s),{},{"transform-origin":"".concat(h.x+a.x/16,"em ").concat(h.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function dy(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(st.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},i),{},{id:a}),children:r}]}]}function lc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,l=e.symbol,c=e.title,h=e.maskId,f=e.titleId,m=e.extra,g=e.watchable,w=g===void 0?!1:g,C=r.found?r:n,k=C.width,O=C.height,x=i==="fak",V=[st.replacementClass,s?"".concat(st.cssPrefix,"-").concat(s):""].filter(function(v){return m.classes.indexOf(v)===-1}).filter(function(v){return v!==""||!!v}).concat(m.classes).join(" "),F={children:[],attributes:Z(Z({},m.attributes),{},{"data-prefix":i,"data-icon":s,class:V,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(O)})},z=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/O*16*.0625,"em")}:{};w&&(F.attributes[hr]=""),c&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(f||Yi())},children:[c]}),delete F.attributes.title);var tt=Z(Z({},F),{},{prefix:i,iconName:s,main:n,mask:r,maskId:h,transform:a,symbol:l,styles:Z(Z({},z),m.styles)}),G=r.found&&n.found?gn("generateAbstractMask",tt)||{children:[],attributes:{}}:gn("generateAbstractIcon",tt)||{children:[],attributes:{}},T=G.children,y=G.attributes;return tt.children=T,tt.attributes=y,l?dy(tt):fy(tt)}function gh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,l=e.watchable,c=l===void 0?!1:l,h=Z(Z(Z({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(h[hr]="");var f=Z({},a.styles);ic(i)&&(f.transform=H_({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=jo(f);m.length>0&&(h.style=m);var g=[];return g.push({tag:"span",attributes:h,children:[t]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function my(e){var t=e.content,n=e.title,r=e.extra,i=Z(Z(Z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=jo(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Na=je.styles;function hl(e){var t=e[0],n=e[1],r=e.slice(4),i=Jl(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(st.cssPrefix,"-").concat(nr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(nr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(nr.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var py={found:!1,width:512,height:512};function gy(e,t){!Cd&&!st.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function fl(e,t){var n=t;return t==="fa"&&st.styleDefault!==null&&(t=Bn()),new Promise(function(r,i){if(gn("missingIconAbstract"),n==="fa"){var s=jd(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Na[t]&&Na[t][e]){var a=Na[t][e];return r(hl(a))}gy(e,t),r(Z(Z({},py),{},{icon:st.showMissingIcons&&e?gn("missingIconAbstract")||{}:{}}))})}var _h=function(){},dl=st.measurePerformance&&js&&js.mark&&js.measure?js:{mark:_h,measure:_h},Si='FA "6.5.2"',_y=function(t){return dl.mark("".concat(Si," ").concat(t," begins")),function(){return qd(t)}},qd=function(t){dl.mark("".concat(Si," ").concat(t," ends")),dl.measure("".concat(Si," ").concat(t),"".concat(Si," ").concat(t," begins"),"".concat(Si," ").concat(t," ends"))},cc={begin:_y,end:qd},lo=function(){};function yh(e){var t=e.getAttribute?e.getAttribute(hr):null;return typeof t=="string"}function yy(e){var t=e.getAttribute?e.getAttribute(tc):null,n=e.getAttribute?e.getAttribute(ec):null;return t&&n}function vy(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(st.replacementClass)}function Ey(){if(st.autoReplaceSvg===!0)return co.replace;var e=co[st.autoReplaceSvg];return e||co.replace}function wy(e){return Ft.createElementNS("http://www.w3.org/2000/svg",e)}function by(e){return Ft.createElement(e)}function Hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wy:by:n;if(typeof e=="string")return Ft.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(Hd(a,{ceFn:r}))}),i}function Ty(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var co={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Hd(i),n)}),n.getAttribute(hr)===null&&st.keepOriginalSource){var r=Ft.createComment(Ty(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~rc(n).indexOf(st.replacementClass))return co.replace(t);var i=new RegExp("".concat(st.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,c){return c===st.replacementClass||c.match(i)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(l){return gs(l)}).join(`
`);n.setAttribute(hr,""),n.innerHTML=a}};function vh(e){e()}function Kd(e,t){var n=typeof t=="function"?t:lo;if(e.length===0)n();else{var r=vh;st.mutateApproach===P_&&(r=$n.requestAnimationFrame||vh),r(function(){var i=Ey(),s=cc.begin("mutate");e.map(i),s(),n()})}}var uc=!1;function Gd(){uc=!0}function ml(){uc=!1}var To=null;function Eh(e){if(ch&&st.observeMutations){var t=e.treeCallback,n=t===void 0?lo:t,r=e.nodeCallback,i=r===void 0?lo:r,s=e.pseudoElementsCallback,a=s===void 0?lo:s,l=e.observeMutationsRoot,c=l===void 0?Ft:l;To=new ch(function(h){if(!uc){var f=Bn();ei(h).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yh(m.addedNodes[0])&&(st.searchPseudoElements&&a(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&st.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&yh(m.target)&&~N_.indexOf(m.attributeName))if(m.attributeName==="class"&&yy(m.target)){var g=qo(rc(m.target)),w=g.prefix,C=g.iconName;m.target.setAttribute(tc,w||f),C&&m.target.setAttribute(ec,C)}else vy(m.target)&&i(m.target)})}}),vn&&To.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ay(){To&&To.disconnect()}function Iy(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],l=s.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function Ry(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=qo(rc(e));return i.prefix||(i.prefix=Bn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ry(i.prefix,e.innerText)||oc(i.prefix,al(e.innerText))),!i.iconName&&st.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Sy(e){var t=ei(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return st.autoA11y&&(n?t["aria-labelledby"]="".concat(st.replacementClass,"-title-").concat(r||Yi()):(t["aria-hidden"]="true",t.focusable="false")),t}function Py(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ry(e),r=n.iconName,i=n.prefix,s=n.rest,a=Sy(e),l=cl("parseNodeAttributes",{},e),c=t.styleParser?Iy(e):[];return Z({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},l)}var Cy=je.styles;function Wd(e){var t=st.autoReplaceSvg==="nest"?wh(e,{styleParser:!1}):wh(e);return~t.extra.classes.indexOf(xd)?gn("generateLayersText",e,t):gn("generateSvgReplacementMutation",e,t)}var jn=new Set;nc.map(function(e){jn.add("fa-".concat(e))});Object.keys(Ki[Mt]).map(jn.add.bind(jn));Object.keys(Ki[qt]).map(jn.add.bind(jn));jn=ms(jn);function bh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!vn)return Promise.resolve();var n=Ft.documentElement.classList,r=function(m){return n.add("".concat(uh,"-").concat(m))},i=function(m){return n.remove("".concat(uh,"-").concat(m))},s=st.autoFetchSvg?jn:nc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Cy));s.includes("fa")||s.push("fa");var a=[".".concat(xd,":not([").concat(hr,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(hr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=ei(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var c=cc.begin("onTree"),h=l.reduce(function(f,m){try{var g=Wd(m);g&&f.push(g)}catch(w){Cd||w.name==="MissingIcon"&&console.error(w)}return f},[]);return new Promise(function(f,m){Promise.all(h).then(function(g){Kd(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(g){c(),m(g)})})}function xy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wd(e).then(function(n){n&&Kd([n],t)})}function ky(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ul(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ul(i||{})),e(r,Z(Z({},n),{},{mask:i}))}}var Vy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?tn:r,s=n.symbol,a=s===void 0?!1:s,l=n.mask,c=l===void 0?null:l,h=n.maskId,f=h===void 0?null:h,m=n.title,g=m===void 0?null:m,w=n.titleId,C=w===void 0?null:w,k=n.classes,O=k===void 0?[]:k,x=n.attributes,V=x===void 0?{}:x,F=n.styles,z=F===void 0?{}:F;if(t){var tt=t.prefix,G=t.iconName,T=t.icon;return Ho(Z({type:"icon"},t),function(){return fr("beforeDOMElementCreation",{iconDefinition:t,params:n}),st.autoA11y&&(g?V["aria-labelledby"]="".concat(st.replacementClass,"-title-").concat(C||Yi()):(V["aria-hidden"]="true",V.focusable="false")),lc({icons:{main:hl(T),mask:c?hl(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:tt,iconName:G,transform:Z(Z({},tn),i),symbol:a,title:g,maskId:f,titleId:C,extra:{attributes:V,styles:z,classes:O}})})}},Dy={mixout:function(){return{icon:ky(Vy)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bh,n.nodeCallback=xy,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Ft:r,s=n.callback,a=s===void 0?function(){}:s;return bh(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,l=r.prefix,c=r.transform,h=r.symbol,f=r.mask,m=r.maskId,g=r.extra;return new Promise(function(w,C){Promise.all([fl(i,l),f.iconName?fl(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var O=Jl(k,2),x=O[0],V=O[1];w([n,lc({icons:{main:x,mask:V},prefix:l,iconName:i,transform:c,symbol:h,maskId:m,title:s,titleId:a,extra:g,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,l=n.styles,c=jo(l);c.length>0&&(i.style=c);var h;return ic(a)&&(h=gn("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(h||s.icon),{children:r,attributes:i}}}},Oy={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ho({type:"layer"},function(){fr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(c){a=a.concat(c.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(st.cssPrefix,"-layers")].concat(ms(s)).join(" ")},children:a}]})}}}},Ny={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,c=r.attributes,h=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return Ho({type:"counter",content:n},function(){return fr("beforeDOMElementCreation",{content:n,params:r}),my({content:n.toString(),title:s,extra:{attributes:h,styles:m,classes:["".concat(st.cssPrefix,"-layers-counter")].concat(ms(l))}})})}}}},My={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?tn:i,a=r.title,l=a===void 0?null:a,c=r.classes,h=c===void 0?[]:c,f=r.attributes,m=f===void 0?{}:f,g=r.styles,w=g===void 0?{}:g;return Ho({type:"text",content:n},function(){return fr("beforeDOMElementCreation",{content:n,params:r}),gh({content:n,transform:Z(Z({},tn),s),title:l,extra:{attributes:m,styles:w,classes:["".concat(st.cssPrefix,"-layers-text")].concat(ms(h))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,l=null,c=null;if(Rd){var h=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/h,c=f.height/h}return st.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,gh({content:n.innerHTML,width:l,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},Ly=new RegExp('"',"ug"),Th=[1105920,1112319];function Fy(e){var t=e.replace(Ly,""),n=X_(t,0),r=n>=Th[0]&&n<=Th[1],i=t.length===2?t[0]===t[1]:!1;return{value:al(i?t[0]:t),isSecondary:r||i}}function Ah(e,t){var n="".concat(S_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=ei(e.children),a=s.filter(function(T){return T.getAttribute(ol)===t})[0],l=$n.getComputedStyle(e,t),c=l.getPropertyValue("font-family").match(V_),h=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&f!=="none"&&f!==""){var m=l.getPropertyValue("content"),g=~["Sharp"].indexOf(c[2])?qt:Mt,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Gi[g][c[2].toLowerCase()]:D_[g][h],C=Fy(m),k=C.value,O=C.isSecondary,x=c[0].startsWith("FontAwesome"),V=oc(w,k),F=V;if(x){var z=iy(k);z.iconName&&z.prefix&&(V=z.iconName,w=z.prefix)}if(V&&!O&&(!a||a.getAttribute(tc)!==w||a.getAttribute(ec)!==F)){e.setAttribute(n,F),a&&e.removeChild(a);var tt=Py(),G=tt.extra;G.attributes[ol]=t,fl(V,w).then(function(T){var y=lc(Z(Z({},tt),{},{icons:{main:T,mask:ac()},prefix:w,iconName:F,extra:G,watchable:!0})),v=Ft.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(v,e.firstChild):e.appendChild(v),v.outerHTML=y.map(function(A){return gs(A)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Uy(e){return Promise.all([Ah(e,"::before"),Ah(e,"::after")])}function $y(e){return e.parentNode!==document.head&&!~C_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ol)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ih(e){if(vn)return new Promise(function(t,n){var r=ei(e.querySelectorAll("*")).filter($y).map(Uy),i=cc.begin("searchPseudoElements");Gd(),Promise.all(r).then(function(){i(),ml(),t()}).catch(function(){i(),ml(),n()})})}var By={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ih,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ft:r;st.searchPseudoElements&&Ih(i)}}},Rh=!1,jy={mixout:function(){return{dom:{unwatch:function(){Gd(),Rh=!0}}}},hooks:function(){return{bootstrap:function(){Eh(cl("mutationObserverCallbacks",{}))},noAuto:function(){Ay()},watch:function(n){var r=n.observeMutationsRoot;Rh?ml():Eh(cl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Sh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],l=s.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},zy={mixout:function(){return{parse:{transform:function(n){return Sh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Sh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),h="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(c," ").concat(h," ").concat(f)},g={transform:"translate(".concat(a/2*-1," -256)")},w={outer:l,inner:m,path:g};return{tag:"g",attributes:Z({},w.outer),children:[{tag:"g",attributes:Z({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Z(Z({},r.icon.attributes),w.path)}]}]}}}},Ma={x:0,y:0,width:"100%",height:"100%"};function Ph(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qy(e){return e.tag==="g"?e.children:[e]}var Hy={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?qo(i.split(" ").map(function(a){return a.trim()})):ac();return s.prefix||(s.prefix=Bn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,l=n.maskId,c=n.transform,h=s.width,f=s.icon,m=a.width,g=a.icon,w=q_({transform:c,containerWidth:m,iconWidth:h}),C={tag:"rect",attributes:Z(Z({},Ma),{},{fill:"white"})},k=f.children?{children:f.children.map(Ph)}:{},O={tag:"g",attributes:Z({},w.inner),children:[Ph(Z({tag:f.tag,attributes:Z(Z({},f.attributes),w.path)},k))]},x={tag:"g",attributes:Z({},w.outer),children:[O]},V="mask-".concat(l||Yi()),F="clip-".concat(l||Yi()),z={tag:"mask",attributes:Z(Z({},Ma),{},{id:V,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,x]},tt={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:qy(g)},z]};return r.push(tt,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(V,")")},Ma)}),{children:r,attributes:i}}}},Ky={provides:function(t){var n=!1;$n.matchMedia&&(n=$n.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Z(Z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Z(Z({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:Z(Z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:Z(Z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:Z(Z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Z(Z({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Z(Z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gy={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Wy=[G_,Dy,Oy,Ny,My,By,jy,zy,Hy,Ky,Gy];ay(Wy,{mixoutsTo:Ve});Ve.noAuto;Ve.config;var Qy=Ve.library;Ve.dom;var pl=Ve.parse;Ve.findIconDefinition;Ve.toHtml;var Yy=Ve.icon;Ve.layer;Ve.text;Ve.counter;var Xy={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},Jy={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Zy={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"]},tv=Zy,ev={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},nv={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},rv={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},iv=rv,sv={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},ov={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},av={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},lv={prefix:"fas",iconName:"circle-half-stroke",icon:[512,512,[9680,"adjust"],"f042","M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},cv=lv,uv={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]};/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hc(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const Dt={},Fr=[],Le=()=>{},hv=()=>!1,Ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fc=e=>e.startsWith("onUpdate:"),re=Object.assign,dc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fv=Object.prototype.hasOwnProperty,Tt=(e,t)=>fv.call(e,t),dt=Array.isArray,Ur=e=>Go(e)==="[object Map]",Qd=e=>Go(e)==="[object Set]",_t=e=>typeof e=="function",Xt=e=>typeof e=="string",yr=e=>typeof e=="symbol",Ut=e=>e!==null&&typeof e=="object",Yd=e=>(Ut(e)||_t(e))&&_t(e.then)&&_t(e.catch),Xd=Object.prototype.toString,Go=e=>Xd.call(e),dv=e=>Go(e).slice(8,-1),Jd=e=>Go(e)==="[object Object]",mc=e=>Xt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Oi=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},mv=/-(\w)/g,Ge=Wo(e=>e.replace(mv,(t,n)=>n?n.toUpperCase():"")),pv=/\B([A-Z])/g,vr=Wo(e=>e.replace(pv,"-$1").toLowerCase()),Qo=Wo(e=>e.charAt(0).toUpperCase()+e.slice(1)),La=Wo(e=>e?`on${Qo(e)}`:""),sn=(e,t)=>!Object.is(e,t),uo=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Zd=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},gl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ch;const tm=()=>Ch||(Ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pc(e){if(dt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Xt(r)?vv(r):pc(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Xt(e)||Ut(e))return e}const gv=/;(?![^(]*\))/g,_v=/:([^]+)/,yv=/\/\*[^]*?\*\//g;function vv(e){const t={};return e.replace(yv,"").split(gv).forEach(n=>{if(n){const r=n.split(_v);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function en(e){let t="";if(Xt(e))t=e;else if(dt(e))for(let n=0;n<e.length;n++){const r=en(e[n]);r&&(t+=r+" ")}else if(Ut(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wv=hc(Ev);function em(e){return!!e||e===""}const hn=e=>Xt(e)?e:e==null?"":dt(e)||Ut(e)&&(e.toString===Xd||!_t(e.toString))?JSON.stringify(e,nm,2):String(e),nm=(e,t)=>t&&t.__v_isRef?nm(e,t.value):Ur(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Fa(r,s)+" =>"]=i,n),{})}:Qd(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Fa(n))}:yr(t)?Fa(t):Ut(t)&&!dt(t)&&!Jd(t)?String(t):t,Fa=(e,t="")=>{var n;return yr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class bv{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Tv(e,t=Be){t&&t.active&&t.effects.push(e)}function Av(){return Be}let ar;class gc{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Tv(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Kn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Iv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Gn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=On,n=ar;try{return On=!0,ar=this,this._runnings++,xh(this),this.fn()}finally{kh(this),this._runnings--,ar=n,On=t}}stop(){this.active&&(xh(this),kh(this),this.onStop&&this.onStop(),this.active=!1)}}function Iv(e){return e.value}function xh(e){e._trackId++,e._depsLength=0}function kh(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)rm(e.deps[t],e);e.deps.length=e._depsLength}}function rm(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let On=!0,_l=0;const im=[];function Kn(){im.push(On),On=!1}function Gn(){const e=im.pop();On=e===void 0?!0:e}function _c(){_l++}function yc(){for(_l--;!_l&&yl.length;)yl.shift()()}function sm(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&rm(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const yl=[];function om(e,t,n){_c();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&yl.push(r.scheduler)))}yc()}const am=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},vl=new WeakMap,lr=Symbol(""),El=Symbol("");function Se(e,t,n){if(On&&ar){let r=vl.get(e);r||vl.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=am(()=>r.delete(n))),sm(ar,i)}}function fn(e,t,n,r,i,s){const a=vl.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&dt(e)){const c=Number(r);a.forEach((h,f)=>{(f==="length"||!yr(f)&&f>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(a.get(n)),t){case"add":dt(e)?mc(n)&&l.push(a.get("length")):(l.push(a.get(lr)),Ur(e)&&l.push(a.get(El)));break;case"delete":dt(e)||(l.push(a.get(lr)),Ur(e)&&l.push(a.get(El)));break;case"set":Ur(e)&&l.push(a.get(lr));break}_c();for(const c of l)c&&om(c,4);yc()}const Rv=hc("__proto__,__v_isRef,__isVue"),lm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yr)),Vh=Sv();function Sv(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Pt(this);for(let s=0,a=this.length;s<a;s++)Se(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Pt)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kn(),_c();const r=Pt(this)[t].apply(this,n);return yc(),Gn(),r}}),e}function Pv(e){yr(e)||(e=String(e));const t=Pt(this);return Se(t,"has",e),t.hasOwnProperty(e)}class cm{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Bv:dm:s?fm:hm).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=dt(t);if(!i){if(a&&Tt(Vh,n))return Reflect.get(Vh,n,r);if(n==="hasOwnProperty")return Pv}const l=Reflect.get(t,n,r);return(yr(n)?lm.has(n):Rv(n))||(i||Se(t,"get",n),s)?l:Pe(l)?a&&mc(n)?l:l.value:Ut(l)?i?pm(l):ni(l):l}}class um extends cm{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const c=Xi(s);if(!Ao(r)&&!Xi(r)&&(s=Pt(s),r=Pt(r)),!dt(t)&&Pe(s)&&!Pe(r))return c?!1:(s.value=r,!0)}const a=dt(t)&&mc(n)?Number(n)<t.length:Tt(t,n),l=Reflect.set(t,n,r,i);return t===Pt(i)&&(a?sn(r,s)&&fn(t,"set",n,r):fn(t,"add",n,r)),l}deleteProperty(t,n){const r=Tt(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&fn(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!yr(n)||!lm.has(n))&&Se(t,"has",n),r}ownKeys(t){return Se(t,"iterate",dt(t)?"length":lr),Reflect.ownKeys(t)}}class Cv extends cm{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const xv=new um,kv=new Cv,Vv=new um(!0);const vc=e=>e,Yo=e=>Reflect.getPrototypeOf(e);function Xs(e,t,n=!1,r=!1){e=e.__v_raw;const i=Pt(e),s=Pt(t);n||(sn(t,s)&&Se(i,"get",t),Se(i,"get",s));const{has:a}=Yo(i),l=r?vc:n?bc:Ji;if(a.call(i,t))return l(e.get(t));if(a.call(i,s))return l(e.get(s));e!==i&&e.get(t)}function Js(e,t=!1){const n=this.__v_raw,r=Pt(n),i=Pt(e);return t||(sn(e,i)&&Se(r,"has",e),Se(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Zs(e,t=!1){return e=e.__v_raw,!t&&Se(Pt(e),"iterate",lr),Reflect.get(e,"size",e)}function Dh(e){e=Pt(e);const t=Pt(this);return Yo(t).has.call(t,e)||(t.add(e),fn(t,"add",e,e)),this}function Oh(e,t){t=Pt(t);const n=Pt(this),{has:r,get:i}=Yo(n);let s=r.call(n,e);s||(e=Pt(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?sn(t,a)&&fn(n,"set",e,t):fn(n,"add",e,t),this}function Nh(e){const t=Pt(this),{has:n,get:r}=Yo(t);let i=n.call(t,e);i||(e=Pt(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&fn(t,"delete",e,void 0),s}function Mh(){const e=Pt(this),t=e.size!==0,n=e.clear();return t&&fn(e,"clear",void 0,void 0),n}function to(e,t){return function(r,i){const s=this,a=s.__v_raw,l=Pt(a),c=t?vc:e?bc:Ji;return!e&&Se(l,"iterate",lr),a.forEach((h,f)=>r.call(i,c(h),c(f),s))}}function eo(e,t,n){return function(...r){const i=this.__v_raw,s=Pt(i),a=Ur(s),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=i[e](...r),f=n?vc:t?bc:Ji;return!t&&Se(s,"iterate",c?El:lr),{next(){const{value:m,done:g}=h.next();return g?{value:m,done:g}:{value:l?[f(m[0]),f(m[1])]:f(m),done:g}},[Symbol.iterator](){return this}}}}function Sn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Dv(){const e={get(s){return Xs(this,s)},get size(){return Zs(this)},has:Js,add:Dh,set:Oh,delete:Nh,clear:Mh,forEach:to(!1,!1)},t={get(s){return Xs(this,s,!1,!0)},get size(){return Zs(this)},has:Js,add:Dh,set:Oh,delete:Nh,clear:Mh,forEach:to(!1,!0)},n={get(s){return Xs(this,s,!0)},get size(){return Zs(this,!0)},has(s){return Js.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:to(!0,!1)},r={get(s){return Xs(this,s,!0,!0)},get size(){return Zs(this,!0)},has(s){return Js.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=eo(s,!1,!1),n[s]=eo(s,!0,!1),t[s]=eo(s,!1,!0),r[s]=eo(s,!0,!0)}),[e,n,t,r]}const[Ov,Nv,Mv,Lv]=Dv();function Ec(e,t){const n=t?e?Lv:Mv:e?Nv:Ov;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Tt(n,i)&&i in r?n:r,i,s)}const Fv={get:Ec(!1,!1)},Uv={get:Ec(!1,!0)},$v={get:Ec(!0,!1)};const hm=new WeakMap,fm=new WeakMap,dm=new WeakMap,Bv=new WeakMap;function jv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zv(e){return e.__v_skip||!Object.isExtensible(e)?0:jv(dv(e))}function ni(e){return Xi(e)?e:wc(e,!1,xv,Fv,hm)}function mm(e){return wc(e,!1,Vv,Uv,fm)}function pm(e){return wc(e,!0,kv,$v,dm)}function wc(e,t,n,r,i){if(!Ut(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=zv(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return i.set(e,l),l}function Ni(e){return Xi(e)?Ni(e.__v_raw):!!(e&&e.__v_isReactive)}function Xi(e){return!!(e&&e.__v_isReadonly)}function Ao(e){return!!(e&&e.__v_isShallow)}function gm(e){return e?!!e.__v_raw:!1}function Pt(e){const t=e&&e.__v_raw;return t?Pt(t):e}function qv(e){return Object.isExtensible(e)&&Zd(e,"__v_skip",!0),e}const Ji=e=>Ut(e)?ni(e):e,bc=e=>Ut(e)?pm(e):e;class _m{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new gc(()=>t(this._value),()=>Mi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Pt(this);return(!t._cacheable||t.effect.dirty)&&sn(t._value,t._value=t.effect.run())&&Mi(t,4),Tc(t),t.effect._dirtyLevel>=2&&Mi(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Hv(e,t,n=!1){let r,i;const s=_t(e);return s?(r=e,i=Le):(r=e.get,i=e.set),new _m(r,i,s||!i,n)}function Tc(e){var t;On&&ar&&(e=Pt(e),sm(ar,(t=e.dep)!=null?t:e.dep=am(()=>e.dep=void 0,e instanceof _m?e:void 0)))}function Mi(e,t=4,n){e=Pt(e);const r=e.dep;r&&om(r,t)}function Pe(e){return!!(e&&e.__v_isRef===!0)}function oe(e){return vm(e,!1)}function ym(e){return vm(e,!0)}function vm(e,t){return Pe(e)?e:new Kv(e,t)}class Kv{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Pt(t),this._value=n?t:Ji(t)}get value(){return Tc(this),this._value}set value(t){const n=this.__v_isShallow||Ao(t)||Xi(t);t=n?t:Pt(t),sn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ji(t),Mi(this,4))}}function be(e){return Pe(e)?e.value:e}const Gv={get:(e,t,n)=>be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Em(e){return Ni(e)?e:new Proxy(e,Gv)}class Wv{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Tc(this),()=>Mi(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Qv(e){return new Wv(e)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nn(e,t,n,r){try{return r?e(...r):e()}catch(i){Xo(i,t,n)}}function He(e,t,n,r){if(_t(e)){const i=Nn(e,t,n,r);return i&&Yd(i)&&i.catch(s=>{Xo(s,t,n)}),i}if(dt(e)){const i=[];for(let s=0;s<e.length;s++)i.push(He(e[s],t,n,r));return i}}function Xo(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const h=s.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](e,a,l)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Kn(),Nn(c,null,10,[e,a,l]),Gn();return}}Yv(e,n,i,r)}function Yv(e,t,n,r=!0){console.error(e)}let Zi=!1,wl=!1;const _e=[];let Ze=0;const $r=[];let Cn=null,er=0;const wm=Promise.resolve();let Ac=null;function bm(e){const t=Ac||wm;return e?t.then(this?e.bind(this):e):t}function Xv(e){let t=Ze+1,n=_e.length;for(;t<n;){const r=t+n>>>1,i=_e[r],s=ts(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function Ic(e){(!_e.length||!_e.includes(e,Zi&&e.allowRecurse?Ze+1:Ze))&&(e.id==null?_e.push(e):_e.splice(Xv(e.id),0,e),Tm())}function Tm(){!Zi&&!wl&&(wl=!0,Ac=wm.then(Im))}function Jv(e){const t=_e.indexOf(e);t>Ze&&_e.splice(t,1)}function Zv(e){dt(e)?$r.push(...e):(!Cn||!Cn.includes(e,e.allowRecurse?er+1:er))&&$r.push(e),Tm()}function Lh(e,t,n=Zi?Ze+1:0){for(;n<_e.length;n++){const r=_e[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;_e.splice(n,1),n--,r()}}}function Am(e){if($r.length){const t=[...new Set($r)].sort((n,r)=>ts(n)-ts(r));if($r.length=0,Cn){Cn.push(...t);return}for(Cn=t,er=0;er<Cn.length;er++)Cn[er]();Cn=null,er=0}}const ts=e=>e.id==null?1/0:e.id,t0=(e,t)=>{const n=ts(e)-ts(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Im(e){wl=!1,Zi=!0,_e.sort(t0);try{for(Ze=0;Ze<_e.length;Ze++){const t=_e[Ze];t&&t.active!==!1&&Nn(t,null,14)}}finally{Ze=0,_e.length=0,Am(),Zi=!1,Ac=null,(_e.length||$r.length)&&Im()}}function e0(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Dt;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:g}=r[f]||Dt;g&&(i=n.map(w=>Xt(w)?w.trim():w)),m&&(i=n.map(gl))}let l,c=r[l=La(t)]||r[l=La(Ge(t))];!c&&s&&(c=r[l=La(vr(t))]),c&&He(c,e,6,i);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,He(h,e,6,i)}}function Rm(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},l=!1;if(!_t(e)){const c=h=>{const f=Rm(h,t,!0);f&&(l=!0,re(a,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!l?(Ut(e)&&r.set(e,null),null):(dt(s)?s.forEach(c=>a[c]=null):re(a,s),Ut(e)&&r.set(e,a),a)}function Jo(e,t){return!e||!Ko(t)?!1:(t=t.slice(2).replace(/Once$/,""),Tt(e,t[0].toLowerCase()+t.slice(1))||Tt(e,vr(t))||Tt(e,t))}let Te=null,Zo=null;function Io(e){const t=Te;return Te=e,Zo=e&&e.type.__scopeId||null,t}function dR(e){Zo=e}function mR(){Zo=null}function ir(e,t=Te,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Wh(-1);const s=Io(t);let a;try{a=e(...i)}finally{Io(s),r._d&&Wh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ua(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:m,data:g,setupState:w,ctx:C,inheritAttrs:k}=e,O=Io(e);let x,V;try{if(n.shapeFlag&4){const z=i||r,tt=z;x=Je(h.call(tt,z,f,m,w,g,C)),V=l}else{const z=t;x=Je(z.length>1?z(m,{attrs:l,slots:a,emit:c}):z(m,null)),V=t.props?l:n0(l)}}catch(z){Ui.length=0,Xo(z,e,1),x=St(ns)}let F=x;if(V&&k!==!1){const z=Object.keys(V),{shapeFlag:tt}=F;z.length&&tt&7&&(s&&z.some(fc)&&(V=r0(V,s)),F=qr(F,V,!1,!0))}return n.dirs&&(F=qr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),x=F,Io(O),x}const n0=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ko(n))&&((t||(t={}))[n]=e[n]);return t},r0=(e,t)=>{const n={};for(const r in e)(!fc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function i0(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:l,patchFlag:c}=t,h=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Fh(r,a,h):!!a;if(c&8){const f=t.dynamicProps;for(let m=0;m<f.length;m++){const g=f[m];if(a[g]!==r[g]&&!Jo(h,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Fh(r,a,h):!0:!!a;return!1}function Fh(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Jo(n,s))return!0}return!1}function s0({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const o0="components";function dr(e,t){return l0(o0,e,!0,t)||e}const a0=Symbol.for("v-ndc");function l0(e,t,n=!0,r=!1){const i=Te||ce;if(i){const s=i.type;{const l=nE(s,!1);if(l&&(l===t||l===Ge(t)||l===Qo(Ge(t))))return s}const a=Uh(i[e]||s[e],t)||Uh(i.appContext[e],t);return!a&&r?s:a}}function Uh(e,t){return e&&(e[t]||e[Ge(t)]||e[Qo(Ge(t))])}const c0=e=>e.__isSuspense;function u0(e,t){t&&t.pendingBranch?dt(e)?t.effects.push(...e):t.effects.push(e):Zv(e)}const h0=Symbol.for("v-scx"),f0=()=>Ke(h0);function d0(e,t){return Rc(e,null,{flush:"sync"})}const no={};function cr(e,t,n){return Rc(e,t,n)}function Rc(e,t,{immediate:n,deep:r,flush:i,once:s,onTrack:a,onTrigger:l}=Dt){if(t&&s){const G=t;t=(...T)=>{G(...T),tt()}}const c=ce,h=G=>r===!0?G:sr(G,r===!1?1:void 0);let f,m=!1,g=!1;if(Pe(e)?(f=()=>e.value,m=Ao(e)):Ni(e)?(f=()=>h(e),m=!0):dt(e)?(g=!0,m=e.some(G=>Ni(G)||Ao(G)),f=()=>e.map(G=>{if(Pe(G))return G.value;if(Ni(G))return h(G);if(_t(G))return Nn(G,c,2)})):_t(e)?t?f=()=>Nn(e,c,2):f=()=>(w&&w(),He(e,c,3,[C])):f=Le,t&&r){const G=f;f=()=>sr(G())}let w,C=G=>{w=F.onStop=()=>{Nn(G,c,4),w=F.onStop=void 0}},k;if(ra)if(C=Le,t?n&&He(t,c,3,[f(),g?[]:void 0,C]):f(),i==="sync"){const G=f0();k=G.__watcherHandles||(G.__watcherHandles=[])}else return Le;let O=g?new Array(e.length).fill(no):no;const x=()=>{if(!(!F.active||!F.dirty))if(t){const G=F.run();(r||m||(g?G.some((T,y)=>sn(T,O[y])):sn(G,O)))&&(w&&w(),He(t,c,3,[G,O===no?void 0:g&&O[0]===no?[]:O,C]),O=G)}else F.run()};x.allowRecurse=!!t;let V;i==="sync"?V=x:i==="post"?V=()=>Ie(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),V=()=>Ic(x));const F=new gc(f,Le,V),z=Av(),tt=()=>{F.stop(),z&&dc(z.effects,F)};return t?n?x():O=F.run():i==="post"?Ie(F.run.bind(F),c&&c.suspense):F.run(),k&&k.push(tt),tt}function m0(e,t,n){const r=this.proxy,i=Xt(e)?e.includes(".")?Sm(r,e):()=>r[e]:e.bind(r,r);let s;_t(t)?s=t:(s=t.handler,n=t);const a=ys(this),l=Rc(i,s.bind(r),n);return a(),l}function Sm(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function sr(e,t=1/0,n){if(t<=0||!Ut(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Pe(e))sr(e.value,t,n);else if(dt(e))for(let r=0;r<e.length;r++)sr(e[r],t,n);else if(Qd(e)||Ur(e))e.forEach(r=>{sr(r,t,n)});else if(Jd(e))for(const r in e)sr(e[r],t,n);return e}function Pm(e,t){if(Te===null)return e;const n=ia(Te)||Te.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,l,c=Dt]=t[i];s&&(_t(s)&&(s={mounted:s,updated:s}),s.deep&&sr(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Jn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const l=i[a];s&&(l.oldValue=s[a].value);let c=l.dir[r];c&&(Kn(),He(c,n,8,[e.el,l,e,t]),Gn())}}/*! #__NO_SIDE_EFFECTS__ */function Sc(e,t){return _t(e)?re({name:e.name},t,{setup:e}):e}const ho=e=>!!e.type.__asyncLoader,Cm=e=>e.type.__isKeepAlive;function p0(e,t){xm(e,"a",t)}function g0(e,t){xm(e,"da",t)}function xm(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ta(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Cm(i.parent.vnode)&&_0(r,t,n,i),i=i.parent}}function _0(e,t,n,r){const i=ta(t,e,r,!0);ea(()=>{dc(r[t],i)},n)}function ta(e,t,n=ce,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Kn();const l=ys(n),c=He(t,n,e,a);return l(),Gn(),c});return r?i.unshift(s):i.push(s),s}}const En=e=>(t,n=ce)=>(!ra||e==="sp")&&ta(e,(...r)=>t(...r),n),y0=En("bm"),_s=En("m"),v0=En("bu"),E0=En("u"),km=En("bum"),ea=En("um"),w0=En("sp"),b0=En("rtg"),T0=En("rtc");function A0(e,t=ce){ta("ec",e,t)}function es(e,t,n,r){let i;const s=n;if(dt(e)||Xt(e)){i=new Array(e.length);for(let a=0,l=e.length;a<l;a++)i[a]=t(e[a],a,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s)}else if(Ut(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];i[l]=t(e[h],h,l,s)}}else i=[];return i}const bl=e=>e?Hm(e)?ia(e)||e.proxy:bl(e.parent):null,Li=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>bl(e.parent),$root:e=>bl(e.root),$emit:e=>e.emit,$options:e=>Pc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ic(e.update)}),$nextTick:e=>e.n||(e.n=bm.bind(e.proxy)),$watch:e=>m0.bind(e)}),$a=(e,t)=>e!==Dt&&!e.__isScriptSetup&&Tt(e,t),I0={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const w=a[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if($a(r,t))return a[t]=1,r[t];if(i!==Dt&&Tt(i,t))return a[t]=2,i[t];if((h=e.propsOptions[0])&&Tt(h,t))return a[t]=3,s[t];if(n!==Dt&&Tt(n,t))return a[t]=4,n[t];Tl&&(a[t]=0)}}const f=Li[t];let m,g;if(f)return t==="$attrs"&&Se(e.attrs,"get",""),f(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==Dt&&Tt(n,t))return a[t]=4,n[t];if(g=c.config.globalProperties,Tt(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return $a(i,t)?(i[t]=n,!0):r!==Dt&&Tt(r,t)?(r[t]=n,!0):Tt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let l;return!!n[a]||e!==Dt&&Tt(e,a)||$a(t,a)||(l=s[0])&&Tt(l,a)||Tt(r,a)||Tt(Li,a)||Tt(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Tt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $h(e){return dt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Tl=!0;function R0(e){const t=Pc(e),n=e.proxy,r=e.ctx;Tl=!1,t.beforeCreate&&Bh(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:m,mounted:g,beforeUpdate:w,updated:C,activated:k,deactivated:O,beforeDestroy:x,beforeUnmount:V,destroyed:F,unmounted:z,render:tt,renderTracked:G,renderTriggered:T,errorCaptured:y,serverPrefetch:v,expose:A,inheritAttrs:I,components:R,directives:E,filters:ie}=t;if(h&&S0(h,r,null),a)for(const gt in a){const ut=a[gt];_t(ut)&&(r[gt]=ut.bind(n))}if(i){const gt=i.call(n,n);Ut(gt)&&(e.data=ni(gt))}if(Tl=!0,s)for(const gt in s){const ut=s[gt],Ce=_t(ut)?ut.bind(n,n):_t(ut.get)?ut.get.bind(n,n):Le,Ue=!_t(ut)&&_t(ut.set)?ut.set.bind(n):Le,De=le({get:Ce,set:Ue});Object.defineProperty(r,gt,{enumerable:!0,configurable:!0,get:()=>De.value,set:$t=>De.value=$t})}if(l)for(const gt in l)Vm(l[gt],r,n,gt);if(c){const gt=_t(c)?c.call(n):c;Reflect.ownKeys(gt).forEach(ut=>{fo(ut,gt[ut])})}f&&Bh(f,e,"c");function yt(gt,ut){dt(ut)?ut.forEach(Ce=>gt(Ce.bind(n))):ut&&gt(ut.bind(n))}if(yt(y0,m),yt(_s,g),yt(v0,w),yt(E0,C),yt(p0,k),yt(g0,O),yt(A0,y),yt(T0,G),yt(b0,T),yt(km,V),yt(ea,z),yt(w0,v),dt(A))if(A.length){const gt=e.exposed||(e.exposed={});A.forEach(ut=>{Object.defineProperty(gt,ut,{get:()=>n[ut],set:Ce=>n[ut]=Ce})})}else e.exposed||(e.exposed={});tt&&e.render===Le&&(e.render=tt),I!=null&&(e.inheritAttrs=I),R&&(e.components=R),E&&(e.directives=E)}function S0(e,t,n=Le){dt(e)&&(e=Al(e));for(const r in e){const i=e[r];let s;Ut(i)?"default"in i?s=Ke(i.from||r,i.default,!0):s=Ke(i.from||r):s=Ke(i),Pe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Bh(e,t,n){He(dt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vm(e,t,n,r){const i=r.includes(".")?Sm(n,r):()=>n[r];if(Xt(e)){const s=t[e];_t(s)&&cr(i,s)}else if(_t(e))cr(i,e.bind(n));else if(Ut(e))if(dt(e))e.forEach(s=>Vm(s,t,n,r));else{const s=_t(e.handler)?e.handler.bind(n):t[e.handler];_t(s)&&cr(i,s,e)}}function Pc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,l=s.get(t);let c;return l?c=l:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(h=>Ro(c,h,a,!0)),Ro(c,t,a)),Ut(t)&&s.set(t,c),c}function Ro(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ro(e,s,n,!0),i&&i.forEach(a=>Ro(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=P0[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const P0={data:jh,props:zh,emits:zh,methods:Pi,computed:Pi,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Pi,directives:Pi,watch:x0,provide:jh,inject:C0};function jh(e,t){return t?e?function(){return re(_t(e)?e.call(this,this):e,_t(t)?t.call(this,this):t)}:t:e}function C0(e,t){return Pi(Al(e),Al(t))}function Al(e){if(dt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Pi(e,t){return e?re(Object.create(null),e,t):t}function zh(e,t){return e?dt(e)&&dt(t)?[...new Set([...e,...t])]:re(Object.create(null),$h(e),$h(t??{})):t}function x0(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function Dm(){return{app:null,config:{isNativeTag:hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k0=0;function V0(e,t){return function(r,i=null){_t(r)||(r=re({},r)),i!=null&&!Ut(i)&&(i=null);const s=Dm(),a=new WeakSet;let l=!1;const c=s.app={_uid:k0++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:sE,get config(){return s.config},set config(h){},use(h,...f){return a.has(h)||(h&&_t(h.install)?(a.add(h),h.install(c,...f)):_t(h)&&(a.add(h),h(c,...f))),c},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),c},component(h,f){return f?(s.components[h]=f,c):s.components[h]},directive(h,f){return f?(s.directives[h]=f,c):s.directives[h]},mount(h,f,m){if(!l){const g=St(r,i);return g.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),f&&t?t(g,h):e(g,h,m),l=!0,c._container=h,h.__vue_app__=c,ia(g.component)||g.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(h,f){return s.provides[h]=f,c},runWithContext(h){const f=Fi;Fi=c;try{return h()}finally{Fi=f}}};return c}}let Fi=null;function fo(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Ke(e,t,n=!1){const r=ce||Te;if(r||Fi){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fi._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_t(t)?t.call(r&&r.proxy):t}}const Om={},Nm=()=>Object.create(Om),Mm=e=>Object.getPrototypeOf(e)===Om;function D0(e,t,n,r=!1){const i={},s=Nm();e.propsDefaults=Object.create(null),Lm(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:mm(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function O0(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,l=Pt(i),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let g=f[m];if(Jo(e.emitsOptions,g))continue;const w=t[g];if(c)if(Tt(s,g))w!==s[g]&&(s[g]=w,h=!0);else{const C=Ge(g);i[C]=Il(c,l,C,w,e,!1)}else w!==s[g]&&(s[g]=w,h=!0)}}}else{Lm(e,t,i,s)&&(h=!0);let f;for(const m in l)(!t||!Tt(t,m)&&((f=vr(m))===m||!Tt(t,f)))&&(c?n&&(n[m]!==void 0||n[f]!==void 0)&&(i[m]=Il(c,l,m,void 0,e,!0)):delete i[m]);if(s!==l)for(const m in s)(!t||!Tt(t,m))&&(delete s[m],h=!0)}h&&fn(e.attrs,"set","")}function Lm(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Oi(c))continue;const h=t[c];let f;i&&Tt(i,f=Ge(c))?!s||!s.includes(f)?n[f]=h:(l||(l={}))[f]=h:Jo(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(s){const c=Pt(n),h=l||Dt;for(let f=0;f<s.length;f++){const m=s[f];n[m]=Il(i,c,m,h[m],e,!Tt(h,m))}}return a}function Il(e,t,n,r,i,s){const a=e[n];if(a!=null){const l=Tt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&_t(c)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const f=ys(i);r=h[n]=c.call(null,t),f()}}else r=c}a[0]&&(s&&!l?r=!1:a[1]&&(r===""||r===vr(n))&&(r=!0))}return r}function Fm(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},l=[];let c=!1;if(!_t(e)){const f=m=>{c=!0;const[g,w]=Fm(m,t,!0);re(a,g),w&&l.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!c)return Ut(e)&&r.set(e,Fr),Fr;if(dt(s))for(let f=0;f<s.length;f++){const m=Ge(s[f]);qh(m)&&(a[m]=Dt)}else if(s)for(const f in s){const m=Ge(f);if(qh(m)){const g=s[f],w=a[m]=dt(g)||_t(g)?{type:g}:re({},g);if(w){const C=Gh(Boolean,w.type),k=Gh(String,w.type);w[0]=C>-1,w[1]=k<0||C<k,(C>-1||Tt(w,"default"))&&l.push(m)}}}const h=[a,l];return Ut(e)&&r.set(e,h),h}function qh(e){return e[0]!=="$"&&!Oi(e)}function Hh(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Kh(e,t){return Hh(e)===Hh(t)}function Gh(e,t){return dt(t)?t.findIndex(n=>Kh(n,e)):_t(t)&&Kh(t,e)?0:-1}const Um=e=>e[0]==="_"||e==="$stable",Cc=e=>dt(e)?e.map(Je):[Je(e)],N0=(e,t,n)=>{if(t._n)return t;const r=ir((...i)=>Cc(t(...i)),n);return r._c=!1,r},$m=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Um(i))continue;const s=e[i];if(_t(s))t[i]=N0(i,s,r);else if(s!=null){const a=Cc(s);t[i]=()=>a}}},Bm=(e,t)=>{const n=Cc(t);e.slots.default=()=>n},M0=(e,t)=>{const n=e.slots=Nm();if(e.vnode.shapeFlag&32){const r=t._;r?(re(n,t),Zd(n,"_",r,!0)):$m(t,n)}else t&&Bm(e,t)},L0=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=Dt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(re(i,t),!n&&l===1&&delete i._):(s=!t.$stable,$m(t,i)),a=t}else t&&(Bm(e,t),a={default:1});if(s)for(const l in i)!Um(l)&&a[l]==null&&delete i[l]};function Rl(e,t,n,r,i=!1){if(dt(e)){e.forEach((g,w)=>Rl(g,t&&(dt(t)?t[w]:t),n,r,i));return}if(ho(r)&&!i)return;const s=r.shapeFlag&4?ia(r.component)||r.component.proxy:r.el,a=i?null:s,{i:l,r:c}=e,h=t&&t.r,f=l.refs===Dt?l.refs={}:l.refs,m=l.setupState;if(h!=null&&h!==c&&(Xt(h)?(f[h]=null,Tt(m,h)&&(m[h]=null)):Pe(h)&&(h.value=null)),_t(c))Nn(c,l,12,[a,f]);else{const g=Xt(c),w=Pe(c);if(g||w){const C=()=>{if(e.f){const k=g?Tt(m,c)?m[c]:f[c]:c.value;i?dt(k)&&dc(k,s):dt(k)?k.includes(s)||k.push(s):g?(f[c]=[s],Tt(m,c)&&(m[c]=f[c])):(c.value=[s],e.k&&(f[e.k]=c.value))}else g?(f[c]=a,Tt(m,c)&&(m[c]=a)):w&&(c.value=a,e.k&&(f[e.k]=a))};a?(C.id=-1,Ie(C,n)):C()}}}const Ie=u0;function F0(e){return U0(e)}function U0(e,t){const n=tm();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:m,nextSibling:g,setScopeId:w=Le,insertStaticContent:C}=e,k=(_,b,P,L=null,N=null,q=null,Q=void 0,j=null,H=!!b.dynamicChildren)=>{if(_===b)return;_&&!Ti(_,b)&&(L=M(_),$t(_,N,q,!0),_=null),b.patchFlag===-2&&(H=!1,b.dynamicChildren=null);const{type:B,ref:X,shapeFlag:at}=b;switch(B){case na:O(_,b,P,L);break;case ns:x(_,b,P,L);break;case ja:_==null&&V(b,P,L,Q);break;case ne:R(_,b,P,L,N,q,Q,j,H);break;default:at&1?tt(_,b,P,L,N,q,Q,j,H):at&6?E(_,b,P,L,N,q,Q,j,H):(at&64||at&128)&&B.process(_,b,P,L,N,q,Q,j,H,et)}X!=null&&N&&Rl(X,_&&_.ref,q,b||_,!b)},O=(_,b,P,L)=>{if(_==null)r(b.el=l(b.children),P,L);else{const N=b.el=_.el;b.children!==_.children&&h(N,b.children)}},x=(_,b,P,L)=>{_==null?r(b.el=c(b.children||""),P,L):b.el=_.el},V=(_,b,P,L)=>{[_.el,_.anchor]=C(_.children,b,P,L,_.el,_.anchor)},F=({el:_,anchor:b},P,L)=>{let N;for(;_&&_!==b;)N=g(_),r(_,P,L),_=N;r(b,P,L)},z=({el:_,anchor:b})=>{let P;for(;_&&_!==b;)P=g(_),i(_),_=P;i(b)},tt=(_,b,P,L,N,q,Q,j,H)=>{b.type==="svg"?Q="svg":b.type==="math"&&(Q="mathml"),_==null?G(b,P,L,N,q,Q,j,H):v(_,b,N,q,Q,j,H)},G=(_,b,P,L,N,q,Q,j)=>{let H,B;const{props:X,shapeFlag:at,transition:ot,dirs:it}=_;if(H=_.el=a(_.type,q,X&&X.is,X),at&8?f(H,_.children):at&16&&y(_.children,H,null,L,N,Ba(_,q),Q,j),it&&Jn(_,null,L,"created"),T(H,_,_.scopeId,Q,L),X){for(const bt in X)bt!=="value"&&!Oi(bt)&&s(H,bt,null,X[bt],q,_.children,L,N,Jt);"value"in X&&s(H,"value",null,X.value,q),(B=X.onVnodeBeforeMount)&&Xe(B,L,_)}it&&Jn(_,null,L,"beforeMount");const ct=$0(N,ot);ct&&ot.beforeEnter(H),r(H,b,P),((B=X&&X.onVnodeMounted)||ct||it)&&Ie(()=>{B&&Xe(B,L,_),ct&&ot.enter(H),it&&Jn(_,null,L,"mounted")},N)},T=(_,b,P,L,N)=>{if(P&&w(_,P),L)for(let q=0;q<L.length;q++)w(_,L[q]);if(N){let q=N.subTree;if(b===q){const Q=N.vnode;T(_,Q,Q.scopeId,Q.slotScopeIds,N.parent)}}},y=(_,b,P,L,N,q,Q,j,H=0)=>{for(let B=H;B<_.length;B++){const X=_[B]=j?xn(_[B]):Je(_[B]);k(null,X,b,P,L,N,q,Q,j)}},v=(_,b,P,L,N,q,Q)=>{const j=b.el=_.el;let{patchFlag:H,dynamicChildren:B,dirs:X}=b;H|=_.patchFlag&16;const at=_.props||Dt,ot=b.props||Dt;let it;if(P&&Zn(P,!1),(it=ot.onVnodeBeforeUpdate)&&Xe(it,P,b,_),X&&Jn(b,_,P,"beforeUpdate"),P&&Zn(P,!0),B?A(_.dynamicChildren,B,j,P,L,Ba(b,N),q):Q||ut(_,b,j,null,P,L,Ba(b,N),q,!1),H>0){if(H&16)I(j,b,at,ot,P,L,N);else if(H&2&&at.class!==ot.class&&s(j,"class",null,ot.class,N),H&4&&s(j,"style",at.style,ot.style,N),H&8){const ct=b.dynamicProps;for(let bt=0;bt<ct.length;bt++){const kt=ct[bt],Ht=at[kt],xe=ot[kt];(xe!==Ht||kt==="value")&&s(j,kt,Ht,xe,N,_.children,P,L,Jt)}}H&1&&_.children!==b.children&&f(j,b.children)}else!Q&&B==null&&I(j,b,at,ot,P,L,N);((it=ot.onVnodeUpdated)||X)&&Ie(()=>{it&&Xe(it,P,b,_),X&&Jn(b,_,P,"updated")},L)},A=(_,b,P,L,N,q,Q)=>{for(let j=0;j<b.length;j++){const H=_[j],B=b[j],X=H.el&&(H.type===ne||!Ti(H,B)||H.shapeFlag&70)?m(H.el):P;k(H,B,X,null,L,N,q,Q,!0)}},I=(_,b,P,L,N,q,Q)=>{if(P!==L){if(P!==Dt)for(const j in P)!Oi(j)&&!(j in L)&&s(_,j,P[j],null,Q,b.children,N,q,Jt);for(const j in L){if(Oi(j))continue;const H=L[j],B=P[j];H!==B&&j!=="value"&&s(_,j,B,H,Q,b.children,N,q,Jt)}"value"in L&&s(_,"value",P.value,L.value,Q)}},R=(_,b,P,L,N,q,Q,j,H)=>{const B=b.el=_?_.el:l(""),X=b.anchor=_?_.anchor:l("");let{patchFlag:at,dynamicChildren:ot,slotScopeIds:it}=b;it&&(j=j?j.concat(it):it),_==null?(r(B,P,L),r(X,P,L),y(b.children||[],P,X,N,q,Q,j,H)):at>0&&at&64&&ot&&_.dynamicChildren?(A(_.dynamicChildren,ot,P,N,q,Q,j),(b.key!=null||N&&b===N.subTree)&&jm(_,b,!0)):ut(_,b,P,X,N,q,Q,j,H)},E=(_,b,P,L,N,q,Q,j,H)=>{b.slotScopeIds=j,_==null?b.shapeFlag&512?N.ctx.activate(b,P,L,Q,H):ie(b,P,L,N,q,Q,H):ht(_,b,H)},ie=(_,b,P,L,N,q,Q)=>{const j=_.component=Y0(_,L,N);if(Cm(_)&&(j.ctx.renderer=et),J0(j),j.asyncDep){if(N&&N.registerDep(j,yt),!_.el){const H=j.subTree=St(ns);x(null,H,b,P)}}else yt(j,_,b,P,N,q,Q)},ht=(_,b,P)=>{const L=b.component=_.component;if(i0(_,b,P))if(L.asyncDep&&!L.asyncResolved){gt(L,b,P);return}else L.next=b,Jv(L.update),L.effect.dirty=!0,L.update();else b.el=_.el,L.vnode=b},yt=(_,b,P,L,N,q,Q)=>{const j=()=>{if(_.isMounted){let{next:X,bu:at,u:ot,parent:it,vnode:ct}=_;{const Oe=zm(_);if(Oe){X&&(X.el=ct.el,gt(_,X,Q)),Oe.asyncDep.then(()=>{_.isUnmounted||j()});return}}let bt=X,kt;Zn(_,!1),X?(X.el=ct.el,gt(_,X,Q)):X=ct,at&&uo(at),(kt=X.props&&X.props.onVnodeBeforeUpdate)&&Xe(kt,it,X,ct),Zn(_,!0);const Ht=Ua(_),xe=_.subTree;_.subTree=Ht,k(xe,Ht,m(xe.el),M(xe),_,N,q),X.el=Ht.el,bt===null&&s0(_,Ht.el),ot&&Ie(ot,N),(kt=X.props&&X.props.onVnodeUpdated)&&Ie(()=>Xe(kt,it,X,ct),N)}else{let X;const{el:at,props:ot}=b,{bm:it,m:ct,parent:bt}=_,kt=ho(b);if(Zn(_,!1),it&&uo(it),!kt&&(X=ot&&ot.onVnodeBeforeMount)&&Xe(X,bt,b),Zn(_,!0),at&&xt){const Ht=()=>{_.subTree=Ua(_),xt(at,_.subTree,_,N,null)};kt?b.type.__asyncLoader().then(()=>!_.isUnmounted&&Ht()):Ht()}else{const Ht=_.subTree=Ua(_);k(null,Ht,P,L,_,N,q),b.el=Ht.el}if(ct&&Ie(ct,N),!kt&&(X=ot&&ot.onVnodeMounted)){const Ht=b;Ie(()=>Xe(X,bt,Ht),N)}(b.shapeFlag&256||bt&&ho(bt.vnode)&&bt.vnode.shapeFlag&256)&&_.a&&Ie(_.a,N),_.isMounted=!0,b=P=L=null}},H=_.effect=new gc(j,Le,()=>Ic(B),_.scope),B=_.update=()=>{H.dirty&&H.run()};B.id=_.uid,Zn(_,!0),B()},gt=(_,b,P)=>{b.component=_;const L=_.vnode.props;_.vnode=b,_.next=null,O0(_,b.props,L,P),L0(_,b.children,P),Kn(),Lh(_),Gn()},ut=(_,b,P,L,N,q,Q,j,H=!1)=>{const B=_&&_.children,X=_?_.shapeFlag:0,at=b.children,{patchFlag:ot,shapeFlag:it}=b;if(ot>0){if(ot&128){Ue(B,at,P,L,N,q,Q,j,H);return}else if(ot&256){Ce(B,at,P,L,N,q,Q,j,H);return}}it&8?(X&16&&Jt(B,N,q),at!==B&&f(P,at)):X&16?it&16?Ue(B,at,P,L,N,q,Q,j,H):Jt(B,N,q,!0):(X&8&&f(P,""),it&16&&y(at,P,L,N,q,Q,j,H))},Ce=(_,b,P,L,N,q,Q,j,H)=>{_=_||Fr,b=b||Fr;const B=_.length,X=b.length,at=Math.min(B,X);let ot;for(ot=0;ot<at;ot++){const it=b[ot]=H?xn(b[ot]):Je(b[ot]);k(_[ot],it,P,null,N,q,Q,j,H)}B>X?Jt(_,N,q,!0,!1,at):y(b,P,L,N,q,Q,j,H,at)},Ue=(_,b,P,L,N,q,Q,j,H)=>{let B=0;const X=b.length;let at=_.length-1,ot=X-1;for(;B<=at&&B<=ot;){const it=_[B],ct=b[B]=H?xn(b[B]):Je(b[B]);if(Ti(it,ct))k(it,ct,P,null,N,q,Q,j,H);else break;B++}for(;B<=at&&B<=ot;){const it=_[at],ct=b[ot]=H?xn(b[ot]):Je(b[ot]);if(Ti(it,ct))k(it,ct,P,null,N,q,Q,j,H);else break;at--,ot--}if(B>at){if(B<=ot){const it=ot+1,ct=it<X?b[it].el:L;for(;B<=ot;)k(null,b[B]=H?xn(b[B]):Je(b[B]),P,ct,N,q,Q,j,H),B++}}else if(B>ot)for(;B<=at;)$t(_[B],N,q,!0),B++;else{const it=B,ct=B,bt=new Map;for(B=ct;B<=ot;B++){const ve=b[B]=H?xn(b[B]):Je(b[B]);ve.key!=null&&bt.set(ve.key,B)}let kt,Ht=0;const xe=ot-ct+1;let Oe=!1,ci=0;const bn=new Array(xe);for(B=0;B<xe;B++)bn[B]=0;for(B=it;B<=at;B++){const ve=_[B];if(Ht>=xe){$t(ve,N,q,!0);continue}let Ne;if(ve.key!=null)Ne=bt.get(ve.key);else for(kt=ct;kt<=ot;kt++)if(bn[kt-ct]===0&&Ti(ve,b[kt])){Ne=kt;break}Ne===void 0?$t(ve,N,q,!0):(bn[Ne-ct]=B+1,Ne>=ci?ci=Ne:Oe=!0,k(ve,b[Ne],P,null,N,q,Q,j,H),Ht++)}const br=Oe?B0(bn):Fr;for(kt=br.length-1,B=xe-1;B>=0;B--){const ve=ct+B,Ne=b[ve],Tr=ve+1<X?b[ve+1].el:L;bn[B]===0?k(null,Ne,P,Tr,N,q,Q,j,H):Oe&&(kt<0||B!==br[kt]?De(Ne,P,Tr,2):kt--)}}},De=(_,b,P,L,N=null)=>{const{el:q,type:Q,transition:j,children:H,shapeFlag:B}=_;if(B&6){De(_.component.subTree,b,P,L);return}if(B&128){_.suspense.move(b,P,L);return}if(B&64){Q.move(_,b,P,et);return}if(Q===ne){r(q,b,P);for(let at=0;at<H.length;at++)De(H[at],b,P,L);r(_.anchor,b,P);return}if(Q===ja){F(_,b,P);return}if(L!==2&&B&1&&j)if(L===0)j.beforeEnter(q),r(q,b,P),Ie(()=>j.enter(q),N);else{const{leave:at,delayLeave:ot,afterLeave:it}=j,ct=()=>r(q,b,P),bt=()=>{at(q,()=>{ct(),it&&it()})};ot?ot(q,ct,bt):bt()}else r(q,b,P)},$t=(_,b,P,L=!1,N=!1)=>{const{type:q,props:Q,ref:j,children:H,dynamicChildren:B,shapeFlag:X,patchFlag:at,dirs:ot}=_;if(j!=null&&Rl(j,null,P,_,!0),X&256){b.ctx.deactivate(_);return}const it=X&1&&ot,ct=!ho(_);let bt;if(ct&&(bt=Q&&Q.onVnodeBeforeUnmount)&&Xe(bt,b,_),X&6)Ye(_.component,P,L);else{if(X&128){_.suspense.unmount(P,L);return}it&&Jn(_,null,b,"beforeUnmount"),X&64?_.type.remove(_,b,P,N,et,L):B&&(q!==ne||at>0&&at&64)?Jt(B,b,P,!1,!0):(q===ne&&at&384||!N&&X&16)&&Jt(H,b,P),L&&Bt(_)}(ct&&(bt=Q&&Q.onVnodeUnmounted)||it)&&Ie(()=>{bt&&Xe(bt,b,_),it&&Jn(_,null,b,"unmounted")},P)},Bt=_=>{const{type:b,el:P,anchor:L,transition:N}=_;if(b===ne){wn(P,L);return}if(b===ja){z(_);return}const q=()=>{i(P),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(_.shapeFlag&1&&N&&!N.persisted){const{leave:Q,delayLeave:j}=N,H=()=>Q(P,q);j?j(_.el,q,H):H()}else q()},wn=(_,b)=>{let P;for(;_!==b;)P=g(_),i(_),_=P;i(b)},Ye=(_,b,P)=>{const{bum:L,scope:N,update:q,subTree:Q,um:j}=_;L&&uo(L),N.stop(),q&&(q.active=!1,$t(Q,_,b,P)),j&&Ie(j,b),Ie(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Jt=(_,b,P,L=!1,N=!1,q=0)=>{for(let Q=q;Q<_.length;Q++)$t(_[Q],b,P,L,N)},M=_=>_.shapeFlag&6?M(_.component.subTree):_.shapeFlag&128?_.suspense.next():g(_.anchor||_.el);let J=!1;const Y=(_,b,P)=>{_==null?b._vnode&&$t(b._vnode,null,null,!0):k(b._vnode||null,_,b,null,null,null,P),J||(J=!0,Lh(),Am(),J=!1),b._vnode=_},et={p:k,um:$t,m:De,r:Bt,mt:ie,mc:y,pc:ut,pbc:A,n:M,o:e};let Et,xt;return{render:Y,hydrate:Et,createApp:V0(Y,Et)}}function Ba({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Zn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function $0(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function jm(e,t,n=!1){const r=e.children,i=t.children;if(dt(r)&&dt(i))for(let s=0;s<r.length;s++){const a=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=xn(i[s]),l.el=a.el),n||jm(a,l)),l.type===na&&(l.el=a.el)}}function B0(e){const t=e.slice(),n=[0];let r,i,s,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(i=n[n.length-1],e[i]<h){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)l=s+a>>1,e[n[l]]<h?s=l+1:a=l;h<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function zm(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zm(t)}const j0=e=>e.__isTeleport,ne=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),Ui=[];let ze=null;function Zt(e=!1){Ui.push(ze=e?null:[])}function z0(){Ui.pop(),ze=Ui[Ui.length-1]||null}let rs=1;function Wh(e){rs+=e}function q0(e){return e.dynamicChildren=rs>0?ze||Fr:null,z0(),rs>0&&ze&&ze.push(e),e}function te(e,t,n,r,i,s){return q0(W(e,t,n,r,i,s,!0))}function Sl(e){return e?e.__v_isVNode===!0:!1}function Ti(e,t){return e.type===t.type&&e.key===t.key}const qm=({key:e})=>e??null,mo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Xt(e)||Pe(e)||_t(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function W(e,t=null,n=null,r=0,i=null,s=e===ne?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qm(t),ref:t&&mo(t),scopeId:Zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Te};return l?(xc(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Xt(n)?8:16),rs>0&&!a&&ze&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ze.push(c),c}const St=H0;function H0(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===a0)&&(e=ns),Sl(e)){const l=qr(e,t,!0);return n&&xc(l,n),rs>0&&!s&&ze&&(l.shapeFlag&6?ze[ze.indexOf(e)]=l:ze.push(l)),l.patchFlag|=-2,l}if(rE(e)&&(e=e.__vccOpts),t){t=K0(t);let{class:l,style:c}=t;l&&!Xt(l)&&(t.class=en(l)),Ut(c)&&(gm(c)&&!dt(c)&&(c=re({},c)),t.style=pc(c))}const a=Xt(e)?1:c0(e)?128:j0(e)?64:Ut(e)?4:_t(e)?2:0;return W(e,t,n,r,i,a,s,!0)}function K0(e){return e?gm(e)||Mm(e)?re({},e):e:null}function qr(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:l,transition:c}=e,h=t?G0(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&qm(h),ref:t&&t.ref?n&&s?dt(s)?s.concat(mo(t)):[s,mo(t)]:mo(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ne?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qr(e.ssContent),ssFallback:e.ssFallback&&qr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(f.transition=c.clone(f)),f}function Re(e=" ",t=0){return St(na,null,e,t)}function Je(e){return e==null||typeof e=="boolean"?St(ns):dt(e)?St(ne,null,e.slice()):typeof e=="object"?xn(e):St(na,null,String(e))}function xn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qr(e)}function xc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(dt(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),xc(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Mm(t)?t._ctx=Te:i===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else _t(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[Re(t)]):n=8);e.children=t,e.shapeFlag|=n}function G0(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=en([t.class,r.class]));else if(i==="style")t.style=pc([t.style,r.style]);else if(Ko(i)){const s=t[i],a=r[i];a&&s!==a&&!(dt(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Xe(e,t,n,r=null){He(e,t,7,[n,r])}const W0=Dm();let Q0=0;function Y0(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||W0,s={uid:Q0++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fm(r,i),emitsOptions:Rm(r,i),emit:null,emitted:null,propsDefaults:Dt,inheritAttrs:r.inheritAttrs,ctx:Dt,data:Dt,props:Dt,attrs:Dt,slots:Dt,refs:Dt,setupState:Dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=e0.bind(null,s),e.ce&&e.ce(s),s}let ce=null;const X0=()=>ce||Te;let So,Pl;{const e=tm(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};So=t("__VUE_INSTANCE_SETTERS__",n=>ce=n),Pl=t("__VUE_SSR_SETTERS__",n=>ra=n)}const ys=e=>{const t=ce;return So(e),e.scope.on(),()=>{e.scope.off(),So(t)}},Qh=()=>{ce&&ce.scope.off(),So(null)};function Hm(e){return e.vnode.shapeFlag&4}let ra=!1;function J0(e,t=!1){t&&Pl(t);const{props:n,children:r}=e.vnode,i=Hm(e);D0(e,n,i,t),M0(e,r);const s=i?Z0(e,t):void 0;return t&&Pl(!1),s}function Z0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,I0);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?eE(e):null,s=ys(e);Kn();const a=Nn(r,e,0,[e.props,i]);if(Gn(),s(),Yd(a)){if(a.then(Qh,Qh),t)return a.then(l=>{Yh(e,l,t)}).catch(l=>{Xo(l,e,0)});e.asyncDep=a}else Yh(e,a,t)}else Km(e,t)}function Yh(e,t,n){_t(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ut(t)&&(e.setupState=Em(t)),Km(e,n)}let Xh;function Km(e,t,n){const r=e.type;if(!e.render){if(!t&&Xh&&!r.render){const i=r.template||Pc(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,h=re(re({isCustomElement:s,delimiters:l},a),c);r.render=Xh(i,h)}}e.render=r.render||Le}{const i=ys(e);Kn();try{R0(e)}finally{Gn(),i()}}}const tE={get(e,t){return Se(e,"get",""),e[t]}};function eE(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,tE),slots:e.slots,emit:e.emit,expose:t}}function ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Em(qv(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Li)return Li[n](e)},has(t,n){return n in t||n in Li}}))}function nE(e,t=!0){return _t(e)?e.displayName||e.name:e.name||t&&e.__name}function rE(e){return _t(e)&&"__vccOpts"in e}const le=(e,t)=>Hv(e,t,ra);function iE(e,t,n=Dt){const r=X0(),i=Ge(t),s=vr(t),a=Qv((c,h)=>{let f;return d0(()=>{const m=e[t];sn(f,m)&&(f=m,h())}),{get(){return c(),n.get?n.get(f):f},set(m){const g=r.vnode.props;!(g&&(t in g||i in g||s in g)&&(`onUpdate:${t}`in g||`onUpdate:${i}`in g||`onUpdate:${s}`in g))&&sn(m,f)&&(f=m,h()),r.emit(`update:${t}`,n.set?n.set(m):m)}}}),l="modelModifiers";return a[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?e[l]||{}:a,done:!1}:{done:!0}}}},a}function kc(e,t,n){const r=arguments.length;return r===2?Ut(t)&&!dt(t)?Sl(t)?St(e,null,[t]):St(e,t):St(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sl(n)&&(n=[n]),St(e,t,n))}const sE="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const oE="http://www.w3.org/2000/svg",aE="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Jh=kn&&kn.createElement("template"),lE={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?kn.createElementNS(oE,e):t==="mathml"?kn.createElementNS(aE,e):kn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>kn.createTextNode(e),createComment:e=>kn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Jh.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const l=Jh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},cE=Symbol("_vtc");function uE(e,t,n){const r=e[cE];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Po=Symbol("_vod"),Gm=Symbol("_vsh"),Wm={beforeMount(e,{value:t},{transition:n}){e[Po]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ai(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ai(e,!0),r.enter(e)):r.leave(e,()=>{Ai(e,!1)}):Ai(e,t))},beforeUnmount(e,{value:t}){Ai(e,t)}};function Ai(e,t){e.style.display=t?e[Po]:"none",e[Gm]=!t}const hE=Symbol(""),fE=/(^|;)\s*display\s*:/;function dE(e,t,n){const r=e.style,i=Xt(n);let s=!1;if(n&&!i){if(t)if(Xt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&po(r,l,"")}else for(const a in t)n[a]==null&&po(r,a,"");for(const a in n)a==="display"&&(s=!0),po(r,a,n[a])}else if(i){if(t!==n){const a=r[hE];a&&(n+=";"+a),r.cssText=n,s=fE.test(n)}}else t&&e.removeAttribute("style");Po in e&&(e[Po]=s?r.display:"",e[Gm]&&(r.display="none"))}const Zh=/\s*!important$/;function po(e,t,n){if(dt(n))n.forEach(r=>po(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=mE(e,t);Zh.test(n)?e.setProperty(vr(r),n.replace(Zh,""),"important"):e[r]=n}}const tf=["Webkit","Moz","ms"],za={};function mE(e,t){const n=za[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return za[t]=r;r=Qo(r);for(let i=0;i<tf.length;i++){const s=tf[i]+r;if(s in e)return za[t]=s}return t}const ef="http://www.w3.org/1999/xlink";function pE(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ef,t.slice(6,t.length)):e.setAttributeNS(ef,t,n);else{const s=wv(t);n==null||s&&!em(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function gE(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const h=l==="OPTION"?e.getAttribute("value")||"":e.value,f=n??"";(h!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const h=typeof e[t];h==="boolean"?n=em(n):n==null&&h==="string"?(n="",c=!0):h==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Cr(e,t,n,r){e.addEventListener(t,n,r)}function _E(e,t,n,r){e.removeEventListener(t,n,r)}const nf=Symbol("_vei");function yE(e,t,n,r,i=null){const s=e[nf]||(e[nf]={}),a=s[t];if(r&&a)a.value=r;else{const[l,c]=vE(t);if(r){const h=s[t]=bE(r,i);Cr(e,l,h,c)}else a&&(_E(e,l,a,c),s[t]=void 0)}}const rf=/(?:Once|Passive|Capture)$/;function vE(e){let t;if(rf.test(e)){t={};let r;for(;r=e.match(rf);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vr(e.slice(2)),t]}let qa=0;const EE=Promise.resolve(),wE=()=>qa||(EE.then(()=>qa=0),qa=Date.now());function bE(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(TE(r,n.value),t,5,[r])};return n.value=e,n.attached=wE(),n}function TE(e,t){if(dt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const sf=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,AE=(e,t,n,r,i,s,a,l,c)=>{const h=i==="svg";t==="class"?uE(e,r,h):t==="style"?dE(e,n,r):Ko(t)?fc(t)||yE(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):IE(e,t,r,h))?gE(e,t,r,s,a,l,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pE(e,t,r,h))};function IE(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&sf(t)&&_t(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return sf(t)&&Xt(n)?!1:t in e}const of=e=>{const t=e.props["onUpdate:modelValue"]||!1;return dt(t)?n=>uo(t,n):t};function RE(e){e.target.composing=!0}function af(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ha=Symbol("_assign"),pR={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ha]=of(i);const s=r||i.props&&i.props.type==="number";Cr(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),s&&(l=gl(l)),e[Ha](l)}),n&&Cr(e,"change",()=>{e.value=e.value.trim()}),t||(Cr(e,"compositionstart",RE),Cr(e,"compositionend",af),Cr(e,"change",af))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e[Ha]=of(s),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?gl(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===l)||(e.value=l))}},SE=["ctrl","shift","alt","meta"],PE={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>SE.some(n=>e[`${n}Key`]&&!t.includes(n))},Mr=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let a=0;a<t.length;a++){const l=PE[t[a]];if(l&&l(i,t))return}return e(i,...s)})},CE=re({patchProp:AE},lE);let lf;function xE(){return lf||(lf=F0(CE))}const kE=(...e)=>{const t=xE().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=DE(r);if(!i)return;const s=t._component;!_t(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,VE(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function VE(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function DE(e){return Xt(e)?document.querySelector(e):e}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cf(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Co(e){"@babel/helpers - typeof";return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Co(e)}function Ae(e,t,n){return t=LE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function NE(e,t){if(e==null)return{};var n=OE(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ME(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function LE(e){var t=ME(e,"string");return typeof t=="symbol"?t:String(t)}var FE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qm={exports:{}};(function(e){(function(t){var n=function(x,V,F){if(!h(V)||m(V)||g(V)||w(V)||c(V))return V;var z,tt=0,G=0;if(f(V))for(z=[],G=V.length;tt<G;tt++)z.push(n(x,V[tt],F));else{z={};for(var T in V)Object.prototype.hasOwnProperty.call(V,T)&&(z[x(T,F)]=n(x,V[T],F))}return z},r=function(x,V){V=V||{};var F=V.separator||"_",z=V.split||/(?=[A-Z])/;return x.split(z).join(F)},i=function(x){return C(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(V,F){return F?F.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},s=function(x){var V=i(x);return V.substr(0,1).toUpperCase()+V.substr(1)},a=function(x,V){return r(x,V).toLowerCase()},l=Object.prototype.toString,c=function(x){return typeof x=="function"},h=function(x){return x===Object(x)},f=function(x){return l.call(x)=="[object Array]"},m=function(x){return l.call(x)=="[object Date]"},g=function(x){return l.call(x)=="[object RegExp]"},w=function(x){return l.call(x)=="[object Boolean]"},C=function(x){return x=x-0,x===x},k=function(x,V){var F=V&&"process"in V?V.process:V;return typeof F!="function"?x:function(z,tt){return F(z,x,tt)}},O={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(x,V){return n(k(i,V),x)},decamelizeKeys:function(x,V){return n(k(a,V),x,V)},pascalizeKeys:function(x,V){return n(k(s,V),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(FE)})(Qm);var UE=Qm.exports,$E=["class","style"];function BE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=UE.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function jE(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Ym(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,h){var f=e.attributes[h];switch(h){case"class":c.class=jE(f);break;case"style":c.style=BE(f);break;default:c.attrs[h]=f}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,l=NE(n,$E);return kc(e.tag,un(un(un({},t),{},{class:i.class,style:un(un({},i.style),a)},i.attrs),l),r)}var Xm=!1;try{Xm=!0}catch{}function zE(){if(!Xm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ka(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ae({},e,t):{}}function qE(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ae(t,"fa-".concat(e.size),e.size!==null),Ae(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ae(t,"fa-pull-".concat(e.pull),e.pull!==null),Ae(t,"fa-swap-opacity",e.swapOpacity),Ae(t,"fa-bounce",e.bounce),Ae(t,"fa-shake",e.shake),Ae(t,"fa-beat",e.beat),Ae(t,"fa-fade",e.fade),Ae(t,"fa-beat-fade",e.beatFade),Ae(t,"fa-flash",e.flash),Ae(t,"fa-spin-pulse",e.spinPulse),Ae(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function uf(e){if(e&&Co(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(pl.icon)return pl.icon(e);if(e===null)return null;if(Co(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var HE=Sc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=le(function(){return uf(t.icon)}),s=le(function(){return Ka("classes",qE(t))}),a=le(function(){return Ka("transform",typeof t.transform=="string"?pl.transform(t.transform):t.transform)}),l=le(function(){return Ka("mask",uf(t.mask))}),c=le(function(){return Yy(i.value,un(un(un(un({},s.value),a.value),l.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});cr(c,function(f){if(!f)return zE("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var h=le(function(){return c.value?Ym(c.value.abstract[0],{},r):null});return function(){return h.value}}});const KE="https://www.youtube-nocookie.com",GE="https://www.youtube.com",Jm="vue-youtube";var Vc=(e=>(e[e.UNSTARTED=-1]="UNSTARTED",e[e.ENDED=0]="ENDED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.BUFFERING=3]="BUFFERING",e[e.VIDEO_CUED=5]="VIDEO_CUED",e))(Vc||{});function WE(e){const t=be(e);return(t==null?void 0:t.$el)??t}const QE=e=>({playerVars:e.playerVars??{},cookie:e.cookie??!0,height:e.height??720,width:e.width??1280}),YE=()=>{const e=Ke(Jm);if(!e)throw new Error("You may forget to apply app.use(manager). See https://vue-youtube.github.io/docs/usage/manager.html for more information");return e},XE=e=>{const t={install(n){var r;n.provide(Jm,t),(r=this._state.options.deferLoading)!=null&&r.enabled||this._insert()},register(n,r){var i;const s=n.id||`vue-youtube-${this._state.counter++}`,a=this._state.players.get(s);if(a!==void 0){a({factory:this._state.factory,id:s});return}this._state.factory===void 0?(this._state.backlog.set(s,r),(i=this._state.options.deferLoading)!=null&&i.enabled&&this._state.options.deferLoading.autoLoad&&this._insert()):r({factory:this._state.factory,id:s})},load(){this._state.factory===void 0&&this._insert()},_insert(){var n;const r=document.createElement("script");r.src="https://www.youtube.com/player_api";const i=document.querySelectorAll("script")[0];(n=i.parentNode)==null||n.insertBefore(r,i),window.onYouTubeIframeAPIReady=()=>{this._state.factory=window.YT;for(const[s,a]of this._state.backlog.entries())this._state.backlog.delete(s),this._state.players.set(s,a),a({factory:this._state.factory,id:s})}},_state:{backlog:new Map,players:new Map,options:e||{deferLoading:{enabled:!1,autoLoad:!1}},factory:void 0,counter:1}};return t},JE=(e,t,n={})=>{const{playerVars:r,cookie:i,height:s,width:a}=QE(n),l=i?GE:KE,c=YE(),h=new Array,f=new Array,m=new Array,g=new Array,w=new Array,C=new Array,k=ym(),O=oe(e),x=oe(!1),V=oe(!1),F=(ht,yt)=>{for(const gt of yt)gt(ht)},z=(...ht)=>{h.push(...ht)},tt=(...ht)=>{f.push(...ht)},G=(...ht)=>{m.push(...ht)},T=(...ht)=>{g.push(...ht)},y=(...ht)=>{w.push(...ht)},v=(...ht)=>{C.push(...ht)},A=()=>{var ht,yt,gt;const ut=(ht=k.value)==null?void 0:ht.getPlayerState();if(ut&&ut===Vc.PLAYING){(yt=k.value)==null||yt.pauseVideo();return}(gt=k.value)==null||gt.playVideo()},I=()=>{var ht,yt;if((ht=k.value)!=null&&ht.isMuted()){k.value.unMute();return}(yt=k.value)==null||yt.mute()},R=()=>{var ht,yt;if(x.value){(ht=k.value)==null||ht.setShuffle(!1),x.value=!1;return}(yt=k.value)==null||yt.setShuffle(!0),x.value=!0},E=()=>{var ht,yt;if(V.value){(ht=k.value)==null||ht.setLoop(!1),V.value=!1;return}(yt=k.value)==null||yt.setLoop(!0),V.value=!0},ie=cr(O,ht=>{var yt;(yt=k.value)==null||yt.loadVideoById(ht)});return _s(()=>{const ht=WE(t);ht&&c.register(ht,({factory:yt,id:gt})=>{ht.id=gt,k.value=new yt.Player(gt,{videoId:be(O),playerVars:r,height:s,width:a,host:l,events:{onPlaybackQualityChange:ut=>{F(ut,h)},onPlaybackRateChange:ut=>{F(ut,f)},onStateChange:ut=>{F(ut,m)},onApiChange:ut=>{F(ut,g)},onError:ut=>{F(ut,w)},onReady:ut=>{F(ut,C)}}})})}),ea(()=>{var ht;(ht=k.value)==null||ht.destroy(),ie()}),{instance:k,togglePlay:A,toggleMute:I,toggleLoop:E,toggleShuffle:R,onPlaybackQualityChange:z,onPlaybackRateChange:tt,onStateChange:G,onApiChange:T,onError:y,onReady:v}},ZE={class:"footer"},t1={class:"footer-container"},e1=W("div",{class:"footer-line"},[Re(" Powered by "),W("a",{href:"https://gohugo.io/",target:"_blank",rel:"noopener noreferrer",title:"Hugo 0.113.0"},"Hugo"),Re(" | Theme - "),W("a",{href:"https://github.com/HEIGE-PCloud/DoIt",target:"_blank",rel:"noopener noreferrer",title:"DoIt 0.4.0"},[W("i",{class:"far fa-edit fa-fw"}),Re(" DoIt ")])],-1),n1={class:"footer-line"},r1=W("i",{class:"far fa-copyright fa-fw"},null,-1),i1={itemprop:"copyrightYear"},s1={class:"author",itemprop:"copyrightHolder"},o1=["href"],a1=W("span",{class:"license"},[W("a",{rel:"license external nofollow noopener noreffer",href:"https://creativecommons.org/licenses/by-nc/4.0/",target:"_blank"},"CC BY-NC 4.0")],-1),l1=W("div",{class:"footer-line"},null,-1),c1=W("div",{class:"footer-line"},null,-1),u1={__name:"Footer",setup(e){const t=ni({name:"PCloud",url:"https://github.com/HEIGE-PCloud",copyrightYear:[2019,2023]});return(n,r)=>(Zt(),te("footer",ZE,[W("div",t1,[e1,W("div",n1,[r1,W("span",i1,hn(t.copyrightYear[0])+" - "+hn(t.copyrightYear[1]),1),W("span",s1,[Re("  "),W("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},hn(t.name),9,o1)]),Re(" |  "),a1]),l1,c1])]))}};class h1{constructor(){this.THEMES={light:{theme:"light",colorScheme:"light",nextTheme:"dark",nextColorScheme:"dark"},dark:{theme:"tw-dark",colorScheme:"dark",nextTheme:"light",nextColorScheme:"light"}},this.currentTheme=localStorage.getItem("theme")||"light",this.currentColorScheme=this.THEMES[this.currentTheme].colorScheme,this._setTheme()}switchTheme(){let t=this.currentTheme;this.currentTheme=this.THEMES[t].nextTheme,this.currentColorScheme=this.THEMES[t].nextColorScheme,this._setTheme(),localStorage.setItem("theme",this.currentTheme)}_setTheme(){document.body.setAttribute("theme",this.currentTheme),console.log(this.currentTheme,this.currentColorScheme),document.documentElement.classList.remove(...Object.keys(this.THEMES)),document.documentElement.classList.add(this.currentTheme),document.documentElement.style.colorScheme=this.currentColorScheme}}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof document<"u";function f1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ct=Object.assign;function Ga(e,t){const n={};for(const r in t){const i=t[r];n[r]=We(i)?i.map(e):e(i)}return n}const $i=()=>{},We=Array.isArray,Zm=/#/g,d1=/&/g,m1=/\//g,p1=/=/g,g1=/\?/g,tp=/\+/g,_1=/%5B/g,y1=/%5D/g,ep=/%5E/g,v1=/%60/g,np=/%7B/g,E1=/%7C/g,rp=/%7D/g,w1=/%20/g;function Dc(e){return encodeURI(""+e).replace(E1,"|").replace(_1,"[").replace(y1,"]")}function b1(e){return Dc(e).replace(np,"{").replace(rp,"}").replace(ep,"^")}function Cl(e){return Dc(e).replace(tp,"%2B").replace(w1,"+").replace(Zm,"%23").replace(d1,"%26").replace(v1,"`").replace(np,"{").replace(rp,"}").replace(ep,"^")}function T1(e){return Cl(e).replace(p1,"%3D")}function A1(e){return Dc(e).replace(Zm,"%23").replace(g1,"%3F")}function I1(e){return e==null?"":A1(e).replace(m1,"%2F")}function is(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const R1=/\/$/,S1=e=>e.replace(R1,"");function Wa(e,t,n="/"){let r,i={},s="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=k1(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:is(a)}}function P1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function hf(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function C1(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Hr(t.matched[r],n.matched[i])&&ip(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ip(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!x1(e[n],t[n]))return!1;return!0}function x1(e,t){return We(e)?ff(e,t):We(t)?ff(t,e):e===t}function ff(e,t){return We(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function k1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}var ss;(function(e){e.pop="pop",e.push="push"})(ss||(ss={}));var Bi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Bi||(Bi={}));function V1(e){if(!e)if(xr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),S1(e)}const D1=/^[^#]+#/;function O1(e,t){return e.replace(D1,"#")+t}function N1(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const sa=()=>({left:window.scrollX,top:window.scrollY});function M1(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=N1(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function df(e,t){return(history.state?history.state.position-t:-1)+e}const xl=new Map;function L1(e,t){xl.set(e,t)}function F1(e){const t=xl.get(e);return xl.delete(e),t}let U1=()=>location.protocol+"//"+location.host;function sp(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let l=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),hf(c,"")}return hf(n,e)+r+i}function $1(e,t,n,r){let i=[],s=[],a=null;const l=({state:g})=>{const w=sp(e,location),C=n.value,k=t.value;let O=0;if(g){if(n.value=w,t.value=g,a&&a===C){a=null;return}O=k?g.position-k.position:0}else r(w);i.forEach(x=>{x(n.value,C,{delta:O,type:ss.pop,direction:O?O>0?Bi.forward:Bi.back:Bi.unknown})})};function c(){a=n.value}function h(g){i.push(g);const w=()=>{const C=i.indexOf(g);C>-1&&i.splice(C,1)};return s.push(w),w}function f(){const{history:g}=window;g.state&&g.replaceState(Ct({},g.state,{scroll:sa()}),"")}function m(){for(const g of s)g();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:m}}function mf(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?sa():null}}function B1(e){const{history:t,location:n}=window,r={value:sp(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,h,f){const m=e.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+c:U1()+e+c;try{t[f?"replaceState":"pushState"](h,"",g),i.value=h}catch(w){console.error(w),n[f?"replace":"assign"](g)}}function a(c,h){const f=Ct({},t.state,mf(i.value.back,c,i.value.forward,!0),h,{position:i.value.position});s(c,f,!0),r.value=c}function l(c,h){const f=Ct({},i.value,t.state,{forward:c,scroll:sa()});s(f.current,f,!0);const m=Ct({},mf(r.value,c,null),{position:f.position+1},h);s(c,m,!1),r.value=c}return{location:r,state:i,push:l,replace:a}}function j1(e){e=V1(e);const t=B1(e),n=$1(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=Ct({location:"",base:e,go:r,createHref:O1.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function z1(e){return typeof e=="string"||e&&typeof e=="object"}function op(e){return typeof e=="string"||typeof e=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ap=Symbol("");var pf;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pf||(pf={}));function Kr(e,t){return Ct(new Error,{type:e,[ap]:!0},t)}function cn(e,t){return e instanceof Error&&ap in e&&(t==null||!!(e.type&t))}const gf="[^/]+?",q1={sensitive:!1,strict:!1,start:!0,end:!0},H1=/[.+*?^${}()[\]/\\]/g;function K1(e,t){const n=Ct({},q1,t),r=[];let i=n.start?"^":"";const s=[];for(const h of e){const f=h.length?[]:[90];n.strict&&!h.length&&(i+="/");for(let m=0;m<h.length;m++){const g=h[m];let w=40+(n.sensitive?.25:0);if(g.type===0)m||(i+="/"),i+=g.value.replace(H1,"\\$&"),w+=40;else if(g.type===1){const{value:C,repeatable:k,optional:O,regexp:x}=g;s.push({name:C,repeatable:k,optional:O});const V=x||gf;if(V!==gf){w+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${V}): `+z.message)}}let F=k?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;m||(F=O&&h.length<2?`(?:/${F})`:"/"+F),O&&(F+="?"),i+=F,w+=20,O&&(w+=-8),k&&(w+=-20),V===".*"&&(w+=-50)}f.push(w)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(h){const f=h.match(a),m={};if(!f)return null;for(let g=1;g<f.length;g++){const w=f[g]||"",C=s[g-1];m[C.name]=w&&C.repeatable?w.split("/"):w}return m}function c(h){let f="",m=!1;for(const g of e){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const w of g)if(w.type===0)f+=w.value;else if(w.type===1){const{value:C,repeatable:k,optional:O}=w,x=C in h?h[C]:"";if(We(x)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const V=We(x)?x.join("/"):x;if(!V)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${C}"`);f+=V}}return f||"/"}return{re:a,score:r,keys:s,parse:l,stringify:c}}function G1(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function W1(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=G1(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(_f(r))return 1;if(_f(i))return-1}return i.length-r.length}function _f(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Q1={type:0,value:""},Y1=/[a-zA-Z0-9_]/;function X1(e){if(!e)return[[]];if(e==="/")return[[Q1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${h}": ${w}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let l=0,c,h="",f="";function m(){h&&(n===0?s.push({type:0,value:h}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&m(),a()):c===":"?(m(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Y1.test(c)?g():(m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),m(),a(),i}function J1(e,t,n){const r=K1(X1(e.path),n),i=Ct(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Z1(e,t){const n=[],r=new Map;t=Ef({strict:!1,end:!0,sensitive:!1},t);function i(f){return r.get(f)}function s(f,m,g){const w=!g,C=tw(f);C.aliasOf=g&&g.record;const k=Ef(t,f),O=[C];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of F)O.push(Ct({},C,{components:g?g.record.components:C.components,path:z,aliasOf:g?g.record:C}))}let x,V;for(const F of O){const{path:z}=F;if(m&&z[0]!=="/"){const tt=m.record.path,G=tt[tt.length-1]==="/"?"":"/";F.path=m.record.path+(z&&G+z)}if(x=J1(F,m,k),g?g.alias.push(x):(V=V||x,V!==x&&V.alias.push(x),w&&f.name&&!vf(x)&&a(f.name)),C.children){const tt=C.children;for(let G=0;G<tt.length;G++)s(tt[G],x,g&&g.children[G])}g=g||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&c(x)}return V?()=>{a(V)}:$i}function a(f){if(op(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function l(){return n}function c(f){let m=0;for(;m<n.length&&W1(f,n[m])>=0&&(f.record.path!==n[m].record.path||!lp(f,n[m]));)m++;n.splice(m,0,f),f.record.name&&!vf(f)&&r.set(f.record.name,f)}function h(f,m){let g,w={},C,k;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Kr(1,{location:f});k=g.record.name,w=Ct(yf(m.params,g.keys.filter(V=>!V.optional).concat(g.parent?g.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),f.params&&yf(f.params,g.keys.map(V=>V.name))),C=g.stringify(w)}else if(f.path!=null)C=f.path,g=n.find(V=>V.re.test(C)),g&&(w=g.parse(C),k=g.record.name);else{if(g=m.name?r.get(m.name):n.find(V=>V.re.test(m.path)),!g)throw Kr(1,{location:f,currentLocation:m});k=g.record.name,w=Ct({},m.params,f.params),C=g.stringify(w)}const O=[];let x=g;for(;x;)O.unshift(x.record),x=x.parent;return{name:k,path:C,params:w,matched:O,meta:nw(O)}}return e.forEach(f=>s(f)),{addRoute:s,resolve:h,removeRoute:a,getRoutes:l,getRecordMatcher:i}}function yf(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function tw(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ew(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ew(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function vf(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nw(e){return e.reduce((t,n)=>Ct(t,n.meta),{})}function Ef(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function lp(e,t){return t.children.some(n=>n===e||lp(e,n))}function rw(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(tp," "),a=s.indexOf("="),l=is(a<0?s:s.slice(0,a)),c=a<0?null:is(s.slice(a+1));if(l in t){let h=t[l];We(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function wf(e){let t="";for(let n in e){const r=e[n];if(n=T1(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(We(r)?r.map(s=>s&&Cl(s)):[r&&Cl(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function iw(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=We(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const sw=Symbol(""),bf=Symbol(""),Oc=Symbol(""),Nc=Symbol(""),kl=Symbol("");function Ii(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Vn(e,t,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Kr(4,{from:n,to:t})):g instanceof Error?c(g):z1(g)?c(Kr(2,{from:t,to:g})):(a&&r.enterCallbacks[i]===a&&typeof g=="function"&&a.push(g),l())},f=s(()=>e.call(r&&r.instances[i],t,n,h));let m=Promise.resolve(f);e.length<3&&(m=m.then(h)),m.catch(g=>c(g))})}function Qa(e,t,n,r,i=s=>s()){const s=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(ow(c)){const f=(c.__vccOpts||c)[t];f&&s.push(Vn(f,n,r,a,l,i))}else{let h=c();s.push(()=>h.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const m=f1(f)?f.default:f;a.components[l]=m;const w=(m.__vccOpts||m)[t];return w&&Vn(w,n,r,a,l,i)()}))}}return s}function ow(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tf(e){const t=Ke(Oc),n=Ke(Nc),r=le(()=>{const c=be(e.to);return t.resolve(c)}),i=le(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],m=n.matched;if(!f||!m.length)return-1;const g=m.findIndex(Hr.bind(null,f));if(g>-1)return g;const w=Af(c[h-2]);return h>1&&Af(f)===w&&m[m.length-1].path!==w?m.findIndex(Hr.bind(null,c[h-2])):g}),s=le(()=>i.value>-1&&uw(n.params,r.value.params)),a=le(()=>i.value>-1&&i.value===n.matched.length-1&&ip(n.params,r.value.params));function l(c={}){return cw(c)?t[be(e.replace)?"replace":"push"](be(e.to)).catch($i):Promise.resolve()}return{route:r,href:le(()=>r.value.href),isActive:s,isExactActive:a,navigate:l}}const aw=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tf,setup(e,{slots:t}){const n=ni(Tf(e)),{options:r}=Ke(Oc),i=le(()=>({[If(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[If(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:kc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),lw=aw;function cw(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function uw(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!We(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Af(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const If=(e,t,n)=>e??t??n,hw=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ke(kl),i=le(()=>e.route||r.value),s=Ke(bf,0),a=le(()=>{let h=be(s);const{matched:f}=i.value;let m;for(;(m=f[h])&&!m.components;)h++;return h}),l=le(()=>i.value.matched[a.value]);fo(bf,le(()=>a.value+1)),fo(sw,l),fo(kl,i);const c=oe();return cr(()=>[c.value,l.value,e.name],([h,f,m],[g,w,C])=>{f&&(f.instances[m]=h,w&&w!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=w.leaveGuards),f.updateGuards.size||(f.updateGuards=w.updateGuards))),h&&f&&(!w||!Hr(f,w)||!g)&&(f.enterCallbacks[m]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=i.value,f=e.name,m=l.value,g=m&&m.components[f];if(!g)return Rf(n.default,{Component:g,route:h});const w=m.props[f],C=w?w===!0?h.params:typeof w=="function"?w(h):w:null,O=kc(g,Ct({},C,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(m.instances[f]=null)},ref:c}));return Rf(n.default,{Component:O,route:h})||O}}});function Rf(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cp=hw;function fw(e){const t=Z1(e.routes,e),n=e.parseQuery||rw,r=e.stringifyQuery||wf,i=e.history,s=Ii(),a=Ii(),l=Ii(),c=ym(Pn);let h=Pn;xr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ga.bind(null,M=>""+M),m=Ga.bind(null,I1),g=Ga.bind(null,is);function w(M,J){let Y,et;return op(M)?(Y=t.getRecordMatcher(M),et=J):et=M,t.addRoute(et,Y)}function C(M){const J=t.getRecordMatcher(M);J&&t.removeRoute(J)}function k(){return t.getRoutes().map(M=>M.record)}function O(M){return!!t.getRecordMatcher(M)}function x(M,J){if(J=Ct({},J||c.value),typeof M=="string"){const b=Wa(n,M,J.path),P=t.resolve({path:b.path},J),L=i.createHref(b.fullPath);return Ct(b,P,{params:g(P.params),hash:is(b.hash),redirectedFrom:void 0,href:L})}let Y;if(M.path!=null)Y=Ct({},M,{path:Wa(n,M.path,J.path).path});else{const b=Ct({},M.params);for(const P in b)b[P]==null&&delete b[P];Y=Ct({},M,{params:m(b)}),J.params=m(J.params)}const et=t.resolve(Y,J),Et=M.hash||"";et.params=f(g(et.params));const xt=P1(r,Ct({},M,{hash:b1(Et),path:et.path})),_=i.createHref(xt);return Ct({fullPath:xt,hash:Et,query:r===wf?iw(M.query):M.query||{}},et,{redirectedFrom:void 0,href:_})}function V(M){return typeof M=="string"?Wa(n,M,c.value.path):Ct({},M)}function F(M,J){if(h!==M)return Kr(8,{from:J,to:M})}function z(M){return T(M)}function tt(M){return z(Ct(V(M),{replace:!0}))}function G(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let et=typeof Y=="function"?Y(M):Y;return typeof et=="string"&&(et=et.includes("?")||et.includes("#")?et=V(et):{path:et},et.params={}),Ct({query:M.query,hash:M.hash,params:et.path!=null?{}:M.params},et)}}function T(M,J){const Y=h=x(M),et=c.value,Et=M.state,xt=M.force,_=M.replace===!0,b=G(Y);if(b)return T(Ct(V(b),{state:typeof b=="object"?Ct({},Et,b.state):Et,force:xt,replace:_}),J||Y);const P=Y;P.redirectedFrom=J;let L;return!xt&&C1(r,et,Y)&&(L=Kr(16,{to:P,from:et}),De(et,et,!0,!1)),(L?Promise.resolve(L):A(P,et)).catch(N=>cn(N)?cn(N,2)?N:Ue(N):ut(N,P,et)).then(N=>{if(N){if(cn(N,2))return T(Ct({replace:_},V(N.to),{state:typeof N.to=="object"?Ct({},Et,N.to.state):Et,force:xt}),J||P)}else N=R(P,et,!0,_,Et);return I(P,et,N),N})}function y(M,J){const Y=F(M,J);return Y?Promise.reject(Y):Promise.resolve()}function v(M){const J=wn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function A(M,J){let Y;const[et,Et,xt]=dw(M,J);Y=Qa(et.reverse(),"beforeRouteLeave",M,J);for(const b of et)b.leaveGuards.forEach(P=>{Y.push(Vn(P,M,J))});const _=y.bind(null,M,J);return Y.push(_),Jt(Y).then(()=>{Y=[];for(const b of s.list())Y.push(Vn(b,M,J));return Y.push(_),Jt(Y)}).then(()=>{Y=Qa(Et,"beforeRouteUpdate",M,J);for(const b of Et)b.updateGuards.forEach(P=>{Y.push(Vn(P,M,J))});return Y.push(_),Jt(Y)}).then(()=>{Y=[];for(const b of xt)if(b.beforeEnter)if(We(b.beforeEnter))for(const P of b.beforeEnter)Y.push(Vn(P,M,J));else Y.push(Vn(b.beforeEnter,M,J));return Y.push(_),Jt(Y)}).then(()=>(M.matched.forEach(b=>b.enterCallbacks={}),Y=Qa(xt,"beforeRouteEnter",M,J,v),Y.push(_),Jt(Y))).then(()=>{Y=[];for(const b of a.list())Y.push(Vn(b,M,J));return Y.push(_),Jt(Y)}).catch(b=>cn(b,8)?b:Promise.reject(b))}function I(M,J,Y){l.list().forEach(et=>v(()=>et(M,J,Y)))}function R(M,J,Y,et,Et){const xt=F(M,J);if(xt)return xt;const _=J===Pn,b=xr?history.state:{};Y&&(et||_?i.replace(M.fullPath,Ct({scroll:_&&b&&b.scroll},Et)):i.push(M.fullPath,Et)),c.value=M,De(M,J,Y,_),Ue()}let E;function ie(){E||(E=i.listen((M,J,Y)=>{if(!Ye.listening)return;const et=x(M),Et=G(et);if(Et){T(Ct(Et,{replace:!0}),et).catch($i);return}h=et;const xt=c.value;xr&&L1(df(xt.fullPath,Y.delta),sa()),A(et,xt).catch(_=>cn(_,12)?_:cn(_,2)?(T(_.to,et).then(b=>{cn(b,20)&&!Y.delta&&Y.type===ss.pop&&i.go(-1,!1)}).catch($i),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),ut(_,et,xt))).then(_=>{_=_||R(et,xt,!1),_&&(Y.delta&&!cn(_,8)?i.go(-Y.delta,!1):Y.type===ss.pop&&cn(_,20)&&i.go(-1,!1)),I(et,xt,_)}).catch($i)}))}let ht=Ii(),yt=Ii(),gt;function ut(M,J,Y){Ue(M);const et=yt.list();return et.length?et.forEach(Et=>Et(M,J,Y)):console.error(M),Promise.reject(M)}function Ce(){return gt&&c.value!==Pn?Promise.resolve():new Promise((M,J)=>{ht.add([M,J])})}function Ue(M){return gt||(gt=!M,ie(),ht.list().forEach(([J,Y])=>M?Y(M):J()),ht.reset()),M}function De(M,J,Y,et){const{scrollBehavior:Et}=e;if(!xr||!Et)return Promise.resolve();const xt=!Y&&F1(df(M.fullPath,0))||(et||!Y)&&history.state&&history.state.scroll||null;return bm().then(()=>Et(M,J,xt)).then(_=>_&&M1(_)).catch(_=>ut(_,M,J))}const $t=M=>i.go(M);let Bt;const wn=new Set,Ye={currentRoute:c,listening:!0,addRoute:w,removeRoute:C,hasRoute:O,getRoutes:k,resolve:x,options:e,push:z,replace:tt,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:s.add,beforeResolve:a.add,afterEach:l.add,onError:yt.add,isReady:Ce,install(M){const J=this;M.component("RouterLink",lw),M.component("RouterView",cp),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>be(c)}),xr&&!Bt&&c.value===Pn&&(Bt=!0,z(i.location).catch(Et=>{}));const Y={};for(const Et in Pn)Object.defineProperty(Y,Et,{get:()=>c.value[Et],enumerable:!0});M.provide(Oc,J),M.provide(Nc,mm(Y)),M.provide(kl,c);const et=M.unmount;wn.add(M),M.unmount=function(){wn.delete(M),wn.size<1&&(h=Pn,E&&E(),E=null,c.value=Pn,Bt=!1,gt=!1),et()}}};function Jt(M){return M.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return Ye}function dw(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const l=t.matched[a];l&&(e.matched.find(h=>Hr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Hr(h,c))||i.push(c))}return[n,r,i]}function mw(){return Ke(Nc)}const pw={class:"desktop",id:"header-desktop"},gw={class:"header-wrapper"},_w={class:"header-title"},yw={class:"menu"},vw={class:"menu-inner"},Ew=W("span",{class:"menu-item delimiter"},null,-1),ww=W("div",{class:"search-dropdown desktop"},[W("div",{id:"search-dropdown-desktop"})],-1),bw=W("div",{class:"search-dropdown mobile"},[W("div",{id:"search-dropdown-mobile"})],-1),Tw={class:"header-container"},Aw={class:"header-wrapper"},Iw={class:"header-title"},Rw=W("span",null,null,-1),Sw=W("span",null,null,-1),Pw=W("span",null,null,-1),Cw=[Rw,Sw,Pw],xw=W("div",{class:"search-dropdown desktop"},[W("div",{id:"search-dropdown-desktop"})],-1),kw=W("div",{class:"search-dropdown mobile"},[W("div",{id:"search-dropdown-mobile"})],-1),Vw={__name:"Header",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=mw(),n=["Albums","Tags"],r=oe(!1),i=iE(e,"modelValue"),s=new h1,a=()=>{r.value=!r.value};return cr(t,()=>{r.value=!1}),(l,c)=>{const h=dr("router-link"),f=dr("font-awesome-icon");return Zt(),te(ne,null,[W("div",{id:"mask",class:en({blur:r.value}),onClick:a},null,2),W("header",pw,[W("div",gw,[W("div",_w,[St(h,{to:"/"},{default:ir(()=>[Re("AimerVerse")]),_:1})]),W("div",yw,[W("div",vw,[(Zt(),te(ne,null,es(n,m=>St(h,{key:m,class:"menu-item",to:"/"},{default:ir(()=>[Re(hn(m),1)]),_:2},1024)),64)),Ew,W("button",{onClick:c[0]||(c[0]=Mr((...m)=>be(s).switchTheme&&be(s).switchTheme(...m),["prevent"])),class:"menu-item theme-select","aria-label":"Switch Theme"},[St(f,{icon:["fas","adjust"],"fixed-width":""})])])])])]),ww,bw,Pm(W("header",{class:en(["mobile animate__animated animate__faster",i.value?"animate__fadeInDown":"animate__fadeOutUp"]),id:"header-mobile"},[W("div",Tw,[W("div",Aw,[W("div",Iw,[St(h,{to:"/"},{default:ir(()=>[Re("AimerVerse")]),_:1})]),W("div",{class:en(["menu-toggle",{active:r.value}]),onClick:a,id:"menu-toggle-mobile"},Cw,2)]),W("div",{class:en(["menu",{active:r.value}]),id:"menu-mobile"},[(Zt(),te(ne,null,es(n,m=>St(h,{key:m,class:"menu-item",to:"/"},{default:ir(()=>[Re(hn(m),1)]),_:2},1024)),64)),W("a",{href:"javascript:void(0);",class:"menu-item theme-select",title:"Switch Theme",onClick:c[1]||(c[1]=Mr((...m)=>be(s).switchTheme&&be(s).switchTheme(...m),["prevent"]))},[St(f,{icon:["fas","adjust"],"fixed-width":""})])],2)])],2),[[Wm,i.value]]),xw,kw],64)}}},Dw=W("div",{id:"back-to-top"},null,-1),Ow={class:"wrapper","header-desktop":""},Nw={class:"main"},Mw={class:"container"},Lw={href:"#back-to-top",id:"back-to-top-button",class:"fixed-button",title:"Back to Top"},Fw={__name:"App",setup(e){const t=oe(!0),n=oe(!1);let r=0;const i=()=>{const s=window.scrollY,a=s===0,l=r-s>0;t.value=a||l,n.value=!a&&l,r=s};return _s(()=>{window.addEventListener("scroll",i)}),ea(()=>{window.removeEventListener("scroll",i)}),(s,a)=>{const l=dr("font-awesome-icon");return Zt(),te(ne,null,[Dw,W("div",Ow,[St(Vw,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,8,["modelValue"]),W("main",Nw,[W("div",Mw,[St(be(cp))])]),St(u1),Pm(W("div",{id:"fixed-buttons",style:{display:"block"},class:en(["animate__animated animate__faster",n.value?"animate__fadeIn":"animate__fadeOut"])},[W("a",Lw,[St(l,{icon:["fas","arrow-up"],"fixed-width":""})])],2),[[Wm,n.value]])])],64)}}},Uw="modulepreload",$w=function(e){return"/"+e},Sf={},Bw=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=$w(l),l in Sf)return;Sf[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Uw,c||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},jw={class:"post-meta"},zw={class:"post-author"},qw={class:"author"},Hw=["href"],Kw=W("span",{class:"post-"},"專輯：",-1),Gw=W("span",null,"作詞：",-1),Ww=W("span",null,"作曲：",-1),up={__name:"SongMeta",props:{song:Object},setup(e){return(t,n)=>{const r=dr("font-awesome-icon");return Zt(),te("div",jw,[W("span",zw,[W("span",qw,[St(r,{icon:["fas","music"],"fixed-width":""}),Re(" 歌手："),W("a",{href:"/artist/"+e.song.artist},hn(e.song.artist),9,Hw)])]),Kw,Gw,Ww])}}};var Pf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Qw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},fp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(g=64)),r.push(n[f],n[m],n[g],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Qw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new Yw;const g=s<<2|l>>4;if(r.push(g),h!==64){const w=l<<4&240|h>>2;if(r.push(w),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xw=function(e){const t=hp(e);return fp.encodeByteArray(t,!0)},xo=function(e){return Xw(e).replace(/\./g,"")},Jw=function(e){try{return fp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=()=>Zw().__FIREBASE_DEFAULTS__,eb=()=>{if(typeof process>"u"||typeof Pf>"u")return;const e=Pf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},nb=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Jw(e[1]);return t&&JSON.parse(t)},Mc=()=>{try{return tb()||eb()||nb()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rb=e=>{var t,n;return(n=(t=Mc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ib=e=>{const t=rb(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},dp=()=>{var e;return(e=Mc())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[xo(JSON.stringify(n)),xo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lb(){var e;const t=(e=Mc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cb(){return!lb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ub(){try{return typeof indexedDB=="object"}catch{return!1}}function hb(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="FirebaseError";class ri extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=fb,Object.setPrototypeOf(this,ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mp.prototype.create)}}class mp{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?db(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ri(i,l,r)}}function db(e,t){return e.replace(mb,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const mb=/\{\$([^}]+)}/g;function Vl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Cf(s)&&Cf(a)){if(!Vl(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){return e&&e._delegate?e._delegate:e}class os{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new sb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_b(t))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=tr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tr){return this.instances.has(t)}getOptions(t=tr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gb(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tr){return this.component?this.component.multipleInstances?t:tr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gb(e){return e===tr?void 0:e}function _b(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new pb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(At||(At={}));const vb={debug:At.DEBUG,verbose:At.VERBOSE,info:At.INFO,warn:At.WARN,error:At.ERROR,silent:At.SILENT},Eb=At.INFO,wb={[At.DEBUG]:"log",[At.VERBOSE]:"log",[At.INFO]:"info",[At.WARN]:"warn",[At.ERROR]:"error"},bb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=wb[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pp{constructor(t){this.name=t,this._logLevel=Eb,this._logHandler=bb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in At))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,At.DEBUG,...t),this._logHandler(this,At.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,At.VERBOSE,...t),this._logHandler(this,At.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,At.INFO,...t),this._logHandler(this,At.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,At.WARN,...t),this._logHandler(this,At.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,At.ERROR,...t),this._logHandler(this,At.ERROR,...t)}}const Tb=(e,t)=>t.some(n=>e instanceof n);let xf,kf;function Ab(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ib(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,Dl=new WeakMap,_p=new WeakMap,Ya=new WeakMap,Lc=new WeakMap;function Rb(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Mn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&gp.set(n,e)}).catch(()=>{}),Lc.set(t,e),t}function Sb(e){if(Dl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Dl.set(e,t)}let Ol={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_p.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pb(e){Ol=e(Ol)}function Cb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xa(this),t,...n);return _p.set(r,t.sort?t.sort():[t]),Mn(r)}:Ib().includes(e)?function(...t){return e.apply(Xa(this),t),Mn(gp.get(this))}:function(...t){return Mn(e.apply(Xa(this),t))}}function xb(e){return typeof e=="function"?Cb(e):(e instanceof IDBTransaction&&Sb(e),Tb(e,Ab())?new Proxy(e,Ol):e)}function Mn(e){if(e instanceof IDBRequest)return Rb(e);if(Ya.has(e))return Ya.get(e);const t=xb(e);return t!==e&&(Ya.set(e,t),Lc.set(t,e)),t}const Xa=e=>Lc.get(e);function kb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),l=Mn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Mn(a.result),c.oldVersion,c.newVersion,Mn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Vb=["get","getKey","getAll","getAllKeys","count"],Db=["put","add","delete","clear"],Ja=new Map;function Vf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ja.get(t))return Ja.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Db.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vb.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return Ja.set(t,s),s}Pb(e=>({...e,get:(t,n,r)=>Vf(t,n)||e.get(t,n,r),has:(t,n)=>!!Vf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Nl="@firebase/app",Df="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new pp("@firebase/app"),Mb="@firebase/app-compat",Lb="@firebase/analytics-compat",Fb="@firebase/analytics",Ub="@firebase/app-check-compat",$b="@firebase/app-check",Bb="@firebase/auth",jb="@firebase/auth-compat",zb="@firebase/database",qb="@firebase/database-compat",Hb="@firebase/functions",Kb="@firebase/functions-compat",Gb="@firebase/installations",Wb="@firebase/installations-compat",Qb="@firebase/messaging",Yb="@firebase/messaging-compat",Xb="@firebase/performance",Jb="@firebase/performance-compat",Zb="@firebase/remote-config",tT="@firebase/remote-config-compat",eT="@firebase/storage",nT="@firebase/storage-compat",rT="@firebase/firestore",iT="@firebase/vertexai-preview",sT="@firebase/firestore-compat",oT="firebase",aT="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="[DEFAULT]",lT={[Nl]:"fire-core",[Mb]:"fire-core-compat",[Fb]:"fire-analytics",[Lb]:"fire-analytics-compat",[$b]:"fire-app-check",[Ub]:"fire-app-check-compat",[Bb]:"fire-auth",[jb]:"fire-auth-compat",[zb]:"fire-rtdb",[qb]:"fire-rtdb-compat",[Hb]:"fire-fn",[Kb]:"fire-fn-compat",[Gb]:"fire-iid",[Wb]:"fire-iid-compat",[Qb]:"fire-fcm",[Yb]:"fire-fcm-compat",[Xb]:"fire-perf",[Jb]:"fire-perf-compat",[Zb]:"fire-rc",[tT]:"fire-rc-compat",[eT]:"fire-gcs",[nT]:"fire-gcs-compat",[rT]:"fire-fst",[sT]:"fire-fst-compat",[iT]:"fire-vertex","fire-js":"fire-js",[oT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,cT=new Map,Ll=new Map;function Of(e,t){try{e.container.addComponent(t)}catch(n){mr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Vo(e){const t=e.name;if(Ll.has(t))return mr.debug(`There were multiple attempts to register component ${t}.`),!1;Ll.set(t,e);for(const n of ko.values())Of(n,e);for(const n of cT.values())Of(n,e);return!0}function uT(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new mp("app","Firebase",hT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=aT;function yp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ml,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=dp()),!n)throw Ln.create("no-options");const s=ko.get(i);if(s){if(Vl(n,s.options)&&Vl(r,s.config))return s;throw Ln.create("duplicate-app",{appName:i})}const a=new yb(i);for(const c of Ll.values())a.addComponent(c);const l=new fT(n,r,a);return ko.set(i,l),l}function mT(e=Ml){const t=ko.get(e);if(!t&&e===Ml&&dp())return yp();if(!t)throw Ln.create("no-app",{appName:e});return t}function Br(e,t,n){var r;let i=(r=lT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mr.warn(l.join(" "));return}Vo(new os(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="firebase-heartbeat-database",gT=1,as="firebase-heartbeat-store";let Za=null;function vp(){return Za||(Za=kb(pT,gT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ln.create("idb-open",{originalErrorMessage:e.message})})),Za}async function _T(e){try{const n=(await vp()).transaction(as),r=await n.objectStore(as).get(Ep(e));return await n.done,r}catch(t){if(t instanceof ri)mr.warn(t.message);else{const n=Ln.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mr.warn(n.message)}}}async function Nf(e,t){try{const r=(await vp()).transaction(as,"readwrite");await r.objectStore(as).put(t,Ep(e)),await r.done}catch(n){if(n instanceof ri)mr.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function Ep(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=1024,vT=30*24*60*60*1e3;class ET{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mf();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=vT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mf(),{heartbeatsToSend:r,unsentEntries:i}=wT(this._heartbeatsCache.heartbeats),s=xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Mf(){return new Date().toISOString().substring(0,10)}function wT(e,t=yT){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Lf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ub()?hb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _T(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Lf(e){return xo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(e){Vo(new os("platform-logger",t=>new Ob(t),"PRIVATE")),Vo(new os("heartbeat",t=>new ET(t),"PRIVATE")),Br(Nl,Df,e),Br(Nl,Df,"esm2017"),Br("fire-js","")}TT("");var AT="firebase",IT="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(AT,IT,"app");var Ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ur,wp;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(A,I,R){for(var E=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)E[ie-2]=arguments[ie];return y.prototype[I].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,v){v||(v=0);var A=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)A[I]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(I=0;16>I;++I)A[I]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],I=T.g[2];var R=T.g[3],E=y+(R^v&(I^R))+A[0]+3614090360&4294967295;y=v+(E<<7&4294967295|E>>>25),E=R+(I^y&(v^I))+A[1]+3905402710&4294967295,R=y+(E<<12&4294967295|E>>>20),E=I+(v^R&(y^v))+A[2]+606105819&4294967295,I=R+(E<<17&4294967295|E>>>15),E=v+(y^I&(R^y))+A[3]+3250441966&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(R^v&(I^R))+A[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=R+(I^y&(v^I))+A[5]+1200080426&4294967295,R=y+(E<<12&4294967295|E>>>20),E=I+(v^R&(y^v))+A[6]+2821735955&4294967295,I=R+(E<<17&4294967295|E>>>15),E=v+(y^I&(R^y))+A[7]+4249261313&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(R^v&(I^R))+A[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=R+(I^y&(v^I))+A[9]+2336552879&4294967295,R=y+(E<<12&4294967295|E>>>20),E=I+(v^R&(y^v))+A[10]+4294925233&4294967295,I=R+(E<<17&4294967295|E>>>15),E=v+(y^I&(R^y))+A[11]+2304563134&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(R^v&(I^R))+A[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=R+(I^y&(v^I))+A[13]+4254626195&4294967295,R=y+(E<<12&4294967295|E>>>20),E=I+(v^R&(y^v))+A[14]+2792965006&4294967295,I=R+(E<<17&4294967295|E>>>15),E=v+(y^I&(R^y))+A[15]+1236535329&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(I^R&(v^I))+A[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=R+(v^I&(y^v))+A[6]+3225465664&4294967295,R=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(R^y))+A[11]+643717713&4294967295,I=R+(E<<14&4294967295|E>>>18),E=v+(R^y&(I^R))+A[0]+3921069994&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(I^R&(v^I))+A[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=R+(v^I&(y^v))+A[10]+38016083&4294967295,R=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(R^y))+A[15]+3634488961&4294967295,I=R+(E<<14&4294967295|E>>>18),E=v+(R^y&(I^R))+A[4]+3889429448&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(I^R&(v^I))+A[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=R+(v^I&(y^v))+A[14]+3275163606&4294967295,R=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(R^y))+A[3]+4107603335&4294967295,I=R+(E<<14&4294967295|E>>>18),E=v+(R^y&(I^R))+A[8]+1163531501&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(I^R&(v^I))+A[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=R+(v^I&(y^v))+A[2]+4243563512&4294967295,R=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(R^y))+A[7]+1735328473&4294967295,I=R+(E<<14&4294967295|E>>>18),E=v+(R^y&(I^R))+A[12]+2368359562&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(v^I^R)+A[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=R+(y^v^I)+A[8]+2272392833&4294967295,R=y+(E<<11&4294967295|E>>>21),E=I+(R^y^v)+A[11]+1839030562&4294967295,I=R+(E<<16&4294967295|E>>>16),E=v+(I^R^y)+A[14]+4259657740&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(v^I^R)+A[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=R+(y^v^I)+A[4]+1272893353&4294967295,R=y+(E<<11&4294967295|E>>>21),E=I+(R^y^v)+A[7]+4139469664&4294967295,I=R+(E<<16&4294967295|E>>>16),E=v+(I^R^y)+A[10]+3200236656&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(v^I^R)+A[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=R+(y^v^I)+A[0]+3936430074&4294967295,R=y+(E<<11&4294967295|E>>>21),E=I+(R^y^v)+A[3]+3572445317&4294967295,I=R+(E<<16&4294967295|E>>>16),E=v+(I^R^y)+A[6]+76029189&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(v^I^R)+A[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=R+(y^v^I)+A[12]+3873151461&4294967295,R=y+(E<<11&4294967295|E>>>21),E=I+(R^y^v)+A[15]+530742520&4294967295,I=R+(E<<16&4294967295|E>>>16),E=v+(I^R^y)+A[2]+3299628645&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(I^(v|~R))+A[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=R+(v^(y|~I))+A[7]+1126891415&4294967295,R=y+(E<<10&4294967295|E>>>22),E=I+(y^(R|~v))+A[14]+2878612391&4294967295,I=R+(E<<15&4294967295|E>>>17),E=v+(R^(I|~y))+A[5]+4237533241&4294967295,v=I+(E<<21&4294967295|E>>>11),E=y+(I^(v|~R))+A[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=R+(v^(y|~I))+A[3]+2399980690&4294967295,R=y+(E<<10&4294967295|E>>>22),E=I+(y^(R|~v))+A[10]+4293915773&4294967295,I=R+(E<<15&4294967295|E>>>17),E=v+(R^(I|~y))+A[1]+2240044497&4294967295,v=I+(E<<21&4294967295|E>>>11),E=y+(I^(v|~R))+A[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=R+(v^(y|~I))+A[15]+4264355552&4294967295,R=y+(E<<10&4294967295|E>>>22),E=I+(y^(R|~v))+A[6]+2734768916&4294967295,I=R+(E<<15&4294967295|E>>>17),E=v+(R^(I|~y))+A[13]+1309151649&4294967295,v=I+(E<<21&4294967295|E>>>11),E=y+(I^(v|~R))+A[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=R+(v^(y|~I))+A[11]+3174756917&4294967295,R=y+(E<<10&4294967295|E>>>22),E=I+(y^(R|~v))+A[2]+718787259&4294967295,I=R+(E<<15&4294967295|E>>>17),E=v+(R^(I|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,A=this.B,I=this.h,R=0;R<y;){if(I==0)for(;R<=v;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<y;)if(A[I++]=T.charCodeAt(R++),I==this.blockSize){i(this,A),I=0;break}}else for(;R<y;)if(A[I++]=T[R++],I==this.blockSize){i(this,A),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var A=0;32>A;A+=8)T[v++]=this.g[y]>>>A&255;return T};function s(T,y){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function a(T,y){this.h=y;for(var v=[],A=!0,I=T.length-1;0<=I;I--){var R=T[I]|0;A&&R==y||(v[I]=R,A=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?s(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return O(h(-T));for(var y=[],v=1,A=0;T>=v;A++)y[A]=T/v|0,v*=4294967296;return new a(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return O(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),A=m,I=0;I<T.length;I+=8){var R=Math.min(8,T.length-I),E=parseInt(T.substring(I,I+R),y);8>R?(R=h(Math.pow(y,R)),A=A.j(R).add(h(E))):(A=A.j(v),A=A.add(h(E)))}return A}var m=c(0),g=c(1),w=c(16777216);e=a.prototype,e.m=function(){if(k(this))return-O(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var A=this.i(v);T+=(0<=A?A:4294967296+A)*y,y*=4294967296}return T},e.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+O(this).toString(T);for(var y=h(Math.pow(T,6)),v=this,A="";;){var I=z(v,y).g;v=x(v,I.j(y));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=I,C(v))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},e.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}e.l=function(T){return T=x(this,T),k(T)?-1:C(T)?0:1};function O(T){for(var y=T.g.length,v=[],A=0;A<y;A++)v[A]=~T.g[A];return new a(v,~T.h).add(g)}e.abs=function(){return k(this)?O(this):this},e.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0,I=0;I<=y;I++){var R=A+(this.i(I)&65535)+(T.i(I)&65535),E=(R>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);A=E>>>16,R&=65535,E&=65535,v[I]=E<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(T,y){return T.add(O(y))}e.j=function(T){if(C(this)||C(T))return m;if(k(this))return k(T)?O(this).j(O(T)):O(O(this).j(T));if(k(T))return O(this.j(O(T)));if(0>this.l(w)&&0>T.l(w))return h(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],A=0;A<2*y;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var I=0;I<T.g.length;I++){var R=this.i(A)>>>16,E=this.i(A)&65535,ie=T.i(I)>>>16,ht=T.i(I)&65535;v[2*A+2*I]+=E*ht,V(v,2*A+2*I),v[2*A+2*I+1]+=R*ht,V(v,2*A+2*I+1),v[2*A+2*I+1]+=E*ie,V(v,2*A+2*I+1),v[2*A+2*I+2]+=R*ie,V(v,2*A+2*I+2)}for(A=0;A<y;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=y;A<2*y;A++)v[A]=0;return new a(v,0)};function V(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function F(T,y){this.g=T,this.h=y}function z(T,y){if(C(y))throw Error("division by zero");if(C(T))return new F(m,m);if(k(T))return y=z(O(T),y),new F(O(y.g),O(y.h));if(k(y))return y=z(T,O(y)),new F(O(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,A=y;0>=A.l(T);)v=tt(v),A=tt(A);var I=G(v,1),R=G(A,1);for(A=G(A,2),v=G(v,2);!C(A);){var E=R.add(A);0>=E.l(T)&&(I=I.add(v),R=E),A=G(A,1),v=G(v,1)}return y=x(T,I.j(y)),new F(I,y)}for(I=m;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(v),E=R.j(y);k(E)||0<E.l(T);)v-=A,R=h(v),E=R.j(y);C(R)&&(R=g),I=I.add(R),T=x(T,E)}return new F(I,T)}e.A=function(T){return z(this,T).h},e.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)&T.i(A);return new a(v,this.h&T.h)},e.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)|T.i(A);return new a(v,this.h|T.h)},e.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)^T.i(A);return new a(v,this.h^T.h)};function tt(T){for(var y=T.g.length+1,v=[],A=0;A<y;A++)v[A]=T.i(A)<<1|T.i(A-1)>>>31;return new a(v,T.h)}function G(T,y){var v=y>>5;y%=32;for(var A=T.g.length-v,I=[],R=0;R<A;R++)I[R]=0<y?T.i(R+v)>>>y|T.i(R+v+1)<<32-y:T.i(R+v);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,ur=a}).apply(typeof Ff<"u"?Ff:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bp,Tp,Ci,Ap,go,Fl,Ip,Rp,Sp;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)t:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break t;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&t(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var D=d++;return{value:u(D,o[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,D){for(var K=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)K[Vt-2]=arguments[Vt];return u.prototype[S].apply(p,K)}}function k(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function O(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,D=p.length||0;o.length=S+D;for(let K=0;K<D;K++)o[S+K]=p[K]}else o.push(p)}}class x{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var tt=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function G(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Ce;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ie{constructor(){this.h=this.g=null}add(u,d){const p=ht.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ht=new x(()=>new yt,o=>o.reset());class yt{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,ut=!1,Ce=new ie,Ue=()=>{const o=l.Promise.resolve(void 0);gt=()=>{o.then(De)}};var De=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){R(d)}var u=ht;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ut=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Bt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var wn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Ye(o,u){if(Bt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(tt){t:{try{z(u.nodeName);var S=!0;break t}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Jt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ye.aa.h.call(this)}}C(Ye,Bt);var Jt={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++J,this.da=this.fa=!1}function et(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Et(o){this.src=o,this.g={},this.h=0}Et.prototype.add=function(o,u,d,p,S){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var K=_(o,u,p,S);return-1<K?(u=o[K],d||(u.fa=!1)):(u=new Y(u,this.src,D,!!p,S),u.fa=d,o.push(u)),u};function xt(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),D;(D=0<=S)&&Array.prototype.splice.call(p,S,1),D&&(et(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _(o,u,d,p){for(var S=0;S<o.length;++S){var D=o[S];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==p)return S}return-1}var b="closure_lm_"+(1e6*Math.random()|0),P={};function L(o,u,d,p,S){if(Array.isArray(u)){for(var D=0;D<u.length;D++)L(o,u[D],d,p,S);return null}return d=ot(d),o&&o[M]?o.K(u,d,h(p)?!!p.capture:!!p,S):N(o,u,d,!1,p,S)}function N(o,u,d,p,S,D){if(!u)throw Error("Invalid event type");var K=h(S)?!!S.capture:!!S,Vt=X(o);if(Vt||(o[b]=Vt=new Et(o)),d=Vt.add(u,d,p,K,D),d.proxy)return d;if(p=q(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)wn||(S=K),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(H(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function q(){function o(d){return u.call(o.src,o.listener,d)}const u=B;return o}function Q(o,u,d,p,S){if(Array.isArray(u))for(var D=0;D<u.length;D++)Q(o,u[D],d,p,S);else p=h(p)?!!p.capture:!!p,d=ot(d),o&&o[M]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],d=_(D,d,p,S),-1<d&&(et(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=X(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,d,p,S)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[M])xt(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(H(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=X(u))?(xt(d,o),d.h==0&&(d.src=null,u[b]=null)):et(o)}}}function H(o){return o in P?P[o]:P[o]="on"+o}function B(o,u){if(o.da)o=!0;else{u=new Ye(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&j(o),o=d.call(p,u)}return o}function X(o){return o=o[b],o instanceof Et?o:null}var at="__closure_events_fn_"+(1e9*Math.random()>>>0);function ot(o){return typeof o=="function"?o:(o[at]||(o[at]=function(u){return o.handleEvent(u)}),o[at])}function it(){$t.call(this),this.i=new Et(this),this.M=this,this.F=null}C(it,$t),it.prototype[M]=!0,it.prototype.removeEventListener=function(o,u,d,p){Q(this,o,u,d,p)};function ct(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Bt(u,o);else if(u instanceof Bt)u.target=u.target||o;else{var S=u;u=new Bt(p,o),A(u,S)}if(S=!0,d)for(var D=d.length-1;0<=D;D--){var K=u.g=d[D];S=bt(K,p,!0,u)&&S}if(K=u.g=o,S=bt(K,p,!0,u)&&S,S=bt(K,p,!1,u)&&S,d)for(D=0;D<d.length;D++)K=u.g=d[D],S=bt(K,p,!1,u)&&S}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)et(d[p]);delete o.g[u],o.h--}}this.F=null},it.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},it.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function bt(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,D=0;D<u.length;++D){var K=u[D];if(K&&!K.da&&K.capture==d){var Vt=K.listener,se=K.ha||K.src;K.fa&&xt(o.i,K),S=Vt.call(se,p)!==!1&&S}}return S&&!p.defaultPrevented}function kt(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ht(o){o.g=kt(()=>{o.g=null,o.i&&(o.i=!1,Ht(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class xe extends $t{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ht(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(o){$t.call(this),this.h=o,this.g={}}C(Oe,$t);var ci=[];function bn(o){G(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),bn(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var br=l.JSON.stringify,ve=l.JSON.parse,Ne=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Tr(){}Tr.prototype.h=null;function mu(o){return o.h||(o.h=o.i())}function pu(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function va(){Bt.call(this,"d")}C(va,Bt);function Ea(){Bt.call(this,"c")}C(Ea,Bt);var Wn={},gu=null;function Ps(){return gu=gu||new it}Wn.La="serverreachability";function _u(o){Bt.call(this,Wn.La,o)}C(_u,Bt);function hi(o){const u=Ps();ct(u,new _u(u))}Wn.STAT_EVENT="statevent";function yu(o,u){Bt.call(this,Wn.STAT_EVENT,o),this.stat=u}C(yu,Bt);function Ee(o){const u=Ps();ct(u,new yu(u,o))}Wn.Ma="timingevent";function vu(o,u){Bt.call(this,Wn.Ma,o),this.size=u}C(vu,Bt);function fi(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function Kg(o,u,d,p,S,D){o.info(function(){if(o.g)if(D)for(var K="",Vt=D.split("&"),se=0;se<Vt.length;se++){var It=Vt[se].split("=");if(1<It.length){var fe=It[0];It=It[1];var de=fe.split("_");K=2<=de.length&&de[1]=="type"?K+(fe+"="+It+"&"):K+(fe+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+K})}function Gg(o,u,d,p,S,D,K){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+D+" "+K})}function Ar(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Qg(o,d)+(p?" "+p:"")})}function Wg(o,u){o.info(function(){return"TIMEOUT: "+u})}di.prototype.info=function(){};function Qg(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var D=S[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<S.length;K++)S[K]=""}}}}return br(d)}catch{return u}}var Cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wa;function xs(){}C(xs,Tr),xs.prototype.g=function(){return new XMLHttpRequest},xs.prototype.i=function(){return{}},wa=new xs;function Tn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wu}function wu(){this.i=null,this.g="",this.h=!1}var bu={},ba={};function Ta(o,u,d){o.L=1,o.v=Os(an(u)),o.m=d,o.P=!0,Tu(o,null)}function Tu(o,u){o.F=Date.now(),ks(o),o.A=an(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Lu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new wu,o.g=eh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new xe(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(ci[0]=S.toString()),S=ci);for(var D=0;D<S.length;D++){var K=L(d,S[D],p||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),hi(),Kg(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const u=this.M;u&&ln(o)==3?u.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)t:{const de=ln(this.g);var u=this.g.Ba();const Sr=this.g.Z();if(!(3>de)&&(de!=3||this.g&&(this.h.h||this.g.oa()||qu(this.g)))){this.J||de!=4||u==7||(u==8||0>=Sr?hi(3):hi(2)),Aa(this);var d=this.g.Z();this.X=d;e:if(Au(this)){var p=qu(this.g);o="";var S=p.length,D=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),mi(this);var K="";break e}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(D&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,Gg(this.i,this.u,this.A,this.l,this.R,de,d),this.o){if(this.T&&!this.K){e:{if(this.g){var Vt,se=this.g;if((Vt=se.g?se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Vt)){var It=Vt;break e}}It=null}if(d=It)Ar(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ia(this,d);else{this.o=!1,this.s=3,Ee(12),Qn(this),mi(this);break t}}if(this.P){d=!0;let $e;for(;!this.J&&this.C<K.length;)if($e=Yg(this,K),$e==ba){de==4&&(this.s=4,Ee(14),d=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if($e==bu){this.s=4,Ee(15),Ar(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Ar(this.i,this.l,$e,null),Ia(this,$e);if(Au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||K.length!=0||this.h.h||(this.s=1,Ee(16),d=!1),this.o=this.o&&d,!d)Ar(this.i,this.l,K,"[Invalid Chunked Response]"),Qn(this),mi(this);else if(0<K.length&&!this.W){this.W=!0;var fe=this.j;fe.g==this&&fe.ba&&!fe.M&&(fe.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),ka(fe),fe.M=!0,Ee(11))}}else Ar(this.i,this.l,K,null),Ia(this,K);de==4&&Qn(this),this.o&&!this.J&&(de==4?Xu(this.j,this):(this.o=!1,ks(this)))}else d_(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),Qn(this),mi(this)}}}catch{}finally{}};function Au(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Yg(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?ba:(d=Number(u.substring(d,p)),isNaN(d)?bu:(p+=1,p+d>u.length?ba:(u=u.slice(p,p+d),o.C=p+d,u)))}Tn.prototype.cancel=function(){this.J=!0,Qn(this)};function ks(o){o.S=Date.now()+o.I,Iu(o,o.I)}function Iu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=fi(g(o.ba,o),u)}function Aa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Wg(this.i,this.A),this.L!=2&&(hi(),Ee(17)),Qn(this),this.s=2,mi(this)):Iu(this,this.S-o)};function mi(o){o.j.G==0||o.J||Xu(o.j,o)}function Qn(o){Aa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,bn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ia(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ra(d.h,o))){if(!o.K&&Ra(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Us(d),Ls(d);else break t;xa(d),Ee(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=fi(g(d.Za,d),6e3));if(1>=Pu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Xn(d,11)}else if((o.K||d.g==o)&&Us(d),!V(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let It=S[u];if(d.T=It[0],It=It[1],d.G==2)if(It[0]=="c"){d.K=It[1],d.ia=It[2];const fe=It[3];fe!=null&&(d.la=fe,d.j.info("VER="+d.la));const de=It[4];de!=null&&(d.Aa=de,d.j.info("SVER="+d.Aa));const Sr=It[5];Sr!=null&&typeof Sr=="number"&&0<Sr&&(p=1.5*Sr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const $e=o.g;if($e){const Bs=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var D=p.h;D.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Sa(D,D.h),D.h=null))}if(p.D){const Va=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;Va&&(p.ya=Va,Nt(p.I,p.D,Va))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var K=o;if(p.qa=th(p,p.J?p.ia:null,p.W),K.K){Cu(p.h,K);var Vt=K,se=p.L;se&&(Vt.I=se),Vt.B&&(Aa(Vt),ks(Vt)),p.g=K}else Qu(p);0<d.i.length&&Fs(d)}else It[0]!="stop"&&It[0]!="close"||Xn(d,7);else d.G==3&&(It[0]=="stop"||It[0]=="close"?It[0]=="stop"?Xn(d,7):Ca(d):It[0]!="noop"&&d.l&&d.l.ta(It),d.v=0)}}hi(4)}catch{}}var Xg=class{constructor(o,u){this.g=o,this.map=u}};function Ru(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Su(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pu(o){return o.h?1:o.g?o.g.size:0}function Ra(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Sa(o,u){o.g?o.g.add(u):o.h=u}function Cu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ru.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return k(o.i)}function Jg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Zg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function ku(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Zg(o),p=Jg(o),S=p.length,D=0;D<S;D++)u.call(void 0,p[D],d&&d[D],o)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function t_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var D=o[d].substring(0,p);S=o[d].substring(p+1)}else D=o[d];u(D,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Yn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Yn){this.h=o.h,Vs(this,o.j),this.o=o.o,this.g=o.g,Ds(this,o.s),this.l=o.l;var u=o.i,d=new _i;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Du(this,d),this.m=o.m}else o&&(u=String(o).match(Vu))?(this.h=!1,Vs(this,u[1]||"",!0),this.o=pi(u[2]||""),this.g=pi(u[3]||"",!0),Ds(this,u[4]),this.l=pi(u[5]||"",!0),Du(this,u[6]||"",!0),this.m=pi(u[7]||"")):(this.h=!1,this.i=new _i(null,this.h))}Yn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gi(u,Ou,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gi(u,Ou,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gi(d,d.charAt(0)=="/"?r_:n_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gi(d,s_)),o.join("")};function an(o){return new Yn(o)}function Vs(o,u,d){o.j=d?pi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ds(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Du(o,u,d){u instanceof _i?(o.i=u,o_(o.i,o.h)):(d||(u=gi(u,i_)),o.i=new _i(u,o.h))}function Nt(o,u,d){o.i.set(u,d)}function Os(o){return Nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function pi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gi(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,e_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function e_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ou=/[#\/\?@]/g,n_=/[#\?:]/g,r_=/[#\?]/g,i_=/[#\?@]/g,s_=/#/g;function _i(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&t_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}e=_i.prototype,e.add=function(o,u){An(this),this.i=null,o=Ir(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Nu(o,u){An(o),u=Ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Mu(o,u){return An(o),u=Ir(o,u),o.g.has(u)}e.forEach=function(o,u){An(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},e.na=function(){An(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let D=0;D<S.length;D++)d.push(u[p])}return d},e.V=function(o){An(this);let u=[];if(typeof o=="string")Mu(this,o)&&(u=u.concat(this.g.get(Ir(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},e.set=function(o,u){return An(this),this.i=null,o=Ir(this,o),Mu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Lu(o,u,d){Nu(o,u),0<d.length&&(o.i=null,o.g.set(Ir(o,u),k(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const D=encodeURIComponent(String(p)),K=this.V(p);for(p=0;p<K.length;p++){var S=D;K[p]!==""&&(S+="="+encodeURIComponent(String(K[p]))),o.push(S)}}return this.i=o.join("&")};function Ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function o_(o,u){u&&!o.j&&(An(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(Nu(this,p),Lu(this,S,d))},o)),o.j=u}function a_(o,u){const d=new di;if(l.Image){const p=new Image;p.onload=w(In,d,"TestLoadImage: loaded",!0,u,p),p.onerror=w(In,d,"TestLoadImage: error",!1,u,p),p.onabort=w(In,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=w(In,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function l_(o,u){const d=new di,p=new AbortController,S=setTimeout(()=>{p.abort(),In(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(D=>{clearTimeout(S),D.ok?In(d,"TestPingServer: ok",!0,u):In(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),In(d,"TestPingServer: error",!1,u)})}function In(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function c_(){this.g=new Ne}function u_(o,u,d){const p=d||"";try{ku(o,function(S,D){let K=S;h(S)&&(K=br(S)),u.push(p+D+"="+encodeURIComponent(K))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function yi(o){this.l=o.Ub||null,this.j=o.eb||!1}C(yi,Tr),yi.prototype.g=function(){return new Ns(this.l,this.j)},yi.prototype.i=function(o){return function(){return o}}({});function Ns(o,u){it.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ns,it),e=Ns.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ei(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?vi(this):Ei(this),this.readyState==3&&Fu(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,vi(this))},e.Qa=function(o){this.g&&(this.response=o,vi(this))},e.ga=function(){this.g&&vi(this)};function vi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ei(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ei(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Uu(o){let u="";return G(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Pa(o,u,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=Uu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Nt(o,u,d))}function zt(o){it.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(zt,it);var h_=/^https?$/i,f_=["POST","PUT"];e=zt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wa.g(),this.v=this.o?mu(this.o):mu(wa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){$u(this,D);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(f_,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of d)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zu(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){$u(this,D)}};function $u(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Bu(o),Ms(o)}function Bu(o){o.A||(o.A=!0,ct(o,"complete"),ct(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ct(this,"complete"),ct(this,"abort"),Ms(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ms(this,!0)),zt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?ju(this):this.bb())},e.bb=function(){ju(this)};function ju(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ln(o)!=4||o.Z()!=2)){if(o.u&&ln(o)==4)kt(o.Ea,0,o);else if(ct(o,"readystatechange"),ln(o)==4){o.h=!1;try{const K=o.Z();t:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var d;if(!(d=u)){var p;if(p=K===0){var S=String(o.D).match(Vu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!h_.test(S?S.toLowerCase():"")}d=p}if(d)ct(o,"complete"),ct(o,"success");else{o.m=6;try{var D=2<ln(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Bu(o)}}finally{Ms(o)}}}}function Ms(o,u){if(o.g){zu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ct(o,"ready");try{d.onreadystatechange=p}catch{}}}function zu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function ln(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ve(u)}};function qu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function d_(o){const u={};o=(o.g&&2<=ln(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(V(o[p]))continue;var d=I(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[S]||[];u[S]=D,D.push(d)}T(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Hu(o){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wi("baseRetryDelayMs",5e3,o),this.cb=wi("retryDelaySeedMs",1e4,o),this.Wa=wi("forwardChannelMaxRetries",2,o),this.wa=wi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ru(o&&o.concurrentRequestLimit),this.Da=new c_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Hu.prototype,e.la=8,e.G=1,e.connect=function(o,u,d,p){Ee(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=th(this,null,this.W),Fs(this)};function Ca(o){if(Ku(o),o.G==3){var u=o.U++,d=an(o.I);if(Nt(d,"SID",o.K),Nt(d,"RID",u),Nt(d,"TYPE","terminate"),bi(o,d),u=new Tn(o,o.j,u),u.L=2,u.v=Os(an(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=eh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ks(u)}Zu(o)}function Ls(o){o.g&&(ka(o),o.g.cancel(),o.g=null)}function Ku(o){Ls(o),o.u&&(l.clearTimeout(o.u),o.u=null),Us(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Fs(o){if(!Su(o.h)&&!o.s){o.s=!0;var u=o.Ga;gt||Ue(),ut||(gt(),ut=!0),Ce.add(u,o),o.B=0}}function m_(o,u){return Pu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=fi(g(o.Ga,o,u),Ju(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Tn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=y(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(S.H=D,D=null),this.P)t:{for(var u=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break t}if(u===4096||d===this.i.length-1){u=d+1;break t}}u=1e3}else u=1e3;u=Wu(this,S,u),d=an(this.I),Nt(d,"RID",o),Nt(d,"CVER",22),this.D&&Nt(d,"X-HTTP-Session-Id",this.D),bi(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(Uu(D)))+"&"+u:this.m&&Pa(d,this.m,D)),Sa(this.h,S),this.Ua&&Nt(d,"TYPE","init"),this.P?(Nt(d,"$req",u),Nt(d,"SID","null"),S.T=!0,Ta(S,d,null)):Ta(S,d,u),this.G=2}}else this.G==3&&(o?Gu(this,o):this.i.length==0||Su(this.h)||Gu(this))};function Gu(o,u){var d;u?d=u.l:d=o.U++;const p=an(o.I);Nt(p,"SID",o.K),Nt(p,"RID",d),Nt(p,"AID",o.T),bi(o,p),o.m&&o.o&&Pa(p,o.m,o.o),d=new Tn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Wu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Sa(o.h,d),Ta(d,p,u)}function bi(o,u){o.H&&G(o.H,function(d,p){Nt(u,p,d)}),o.l&&ku({},function(d,p){Nt(u,p,d)})}function Wu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?g(o.l.Na,o.l,o):null;t:{var S=o.i;let D=-1;for(;;){const K=["count="+d];D==-1?0<d?(D=S[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let Vt=!0;for(let se=0;se<d;se++){let It=S[se].g;const fe=S[se].map;if(It-=D,0>It)D=Math.max(0,S[se].g-100),Vt=!1;else try{u_(fe,K,"req"+It+"_")}catch{p&&p(fe)}}if(Vt){p=K.join("&");break t}}}return o=o.i.splice(0,d),u.D=o,p}function Qu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;gt||Ue(),ut||(gt(),ut=!0),Ce.add(u,o),o.v=0}}function xa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=fi(g(o.Fa,o),Ju(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=fi(g(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ee(10),Ls(this),Yu(this))};function ka(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Yu(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);Nt(u,"RID","rpc"),Nt(u,"SID",o.K),Nt(u,"AID",o.T),Nt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Nt(u,"TO",o.ja),Nt(u,"TYPE","xmlhttp"),bi(o,u),o.m&&o.o&&Pa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Os(an(u)),d.m=null,d.P=!0,Tu(d,o)}e.Za=function(){this.C!=null&&(this.C=null,Ls(this),xa(this),Ee(19))};function Us(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xu(o,u){var d=null;if(o.g==u){Us(o),ka(o),o.g=null;var p=2}else if(Ra(o.h,u))d=u.D,Cu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=Ps(),ct(p,new vu(p,d)),Fs(o)}else Qu(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&m_(o,u)||p==2&&xa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:Xn(o,5);break;case 4:Xn(o,10);break;case 3:Xn(o,6);break;default:Xn(o,2)}}}function Ju(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Xn(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),p=o.Xa;const S=!p;p=new Yn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vs(p,"https"),Os(p),S?a_(p.toString(),d):l_(p.toString(),d)}else Ee(2);o.G=0,o.l&&o.l.sa(u),Zu(o),Ku(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function Zu(o){if(o.G=0,o.ka=[],o.l){const u=xu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function th(o,u,d){var p=d instanceof Yn?an(d):new Yn(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ds(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var D=new Yn(null);p&&Vs(D,p),u&&(D.g=u),S&&Ds(D,S),d&&(D.l=d),p=D}return d=o.D,u=o.ya,d&&u&&Nt(p,d,u),Nt(p,"VER",o.la),bi(o,p),p}function eh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new zt(new yi({eb:d})):new zt(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}e=nh.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function $s(){}$s.prototype.g=function(o,u){return new ke(o,u)};function ke(o,u){it.call(this),this.g=new Hu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!V(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!V(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rr(this)}C(ke,it),ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){Ca(this.g)},ke.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=br(o),o=d);u.i.push(new Xg(u.Ya++,o)),u.G==3&&Fs(u)},ke.prototype.N=function(){this.g.l=null,delete this.j,Ca(this.g),delete this.g,ke.aa.N.call(this)};function rh(o){va.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const d in u){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(rh,va);function ih(){Ea.call(this),this.status=1}C(ih,Ea);function Rr(o){this.g=o}C(Rr,nh),Rr.prototype.ua=function(){ct(this.g,"a")},Rr.prototype.ta=function(o){ct(this.g,new rh(o))},Rr.prototype.sa=function(o){ct(this.g,new ih)},Rr.prototype.ra=function(){ct(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Sp=function(){return new $s},Rp=function(){return Ps()},Ip=Wn,Fl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cs.NO_ERROR=0,Cs.TIMEOUT=8,Cs.HTTP_ERROR=6,go=Cs,Eu.COMPLETE="complete",Ap=Eu,pu.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",it.prototype.listen=it.prototype.K,Ci=pu,Tp=yi,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,bp=zt}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const Uf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new pp("@firebase/firestore");function Ri(){return pr.logLevel}function nt(e,...t){if(pr.logLevel<=At.DEBUG){const n=t.map(Fc);pr.debug(`Firestore (${ii}): ${e}`,...n)}}function _n(e,...t){if(pr.logLevel<=At.ERROR){const n=t.map(Fc);pr.error(`Firestore (${ii}): ${e}`,...n)}}function Wr(e,...t){if(pr.logLevel<=At.WARN){const n=t.map(Fc);pr.warn(`Firestore (${ii}): ${e}`,...n)}}function Fc(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e="Unexpected state"){const t=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: `+e;throw _n(t),new Error(t)}function Ot(e,t){e||ft()}function pt(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends ri{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class RT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pe.UNAUTHENTICATED))}shutdown(){}}class ST{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PT{constructor(t){this.t=t,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fn,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ot(typeof r.accessToken=="string"),new Pp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ot(t===null||typeof t=="string"),new pe(t)}}class CT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new CT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,nt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ot(typeof n.token=="string"),this.R=n.token,new kT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=DT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Rt(e,t){return e<t?-1:e>t?1:0}function Qr(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new rt(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Qt.fromMillis(Date.now())}static fromDate(t){return Qt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Qt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Rt(this.nanoseconds,t.nanoseconds):Rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new mt(t)}static min(){return new mt(new Qt(0,0))}static max(){return new mt(new Qt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,n,r){n===void 0?n=0:n>t.length&&ft(),r===void 0?r=t.length-n:r>t.length-n&&ft(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ls.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ls?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Lt extends ls{construct(t,n,r){return new Lt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new rt(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Lt(n)}static emptyPath(){return new Lt([])}}const OT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends ls{construct(t,n,r){return new ue(t,n,r)}static isValidIdentifier(t){return OT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new rt(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new rt(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new rt(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new rt(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ue(n)}static emptyPath(){return new ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.path=t}static fromPath(t){return new lt(Lt.fromString(t))}static fromName(t){return new lt(Lt.fromString(t).popFirst(5))}static empty(){return new lt(Lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Lt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Lt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new lt(new Lt(t.slice()))}}function NT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=mt.fromTimestamp(r===1e9?new Qt(n+1,0):new Qt(n,r));return new zn(i,lt.empty(),t)}function MT(e){return new zn(e.readTime,e.key,-1)}class zn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(mt.min(),lt.empty(),-1)}static max(){return new zn(mt.max(),lt.empty(),-1)}}function LT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=lt.comparator(e.documentKey,t.documentKey),n!==0?n:Rt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(e){if(e.code!==U.FAILED_PRECONDITION||e.message!==FT)throw e;nt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ft(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):$.reject(n)}static resolve(t){return new $((n,r)=>{n(t)})}static reject(t){return new $((n,r)=>{r(t)})}static waitFor(t){return new $((n,r)=>{let i=0,s=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},c=>r(c))}),a=!0,s===i&&n()})}static or(t){let n=$.resolve(!1);for(const r of t)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new $((r,i)=>{const s=t.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;n(t[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(t,n){return new $((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function $T(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Uc.oe=-1;function oa(e){return e==null}function Do(e){return e===0&&1/e==-1/0}function BT(e){return typeof e=="number"&&Number.isInteger(e)&&!Do(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function si(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,n){this.comparator=t,this.root=n||ae.EMPTY}insert(t,n){return new jt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(t){return new jt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ae.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new io(this.root,t,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new io(this.root,t,this.comparator,!0)}}class io{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ae{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??ae.RED,this.left=i??ae.EMPTY,this.right=s??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new ae(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ft();const t=this.left.check();if(t!==this.right.check())throw ft();return t+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw ft()}get value(){throw ft()}get color(){throw ft()}get left(){throw ft()}get right(){throw ft()}copy(t,n,r,i,s){return this}insert(t,n,r){return new ae(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.comparator=t,this.data=new jt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bf(this.data.getIterator())}getIteratorFrom(t){return new Bf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof he)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new he(this.comparator);return n.data=t,n}}class Bf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.fields=t,t.sort(ue.comparator)}static empty(){return new qe([])}unionWith(t){let n=new he(ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new qe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new kp("Invalid base64 string: "+s):s}}(t);return new ye(n)}static fromUint8Array(t){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new ye(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const jT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(e){if(Ot(!!e),typeof e=="string"){let t=0;const n=jT.exec(e);if(Ot(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Gt(e.seconds),nanos:Gt(e.nanos)}}function Gt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function gr(e){return typeof e=="string"?ye.fromBase64String(e):ye.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bc(e){const t=e.mapValue.fields.__previous_value__;return $c(t)?Bc(t):t}function cs(e){const t=qn(e.mapValue.fields.__local_write_time__.timestampValue);return new Qt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n,r,i,s,a,l,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class us{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof us&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$c(e)?4:qT(e)?9007199254740991:10:ft()}function on(e,t){if(e===t)return!0;const n=_r(e);if(n!==_r(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return cs(e).isEqual(cs(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=qn(i.timestampValue),l=qn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return gr(i.bytesValue).isEqual(gr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Gt(i.geoPointValue.latitude)===Gt(s.geoPointValue.latitude)&&Gt(i.geoPointValue.longitude)===Gt(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Gt(i.integerValue)===Gt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Gt(i.doubleValue),l=Gt(s.doubleValue);return a===l?Do(a)===Do(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Qr(e.arrayValue.values||[],t.arrayValue.values||[],on);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if($f(a)!==$f(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!on(a[c],l[c])))return!1;return!0}(e,t);default:return ft()}}function hs(e,t){return(e.values||[]).find(n=>on(n,t))!==void 0}function Yr(e,t){if(e===t)return 0;const n=_r(e),r=_r(t);if(n!==r)return Rt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rt(e.booleanValue,t.booleanValue);case 2:return function(s,a){const l=Gt(s.integerValue||s.doubleValue),c=Gt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return jf(e.timestampValue,t.timestampValue);case 4:return jf(cs(e),cs(t));case 5:return Rt(e.stringValue,t.stringValue);case 6:return function(s,a){const l=gr(s),c=gr(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Rt(l[h],c[h]);if(f!==0)return f}return Rt(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,a){const l=Rt(Gt(s.latitude),Gt(a.latitude));return l!==0?l:Rt(Gt(s.longitude),Gt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const f=Yr(l[h],c[h]);if(f)return f}return Rt(l.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,a){if(s===so.mapValue&&a===so.mapValue)return 0;if(s===so.mapValue)return 1;if(a===so.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=Rt(c[m],f[m]);if(g!==0)return g;const w=Yr(l[c[m]],h[f[m]]);if(w!==0)return w}return Rt(c.length,f.length)}(e.mapValue,t.mapValue);default:throw ft()}}function jf(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Rt(e,t);const n=qn(e),r=qn(t),i=Rt(n.seconds,r.seconds);return i!==0?i:Rt(n.nanos,r.nanos)}function Xr(e){return Ul(e)}function Ul(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=qn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return gr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return lt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ul(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ul(n.fields[a])}`;return i+"}"}(e.mapValue):ft()}function zf(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function $l(e){return!!e&&"integerValue"in e}function jc(e){return!!e&&"arrayValue"in e}function qf(e){return!!e&&"nullValue"in e}function Hf(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _o(e){return!!e&&"mapValue"in e}function ji(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return si(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ji(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ji(e.arrayValue.values[n]);return t}return Object.assign({},e)}function qT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.value=t}static empty(){return new Me({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!_o(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ji(n)}setAll(t){let n=ue.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=ji(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());_o(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return on(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];_o(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){si(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Me(ji(this.value))}}function Vp(e){const t=[];return si(e.fields,(n,r)=>{const i=new ue([n]);if(_o(r)){const s=Vp(r.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new qe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,n,r,i,s,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ge(t,0,mt.min(),mt.min(),mt.min(),Me.empty(),0)}static newFoundDocument(t,n,r,i){return new ge(t,1,n,mt.min(),r,i,0)}static newNoDocument(t,n){return new ge(t,2,n,mt.min(),mt.min(),Me.empty(),0)}static newUnknownDocument(t,n){return new ge(t,3,n,mt.min(),mt.min(),Me.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(mt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=mt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ge&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,n){this.position=t,this.inclusive=n}}function Kf(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(s.field.isKeyField()?r=lt.comparator(lt.fromName(a.referenceValue),n.key):r=Yr(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gf(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!on(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,n="asc"){this.field=t,this.dir=n}}function HT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{}class Wt extends Dp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new GT(t,n,r):n==="array-contains"?new YT(t,r):n==="in"?new XT(t,r):n==="not-in"?new JT(t,r):n==="array-contains-any"?new ZT(t,r):new Wt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new WT(t,r):new QT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yr(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(Yr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ft()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Dp{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Qe(t,n)}matches(t){return Op(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Op(e){return e.op==="and"}function Np(e){return KT(e)&&Op(e)}function KT(e){for(const t of e.filters)if(t instanceof Qe)return!1;return!0}function Bl(e){if(e instanceof Wt)return e.field.canonicalString()+e.op.toString()+Xr(e.value);if(Np(e))return e.filters.map(t=>Bl(t)).join(",");{const t=e.filters.map(n=>Bl(n)).join(",");return`${e.op}(${t})`}}function Mp(e,t){return e instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(e,t):e instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Mp(a,i.filters[l]),!0):!1}(e,t):void ft()}function Lp(e){return e instanceof Wt?function(n){return`${n.field.canonicalString()} ${n.op} ${Xr(n.value)}`}(e):e instanceof Qe?function(n){return n.op.toString()+" {"+n.getFilters().map(Lp).join(" ,")+"}"}(e):"Filter"}class GT extends Wt{constructor(t,n,r){super(t,n,r),this.key=lt.fromName(r.referenceValue)}matches(t){const n=lt.comparator(t.key,this.key);return this.matchesComparison(n)}}class WT extends Wt{constructor(t,n){super(t,"in",n),this.keys=Fp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class QT extends Wt{constructor(t,n){super(t,"not-in",n),this.keys=Fp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Fp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>lt.fromName(r.referenceValue))}class YT extends Wt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return jc(n)&&hs(n.arrayValue,this.value)}}class XT extends Wt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&hs(this.value.arrayValue,n)}}class JT extends Wt{constructor(t,n){super(t,"not-in",n)}matches(t){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!hs(this.value.arrayValue,n)}}class ZT extends Wt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!jc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(t,n=null,r=[],i=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Wf(e,t=null,n=[],r=[],i=null,s=null,a=null){return new tA(e,t,n,r,i,s,a)}function zc(e){const t=pt(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Bl(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oa(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Xr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Xr(r)).join(",")),t.ue=n}return t.ue}function qc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!HT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Mp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Gf(e.startAt,t.startAt)&&Gf(e.endAt,t.endAt)}function jl(e){return lt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,n=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eA(e,t,n,r,i,s,a,l){return new ws(e,t,n,r,i,s,a,l)}function Up(e){return new ws(e)}function Qf(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function $p(e){return e.collectionGroup!==null}function zi(e){const t=pt(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new he(ue.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new No(s,r))}),n.has(ue.keyField().canonicalString())||t.ce.push(new No(ue.keyField(),r))}return t.ce}function nn(e){const t=pt(e);return t.le||(t.le=nA(t,zi(e))),t.le}function nA(e,t){if(e.limitType==="F")return Wf(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new No(i.field,s)});const n=e.endAt?new Oo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Oo(e.startAt.position,e.startAt.inclusive):null;return Wf(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function zl(e,t){const n=e.filters.concat([t]);return new ws(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ql(e,t,n){return new ws(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function aa(e,t){return qc(nn(e),nn(t))&&e.limitType===t.limitType}function Bp(e){return`${zc(nn(e))}|lt:${e.limitType}`}function kr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Lp(i)).join(", ")}]`),oa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xr(i)).join(",")),`Target(${r})`}(nn(e))}; limitType=${e.limitType})`}function la(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):lt.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of zi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=Kf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,zi(r),i)||r.endAt&&!function(a,l,c){const h=Kf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,zi(r),i))}(e,t)}function rA(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function jp(e){return(t,n)=>{let r=!1;for(const i of zi(e)){const s=iA(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iA(e,t,n){const r=e.field.isKeyField()?lt.comparator(t.key,n.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?Yr(c,h):ft()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ft()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){si(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return xp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new jt(lt.comparator);function yn(){return sA}const zp=new jt(lt.comparator);function xi(...e){let t=zp;for(const n of e)t=t.insert(n.key,n);return t}function qp(e){let t=zp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function or(){return qi()}function Hp(){return qi()}function qi(){return new oi(e=>e.toString(),(e,t)=>e.isEqual(t))}const oA=new jt(lt.comparator),aA=new he(lt.comparator);function vt(...e){let t=aA;for(const n of e)t=t.add(n);return t}const lA=new he(Rt);function cA(){return lA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(t)?"-0":t}}function Gp(e){return{integerValue:""+e}}function uA(e,t){return BT(t)?Gp(t):Kp(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this._=void 0}}function hA(e,t,n){return e instanceof Mo?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$c(s)&&(s=Bc(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,t):e instanceof fs?Qp(e,t):e instanceof ds?Yp(e,t):function(i,s){const a=Wp(i,s),l=Yf(a)+Yf(i.Pe);return $l(a)&&$l(i.Pe)?Gp(l):Kp(i.serializer,l)}(e,t)}function fA(e,t,n){return e instanceof fs?Qp(e,t):e instanceof ds?Yp(e,t):n}function Wp(e,t){return e instanceof Lo?function(r){return $l(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Mo extends ca{}class fs extends ca{constructor(t){super(),this.elements=t}}function Qp(e,t){const n=Xp(t);for(const r of e.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class ds extends ca{constructor(t){super(),this.elements=t}}function Yp(e,t){let n=Xp(t);for(const r of e.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class Lo extends ca{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function Yf(e){return Gt(e.integerValue||e.doubleValue)}function Xp(e){return jc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dA(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof fs&&i instanceof fs||r instanceof ds&&i instanceof ds?Qr(r.elements,i.elements,on):r instanceof Lo&&i instanceof Lo?on(r.Pe,i.Pe):r instanceof Mo&&i instanceof Mo}(e.transform,t.transform)}class mA{constructor(t,n){this.version=t,this.transformResults=n}}class dn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new dn}static exists(t){return new dn(void 0,t)}static updateTime(t){return new dn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yo(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ua{}function Jp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new tg(e.key,dn.none()):new bs(e.key,e.data,dn.none());{const n=e.data,r=Me.empty();let i=new he(ue.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Er(e.key,r,new qe(i.toArray()),dn.none())}}function pA(e,t,n){e instanceof bs?function(i,s,a){const l=i.value.clone(),c=Jf(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Er?function(i,s,a){if(!yo(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Jf(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Zp(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Hi(e,t,n,r){return e instanceof bs?function(s,a,l,c){if(!yo(s.precondition,a))return l;const h=s.value.clone(),f=Zf(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Er?function(s,a,l,c){if(!yo(s.precondition,a))return l;const h=Zf(s.fieldTransforms,c,a),f=a.data;return f.setAll(Zp(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(e,t,n,r):function(s,a,l){return yo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function gA(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Wp(r.transform,i||null);s!=null&&(n===null&&(n=Me.empty()),n.set(r.field,s))}return n||null}function Xf(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qr(r,i,(s,a)=>dA(s,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class bs extends ua{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Er extends ua{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Zp(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Jf(e,t,n){const r=new Map;Ot(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,l=t.data.field(s.field);r.set(s.field,fA(a,l,n[i]))}return r}function Zf(e,t,n){const r=new Map;for(const i of e){const s=i.transform,a=n.data.field(i.field);r.set(i.field,hA(s,a,t))}return r}class tg extends ua{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _A extends ua{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&pA(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Hi(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Hi(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Hp();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const c=Jp(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(mt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),vt())}isEqual(t){return this.batchId===t.batchId&&Qr(this.mutations,t.mutations,(n,r)=>Xf(n,r))&&Qr(this.baseMutations,t.baseMutations,(n,r)=>Xf(n,r))}}class Hc{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Ot(t.mutations.length===r.length);let i=function(){return oA}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Hc(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt,wt;function wA(e){switch(e){default:return ft();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function eg(e){if(e===void 0)return _n("GRPC error has no .code"),U.UNKNOWN;switch(e){case Kt.OK:return U.OK;case Kt.CANCELLED:return U.CANCELLED;case Kt.UNKNOWN:return U.UNKNOWN;case Kt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Kt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Kt.INTERNAL:return U.INTERNAL;case Kt.UNAVAILABLE:return U.UNAVAILABLE;case Kt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Kt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Kt.NOT_FOUND:return U.NOT_FOUND;case Kt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Kt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Kt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Kt.ABORTED:return U.ABORTED;case Kt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Kt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Kt.DATA_LOSS:return U.DATA_LOSS;default:return ft()}}(wt=Kt||(Kt={}))[wt.OK=0]="OK",wt[wt.CANCELLED=1]="CANCELLED",wt[wt.UNKNOWN=2]="UNKNOWN",wt[wt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wt[wt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wt[wt.NOT_FOUND=5]="NOT_FOUND",wt[wt.ALREADY_EXISTS=6]="ALREADY_EXISTS",wt[wt.PERMISSION_DENIED=7]="PERMISSION_DENIED",wt[wt.UNAUTHENTICATED=16]="UNAUTHENTICATED",wt[wt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wt[wt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wt[wt.ABORTED=10]="ABORTED",wt[wt.OUT_OF_RANGE=11]="OUT_OF_RANGE",wt[wt.UNIMPLEMENTED=12]="UNIMPLEMENTED",wt[wt.INTERNAL=13]="INTERNAL",wt[wt.UNAVAILABLE=14]="UNAVAILABLE",wt[wt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new ur([4294967295,4294967295],0);function td(e){const t=bA().encode(e),n=new wp;return n.update(t),new Uint8Array(n.digest())}function ed(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ur([n,r],0),new ur([i,s],0)]}class Kc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ki(`Invalid padding: ${n}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ki(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=ur.fromNumber(this.Ie)}Ee(t,n,r){let i=t.add(n.multiply(ur.fromNumber(r)));return i.compare(TA)===1&&(i=new ur([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=td(t),[r,i]=ed(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Kc(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const n=td(t),[r,i]=ed(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ts.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ha(mt.min(),i,new jt(Rt),yn(),vt())}}class Ts{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ts(r,n,vt(),vt(),vt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n,r,i){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ng{constructor(t,n){this.targetId=t,this.me=n}}class rg{constructor(t,n,r=ye.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nd{constructor(){this.fe=0,this.ge=id(),this.pe=ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=vt(),n=vt(),r=vt();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ft()}}),new Ts(this.pe,this.ye,t,n,r)}ve(){this.we=!1,this.ge=id()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Ot(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AA{constructor(t){this.Le=t,this.Be=new Map,this.ke=yn(),this.qe=rd(),this.Qe=new jt(Rt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:ft()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(t){const n=t.targetId,r=t.me.count,i=this.Je(n);if(i){const s=i.target;if(jl(s))if(r===0){const a=new lt(s.path);this.Ue(n,a,ge.newNoDocument(a,mt.min()))}else Ot(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(t),c=l?this.Xe(l,t,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=gr(r).toUint8Array()}catch(c){if(c instanceof kp)return Wr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Kc(a,i,s)}catch(c){return Wr(c instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(t){const n=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&jl(l.target)){const c=new lt(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ge.newNoDocument(c,t))}s.be&&(n.set(a,s.Ce()),s.ve())}});let r=vt();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new ha(t,n,this.Qe,this.ke,r);return this.ke=yn(),this.qe=rd(),this.Qe=new jt(Rt),i}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new nd,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new he(Rt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||nt("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new nd),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function rd(){return new jt(lt.comparator)}function id(){return new jt(lt.comparator)}const IA={asc:"ASCENDING",desc:"DESCENDING"},RA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SA={and:"AND",or:"OR"};class PA{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Hl(e,t){return e.useProto3Json||oa(t)?t:{value:t}}function Fo(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ig(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function CA(e,t){return Fo(e,t.toTimestamp())}function rn(e){return Ot(!!e),mt.fromTimestamp(function(n){const r=qn(n);return new Qt(r.seconds,r.nanos)}(e))}function Gc(e,t){return Kl(e,t).canonicalString()}function Kl(e,t){const n=function(i){return new Lt(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function sg(e){const t=Lt.fromString(e);return Ot(ug(t)),t}function Gl(e,t){return Gc(e.databaseId,t.path)}function tl(e,t){const n=sg(t);if(n.get(1)!==e.databaseId.projectId)throw new rt(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rt(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new lt(ag(n))}function og(e,t){return Gc(e.databaseId,t)}function xA(e){const t=sg(e);return t.length===4?Lt.emptyPath():ag(t)}function Wl(e){return new Lt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ag(e){return Ot(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function sd(e,t,n){return{name:Gl(e,t),fields:n.value.mapValue.fields}}function kA(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ft()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(Ot(f===void 0||typeof f=="string"),ye.fromBase64String(f||"")):(Ot(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ye.fromUint8Array(f||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?U.UNKNOWN:eg(h.code);return new rt(f,h.message||"")}(a);n=new rg(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=tl(e,r.document.name),s=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):mt.min(),l=new Me({mapValue:{fields:r.document.fields}}),c=ge.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new vo(h,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=tl(e,r.document),s=r.readTime?rn(r.readTime):mt.min(),a=ge.newNoDocument(i,s),l=r.removedTargetIds||[];n=new vo([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=tl(e,r.document),s=r.removedTargetIds||[];n=new vo([],s,i,null)}else{if(!("filter"in t))return ft();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new EA(i,s),l=r.targetId;n=new ng(l,a)}}return n}function VA(e,t){let n;if(t instanceof bs)n={update:sd(e,t.key,t.value)};else if(t instanceof tg)n={delete:Gl(e,t.key)};else if(t instanceof Er)n={update:sd(e,t.key,t.data),updateMask:BA(t.fieldMask)};else{if(!(t instanceof _A))return ft();n={verify:Gl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Mo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ds)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Lo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ft()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:CA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ft()}(e,t.precondition)),n}function DA(e,t){return e&&e.length>0?(Ot(t!==void 0),e.map(n=>function(i,s){let a=i.updateTime?rn(i.updateTime):rn(s);return a.isEqual(mt.min())&&(a=rn(s)),new mA(a,i.transformResults||[])}(n,t))):[]}function OA(e,t){return{documents:[og(e,t.path)]}}function NA(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=og(e,i);const s=function(h){if(h.length!==0)return cg(Qe.create(h,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Vr(g.field),direction:FA(g.dir)}}(f))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Hl(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:n,parent:i}}function MA(e){let t=xA(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ot(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=lg(m);return g instanceof Qe&&Np(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(C){return new No(Dr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,oa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,w=m.values||[];return new Oo(w,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,w=m.values||[];return new Oo(w,g)}(n.endAt)),eA(t,i,a,s,l,"F",c,h)}function LA(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ft()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function lg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Dr(n.unaryFilter.field);return Wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Dr(n.unaryFilter.field);return Wt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dr(n.unaryFilter.field);return Wt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dr(n.unaryFilter.field);return Wt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ft()}}(e):e.fieldFilter!==void 0?function(n){return Wt.create(Dr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ft()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Qe.create(n.compositeFilter.filters.map(r=>lg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ft()}}(n.compositeFilter.op))}(e):ft()}function FA(e){return IA[e]}function UA(e){return RA[e]}function $A(e){return SA[e]}function Vr(e){return{fieldPath:e.canonicalString()}}function Dr(e){return ue.fromServerFormat(e.fieldPath)}function cg(e){return e instanceof Wt?function(n){if(n.op==="=="){if(Hf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(qf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(qf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:UA(n.op),value:n.value}}}(e):e instanceof Qe?function(n){const r=n.getFilters().map(i=>cg(i));return r.length===1?r[0]:{compositeFilter:{op:$A(n.op),filters:r}}}(e):ft()}function BA(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ug(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n,r,i,s=mt.min(),a=mt.min(),l=ye.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Dn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(t){this.ct=t}}function zA(e){const t=MA({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ql(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this._n=new HA}addToCollectionParentIndex(t,n){return this._n.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(zn.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(zn.min())}updateCollectionGroup(t,n,r){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class HA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new he(Lt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new he(Lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Jr(0)}static Ln(){return new Jr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.changes=new oi(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ge.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Hi(r.mutation,i,qe.empty(),Qt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,vt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=vt()){const i=or();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let a=xi();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=or();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,vt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,i){let s=yn();const a=qi(),l=function(){return qi()}();return n.forEach((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Er)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Hi(f.mutation,h,f.mutation.getFieldMask(),Qt.now())):a.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new GA(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,n){const r=qi();let i=new jt((a,l)=>a-l),s=vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||qe.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(i.get(l.batchId)||vt()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=Hp();f.forEach(g=>{if(!s.has(g)){const w=Jp(n.get(g),r.get(g));w!==null&&m.set(g,w),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return $.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(a){return lt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):$p(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):$.resolve(or());let l=-1,c=s;return a.next(h=>$.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(t,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,c,h,vt())).next(f=>({batchId:l,changes:qp(f)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new lt(n)).next(r=>{let i=xi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let a=xi();return this.indexManager.getCollectionParents(t,s).next(l=>$.forEach(l,c=>{const h=function(m,g){return new ws(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(f=>{f.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ge.newInvalidDocument(f)))});let l=xi();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Hi(f.mutation,h,qe.empty(),Qt.now()),la(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:zA(i.bundledQuery),readTime:rn(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.overlays=new jt(lt.comparator),this.hr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const r=or();return $.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),$.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(t,n,r){const i=or(),s=n.length+1,a=new lt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new jt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=or(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=or(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return $.resolve(l)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new vA(n,r));let s=this.hr.get(n);s===void 0&&(s=vt(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.Pr=new he(ee.Ir),this.Tr=new he(ee.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new ee(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new ee(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new lt(new Lt([])),r=new ee(n,t),i=new ee(n,t+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new lt(new Lt([])),r=new ee(n,t),i=new ee(n,t+1);let s=vt();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(t){const n=new ee(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ee{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return lt.comparator(t.key,n.key)||Rt(t.pr,n.pr)}static Er(t,n){return Rt(t.pr,n.pr)||lt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new he(ee.Ir)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new yA(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new ee(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return $.resolve(a)}lookupMutationBatch(t,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new ee(n,0),i=new ee(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new he(Rt);return n.forEach(i=>{const s=new ee(i,0),a=new ee(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],l=>{r=r.add(l.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;lt.isDocumentKey(s)||(s=s.child(""));const a=new ee(new lt(s),0);let l=new he(Rt);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},a),$.resolve(this.Dr(l))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Ot(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new ee(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new ee(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(t){this.vr=t,this.docs=function(){return new jt(lt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():ge.newInvalidDocument(n))}getEntries(t,n){let r=yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ge.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=yn();const a=n.path,l=new lt(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||LT(MT(f),r)<=0||(i.has(f.key)||la(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(t,n,r,i){ft()}Fr(t,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new ZA(this)}getSize(t){return $.resolve(this.size)}}class ZA extends KA{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t){this.persistence=t,this.Mr=new oi(n=>zc(n),qc),this.lastRemoteSnapshotVersion=mt.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wc,this.targetCount=0,this.Lr=Jr.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Jr(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.qn(n),$.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),$.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(t,n){return $.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t,n){this.Br={},this.overlays={},this.kr=new Uc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new tI(this),this.indexManager=new qA,this.remoteDocumentCache=function(i){return new JA(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jA(n),this.$r=new QA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new YA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new XA(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){nt("MemoryPersistence","Starting transaction:",t);const i=new nI(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class nI extends UT{constructor(t){super(),this.currentSequenceNumber=t}}class Qc{constructor(t){this.persistence=t,this.zr=new Wc,this.jr=null}static Hr(t){return new Qc(t)}get Jr(){if(this.jr)return this.jr;throw ft()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=lt.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,mt.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=vt(),i=vt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yc(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return cb()?8:$T(ab())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new rI;return this.Ji(t,n,a).next(l=>{if(s.result=l,this.Ui)return this.Yi(t,n,a,l.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(Ri()<=At.DEBUG&&nt("QueryEngine","SDK will not create cache indexes for query:",kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(Ri()<=At.DEBUG&&nt("QueryEngine","Query:",kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ri()<=At.DEBUG&&nt("QueryEngine","The SDK decides to create cache indexes for query:",kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,nn(n))):$.resolve())}ji(t,n){if(Qf(n))return $.resolve(null);let r=nn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ql(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const a=vt(...s);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.Zi(n,l);return this.Xi(n,h,a,c.readTime)?this.ji(t,ql(n,null,"F")):this.es(t,h,n,c)}))})))}Hi(t,n,r,i){return Qf(n)||i.isEqual(mt.min())?$.resolve(null):this.zi.getDocuments(t,r).next(s=>{const a=this.Zi(n,s);return this.Xi(n,a,r,i)?$.resolve(null):(Ri()<=At.DEBUG&&nt("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kr(n)),this.es(t,a,n,NT(i,-1)).next(l=>l))})}Zi(t,n){let r=new he(jp(t));return n.forEach((i,s)=>{la(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return Ri()<=At.DEBUG&&nt("QueryEngine","Using full collection scan to execute query:",kr(n)),this.zi.getDocumentsMatchingQuery(t,n,zn.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new jt(Rt),this.rs=new oi(s=>zc(s),qc),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new WA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function oI(e,t,n,r){return new sI(e,t,n,r)}async function hg(e,t){const n=pt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=vt();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function aI(e,t){const n=pt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,g=m.keys();let w=$.resolve();return g.forEach(C=>{w=w.next(()=>f.getEntry(c,C)).next(k=>{const O=h.docVersions.get(C);Ot(O!==null),k.version.compareTo(O)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=vt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function fg(e){const t=pt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function lI(e,t){const n=pt(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];t.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,m)));let w=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?w=w.withResumeToken(ye.EMPTY_BYTE_STRING,mt.min()).withLastLimboFreeSnapshotVersion(mt.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(m,w),function(k,O,x){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,w,f)&&l.push(n.Qr.updateTargetData(s,w))});let c=yn(),h=vt();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(cI(s,a,t.documentUpdates).next(f=>{c=f.cs,h=f.ls})),!r.isEqual(mt.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(m=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(n.ns=i,s))}function cI(e,t,n){let r=vt(),i=vt();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let a=yn();return n.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(mt.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):nt("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:i}})}function uI(e,t){const n=pt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function hI(e,t){const n=pt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(a=>(i=new Dn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Ql(e,t,n){const r=pt(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Es(a))throw a;nt("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function od(e,t,n){const r=pt(e);let i=mt.min(),s=vt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=pt(c),g=m.rs.get(f);return g!==void 0?$.resolve(m.ns.get(g)):m.Qr.getTargetData(h,f)}(r,a,nn(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,n?i:mt.min(),n?s:vt())).next(l=>(fI(r,rA(t),l),{documents:l,hs:s})))}function fI(e,t,n){let r=e.ss.get(t)||mt.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class ad{constructor(){this.activeTargetIds=cA()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class dI{constructor(){this.no=new ad,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ad,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){nt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){nt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=null;function el(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="WebChannelConnection";class _I extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,a){const l=el(),c=this.vo(n,r.toUriEncodedString());nt("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,a),this.Mo(n,c,h,i).then(f=>(nt("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Wr("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(n,r,i,s,a,l){return this.Co(n,r,i,s,a)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ii}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}vo(n,r){const i=pI[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,n,r,i){const s=el();return new Promise((a,l)=>{const c=new bp;c.setWithCredentials(!0),c.listenOnce(Ap.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case go.NO_ERROR:const f=c.getResponseJson();nt(me,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case go.TIMEOUT:nt(me,`RPC '${t}' ${s} timed out`),l(new rt(U.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const m=c.getStatus();if(nt(me,`RPC '${t}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const C=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(x)>=0?x:U.UNKNOWN}(w.status);l(new rt(C,w.message))}else l(new rt(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new rt(U.UNAVAILABLE,"Connection failed."));break;default:ft()}}finally{nt(me,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);nt(me,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",h,r,15)})}Oo(t,n,r){const i=el(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Sp(),l=Rp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Tp({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");nt(me,`Creating RPC '${t}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);let g=!1,w=!1;const C=new gI({lo:O=>{w?nt(me,`Not sending because RPC '${t}' stream ${i} is closed:`,O):(g||(nt(me,`Opening RPC '${t}' stream ${i} transport.`),m.open(),g=!0),nt(me,`RPC '${t}' stream ${i} sending:`,O),m.send(O))},ho:()=>m.close()}),k=(O,x,V)=>{O.listen(x,F=>{try{V(F)}catch(z){setTimeout(()=>{throw z},0)}})};return k(m,Ci.EventType.OPEN,()=>{w||(nt(me,`RPC '${t}' stream ${i} transport opened.`),C.mo())}),k(m,Ci.EventType.CLOSE,()=>{w||(w=!0,nt(me,`RPC '${t}' stream ${i} transport closed`),C.po())}),k(m,Ci.EventType.ERROR,O=>{w||(w=!0,Wr(me,`RPC '${t}' stream ${i} transport errored:`,O),C.po(new rt(U.UNAVAILABLE,"The operation could not be completed")))}),k(m,Ci.EventType.MESSAGE,O=>{var x;if(!w){const V=O.data[0];Ot(!!V);const F=V,z=F.error||((x=F[0])===null||x===void 0?void 0:x.error);if(z){nt(me,`RPC '${t}' stream ${i} received error:`,z);const tt=z.status;let G=function(v){const A=Kt[v];if(A!==void 0)return eg(A)}(tt),T=z.message;G===void 0&&(G=U.INTERNAL,T="Unknown error status: "+tt+" with message "+z.message),w=!0,C.po(new rt(G,T)),m.close()}else nt(me,`RPC '${t}' stream ${i} received:`,V),C.yo(V)}}),k(l,Ip.STAT_EVENT,O=>{O.stat===Fl.PROXY?nt(me,`RPC '${t}' stream ${i} detected buffering proxy`):O.stat===Fl.NOPROXY&&nt(me,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function nl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e){return new PA(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&nt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,n,r,i,s,a,l,c){this.oi=t,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new dg(t,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(n)}__(){}auth(){this.state=1;const t=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{t(()=>{const i=new rt(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,n){const r=this.a_(this.jo);this.stream=this.l_(t,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return nt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return n=>{this.oi.enqueueAndForget(()=>this.jo===t?n():(nt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yI extends mg{constructor(t,n,r,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}l_(t,n){return this.connection.Oo("Listen",t,n)}onMessage(t){this.Yo.reset();const n=kA(this.serializer,t),r=function(s){if(!("targetChange"in s))return mt.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?mt.min():a.readTime?rn(a.readTime):mt.min()}(t);return this.listener.h_(n,r)}P_(t){const n={};n.database=Wl(this.serializer),n.addTarget=function(s,a){let l;const c=a.target;if(l=jl(c)?{documents:OA(s,c)}:{query:NA(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ig(s,a.resumeToken);const h=Hl(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(mt.min())>0){l.readTime=Fo(s,a.snapshotVersion.toTimestamp());const h=Hl(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=LA(this.serializer,t);r&&(n.labels=r),this.i_(n)}I_(t){const n={};n.database=Wl(this.serializer),n.removeTarget=t,this.i_(n)}}class vI extends mg{constructor(t,n,r,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,n){return this.connection.Oo("Write",t,n)}onMessage(t){if(Ot(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const n=DA(t.writeResults,t.commitTime),r=rn(t.commitTime);return this.listener.A_(r,n)}return Ot(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Wl(this.serializer),this.i_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>VA(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new rt(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(t,Kl(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new rt(U.UNKNOWN,s.toString())})}xo(t,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,Kl(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new rt(U.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class wI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(_n(n),this.y_=!1):nt("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{wr(this)&&(nt("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=pt(c);h.M_.add(4),await As(h),h.N_.set("Unknown"),h.M_.delete(4),await da(h)}(this))})}),this.N_=new wI(r,i)}}async function da(e){if(wr(e))for(const t of e.x_)await t(!0)}async function As(e){for(const t of e.x_)await t(!1)}function pg(e,t){const n=pt(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),tu(n)?Zc(n):ai(n).Xo()&&Jc(n,t))}function Xc(e,t){const n=pt(e),r=ai(n);n.F_.delete(t),r.Xo()&&gg(n,t),n.F_.size===0&&(r.Xo()?r.n_():wr(n)&&n.N_.set("Unknown"))}function Jc(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(mt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ai(e).P_(t)}function gg(e,t){e.L_.xe(t),ai(e).I_(t)}function Zc(e){e.L_=new AA({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),ai(e).start(),e.N_.w_()}function tu(e){return wr(e)&&!ai(e).Zo()&&e.F_.size>0}function wr(e){return pt(e).M_.size===0}function _g(e){e.L_=void 0}async function TI(e){e.N_.set("Online")}async function AI(e){e.F_.forEach((t,n)=>{Jc(e,t)})}async function II(e,t){_g(e),tu(e)?(e.N_.D_(t),Zc(e)):e.N_.set("Unknown")}async function RI(e,t,n){if(e.N_.set("Online"),t instanceof rg&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(e,t)}catch(r){nt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Uo(e,r)}else if(t instanceof vo?e.L_.Ke(t):t instanceof ng?e.L_.He(t):e.L_.We(t),!n.isEqual(mt.min()))try{const r=await fg(e.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.F_.get(h);f&&s.F_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=s.F_.get(c);if(!f)return;s.F_.set(c,f.withResumeToken(ye.EMPTY_BYTE_STRING,f.snapshotVersion)),gg(s,c);const m=new Dn(f.target,c,h,f.sequenceNumber);Jc(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){nt("RemoteStore","Failed to raise snapshot:",r),await Uo(e,r)}}async function Uo(e,t,n){if(!Es(t))throw t;e.M_.add(1),await As(e),e.N_.set("Offline"),n||(n=()=>fg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nt("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await da(e)})}function yg(e,t){return t().catch(n=>Uo(e,n,t))}async function ma(e){const t=pt(e),n=Hn(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;SI(t);)try{const i=await uI(t.localStore,r);if(i===null){t.v_.length===0&&n.n_();break}r=i.batchId,PI(t,i)}catch(i){await Uo(t,i)}vg(t)&&Eg(t)}function SI(e){return wr(e)&&e.v_.length<10}function PI(e,t){e.v_.push(t);const n=Hn(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function vg(e){return wr(e)&&!Hn(e).Zo()&&e.v_.length>0}function Eg(e){Hn(e).start()}async function CI(e){Hn(e).V_()}async function xI(e){const t=Hn(e);for(const n of e.v_)t.d_(n.mutations)}async function kI(e,t,n){const r=e.v_.shift(),i=Hc.from(r,t,n);await yg(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ma(e)}async function VI(e,t){t&&Hn(e).E_&&await async function(r,i){if(function(a){return wA(a)&&a!==U.ABORTED}(i.code)){const s=r.v_.shift();Hn(r).t_(),await yg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ma(r)}}(e,t),vg(e)&&Eg(e)}async function cd(e,t){const n=pt(e);n.asyncQueue.verifyOperationInProgress(),nt("RemoteStore","RemoteStore received new credentials");const r=wr(n);n.M_.add(3),await As(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await da(n)}async function DI(e,t){const n=pt(e);t?(n.M_.delete(2),await da(n)):t||(n.M_.add(2),await As(n),n.N_.set("Unknown"))}function ai(e){return e.B_||(e.B_=function(n,r,i){const s=pt(n);return s.f_(),new yI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:TI.bind(null,e),To:AI.bind(null,e),Ao:II.bind(null,e),h_:RI.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.t_(),tu(e)?Zc(e):e.N_.set("Unknown")):(await e.B_.stop(),_g(e))})),e.B_}function Hn(e){return e.k_||(e.k_=function(n,r,i){const s=pt(n);return s.f_(),new vI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:CI.bind(null,e),Ao:VI.bind(null,e),R_:xI.bind(null,e),A_:kI.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.t_(),await ma(e)):(await e.k_.stop(),e.v_.length>0&&(nt("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,l=new eu(t,n,a,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nu(e,t){if(_n("AsyncQueue",`${t}: ${e}`),Es(e))return new rt(U.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||lt.comparator(n.key,r.key):(n,r)=>lt.comparator(n.key,r.key),this.keyedMap=xi(),this.sortedSet=new jt(this.comparator)}static emptySet(t){return new jr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof jr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new jr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.q_=new jt(lt.comparator)}track(t){const n=t.doc.key,r=this.q_.get(n);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(n,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(n):t.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):ft():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Zr{constructor(t,n,r,i,s,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Zr(t,n,jr.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&aa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class NI{constructor(){this.queries=new oi(t=>Bp(t),aa),this.onlineState="Unknown",this.z_=new Set}}async function MI(e,t){const n=pt(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.W_()&&t.G_()&&(r=2):(s=new OI,r=t.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=nu(a,`Initialization of query '${kr(t.query)}' failed`);return void t.onError(l)}n.queries.set(i,s),s.U_.push(t),t.j_(n.onlineState),s.K_&&t.H_(s.K_)&&ru(n)}async function LI(e,t){const n=pt(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const a=s.U_.indexOf(t);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=t.G_()?0:1:!s.W_()&&t.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FI(e,t){const n=pt(e);let r=!1;for(const i of t){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&ru(n)}function UI(e,t,n){const r=pt(e),i=r.queries.get(t);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(t)}function ru(e){e.z_.forEach(t=>{t.next()})}var Yl,hd;(hd=Yl||(Yl={})).J_="default",hd.Cache="cache";class $I{constructor(t,n,r){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Zr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=Zr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Yl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t){this.key=t}}class bg{constructor(t){this.key=t}}class BI{constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=vt(),this.mutatedKeys=vt(),this.Ia=jp(t),this.Ta=new jr(this.Ia)}get Ea(){return this.la}da(t,n){const r=n?n.Aa:new ud,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,m)=>{const g=i.get(f),w=la(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let O=!1;g&&w?g.data.isEqual(w.data)?C!==k&&(r.track({type:3,doc:w}),O=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),O=!0,(c&&this.Ia(w,c)>0||h&&this.Ia(w,h)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),O=!0):g&&!w&&(r.track({type:1,doc:g}),O=!0,(c||h)&&(l=!0)),O&&(w?(a=a.add(w),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:s}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,m)=>function(w,C){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ft()}};return k(w)-k(C)}(f.type,m.type)||this.Ia(f.doc,m.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new Zr(this.query,t.Ta,s,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ud,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=vt(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return t.forEach(r=>{this.Pa.has(r)||n.push(new bg(r))}),this.Pa.forEach(r=>{t.has(r)||n.push(new wg(r))}),n}pa(t){this.la=t.hs,this.Pa=vt();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return Zr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class jI{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class zI{constructor(t){this.key=t,this.wa=!1}}class qI{constructor(t,n,r,i,s,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new oi(l=>Bp(l),aa),this.Da=new Map,this.Ca=new Set,this.va=new jt(lt.comparator),this.Fa=new Map,this.Ma=new Wc,this.xa={},this.Oa=new Map,this.Na=Jr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function HI(e,t,n=!0){const r=Pg(e);let i;const s=r.ba.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Tg(r,t,n,!0),i}async function KI(e,t){const n=Pg(e);await Tg(n,t,!0,!1)}async function Tg(e,t,n,r){const i=await hI(e.localStore,nn(t)),s=i.targetId,a=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await GI(e,t,s,a==="current",i.resumeToken)),e.isPrimaryClient&&n&&pg(e.remoteStore,i),l}async function GI(e,t,n,r,i){e.Ba=(m,g,w)=>async function(k,O,x,V){let F=O.view.da(x);F.Xi&&(F=await od(k.localStore,O.query,!1).then(({documents:T})=>O.view.da(T,F)));const z=V&&V.targetChanges.get(O.targetId),tt=V&&V.targetMismatches.get(O.targetId)!=null,G=O.view.applyChanges(F,k.isPrimaryClient,z,tt);return dd(k,O.targetId,G.fa),G.snapshot}(e,m,g,w);const s=await od(e.localStore,t,!0),a=new BI(t,s.hs),l=a.da(s.documents),c=Ts.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),h=a.applyChanges(l,e.isPrimaryClient,c);dd(e,n,h.fa);const f=new jI(t,n,a);return e.ba.set(t,f),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),h.snapshot}async function WI(e,t,n){const r=pt(e),i=r.ba.get(t),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!aa(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ql(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xc(r.remoteStore,i.targetId),Xl(r,i.targetId)}).catch(vs)):(Xl(r,i.targetId),await Ql(r.localStore,i.targetId,!0))}async function QI(e,t){const n=pt(e),r=n.ba.get(t),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xc(n.remoteStore,r.targetId))}async function YI(e,t,n){const r=r2(e);try{const i=await function(a,l){const c=pt(a),h=Qt.now(),f=l.reduce((w,C)=>w.add(C.key),vt());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=yn(),k=vt();return c.os.getEntries(w,f).next(O=>{C=O,C.forEach((x,V)=>{V.isValidDocument()||(k=k.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,C)).next(O=>{m=O;const x=[];for(const V of l){const F=gA(V,m.get(V.key).overlayedDocument);F!=null&&x.push(new Er(V.key,F,Vp(F.value.mapValue),dn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,x,l)}).next(O=>{g=O;const x=O.applyToLocalDocumentSet(m,k);return c.documentOverlayCache.saveOverlays(w,O.batchId,x)})}).then(()=>({batchId:g.batchId,changes:qp(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new jt(Rt)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,i.batchId,n),await Is(r,i.changes),await ma(r.remoteStore)}catch(i){const s=nu(i,"Failed to persist write");n.reject(s)}}async function Ag(e,t){const n=pt(e);try{const r=await lI(n.localStore,t);t.targetChanges.forEach((i,s)=>{const a=n.Fa.get(s);a&&(Ot(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?Ot(a.wa):i.removedDocuments.size>0&&(Ot(a.wa),a.wa=!1))}),await Is(n,r,t)}catch(r){await vs(r)}}function fd(e,t,n){const r=pt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,a)=>{const l=a.view.j_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=pt(a);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const g of m.U_)g.j_(l)&&(h=!0)}),h&&ru(c)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function XI(e,t,n){const r=pt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fa.get(t),s=i&&i.key;if(s){let a=new jt(lt.comparator);a=a.insert(s,ge.newNoDocument(s,mt.min()));const l=vt().add(s),c=new ha(mt.min(),new Map,new jt(Rt),a,l);await Ag(r,c),r.va=r.va.remove(s),r.Fa.delete(t),iu(r)}else await Ql(r.localStore,t,!1).then(()=>Xl(r,t,n)).catch(vs)}async function JI(e,t){const n=pt(e),r=t.batch.batchId;try{const i=await aI(n.localStore,t);Rg(n,r,null),Ig(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Is(n,i)}catch(i){await vs(i)}}async function ZI(e,t,n){const r=pt(e);try{const i=await function(a,l){const c=pt(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Ot(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,t);Rg(r,t,n),Ig(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Is(r,i)}catch(i){await vs(i)}}function Ig(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function Rg(e,t,n){const r=pt(e);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function Xl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(r=>{e.Ma.containsKey(r)||Sg(e,r)})}function Sg(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&(Xc(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),iu(e))}function dd(e,t,n){for(const r of n)r instanceof wg?(e.Ma.addReference(r.key,t),t2(e,r)):r instanceof bg?(nt("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||Sg(e,r.key)):ft()}function t2(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(nt("SyncEngine","New document in limbo: "+n),e.Ca.add(r),iu(e))}function iu(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new lt(Lt.fromString(t)),r=e.Na.next();e.Fa.set(r,new zI(n)),e.va=e.va.insert(n,r),pg(e.remoteStore,new Dn(nn(Up(n.path)),r,"TargetPurposeLimboResolution",Uc.oe))}}async function Is(e,t,n){const r=pt(e),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,t,n).then(h=>{if((h||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const f=Yc.Ki(c.targetId,h);s.push(f)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(c,h){const f=pt(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(h,g=>$.forEach(g.qi,w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>$.forEach(g.Qi,w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!Es(m))throw m;nt("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const w=f.ns.get(g),C=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(C);f.ns=f.ns.insert(g,k)}}}(r.localStore,s))}async function e2(e,t){const n=pt(e);if(!n.currentUser.isEqual(t)){nt("SyncEngine","User change. New user:",t.toKey());const r=await hg(n.localStore,t);n.currentUser=t,function(s,a){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new rt(U.CANCELLED,a))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Is(n,r.us)}}function n2(e,t){const n=pt(e),r=n.Fa.get(t);if(r&&r.wa)return vt().add(r.key);{let i=vt();const s=n.Da.get(t);if(!s)return i;for(const a of s){const l=n.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function Pg(e){const t=pt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ag.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=n2.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=XI.bind(null,t),t.Sa.h_=FI.bind(null,t.eventManager),t.Sa.ka=UI.bind(null,t.eventManager),t}function r2(e){const t=pt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=JI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ZI.bind(null,t),t}class md{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fa(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return oI(this.persistence,new iI,t.initialUser,this.serializer)}createPersistence(t){return new eI(Qc.Hr,this.serializer)}createSharedClientState(t){return new dI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class i2{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=e2.bind(null,this.syncEngine),await DI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new NI}()}createDatastore(t){const n=fa(t.databaseInfo.databaseId),r=function(s){return new _I(s)}(t.databaseInfo);return function(s,a,l,c){return new EI(s,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,a,l){return new bI(r,i,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>fd(this.syncEngine,n,0),function(){return ld.D()?new ld:new mI}())}createSyncEngine(t,n){return function(i,s,a,l,c,h,f){const m=new qI(i,s,a,l,c,h);return f&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=pt(r);nt("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await As(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):_n("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pe.UNAUTHENTICATED,this.clientId=Cp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{nt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(nt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rt(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=nu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function rl(e,t){e.asyncQueue.verifyOperationInProgress(),nt("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hg(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function pd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await l2(e);nt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>cd(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>cd(t.remoteStore,i)),e._onlineComponents=t}function a2(e){return e.name==="FirebaseError"?e.code===U.FAILED_PRECONDITION||e.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function l2(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){nt("FirestoreClient","Using user provided OfflineComponentProvider");try{await rl(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!a2(n))throw n;Wr("Error using user provided cache. Falling back to memory cache: "+n),await rl(e,new md)}}else nt("FirestoreClient","Using default OfflineComponentProvider"),await rl(e,new md);return e._offlineComponents}async function Cg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(nt("FirestoreClient","Using user provided OnlineComponentProvider"),await pd(e,e._uninitializedComponentsProvider._online)):(nt("FirestoreClient","Using default OnlineComponentProvider"),await pd(e,new i2))),e._onlineComponents}function c2(e){return Cg(e).then(t=>t.syncEngine)}async function u2(e){const t=await Cg(e),n=t.eventManager;return n.onListen=HI.bind(null,t.syncEngine),n.onUnlisten=WI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=KI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=QI.bind(null,t.syncEngine),n}function h2(e,t,n={}){const r=new Fn;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const f=new s2({next:g=>{a.enqueueAndForget(()=>LI(s,m)),g.fromCache&&c.source==="server"?h.reject(new rt(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new $I(l,f,{includeMetadataChanges:!0,ra:!0});return MI(s,m)}(await u2(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(e,t,n){if(!n)throw new rt(U.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function f2(e,t,n,r){if(t===!0&&r===!0)throw new rt(U.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function _d(e){if(!lt.isDocumentKey(e))throw new rt(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yd(e){if(lt.isDocumentKey(e))throw new rt(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function pa(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ft()}function $o(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rt(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pa(e);throw new rt(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new rt(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}f2("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new rt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new rt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new rt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ga{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new rt(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new rt(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vd(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RT;switch(r.type){case"firstParty":return new xT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new rt(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gd.get(n);r&&(nt("ComponentProvider","Removing Datastore"),gd.delete(n),r.terminate())}(this),Promise.resolve()}}function d2(e,t,n,r={}){var i;const s=(e=$o(e,ga))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Wr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=pe.MOCK_USER;else{l=ob(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new rt(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pe(h)}e._authCredentials=new ST(new Pp(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new li(this.firestore,t,this._query)}}class Fe{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fe(this.firestore,t,this._key)}}class Un extends li{constructor(t,n,r){super(t,n,Up(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fe(this.firestore,null,new lt(t))}withConverter(t){return new Un(this.firestore,t,this._path)}}function Rs(e,t,...n){if(e=Gr(e),kg("collection","path",t),e instanceof ga){const r=Lt.fromString(t,...n);return yd(r),new Un(e,null,r)}{if(!(e instanceof Fe||e instanceof Un))throw new rt(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Lt.fromString(t,...n));return yd(r),new Un(e.firestore,null,r)}}function m2(e,t,...n){if(e=Gr(e),arguments.length===1&&(t=Cp.newId()),kg("doc","path",t),e instanceof ga){const r=Lt.fromString(t,...n);return _d(r),new Fe(e,null,new lt(r))}{if(!(e instanceof Fe||e instanceof Un))throw new rt(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Lt.fromString(t,...n));return _d(r),new Fe(e.firestore,e instanceof Un?e.converter:null,new lt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new dg(this,"async_queue_retry"),this.hu=()=>{const n=nl();n&&nt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=nl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=nl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Fn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Es(t))throw t;nt("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw _n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const i=eu.createAndSchedule(this,t,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ft()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class su extends ga{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new p2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dg(this),this._firestoreClient.terminate()}}function g2(e,t){const n=typeof e=="object"?e:mT(),r=typeof e=="string"?e:"(default)",i=uT(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ib("firestore");s&&d2(i,...s)}return i}function Vg(e){return e._firestoreClient||Dg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Dg(e){var t,n,r;const i=e._freezeSettings(),s=function(l,c,h,f){return new zT(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,xg(f.experimentalLongPollingOptions),f.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new o2(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ti(ye.fromBase64String(t))}catch(n){throw new rt(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ti(ye.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new rt(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new rt(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Rt(this._lat,t._lat)||Rt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=/^__.*__$/;class y2{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Er(t,this.data,this.fieldMask,n,this.fieldTransforms):new bs(t,this.data,n,this.fieldTransforms)}}function Ng(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ft()}}class lu{constructor(t,n,r,i,s,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new lu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Bo(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Ng(this.fu)&&_2.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class v2{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||fa(t)}Fu(t,n,r,i=!1){return new lu({fu:t,methodName:n,vu:r,path:ue.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mg(e){const t=e._freezeSettings(),n=fa(e._databaseId);return new v2(e._databaseId,!!t.ignoreUndefinedProperties,n)}function E2(e,t,n,r,i,s={}){const a=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);Ug("Data must be an object, but it was:",a,r);const l=Lg(r,a);let c,h;if(s.merge)c=new qe(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=b2(t,m,n);if(!a.contains(g))throw new rt(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);A2(f,g)||f.push(g)}c=new qe(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new y2(new Me(l),c,h)}function w2(e,t,n,r=!1){return cu(n,e.Fu(r?4:3,t))}function cu(e,t){if(Fg(e=Gr(e)))return Ug("Unsupported field value:",t,e),Lg(e,t);if(e instanceof Og)return function(r,i){if(!Ng(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=cu(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Gr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qt.fromDate(r);return{timestampValue:Fo(i.serializer,s)}}if(r instanceof Qt){const s=new Qt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fo(i.serializer,s)}}if(r instanceof au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ti)return{bytesValue:ig(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${pa(r)}`)}(e,t)}function Lg(e,t){const n={};return xp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):si(e,(r,i)=>{const s=cu(i,t.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Fg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Qt||e instanceof au||e instanceof ti||e instanceof Fe||e instanceof Og)}function Ug(e,t,n){if(!Fg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=pa(n);throw r==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function b2(e,t,n){if((t=Gr(t))instanceof ou)return t._internalPath;if(typeof t=="string")return $g(e,t);throw Bo("Field path arguments must be of type string or ",e,!1,void 0,n)}const T2=new RegExp("[~\\*/\\[\\]]");function $g(e,t,n){if(t.search(T2)>=0)throw Bo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ou(...t.split("."))._internalPath}catch{throw Bo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bo(e,t,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new rt(U.INVALID_ARGUMENT,l+e+c)}function A2(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new I2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(uu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class I2 extends Bg{data(){return super.data()}}function uu(e,t){return typeof t=="string"?$g(e,t):t instanceof ou?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new rt(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hu{}class S2 extends hu{}function jg(e,t,...n){let r=[];t instanceof hu&&r.push(t),r=r.concat(n),function(s){const a=s.filter(c=>c instanceof fu).length,l=s.filter(c=>c instanceof _a).length;if(a>1||a>0&&l>0)throw new rt(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class _a extends S2{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new _a(t,n,r)}_apply(t){const n=this._parse(t);return qg(t._query,n),new li(t.firestore,t.converter,zl(t._query,n))}_parse(t){const n=Mg(t.firestore);return function(s,a,l,c,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new rt(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wd(m,f);const w=[];for(const C of m)w.push(Ed(c,s,C));g={arrayValue:{values:w}}}else g=Ed(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wd(m,f),g=w2(l,a,m,f==="in"||f==="not-in");return Wt.create(h,f,g)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function zg(e,t,n){const r=t,i=uu("where",e);return _a._create(i,r,n)}class fu extends hu{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new fu(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qe.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)qg(a,c),a=zl(a,c)}(t._query,n),new li(t.firestore,t.converter,zl(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ed(e,t,n){if(typeof(n=Gr(n))=="string"){if(n==="")throw new rt(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$p(t)&&n.indexOf("/")!==-1)throw new rt(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Lt.fromString(n));if(!lt.isDocumentKey(r))throw new rt(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zf(e,new lt(r))}if(n instanceof Fe)return zf(e,n._key);throw new rt(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(n)}.`)}function wd(e,t){if(!Array.isArray(e)||e.length===0)throw new rt(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function qg(e,t){const n=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new rt(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new rt(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class P2{convertValue(t,n="none"){switch(_r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Gt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(gr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw ft()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return si(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new au(Gt(t.latitude),Gt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Bc(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cs(t));default:return null}}convertTimestamp(t){const n=qn(t);return new Qt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Lt.fromString(t);Ot(ug(r));const i=new us(r.get(1),r.get(3)),s=new lt(r.popFirst(5));return i.isEqual(n)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class x2 extends Bg{constructor(t,n,r,i,s,a){super(t,n,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(uu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eo extends x2{data(t={}){return super.data(t)}}class k2{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new ao(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new rt(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Eo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ao(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Eo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ao(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:V2(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function V2(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ft()}}class D2 extends P2{constructor(t){super(),this.firestore=t}convertBytes(t){return new ti(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function du(e){e=$o(e,li);const t=$o(e.firestore,su),n=Vg(t),r=new D2(t);return R2(e._query),h2(n,e._query).then(i=>new k2(t,r,e,i))}function Hg(e,t){const n=$o(e.firestore,su),r=m2(e),i=C2(e.converter,t);return O2(n,[E2(Mg(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function O2(e,t){return function(r,i){const s=new Fn;return r.asyncQueue.enqueueAndForget(async()=>YI(await c2(r),i,s)),s.promise}(Vg(e),t)}(function(t,n=!0){(function(i){ii=i})(dT),Vo(new os("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new su(new PT(r.getProvider("auth-internal")),new VT(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new rt(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Br(Uf,"4.6.2",t),Br(Uf,"4.6.2","esm2017")})();const N2={apiKey:"AIzaSyBDvuCqnWr0d3QX7bOmkBlM5dIFmmAAL6c",authDomain:"song-lyrics-29f0c.firebaseapp.com",projectId:"song-lyrics-29f0c",storageBucket:"song-lyrics-29f0c.appspot.com",messagingSenderId:"581822410871",appId:"1:581822410871:web:9262efbfcccbc92e5bd672",measurementId:"G-WZKND2ED1H"},M2=yp(N2),Ss=g2(M2);console.log("Firebase initialized");async function vR(e){try{return{id:(await Hg(Rs(Ss,"lyrics"),e)).id}}catch(t){throw console.error("Error creating lyrics:",t),t}}async function L2(e){try{const t=jg(Rs(Ss,"lyrics"),zg("youtubeId","==",e)),n=await du(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(t){throw console.error("Error getting lyrics:",t),t}}async function ER(e){try{return{id:(await Hg(Rs(Ss,"songs"),e)).id}}catch(t){throw console.error("Error creating song:",t),t}}async function F2(){try{const e=await du(Rs(Ss,"songs")),t=[];return e.forEach(n=>{const r={id:n.id,...n.data()};t.push(r)}),t}catch(e){throw console.error("Error getting songs:",e),e}}async function U2(e){try{const t=jg(Rs(Ss,"songs"),zg("youtubeId","==",e)),n=await du(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r.length===0?null:r[0]}catch(t){throw console.error("Error getting lyrics:",t),t}}class $2{constructor(t){Pr(this,"_findIndex",t=>{const n=this.startTimes.findIndex(r=>r>t);return n>=0?n-1:this.linesCount-1});Pr(this,"getPrevIndex",t=>{const n=this._findIndex(t);return n>=0?n-1:null});Pr(this,"getCurrIndex",t=>{const n=this._findIndex(t);return n>=0?n:null});Pr(this,"getNextIndex",t=>{const n=this._findIndex(t);return n<this.linesCount-1?n+1:null});Pr(this,"getTimestamp",t=>this.startTimes[t]);if(t.sort((r,i)=>r.language.localeCompare(i.language)),this.lyrics=[],this.supportedLangs=[],t.forEach(r=>{this.lyrics.push(r.lines),this.supportedLangs.push(r.language)}),this.supportedLangs.includes("jp_yomi")){const r=this.supportedLangs.indexOf("jp");r>=0&&(this.lyrics.splice(r,1),this.supportedLangs.splice(r,1))}const n=t.find(r=>r.language==="jp_yomi"||r.language==="jp");this.linesCount=n.lines.length,delete n.lines,Object.assign(this,n)}}const B2={class:"page single"},j2={class:"single-title animate__animated animate__flipInX"},z2=W("h2",{class:"single-subtitle"},"Create SVG diagrams using GoAT or Mermaid in DoIt",-1),q2={key:1,class:"single-title animate__animated animate__flipInX"},H2={class:"content",id:"content","lg-uid":"lg0"},K2={class:"video-container"},G2={key:0,id:"lrc"},W2=["onClick","data-time"],Q2=["innerHTML","data-lang"],Y2={key:1},X2={id:"control-buttons"},J2={__name:"SongDetail",props:{youtubeId:{type:String,required:!0}},setup(e){const t=e,n=oe(null),r=oe(null),i=oe(null),s=oe("Loading..."),a=oe(!1),l=oe(null),c=oe(null),h=oe(!1),{instance:f,togglePlay:m,onReady:g,onStateChange:w}=JE(t.youtubeId,c,{}),C=oe(0),k=oe(null);_s(async()=>{r.value=await U2(t.youtubeId);const z=await L2(t.youtubeId);console.log(z),i.value=new $2(z)}),km(()=>{clearInterval(n.value)}),g(z=>{n.value=setInterval(()=>{if(i.value===null){console.log("Lyrics not ready");return}C.value=f==null?void 0:f.value.getCurrentTime(),k.value=i.value.getCurrIndex(C.value),a.value&&k.value!==l.value&&O(i.value.getTimestamp(l.value))},50),console.log("Player is ready",z)}),w(z=>{h.value=z.data!==Vc.PAUSED});const O=z=>{f==null||f.value.seekTo(z),f==null||f.value.playVideo()},x=z=>{O(z),a.value&&(l.value=i.value.getCurrIndex(z))},V=()=>{a.value=!a.value,l.value=k.value},F=z=>{const tt=z==="prev"?k.value-1:k.value+1;O(i.value.getTimestamp(tt)),a.value&&(l.value=tt)};return(z,tt)=>{const G=dr("font-awesome-icon");return Zt(),te(ne,null,[W("article",B2,[r.value?(Zt(),te(ne,{key:0},[W("h1",j2,hn(r.value.title),1),z2,St(up,{song:r.value},null,8,["song"])],64)):(Zt(),te("h1",q2,"Loading...")),W("div",H2,[W("div",K2,[W("div",{ref_key:"playerRef",ref:c},null,512)]),i.value?(Zt(),te("div",G2,[(Zt(!0),te(ne,null,es(i.value.startTimes,(T,y)=>(Zt(),te("div",{class:"lrc__line",onClick:v=>x(T),"data-time":T,key:y},[(Zt(!0),te(ne,null,es(i.value.supportedLangs,(v,A)=>(Zt(),te("div",{innerHTML:i.value.lyrics[A][y],"data-lang":v,class:en({active:y===k.value}),key:A},null,10,Q2))),128))],8,W2))),128))])):(Zt(),te("div",Y2,hn(s.value),1))])]),W("div",X2,[W("a",{href:"#",class:"fixed-button",title:"Previous Line",onClick:tt[0]||(tt[0]=Mr(T=>F("prev"),["prevent"]))},[St(G,{icon:["fas","backward"],"fixed-width":""})]),W("a",{href:"#",class:"fixed-button",title:"Toggle Player State",onClick:tt[1]||(tt[1]=Mr((...T)=>be(m)&&be(m)(...T),["prevent"]))},[St(G,{icon:["fas",h.value?"pause":"play"],"fixed-width":""},null,8,["icon"])]),W("a",{href:"#",class:"fixed-button",title:"Next Line",onClick:tt[2]||(tt[2]=Mr(T=>F("next"),["prevent"]))},[St(G,{icon:["fas","forward"],"fixed-width":""})]),W("a",{href:"#",class:en(["fixed-button",a.value?"active":""]),id:"repeat",title:"Repeat Current Line",onClick:Mr(V,["prevent"])},[St(G,{icon:["fas","undo-alt"],"fixed-width":""})],2)])],64)}}},Z2={class:"page home",posts:""},tR=W("div",{class:"home-profile"},[W("h1",{class:"home-title"},"所有歌曲"),W("h2",{class:"home-subtitle"},[W("div",{id:"id-1",class:"typeit"},"沉浸在Aimer音樂的世界")])],-1),eR={class:"featured-image-preview"},nR=["src"],rR={class:"single-title"},iR=W("div",{class:"content"}," This post explains how you can create custom SVG diagrams in DoIt using GoAT or Mermaid. ",-1),sR={class:"post-footer"},oR={class:"post-tags"},aR=W("a",{href:"/tags/diagram/"},"diagram",-1),lR=W("a",{href:"/tags/markdown/"},"Markdown",-1),cR={__name:"SongList",setup(e){const t=ni([]);return _s(async()=>{const n=await F2();t.push(...n)}),(n,r)=>{const i=dr("router-link"),s=dr("font-awesome-icon");return Zt(),te("div",Z2,[tR,(Zt(!0),te(ne,null,es(t,a=>(Zt(),te("article",{class:"single summary",key:a.id},[St(i,{to:{name:"SongDetail",params:{youtubeId:a.youtubeId}}},{default:ir(()=>[W("div",eR,[W("img",{src:`https://i.ytimg.com/vi_webp/${a.youtubeId}/sddefault.webp`,loading:"lazy"},null,8,nR)]),W("h2",rR,hn(a.title),1)]),_:2},1032,["to"]),St(up,{song:a},null,8,["song"]),iR,W("div",sR,[St(i,{to:{name:"SongDetail",params:{youtubeId:a.youtubeId}}},{default:ir(()=>[Re(" Read more... ")]),_:2},1032,["to"]),W("div",oR,[St(s,{icon:["fas","tags"],"fixed-width":""}),Re(" "),aR,Re(", "),lR])])]))),128))])}}},uR=[{path:"/",name:"SongList",component:cR},{path:"/song/:youtubeId",name:"SongDetail",component:J2,props:!0},{path:"/edit",name:"EditLyrics",component:()=>Bw(()=>import("./EditLyrics-CVGNbYOH.js"),__vite__mapDeps([0,1]))}],hR=fw({history:j1("/"),routes:uR,scrollBehavior(){return{top:0}}});Qy.add(av,Xy,ov,sv,tv,cv,uv,ev,iv,Jy,nv);const ya=kE(Fw);ya.use(hR);ya.use(XE());ya.component("font-awesome-icon",HE);ya.mount("#app");export{ne as F,te as a,W as b,le as c,es as d,mR as e,ER as f,vR as g,m2 as h,Ss as i,Zt as o,dR as p,oe as r,hn as t,be as u,pR as v,Pm as w};

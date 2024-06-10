const __vite__fileDeps=["assets/EditLyrics-B0JHo6cJ.js","assets/EditLyrics-C-R1Xrpx.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var y_=Object.defineProperty;var v_=(e,t,n)=>t in e?y_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Pr=(e,t,n)=>(v_(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sh(Object(n),!0).forEach(function(r){ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bo(e){"@babel/helpers - typeof";return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bo(e)}function E_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w_(e,t,n){return t&&b_(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jl(e,t){return A_(e)||S_(e,t)||wd(e,t)||P_()}function ps(e){return T_(e)||I_(e)||wd(e)||R_()}function T_(e){if(Array.isArray(e))return sl(e)}function A_(e){if(Array.isArray(e))return e}function I_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function S_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,l=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw l}}return r}}function wd(e,t){if(e){if(typeof e=="string")return sl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sl(e,t)}}function sl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oh=function(){},Zl={},Td={},Ad=null,Id={mark:oh,measure:oh};try{typeof window<"u"&&(Zl=window),typeof document<"u"&&(Td=document),typeof MutationObserver<"u"&&(Ad=MutationObserver),typeof performance<"u"&&(Id=performance)}catch{}var C_=Zl.navigator||{},ah=C_.userAgent,lh=ah===void 0?"":ah,Bn=Zl,Ft=Td,ch=Ad,zs=Id;Bn.document;var vn=!!Ft.documentElement&&!!Ft.head&&typeof Ft.addEventListener=="function"&&typeof Ft.createElement=="function",Sd=~lh.indexOf("MSIE")||~lh.indexOf("Trident/"),qs,Hs,Ks,Gs,Ws,mn="___FONT_AWESOME___",ol=16,Rd="fa",Pd="svg-inline--fa",fr="data-fa-i2svg",al="data-fa-pseudo-element",x_="data-fa-pseudo-element-pending",tc="data-prefix",ec="data-icon",uh="fontawesome-i2svg",k_="async",V_=["HTML","HEAD","STYLE","SCRIPT"],Cd=function(){try{return!0}catch{return!1}}(),Mt="classic",qt="sharp",nc=[Mt,qt];function gs(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Mt]}})}var Wi=gs((qs={},ne(qs,Mt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ne(qs,qt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),qs)),Qi=gs((Hs={},ne(Hs,Mt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ne(Hs,qt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Hs)),Yi=gs((Ks={},ne(Ks,Mt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ne(Ks,qt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ks)),D_=gs((Gs={},ne(Gs,Mt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ne(Gs,qt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Gs)),N_=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,xd="fa-layers-text",O_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,M_=gs((Ws={},ne(Ws,Mt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ne(Ws,qt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ws)),kd=[1,2,3,4,5,6,7,8,9,10],L_=kd.concat([11,12,13,14,15,16,17,18,19,20]),F_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ir={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xi=new Set;Object.keys(Qi[Mt]).map(Xi.add.bind(Xi));Object.keys(Qi[qt]).map(Xi.add.bind(Xi));var U_=[].concat(nc,ps(Xi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ir.GROUP,ir.SWAP_OPACITY,ir.PRIMARY,ir.SECONDARY]).concat(kd.map(function(e){return"".concat(e,"x")})).concat(L_.map(function(e){return"w-".concat(e)})),Di=Bn.FontAwesomeConfig||{};function $_(e){var t=Ft.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function B_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ft&&typeof Ft.querySelector=="function"){var j_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];j_.forEach(function(e){var t=Jl(e,2),n=t[0],r=t[1],i=B_($_(n));i!=null&&(Di[r]=i)})}var Vd={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rd,replacementClass:Pd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Di.familyPrefix&&(Di.cssPrefix=Di.familyPrefix);var zr=Z(Z({},Vd),Di);zr.autoReplaceSvg||(zr.observeMutations=!1);var st={};Object.keys(Vd).forEach(function(e){Object.defineProperty(st,e,{enumerable:!0,set:function(n){zr[e]=n,Ni.forEach(function(r){return r(st)})},get:function(){return zr[e]}})});Object.defineProperty(st,"familyPrefix",{enumerable:!0,set:function(t){zr.cssPrefix=t,Ni.forEach(function(n){return n(st)})},get:function(){return zr.cssPrefix}});Bn.FontAwesomeConfig=st;var Ni=[];function z_(e){return Ni.push(e),function(){Ni.splice(Ni.indexOf(e),1)}}var Sn=ol,en={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function q_(e){if(!(!e||!vn)){var t=Ft.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Ft.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return Ft.head.insertBefore(t,r),e}}var H_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ji(){for(var e=12,t="";e-- >0;)t+=H_[Math.random()*62|0];return t}function ni(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rc(e){return e.classList?ni(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Dd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function K_(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Dd(e[n]),'" ')},"").trim()}function zo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ic(e){return e.size!==en.size||e.x!==en.x||e.y!==en.y||e.rotate!==en.rotate||e.flipX||e.flipY}function G_(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(l)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:h}}function W_(e){var t=e.transform,n=e.width,r=n===void 0?ol:n,i=e.height,s=i===void 0?ol:i,a=e.startCentered,l=a===void 0?!1:a,c="";return l&&Sd?c+="translate(".concat(t.x/Sn-r/2,"em, ").concat(t.y/Sn-s/2,"em) "):l?c+="translate(calc(-50% + ".concat(t.x/Sn,"em), calc(-50% + ").concat(t.y/Sn,"em)) "):c+="translate(".concat(t.x/Sn,"em, ").concat(t.y/Sn,"em) "),c+="scale(".concat(t.size/Sn*(t.flipX?-1:1),", ").concat(t.size/Sn*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Q_=`:root, :host {
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
}`;function Nd(){var e=Rd,t=Pd,n=st.cssPrefix,r=st.replacementClass,i=Q_;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var hh=!1;function Na(){st.autoAddCss&&!hh&&(q_(Nd()),hh=!0)}var Y_={mixout:function(){return{dom:{css:Nd,insertCss:Na}}},hooks:function(){return{beforeDOMElementCreation:function(){Na()},beforeI2svg:function(){Na()}}}},pn=Bn||{};pn[mn]||(pn[mn]={});pn[mn].styles||(pn[mn].styles={});pn[mn].hooks||(pn[mn].hooks={});pn[mn].shims||(pn[mn].shims=[]);var ze=pn[mn],Od=[],X_=function e(){Ft.removeEventListener("DOMContentLoaded",e),wo=1,Od.map(function(t){return t()})},wo=!1;vn&&(wo=(Ft.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ft.readyState),wo||Ft.addEventListener("DOMContentLoaded",X_));function J_(e){vn&&(wo?setTimeout(e,0):Od.push(e))}function _s(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Dd(e):"<".concat(t," ").concat(K_(r),">").concat(s.map(_s).join(""),"</").concat(t,">")}function fh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Oa=function(t,n,r,i){var s=Object.keys(t),a=s.length,l=n,c,h,f;for(r===void 0?(c=1,f=t[s[0]]):(c=0,f=r);c<a;c++)h=s[c],f=l(f,t[h],h,t);return f};function Z_(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ll(e){var t=Z_(e);return t.length===1?t[0].toString(16):null}function ty(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function dh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function cl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=dh(t);typeof ze.hooks.addPack=="function"&&!i?ze.hooks.addPack(e,dh(t)):ze.styles[e]=Z(Z({},ze.styles[e]||{}),s),e==="fas"&&cl("fa",t)}var Qs,Ys,Xs,Nr=ze.styles,ey=ze.shims,ny=(Qs={},ne(Qs,Mt,Object.values(Yi[Mt])),ne(Qs,qt,Object.values(Yi[qt])),Qs),sc=null,Md={},Ld={},Fd={},Ud={},$d={},ry=(Ys={},ne(Ys,Mt,Object.keys(Wi[Mt])),ne(Ys,qt,Object.keys(Wi[qt])),Ys);function iy(e){return~U_.indexOf(e)}function sy(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!iy(i)?i:null}var Bd=function(){var t=function(s){return Oa(Nr,function(a,l,c){return a[c]=Oa(l,s,{}),a},{})};Md=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var l=s[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){i[c.toString(16)]=a})}return i}),Ld=t(function(i,s,a){if(i[a]=a,s[2]){var l=s[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){i[c]=a})}return i}),$d=t(function(i,s,a){var l=s[2];return i[a]=a,l.forEach(function(c){i[c]=a}),i});var n="far"in Nr||st.autoFetchSvg,r=Oa(ey,function(i,s){var a=s[0],l=s[1],c=s[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:c}),i},{names:{},unicodes:{}});Fd=r.names,Ud=r.unicodes,sc=qo(st.styleDefault,{family:st.familyDefault})};z_(function(e){sc=qo(e.styleDefault,{family:st.familyDefault})});Bd();function oc(e,t){return(Md[e]||{})[t]}function oy(e,t){return(Ld[e]||{})[t]}function sr(e,t){return($d[e]||{})[t]}function jd(e){return Fd[e]||{prefix:null,iconName:null}}function ay(e){var t=Ud[e],n=oc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function jn(){return sc}var ac=function(){return{prefix:null,iconName:null,rest:[]}};function qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Mt:n,i=Wi[r][e],s=Qi[r][e]||Qi[r][i],a=e in ze.styles?e:null;return s||a||null}var mh=(Xs={},ne(Xs,Mt,Object.keys(Yi[Mt])),ne(Xs,qt,Object.keys(Yi[qt])),Xs);function Ho(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ne(t,Mt,"".concat(st.cssPrefix,"-").concat(Mt)),ne(t,qt,"".concat(st.cssPrefix,"-").concat(qt)),t),a=null,l=Mt;(e.includes(s[Mt])||e.some(function(h){return mh[Mt].includes(h)}))&&(l=Mt),(e.includes(s[qt])||e.some(function(h){return mh[qt].includes(h)}))&&(l=qt);var c=e.reduce(function(h,f){var m=sy(st.cssPrefix,f);if(Nr[f]?(f=ny[l].includes(f)?D_[l][f]:f,a=f,h.prefix=f):ry[l].indexOf(f)>-1?(a=f,h.prefix=qo(f,{family:l})):m?h.iconName=m:f!==st.replacementClass&&f!==s[Mt]&&f!==s[qt]&&h.rest.push(f),!i&&h.prefix&&h.iconName){var g=a==="fa"?jd(h.iconName):{},b=sr(h.prefix,h.iconName);g.prefix&&(a=null),h.iconName=g.iconName||b||h.iconName,h.prefix=g.prefix||h.prefix,h.prefix==="far"&&!Nr.far&&Nr.fas&&!st.autoFetchSvg&&(h.prefix="fas")}return h},ac());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===qt&&(Nr.fass||st.autoFetchSvg)&&(c.prefix="fass",c.iconName=sr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=jn()||"fas"),c}var ly=function(){function e(){E_(this,e),this.definitions={}}return w_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=Z(Z({},n.definitions[l]||{}),a[l]),cl(l,a[l]);var c=Yi[Mt][l];c&&cl(c,a[l]),Bd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],l=a.prefix,c=a.iconName,h=a.icon,f=h[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[l][m]=h)}),n[l][c]=h}),n}}]),e}(),ph=[],Or={},Lr={},cy=Object.keys(Lr);function uy(e,t){var n=t.mixoutsTo;return ph=e,Or={},Object.keys(Lr).forEach(function(r){cy.indexOf(r)===-1&&delete Lr[r]}),ph.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),bo(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Or[a]||(Or[a]=[]),Or[a].push(s[a])})}r.provides&&r.provides(Lr)}),n}function ul(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Or[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function dr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Or[e]||[];i.forEach(function(s){s.apply(null,n)})}function gn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lr[e]?Lr[e].apply(null,t):void 0}function hl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||jn();if(t)return t=sr(n,t)||t,fh(zd.definitions,n,t)||fh(ze.styles,n,t)}var zd=new ly,hy=function(){st.autoReplaceSvg=!1,st.observeMutations=!1,dr("noAuto")},fy={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return vn?(dr("beforeI2svg",t),gn("pseudoElements2svg",t),gn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;st.autoReplaceSvg===!1&&(st.autoReplaceSvg=!0),st.observeMutations=!0,J_(function(){my({autoReplaceSvgRoot:n}),dr("watch",t)})}},dy={icon:function(t){if(t===null)return null;if(bo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:sr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=qo(t[0]);return{prefix:r,iconName:sr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(st.cssPrefix,"-"))>-1||t.match(N_))){var i=Ho(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||jn(),iconName:sr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=jn();return{prefix:s,iconName:sr(s,t)||t}}}},De={noAuto:hy,config:st,dom:fy,parse:dy,library:zd,findIconDefinition:hl,toHtml:_s},my=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Ft:n;(Object.keys(ze.styles).length>0||st.autoFetchSvg)&&vn&&st.autoReplaceSvg&&De.dom.i2svg({node:r})};function Ko(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _s(r)})}}),Object.defineProperty(e,"node",{get:function(){if(vn){var r=Ft.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function py(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(ic(a)&&n.found&&!r.found){var l=n.width,c=n.height,h={x:l/c/2,y:.5};i.style=zo(Z(Z({},s),{},{"transform-origin":"".concat(h.x+a.x/16,"em ").concat(h.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function gy(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(st.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},i),{},{id:a}),children:r}]}]}function lc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,l=e.symbol,c=e.title,h=e.maskId,f=e.titleId,m=e.extra,g=e.watchable,b=g===void 0?!1:g,C=r.found?r:n,k=C.width,N=C.height,x=i==="fak",V=[st.replacementClass,s?"".concat(st.cssPrefix,"-").concat(s):""].filter(function(v){return m.classes.indexOf(v)===-1}).filter(function(v){return v!==""||!!v}).concat(m.classes).join(" "),F={children:[],attributes:Z(Z({},m.attributes),{},{"data-prefix":i,"data-icon":s,class:V,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(N)})},z=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/N*16*.0625,"em")}:{};b&&(F.attributes[fr]=""),c&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(f||Ji())},children:[c]}),delete F.attributes.title);var tt=Z(Z({},F),{},{prefix:i,iconName:s,main:n,mask:r,maskId:h,transform:a,symbol:l,styles:Z(Z({},z),m.styles)}),W=r.found&&n.found?gn("generateAbstractMask",tt)||{children:[],attributes:{}}:gn("generateAbstractIcon",tt)||{children:[],attributes:{}},T=W.children,y=W.attributes;return tt.children=T,tt.attributes=y,l?gy(tt):py(tt)}function gh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,l=e.watchable,c=l===void 0?!1:l,h=Z(Z(Z({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(h[fr]="");var f=Z({},a.styles);ic(i)&&(f.transform=W_({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=zo(f);m.length>0&&(h.style=m);var g=[];return g.push({tag:"span",attributes:h,children:[t]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function _y(e){var t=e.content,n=e.title,r=e.extra,i=Z(Z(Z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=zo(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Ma=ze.styles;function fl(e){var t=e[0],n=e[1],r=e.slice(4),i=Jl(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(st.cssPrefix,"-").concat(ir.GROUP)},children:[{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(ir.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(st.cssPrefix,"-").concat(ir.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var yy={found:!1,width:512,height:512};function vy(e,t){!Cd&&!st.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function dl(e,t){var n=t;return t==="fa"&&st.styleDefault!==null&&(t=jn()),new Promise(function(r,i){if(gn("missingIconAbstract"),n==="fa"){var s=jd(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ma[t]&&Ma[t][e]){var a=Ma[t][e];return r(fl(a))}vy(e,t),r(Z(Z({},yy),{},{icon:st.showMissingIcons&&e?gn("missingIconAbstract")||{}:{}}))})}var _h=function(){},ml=st.measurePerformance&&zs&&zs.mark&&zs.measure?zs:{mark:_h,measure:_h},Pi='FA "6.5.2"',Ey=function(t){return ml.mark("".concat(Pi," ").concat(t," begins")),function(){return qd(t)}},qd=function(t){ml.mark("".concat(Pi," ").concat(t," ends")),ml.measure("".concat(Pi," ").concat(t),"".concat(Pi," ").concat(t," begins"),"".concat(Pi," ").concat(t," ends"))},cc={begin:Ey,end:qd},co=function(){};function yh(e){var t=e.getAttribute?e.getAttribute(fr):null;return typeof t=="string"}function by(e){var t=e.getAttribute?e.getAttribute(tc):null,n=e.getAttribute?e.getAttribute(ec):null;return t&&n}function wy(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(st.replacementClass)}function Ty(){if(st.autoReplaceSvg===!0)return uo.replace;var e=uo[st.autoReplaceSvg];return e||uo.replace}function Ay(e){return Ft.createElementNS("http://www.w3.org/2000/svg",e)}function Iy(e){return Ft.createElement(e)}function Hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ay:Iy:n;if(typeof e=="string")return Ft.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(Hd(a,{ceFn:r}))}),i}function Sy(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var uo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Hd(i),n)}),n.getAttribute(fr)===null&&st.keepOriginalSource){var r=Ft.createComment(Sy(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~rc(n).indexOf(st.replacementClass))return uo.replace(t);var i=new RegExp("".concat(st.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,c){return c===st.replacementClass||c.match(i)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(l){return _s(l)}).join(`
`);n.setAttribute(fr,""),n.innerHTML=a}};function vh(e){e()}function Kd(e,t){var n=typeof t=="function"?t:co;if(e.length===0)n();else{var r=vh;st.mutateApproach===k_&&(r=Bn.requestAnimationFrame||vh),r(function(){var i=Ty(),s=cc.begin("mutate");e.map(i),s(),n()})}}var uc=!1;function Gd(){uc=!0}function pl(){uc=!1}var To=null;function Eh(e){if(ch&&st.observeMutations){var t=e.treeCallback,n=t===void 0?co:t,r=e.nodeCallback,i=r===void 0?co:r,s=e.pseudoElementsCallback,a=s===void 0?co:s,l=e.observeMutationsRoot,c=l===void 0?Ft:l;To=new ch(function(h){if(!uc){var f=jn();ni(h).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!yh(m.addedNodes[0])&&(st.searchPseudoElements&&a(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&st.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&yh(m.target)&&~F_.indexOf(m.attributeName))if(m.attributeName==="class"&&by(m.target)){var g=Ho(rc(m.target)),b=g.prefix,C=g.iconName;m.target.setAttribute(tc,b||f),C&&m.target.setAttribute(ec,C)}else wy(m.target)&&i(m.target)})}}),vn&&To.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ry(){To&&To.disconnect()}function Py(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],l=s.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function Cy(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ho(rc(e));return i.prefix||(i.prefix=jn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=oy(i.prefix,e.innerText)||oc(i.prefix,ll(e.innerText))),!i.iconName&&st.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function xy(e){var t=ni(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return st.autoA11y&&(n?t["aria-labelledby"]="".concat(st.replacementClass,"-title-").concat(r||Ji()):(t["aria-hidden"]="true",t.focusable="false")),t}function ky(){return{iconName:null,title:null,titleId:null,prefix:null,transform:en,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Cy(e),r=n.iconName,i=n.prefix,s=n.rest,a=xy(e),l=ul("parseNodeAttributes",{},e),c=t.styleParser?Py(e):[];return Z({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:en,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},l)}var Vy=ze.styles;function Wd(e){var t=st.autoReplaceSvg==="nest"?bh(e,{styleParser:!1}):bh(e);return~t.extra.classes.indexOf(xd)?gn("generateLayersText",e,t):gn("generateSvgReplacementMutation",e,t)}var zn=new Set;nc.map(function(e){zn.add("fa-".concat(e))});Object.keys(Wi[Mt]).map(zn.add.bind(zn));Object.keys(Wi[qt]).map(zn.add.bind(zn));zn=ps(zn);function wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!vn)return Promise.resolve();var n=Ft.documentElement.classList,r=function(m){return n.add("".concat(uh,"-").concat(m))},i=function(m){return n.remove("".concat(uh,"-").concat(m))},s=st.autoFetchSvg?zn:nc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Vy));s.includes("fa")||s.push("fa");var a=[".".concat(xd,":not([").concat(fr,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(fr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=ni(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var c=cc.begin("onTree"),h=l.reduce(function(f,m){try{var g=Wd(m);g&&f.push(g)}catch(b){Cd||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,m){Promise.all(h).then(function(g){Kd(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),f()})}).catch(function(g){c(),m(g)})})}function Dy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wd(e).then(function(n){n&&Kd([n],t)})}function Ny(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:hl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:hl(i||{})),e(r,Z(Z({},n),{},{mask:i}))}}var Oy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?en:r,s=n.symbol,a=s===void 0?!1:s,l=n.mask,c=l===void 0?null:l,h=n.maskId,f=h===void 0?null:h,m=n.title,g=m===void 0?null:m,b=n.titleId,C=b===void 0?null:b,k=n.classes,N=k===void 0?[]:k,x=n.attributes,V=x===void 0?{}:x,F=n.styles,z=F===void 0?{}:F;if(t){var tt=t.prefix,W=t.iconName,T=t.icon;return Ko(Z({type:"icon"},t),function(){return dr("beforeDOMElementCreation",{iconDefinition:t,params:n}),st.autoA11y&&(g?V["aria-labelledby"]="".concat(st.replacementClass,"-title-").concat(C||Ji()):(V["aria-hidden"]="true",V.focusable="false")),lc({icons:{main:fl(T),mask:c?fl(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:tt,iconName:W,transform:Z(Z({},en),i),symbol:a,title:g,maskId:f,titleId:C,extra:{attributes:V,styles:z,classes:N}})})}},My={mixout:function(){return{icon:Ny(Oy)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wh,n.nodeCallback=Dy,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Ft:r,s=n.callback,a=s===void 0?function(){}:s;return wh(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,l=r.prefix,c=r.transform,h=r.symbol,f=r.mask,m=r.maskId,g=r.extra;return new Promise(function(b,C){Promise.all([dl(i,l),f.iconName?dl(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var N=Jl(k,2),x=N[0],V=N[1];b([n,lc({icons:{main:x,mask:V},prefix:l,iconName:i,transform:c,symbol:h,maskId:m,title:s,titleId:a,extra:g,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,l=n.styles,c=zo(l);c.length>0&&(i.style=c);var h;return ic(a)&&(h=gn("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(h||s.icon),{children:r,attributes:i}}}},Ly={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ko({type:"layer"},function(){dr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(c){a=a.concat(c.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(st.cssPrefix,"-layers")].concat(ps(s)).join(" ")},children:a}]})}}}},Fy={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,c=r.attributes,h=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return Ko({type:"counter",content:n},function(){return dr("beforeDOMElementCreation",{content:n,params:r}),_y({content:n.toString(),title:s,extra:{attributes:h,styles:m,classes:["".concat(st.cssPrefix,"-layers-counter")].concat(ps(l))}})})}}}},Uy={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?en:i,a=r.title,l=a===void 0?null:a,c=r.classes,h=c===void 0?[]:c,f=r.attributes,m=f===void 0?{}:f,g=r.styles,b=g===void 0?{}:g;return Ko({type:"text",content:n},function(){return dr("beforeDOMElementCreation",{content:n,params:r}),gh({content:n,transform:Z(Z({},en),s),title:l,extra:{attributes:m,styles:b,classes:["".concat(st.cssPrefix,"-layers-text")].concat(ps(h))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,l=null,c=null;if(Sd){var h=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/h,c=f.height/h}return st.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,gh({content:n.innerHTML,width:l,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},$y=new RegExp('"',"ug"),Th=[1105920,1112319];function By(e){var t=e.replace($y,""),n=ty(t,0),r=n>=Th[0]&&n<=Th[1],i=t.length===2?t[0]===t[1]:!1;return{value:ll(i?t[0]:t),isSecondary:r||i}}function Ah(e,t){var n="".concat(x_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=ni(e.children),a=s.filter(function(T){return T.getAttribute(al)===t})[0],l=Bn.getComputedStyle(e,t),c=l.getPropertyValue("font-family").match(O_),h=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&f!=="none"&&f!==""){var m=l.getPropertyValue("content"),g=~["Sharp"].indexOf(c[2])?qt:Mt,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Qi[g][c[2].toLowerCase()]:M_[g][h],C=By(m),k=C.value,N=C.isSecondary,x=c[0].startsWith("FontAwesome"),V=oc(b,k),F=V;if(x){var z=ay(k);z.iconName&&z.prefix&&(V=z.iconName,b=z.prefix)}if(V&&!N&&(!a||a.getAttribute(tc)!==b||a.getAttribute(ec)!==F)){e.setAttribute(n,F),a&&e.removeChild(a);var tt=ky(),W=tt.extra;W.attributes[al]=t,dl(V,b).then(function(T){var y=lc(Z(Z({},tt),{},{icons:{main:T,mask:ac()},prefix:b,iconName:F,extra:W,watchable:!0})),v=Ft.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(v,e.firstChild):e.appendChild(v),v.outerHTML=y.map(function(A){return _s(A)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function jy(e){return Promise.all([Ah(e,"::before"),Ah(e,"::after")])}function zy(e){return e.parentNode!==document.head&&!~V_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(al)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ih(e){if(vn)return new Promise(function(t,n){var r=ni(e.querySelectorAll("*")).filter(zy).map(jy),i=cc.begin("searchPseudoElements");Gd(),Promise.all(r).then(function(){i(),pl(),t()}).catch(function(){i(),pl(),n()})})}var qy={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ih,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ft:r;st.searchPseudoElements&&Ih(i)}}},Sh=!1,Hy={mixout:function(){return{dom:{unwatch:function(){Gd(),Sh=!0}}}},hooks:function(){return{bootstrap:function(){Eh(ul("mutationObserverCallbacks",{}))},noAuto:function(){Ry()},watch:function(n){var r=n.observeMutationsRoot;Sh?pl():Eh(ul("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Rh=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],l=s.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Ky={mixout:function(){return{parse:{transform:function(n){return Rh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Rh(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),h="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(c," ").concat(h," ").concat(f)},g={transform:"translate(".concat(a/2*-1," -256)")},b={outer:l,inner:m,path:g};return{tag:"g",attributes:Z({},b.outer),children:[{tag:"g",attributes:Z({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Z(Z({},r.icon.attributes),b.path)}]}]}}}},La={x:0,y:0,width:"100%",height:"100%"};function Ph(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gy(e){return e.tag==="g"?e.children:[e]}var Wy={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ho(i.split(" ").map(function(a){return a.trim()})):ac();return s.prefix||(s.prefix=jn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,l=n.maskId,c=n.transform,h=s.width,f=s.icon,m=a.width,g=a.icon,b=G_({transform:c,containerWidth:m,iconWidth:h}),C={tag:"rect",attributes:Z(Z({},La),{},{fill:"white"})},k=f.children?{children:f.children.map(Ph)}:{},N={tag:"g",attributes:Z({},b.inner),children:[Ph(Z({tag:f.tag,attributes:Z(Z({},f.attributes),b.path)},k))]},x={tag:"g",attributes:Z({},b.outer),children:[N]},V="mask-".concat(l||Ji()),F="clip-".concat(l||Ji()),z={tag:"mask",attributes:Z(Z({},La),{},{id:V,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,x]},tt={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Gy(g)},z]};return r.push(tt,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(V,")")},La)}),{children:r,attributes:i}}}},Qy={provides:function(t){var n=!1;Bn.matchMedia&&(n=Bn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Z(Z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Z(Z({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:Z(Z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:Z(Z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:Z(Z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Z(Z({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Z(Z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Yy={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Xy=[Y_,My,Ly,Fy,Uy,qy,Hy,Ky,Wy,Qy,Yy];uy(Xy,{mixoutsTo:De});De.noAuto;De.config;var Jy=De.library;De.dom;var gl=De.parse;De.findIconDefinition;De.toHtml;var Zy=De.icon;De.layer;De.text;De.counter;var tv={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},ev=tv,nv={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},rv={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},iv={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},sv={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"]},ov=sv,av={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},lv=av,cv={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},uv={prefix:"fas",iconName:"list-ol",icon:[512,512,["list-1-2","list-numeric"],"f0cb","M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},hv={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},fv=hv,dv={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},mv={prefix:"fas",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]},pv={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},gv=pv,_v={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},yv={prefix:"fas",iconName:"bug",icon:[512,512,[],"f188","M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"]},vv={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Ev={prefix:"fas",iconName:"skull-crossbones",icon:[448,512,[128369,9760],"f714","M368 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32V234.4c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM168 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8 46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384 17.7 316.6C1.9 308.7-4.5 289.5 3.4 273.7z"]},bv={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},wv={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Tv={prefix:"fas",iconName:"circle-half-stroke",icon:[512,512,[9680,"adjust"],"f042","M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Av=Tv,Iv={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]},Sv={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Rv=Sv,Pv={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Cv=Pv;/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hc(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const Dt={},Fr=[],Fe=()=>{},xv=()=>!1,Go=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fc=e=>e.startsWith("onUpdate:"),oe=Object.assign,dc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kv=Object.prototype.hasOwnProperty,At=(e,t)=>kv.call(e,t),dt=Array.isArray,Ur=e=>Wo(e)==="[object Map]",Qd=e=>Wo(e)==="[object Set]",_t=e=>typeof e=="function",re=e=>typeof e=="string",yr=e=>typeof e=="symbol",Ut=e=>e!==null&&typeof e=="object",Yd=e=>(Ut(e)||_t(e))&&_t(e.then)&&_t(e.catch),Xd=Object.prototype.toString,Wo=e=>Xd.call(e),Vv=e=>Wo(e).slice(8,-1),Jd=e=>Wo(e)==="[object Object]",mc=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Oi=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Dv=/-(\w)/g,We=Qo(e=>e.replace(Dv,(t,n)=>n?n.toUpperCase():"")),Nv=/\B([A-Z])/g,vr=Qo(e=>e.replace(Nv,"-$1").toLowerCase()),Yo=Qo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fa=Qo(e=>e?`on${Yo(e)}`:""),on=(e,t)=>!Object.is(e,t),ho=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Zd=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},_l=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ch;const tm=()=>Ch||(Ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pc(e){if(dt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=re(r)?Fv(r):pc(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(re(e)||Ut(e))return e}const Ov=/;(?![^(]*\))/g,Mv=/:([^]+)/,Lv=/\/\*[^]*?\*\//g;function Fv(e){const t={};return e.replace(Lv,"").split(Ov).forEach(n=>{if(n){const r=n.split(Mv);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function nn(e){let t="";if(re(e))t=e;else if(dt(e))for(let n=0;n<e.length;n++){const r=nn(e[n]);r&&(t+=r+" ")}else if(Ut(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Uv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$v=hc(Uv);function em(e){return!!e||e===""}const Ae=e=>re(e)?e:e==null?"":dt(e)||Ut(e)&&(e.toString===Xd||!_t(e.toString))?JSON.stringify(e,nm,2):String(e),nm=(e,t)=>t&&t.__v_isRef?nm(e,t.value):Ur(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Ua(r,s)+" =>"]=i,n),{})}:Qd(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ua(n))}:yr(t)?Ua(t):Ut(t)&&!dt(t)&&!Jd(t)?String(t):t,Ua=(e,t="")=>{var n;return yr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Bv{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function jv(e,t=je){t&&t.active&&t.effects.push(e)}function zv(){return je}let lr;class gc{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,jv(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Wn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(qv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Qn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=On,n=lr;try{return On=!0,lr=this,this._runnings++,xh(this),this.fn()}finally{kh(this),this._runnings--,lr=n,On=t}}stop(){this.active&&(xh(this),kh(this),this.onStop&&this.onStop(),this.active=!1)}}function qv(e){return e.value}function xh(e){e._trackId++,e._depsLength=0}function kh(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)rm(e.deps[t],e);e.deps.length=e._depsLength}}function rm(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let On=!0,yl=0;const im=[];function Wn(){im.push(On),On=!1}function Qn(){const e=im.pop();On=e===void 0?!0:e}function _c(){yl++}function yc(){for(yl--;!yl&&vl.length;)vl.shift()()}function sm(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&rm(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const vl=[];function om(e,t,n){_c();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&vl.push(r.scheduler)))}yc()}const am=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},El=new WeakMap,cr=Symbol(""),bl=Symbol("");function Pe(e,t,n){if(On&&lr){let r=El.get(e);r||El.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=am(()=>r.delete(n))),sm(lr,i)}}function fn(e,t,n,r,i,s){const a=El.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&dt(e)){const c=Number(r);a.forEach((h,f)=>{(f==="length"||!yr(f)&&f>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(a.get(n)),t){case"add":dt(e)?mc(n)&&l.push(a.get("length")):(l.push(a.get(cr)),Ur(e)&&l.push(a.get(bl)));break;case"delete":dt(e)||(l.push(a.get(cr)),Ur(e)&&l.push(a.get(bl)));break;case"set":Ur(e)&&l.push(a.get(cr));break}_c();for(const c of l)c&&om(c,4);yc()}const Hv=hc("__proto__,__v_isRef,__isVue"),lm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yr)),Vh=Kv();function Kv(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Pt(this);for(let s=0,a=this.length;s<a;s++)Pe(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Pt)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Wn(),_c();const r=Pt(this)[t].apply(this,n);return yc(),Qn(),r}}),e}function Gv(e){yr(e)||(e=String(e));const t=Pt(this);return Pe(t,"has",e),t.hasOwnProperty(e)}class cm{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?o1:dm:s?fm:hm).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=dt(t);if(!i){if(a&&At(Vh,n))return Reflect.get(Vh,n,r);if(n==="hasOwnProperty")return Gv}const l=Reflect.get(t,n,r);return(yr(n)?lm.has(n):Hv(n))||(i||Pe(t,"get",n),s)?l:Ce(l)?a&&mc(n)?l:l.value:Ut(l)?i?pm(l):ri(l):l}}class um extends cm{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const c=Zi(s);if(!Ao(r)&&!Zi(r)&&(s=Pt(s),r=Pt(r)),!dt(t)&&Ce(s)&&!Ce(r))return c?!1:(s.value=r,!0)}const a=dt(t)&&mc(n)?Number(n)<t.length:At(t,n),l=Reflect.set(t,n,r,i);return t===Pt(i)&&(a?on(r,s)&&fn(t,"set",n,r):fn(t,"add",n,r)),l}deleteProperty(t,n){const r=At(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&fn(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!yr(n)||!lm.has(n))&&Pe(t,"has",n),r}ownKeys(t){return Pe(t,"iterate",dt(t)?"length":cr),Reflect.ownKeys(t)}}class Wv extends cm{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qv=new um,Yv=new Wv,Xv=new um(!0);const vc=e=>e,Xo=e=>Reflect.getPrototypeOf(e);function Js(e,t,n=!1,r=!1){e=e.__v_raw;const i=Pt(e),s=Pt(t);n||(on(t,s)&&Pe(i,"get",t),Pe(i,"get",s));const{has:a}=Xo(i),l=r?vc:n?wc:ts;if(a.call(i,t))return l(e.get(t));if(a.call(i,s))return l(e.get(s));e!==i&&e.get(t)}function Zs(e,t=!1){const n=this.__v_raw,r=Pt(n),i=Pt(e);return t||(on(e,i)&&Pe(r,"has",e),Pe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function to(e,t=!1){return e=e.__v_raw,!t&&Pe(Pt(e),"iterate",cr),Reflect.get(e,"size",e)}function Dh(e){e=Pt(e);const t=Pt(this);return Xo(t).has.call(t,e)||(t.add(e),fn(t,"add",e,e)),this}function Nh(e,t){t=Pt(t);const n=Pt(this),{has:r,get:i}=Xo(n);let s=r.call(n,e);s||(e=Pt(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?on(t,a)&&fn(n,"set",e,t):fn(n,"add",e,t),this}function Oh(e){const t=Pt(this),{has:n,get:r}=Xo(t);let i=n.call(t,e);i||(e=Pt(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&fn(t,"delete",e,void 0),s}function Mh(){const e=Pt(this),t=e.size!==0,n=e.clear();return t&&fn(e,"clear",void 0,void 0),n}function eo(e,t){return function(r,i){const s=this,a=s.__v_raw,l=Pt(a),c=t?vc:e?wc:ts;return!e&&Pe(l,"iterate",cr),a.forEach((h,f)=>r.call(i,c(h),c(f),s))}}function no(e,t,n){return function(...r){const i=this.__v_raw,s=Pt(i),a=Ur(s),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=i[e](...r),f=n?vc:t?wc:ts;return!t&&Pe(s,"iterate",c?bl:cr),{next(){const{value:m,done:g}=h.next();return g?{value:m,done:g}:{value:l?[f(m[0]),f(m[1])]:f(m),done:g}},[Symbol.iterator](){return this}}}}function Rn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jv(){const e={get(s){return Js(this,s)},get size(){return to(this)},has:Zs,add:Dh,set:Nh,delete:Oh,clear:Mh,forEach:eo(!1,!1)},t={get(s){return Js(this,s,!1,!0)},get size(){return to(this)},has:Zs,add:Dh,set:Nh,delete:Oh,clear:Mh,forEach:eo(!1,!0)},n={get(s){return Js(this,s,!0)},get size(){return to(this,!0)},has(s){return Zs.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:eo(!0,!1)},r={get(s){return Js(this,s,!0,!0)},get size(){return to(this,!0)},has(s){return Zs.call(this,s,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=no(s,!1,!1),n[s]=no(s,!0,!1),t[s]=no(s,!1,!0),r[s]=no(s,!0,!0)}),[e,n,t,r]}const[Zv,t1,e1,n1]=Jv();function Ec(e,t){const n=t?e?n1:e1:e?t1:Zv;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(At(n,i)&&i in r?n:r,i,s)}const r1={get:Ec(!1,!1)},i1={get:Ec(!1,!0)},s1={get:Ec(!0,!1)};const hm=new WeakMap,fm=new WeakMap,dm=new WeakMap,o1=new WeakMap;function a1(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function l1(e){return e.__v_skip||!Object.isExtensible(e)?0:a1(Vv(e))}function ri(e){return Zi(e)?e:bc(e,!1,Qv,r1,hm)}function mm(e){return bc(e,!1,Xv,i1,fm)}function pm(e){return bc(e,!0,Yv,s1,dm)}function bc(e,t,n,r,i){if(!Ut(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=l1(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return i.set(e,l),l}function Mi(e){return Zi(e)?Mi(e.__v_raw):!!(e&&e.__v_isReactive)}function Zi(e){return!!(e&&e.__v_isReadonly)}function Ao(e){return!!(e&&e.__v_isShallow)}function gm(e){return e?!!e.__v_raw:!1}function Pt(e){const t=e&&e.__v_raw;return t?Pt(t):e}function c1(e){return Object.isExtensible(e)&&Zd(e,"__v_skip",!0),e}const ts=e=>Ut(e)?ri(e):e,wc=e=>Ut(e)?pm(e):e;class _m{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new gc(()=>t(this._value),()=>Li(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Pt(this);return(!t._cacheable||t.effect.dirty)&&on(t._value,t._value=t.effect.run())&&Li(t,4),Tc(t),t.effect._dirtyLevel>=2&&Li(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function u1(e,t,n=!1){let r,i;const s=_t(e);return s?(r=e,i=Fe):(r=e.get,i=e.set),new _m(r,i,s||!i,n)}function Tc(e){var t;On&&lr&&(e=Pt(e),sm(lr,(t=e.dep)!=null?t:e.dep=am(()=>e.dep=void 0,e instanceof _m?e:void 0)))}function Li(e,t=4,n){e=Pt(e);const r=e.dep;r&&om(r,t)}function Ce(e){return!!(e&&e.__v_isRef===!0)}function Gt(e){return vm(e,!1)}function ym(e){return vm(e,!0)}function vm(e,t){return Ce(e)?e:new h1(e,t)}class h1{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Pt(t),this._value=n?t:ts(t)}get value(){return Tc(this),this._value}set value(t){const n=this.__v_isShallow||Ao(t)||Zi(t);t=n?t:Pt(t),on(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ts(t),Li(this,4))}}function Ie(e){return Ce(e)?e.value:e}const f1={get:(e,t,n)=>Ie(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ce(i)&&!Ce(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Em(e){return Mi(e)?e:new Proxy(e,f1)}class d1{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Tc(this),()=>Li(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function m1(e){return new d1(e)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(e,t,n,r){try{return r?e(...r):e()}catch(i){Jo(i,t,n)}}function Ke(e,t,n,r){if(_t(e)){const i=Mn(e,t,n,r);return i&&Yd(i)&&i.catch(s=>{Jo(s,t,n)}),i}if(dt(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Ke(e[s],t,n,r));return i}}function Jo(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const h=s.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](e,a,l)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Wn(),Mn(c,null,10,[e,a,l]),Qn();return}}p1(e,n,i,r)}function p1(e,t,n,r=!0){console.error(e)}let es=!1,wl=!1;const ve=[];let tn=0;const $r=[];let Cn=null,rr=0;const bm=Promise.resolve();let Ac=null;function wm(e){const t=Ac||bm;return e?t.then(this?e.bind(this):e):t}function g1(e){let t=tn+1,n=ve.length;for(;t<n;){const r=t+n>>>1,i=ve[r],s=ns(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function Ic(e){(!ve.length||!ve.includes(e,es&&e.allowRecurse?tn+1:tn))&&(e.id==null?ve.push(e):ve.splice(g1(e.id),0,e),Tm())}function Tm(){!es&&!wl&&(wl=!0,Ac=bm.then(Im))}function _1(e){const t=ve.indexOf(e);t>tn&&ve.splice(t,1)}function y1(e){dt(e)?$r.push(...e):(!Cn||!Cn.includes(e,e.allowRecurse?rr+1:rr))&&$r.push(e),Tm()}function Lh(e,t,n=es?tn+1:0){for(;n<ve.length;n++){const r=ve[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r()}}}function Am(e){if($r.length){const t=[...new Set($r)].sort((n,r)=>ns(n)-ns(r));if($r.length=0,Cn){Cn.push(...t);return}for(Cn=t,rr=0;rr<Cn.length;rr++)Cn[rr]();Cn=null,rr=0}}const ns=e=>e.id==null?1/0:e.id,v1=(e,t)=>{const n=ns(e)-ns(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Im(e){wl=!1,es=!0,ve.sort(v1);try{for(tn=0;tn<ve.length;tn++){const t=ve[tn];t&&t.active!==!1&&Mn(t,null,14)}}finally{tn=0,ve.length=0,Am(),es=!1,Ac=null,(ve.length||$r.length)&&Im()}}function E1(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Dt;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:m,trim:g}=r[f]||Dt;g&&(i=n.map(b=>re(b)?b.trim():b)),m&&(i=n.map(_l))}let l,c=r[l=Fa(t)]||r[l=Fa(We(t))];!c&&s&&(c=r[l=Fa(vr(t))]),c&&Ke(c,e,6,i);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ke(h,e,6,i)}}function Sm(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},l=!1;if(!_t(e)){const c=h=>{const f=Sm(h,t,!0);f&&(l=!0,oe(a,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!l?(Ut(e)&&r.set(e,null),null):(dt(s)?s.forEach(c=>a[c]=null):oe(a,s),Ut(e)&&r.set(e,a),a)}function Zo(e,t){return!e||!Go(t)?!1:(t=t.slice(2).replace(/Once$/,""),At(e,t[0].toLowerCase()+t.slice(1))||At(e,vr(t))||At(e,t))}let Zt=null,ta=null;function Io(e){const t=Zt;return Zt=e,ta=e&&e.type.__scopeId||null,t}function L4(e){ta=e}function F4(){ta=null}function Dn(e,t=Zt,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Wh(-1);const s=Io(t);let a;try{a=e(...i)}finally{Io(s),r._d&&Wh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function $a(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:m,data:g,setupState:b,ctx:C,inheritAttrs:k}=e,N=Io(e);let x,V;try{if(n.shapeFlag&4){const z=i||r,tt=z;x=Ze(h.call(tt,z,f,m,b,g,C)),V=l}else{const z=t;x=Ze(z.length>1?z(m,{attrs:l,slots:a,emit:c}):z(m,null)),V=t.props?l:b1(l)}}catch(z){Bi.length=0,Jo(z,e,1),x=vt(qr)}let F=x;if(V&&k!==!1){const z=Object.keys(V),{shapeFlag:tt}=F;z.length&&tt&7&&(s&&z.some(fc)&&(V=w1(V,s)),F=Hr(F,V,!1,!0))}return n.dirs&&(F=Hr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),x=F,Io(N),x}const b1=e=>{let t;for(const n in e)(n==="class"||n==="style"||Go(n))&&((t||(t={}))[n]=e[n]);return t},w1=(e,t)=>{const n={};for(const r in e)(!fc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function T1(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:l,patchFlag:c}=t,h=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Fh(r,a,h):!!a;if(c&8){const f=t.dynamicProps;for(let m=0;m<f.length;m++){const g=f[m];if(a[g]!==r[g]&&!Zo(h,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Fh(r,a,h):!0:!!a;return!1}function Fh(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Zo(n,s))return!0}return!1}function A1({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const I1="components";function qn(e,t){return R1(I1,e,!0,t)||e}const S1=Symbol.for("v-ndc");function R1(e,t,n=!0,r=!1){const i=Zt||he;if(i){const s=i.type;{const l=w0(s,!1);if(l&&(l===t||l===We(t)||l===Yo(We(t))))return s}const a=Uh(i[e]||s[e],t)||Uh(i.appContext[e],t);return!a&&r?s:a}}function Uh(e,t){return e&&(e[t]||e[We(t)]||e[Yo(We(t))])}const P1=e=>e.__isSuspense;function C1(e,t){t&&t.pendingBranch?dt(e)?t.effects.push(...e):t.effects.push(e):y1(e)}const x1=Symbol.for("v-scx"),k1=()=>Ge(x1);function V1(e,t){return Sc(e,null,{flush:"sync"})}const ro={};function ur(e,t,n){return Sc(e,t,n)}function Sc(e,t,{immediate:n,deep:r,flush:i,once:s,onTrack:a,onTrigger:l}=Dt){if(t&&s){const W=t;t=(...T)=>{W(...T),tt()}}const c=he,h=W=>r===!0?W:or(W,r===!1?1:void 0);let f,m=!1,g=!1;if(Ce(e)?(f=()=>e.value,m=Ao(e)):Mi(e)?(f=()=>h(e),m=!0):dt(e)?(g=!0,m=e.some(W=>Mi(W)||Ao(W)),f=()=>e.map(W=>{if(Ce(W))return W.value;if(Mi(W))return h(W);if(_t(W))return Mn(W,c,2)})):_t(e)?t?f=()=>Mn(e,c,2):f=()=>(b&&b(),Ke(e,c,3,[C])):f=Fe,t&&r){const W=f;f=()=>or(W())}let b,C=W=>{b=F.onStop=()=>{Mn(W,c,4),b=F.onStop=void 0}},k;if(ia)if(C=Fe,t?n&&Ke(t,c,3,[f(),g?[]:void 0,C]):f(),i==="sync"){const W=k1();k=W.__watcherHandles||(W.__watcherHandles=[])}else return Fe;let N=g?new Array(e.length).fill(ro):ro;const x=()=>{if(!(!F.active||!F.dirty))if(t){const W=F.run();(r||m||(g?W.some((T,y)=>on(T,N[y])):on(W,N)))&&(b&&b(),Ke(t,c,3,[W,N===ro?void 0:g&&N[0]===ro?[]:N,C]),N=W)}else F.run()};x.allowRecurse=!!t;let V;i==="sync"?V=x:i==="post"?V=()=>Re(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),V=()=>Ic(x));const F=new gc(f,Fe,V),z=zv(),tt=()=>{F.stop(),z&&dc(z.effects,F)};return t?n?x():N=F.run():i==="post"?Re(F.run.bind(F),c&&c.suspense):F.run(),k&&k.push(tt),tt}function D1(e,t,n){const r=this.proxy,i=re(e)?e.includes(".")?Rm(r,e):()=>r[e]:e.bind(r,r);let s;_t(t)?s=t:(s=t.handler,n=t);const a=vs(this),l=Sc(i,s.bind(r),n);return a(),l}function Rm(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function or(e,t=1/0,n){if(t<=0||!Ut(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ce(e))or(e.value,t,n);else if(dt(e))for(let r=0;r<e.length;r++)or(e[r],t,n);else if(Qd(e)||Ur(e))e.forEach(r=>{or(r,t,n)});else if(Jd(e))for(const r in e)or(e[r],t,n);return e}function Pm(e,t){if(Zt===null)return e;const n=sa(Zt)||Zt.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,l,c=Dt]=t[i];s&&(_t(s)&&(s={mounted:s,updated:s}),s.deep&&or(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function tr(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const l=i[a];s&&(l.oldValue=s[a].value);let c=l.dir[r];c&&(Wn(),Ke(c,n,8,[e.el,l,e,t]),Qn())}}/*! #__NO_SIDE_EFFECTS__ */function Rc(e,t){return _t(e)?oe({name:e.name},t,{setup:e}):e}const Fi=e=>!!e.type.__asyncLoader,Cm=e=>e.type.__isKeepAlive;function N1(e,t){xm(e,"a",t)}function O1(e,t){xm(e,"da",t)}function xm(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ea(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Cm(i.parent.vnode)&&M1(r,t,n,i),i=i.parent}}function M1(e,t,n,r){const i=ea(t,e,r,!0);na(()=>{dc(r[t],i)},n)}function ea(e,t,n=he,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Wn();const l=vs(n),c=Ke(t,n,e,a);return l(),Qn(),c});return r?i.unshift(s):i.push(s),s}}const En=e=>(t,n=he)=>(!ia||e==="sp")&&ea(e,(...r)=>t(...r),n),L1=En("bm"),ys=En("m"),F1=En("bu"),U1=En("u"),km=En("bum"),na=En("um"),$1=En("sp"),B1=En("rtg"),j1=En("rtc");function z1(e,t=he){ea("ec",e,t)}function rs(e,t,n,r){let i;const s=n;if(dt(e)||re(e)){i=new Array(e.length);for(let a=0,l=e.length;a<l;a++)i[a]=t(e[a],a,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s)}else if(Ut(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const h=a[l];i[l]=t(e[h],h,l,s)}}else i=[];return i}function q1(e,t,n={},r,i){if(Zt.isCE||Zt.parent&&Fi(Zt.parent)&&Zt.parent.isCE)return vt("slot",n,r);let s=e[t];s&&s._c&&(s._d=!1),Wt();const a=s&&Vm(s(n)),l=u0(Yt,{key:n.key||a&&a.key||`_${t}`},a||[],a&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Vm(e){return e.some(t=>Ro(t)?!(t.type===qr||t.type===Yt&&!Vm(t.children)):!0)?e:null}const Tl=e=>e?Gm(e)?sa(e)||e.proxy:Tl(e.parent):null,Ui=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tl(e.parent),$root:e=>Tl(e.root),$emit:e=>e.emit,$options:e=>Pc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ic(e.update)}),$nextTick:e=>e.n||(e.n=wm.bind(e.proxy)),$watch:e=>D1.bind(e)}),Ba=(e,t)=>e!==Dt&&!e.__isScriptSetup&&At(e,t),H1={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const b=a[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Ba(r,t))return a[t]=1,r[t];if(i!==Dt&&At(i,t))return a[t]=2,i[t];if((h=e.propsOptions[0])&&At(h,t))return a[t]=3,s[t];if(n!==Dt&&At(n,t))return a[t]=4,n[t];Al&&(a[t]=0)}}const f=Ui[t];let m,g;if(f)return t==="$attrs"&&Pe(e.attrs,"get",""),f(e);if((m=l.__cssModules)&&(m=m[t]))return m;if(n!==Dt&&At(n,t))return a[t]=4,n[t];if(g=c.config.globalProperties,At(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Ba(i,t)?(i[t]=n,!0):r!==Dt&&At(r,t)?(r[t]=n,!0):At(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let l;return!!n[a]||e!==Dt&&At(e,a)||Ba(t,a)||(l=s[0])&&At(l,a)||At(r,a)||At(Ui,a)||At(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:At(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $h(e){return dt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Al=!0;function K1(e){const t=Pc(e),n=e.proxy,r=e.ctx;Al=!1,t.beforeCreate&&Bh(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:m,mounted:g,beforeUpdate:b,updated:C,activated:k,deactivated:N,beforeDestroy:x,beforeUnmount:V,destroyed:F,unmounted:z,render:tt,renderTracked:W,renderTriggered:T,errorCaptured:y,serverPrefetch:v,expose:A,inheritAttrs:I,components:S,directives:E,filters:ae}=t;if(h&&G1(h,r,null),a)for(const gt in a){const ut=a[gt];_t(ut)&&(r[gt]=ut.bind(n))}if(i){const gt=i.call(n,n);Ut(gt)&&(e.data=ri(gt))}if(Al=!0,s)for(const gt in s){const ut=s[gt],xe=_t(ut)?ut.bind(n,n):_t(ut.get)?ut.get.bind(n,n):Fe,$e=!_t(ut)&&_t(ut.set)?ut.set.bind(n):Fe,Ne=ue({get:xe,set:$e});Object.defineProperty(r,gt,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:$t=>Ne.value=$t})}if(l)for(const gt in l)Dm(l[gt],r,n,gt);if(c){const gt=_t(c)?c.call(n):c;Reflect.ownKeys(gt).forEach(ut=>{fo(ut,gt[ut])})}f&&Bh(f,e,"c");function yt(gt,ut){dt(ut)?ut.forEach(xe=>gt(xe.bind(n))):ut&&gt(ut.bind(n))}if(yt(L1,m),yt(ys,g),yt(F1,b),yt(U1,C),yt(N1,k),yt(O1,N),yt(z1,y),yt(j1,W),yt(B1,T),yt(km,V),yt(na,z),yt($1,v),dt(A))if(A.length){const gt=e.exposed||(e.exposed={});A.forEach(ut=>{Object.defineProperty(gt,ut,{get:()=>n[ut],set:xe=>n[ut]=xe})})}else e.exposed||(e.exposed={});tt&&e.render===Fe&&(e.render=tt),I!=null&&(e.inheritAttrs=I),S&&(e.components=S),E&&(e.directives=E)}function G1(e,t,n=Fe){dt(e)&&(e=Il(e));for(const r in e){const i=e[r];let s;Ut(i)?"default"in i?s=Ge(i.from||r,i.default,!0):s=Ge(i.from||r):s=Ge(i),Ce(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Bh(e,t,n){Ke(dt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Dm(e,t,n,r){const i=r.includes(".")?Rm(n,r):()=>n[r];if(re(e)){const s=t[e];_t(s)&&ur(i,s)}else if(_t(e))ur(i,e.bind(n));else if(Ut(e))if(dt(e))e.forEach(s=>Dm(s,t,n,r));else{const s=_t(e.handler)?e.handler.bind(n):t[e.handler];_t(s)&&ur(i,s,e)}}function Pc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,l=s.get(t);let c;return l?c=l:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(h=>So(c,h,a,!0)),So(c,t,a)),Ut(t)&&s.set(t,c),c}function So(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&So(e,s,n,!0),i&&i.forEach(a=>So(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=W1[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const W1={data:jh,props:zh,emits:zh,methods:Ci,computed:Ci,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Ci,directives:Ci,watch:Y1,provide:jh,inject:Q1};function jh(e,t){return t?e?function(){return oe(_t(e)?e.call(this,this):e,_t(t)?t.call(this,this):t)}:t:e}function Q1(e,t){return Ci(Il(e),Il(t))}function Il(e){if(dt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function Ci(e,t){return e?oe(Object.create(null),e,t):t}function zh(e,t){return e?dt(e)&&dt(t)?[...new Set([...e,...t])]:oe(Object.create(null),$h(e),$h(t??{})):t}function Y1(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=Te(e[r],t[r]);return n}function Nm(){return{app:null,config:{isNativeTag:xv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X1=0;function J1(e,t){return function(r,i=null){_t(r)||(r=oe({},r)),i!=null&&!Ut(i)&&(i=null);const s=Nm(),a=new WeakSet;let l=!1;const c=s.app={_uid:X1++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:I0,get config(){return s.config},set config(h){},use(h,...f){return a.has(h)||(h&&_t(h.install)?(a.add(h),h.install(c,...f)):_t(h)&&(a.add(h),h(c,...f))),c},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),c},component(h,f){return f?(s.components[h]=f,c):s.components[h]},directive(h,f){return f?(s.directives[h]=f,c):s.directives[h]},mount(h,f,m){if(!l){const g=vt(r,i);return g.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),f&&t?t(g,h):e(g,h,m),l=!0,c._container=h,h.__vue_app__=c,sa(g.component)||g.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(h,f){return s.provides[h]=f,c},runWithContext(h){const f=$i;$i=c;try{return h()}finally{$i=f}}};return c}}let $i=null;function fo(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=he||Zt;if(r||$i){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$i._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_t(t)?t.call(r&&r.proxy):t}}const Om={},Mm=()=>Object.create(Om),Lm=e=>Object.getPrototypeOf(e)===Om;function Z1(e,t,n,r=!1){const i={},s=Mm();e.propsDefaults=Object.create(null),Fm(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:mm(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function t0(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,l=Pt(i),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let g=f[m];if(Zo(e.emitsOptions,g))continue;const b=t[g];if(c)if(At(s,g))b!==s[g]&&(s[g]=b,h=!0);else{const C=We(g);i[C]=Sl(c,l,C,b,e,!1)}else b!==s[g]&&(s[g]=b,h=!0)}}}else{Fm(e,t,i,s)&&(h=!0);let f;for(const m in l)(!t||!At(t,m)&&((f=vr(m))===m||!At(t,f)))&&(c?n&&(n[m]!==void 0||n[f]!==void 0)&&(i[m]=Sl(c,l,m,void 0,e,!0)):delete i[m]);if(s!==l)for(const m in s)(!t||!At(t,m))&&(delete s[m],h=!0)}h&&fn(e.attrs,"set","")}function Fm(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Oi(c))continue;const h=t[c];let f;i&&At(i,f=We(c))?!s||!s.includes(f)?n[f]=h:(l||(l={}))[f]=h:Zo(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(s){const c=Pt(n),h=l||Dt;for(let f=0;f<s.length;f++){const m=s[f];n[m]=Sl(i,c,m,h[m],e,!At(h,m))}}return a}function Sl(e,t,n,r,i,s){const a=e[n];if(a!=null){const l=At(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&_t(c)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const f=vs(i);r=h[n]=c.call(null,t),f()}}else r=c}a[0]&&(s&&!l?r=!1:a[1]&&(r===""||r===vr(n))&&(r=!0))}return r}function Um(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},l=[];let c=!1;if(!_t(e)){const f=m=>{c=!0;const[g,b]=Um(m,t,!0);oe(a,g),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!c)return Ut(e)&&r.set(e,Fr),Fr;if(dt(s))for(let f=0;f<s.length;f++){const m=We(s[f]);qh(m)&&(a[m]=Dt)}else if(s)for(const f in s){const m=We(f);if(qh(m)){const g=s[f],b=a[m]=dt(g)||_t(g)?{type:g}:oe({},g);if(b){const C=Gh(Boolean,b.type),k=Gh(String,b.type);b[0]=C>-1,b[1]=k<0||C<k,(C>-1||At(b,"default"))&&l.push(m)}}}const h=[a,l];return Ut(e)&&r.set(e,h),h}function qh(e){return e[0]!=="$"&&!Oi(e)}function Hh(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Kh(e,t){return Hh(e)===Hh(t)}function Gh(e,t){return dt(t)?t.findIndex(n=>Kh(n,e)):_t(t)&&Kh(t,e)?0:-1}const $m=e=>e[0]==="_"||e==="$stable",Cc=e=>dt(e)?e.map(Ze):[Ze(e)],e0=(e,t,n)=>{if(t._n)return t;const r=Dn((...i)=>Cc(t(...i)),n);return r._c=!1,r},Bm=(e,t,n)=>{const r=e._ctx;for(const i in e){if($m(i))continue;const s=e[i];if(_t(s))t[i]=e0(i,s,r);else if(s!=null){const a=Cc(s);t[i]=()=>a}}},jm=(e,t)=>{const n=Cc(t);e.slots.default=()=>n},n0=(e,t)=>{const n=e.slots=Mm();if(e.vnode.shapeFlag&32){const r=t._;r?(oe(n,t),Zd(n,"_",r,!0)):Bm(t,n)}else t&&jm(e,t)},r0=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=Dt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(oe(i,t),!n&&l===1&&delete i._):(s=!t.$stable,Bm(t,i)),a=t}else t&&(jm(e,t),a={default:1});if(s)for(const l in i)!$m(l)&&a[l]==null&&delete i[l]};function Rl(e,t,n,r,i=!1){if(dt(e)){e.forEach((g,b)=>Rl(g,t&&(dt(t)?t[b]:t),n,r,i));return}if(Fi(r)&&!i)return;const s=r.shapeFlag&4?sa(r.component)||r.component.proxy:r.el,a=i?null:s,{i:l,r:c}=e,h=t&&t.r,f=l.refs===Dt?l.refs={}:l.refs,m=l.setupState;if(h!=null&&h!==c&&(re(h)?(f[h]=null,At(m,h)&&(m[h]=null)):Ce(h)&&(h.value=null)),_t(c))Mn(c,l,12,[a,f]);else{const g=re(c),b=Ce(c);if(g||b){const C=()=>{if(e.f){const k=g?At(m,c)?m[c]:f[c]:c.value;i?dt(k)&&dc(k,s):dt(k)?k.includes(s)||k.push(s):g?(f[c]=[s],At(m,c)&&(m[c]=f[c])):(c.value=[s],e.k&&(f[e.k]=c.value))}else g?(f[c]=a,At(m,c)&&(m[c]=a)):b&&(c.value=a,e.k&&(f[e.k]=a))};a?(C.id=-1,Re(C,n)):C()}}}const Re=C1;function i0(e){return s0(e)}function s0(e,t){const n=tm();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:m,nextSibling:g,setScopeId:b=Fe,insertStaticContent:C}=e,k=(_,w,P,L=null,O=null,q=null,Q=void 0,j=null,K=!!w.dynamicChildren)=>{if(_===w)return;_&&!Ai(_,w)&&(L=M(_),$t(_,O,q,!0),_=null),w.patchFlag===-2&&(K=!1,w.dynamicChildren=null);const{type:B,ref:X,shapeFlag:at}=w;switch(B){case ra:N(_,w,P,L);break;case qr:x(_,w,P,L);break;case za:_==null&&V(w,P,L,Q);break;case Yt:S(_,w,P,L,O,q,Q,j,K);break;default:at&1?tt(_,w,P,L,O,q,Q,j,K):at&6?E(_,w,P,L,O,q,Q,j,K):(at&64||at&128)&&B.process(_,w,P,L,O,q,Q,j,K,et)}X!=null&&O&&Rl(X,_&&_.ref,q,w||_,!w)},N=(_,w,P,L)=>{if(_==null)r(w.el=l(w.children),P,L);else{const O=w.el=_.el;w.children!==_.children&&h(O,w.children)}},x=(_,w,P,L)=>{_==null?r(w.el=c(w.children||""),P,L):w.el=_.el},V=(_,w,P,L)=>{[_.el,_.anchor]=C(_.children,w,P,L,_.el,_.anchor)},F=({el:_,anchor:w},P,L)=>{let O;for(;_&&_!==w;)O=g(_),r(_,P,L),_=O;r(w,P,L)},z=({el:_,anchor:w})=>{let P;for(;_&&_!==w;)P=g(_),i(_),_=P;i(w)},tt=(_,w,P,L,O,q,Q,j,K)=>{w.type==="svg"?Q="svg":w.type==="math"&&(Q="mathml"),_==null?W(w,P,L,O,q,Q,j,K):v(_,w,O,q,Q,j,K)},W=(_,w,P,L,O,q,Q,j)=>{let K,B;const{props:X,shapeFlag:at,transition:ot,dirs:it}=_;if(K=_.el=a(_.type,q,X&&X.is,X),at&8?f(K,_.children):at&16&&y(_.children,K,null,L,O,ja(_,q),Q,j),it&&tr(_,null,L,"created"),T(K,_,_.scopeId,Q,L),X){for(const Tt in X)Tt!=="value"&&!Oi(Tt)&&s(K,Tt,null,X[Tt],q,_.children,L,O,ie);"value"in X&&s(K,"value",null,X.value,q),(B=X.onVnodeBeforeMount)&&Je(B,L,_)}it&&tr(_,null,L,"beforeMount");const ct=o0(O,ot);ct&&ot.beforeEnter(K),r(K,w,P),((B=X&&X.onVnodeMounted)||ct||it)&&Re(()=>{B&&Je(B,L,_),ct&&ot.enter(K),it&&tr(_,null,L,"mounted")},O)},T=(_,w,P,L,O)=>{if(P&&b(_,P),L)for(let q=0;q<L.length;q++)b(_,L[q]);if(O){let q=O.subTree;if(w===q){const Q=O.vnode;T(_,Q,Q.scopeId,Q.slotScopeIds,O.parent)}}},y=(_,w,P,L,O,q,Q,j,K=0)=>{for(let B=K;B<_.length;B++){const X=_[B]=j?xn(_[B]):Ze(_[B]);k(null,X,w,P,L,O,q,Q,j)}},v=(_,w,P,L,O,q,Q)=>{const j=w.el=_.el;let{patchFlag:K,dynamicChildren:B,dirs:X}=w;K|=_.patchFlag&16;const at=_.props||Dt,ot=w.props||Dt;let it;if(P&&er(P,!1),(it=ot.onVnodeBeforeUpdate)&&Je(it,P,w,_),X&&tr(w,_,P,"beforeUpdate"),P&&er(P,!0),B?A(_.dynamicChildren,B,j,P,L,ja(w,O),q):Q||ut(_,w,j,null,P,L,ja(w,O),q,!1),K>0){if(K&16)I(j,w,at,ot,P,L,O);else if(K&2&&at.class!==ot.class&&s(j,"class",null,ot.class,O),K&4&&s(j,"style",at.style,ot.style,O),K&8){const ct=w.dynamicProps;for(let Tt=0;Tt<ct.length;Tt++){const kt=ct[Tt],Ht=at[kt],ke=ot[kt];(ke!==Ht||kt==="value")&&s(j,kt,Ht,ke,O,_.children,P,L,ie)}}K&1&&_.children!==w.children&&f(j,w.children)}else!Q&&B==null&&I(j,w,at,ot,P,L,O);((it=ot.onVnodeUpdated)||X)&&Re(()=>{it&&Je(it,P,w,_),X&&tr(w,_,P,"updated")},L)},A=(_,w,P,L,O,q,Q)=>{for(let j=0;j<w.length;j++){const K=_[j],B=w[j],X=K.el&&(K.type===Yt||!Ai(K,B)||K.shapeFlag&70)?m(K.el):P;k(K,B,X,null,L,O,q,Q,!0)}},I=(_,w,P,L,O,q,Q)=>{if(P!==L){if(P!==Dt)for(const j in P)!Oi(j)&&!(j in L)&&s(_,j,P[j],null,Q,w.children,O,q,ie);for(const j in L){if(Oi(j))continue;const K=L[j],B=P[j];K!==B&&j!=="value"&&s(_,j,B,K,Q,w.children,O,q,ie)}"value"in L&&s(_,"value",P.value,L.value,Q)}},S=(_,w,P,L,O,q,Q,j,K)=>{const B=w.el=_?_.el:l(""),X=w.anchor=_?_.anchor:l("");let{patchFlag:at,dynamicChildren:ot,slotScopeIds:it}=w;it&&(j=j?j.concat(it):it),_==null?(r(B,P,L),r(X,P,L),y(w.children||[],P,X,O,q,Q,j,K)):at>0&&at&64&&ot&&_.dynamicChildren?(A(_.dynamicChildren,ot,P,O,q,Q,j),(w.key!=null||O&&w===O.subTree)&&zm(_,w,!0)):ut(_,w,P,X,O,q,Q,j,K)},E=(_,w,P,L,O,q,Q,j,K)=>{w.slotScopeIds=j,_==null?w.shapeFlag&512?O.ctx.activate(w,P,L,Q,K):ae(w,P,L,O,q,Q,K):ht(_,w,K)},ae=(_,w,P,L,O,q,Q)=>{const j=_.component=g0(_,L,O);if(Cm(_)&&(j.ctx.renderer=et),y0(j),j.asyncDep){if(O&&O.registerDep(j,yt),!_.el){const K=j.subTree=vt(qr);x(null,K,w,P)}}else yt(j,_,w,P,O,q,Q)},ht=(_,w,P)=>{const L=w.component=_.component;if(T1(_,w,P))if(L.asyncDep&&!L.asyncResolved){gt(L,w,P);return}else L.next=w,_1(L.update),L.effect.dirty=!0,L.update();else w.el=_.el,L.vnode=w},yt=(_,w,P,L,O,q,Q)=>{const j=()=>{if(_.isMounted){let{next:X,bu:at,u:ot,parent:it,vnode:ct}=_;{const Oe=qm(_);if(Oe){X&&(X.el=ct.el,gt(_,X,Q)),Oe.asyncDep.then(()=>{_.isUnmounted||j()});return}}let Tt=X,kt;er(_,!1),X?(X.el=ct.el,gt(_,X,Q)):X=ct,at&&ho(at),(kt=X.props&&X.props.onVnodeBeforeUpdate)&&Je(kt,it,X,ct),er(_,!0);const Ht=$a(_),ke=_.subTree;_.subTree=Ht,k(ke,Ht,m(ke.el),M(ke),_,O,q),X.el=Ht.el,Tt===null&&A1(_,Ht.el),ot&&Re(ot,O),(kt=X.props&&X.props.onVnodeUpdated)&&Re(()=>Je(kt,it,X,ct),O)}else{let X;const{el:at,props:ot}=w,{bm:it,m:ct,parent:Tt}=_,kt=Fi(w);if(er(_,!1),it&&ho(it),!kt&&(X=ot&&ot.onVnodeBeforeMount)&&Je(X,Tt,w),er(_,!0),at&&xt){const Ht=()=>{_.subTree=$a(_),xt(at,_.subTree,_,O,null)};kt?w.type.__asyncLoader().then(()=>!_.isUnmounted&&Ht()):Ht()}else{const Ht=_.subTree=$a(_);k(null,Ht,P,L,_,O,q),w.el=Ht.el}if(ct&&Re(ct,O),!kt&&(X=ot&&ot.onVnodeMounted)){const Ht=w;Re(()=>Je(X,Tt,Ht),O)}(w.shapeFlag&256||Tt&&Fi(Tt.vnode)&&Tt.vnode.shapeFlag&256)&&_.a&&Re(_.a,O),_.isMounted=!0,w=P=L=null}},K=_.effect=new gc(j,Fe,()=>Ic(B),_.scope),B=_.update=()=>{K.dirty&&K.run()};B.id=_.uid,er(_,!0),B()},gt=(_,w,P)=>{w.component=_;const L=_.vnode.props;_.vnode=w,_.next=null,t0(_,w.props,L,P),r0(_,w.children,P),Wn(),Lh(_),Qn()},ut=(_,w,P,L,O,q,Q,j,K=!1)=>{const B=_&&_.children,X=_?_.shapeFlag:0,at=w.children,{patchFlag:ot,shapeFlag:it}=w;if(ot>0){if(ot&128){$e(B,at,P,L,O,q,Q,j,K);return}else if(ot&256){xe(B,at,P,L,O,q,Q,j,K);return}}it&8?(X&16&&ie(B,O,q),at!==B&&f(P,at)):X&16?it&16?$e(B,at,P,L,O,q,Q,j,K):ie(B,O,q,!0):(X&8&&f(P,""),it&16&&y(at,P,L,O,q,Q,j,K))},xe=(_,w,P,L,O,q,Q,j,K)=>{_=_||Fr,w=w||Fr;const B=_.length,X=w.length,at=Math.min(B,X);let ot;for(ot=0;ot<at;ot++){const it=w[ot]=K?xn(w[ot]):Ze(w[ot]);k(_[ot],it,P,null,O,q,Q,j,K)}B>X?ie(_,O,q,!0,!1,at):y(w,P,L,O,q,Q,j,K,at)},$e=(_,w,P,L,O,q,Q,j,K)=>{let B=0;const X=w.length;let at=_.length-1,ot=X-1;for(;B<=at&&B<=ot;){const it=_[B],ct=w[B]=K?xn(w[B]):Ze(w[B]);if(Ai(it,ct))k(it,ct,P,null,O,q,Q,j,K);else break;B++}for(;B<=at&&B<=ot;){const it=_[at],ct=w[ot]=K?xn(w[ot]):Ze(w[ot]);if(Ai(it,ct))k(it,ct,P,null,O,q,Q,j,K);else break;at--,ot--}if(B>at){if(B<=ot){const it=ot+1,ct=it<X?w[it].el:L;for(;B<=ot;)k(null,w[B]=K?xn(w[B]):Ze(w[B]),P,ct,O,q,Q,j,K),B++}}else if(B>ot)for(;B<=at;)$t(_[B],O,q,!0),B++;else{const it=B,ct=B,Tt=new Map;for(B=ct;B<=ot;B++){const be=w[B]=K?xn(w[B]):Ze(w[B]);be.key!=null&&Tt.set(be.key,B)}let kt,Ht=0;const ke=ot-ct+1;let Oe=!1,ui=0;const wn=new Array(ke);for(B=0;B<ke;B++)wn[B]=0;for(B=it;B<=at;B++){const be=_[B];if(Ht>=ke){$t(be,O,q,!0);continue}let Me;if(be.key!=null)Me=Tt.get(be.key);else for(kt=ct;kt<=ot;kt++)if(wn[kt-ct]===0&&Ai(be,w[kt])){Me=kt;break}Me===void 0?$t(be,O,q,!0):(wn[Me-ct]=B+1,Me>=ui?ui=Me:Oe=!0,k(be,w[Me],P,null,O,q,Q,j,K),Ht++)}const wr=Oe?a0(wn):Fr;for(kt=wr.length-1,B=ke-1;B>=0;B--){const be=ct+B,Me=w[be],Tr=be+1<X?w[be+1].el:L;wn[B]===0?k(null,Me,P,Tr,O,q,Q,j,K):Oe&&(kt<0||B!==wr[kt]?Ne(Me,P,Tr,2):kt--)}}},Ne=(_,w,P,L,O=null)=>{const{el:q,type:Q,transition:j,children:K,shapeFlag:B}=_;if(B&6){Ne(_.component.subTree,w,P,L);return}if(B&128){_.suspense.move(w,P,L);return}if(B&64){Q.move(_,w,P,et);return}if(Q===Yt){r(q,w,P);for(let at=0;at<K.length;at++)Ne(K[at],w,P,L);r(_.anchor,w,P);return}if(Q===za){F(_,w,P);return}if(L!==2&&B&1&&j)if(L===0)j.beforeEnter(q),r(q,w,P),Re(()=>j.enter(q),O);else{const{leave:at,delayLeave:ot,afterLeave:it}=j,ct=()=>r(q,w,P),Tt=()=>{at(q,()=>{ct(),it&&it()})};ot?ot(q,ct,Tt):Tt()}else r(q,w,P)},$t=(_,w,P,L=!1,O=!1)=>{const{type:q,props:Q,ref:j,children:K,dynamicChildren:B,shapeFlag:X,patchFlag:at,dirs:ot}=_;if(j!=null&&Rl(j,null,P,_,!0),X&256){w.ctx.deactivate(_);return}const it=X&1&&ot,ct=!Fi(_);let Tt;if(ct&&(Tt=Q&&Q.onVnodeBeforeUnmount)&&Je(Tt,w,_),X&6)Xe(_.component,P,L);else{if(X&128){_.suspense.unmount(P,L);return}it&&tr(_,null,w,"beforeUnmount"),X&64?_.type.remove(_,w,P,O,et,L):B&&(q!==Yt||at>0&&at&64)?ie(B,w,P,!1,!0):(q===Yt&&at&384||!O&&X&16)&&ie(K,w,P),L&&Bt(_)}(ct&&(Tt=Q&&Q.onVnodeUnmounted)||it)&&Re(()=>{Tt&&Je(Tt,w,_),it&&tr(_,null,w,"unmounted")},P)},Bt=_=>{const{type:w,el:P,anchor:L,transition:O}=_;if(w===Yt){bn(P,L);return}if(w===za){z(_);return}const q=()=>{i(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(_.shapeFlag&1&&O&&!O.persisted){const{leave:Q,delayLeave:j}=O,K=()=>Q(P,q);j?j(_.el,q,K):K()}else q()},bn=(_,w)=>{let P;for(;_!==w;)P=g(_),i(_),_=P;i(w)},Xe=(_,w,P)=>{const{bum:L,scope:O,update:q,subTree:Q,um:j}=_;L&&ho(L),O.stop(),q&&(q.active=!1,$t(Q,_,w,P)),j&&Re(j,w),Re(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},ie=(_,w,P,L=!1,O=!1,q=0)=>{for(let Q=q;Q<_.length;Q++)$t(_[Q],w,P,L,O)},M=_=>_.shapeFlag&6?M(_.component.subTree):_.shapeFlag&128?_.suspense.next():g(_.anchor||_.el);let J=!1;const Y=(_,w,P)=>{_==null?w._vnode&&$t(w._vnode,null,null,!0):k(w._vnode||null,_,w,null,null,null,P),J||(J=!0,Lh(),Am(),J=!1),w._vnode=_},et={p:k,um:$t,m:Ne,r:Bt,mt:ae,mc:y,pc:ut,pbc:A,n:M,o:e};let bt,xt;return{render:Y,hydrate:bt,createApp:J1(Y,bt)}}function ja({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function er({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function o0(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function zm(e,t,n=!1){const r=e.children,i=t.children;if(dt(r)&&dt(i))for(let s=0;s<r.length;s++){const a=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=xn(i[s]),l.el=a.el),n||zm(a,l)),l.type===ra&&(l.el=a.el)}}function a0(e){const t=e.slice(),n=[0];let r,i,s,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(i=n[n.length-1],e[i]<h){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)l=s+a>>1,e[n[l]]<h?s=l+1:a=l;h<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function qm(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qm(t)}const l0=e=>e.__isTeleport,Yt=Symbol.for("v-fgt"),ra=Symbol.for("v-txt"),qr=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Bi=[];let qe=null;function Wt(e=!1){Bi.push(qe=e?null:[])}function c0(){Bi.pop(),qe=Bi[Bi.length-1]||null}let is=1;function Wh(e){is+=e}function Hm(e){return e.dynamicChildren=is>0?qe||Fr:null,c0(),is>0&&qe&&qe.push(e),e}function Jt(e,t,n,r,i,s){return Hm(H(e,t,n,r,i,s,!0))}function u0(e,t,n,r,i){return Hm(vt(e,t,n,r,i,!0))}function Ro(e){return e?e.__v_isVNode===!0:!1}function Ai(e,t){return e.type===t.type&&e.key===t.key}const Km=({key:e})=>e??null,mo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||Ce(e)||_t(e)?{i:Zt,r:e,k:t,f:!!n}:e:null);function H(e,t=null,n=null,r=0,i=null,s=e===Yt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Km(t),ref:t&&mo(t),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Zt};return l?(xc(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=re(n)?8:16),is>0&&!a&&qe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&qe.push(c),c}const vt=h0;function h0(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===S1)&&(e=qr),Ro(e)){const l=Hr(e,t,!0);return n&&xc(l,n),is>0&&!s&&qe&&(l.shapeFlag&6?qe[qe.indexOf(e)]=l:qe.push(l)),l.patchFlag|=-2,l}if(T0(e)&&(e=e.__vccOpts),t){t=f0(t);let{class:l,style:c}=t;l&&!re(l)&&(t.class=nn(l)),Ut(c)&&(gm(c)&&!dt(c)&&(c=oe({},c)),t.style=pc(c))}const a=re(e)?1:P1(e)?128:l0(e)?64:Ut(e)?4:_t(e)?2:0;return H(e,t,n,r,i,a,s,!0)}function f0(e){return e?gm(e)||Lm(e)?oe({},e):e:null}function Hr(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:l,transition:c}=e,h=t?d0(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Km(h),ref:t&&t.ref?n&&s?dt(s)?s.concat(mo(t)):[s,mo(t)]:mo(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Yt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hr(e.ssContent),ssFallback:e.ssFallback&&Hr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(f.transition=c.clone(f)),f}function te(e=" ",t=0){return vt(ra,null,e,t)}function Ze(e){return e==null||typeof e=="boolean"?vt(qr):dt(e)?vt(Yt,null,e.slice()):typeof e=="object"?xn(e):vt(ra,null,String(e))}function xn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Hr(e)}function xc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(dt(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),xc(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Lm(t)?t._ctx=Zt:i===3&&Zt&&(Zt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else _t(t)?(t={default:t,_ctx:Zt},n=32):(t=String(t),r&64?(n=16,t=[te(t)]):n=8);e.children=t,e.shapeFlag|=n}function d0(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=nn([t.class,r.class]));else if(i==="style")t.style=pc([t.style,r.style]);else if(Go(i)){const s=t[i],a=r[i];a&&s!==a&&!(dt(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Je(e,t,n,r=null){Ke(e,t,7,[n,r])}const m0=Nm();let p0=0;function g0(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||m0,s={uid:p0++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Um(r,i),emitsOptions:Sm(r,i),emit:null,emitted:null,propsDefaults:Dt,inheritAttrs:r.inheritAttrs,ctx:Dt,data:Dt,props:Dt,attrs:Dt,slots:Dt,refs:Dt,setupState:Dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=E1.bind(null,s),e.ce&&e.ce(s),s}let he=null;const _0=()=>he||Zt;let Po,Pl;{const e=tm(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Po=t("__VUE_INSTANCE_SETTERS__",n=>he=n),Pl=t("__VUE_SSR_SETTERS__",n=>ia=n)}const vs=e=>{const t=he;return Po(e),e.scope.on(),()=>{e.scope.off(),Po(t)}},Qh=()=>{he&&he.scope.off(),Po(null)};function Gm(e){return e.vnode.shapeFlag&4}let ia=!1;function y0(e,t=!1){t&&Pl(t);const{props:n,children:r}=e.vnode,i=Gm(e);Z1(e,n,i,t),n0(e,r);const s=i?v0(e,t):void 0;return t&&Pl(!1),s}function v0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,H1);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?b0(e):null,s=vs(e);Wn();const a=Mn(r,e,0,[e.props,i]);if(Qn(),s(),Yd(a)){if(a.then(Qh,Qh),t)return a.then(l=>{Yh(e,l,t)}).catch(l=>{Jo(l,e,0)});e.asyncDep=a}else Yh(e,a,t)}else Wm(e,t)}function Yh(e,t,n){_t(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ut(t)&&(e.setupState=Em(t)),Wm(e,n)}let Xh;function Wm(e,t,n){const r=e.type;if(!e.render){if(!t&&Xh&&!r.render){const i=r.template||Pc(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,h=oe(oe({isCustomElement:s,delimiters:l},a),c);r.render=Xh(i,h)}}e.render=r.render||Fe}{const i=vs(e);Wn();try{K1(e)}finally{Qn(),i()}}}const E0={get(e,t){return Pe(e,"get",""),e[t]}};function b0(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,E0),slots:e.slots,emit:e.emit,expose:t}}function sa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Em(c1(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ui)return Ui[n](e)},has(t,n){return n in t||n in Ui}}))}function w0(e,t=!0){return _t(e)?e.displayName||e.name:e.name||t&&e.__name}function T0(e){return _t(e)&&"__vccOpts"in e}const ue=(e,t)=>u1(e,t,ia);function A0(e,t,n=Dt){const r=_0(),i=We(t),s=vr(t),a=m1((c,h)=>{let f;return V1(()=>{const m=e[t];on(f,m)&&(f=m,h())}),{get(){return c(),n.get?n.get(f):f},set(m){const g=r.vnode.props;!(g&&(t in g||i in g||s in g)&&(`onUpdate:${t}`in g||`onUpdate:${i}`in g||`onUpdate:${s}`in g))&&on(m,f)&&(f=m,h()),r.emit(`update:${t}`,n.set?n.set(m):m)}}}),l="modelModifiers";return a[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?e[l]||{}:a,done:!1}:{done:!0}}}},a}function kc(e,t,n){const r=arguments.length;return r===2?Ut(t)&&!dt(t)?Ro(t)?vt(e,null,[t]):vt(e,t):vt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ro(n)&&(n=[n]),vt(e,t,n))}const I0="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const S0="http://www.w3.org/2000/svg",R0="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Jh=kn&&kn.createElement("template"),P0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?kn.createElementNS(S0,e):t==="mathml"?kn.createElementNS(R0,e):kn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>kn.createTextNode(e),createComment:e=>kn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Jh.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const l=Jh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},C0=Symbol("_vtc");function x0(e,t,n){const r=e[C0];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Co=Symbol("_vod"),Qm=Symbol("_vsh"),Ym={beforeMount(e,{value:t},{transition:n}){e[Co]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ii(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ii(e,!0),r.enter(e)):r.leave(e,()=>{Ii(e,!1)}):Ii(e,t))},beforeUnmount(e,{value:t}){Ii(e,t)}};function Ii(e,t){e.style.display=t?e[Co]:"none",e[Qm]=!t}const k0=Symbol(""),V0=/(^|;)\s*display\s*:/;function D0(e,t,n){const r=e.style,i=re(n);let s=!1;if(n&&!i){if(t)if(re(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&po(r,l,"")}else for(const a in t)n[a]==null&&po(r,a,"");for(const a in n)a==="display"&&(s=!0),po(r,a,n[a])}else if(i){if(t!==n){const a=r[k0];a&&(n+=";"+a),r.cssText=n,s=V0.test(n)}}else t&&e.removeAttribute("style");Co in e&&(e[Co]=s?r.display:"",e[Qm]&&(r.display="none"))}const Zh=/\s*!important$/;function po(e,t,n){if(dt(n))n.forEach(r=>po(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=N0(e,t);Zh.test(n)?e.setProperty(vr(r),n.replace(Zh,""),"important"):e[r]=n}}const tf=["Webkit","Moz","ms"],qa={};function N0(e,t){const n=qa[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return qa[t]=r;r=Yo(r);for(let i=0;i<tf.length;i++){const s=tf[i]+r;if(s in e)return qa[t]=s}return t}const ef="http://www.w3.org/1999/xlink";function O0(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ef,t.slice(6,t.length)):e.setAttributeNS(ef,t,n);else{const s=$v(t);n==null||s&&!em(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function M0(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const h=l==="OPTION"?e.getAttribute("value")||"":e.value,f=n??"";(h!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const h=typeof e[t];h==="boolean"?n=em(n):n==null&&h==="string"?(n="",c=!0):h==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Cr(e,t,n,r){e.addEventListener(t,n,r)}function L0(e,t,n,r){e.removeEventListener(t,n,r)}const nf=Symbol("_vei");function F0(e,t,n,r,i=null){const s=e[nf]||(e[nf]={}),a=s[t];if(r&&a)a.value=r;else{const[l,c]=U0(t);if(r){const h=s[t]=j0(r,i);Cr(e,l,h,c)}else a&&(L0(e,l,a,c),s[t]=void 0)}}const rf=/(?:Once|Passive|Capture)$/;function U0(e){let t;if(rf.test(e)){t={};let r;for(;r=e.match(rf);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vr(e.slice(2)),t]}let Ha=0;const $0=Promise.resolve(),B0=()=>Ha||($0.then(()=>Ha=0),Ha=Date.now());function j0(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(z0(r,n.value),t,5,[r])};return n.value=e,n.attached=B0(),n}function z0(e,t){if(dt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const sf=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,q0=(e,t,n,r,i,s,a,l,c)=>{const h=i==="svg";t==="class"?x0(e,r,h):t==="style"?D0(e,n,r):Go(t)?fc(t)||F0(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):H0(e,t,r,h))?M0(e,t,r,s,a,l,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),O0(e,t,r,h))};function H0(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&sf(t)&&_t(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return sf(t)&&re(n)?!1:t in e}const of=e=>{const t=e.props["onUpdate:modelValue"]||!1;return dt(t)?n=>ho(t,n):t};function K0(e){e.target.composing=!0}function af(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ka=Symbol("_assign"),U4={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Ka]=of(i);const s=r||i.props&&i.props.type==="number";Cr(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),s&&(l=_l(l)),e[Ka](l)}),n&&Cr(e,"change",()=>{e.value=e.value.trim()}),t||(Cr(e,"compositionstart",K0),Cr(e,"compositionend",af),Cr(e,"change",af))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e[Ka]=of(s),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?_l(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===l)||(e.value=l))}},G0=["ctrl","shift","alt","meta"],W0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>G0.some(n=>e[`${n}Key`]&&!t.includes(n))},Mr=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let a=0;a<t.length;a++){const l=W0[t[a]];if(l&&l(i,t))return}return e(i,...s)})},Q0=oe({patchProp:q0},P0);let lf;function Y0(){return lf||(lf=i0(Q0))}const X0=(...e)=>{const t=Y0().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Z0(r);if(!i)return;const s=t._component;!_t(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,J0(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function J0(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Z0(e){return re(e)?document.querySelector(e):e}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function hn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cf(Object(n),!0).forEach(function(r){Se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tE(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eE(e){var t=tE(e,"string");return typeof t=="symbol"?t:t+""}function xo(e){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xo(e)}function Se(e,t,n){return t=eE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nE(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function rE(e,t){if(e==null)return{};var n=nE(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var iE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xm={exports:{}};(function(e){(function(t){var n=function(x,V,F){if(!h(V)||m(V)||g(V)||b(V)||c(V))return V;var z,tt=0,W=0;if(f(V))for(z=[],W=V.length;tt<W;tt++)z.push(n(x,V[tt],F));else{z={};for(var T in V)Object.prototype.hasOwnProperty.call(V,T)&&(z[x(T,F)]=n(x,V[T],F))}return z},r=function(x,V){V=V||{};var F=V.separator||"_",z=V.split||/(?=[A-Z])/;return x.split(z).join(F)},i=function(x){return C(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(V,F){return F?F.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},s=function(x){var V=i(x);return V.substr(0,1).toUpperCase()+V.substr(1)},a=function(x,V){return r(x,V).toLowerCase()},l=Object.prototype.toString,c=function(x){return typeof x=="function"},h=function(x){return x===Object(x)},f=function(x){return l.call(x)=="[object Array]"},m=function(x){return l.call(x)=="[object Date]"},g=function(x){return l.call(x)=="[object RegExp]"},b=function(x){return l.call(x)=="[object Boolean]"},C=function(x){return x=x-0,x===x},k=function(x,V){var F=V&&"process"in V?V.process:V;return typeof F!="function"?x:function(z,tt){return F(z,x,tt)}},N={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(x,V){return n(k(i,V),x)},decamelizeKeys:function(x,V){return n(k(a,V),x,V)},pascalizeKeys:function(x,V){return n(k(s,V),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(iE)})(Xm);var sE=Xm.exports,oE=["class","style"];function aE(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=sE.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function lE(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Jm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Jm(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,h){var f=e.attributes[h];switch(h){case"class":c.class=lE(f);break;case"style":c.style=aE(f);break;default:c.attrs[h]=f}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,l=rE(n,oE);return kc(e.tag,hn(hn(hn({},t),{},{class:i.class,style:hn(hn({},i.style),a)},i.attrs),l),r)}var Zm=!1;try{Zm=!0}catch{}function cE(){if(!Zm&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ga(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Se({},e,t):{}}function uE(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Se(Se(Se(Se(Se(Se(Se(Se(Se(Se(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),Se(Se(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function uf(e){if(e&&xo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(gl.icon)return gl.icon(e);if(e===null)return null;if(xo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var hE=Rc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ue(function(){return uf(t.icon)}),s=ue(function(){return Ga("classes",uE(t))}),a=ue(function(){return Ga("transform",typeof t.transform=="string"?gl.transform(t.transform):t.transform)}),l=ue(function(){return Ga("mask",uf(t.mask))}),c=ue(function(){return Zy(i.value,hn(hn(hn(hn({},s.value),a.value),l.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});ur(c,function(f){if(!f)return cE("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var h=ue(function(){return c.value?Jm(c.value.abstract[0],{},r):null});return function(){return h.value}}});const fE="https://www.youtube-nocookie.com",dE="https://www.youtube.com",tp="vue-youtube";var Vc=(e=>(e[e.UNSTARTED=-1]="UNSTARTED",e[e.ENDED=0]="ENDED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.BUFFERING=3]="BUFFERING",e[e.VIDEO_CUED=5]="VIDEO_CUED",e))(Vc||{});function mE(e){const t=Ie(e);return(t==null?void 0:t.$el)??t}const pE=e=>({playerVars:e.playerVars??{},cookie:e.cookie??!0,height:e.height??720,width:e.width??1280}),gE=()=>{const e=Ge(tp);if(!e)throw new Error("You may forget to apply app.use(manager). See https://vue-youtube.github.io/docs/usage/manager.html for more information");return e},_E=e=>{const t={install(n){var r;n.provide(tp,t),(r=this._state.options.deferLoading)!=null&&r.enabled||this._insert()},register(n,r){var i;const s=n.id||`vue-youtube-${this._state.counter++}`,a=this._state.players.get(s);if(a!==void 0){a({factory:this._state.factory,id:s});return}this._state.factory===void 0?(this._state.backlog.set(s,r),(i=this._state.options.deferLoading)!=null&&i.enabled&&this._state.options.deferLoading.autoLoad&&this._insert()):r({factory:this._state.factory,id:s})},load(){this._state.factory===void 0&&this._insert()},_insert(){var n;const r=document.createElement("script");r.src="https://www.youtube.com/player_api";const i=document.querySelectorAll("script")[0];(n=i.parentNode)==null||n.insertBefore(r,i),window.onYouTubeIframeAPIReady=()=>{this._state.factory=window.YT;for(const[s,a]of this._state.backlog.entries())this._state.backlog.delete(s),this._state.players.set(s,a),a({factory:this._state.factory,id:s})}},_state:{backlog:new Map,players:new Map,options:e||{deferLoading:{enabled:!1,autoLoad:!1}},factory:void 0,counter:1}};return t},yE=(e,t,n={})=>{const{playerVars:r,cookie:i,height:s,width:a}=pE(n),l=i?dE:fE,c=gE(),h=new Array,f=new Array,m=new Array,g=new Array,b=new Array,C=new Array,k=ym(),N=Gt(e),x=Gt(!1),V=Gt(!1),F=(ht,yt)=>{for(const gt of yt)gt(ht)},z=(...ht)=>{h.push(...ht)},tt=(...ht)=>{f.push(...ht)},W=(...ht)=>{m.push(...ht)},T=(...ht)=>{g.push(...ht)},y=(...ht)=>{b.push(...ht)},v=(...ht)=>{C.push(...ht)},A=()=>{var ht,yt,gt;const ut=(ht=k.value)==null?void 0:ht.getPlayerState();if(ut&&ut===Vc.PLAYING){(yt=k.value)==null||yt.pauseVideo();return}(gt=k.value)==null||gt.playVideo()},I=()=>{var ht,yt;if((ht=k.value)!=null&&ht.isMuted()){k.value.unMute();return}(yt=k.value)==null||yt.mute()},S=()=>{var ht,yt;if(x.value){(ht=k.value)==null||ht.setShuffle(!1),x.value=!1;return}(yt=k.value)==null||yt.setShuffle(!0),x.value=!0},E=()=>{var ht,yt;if(V.value){(ht=k.value)==null||ht.setLoop(!1),V.value=!1;return}(yt=k.value)==null||yt.setLoop(!0),V.value=!0},ae=ur(N,ht=>{var yt;(yt=k.value)==null||yt.loadVideoById(ht)});return ys(()=>{const ht=mE(t);ht&&c.register(ht,({factory:yt,id:gt})=>{ht.id=gt,k.value=new yt.Player(gt,{videoId:Ie(N),playerVars:r,height:s,width:a,host:l,events:{onPlaybackQualityChange:ut=>{F(ut,h)},onPlaybackRateChange:ut=>{F(ut,f)},onStateChange:ut=>{F(ut,m)},onApiChange:ut=>{F(ut,g)},onError:ut=>{F(ut,b)},onReady:ut=>{F(ut,C)}}})})}),na(()=>{var ht;(ht=k.value)==null||ht.destroy(),ae()}),{instance:k,togglePlay:A,toggleMute:I,toggleLoop:E,toggleShuffle:S,onPlaybackQualityChange:z,onPlaybackRateChange:tt,onStateChange:W,onApiChange:T,onError:y,onReady:v}},vE={class:"footer"},EE={class:"footer-container"},bE=H("div",{class:"footer-line"},[te(" Powered by "),H("a",{href:"https://gohugo.io/",target:"_blank",rel:"noopener noreferrer",title:"Hugo 0.113.0"},"Hugo"),te(" | Theme - "),H("a",{href:"https://github.com/HEIGE-PCloud/DoIt",target:"_blank",rel:"noopener noreferrer",title:"DoIt 0.4.0"},[H("i",{class:"far fa-edit fa-fw"}),te(" DoIt ")])],-1),wE={class:"footer-line"},TE=H("i",{class:"far fa-copyright fa-fw"},null,-1),AE={itemprop:"copyrightYear"},IE={class:"author",itemprop:"copyrightHolder"},SE=["href"],RE=H("span",{class:"license"},[H("a",{rel:"license external nofollow noopener noreffer",href:"https://creativecommons.org/licenses/by-nc/4.0/",target:"_blank"},"CC BY-NC 4.0")],-1),PE=H("div",{class:"footer-line"},null,-1),CE=H("div",{class:"footer-line"},null,-1),xE={__name:"Footer",setup(e){const t=ri({name:"PCloud",url:"https://github.com/HEIGE-PCloud",copyrightYear:[2019,2023]});return(n,r)=>(Wt(),Jt("footer",vE,[H("div",EE,[bE,H("div",wE,[TE,H("span",AE,Ae(t.copyrightYear[0])+" - "+Ae(t.copyrightYear[1]),1),H("span",IE,[te("  "),H("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},Ae(t.name),9,SE)]),te(" |  "),RE]),PE,CE])]))}};class kE{constructor(){this.THEMES={light:{theme:"light",colorScheme:"light",nextTheme:"dark",nextColorScheme:"dark"},dark:{theme:"tw-dark",colorScheme:"dark",nextTheme:"light",nextColorScheme:"light"}},this.currentTheme=localStorage.getItem("theme")||"light",this.currentColorScheme=this.THEMES[this.currentTheme].colorScheme,this._setTheme()}switchTheme(){let t=this.currentTheme;this.currentTheme=this.THEMES[t].nextTheme,this.currentColorScheme=this.THEMES[t].nextColorScheme,this._setTheme(),localStorage.setItem("theme",this.currentTheme)}_setTheme(){document.body.setAttribute("theme",this.currentTheme),console.log(this.currentTheme,this.currentColorScheme),document.documentElement.classList.remove(...Object.keys(this.THEMES)),document.documentElement.classList.add(this.currentTheme),document.documentElement.style.colorScheme=this.currentColorScheme}}/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof document<"u";function VE(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ct=Object.assign;function Wa(e,t){const n={};for(const r in t){const i=t[r];n[r]=Qe(i)?i.map(e):e(i)}return n}const ji=()=>{},Qe=Array.isArray,ep=/#/g,DE=/&/g,NE=/\//g,OE=/=/g,ME=/\?/g,np=/\+/g,LE=/%5B/g,FE=/%5D/g,rp=/%5E/g,UE=/%60/g,ip=/%7B/g,$E=/%7C/g,sp=/%7D/g,BE=/%20/g;function Dc(e){return encodeURI(""+e).replace($E,"|").replace(LE,"[").replace(FE,"]")}function jE(e){return Dc(e).replace(ip,"{").replace(sp,"}").replace(rp,"^")}function Cl(e){return Dc(e).replace(np,"%2B").replace(BE,"+").replace(ep,"%23").replace(DE,"%26").replace(UE,"`").replace(ip,"{").replace(sp,"}").replace(rp,"^")}function zE(e){return Cl(e).replace(OE,"%3D")}function qE(e){return Dc(e).replace(ep,"%23").replace(ME,"%3F")}function HE(e){return e==null?"":qE(e).replace(NE,"%2F")}function ss(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const KE=/\/$/,GE=e=>e.replace(KE,"");function Qa(e,t,n="/"){let r,i={},s="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=XE(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:ss(a)}}function WE(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function hf(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function QE(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Kr(t.matched[r],n.matched[i])&&op(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function op(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!YE(e[n],t[n]))return!1;return!0}function YE(e,t){return Qe(e)?ff(e,t):Qe(t)?ff(t,e):e===t}function ff(e,t){return Qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function XE(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}var os;(function(e){e.pop="pop",e.push="push"})(os||(os={}));var zi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(zi||(zi={}));function JE(e){if(!e)if(xr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),GE(e)}const ZE=/^[^#]+#/;function tb(e,t){return e.replace(ZE,"#")+t}function eb(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const oa=()=>({left:window.scrollX,top:window.scrollY});function nb(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=eb(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function df(e,t){return(history.state?history.state.position-t:-1)+e}const xl=new Map;function rb(e,t){xl.set(e,t)}function ib(e){const t=xl.get(e);return xl.delete(e),t}let sb=()=>location.protocol+"//"+location.host;function ap(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let l=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),hf(c,"")}return hf(n,e)+r+i}function ob(e,t,n,r){let i=[],s=[],a=null;const l=({state:g})=>{const b=ap(e,location),C=n.value,k=t.value;let N=0;if(g){if(n.value=b,t.value=g,a&&a===C){a=null;return}N=k?g.position-k.position:0}else r(b);i.forEach(x=>{x(n.value,C,{delta:N,type:os.pop,direction:N?N>0?zi.forward:zi.back:zi.unknown})})};function c(){a=n.value}function h(g){i.push(g);const b=()=>{const C=i.indexOf(g);C>-1&&i.splice(C,1)};return s.push(b),b}function f(){const{history:g}=window;g.state&&g.replaceState(Ct({},g.state,{scroll:oa()}),"")}function m(){for(const g of s)g();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:m}}function mf(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?oa():null}}function ab(e){const{history:t,location:n}=window,r={value:ap(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,h,f){const m=e.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+c:sb()+e+c;try{t[f?"replaceState":"pushState"](h,"",g),i.value=h}catch(b){console.error(b),n[f?"replace":"assign"](g)}}function a(c,h){const f=Ct({},t.state,mf(i.value.back,c,i.value.forward,!0),h,{position:i.value.position});s(c,f,!0),r.value=c}function l(c,h){const f=Ct({},i.value,t.state,{forward:c,scroll:oa()});s(f.current,f,!0);const m=Ct({},mf(r.value,c,null),{position:f.position+1},h);s(c,m,!1),r.value=c}return{location:r,state:i,push:l,replace:a}}function lb(e){e=JE(e);const t=ab(e),n=ob(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=Ct({location:"",base:e,go:r,createHref:tb.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function cb(e){return typeof e=="string"||e&&typeof e=="object"}function lp(e){return typeof e=="string"||typeof e=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cp=Symbol("");var pf;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pf||(pf={}));function Gr(e,t){return Ct(new Error,{type:e,[cp]:!0},t)}function un(e,t){return e instanceof Error&&cp in e&&(t==null||!!(e.type&t))}const gf="[^/]+?",ub={sensitive:!1,strict:!1,start:!0,end:!0},hb=/[.+*?^${}()[\]/\\]/g;function fb(e,t){const n=Ct({},ub,t),r=[];let i=n.start?"^":"";const s=[];for(const h of e){const f=h.length?[]:[90];n.strict&&!h.length&&(i+="/");for(let m=0;m<h.length;m++){const g=h[m];let b=40+(n.sensitive?.25:0);if(g.type===0)m||(i+="/"),i+=g.value.replace(hb,"\\$&"),b+=40;else if(g.type===1){const{value:C,repeatable:k,optional:N,regexp:x}=g;s.push({name:C,repeatable:k,optional:N});const V=x||gf;if(V!==gf){b+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${C}" (${V}): `+z.message)}}let F=k?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;m||(F=N&&h.length<2?`(?:/${F})`:"/"+F),N&&(F+="?"),i+=F,b+=20,N&&(b+=-8),k&&(b+=-20),V===".*"&&(b+=-50)}f.push(b)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(h){const f=h.match(a),m={};if(!f)return null;for(let g=1;g<f.length;g++){const b=f[g]||"",C=s[g-1];m[C.name]=b&&C.repeatable?b.split("/"):b}return m}function c(h){let f="",m=!1;for(const g of e){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const b of g)if(b.type===0)f+=b.value;else if(b.type===1){const{value:C,repeatable:k,optional:N}=b,x=C in h?h[C]:"";if(Qe(x)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const V=Qe(x)?x.join("/"):x;if(!V)if(N)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${C}"`);f+=V}}return f||"/"}return{re:a,score:r,keys:s,parse:l,stringify:c}}function db(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function up(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=db(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(_f(r))return 1;if(_f(i))return-1}return i.length-r.length}function _f(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mb={type:0,value:""},pb=/[a-zA-Z0-9_]/;function gb(e){if(!e)return[[]];if(e==="/")return[[mb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${h}": ${b}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let l=0,c,h="",f="";function m(){h&&(n===0?s.push({type:0,value:h}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&m(),a()):c===":"?(m(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:pb.test(c)?g():(m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:m(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),m(),a(),i}function _b(e,t,n){const r=fb(gb(e.path),n),i=Ct(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function yb(e,t){const n=[],r=new Map;t=Ef({strict:!1,end:!0,sensitive:!1},t);function i(f){return r.get(f)}function s(f,m,g){const b=!g,C=vb(f);C.aliasOf=g&&g.record;const k=Ef(t,f),N=[C];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of F)N.push(Ct({},C,{components:g?g.record.components:C.components,path:z,aliasOf:g?g.record:C}))}let x,V;for(const F of N){const{path:z}=F;if(m&&z[0]!=="/"){const tt=m.record.path,W=tt[tt.length-1]==="/"?"":"/";F.path=m.record.path+(z&&W+z)}if(x=_b(F,m,k),g?g.alias.push(x):(V=V||x,V!==x&&V.alias.push(x),b&&f.name&&!vf(x)&&a(f.name)),hp(x)&&c(x),C.children){const tt=C.children;for(let W=0;W<tt.length;W++)s(tt[W],x,g&&g.children[W])}g=g||x}return V?()=>{a(V)}:ji}function a(f){if(lp(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function l(){return n}function c(f){const m=wb(f,n);n.splice(m,0,f),f.record.name&&!vf(f)&&r.set(f.record.name,f)}function h(f,m){let g,b={},C,k;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Gr(1,{location:f});k=g.record.name,b=Ct(yf(m.params,g.keys.filter(V=>!V.optional).concat(g.parent?g.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),f.params&&yf(f.params,g.keys.map(V=>V.name))),C=g.stringify(b)}else if(f.path!=null)C=f.path,g=n.find(V=>V.re.test(C)),g&&(b=g.parse(C),k=g.record.name);else{if(g=m.name?r.get(m.name):n.find(V=>V.re.test(m.path)),!g)throw Gr(1,{location:f,currentLocation:m});k=g.record.name,b=Ct({},m.params,f.params),C=g.stringify(b)}const N=[];let x=g;for(;x;)N.unshift(x.record),x=x.parent;return{name:k,path:C,params:b,matched:N,meta:bb(N)}}return e.forEach(f=>s(f)),{addRoute:s,resolve:h,removeRoute:a,getRoutes:l,getRecordMatcher:i}}function yf(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function vb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Eb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Eb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function vf(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bb(e){return e.reduce((t,n)=>Ct(t,n.meta),{})}function Ef(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function wb(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;up(e,t[s])<0?r=s:n=s+1}const i=Tb(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Tb(e){let t=e;for(;t=t.parent;)if(hp(t)&&up(e,t)===0)return t}function hp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ab(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(np," "),a=s.indexOf("="),l=ss(a<0?s:s.slice(0,a)),c=a<0?null:ss(s.slice(a+1));if(l in t){let h=t[l];Qe(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function bf(e){let t="";for(let n in e){const r=e[n];if(n=zE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(r)?r.map(s=>s&&Cl(s)):[r&&Cl(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ib(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Qe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Sb=Symbol(""),wf=Symbol(""),Nc=Symbol(""),Oc=Symbol(""),kl=Symbol("");function Si(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Vn(e,t,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Gr(4,{from:n,to:t})):g instanceof Error?c(g):cb(g)?c(Gr(2,{from:t,to:g})):(a&&r.enterCallbacks[i]===a&&typeof g=="function"&&a.push(g),l())},f=s(()=>e.call(r&&r.instances[i],t,n,h));let m=Promise.resolve(f);e.length<3&&(m=m.then(h)),m.catch(g=>c(g))})}function Ya(e,t,n,r,i=s=>s()){const s=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Rb(c)){const f=(c.__vccOpts||c)[t];f&&s.push(Vn(f,n,r,a,l,i))}else{let h=c();s.push(()=>h.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const m=VE(f)?f.default:f;a.components[l]=m;const b=(m.__vccOpts||m)[t];return b&&Vn(b,n,r,a,l,i)()}))}}return s}function Rb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tf(e){const t=Ge(Nc),n=Ge(Oc),r=ue(()=>{const c=Ie(e.to);return t.resolve(c)}),i=ue(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],m=n.matched;if(!f||!m.length)return-1;const g=m.findIndex(Kr.bind(null,f));if(g>-1)return g;const b=Af(c[h-2]);return h>1&&Af(f)===b&&m[m.length-1].path!==b?m.findIndex(Kr.bind(null,c[h-2])):g}),s=ue(()=>i.value>-1&&kb(n.params,r.value.params)),a=ue(()=>i.value>-1&&i.value===n.matched.length-1&&op(n.params,r.value.params));function l(c={}){return xb(c)?t[Ie(e.replace)?"replace":"push"](Ie(e.to)).catch(ji):Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:s,isExactActive:a,navigate:l}}const Pb=Rc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tf,setup(e,{slots:t}){const n=ri(Tf(e)),{options:r}=Ge(Nc),i=ue(()=>({[If(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[If(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:kc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Cb=Pb;function xb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function kb(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Qe(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Af(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const If=(e,t,n)=>e??t??n,Vb=Rc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(kl),i=ue(()=>e.route||r.value),s=Ge(wf,0),a=ue(()=>{let h=Ie(s);const{matched:f}=i.value;let m;for(;(m=f[h])&&!m.components;)h++;return h}),l=ue(()=>i.value.matched[a.value]);fo(wf,ue(()=>a.value+1)),fo(Sb,l),fo(kl,i);const c=Gt();return ur(()=>[c.value,l.value,e.name],([h,f,m],[g,b,C])=>{f&&(f.instances[m]=h,b&&b!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),h&&f&&(!b||!Kr(f,b)||!g)&&(f.enterCallbacks[m]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=i.value,f=e.name,m=l.value,g=m&&m.components[f];if(!g)return Sf(n.default,{Component:g,route:h});const b=m.props[f],C=b?b===!0?h.params:typeof b=="function"?b(h):b:null,N=kc(g,Ct({},C,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(m.instances[f]=null)},ref:c}));return Sf(n.default,{Component:N,route:h})||N}}});function Sf(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const fp=Vb;function Db(e){const t=yb(e.routes,e),n=e.parseQuery||Ab,r=e.stringifyQuery||bf,i=e.history,s=Si(),a=Si(),l=Si(),c=ym(Pn);let h=Pn;xr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Wa.bind(null,M=>""+M),m=Wa.bind(null,HE),g=Wa.bind(null,ss);function b(M,J){let Y,et;return lp(M)?(Y=t.getRecordMatcher(M),et=J):et=M,t.addRoute(et,Y)}function C(M){const J=t.getRecordMatcher(M);J&&t.removeRoute(J)}function k(){return t.getRoutes().map(M=>M.record)}function N(M){return!!t.getRecordMatcher(M)}function x(M,J){if(J=Ct({},J||c.value),typeof M=="string"){const w=Qa(n,M,J.path),P=t.resolve({path:w.path},J),L=i.createHref(w.fullPath);return Ct(w,P,{params:g(P.params),hash:ss(w.hash),redirectedFrom:void 0,href:L})}let Y;if(M.path!=null)Y=Ct({},M,{path:Qa(n,M.path,J.path).path});else{const w=Ct({},M.params);for(const P in w)w[P]==null&&delete w[P];Y=Ct({},M,{params:m(w)}),J.params=m(J.params)}const et=t.resolve(Y,J),bt=M.hash||"";et.params=f(g(et.params));const xt=WE(r,Ct({},M,{hash:jE(bt),path:et.path})),_=i.createHref(xt);return Ct({fullPath:xt,hash:bt,query:r===bf?Ib(M.query):M.query||{}},et,{redirectedFrom:void 0,href:_})}function V(M){return typeof M=="string"?Qa(n,M,c.value.path):Ct({},M)}function F(M,J){if(h!==M)return Gr(8,{from:J,to:M})}function z(M){return T(M)}function tt(M){return z(Ct(V(M),{replace:!0}))}function W(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:Y}=J;let et=typeof Y=="function"?Y(M):Y;return typeof et=="string"&&(et=et.includes("?")||et.includes("#")?et=V(et):{path:et},et.params={}),Ct({query:M.query,hash:M.hash,params:et.path!=null?{}:M.params},et)}}function T(M,J){const Y=h=x(M),et=c.value,bt=M.state,xt=M.force,_=M.replace===!0,w=W(Y);if(w)return T(Ct(V(w),{state:typeof w=="object"?Ct({},bt,w.state):bt,force:xt,replace:_}),J||Y);const P=Y;P.redirectedFrom=J;let L;return!xt&&QE(r,et,Y)&&(L=Gr(16,{to:P,from:et}),Ne(et,et,!0,!1)),(L?Promise.resolve(L):A(P,et)).catch(O=>un(O)?un(O,2)?O:$e(O):ut(O,P,et)).then(O=>{if(O){if(un(O,2))return T(Ct({replace:_},V(O.to),{state:typeof O.to=="object"?Ct({},bt,O.to.state):bt,force:xt}),J||P)}else O=S(P,et,!0,_,bt);return I(P,et,O),O})}function y(M,J){const Y=F(M,J);return Y?Promise.reject(Y):Promise.resolve()}function v(M){const J=bn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function A(M,J){let Y;const[et,bt,xt]=Nb(M,J);Y=Ya(et.reverse(),"beforeRouteLeave",M,J);for(const w of et)w.leaveGuards.forEach(P=>{Y.push(Vn(P,M,J))});const _=y.bind(null,M,J);return Y.push(_),ie(Y).then(()=>{Y=[];for(const w of s.list())Y.push(Vn(w,M,J));return Y.push(_),ie(Y)}).then(()=>{Y=Ya(bt,"beforeRouteUpdate",M,J);for(const w of bt)w.updateGuards.forEach(P=>{Y.push(Vn(P,M,J))});return Y.push(_),ie(Y)}).then(()=>{Y=[];for(const w of xt)if(w.beforeEnter)if(Qe(w.beforeEnter))for(const P of w.beforeEnter)Y.push(Vn(P,M,J));else Y.push(Vn(w.beforeEnter,M,J));return Y.push(_),ie(Y)}).then(()=>(M.matched.forEach(w=>w.enterCallbacks={}),Y=Ya(xt,"beforeRouteEnter",M,J,v),Y.push(_),ie(Y))).then(()=>{Y=[];for(const w of a.list())Y.push(Vn(w,M,J));return Y.push(_),ie(Y)}).catch(w=>un(w,8)?w:Promise.reject(w))}function I(M,J,Y){l.list().forEach(et=>v(()=>et(M,J,Y)))}function S(M,J,Y,et,bt){const xt=F(M,J);if(xt)return xt;const _=J===Pn,w=xr?history.state:{};Y&&(et||_?i.replace(M.fullPath,Ct({scroll:_&&w&&w.scroll},bt)):i.push(M.fullPath,bt)),c.value=M,Ne(M,J,Y,_),$e()}let E;function ae(){E||(E=i.listen((M,J,Y)=>{if(!Xe.listening)return;const et=x(M),bt=W(et);if(bt){T(Ct(bt,{replace:!0}),et).catch(ji);return}h=et;const xt=c.value;xr&&rb(df(xt.fullPath,Y.delta),oa()),A(et,xt).catch(_=>un(_,12)?_:un(_,2)?(T(_.to,et).then(w=>{un(w,20)&&!Y.delta&&Y.type===os.pop&&i.go(-1,!1)}).catch(ji),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),ut(_,et,xt))).then(_=>{_=_||S(et,xt,!1),_&&(Y.delta&&!un(_,8)?i.go(-Y.delta,!1):Y.type===os.pop&&un(_,20)&&i.go(-1,!1)),I(et,xt,_)}).catch(ji)}))}let ht=Si(),yt=Si(),gt;function ut(M,J,Y){$e(M);const et=yt.list();return et.length?et.forEach(bt=>bt(M,J,Y)):console.error(M),Promise.reject(M)}function xe(){return gt&&c.value!==Pn?Promise.resolve():new Promise((M,J)=>{ht.add([M,J])})}function $e(M){return gt||(gt=!M,ae(),ht.list().forEach(([J,Y])=>M?Y(M):J()),ht.reset()),M}function Ne(M,J,Y,et){const{scrollBehavior:bt}=e;if(!xr||!bt)return Promise.resolve();const xt=!Y&&ib(df(M.fullPath,0))||(et||!Y)&&history.state&&history.state.scroll||null;return wm().then(()=>bt(M,J,xt)).then(_=>_&&nb(_)).catch(_=>ut(_,M,J))}const $t=M=>i.go(M);let Bt;const bn=new Set,Xe={currentRoute:c,listening:!0,addRoute:b,removeRoute:C,hasRoute:N,getRoutes:k,resolve:x,options:e,push:z,replace:tt,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:s.add,beforeResolve:a.add,afterEach:l.add,onError:yt.add,isReady:xe,install(M){const J=this;M.component("RouterLink",Cb),M.component("RouterView",fp),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(c)}),xr&&!Bt&&c.value===Pn&&(Bt=!0,z(i.location).catch(bt=>{}));const Y={};for(const bt in Pn)Object.defineProperty(Y,bt,{get:()=>c.value[bt],enumerable:!0});M.provide(Nc,J),M.provide(Oc,mm(Y)),M.provide(kl,c);const et=M.unmount;bn.add(M),M.unmount=function(){bn.delete(M),bn.size<1&&(h=Pn,E&&E(),E=null,c.value=Pn,Bt=!1,gt=!1),et()}}};function ie(M){return M.reduce((J,Y)=>J.then(()=>v(Y)),Promise.resolve())}return Xe}function Nb(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const l=t.matched[a];l&&(e.matched.find(h=>Kr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Kr(h,c))||i.push(c))}return[n,r,i]}function Ob(){return Ge(Oc)}const Mb={class:"desktop",id:"header-desktop"},Lb={class:"header-wrapper"},Fb={class:"header-title"},Ub={class:"menu"},$b={class:"menu-inner"},Bb=H("span",{class:"menu-item delimiter"},null,-1),jb=H("div",{class:"search-dropdown desktop"},[H("div",{id:"search-dropdown-desktop"})],-1),zb=H("div",{class:"search-dropdown mobile"},[H("div",{id:"search-dropdown-mobile"})],-1),qb={class:"header-container"},Hb={class:"header-wrapper"},Kb={class:"header-title"},Gb=H("span",null,null,-1),Wb=H("span",null,null,-1),Qb=H("span",null,null,-1),Yb=[Gb,Wb,Qb],Xb=H("div",{class:"search-dropdown desktop"},[H("div",{id:"search-dropdown-desktop"})],-1),Jb=H("div",{class:"search-dropdown mobile"},[H("div",{id:"search-dropdown-mobile"})],-1),Zb={__name:"Header",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=Ob(),n=["Albums","Tags"],r=Gt(!1),i=A0(e,"modelValue"),s=new kE,a=()=>{r.value=!r.value,document.body.classList.toggle("blur")};return ur(t,()=>{r.value=!1,document.body.classList.remove("blur")}),(l,c)=>{const h=qn("router-link"),f=qn("font-awesome-icon");return Wt(),Jt(Yt,null,[H("div",{id:"mask",onClick:a}),H("header",Mb,[H("div",Lb,[H("div",Fb,[vt(h,{to:"/"},{default:Dn(()=>[te("AimerVerse")]),_:1})]),H("div",Ub,[H("div",$b,[(Wt(),Jt(Yt,null,rs(n,m=>vt(h,{key:m,class:"menu-item",to:"/"},{default:Dn(()=>[te(Ae(m),1)]),_:2},1024)),64)),Bb,H("button",{onClick:c[0]||(c[0]=Mr((...m)=>Ie(s).switchTheme&&Ie(s).switchTheme(...m),["prevent"])),class:"menu-item theme-select","aria-label":"Switch Theme"},[vt(f,{icon:["fas","adjust"],"fixed-width":""})])])])])]),jb,zb,Pm(H("header",{class:nn(["mobile animate__animated animate__faster",i.value?"animate__fadeInDown":"animate__fadeOutUp"]),id:"header-mobile"},[H("div",qb,[H("div",Hb,[H("div",Kb,[vt(h,{to:"/"},{default:Dn(()=>[te("AimerVerse")]),_:1})]),H("div",{class:nn(["menu-toggle",{active:r.value}]),onClick:a,id:"menu-toggle-mobile"},Yb,2)]),H("div",{class:nn(["menu",{active:r.value}]),id:"menu-mobile"},[(Wt(),Jt(Yt,null,rs(n,m=>vt(h,{key:m,class:"menu-item",to:"/"},{default:Dn(()=>[te(Ae(m),1)]),_:2},1024)),64)),H("a",{href:"javascript:void(0);",class:"menu-item theme-select",title:"Switch Theme",onClick:c[1]||(c[1]=Mr((...m)=>Ie(s).switchTheme&&Ie(s).switchTheme(...m),["prevent"]))},[vt(f,{icon:["fas","adjust"],"fixed-width":""})])],2)])],2),[[Ym,i.value]]),Xb,Jb],64)}}},t2=H("div",{id:"back-to-top"},null,-1),e2={class:"wrapper","header-desktop":""},n2={class:"main"},r2={class:"container"},i2={href:"#back-to-top",id:"back-to-top-button",class:"fixed-button",title:"Back to Top"},s2={__name:"App",setup(e){const t=Gt(!0),n=Gt(!1);let r=0;const i=()=>{const s=window.scrollY,a=s===0,l=r-s>0;t.value=a||l,n.value=!a&&l,r=s};return ys(()=>{window.addEventListener("scroll",i)}),na(()=>{window.removeEventListener("scroll",i)}),(s,a)=>{const l=qn("font-awesome-icon");return Wt(),Jt(Yt,null,[t2,H("div",e2,[vt(Zb,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,8,["modelValue"]),H("main",n2,[H("div",r2,[vt(Ie(fp))])]),vt(xE),Pm(H("div",{id:"fixed-buttons",style:{display:"block"},class:nn(["animate__animated animate__faster",n.value?"animate__fadeIn":"animate__fadeOut"])},[H("a",i2,[vt(l,{icon:["fas","arrow-up"],"fixed-width":""})])],2),[[Ym,n.value]])])],64)}}},o2="modulepreload",a2=function(e){return"/"+e},Rf={},l2=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=a2(l),l in Rf)return;Rf[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":o2,c||(f.as="script",f.crossOrigin=""),f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},c2={class:"post-meta"},u2={class:"post-meta-line"},h2={class:"post-author"},f2={class:"author"},d2=["href"],dp={__name:"SongMeta",props:{song:Object},setup(e){const t=e;return(n,r)=>{var s,a,l,c;const i=qn("font-awesome-icon");return Wt(),Jt("div",c2,[H("div",u2,[H("span",h2,[H("span",f2,[vt(i,{icon:["fas","music"],"fixed-width":""}),te(" 歌手： "),H("a",{href:"/artist/"+e.song.artist},Ae((s=t.song)==null?void 0:s.artist),9,d2)])]),te("   "),H("span",null,"專輯："+Ae((a=t.song)==null?void 0:a.album),1),te("   "),H("span",null,"作詞："+Ae((l=t.song)==null?void 0:l.lyricist),1),te("   "),H("span",null,"作曲："+Ae((c=t.song)==null?void 0:c.composer),1)])])}}},m2={class:"icon"},p2={class:"details-icon"},g2={class:"details-content"},_2={class:"admonition-content"},y2={__name:"Admonition",props:{type:{type:String,default:"note"},title:{type:String,default:""},open:{type:Boolean,default:!0}},setup(e){const t=e,n={note:"pencil-alt",abstract:"list-ul",info:"info-circle",tip:"lightbulb",success:"check-circle",question:"question-circle",warning:"exclamation-triangle",failure:"times-circle",danger:"skull-crossbones",bug:"bug",example:"list-ol",quote:"quote-right"},r=l=>Object.keys(n).includes(l)?l:(console.error(`Invalid admonition type: ${l}`),"note"),i=Gt(t.open),s=Gt(r(t.type)),a=Gt(t.title||t.type.charAt(0).toUpperCase()+t.type.slice(1));return(l,c)=>{const h=qn("font-awesome-icon");return Wt(),Jt("div",{class:nn(["details admonition",[s.value,{open:i.value}]])},[H("div",{class:"details-summary admonition-title",onClick:c[0]||(c[0]=f=>i.value=!i.value)},[H("span",m2,[vt(h,{icon:["fas",n[s.value]],"fixed-width":""},null,8,["icon"])]),te(" "+Ae(a.value)+" ",1),H("span",p2,[vt(h,{icon:["fas","angle-right"],"fixed-width":""})])]),H("div",g2,[H("div",_2,[q1(l.$slots,"default")])])],2)}}};var Pf={};/**
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
 */const mp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},v2=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(g=64)),r.push(n[f],n[m],n[g],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(mp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):v2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new E2;const g=s<<2|l>>4;if(r.push(g),h!==64){const b=l<<4&240|h>>2;if(r.push(b),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class E2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b2=function(e){const t=mp(e);return pp.encodeByteArray(t,!0)},ko=function(e){return b2(e).replace(/\./g,"")},w2=function(e){try{return pp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function T2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A2=()=>T2().__FIREBASE_DEFAULTS__,I2=()=>{if(typeof process>"u"||typeof Pf>"u")return;const e=Pf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},S2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&w2(e[1]);return t&&JSON.parse(t)},Mc=()=>{try{return A2()||I2()||S2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},R2=e=>{var t,n;return(n=(t=Mc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},P2=e=>{const t=R2(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},gp=()=>{var e;return(e=Mc())===null||e===void 0?void 0:e.config};/**
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
 */class C2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function x2(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ko(JSON.stringify(n)),ko(JSON.stringify(a)),""].join(".")}/**
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
 */function k2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V2(){var e;const t=(e=Mc())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function D2(){return!V2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N2(){try{return typeof indexedDB=="object"}catch{return!1}}function O2(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const M2="FirebaseError";class ii extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=M2,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_p.prototype.create)}}class _p{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?L2(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ii(i,l,r)}}function L2(e,t){return e.replace(F2,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const F2=/\{\$([^}]+)}/g;function Vl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Cf(s)&&Cf(a)){if(!Vl(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cf(e){return e!==null&&typeof e=="object"}/**
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
 */function Wr(e){return e&&e._delegate?e._delegate:e}class as{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class U2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new C2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(B2(t))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=nr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nr){return this.instances.has(t)}getOptions(t=nr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$2(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=nr){return this.component?this.component.multipleInstances?t:nr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $2(e){return e===nr?void 0:e}function B2(e){return e.instantiationMode==="EAGER"}/**
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
 */class j2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new U2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var It;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(It||(It={}));const z2={debug:It.DEBUG,verbose:It.VERBOSE,info:It.INFO,warn:It.WARN,error:It.ERROR,silent:It.SILENT},q2=It.INFO,H2={[It.DEBUG]:"log",[It.VERBOSE]:"log",[It.INFO]:"info",[It.WARN]:"warn",[It.ERROR]:"error"},K2=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=H2[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yp{constructor(t){this.name=t,this._logLevel=q2,this._logHandler=K2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in It))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?z2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,It.DEBUG,...t),this._logHandler(this,It.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,It.VERBOSE,...t),this._logHandler(this,It.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,It.INFO,...t),this._logHandler(this,It.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,It.WARN,...t),this._logHandler(this,It.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,It.ERROR,...t),this._logHandler(this,It.ERROR,...t)}}const G2=(e,t)=>t.some(n=>e instanceof n);let xf,kf;function W2(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q2(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vp=new WeakMap,Dl=new WeakMap,Ep=new WeakMap,Xa=new WeakMap,Lc=new WeakMap;function Y2(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Ln(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&vp.set(n,e)}).catch(()=>{}),Lc.set(t,e),t}function X2(e){if(Dl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Dl.set(e,t)}let Nl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ep.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function J2(e){Nl=e(Nl)}function Z2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ja(this),t,...n);return Ep.set(r,t.sort?t.sort():[t]),Ln(r)}:Q2().includes(e)?function(...t){return e.apply(Ja(this),t),Ln(vp.get(this))}:function(...t){return Ln(e.apply(Ja(this),t))}}function tw(e){return typeof e=="function"?Z2(e):(e instanceof IDBTransaction&&X2(e),G2(e,W2())?new Proxy(e,Nl):e)}function Ln(e){if(e instanceof IDBRequest)return Y2(e);if(Xa.has(e))return Xa.get(e);const t=tw(e);return t!==e&&(Xa.set(e,t),Lc.set(t,e)),t}const Ja=e=>Lc.get(e);function ew(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),l=Ln(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ln(a.result),c.oldVersion,c.newVersion,Ln(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const nw=["get","getKey","getAll","getAllKeys","count"],rw=["put","add","delete","clear"],Za=new Map;function Vf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Za.get(t))return Za.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nw.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return Za.set(t,s),s}J2(e=>({...e,get:(t,n,r)=>Vf(t,n)||e.get(t,n,r),has:(t,n)=>!!Vf(t,n)||e.has(t,n)}));/**
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
 */class iw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ol="@firebase/app",Df="0.10.5";/**
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
 */const mr=new yp("@firebase/app"),ow="@firebase/app-compat",aw="@firebase/analytics-compat",lw="@firebase/analytics",cw="@firebase/app-check-compat",uw="@firebase/app-check",hw="@firebase/auth",fw="@firebase/auth-compat",dw="@firebase/database",mw="@firebase/database-compat",pw="@firebase/functions",gw="@firebase/functions-compat",_w="@firebase/installations",yw="@firebase/installations-compat",vw="@firebase/messaging",Ew="@firebase/messaging-compat",bw="@firebase/performance",ww="@firebase/performance-compat",Tw="@firebase/remote-config",Aw="@firebase/remote-config-compat",Iw="@firebase/storage",Sw="@firebase/storage-compat",Rw="@firebase/firestore",Pw="@firebase/vertexai-preview",Cw="@firebase/firestore-compat",xw="firebase",kw="10.12.2";/**
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
 */const Ml="[DEFAULT]",Vw={[Ol]:"fire-core",[ow]:"fire-core-compat",[lw]:"fire-analytics",[aw]:"fire-analytics-compat",[uw]:"fire-app-check",[cw]:"fire-app-check-compat",[hw]:"fire-auth",[fw]:"fire-auth-compat",[dw]:"fire-rtdb",[mw]:"fire-rtdb-compat",[pw]:"fire-fn",[gw]:"fire-fn-compat",[_w]:"fire-iid",[yw]:"fire-iid-compat",[vw]:"fire-fcm",[Ew]:"fire-fcm-compat",[bw]:"fire-perf",[ww]:"fire-perf-compat",[Tw]:"fire-rc",[Aw]:"fire-rc-compat",[Iw]:"fire-gcs",[Sw]:"fire-gcs-compat",[Rw]:"fire-fst",[Cw]:"fire-fst-compat",[Pw]:"fire-vertex","fire-js":"fire-js",[xw]:"fire-js-all"};/**
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
 */const Vo=new Map,Dw=new Map,Ll=new Map;function Nf(e,t){try{e.container.addComponent(t)}catch(n){mr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Do(e){const t=e.name;if(Ll.has(t))return mr.debug(`There were multiple attempts to register component ${t}.`),!1;Ll.set(t,e);for(const n of Vo.values())Nf(n,e);for(const n of Dw.values())Nf(n,e);return!0}function Nw(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ow={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new _p("app","Firebase",Ow);/**
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
 */class Mw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Lw=kw;function bp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ml,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=gp()),!n)throw Fn.create("no-options");const s=Vo.get(i);if(s){if(Vl(n,s.options)&&Vl(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const a=new j2(i);for(const c of Ll.values())a.addComponent(c);const l=new Mw(n,r,a);return Vo.set(i,l),l}function Fw(e=Ml){const t=Vo.get(e);if(!t&&e===Ml&&gp())return bp();if(!t)throw Fn.create("no-app",{appName:e});return t}function Br(e,t,n){var r;let i=(r=Vw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mr.warn(l.join(" "));return}Do(new as(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Uw="firebase-heartbeat-database",$w=1,ls="firebase-heartbeat-store";let tl=null;function wp(){return tl||(tl=ew(Uw,$w,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(e=>{throw Fn.create("idb-open",{originalErrorMessage:e.message})})),tl}async function Bw(e){try{const n=(await wp()).transaction(ls),r=await n.objectStore(ls).get(Tp(e));return await n.done,r}catch(t){if(t instanceof ii)mr.warn(t.message);else{const n=Fn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mr.warn(n.message)}}}async function Of(e,t){try{const r=(await wp()).transaction(ls,"readwrite");await r.objectStore(ls).put(t,Tp(e)),await r.done}catch(n){if(n instanceof ii)mr.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mr.warn(r.message)}}}function Tp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const jw=1024,zw=30*24*60*60*1e3;class qw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mf();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=zw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mf(),{heartbeatsToSend:r,unsentEntries:i}=Hw(this._heartbeatsCache.heartbeats),s=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Mf(){return new Date().toISOString().substring(0,10)}function Hw(e,t=jw){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Lf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N2()?O2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Lf(e){return ko(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Gw(e){Do(new as("platform-logger",t=>new iw(t),"PRIVATE")),Do(new as("heartbeat",t=>new qw(t),"PRIVATE")),Br(Ol,Df,e),Br(Ol,Df,"esm2017"),Br("fire-js","")}Gw("");var Ww="firebase",Qw="10.12.2";/**
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
 */Br(Ww,Qw,"app");var Ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,Ap;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(A,I,S){for(var E=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)E[ae-2]=arguments[ae];return y.prototype[I].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,v){v||(v=0);var A=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)A[I]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(I=0;16>I;++I)A[I]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],I=T.g[2];var S=T.g[3],E=y+(S^v&(I^S))+A[0]+3614090360&4294967295;y=v+(E<<7&4294967295|E>>>25),E=S+(I^y&(v^I))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=I+(v^S&(y^v))+A[2]+606105819&4294967295,I=S+(E<<17&4294967295|E>>>15),E=v+(y^I&(S^y))+A[3]+3250441966&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(S^v&(I^S))+A[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=S+(I^y&(v^I))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=I+(v^S&(y^v))+A[6]+2821735955&4294967295,I=S+(E<<17&4294967295|E>>>15),E=v+(y^I&(S^y))+A[7]+4249261313&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(S^v&(I^S))+A[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=S+(I^y&(v^I))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=I+(v^S&(y^v))+A[10]+4294925233&4294967295,I=S+(E<<17&4294967295|E>>>15),E=v+(y^I&(S^y))+A[11]+2304563134&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(S^v&(I^S))+A[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=S+(I^y&(v^I))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=I+(v^S&(y^v))+A[14]+2792965006&4294967295,I=S+(E<<17&4294967295|E>>>15),E=v+(y^I&(S^y))+A[15]+1236535329&4294967295,v=I+(E<<22&4294967295|E>>>10),E=y+(I^S&(v^I))+A[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=S+(v^I&(y^v))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(S^y))+A[11]+643717713&4294967295,I=S+(E<<14&4294967295|E>>>18),E=v+(S^y&(I^S))+A[0]+3921069994&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(I^S&(v^I))+A[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=S+(v^I&(y^v))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(S^y))+A[15]+3634488961&4294967295,I=S+(E<<14&4294967295|E>>>18),E=v+(S^y&(I^S))+A[4]+3889429448&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(I^S&(v^I))+A[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=S+(v^I&(y^v))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(S^y))+A[3]+4107603335&4294967295,I=S+(E<<14&4294967295|E>>>18),E=v+(S^y&(I^S))+A[8]+1163531501&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(I^S&(v^I))+A[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=S+(v^I&(y^v))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=I+(y^v&(S^y))+A[7]+1735328473&4294967295,I=S+(E<<14&4294967295|E>>>18),E=v+(S^y&(I^S))+A[12]+2368359562&4294967295,v=I+(E<<20&4294967295|E>>>12),E=y+(v^I^S)+A[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=S+(y^v^I)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=I+(S^y^v)+A[11]+1839030562&4294967295,I=S+(E<<16&4294967295|E>>>16),E=v+(I^S^y)+A[14]+4259657740&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(v^I^S)+A[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=S+(y^v^I)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=I+(S^y^v)+A[7]+4139469664&4294967295,I=S+(E<<16&4294967295|E>>>16),E=v+(I^S^y)+A[10]+3200236656&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(v^I^S)+A[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=S+(y^v^I)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=I+(S^y^v)+A[3]+3572445317&4294967295,I=S+(E<<16&4294967295|E>>>16),E=v+(I^S^y)+A[6]+76029189&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(v^I^S)+A[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=S+(y^v^I)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=I+(S^y^v)+A[15]+530742520&4294967295,I=S+(E<<16&4294967295|E>>>16),E=v+(I^S^y)+A[2]+3299628645&4294967295,v=I+(E<<23&4294967295|E>>>9),E=y+(I^(v|~S))+A[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=S+(v^(y|~I))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=I+(y^(S|~v))+A[14]+2878612391&4294967295,I=S+(E<<15&4294967295|E>>>17),E=v+(S^(I|~y))+A[5]+4237533241&4294967295,v=I+(E<<21&4294967295|E>>>11),E=y+(I^(v|~S))+A[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=S+(v^(y|~I))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=I+(y^(S|~v))+A[10]+4293915773&4294967295,I=S+(E<<15&4294967295|E>>>17),E=v+(S^(I|~y))+A[1]+2240044497&4294967295,v=I+(E<<21&4294967295|E>>>11),E=y+(I^(v|~S))+A[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=S+(v^(y|~I))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=I+(y^(S|~v))+A[6]+2734768916&4294967295,I=S+(E<<15&4294967295|E>>>17),E=v+(S^(I|~y))+A[13]+1309151649&4294967295,v=I+(E<<21&4294967295|E>>>11),E=y+(I^(v|~S))+A[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=S+(v^(y|~I))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=I+(y^(S|~v))+A[2]+718787259&4294967295,I=S+(E<<15&4294967295|E>>>17),E=v+(S^(I|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,A=this.B,I=this.h,S=0;S<y;){if(I==0)for(;S<=v;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<y;)if(A[I++]=T.charCodeAt(S++),I==this.blockSize){i(this,A),I=0;break}}else for(;S<y;)if(A[I++]=T[S++],I==this.blockSize){i(this,A),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var A=0;32>A;A+=8)T[v++]=this.g[y]>>>A&255;return T};function s(T,y){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function a(T,y){this.h=y;for(var v=[],A=!0,I=T.length-1;0<=I;I--){var S=T[I]|0;A&&S==y||(v[I]=S,A=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?s(T,function(y){return new a([y|0],0>y?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return N(h(-T));for(var y=[],v=1,A=0;T>=v;A++)y[A]=T/v|0,v*=4294967296;return new a(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return N(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),A=m,I=0;I<T.length;I+=8){var S=Math.min(8,T.length-I),E=parseInt(T.substring(I,I+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(v),A=A.add(h(E)))}return A}var m=c(0),g=c(1),b=c(16777216);e=a.prototype,e.m=function(){if(k(this))return-N(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var A=this.i(v);T+=(0<=A?A:4294967296+A)*y,y*=4294967296}return T},e.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(k(this))return"-"+N(this).toString(T);for(var y=h(Math.pow(T,6)),v=this,A="";;){var I=z(v,y).g;v=x(v,I.j(y));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=I,C(v))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},e.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}e.l=function(T){return T=x(this,T),k(T)?-1:C(T)?0:1};function N(T){for(var y=T.g.length,v=[],A=0;A<y;A++)v[A]=~T.g[A];return new a(v,~T.h).add(g)}e.abs=function(){return k(this)?N(this):this},e.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0,I=0;I<=y;I++){var S=A+(this.i(I)&65535)+(T.i(I)&65535),E=(S>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);A=E>>>16,S&=65535,E&=65535,v[I]=E<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(T,y){return T.add(N(y))}e.j=function(T){if(C(this)||C(T))return m;if(k(this))return k(T)?N(this).j(N(T)):N(N(this).j(T));if(k(T))return N(this.j(N(T)));if(0>this.l(b)&&0>T.l(b))return h(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],A=0;A<2*y;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var I=0;I<T.g.length;I++){var S=this.i(A)>>>16,E=this.i(A)&65535,ae=T.i(I)>>>16,ht=T.i(I)&65535;v[2*A+2*I]+=E*ht,V(v,2*A+2*I),v[2*A+2*I+1]+=S*ht,V(v,2*A+2*I+1),v[2*A+2*I+1]+=E*ae,V(v,2*A+2*I+1),v[2*A+2*I+2]+=S*ae,V(v,2*A+2*I+2)}for(A=0;A<y;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=y;A<2*y;A++)v[A]=0;return new a(v,0)};function V(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function F(T,y){this.g=T,this.h=y}function z(T,y){if(C(y))throw Error("division by zero");if(C(T))return new F(m,m);if(k(T))return y=z(N(T),y),new F(N(y.g),N(y.h));if(k(y))return y=z(T,N(y)),new F(N(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,A=y;0>=A.l(T);)v=tt(v),A=tt(A);var I=W(v,1),S=W(A,1);for(A=W(A,2),v=W(v,2);!C(A);){var E=S.add(A);0>=E.l(T)&&(I=I.add(v),S=E),A=W(A,1),v=W(v,1)}return y=x(T,I.j(y)),new F(I,y)}for(I=m;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(v),E=S.j(y);k(E)||0<E.l(T);)v-=A,S=h(v),E=S.j(y);C(S)&&(S=g),I=I.add(S),T=x(T,E)}return new F(I,T)}e.A=function(T){return z(this,T).h},e.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)&T.i(A);return new a(v,this.h&T.h)},e.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)|T.i(A);return new a(v,this.h|T.h)},e.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)^T.i(A);return new a(v,this.h^T.h)};function tt(T){for(var y=T.g.length+1,v=[],A=0;A<y;A++)v[A]=T.i(A)<<1|T.i(A-1)>>>31;return new a(v,T.h)}function W(T,y){var v=y>>5;y%=32;for(var A=T.g.length-v,I=[],S=0;S<A;S++)I[S]=0<y?T.i(S+v)>>>y|T.i(S+v+1)<<32-y:T.i(S+v);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ap=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,hr=a}).apply(typeof Ff<"u"?Ff:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ip,Sp,xi,Rp,go,Fl,Pp,Cp,xp;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)t:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break t;d=d[R]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&t(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var D=d++;return{value:u(D,o[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function b(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,D){for(var G=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)G[Vt-2]=arguments[Vt];return u.prototype[R].apply(p,G)}}function k(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function N(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const R=o.length||0,D=p.length||0;o.length=R+D;for(let G=0;G<D;G++)o[R+G]=p[G]}else o.push(p)}}class x{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var tt=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function W(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=xe;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ae{constructor(){this.h=this.g=null}add(u,d){const p=ht.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ht=new x(()=>new yt,o=>o.reset());class yt{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,ut=!1,xe=new ae,$e=()=>{const o=l.Promise.resolve(void 0);gt=()=>{o.then(Ne)}};var Ne=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){S(d)}var u=ht;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ut=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Bt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Xe(o,u){if(Bt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(tt){t:{try{z(u.nodeName);var R=!0;break t}catch{}R=!1}R||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ie[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Xe.aa.h.call(this)}}C(Xe,Bt);var ie={2:"touch",3:"pen",4:"mouse"};Xe.prototype.h=function(){Xe.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(o,u,d,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=R,this.key=++J,this.da=this.fa=!1}function et(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function bt(o){this.src=o,this.g={},this.h=0}bt.prototype.add=function(o,u,d,p,R){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var G=_(o,u,p,R);return-1<G?(u=o[G],d||(u.fa=!1)):(u=new Y(u,this.src,D,!!p,R),u.fa=d,o.push(u)),u};function xt(o,u){var d=u.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,u,void 0),D;(D=0<=R)&&Array.prototype.splice.call(p,R,1),D&&(et(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _(o,u,d,p){for(var R=0;R<o.length;++R){var D=o[R];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==p)return R}return-1}var w="closure_lm_"+(1e6*Math.random()|0),P={};function L(o,u,d,p,R){if(Array.isArray(u)){for(var D=0;D<u.length;D++)L(o,u[D],d,p,R);return null}return d=ot(d),o&&o[M]?o.K(u,d,h(p)?!!p.capture:!!p,R):O(o,u,d,!1,p,R)}function O(o,u,d,p,R,D){if(!u)throw Error("Invalid event type");var G=h(R)?!!R.capture:!!R,Vt=X(o);if(Vt||(o[w]=Vt=new bt(o)),d=Vt.add(u,d,p,G,D),d.proxy)return d;if(p=q(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)bn||(R=G),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(K(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function q(){function o(d){return u.call(o.src,o.listener,d)}const u=B;return o}function Q(o,u,d,p,R){if(Array.isArray(u))for(var D=0;D<u.length;D++)Q(o,u[D],d,p,R);else p=h(p)?!!p.capture:!!p,d=ot(d),o&&o[M]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],d=_(D,d,p,R),-1<d&&(et(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=X(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,d,p,R)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[M])xt(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(K(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=X(u))?(xt(d,o),d.h==0&&(d.src=null,u[w]=null)):et(o)}}}function K(o){return o in P?P[o]:P[o]="on"+o}function B(o,u){if(o.da)o=!0;else{u=new Xe(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&j(o),o=d.call(p,u)}return o}function X(o){return o=o[w],o instanceof bt?o:null}var at="__closure_events_fn_"+(1e9*Math.random()>>>0);function ot(o){return typeof o=="function"?o:(o[at]||(o[at]=function(u){return o.handleEvent(u)}),o[at])}function it(){$t.call(this),this.i=new bt(this),this.M=this,this.F=null}C(it,$t),it.prototype[M]=!0,it.prototype.removeEventListener=function(o,u,d,p){Q(this,o,u,d,p)};function ct(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Bt(u,o);else if(u instanceof Bt)u.target=u.target||o;else{var R=u;u=new Bt(p,o),A(u,R)}if(R=!0,d)for(var D=d.length-1;0<=D;D--){var G=u.g=d[D];R=Tt(G,p,!0,u)&&R}if(G=u.g=o,R=Tt(G,p,!0,u)&&R,R=Tt(G,p,!1,u)&&R,d)for(D=0;D<d.length;D++)G=u.g=d[D],R=Tt(G,p,!1,u)&&R}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)et(d[p]);delete o.g[u],o.h--}}this.F=null},it.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},it.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function Tt(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,D=0;D<u.length;++D){var G=u[D];if(G&&!G.da&&G.capture==d){var Vt=G.listener,le=G.ha||G.src;G.fa&&xt(o.i,G),R=Vt.call(le,p)!==!1&&R}}return R&&!p.defaultPrevented}function kt(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ht(o){o.g=kt(()=>{o.g=null,o.i&&(o.i=!1,Ht(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class ke extends $t{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ht(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(o){$t.call(this),this.h=o,this.g={}}C(Oe,$t);var ui=[];function wn(o){W(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),wn(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=l.JSON.stringify,be=l.JSON.parse,Me=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Tr(){}Tr.prototype.h=null;function mu(o){return o.h||(o.h=o.i())}function pu(){}var hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ea(){Bt.call(this,"d")}C(Ea,Bt);function ba(){Bt.call(this,"c")}C(ba,Bt);var Yn={},gu=null;function Cs(){return gu=gu||new it}Yn.La="serverreachability";function _u(o){Bt.call(this,Yn.La,o)}C(_u,Bt);function fi(o){const u=Cs();ct(u,new _u(u))}Yn.STAT_EVENT="statevent";function yu(o,u){Bt.call(this,Yn.STAT_EVENT,o),this.stat=u}C(yu,Bt);function we(o){const u=Cs();ct(u,new yu(u,o))}Yn.Ma="timingevent";function vu(o,u){Bt.call(this,Yn.Ma,o),this.size=u}C(vu,Bt);function di(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function Qg(o,u,d,p,R,D){o.info(function(){if(o.g)if(D)for(var G="",Vt=D.split("&"),le=0;le<Vt.length;le++){var St=Vt[le].split("=");if(1<St.length){var me=St[0];St=St[1];var pe=me.split("_");G=2<=pe.length&&pe[1]=="type"?G+(me+"="+St+"&"):G+(me+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+d+`
`+G})}function Yg(o,u,d,p,R,D,G){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+d+`
`+D+" "+G})}function Ar(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Jg(o,d)+(p?" "+p:"")})}function Xg(o,u){o.info(function(){return"TIMEOUT: "+u})}mi.prototype.info=function(){};function Jg(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var D=R[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<R.length;G++)R[G]=""}}}}return wr(d)}catch{return u}}var xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wa;function ks(){}C(ks,Tr),ks.prototype.g=function(){return new XMLHttpRequest},ks.prototype.i=function(){return{}},wa=new ks;function Tn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bu}function bu(){this.i=null,this.g="",this.h=!1}var wu={},Ta={};function Aa(o,u,d){o.L=1,o.v=Os(ln(u)),o.m=d,o.P=!0,Tu(o,null)}function Tu(o,u){o.F=Date.now(),Vs(o),o.A=ln(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Lu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new bu,o.g=eh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new ke(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(ui[0]=R.toString()),R=ui);for(var D=0;D<R.length;D++){var G=L(d,R[D],p||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),fi(),Qg(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const u=this.M;u&&cn(o)==3?u.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)t:{const pe=cn(this.g);var u=this.g.Ba();const Rr=this.g.Z();if(!(3>pe)&&(pe!=3||this.g&&(this.h.h||this.g.oa()||qu(this.g)))){this.J||pe!=4||u==7||(u==8||0>=Rr?fi(3):fi(2)),Ia(this);var d=this.g.Z();this.X=d;e:if(Au(this)){var p=qu(this.g);o="";var R=p.length,D=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),pi(this);var G="";break e}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(D&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,Yg(this.i,this.u,this.A,this.l,this.R,pe,d),this.o){if(this.T&&!this.K){e:{if(this.g){var Vt,le=this.g;if((Vt=le.g?le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Vt)){var St=Vt;break e}}St=null}if(d=St)Ar(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sa(this,d);else{this.o=!1,this.s=3,we(12),Xn(this),pi(this);break t}}if(this.P){d=!0;let Be;for(;!this.J&&this.C<G.length;)if(Be=Zg(this,G),Be==Ta){pe==4&&(this.s=4,we(14),d=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==wu){this.s=4,we(15),Ar(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else Ar(this.i,this.l,Be,null),Sa(this,Be);if(Au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pe!=4||G.length!=0||this.h.h||(this.s=1,we(16),d=!1),this.o=this.o&&d,!d)Ar(this.i,this.l,G,"[Invalid Chunked Response]"),Xn(this),pi(this);else if(0<G.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Va(me),me.M=!0,we(11))}}else Ar(this.i,this.l,G,null),Sa(this,G);pe==4&&Xn(this),this.o&&!this.J&&(pe==4?Xu(this.j,this):(this.o=!1,Vs(this)))}else g_(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),Xn(this),pi(this)}}}catch{}finally{}};function Au(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Zg(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Ta:(d=Number(u.substring(d,p)),isNaN(d)?wu:(p+=1,p+d>u.length?Ta:(u=u.slice(p,p+d),o.C=p+d,u)))}Tn.prototype.cancel=function(){this.J=!0,Xn(this)};function Vs(o){o.S=Date.now()+o.I,Iu(o,o.I)}function Iu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=di(g(o.ba,o),u)}function Ia(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Xg(this.i,this.A),this.L!=2&&(fi(),we(17)),Xn(this),this.s=2,pi(this)):Iu(this,this.S-o)};function pi(o){o.j.G==0||o.J||Xu(o.j,o)}function Xn(o){Ia(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,wn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Sa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ra(d.h,o))){if(!o.K&&Ra(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)$s(d),Fs(d);else break t;ka(d),we(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=di(g(d.Za,d),6e3));if(1>=Pu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Zn(d,11)}else if((o.K||d.g==o)&&$s(d),!V(u))for(R=d.Da.g.parse(u),u=0;u<R.length;u++){let St=R[u];if(d.T=St[0],St=St[1],d.G==2)if(St[0]=="c"){d.K=St[1],d.ia=St[2];const me=St[3];me!=null&&(d.la=me,d.j.info("VER="+d.la));const pe=St[4];pe!=null&&(d.Aa=pe,d.j.info("SVER="+d.Aa));const Rr=St[5];Rr!=null&&typeof Rr=="number"&&0<Rr&&(p=1.5*Rr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Be=o.g;if(Be){const js=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var D=p.h;D.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Pa(D,D.h),D.h=null))}if(p.D){const Da=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(p.ya=Da,Ot(p.I,p.D,Da))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var G=o;if(p.qa=th(p,p.J?p.ia:null,p.W),G.K){Cu(p.h,G);var Vt=G,le=p.L;le&&(Vt.I=le),Vt.B&&(Ia(Vt),Vs(Vt)),p.g=G}else Qu(p);0<d.i.length&&Us(d)}else St[0]!="stop"&&St[0]!="close"||Zn(d,7);else d.G==3&&(St[0]=="stop"||St[0]=="close"?St[0]=="stop"?Zn(d,7):xa(d):St[0]!="noop"&&d.l&&d.l.ta(St),d.v=0)}}fi(4)}catch{}}var t_=class{constructor(o,u){this.g=o,this.map=u}};function Su(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ru(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pu(o){return o.h?1:o.g?o.g.size:0}function Ra(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Pa(o,u){o.g?o.g.add(u):o.h=u}function Cu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Su.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return k(o.i)}function e_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function n_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function ku(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=n_(o),p=e_(o),R=p.length,D=0;D<R;D++)u.call(void 0,p[D],d&&d[D],o)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var D=o[d].substring(0,p);R=o[d].substring(p+1)}else D=o[d];u(D,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Jn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jn){this.h=o.h,Ds(this,o.j),this.o=o.o,this.g=o.g,Ns(this,o.s),this.l=o.l;var u=o.i,d=new yi;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Du(this,d),this.m=o.m}else o&&(u=String(o).match(Vu))?(this.h=!1,Ds(this,u[1]||"",!0),this.o=gi(u[2]||""),this.g=gi(u[3]||"",!0),Ns(this,u[4]),this.l=gi(u[5]||"",!0),Du(this,u[6]||"",!0),this.m=gi(u[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}Jn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(_i(u,Nu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(_i(u,Nu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(_i(d,d.charAt(0)=="/"?o_:s_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",_i(d,l_)),o.join("")};function ln(o){return new Jn(o)}function Ds(o,u,d){o.j=d?gi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ns(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Du(o,u,d){u instanceof yi?(o.i=u,c_(o.i,o.h)):(d||(u=_i(u,a_)),o.i=new yi(u,o.h))}function Ot(o,u,d){o.i.set(u,d)}function Os(o){return Ot(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _i(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,i_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function i_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Nu=/[#\/\?@]/g,s_=/[#\?:]/g,o_=/[#\?]/g,a_=/[#\?@]/g,l_=/#/g;function yi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&r_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}e=yi.prototype,e.add=function(o,u){An(this),this.i=null,o=Ir(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Ou(o,u){An(o),u=Ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Mu(o,u){return An(o),u=Ir(o,u),o.g.has(u)}e.forEach=function(o,u){An(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(u,R,p,this)},this)},this)},e.na=function(){An(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const R=o[p];for(let D=0;D<R.length;D++)d.push(u[p])}return d},e.V=function(o){An(this);let u=[];if(typeof o=="string")Mu(this,o)&&(u=u.concat(this.g.get(Ir(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},e.set=function(o,u){return An(this),this.i=null,o=Ir(this,o),Mu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Lu(o,u,d){Ou(o,u),0<d.length&&(o.i=null,o.g.set(Ir(o,u),k(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const D=encodeURIComponent(String(p)),G=this.V(p);for(p=0;p<G.length;p++){var R=D;G[p]!==""&&(R+="="+encodeURIComponent(String(G[p]))),o.push(R)}}return this.i=o.join("&")};function Ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function c_(o,u){u&&!o.j&&(An(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Ou(this,p),Lu(this,R,d))},o)),o.j=u}function u_(o,u){const d=new mi;if(l.Image){const p=new Image;p.onload=b(In,d,"TestLoadImage: loaded",!0,u,p),p.onerror=b(In,d,"TestLoadImage: error",!1,u,p),p.onabort=b(In,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(In,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function h_(o,u){const d=new mi,p=new AbortController,R=setTimeout(()=>{p.abort(),In(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(D=>{clearTimeout(R),D.ok?In(d,"TestPingServer: ok",!0,u):In(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),In(d,"TestPingServer: error",!1,u)})}function In(o,u,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function f_(){this.g=new Me}function d_(o,u,d){const p=d||"";try{ku(o,function(R,D){let G=R;h(R)&&(G=wr(R)),u.push(p+D+"="+encodeURIComponent(G))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function vi(o){this.l=o.Ub||null,this.j=o.eb||!1}C(vi,Tr),vi.prototype.g=function(){return new Ms(this.l,this.j)},vi.prototype.i=function(o){return function(){return o}}({});function Ms(o,u){it.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ms,it),e=Ms.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,bi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ei(this):bi(this),this.readyState==3&&Fu(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Ei(this))},e.Qa=function(o){this.g&&(this.response=o,Ei(this))},e.ga=function(){this.g&&Ei(this)};function Ei(o){o.readyState=4,o.l=null,o.j=null,o.v=null,bi(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function bi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Uu(o){let u="";return W(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Ca(o,u,d){t:{for(p in d){var p=!1;break t}p=!0}p||(d=Uu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ot(o,u,d))}function zt(o){it.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(zt,it);var m_=/^https?$/i,p_=["POST","PUT"];e=zt.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wa.g(),this.v=this.o?mu(this.o):mu(wa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){$u(this,D);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())d.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(p_,u,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of d)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zu(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){$u(this,D)}};function $u(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Bu(o),Ls(o)}function Bu(o){o.A||(o.A=!0,ct(o,"complete"),ct(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ct(this,"complete"),ct(this,"abort"),Ls(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ls(this,!0)),zt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?ju(this):this.bb())},e.bb=function(){ju(this)};function ju(o){if(o.h&&typeof a<"u"&&(!o.v[1]||cn(o)!=4||o.Z()!=2)){if(o.u&&cn(o)==4)kt(o.Ea,0,o);else if(ct(o,"readystatechange"),cn(o)==4){o.h=!1;try{const G=o.Z();t:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var d;if(!(d=u)){var p;if(p=G===0){var R=String(o.D).match(Vu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!m_.test(R?R.toLowerCase():"")}d=p}if(d)ct(o,"complete"),ct(o,"success");else{o.m=6;try{var D=2<cn(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Bu(o)}}finally{Ls(o)}}}}function Ls(o,u){if(o.g){zu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ct(o,"ready");try{d.onreadystatechange=p}catch{}}}function zu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),be(u)}};function qu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function g_(o){const u={};o=(o.g&&2<=cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(V(o[p]))continue;var d=I(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[R]||[];u[R]=D,D.push(d)}T(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Hu(o){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wi("baseRetryDelayMs",5e3,o),this.cb=wi("retryDelaySeedMs",1e4,o),this.Wa=wi("forwardChannelMaxRetries",2,o),this.wa=wi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Su(o&&o.concurrentRequestLimit),this.Da=new f_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Hu.prototype,e.la=8,e.G=1,e.connect=function(o,u,d,p){we(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=th(this,null,this.W),Us(this)};function xa(o){if(Ku(o),o.G==3){var u=o.U++,d=ln(o.I);if(Ot(d,"SID",o.K),Ot(d,"RID",u),Ot(d,"TYPE","terminate"),Ti(o,d),u=new Tn(o,o.j,u),u.L=2,u.v=Os(ln(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=eh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vs(u)}Zu(o)}function Fs(o){o.g&&(Va(o),o.g.cancel(),o.g=null)}function Ku(o){Fs(o),o.u&&(l.clearTimeout(o.u),o.u=null),$s(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Us(o){if(!Ru(o.h)&&!o.s){o.s=!0;var u=o.Ga;gt||$e(),ut||(gt(),ut=!0),xe.add(u,o),o.B=0}}function __(o,u){return Pu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=di(g(o.Ga,o,u),Ju(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Tn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=y(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(R.H=D,D=null),this.P)t:{for(var u=0,d=0;d<this.i.length;d++){e:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break t}if(u===4096||d===this.i.length-1){u=d+1;break t}}u=1e3}else u=1e3;u=Wu(this,R,u),d=ln(this.I),Ot(d,"RID",o),Ot(d,"CVER",22),this.D&&Ot(d,"X-HTTP-Session-Id",this.D),Ti(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(Uu(D)))+"&"+u:this.m&&Ca(d,this.m,D)),Pa(this.h,R),this.Ua&&Ot(d,"TYPE","init"),this.P?(Ot(d,"$req",u),Ot(d,"SID","null"),R.T=!0,Aa(R,d,null)):Aa(R,d,u),this.G=2}}else this.G==3&&(o?Gu(this,o):this.i.length==0||Ru(this.h)||Gu(this))};function Gu(o,u){var d;u?d=u.l:d=o.U++;const p=ln(o.I);Ot(p,"SID",o.K),Ot(p,"RID",d),Ot(p,"AID",o.T),Ti(o,p),o.m&&o.o&&Ca(p,o.m,o.o),d=new Tn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Wu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Pa(o.h,d),Aa(d,p,u)}function Ti(o,u){o.H&&W(o.H,function(d,p){Ot(u,p,d)}),o.l&&ku({},function(d,p){Ot(u,p,d)})}function Wu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?g(o.l.Na,o.l,o):null;t:{var R=o.i;let D=-1;for(;;){const G=["count="+d];D==-1?0<d?(D=R[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let Vt=!0;for(let le=0;le<d;le++){let St=R[le].g;const me=R[le].map;if(St-=D,0>St)D=Math.max(0,R[le].g-100),Vt=!1;else try{d_(me,G,"req"+St+"_")}catch{p&&p(me)}}if(Vt){p=G.join("&");break t}}}return o=o.i.splice(0,d),u.D=o,p}function Qu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;gt||$e(),ut||(gt(),ut=!0),xe.add(u,o),o.v=0}}function ka(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=di(g(o.Fa,o),Ju(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=di(g(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),Fs(this),Yu(this))};function Va(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Yu(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ln(o.qa);Ot(u,"RID","rpc"),Ot(u,"SID",o.K),Ot(u,"AID",o.T),Ot(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ot(u,"TO",o.ja),Ot(u,"TYPE","xmlhttp"),Ti(o,u),o.m&&o.o&&Ca(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Os(ln(u)),d.m=null,d.P=!0,Tu(d,o)}e.Za=function(){this.C!=null&&(this.C=null,Fs(this),ka(this),we(19))};function $s(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xu(o,u){var d=null;if(o.g==u){$s(o),Va(o),o.g=null;var p=2}else if(Ra(o.h,u))d=u.D,Cu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Cs(),ct(p,new vu(p,d)),Us(o)}else Qu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&__(o,u)||p==2&&ka(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),R){case 1:Zn(o,5);break;case 4:Zn(o,10);break;case 3:Zn(o,6);break;default:Zn(o,2)}}}function Ju(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Zn(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),p=o.Xa;const R=!p;p=new Jn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ds(p,"https"),Os(p),R?u_(p.toString(),d):h_(p.toString(),d)}else we(2);o.G=0,o.l&&o.l.sa(u),Zu(o),Ku(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Zu(o){if(o.G=0,o.ka=[],o.l){const u=xu(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function th(o,u,d){var p=d instanceof Jn?ln(d):new Jn(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ns(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var D=new Jn(null);p&&Ds(D,p),u&&(D.g=u),R&&Ns(D,R),d&&(D.l=d),p=D}return d=o.D,u=o.ya,d&&u&&Ot(p,d,u),Ot(p,"VER",o.la),Ti(o,p),p}function eh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new zt(new vi({eb:d})):new zt(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}e=nh.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Bs(){}Bs.prototype.g=function(o,u){return new Ve(o,u)};function Ve(o,u){it.call(this),this.g=new Hu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!V(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!V(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Sr(this)}C(Ve,it),Ve.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){xa(this.g)},Ve.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=wr(o),o=d);u.i.push(new t_(u.Ya++,o)),u.G==3&&Us(u)},Ve.prototype.N=function(){this.g.l=null,delete this.j,xa(this.g),delete this.g,Ve.aa.N.call(this)};function rh(o){Ea.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const d in u){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(rh,Ea);function ih(){ba.call(this),this.status=1}C(ih,ba);function Sr(o){this.g=o}C(Sr,nh),Sr.prototype.ua=function(){ct(this.g,"a")},Sr.prototype.ta=function(o){ct(this.g,new rh(o))},Sr.prototype.sa=function(o){ct(this.g,new ih)},Sr.prototype.ra=function(){ct(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,xp=function(){return new Bs},Cp=function(){return Cs()},Pp=Yn,Fl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,go=xs,Eu.COMPLETE="complete",Rp=Eu,pu.EventType=hi,hi.OPEN="a",hi.CLOSE="b",hi.ERROR="c",hi.MESSAGE="d",it.prototype.listen=it.prototype.K,xi=pu,Sp=vi,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,Ip=zt}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const Uf="@firebase/firestore";/**
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
 */class _e{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */let si="10.12.1";/**
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
 */const pr=new yp("@firebase/firestore");function Ri(){return pr.logLevel}function nt(e,...t){if(pr.logLevel<=It.DEBUG){const n=t.map(Fc);pr.debug(`Firestore (${si}): ${e}`,...n)}}function _n(e,...t){if(pr.logLevel<=It.ERROR){const n=t.map(Fc);pr.error(`Firestore (${si}): ${e}`,...n)}}function Qr(e,...t){if(pr.logLevel<=It.WARN){const n=t.map(Fc);pr.warn(`Firestore (${si}): ${e}`,...n)}}function Fc(e){if(typeof e=="string")return e;try{/**
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
 */function ft(e="Unexpected state"){const t=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: `+e;throw _n(t),new Error(t)}function Nt(e,t){e||ft()}function pt(e,t){return e}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends ii{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class kp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(_e.UNAUTHENTICATED))}shutdown(){}}class Xw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jw{constructor(t){this.t=t,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Nt(typeof r.accessToken=="string"),new kp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Nt(t===null||typeof t=="string"),new _e(t)}}class Zw{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Zw(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,nt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Nt(typeof n.token=="string"),this.R=n.token,new eT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Vp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=rT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Rt(e,t){return e<t?-1:e>t?1:0}function Yr(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class ee{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new rt(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ee.fromMillis(Date.now())}static fromDate(t){return ee.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ee(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Rt(this.nanoseconds,t.nanoseconds):Rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class mt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new mt(t)}static min(){return new mt(new ee(0,0))}static max(){return new mt(new ee(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cs{constructor(t,n,r){n===void 0?n=0:n>t.length&&ft(),r===void 0?r=t.length-n:r>t.length-n&&ft(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return cs.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof cs?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Lt extends cs{construct(t,n,r){return new Lt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new rt(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Lt(n)}static emptyPath(){return new Lt([])}}const iT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends cs{construct(t,n,r){return new fe(t,n,r)}static isValidIdentifier(t){return iT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new rt(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new rt(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new rt(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new rt(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new fe(n)}static emptyPath(){return new fe([])}}/**
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
 */class lt{constructor(t){this.path=t}static fromPath(t){return new lt(Lt.fromString(t))}static fromName(t){return new lt(Lt.fromString(t).popFirst(5))}static empty(){return new lt(Lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Lt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Lt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new lt(new Lt(t.slice()))}}function sT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=mt.fromTimestamp(r===1e9?new ee(n+1,0):new ee(n,r));return new Hn(i,lt.empty(),t)}function oT(e){return new Hn(e.readTime,e.key,-1)}class Hn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(mt.min(),lt.empty(),-1)}static max(){return new Hn(mt.max(),lt.empty(),-1)}}function aT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=lt.comparator(e.documentKey,t.documentKey),n!==0?n:Rt(e.largestBatchId,t.largestBatchId))}/**
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
 */const lT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Es(e){if(e.code!==U.FAILED_PRECONDITION||e.message!==lT)throw e;nt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ft(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):$.reject(n)}static resolve(t){return new $((n,r)=>{n(t)})}static reject(t){return new $((n,r)=>{r(t)})}static waitFor(t){return new $((n,r)=>{let i=0,s=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},c=>r(c))}),a=!0,s===i&&n()})}static or(t){let n=$.resolve(!1);for(const r of t)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new $((r,i)=>{const s=t.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;n(t[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(t,n){return new $((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function uT(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bs(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Uc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Uc.oe=-1;function aa(e){return e==null}function No(e){return e===0&&1/e==-1/0}function hT(e){return typeof e=="number"&&Number.isInteger(e)&&!No(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function $f(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function oi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Dp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class jt{constructor(t,n){this.comparator=t,this.root=n||ce.EMPTY}insert(t,n){return new jt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(t){return new jt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ce.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new so(this.root,t,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new so(this.root,t,this.comparator,!0)}}class so{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ce{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=s??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new ce(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ft();const t=this.left.check();if(t!==this.right.check())throw ft();return t+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw ft()}get value(){throw ft()}get color(){throw ft()}get left(){throw ft()}get right(){throw ft()}copy(t,n,r,i,s){return this}insert(t,n,r){return new ce(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(t){this.comparator=t,this.data=new jt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bf(this.data.getIterator())}getIteratorFrom(t){return new Bf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof de)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new de(this.comparator);return n.data=t,n}}class Bf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class He{constructor(t){this.fields=t,t.sort(fe.comparator)}static empty(){return new He([])}unionWith(t){let n=new de(fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new He(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Yr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ee{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Np("Invalid base64 string: "+s):s}}(t);return new Ee(n)}static fromUint8Array(t){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new Ee(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const fT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(e){if(Nt(!!e),typeof e=="string"){let t=0;const n=fT.exec(e);if(Nt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Qt(e.seconds),nanos:Qt(e.nanos)}}function Qt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function gr(e){return typeof e=="string"?Ee.fromBase64String(e):Ee.fromUint8Array(e)}/**
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
 */function $c(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bc(e){const t=e.mapValue.fields.__previous_value__;return $c(t)?Bc(t):t}function us(e){const t=Kn(e.mapValue.fields.__local_write_time__.timestampValue);return new ee(t.seconds,t.nanos)}/**
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
 */class dT{constructor(t,n,r,i,s,a,l,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class hs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof hs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const oo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$c(e)?4:mT(e)?9007199254740991:10:ft()}function an(e,t){if(e===t)return!0;const n=_r(e);if(n!==_r(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return us(e).isEqual(us(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Kn(i.timestampValue),l=Kn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return gr(i.bytesValue).isEqual(gr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Qt(i.geoPointValue.latitude)===Qt(s.geoPointValue.latitude)&&Qt(i.geoPointValue.longitude)===Qt(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Qt(i.integerValue)===Qt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Qt(i.doubleValue),l=Qt(s.doubleValue);return a===l?No(a)===No(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Yr(e.arrayValue.values||[],t.arrayValue.values||[],an);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if($f(a)!==$f(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!an(a[c],l[c])))return!1;return!0}(e,t);default:return ft()}}function fs(e,t){return(e.values||[]).find(n=>an(n,t))!==void 0}function Xr(e,t){if(e===t)return 0;const n=_r(e),r=_r(t);if(n!==r)return Rt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Rt(e.booleanValue,t.booleanValue);case 2:return function(s,a){const l=Qt(s.integerValue||s.doubleValue),c=Qt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return jf(e.timestampValue,t.timestampValue);case 4:return jf(us(e),us(t));case 5:return Rt(e.stringValue,t.stringValue);case 6:return function(s,a){const l=gr(s),c=gr(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Rt(l[h],c[h]);if(f!==0)return f}return Rt(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,a){const l=Rt(Qt(s.latitude),Qt(a.latitude));return l!==0?l:Rt(Qt(s.longitude),Qt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const f=Xr(l[h],c[h]);if(f)return f}return Rt(l.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,a){if(s===oo.mapValue&&a===oo.mapValue)return 0;if(s===oo.mapValue)return 1;if(a===oo.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=Rt(c[m],f[m]);if(g!==0)return g;const b=Xr(l[c[m]],h[f[m]]);if(b!==0)return b}return Rt(c.length,f.length)}(e.mapValue,t.mapValue);default:throw ft()}}function jf(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Rt(e,t);const n=Kn(e),r=Kn(t),i=Rt(n.seconds,r.seconds);return i!==0?i:Rt(n.nanos,r.nanos)}function Jr(e){return Ul(e)}function Ul(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return gr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return lt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ul(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ul(n.fields[a])}`;return i+"}"}(e.mapValue):ft()}function zf(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function $l(e){return!!e&&"integerValue"in e}function jc(e){return!!e&&"arrayValue"in e}function qf(e){return!!e&&"nullValue"in e}function Hf(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _o(e){return!!e&&"mapValue"in e}function qi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return oi(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=qi(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function mT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Le{constructor(t){this.value=t}static empty(){return new Le({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!_o(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=qi(n)}setAll(t){let n=fe.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=qi(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());_o(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return an(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];_o(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){oi(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Le(qi(this.value))}}function Op(e){const t=[];return oi(e.fields,(n,r)=>{const i=new fe([n]);if(_o(r)){const s=Op(r.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new He(t)}/**
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
 */class ye{constructor(t,n,r,i,s,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ye(t,0,mt.min(),mt.min(),mt.min(),Le.empty(),0)}static newFoundDocument(t,n,r,i){return new ye(t,1,n,mt.min(),r,i,0)}static newNoDocument(t,n){return new ye(t,2,n,mt.min(),mt.min(),Le.empty(),0)}static newUnknownDocument(t,n){return new ye(t,3,n,mt.min(),mt.min(),Le.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(mt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=mt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oo{constructor(t,n){this.position=t,this.inclusive=n}}function Kf(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(s.field.isKeyField()?r=lt.comparator(lt.fromName(a.referenceValue),n.key):r=Xr(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gf(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!an(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Mo{constructor(t,n="asc"){this.field=t,this.dir=n}}function pT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Mp{}class Xt extends Mp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new _T(t,n,r):n==="array-contains"?new ET(t,r):n==="in"?new bT(t,r):n==="not-in"?new wT(t,r):n==="array-contains-any"?new TT(t,r):new Xt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new yT(t,r):new vT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xr(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(Xr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ft()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ye extends Mp{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Ye(t,n)}matches(t){return Lp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Lp(e){return e.op==="and"}function Fp(e){return gT(e)&&Lp(e)}function gT(e){for(const t of e.filters)if(t instanceof Ye)return!1;return!0}function Bl(e){if(e instanceof Xt)return e.field.canonicalString()+e.op.toString()+Jr(e.value);if(Fp(e))return e.filters.map(t=>Bl(t)).join(",");{const t=e.filters.map(n=>Bl(n)).join(",");return`${e.op}(${t})`}}function Up(e,t){return e instanceof Xt?function(r,i){return i instanceof Xt&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)}(e,t):e instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Up(a,i.filters[l]),!0):!1}(e,t):void ft()}function $p(e){return e instanceof Xt?function(n){return`${n.field.canonicalString()} ${n.op} ${Jr(n.value)}`}(e):e instanceof Ye?function(n){return n.op.toString()+" {"+n.getFilters().map($p).join(" ,")+"}"}(e):"Filter"}class _T extends Xt{constructor(t,n,r){super(t,n,r),this.key=lt.fromName(r.referenceValue)}matches(t){const n=lt.comparator(t.key,this.key);return this.matchesComparison(n)}}class yT extends Xt{constructor(t,n){super(t,"in",n),this.keys=Bp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class vT extends Xt{constructor(t,n){super(t,"not-in",n),this.keys=Bp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Bp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>lt.fromName(r.referenceValue))}class ET extends Xt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return jc(n)&&fs(n.arrayValue,this.value)}}class bT extends Xt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fs(this.value.arrayValue,n)}}class wT extends Xt{constructor(t,n){super(t,"not-in",n)}matches(t){if(fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!fs(this.value.arrayValue,n)}}class TT extends Xt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!jc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fs(this.value.arrayValue,r))}}/**
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
 */class AT{constructor(t,n=null,r=[],i=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Wf(e,t=null,n=[],r=[],i=null,s=null,a=null){return new AT(e,t,n,r,i,s,a)}function zc(e){const t=pt(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Bl(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),aa(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Jr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Jr(r)).join(",")),t.ue=n}return t.ue}function qc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!pT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Up(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Gf(e.startAt,t.startAt)&&Gf(e.endAt,t.endAt)}function jl(e){return lt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class ws{constructor(t,n=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IT(e,t,n,r,i,s,a,l){return new ws(e,t,n,r,i,s,a,l)}function jp(e){return new ws(e)}function Qf(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function zp(e){return e.collectionGroup!==null}function Hi(e){const t=pt(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new de(fe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Mo(s,r))}),n.has(fe.keyField().canonicalString())||t.ce.push(new Mo(fe.keyField(),r))}return t.ce}function rn(e){const t=pt(e);return t.le||(t.le=ST(t,Hi(e))),t.le}function ST(e,t){if(e.limitType==="F")return Wf(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mo(i.field,s)});const n=e.endAt?new Oo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Oo(e.startAt.position,e.startAt.inclusive):null;return Wf(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function zl(e,t){const n=e.filters.concat([t]);return new ws(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ql(e,t,n){return new ws(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function la(e,t){return qc(rn(e),rn(t))&&e.limitType===t.limitType}function qp(e){return`${zc(rn(e))}|lt:${e.limitType}`}function kr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$p(i)).join(", ")}]`),aa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Jr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Jr(i)).join(",")),`Target(${r})`}(rn(e))}; limitType=${e.limitType})`}function ca(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):lt.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Hi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=Kf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Hi(r),i)||r.endAt&&!function(a,l,c){const h=Kf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Hi(r),i))}(e,t)}function RT(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Hp(e){return(t,n)=>{let r=!1;for(const i of Hi(e)){const s=PT(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function PT(e,t,n){const r=e.field.isKeyField()?lt.comparator(t.key,n.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?Xr(c,h):ft()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ft()}}/**
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
 */class ai{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){oi(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Dp(this.inner)}size(){return this.innerSize}}/**
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
 */const CT=new jt(lt.comparator);function yn(){return CT}const Kp=new jt(lt.comparator);function ki(...e){let t=Kp;for(const n of e)t=t.insert(n.key,n);return t}function Gp(e){let t=Kp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ar(){return Ki()}function Wp(){return Ki()}function Ki(){return new ai(e=>e.toString(),(e,t)=>e.isEqual(t))}const xT=new jt(lt.comparator),kT=new de(lt.comparator);function Et(...e){let t=kT;for(const n of e)t=t.add(n);return t}const VT=new de(Rt);function DT(){return VT}/**
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
 */function Qp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(t)?"-0":t}}function Yp(e){return{integerValue:""+e}}function NT(e,t){return hT(t)?Yp(t):Qp(e,t)}/**
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
 */class ua{constructor(){this._=void 0}}function OT(e,t,n){return e instanceof Lo?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$c(s)&&(s=Bc(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,t):e instanceof ds?Jp(e,t):e instanceof ms?Zp(e,t):function(i,s){const a=Xp(i,s),l=Yf(a)+Yf(i.Pe);return $l(a)&&$l(i.Pe)?Yp(l):Qp(i.serializer,l)}(e,t)}function MT(e,t,n){return e instanceof ds?Jp(e,t):e instanceof ms?Zp(e,t):n}function Xp(e,t){return e instanceof Fo?function(r){return $l(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Lo extends ua{}class ds extends ua{constructor(t){super(),this.elements=t}}function Jp(e,t){const n=tg(t);for(const r of e.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class ms extends ua{constructor(t){super(),this.elements=t}}function Zp(e,t){let n=tg(t);for(const r of e.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class Fo extends ua{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function Yf(e){return Qt(e.integerValue||e.doubleValue)}function tg(e){return jc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function LT(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof ds&&i instanceof ds||r instanceof ms&&i instanceof ms?Yr(r.elements,i.elements,an):r instanceof Fo&&i instanceof Fo?an(r.Pe,i.Pe):r instanceof Lo&&i instanceof Lo}(e.transform,t.transform)}class FT{constructor(t,n){this.version=t,this.transformResults=n}}class dn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new dn}static exists(t){return new dn(void 0,t)}static updateTime(t){return new dn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yo(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ha{}function eg(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new rg(e.key,dn.none()):new Ts(e.key,e.data,dn.none());{const n=e.data,r=Le.empty();let i=new de(fe.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Er(e.key,r,new He(i.toArray()),dn.none())}}function UT(e,t,n){e instanceof Ts?function(i,s,a){const l=i.value.clone(),c=Jf(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Er?function(i,s,a){if(!yo(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Jf(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(ng(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Gi(e,t,n,r){return e instanceof Ts?function(s,a,l,c){if(!yo(s.precondition,a))return l;const h=s.value.clone(),f=Zf(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Er?function(s,a,l,c){if(!yo(s.precondition,a))return l;const h=Zf(s.fieldTransforms,c,a),f=a.data;return f.setAll(ng(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(e,t,n,r):function(s,a,l){return yo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function $T(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Xp(r.transform,i||null);s!=null&&(n===null&&(n=Le.empty()),n.set(r.field,s))}return n||null}function Xf(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yr(r,i,(s,a)=>LT(s,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ts extends ha{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Er extends ha{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ng(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Jf(e,t,n){const r=new Map;Nt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,l=t.data.field(s.field);r.set(s.field,MT(a,l,n[i]))}return r}function Zf(e,t,n){const r=new Map;for(const i of e){const s=i.transform,a=n.data.field(i.field);r.set(i.field,OT(s,a,t))}return r}class rg extends ha{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BT extends ha{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jT{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&UT(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Gi(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Gi(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Wp();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const c=eg(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(mt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Et())}isEqual(t){return this.batchId===t.batchId&&Yr(this.mutations,t.mutations,(n,r)=>Xf(n,r))&&Yr(this.baseMutations,t.baseMutations,(n,r)=>Xf(n,r))}}class Hc{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Nt(t.mutations.length===r.length);let i=function(){return xT}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Hc(t,n,r,i)}}/**
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
 */class zT{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class qT{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Kt,wt;function HT(e){switch(e){default:return ft();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function ig(e){if(e===void 0)return _n("GRPC error has no .code"),U.UNKNOWN;switch(e){case Kt.OK:return U.OK;case Kt.CANCELLED:return U.CANCELLED;case Kt.UNKNOWN:return U.UNKNOWN;case Kt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Kt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Kt.INTERNAL:return U.INTERNAL;case Kt.UNAVAILABLE:return U.UNAVAILABLE;case Kt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Kt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Kt.NOT_FOUND:return U.NOT_FOUND;case Kt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Kt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Kt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Kt.ABORTED:return U.ABORTED;case Kt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Kt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Kt.DATA_LOSS:return U.DATA_LOSS;default:return ft()}}(wt=Kt||(Kt={}))[wt.OK=0]="OK",wt[wt.CANCELLED=1]="CANCELLED",wt[wt.UNKNOWN=2]="UNKNOWN",wt[wt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wt[wt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wt[wt.NOT_FOUND=5]="NOT_FOUND",wt[wt.ALREADY_EXISTS=6]="ALREADY_EXISTS",wt[wt.PERMISSION_DENIED=7]="PERMISSION_DENIED",wt[wt.UNAUTHENTICATED=16]="UNAUTHENTICATED",wt[wt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wt[wt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wt[wt.ABORTED=10]="ABORTED",wt[wt.OUT_OF_RANGE=11]="OUT_OF_RANGE",wt[wt.UNIMPLEMENTED=12]="UNIMPLEMENTED",wt[wt.INTERNAL=13]="INTERNAL",wt[wt.UNAVAILABLE=14]="UNAVAILABLE",wt[wt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function KT(){return new TextEncoder}/**
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
 */const GT=new hr([4294967295,4294967295],0);function td(e){const t=KT().encode(e),n=new Ap;return n.update(t),new Uint8Array(n.digest())}function ed(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new hr([n,r],0),new hr([i,s],0)]}class Kc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vi(`Invalid padding: ${n}`);if(r<0)throw new Vi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Vi(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Vi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=hr.fromNumber(this.Ie)}Ee(t,n,r){let i=t.add(n.multiply(hr.fromNumber(r)));return i.compare(GT)===1&&(i=new hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=td(t),[r,i]=ed(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Kc(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const n=td(t),[r,i]=ed(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fa{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,As.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new fa(mt.min(),i,new jt(Rt),yn(),Et())}}class As{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new As(r,n,Et(),Et(),Et())}}/**
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
 */class vo{constructor(t,n,r,i){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=i}}class sg{constructor(t,n){this.targetId=t,this.me=n}}class og{constructor(t,n,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nd{constructor(){this.fe=0,this.ge=id(),this.pe=Ee.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Et(),n=Et(),r=Et();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ft()}}),new As(this.pe,this.ye,t,n,r)}ve(){this.we=!1,this.ge=id()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Nt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WT{constructor(t){this.Le=t,this.Be=new Map,this.ke=yn(),this.qe=rd(),this.Qe=new jt(Rt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:ft()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(t){const n=t.targetId,r=t.me.count,i=this.Je(n);if(i){const s=i.target;if(jl(s))if(r===0){const a=new lt(s.path);this.Ue(n,a,ye.newNoDocument(a,mt.min()))}else Nt(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(t),c=l?this.Xe(l,t,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=gr(r).toUint8Array()}catch(c){if(c instanceof Np)return Qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Kc(a,i,s)}catch(c){return Qr(c instanceof Vi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(t){const n=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&jl(l.target)){const c=new lt(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ye.newNoDocument(c,t))}s.be&&(n.set(a,s.Ce()),s.ve())}});let r=Et();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new fa(t,n,this.Qe,this.ke,r);return this.ke=yn(),this.qe=rd(),this.Qe=new jt(Rt),i}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new nd,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new de(Rt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||nt("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new nd),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function rd(){return new jt(lt.comparator)}function id(){return new jt(lt.comparator)}const QT={asc:"ASCENDING",desc:"DESCENDING"},YT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XT={and:"AND",or:"OR"};class JT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Hl(e,t){return e.useProto3Json||aa(t)?t:{value:t}}function Uo(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ag(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ZT(e,t){return Uo(e,t.toTimestamp())}function sn(e){return Nt(!!e),mt.fromTimestamp(function(n){const r=Kn(n);return new ee(r.seconds,r.nanos)}(e))}function Gc(e,t){return Kl(e,t).canonicalString()}function Kl(e,t){const n=function(i){return new Lt(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function lg(e){const t=Lt.fromString(e);return Nt(dg(t)),t}function Gl(e,t){return Gc(e.databaseId,t.path)}function el(e,t){const n=lg(t);if(n.get(1)!==e.databaseId.projectId)throw new rt(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rt(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new lt(ug(n))}function cg(e,t){return Gc(e.databaseId,t)}function tA(e){const t=lg(e);return t.length===4?Lt.emptyPath():ug(t)}function Wl(e){return new Lt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ug(e){return Nt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function sd(e,t,n){return{name:Gl(e,t),fields:n.value.mapValue.fields}}function eA(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ft()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(Nt(f===void 0||typeof f=="string"),Ee.fromBase64String(f||"")):(Nt(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ee.fromUint8Array(f||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?U.UNKNOWN:ig(h.code);return new rt(f,h.message||"")}(a);n=new og(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=el(e,r.document.name),s=sn(r.document.updateTime),a=r.document.createTime?sn(r.document.createTime):mt.min(),l=new Le({mapValue:{fields:r.document.fields}}),c=ye.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new vo(h,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=el(e,r.document),s=r.readTime?sn(r.readTime):mt.min(),a=ye.newNoDocument(i,s),l=r.removedTargetIds||[];n=new vo([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=el(e,r.document),s=r.removedTargetIds||[];n=new vo([],s,i,null)}else{if(!("filter"in t))return ft();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new qT(i,s),l=r.targetId;n=new sg(l,a)}}return n}function nA(e,t){let n;if(t instanceof Ts)n={update:sd(e,t.key,t.value)};else if(t instanceof rg)n={delete:Gl(e,t.key)};else if(t instanceof Er)n={update:sd(e,t.key,t.data),updateMask:hA(t.fieldMask)};else{if(!(t instanceof BT))return ft();n={verify:Gl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Lo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ds)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ms)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ft()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ZT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ft()}(e,t.precondition)),n}function rA(e,t){return e&&e.length>0?(Nt(t!==void 0),e.map(n=>function(i,s){let a=i.updateTime?sn(i.updateTime):sn(s);return a.isEqual(mt.min())&&(a=sn(s)),new FT(a,i.transformResults||[])}(n,t))):[]}function iA(e,t){return{documents:[cg(e,t.path)]}}function sA(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cg(e,i);const s=function(h){if(h.length!==0)return fg(Ye.create(h,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Vr(g.field),direction:lA(g.dir)}}(f))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Hl(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{_t:n,parent:i}}function oA(e){let t=tA(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Nt(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=hg(m);return g instanceof Ye&&Fp(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(C){return new Mo(Dr(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,aa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,b=m.values||[];return new Oo(b,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,b=m.values||[];return new Oo(b,g)}(n.endAt)),IT(t,i,a,s,l,"F",c,h)}function aA(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ft()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function hg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Dr(n.unaryFilter.field);return Xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Dr(n.unaryFilter.field);return Xt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dr(n.unaryFilter.field);return Xt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dr(n.unaryFilter.field);return Xt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ft()}}(e):e.fieldFilter!==void 0?function(n){return Xt.create(Dr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ft()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ye.create(n.compositeFilter.filters.map(r=>hg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ft()}}(n.compositeFilter.op))}(e):ft()}function lA(e){return QT[e]}function cA(e){return YT[e]}function uA(e){return XT[e]}function Vr(e){return{fieldPath:e.canonicalString()}}function Dr(e){return fe.fromServerFormat(e.fieldPath)}function fg(e){return e instanceof Xt?function(n){if(n.op==="=="){if(Hf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(qf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(qf(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:cA(n.op),value:n.value}}}(e):e instanceof Ye?function(n){const r=n.getFilters().map(i=>fg(i));return r.length===1?r[0]:{compositeFilter:{op:uA(n.op),filters:r}}}(e):ft()}function hA(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function dg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Nn{constructor(t,n,r,i,s=mt.min(),a=mt.min(),l=Ee.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Nn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class fA{constructor(t){this.ct=t}}function dA(e){const t=oA({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ql(t,t.limit,"L"):t}/**
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
 */class mA{constructor(){this._n=new pA}addToCollectionParentIndex(t,n){return this._n.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(Hn.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(Hn.min())}updateCollectionGroup(t,n,r){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class pA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new de(Lt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new de(Lt.comparator)).toArray()}}/**
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
 */class Zr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Zr(0)}static Ln(){return new Zr(-1)}}/**
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
 */class gA{constructor(){this.changes=new ai(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ye.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class _A{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class yA{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Gi(r.mutation,i,He.empty(),ee.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Et()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Et()){const i=ar();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let a=ki();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=ar();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Et()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,i){let s=yn();const a=Ki(),l=function(){return Ki()}();return n.forEach((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Er)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Gi(f.mutation,h,f.mutation.getFieldMask(),ee.now())):a.set(h.key,He.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new _A(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Ki();let i=new jt((a,l)=>a-l),s=Et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||He.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(i.get(l.batchId)||Et()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=Wp();f.forEach(g=>{if(!s.has(g)){const b=eg(n.get(g),r.get(g));b!==null&&m.set(g,b),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,m))}return $.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(a){return lt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):zp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):$.resolve(ar());let l=-1,c=s;return a.next(h=>$.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(t,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,c,h,Et())).next(f=>({batchId:l,changes:Gp(f)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new lt(n)).next(r=>{let i=ki();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let a=ki();return this.indexManager.getCollectionParents(t,s).next(l=>$.forEach(l,c=>{const h=function(m,g){return new ws(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(f=>{f.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ye.newInvalidDocument(f)))});let l=ki();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Gi(f.mutation,h,He.empty(),ee.now()),ca(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class vA{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:dA(i.bundledQuery),readTime:sn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class EA{constructor(){this.overlays=new jt(lt.comparator),this.hr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ar();return $.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),$.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(t,n,r){const i=ar(),s=n.length+1,a=new lt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new jt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=ar(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ar(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return $.resolve(l)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zT(n,r));let s=this.hr.get(n);s===void 0&&(s=Et(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Wc{constructor(){this.Pr=new de(se.Ir),this.Tr=new de(se.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new se(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new se(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new lt(new Lt([])),r=new se(n,t),i=new se(n,t+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new lt(new Lt([])),r=new se(n,t),i=new se(n,t+1);let s=Et();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(t){const n=new se(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class se{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return lt.comparator(t.key,n.key)||Rt(t.pr,n.pr)}static Er(t,n){return Rt(t.pr,n.pr)||lt.comparator(t.key,n.key)}}/**
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
 */class bA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new de(se.Ir)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jT(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new se(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return $.resolve(a)}lookupMutationBatch(t,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new se(n,0),i=new se(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new de(Rt);return n.forEach(i=>{const s=new se(i,0),a=new se(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],l=>{r=r.add(l.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;lt.isDocumentKey(s)||(s=s.child(""));const a=new se(new lt(s),0);let l=new de(Rt);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.pr)),!0)},a),$.resolve(this.Dr(l))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Nt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new se(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new se(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wA{constructor(t){this.vr=t,this.docs=function(){return new jt(lt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(n))}getEntries(t,n){let r=yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ye.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=yn();const a=n.path,l=new lt(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||aT(oT(f),r)<=0||(i.has(f.key)||ca(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(t,n,r,i){ft()}Fr(t,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new TA(this)}getSize(t){return $.resolve(this.size)}}class TA extends gA{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class AA{constructor(t){this.persistence=t,this.Mr=new ai(n=>zc(n),qc),this.lastRemoteSnapshotVersion=mt.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wc,this.targetCount=0,this.Lr=Zr.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Zr(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.qn(n),$.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),$.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(t,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class IA{constructor(t,n){this.Br={},this.overlays={},this.kr=new Uc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new AA(this),this.indexManager=new mA,this.remoteDocumentCache=function(i){return new wA(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new fA(n),this.$r=new vA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new EA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new bA(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){nt("MemoryPersistence","Starting transaction:",t);const i=new SA(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class SA extends cT{constructor(t){super(),this.currentSequenceNumber=t}}class Qc{constructor(t){this.persistence=t,this.zr=new Wc,this.jr=null}static Hr(t){return new Qc(t)}get Jr(){if(this.jr)return this.jr;throw ft()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=lt.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,mt.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class Yc{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=Et(),i=Et();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yc(t,n.fromCache,r,i)}}/**
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
 */class RA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class PA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return D2()?8:uT(k2())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new RA;return this.Ji(t,n,a).next(l=>{if(s.result=l,this.Ui)return this.Yi(t,n,a,l.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(Ri()<=It.DEBUG&&nt("QueryEngine","SDK will not create cache indexes for query:",kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(Ri()<=It.DEBUG&&nt("QueryEngine","Query:",kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Ri()<=It.DEBUG&&nt("QueryEngine","The SDK decides to create cache indexes for query:",kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,rn(n))):$.resolve())}ji(t,n){if(Qf(n))return $.resolve(null);let r=rn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ql(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const a=Et(...s);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.Zi(n,l);return this.Xi(n,h,a,c.readTime)?this.ji(t,ql(n,null,"F")):this.es(t,h,n,c)}))})))}Hi(t,n,r,i){return Qf(n)||i.isEqual(mt.min())?$.resolve(null):this.zi.getDocuments(t,r).next(s=>{const a=this.Zi(n,s);return this.Xi(n,a,r,i)?$.resolve(null):(Ri()<=It.DEBUG&&nt("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kr(n)),this.es(t,a,n,sT(i,-1)).next(l=>l))})}Zi(t,n){let r=new de(Hp(t));return n.forEach((i,s)=>{ca(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return Ri()<=It.DEBUG&&nt("QueryEngine","Using full collection scan to execute query:",kr(n)),this.zi.getDocumentsMatchingQuery(t,n,Hn.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class CA{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new jt(Rt),this.rs=new ai(s=>zc(s),qc),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function xA(e,t,n,r){return new CA(e,t,n,r)}async function mg(e,t){const n=pt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=Et();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function kA(e,t){const n=pt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,g=m.keys();let b=$.resolve();return g.forEach(C=>{b=b.next(()=>f.getEntry(c,C)).next(k=>{const N=h.docVersions.get(C);Nt(N!==null),k.version.compareTo(N)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Et();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function pg(e){const t=pt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function VA(e,t){const n=pt(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];t.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,m)));let b=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?b=b.withResumeToken(Ee.EMPTY_BYTE_STRING,mt.min()).withLastLimboFreeSnapshotVersion(mt.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),i=i.insert(m,b),function(k,N,x){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,b,f)&&l.push(n.Qr.updateTargetData(s,b))});let c=yn(),h=Et();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(DA(s,a,t.documentUpdates).next(f=>{c=f.cs,h=f.ls})),!r.isEqual(mt.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(m=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(n.ns=i,s))}function DA(e,t,n){let r=Et(),i=Et();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let a=yn();return n.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(mt.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):nt("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{cs:a,ls:i}})}function NA(e,t){const n=pt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function OA(e,t){const n=pt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(a=>(i=new Nn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Ql(e,t,n){const r=pt(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!bs(a))throw a;nt("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function od(e,t,n){const r=pt(e);let i=mt.min(),s=Et();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=pt(c),g=m.rs.get(f);return g!==void 0?$.resolve(m.ns.get(g)):m.Qr.getTargetData(h,f)}(r,a,rn(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,n?i:mt.min(),n?s:Et())).next(l=>(MA(r,RT(t),l),{documents:l,hs:s})))}function MA(e,t,n){let r=e.ss.get(t)||mt.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class ad{constructor(){this.activeTargetIds=DT()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class LA{constructor(){this.no=new ad,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ad,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class FA{io(t){}shutdown(){}}/**
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
 */let ao=null;function nl(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
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
 */const UA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $A{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const ge="WebChannelConnection";class BA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,a){const l=nl(),c=this.vo(n,r.toUriEncodedString());nt("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,a),this.Mo(n,c,h,i).then(f=>(nt("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Qr("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(n,r,i,s,a,l){return this.Co(n,r,i,s,a)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}vo(n,r){const i=UA[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,n,r,i){const s=nl();return new Promise((a,l)=>{const c=new Ip;c.setWithCredentials(!0),c.listenOnce(Rp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case go.NO_ERROR:const f=c.getResponseJson();nt(ge,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case go.TIMEOUT:nt(ge,`RPC '${t}' ${s} timed out`),l(new rt(U.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const m=c.getStatus();if(nt(ge,`RPC '${t}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const b=g==null?void 0:g.error;if(b&&b.status&&b.message){const C=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(x)>=0?x:U.UNKNOWN}(b.status);l(new rt(C,b.message))}else l(new rt(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new rt(U.UNAVAILABLE,"Connection failed."));break;default:ft()}}finally{nt(ge,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);nt(ge,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",h,r,15)})}Oo(t,n,r){const i=nl(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=xp(),l=Cp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Sp({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");nt(ge,`Creating RPC '${t}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);let g=!1,b=!1;const C=new $A({lo:N=>{b?nt(ge,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(g||(nt(ge,`Opening RPC '${t}' stream ${i} transport.`),m.open(),g=!0),nt(ge,`RPC '${t}' stream ${i} sending:`,N),m.send(N))},ho:()=>m.close()}),k=(N,x,V)=>{N.listen(x,F=>{try{V(F)}catch(z){setTimeout(()=>{throw z},0)}})};return k(m,xi.EventType.OPEN,()=>{b||(nt(ge,`RPC '${t}' stream ${i} transport opened.`),C.mo())}),k(m,xi.EventType.CLOSE,()=>{b||(b=!0,nt(ge,`RPC '${t}' stream ${i} transport closed`),C.po())}),k(m,xi.EventType.ERROR,N=>{b||(b=!0,Qr(ge,`RPC '${t}' stream ${i} transport errored:`,N),C.po(new rt(U.UNAVAILABLE,"The operation could not be completed")))}),k(m,xi.EventType.MESSAGE,N=>{var x;if(!b){const V=N.data[0];Nt(!!V);const F=V,z=F.error||((x=F[0])===null||x===void 0?void 0:x.error);if(z){nt(ge,`RPC '${t}' stream ${i} received error:`,z);const tt=z.status;let W=function(v){const A=Kt[v];if(A!==void 0)return ig(A)}(tt),T=z.message;W===void 0&&(W=U.INTERNAL,T="Unknown error status: "+tt+" with message "+z.message),b=!0,C.po(new rt(W,T)),m.close()}else nt(ge,`RPC '${t}' stream ${i} received:`,V),C.yo(V)}}),k(l,Pp.STAT_EVENT,N=>{N.stat===Fl.PROXY?nt(ge,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===Fl.NOPROXY&&nt(ge,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function rl(){return typeof document<"u"?document:null}/**
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
 */function da(e){return new JT(e,!0)}/**
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
 */class gg{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&nt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class _g{constructor(t,n,r,i,s,a,l,c){this.oi=t,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new gg(t,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(n)}__(){}auth(){this.state=1;const t=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{t(()=>{const i=new rt(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,n){const r=this.a_(this.jo);this.stream=this.l_(t,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return nt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return n=>{this.oi.enqueueAndForget(()=>this.jo===t?n():(nt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jA extends _g{constructor(t,n,r,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}l_(t,n){return this.connection.Oo("Listen",t,n)}onMessage(t){this.Yo.reset();const n=eA(this.serializer,t),r=function(s){if(!("targetChange"in s))return mt.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?mt.min():a.readTime?sn(a.readTime):mt.min()}(t);return this.listener.h_(n,r)}P_(t){const n={};n.database=Wl(this.serializer),n.addTarget=function(s,a){let l;const c=a.target;if(l=jl(c)?{documents:iA(s,c)}:{query:sA(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=ag(s,a.resumeToken);const h=Hl(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(mt.min())>0){l.readTime=Uo(s,a.snapshotVersion.toTimestamp());const h=Hl(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=aA(this.serializer,t);r&&(n.labels=r),this.i_(n)}I_(t){const n={};n.database=Wl(this.serializer),n.removeTarget=t,this.i_(n)}}class zA extends _g{constructor(t,n,r,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,n){return this.connection.Oo("Write",t,n)}onMessage(t){if(Nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const n=rA(t.writeResults,t.commitTime),r=sn(t.commitTime);return this.listener.A_(r,n)}return Nt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Wl(this.serializer),this.i_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>nA(this.serializer,r))};this.i_(n)}}/**
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
 */class qA extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new rt(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(t,Kl(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new rt(U.UNKNOWN,s.toString())})}xo(t,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,Kl(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new rt(U.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class HA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
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
 */class KA{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{br(this)&&(nt("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=pt(c);h.M_.add(4),await Is(h),h.N_.set("Unknown"),h.M_.delete(4),await ma(h)}(this))})}),this.N_=new HA(r,i)}}async function ma(e){if(br(e))for(const t of e.x_)await t(!0)}async function Is(e){for(const t of e.x_)await t(!1)}function yg(e,t){const n=pt(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),tu(n)?Zc(n):li(n).Xo()&&Jc(n,t))}function Xc(e,t){const n=pt(e),r=li(n);n.F_.delete(t),r.Xo()&&vg(n,t),n.F_.size===0&&(r.Xo()?r.n_():br(n)&&n.N_.set("Unknown"))}function Jc(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(mt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}li(e).P_(t)}function vg(e,t){e.L_.xe(t),li(e).I_(t)}function Zc(e){e.L_=new WT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),li(e).start(),e.N_.w_()}function tu(e){return br(e)&&!li(e).Zo()&&e.F_.size>0}function br(e){return pt(e).M_.size===0}function Eg(e){e.L_=void 0}async function GA(e){e.N_.set("Online")}async function WA(e){e.F_.forEach((t,n)=>{Jc(e,t)})}async function QA(e,t){Eg(e),tu(e)?(e.N_.D_(t),Zc(e)):e.N_.set("Unknown")}async function YA(e,t,n){if(e.N_.set("Online"),t instanceof og&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(e,t)}catch(r){nt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $o(e,r)}else if(t instanceof vo?e.L_.Ke(t):t instanceof sg?e.L_.He(t):e.L_.We(t),!n.isEqual(mt.min()))try{const r=await pg(e.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.L_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.F_.get(h);f&&s.F_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=s.F_.get(c);if(!f)return;s.F_.set(c,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),vg(s,c);const m=new Nn(f.target,c,h,f.sequenceNumber);Jc(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){nt("RemoteStore","Failed to raise snapshot:",r),await $o(e,r)}}async function $o(e,t,n){if(!bs(t))throw t;e.M_.add(1),await Is(e),e.N_.set("Offline"),n||(n=()=>pg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{nt("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await ma(e)})}function bg(e,t){return t().catch(n=>$o(e,n,t))}async function pa(e){const t=pt(e),n=Gn(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;XA(t);)try{const i=await NA(t.localStore,r);if(i===null){t.v_.length===0&&n.n_();break}r=i.batchId,JA(t,i)}catch(i){await $o(t,i)}wg(t)&&Tg(t)}function XA(e){return br(e)&&e.v_.length<10}function JA(e,t){e.v_.push(t);const n=Gn(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function wg(e){return br(e)&&!Gn(e).Zo()&&e.v_.length>0}function Tg(e){Gn(e).start()}async function ZA(e){Gn(e).V_()}async function tI(e){const t=Gn(e);for(const n of e.v_)t.d_(n.mutations)}async function eI(e,t,n){const r=e.v_.shift(),i=Hc.from(r,t,n);await bg(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await pa(e)}async function nI(e,t){t&&Gn(e).E_&&await async function(r,i){if(function(a){return HT(a)&&a!==U.ABORTED}(i.code)){const s=r.v_.shift();Gn(r).t_(),await bg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await pa(r)}}(e,t),wg(e)&&Tg(e)}async function cd(e,t){const n=pt(e);n.asyncQueue.verifyOperationInProgress(),nt("RemoteStore","RemoteStore received new credentials");const r=br(n);n.M_.add(3),await Is(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await ma(n)}async function rI(e,t){const n=pt(e);t?(n.M_.delete(2),await ma(n)):t||(n.M_.add(2),await Is(n),n.N_.set("Unknown"))}function li(e){return e.B_||(e.B_=function(n,r,i){const s=pt(n);return s.f_(),new jA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:GA.bind(null,e),To:WA.bind(null,e),Ao:QA.bind(null,e),h_:YA.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.t_(),tu(e)?Zc(e):e.N_.set("Unknown")):(await e.B_.stop(),Eg(e))})),e.B_}function Gn(e){return e.k_||(e.k_=function(n,r,i){const s=pt(n);return s.f_(),new zA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:ZA.bind(null,e),Ao:nI.bind(null,e),R_:tI.bind(null,e),A_:eI.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.t_(),await pa(e)):(await e.k_.stop(),e.v_.length>0&&(nt("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
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
 */class eu{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,l=new eu(t,n,a,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nu(e,t){if(_n("AsyncQueue",`${t}: ${e}`),bs(e))return new rt(U.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class jr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||lt.comparator(n.key,r.key):(n,r)=>lt.comparator(n.key,r.key),this.keyedMap=ki(),this.sortedSet=new jt(this.comparator)}static emptySet(t){return new jr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof jr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ud{constructor(){this.q_=new jt(lt.comparator)}track(t){const n=t.doc.key,r=this.q_.get(n);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(n,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(n):t.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):ft():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ti{constructor(t,n,r,i,s,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new ti(t,n,jr.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&la(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class iI{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class sI{constructor(){this.queries=new ai(t=>qp(t),la),this.onlineState="Unknown",this.z_=new Set}}async function oI(e,t){const n=pt(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.W_()&&t.G_()&&(r=2):(s=new iI,r=t.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=nu(a,`Initialization of query '${kr(t.query)}' failed`);return void t.onError(l)}n.queries.set(i,s),s.U_.push(t),t.j_(n.onlineState),s.K_&&t.H_(s.K_)&&ru(n)}async function aI(e,t){const n=pt(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const a=s.U_.indexOf(t);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=t.G_()?0:1:!s.W_()&&t.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lI(e,t){const n=pt(e);let r=!1;for(const i of t){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&ru(n)}function cI(e,t,n){const r=pt(e),i=r.queries.get(t);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(t)}function ru(e){e.z_.forEach(t=>{t.next()})}var Yl,hd;(hd=Yl||(Yl={})).J_="default",hd.Cache="cache";class uI{constructor(t,n,r){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ti(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=ti.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Yl.Cache}}/**
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
 */class Ag{constructor(t){this.key=t}}class Ig{constructor(t){this.key=t}}class hI{constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Et(),this.mutatedKeys=Et(),this.Ia=Hp(t),this.Ta=new jr(this.Ia)}get Ea(){return this.la}da(t,n){const r=n?n.Aa:new ud,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,m)=>{const g=i.get(f),b=ca(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;g&&b?g.data.isEqual(b.data)?C!==k&&(r.track({type:3,doc:b}),N=!0):this.Ra(g,b)||(r.track({type:2,doc:b}),N=!0,(c&&this.Ia(b,c)>0||h&&this.Ia(b,h)<0)&&(l=!0)):!g&&b?(r.track({type:0,doc:b}),N=!0):g&&!b&&(r.track({type:1,doc:g}),N=!0,(c||h)&&(l=!0)),N&&(b?(a=a.add(b),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:s}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,m)=>function(b,C){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ft()}};return k(b)-k(C)}(f.type,m.type)||this.Ia(f.doc,m.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,h=c!==this.ha;return this.ha=c,a.length!==0||h?{snapshot:new ti(this.query,t.Ta,s,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ud,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Et(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return t.forEach(r=>{this.Pa.has(r)||n.push(new Ig(r))}),this.Pa.forEach(r=>{t.has(r)||n.push(new Ag(r))}),n}pa(t){this.la=t.hs,this.Pa=Et();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return ti.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class fI{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class dI{constructor(t){this.key=t,this.wa=!1}}class mI{constructor(t,n,r,i,s,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new ai(l=>qp(l),la),this.Da=new Map,this.Ca=new Set,this.va=new jt(lt.comparator),this.Fa=new Map,this.Ma=new Wc,this.xa={},this.Oa=new Map,this.Na=Zr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function pI(e,t,n=!0){const r=kg(e);let i;const s=r.ba.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Sg(r,t,n,!0),i}async function gI(e,t){const n=kg(e);await Sg(n,t,!0,!1)}async function Sg(e,t,n,r){const i=await OA(e.localStore,rn(t)),s=i.targetId,a=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await _I(e,t,s,a==="current",i.resumeToken)),e.isPrimaryClient&&n&&yg(e.remoteStore,i),l}async function _I(e,t,n,r,i){e.Ba=(m,g,b)=>async function(k,N,x,V){let F=N.view.da(x);F.Xi&&(F=await od(k.localStore,N.query,!1).then(({documents:T})=>N.view.da(T,F)));const z=V&&V.targetChanges.get(N.targetId),tt=V&&V.targetMismatches.get(N.targetId)!=null,W=N.view.applyChanges(F,k.isPrimaryClient,z,tt);return dd(k,N.targetId,W.fa),W.snapshot}(e,m,g,b);const s=await od(e.localStore,t,!0),a=new hI(t,s.hs),l=a.da(s.documents),c=As.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),h=a.applyChanges(l,e.isPrimaryClient,c);dd(e,n,h.fa);const f=new fI(t,n,a);return e.ba.set(t,f),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),h.snapshot}async function yI(e,t,n){const r=pt(e),i=r.ba.get(t),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!la(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ql(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xc(r.remoteStore,i.targetId),Xl(r,i.targetId)}).catch(Es)):(Xl(r,i.targetId),await Ql(r.localStore,i.targetId,!0))}async function vI(e,t){const n=pt(e),r=n.ba.get(t),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xc(n.remoteStore,r.targetId))}async function EI(e,t,n){const r=RI(e);try{const i=await function(a,l){const c=pt(a),h=ee.now(),f=l.reduce((b,C)=>b.add(C.key),Et());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let C=yn(),k=Et();return c.os.getEntries(b,f).next(N=>{C=N,C.forEach((x,V)=>{V.isValidDocument()||(k=k.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,C)).next(N=>{m=N;const x=[];for(const V of l){const F=$T(V,m.get(V.key).overlayedDocument);F!=null&&x.push(new Er(V.key,F,Op(F.value.mapValue),dn.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,x,l)}).next(N=>{g=N;const x=N.applyToLocalDocumentSet(m,k);return c.documentOverlayCache.saveOverlays(b,N.batchId,x)})}).then(()=>({batchId:g.batchId,changes:Gp(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new jt(Rt)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,i.batchId,n),await Ss(r,i.changes),await pa(r.remoteStore)}catch(i){const s=nu(i,"Failed to persist write");n.reject(s)}}async function Rg(e,t){const n=pt(e);try{const r=await VA(n.localStore,t);t.targetChanges.forEach((i,s)=>{const a=n.Fa.get(s);a&&(Nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?Nt(a.wa):i.removedDocuments.size>0&&(Nt(a.wa),a.wa=!1))}),await Ss(n,r,t)}catch(r){await Es(r)}}function fd(e,t,n){const r=pt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,a)=>{const l=a.view.j_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=pt(a);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const g of m.U_)g.j_(l)&&(h=!0)}),h&&ru(c)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bI(e,t,n){const r=pt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fa.get(t),s=i&&i.key;if(s){let a=new jt(lt.comparator);a=a.insert(s,ye.newNoDocument(s,mt.min()));const l=Et().add(s),c=new fa(mt.min(),new Map,new jt(Rt),a,l);await Rg(r,c),r.va=r.va.remove(s),r.Fa.delete(t),iu(r)}else await Ql(r.localStore,t,!1).then(()=>Xl(r,t,n)).catch(Es)}async function wI(e,t){const n=pt(e),r=t.batch.batchId;try{const i=await kA(n.localStore,t);Cg(n,r,null),Pg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ss(n,i)}catch(i){await Es(i)}}async function TI(e,t,n){const r=pt(e);try{const i=await function(a,l){const c=pt(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(Nt(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,t);Cg(r,t,n),Pg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ss(r,i)}catch(i){await Es(i)}}function Pg(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function Cg(e,t,n){const r=pt(e);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function Xl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(r=>{e.Ma.containsKey(r)||xg(e,r)})}function xg(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&(Xc(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),iu(e))}function dd(e,t,n){for(const r of n)r instanceof Ag?(e.Ma.addReference(r.key,t),AI(e,r)):r instanceof Ig?(nt("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||xg(e,r.key)):ft()}function AI(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(nt("SyncEngine","New document in limbo: "+n),e.Ca.add(r),iu(e))}function iu(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new lt(Lt.fromString(t)),r=e.Na.next();e.Fa.set(r,new dI(n)),e.va=e.va.insert(n,r),yg(e.remoteStore,new Nn(rn(jp(n.path)),r,"TargetPurposeLimboResolution",Uc.oe))}}async function Ss(e,t,n){const r=pt(e),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,t,n).then(h=>{if((h||n)&&r.isPrimaryClient){const f=h&&!h.fromCache;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){i.push(h);const f=Yc.Ki(c.targetId,h);s.push(f)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(c,h){const f=pt(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(h,g=>$.forEach(g.qi,b=>f.persistence.referenceDelegate.addReference(m,g.targetId,b)).next(()=>$.forEach(g.Qi,b=>f.persistence.referenceDelegate.removeReference(m,g.targetId,b)))))}catch(m){if(!bs(m))throw m;nt("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const b=f.ns.get(g),C=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(C);f.ns=f.ns.insert(g,k)}}}(r.localStore,s))}async function II(e,t){const n=pt(e);if(!n.currentUser.isEqual(t)){nt("SyncEngine","User change. New user:",t.toKey());const r=await mg(n.localStore,t);n.currentUser=t,function(s,a){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new rt(U.CANCELLED,a))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ss(n,r.us)}}function SI(e,t){const n=pt(e),r=n.Fa.get(t);if(r&&r.wa)return Et().add(r.key);{let i=Et();const s=n.Da.get(t);if(!s)return i;for(const a of s){const l=n.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function kg(e){const t=pt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Rg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=SI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=bI.bind(null,t),t.Sa.h_=lI.bind(null,t.eventManager),t.Sa.ka=cI.bind(null,t.eventManager),t}function RI(e){const t=pt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=TI.bind(null,t),t}class md{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=da(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return xA(this.persistence,new PA,t.initialUser,this.serializer)}createPersistence(t){return new IA(Qc.Hr,this.serializer)}createSharedClientState(t){return new LA}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PI{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=II.bind(null,this.syncEngine),await rI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new sI}()}createDatastore(t){const n=da(t.databaseInfo.databaseId),r=function(s){return new BA(s)}(t.databaseInfo);return function(s,a,l,c){return new qA(s,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,a,l){return new KA(r,i,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>fd(this.syncEngine,n,0),function(){return ld.D()?new ld:new FA}())}createSyncEngine(t,n){return function(i,s,a,l,c,h,f){const m=new mI(i,s,a,l,c,h);return f&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=pt(r);nt("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Is(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class CI{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):_n("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class xI{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=Vp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{nt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(nt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rt(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=nu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function il(e,t){e.asyncQueue.verifyOperationInProgress(),nt("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mg(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function pd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await VI(e);nt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>cd(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>cd(t.remoteStore,i)),e._onlineComponents=t}function kI(e){return e.name==="FirebaseError"?e.code===U.FAILED_PRECONDITION||e.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function VI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){nt("FirestoreClient","Using user provided OfflineComponentProvider");try{await il(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!kI(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await il(e,new md)}}else nt("FirestoreClient","Using default OfflineComponentProvider"),await il(e,new md);return e._offlineComponents}async function Vg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(nt("FirestoreClient","Using user provided OnlineComponentProvider"),await pd(e,e._uninitializedComponentsProvider._online)):(nt("FirestoreClient","Using default OnlineComponentProvider"),await pd(e,new PI))),e._onlineComponents}function DI(e){return Vg(e).then(t=>t.syncEngine)}async function NI(e){const t=await Vg(e),n=t.eventManager;return n.onListen=pI.bind(null,t.syncEngine),n.onUnlisten=yI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=gI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=vI.bind(null,t.syncEngine),n}function OI(e,t,n={}){const r=new Un;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const f=new CI({next:g=>{a.enqueueAndForget(()=>aI(s,m)),g.fromCache&&c.source==="server"?h.reject(new rt(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new uI(l,f,{includeMetadataChanges:!0,ra:!0});return oI(s,m)}(await NI(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function Dg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */function Ng(e,t,n){if(!n)throw new rt(U.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function MI(e,t,n,r){if(t===!0&&r===!0)throw new rt(U.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function _d(e){if(!lt.isDocumentKey(e))throw new rt(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yd(e){if(lt.isDocumentKey(e))throw new rt(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ga(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ft()}function Bo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rt(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ga(e);throw new rt(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class vd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new rt(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}MI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new rt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new rt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new rt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _a{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new rt(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new rt(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vd(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yw;switch(r.type){case"firstParty":return new tT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new rt(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gd.get(n);r&&(nt("ComponentProvider","Removing Datastore"),gd.delete(n),r.terminate())}(this),Promise.resolve()}}function LI(e,t,n,r={}){var i;const s=(e=Bo(e,_a))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=_e.MOCK_USER;else{l=x2(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new rt(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _e(h)}e._authCredentials=new Xw(new kp(l,c))}}/**
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
 */class ci{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ci(this.firestore,t,this._query)}}class Ue{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ue(this.firestore,t,this._key)}}class $n extends ci{constructor(t,n,r){super(t,n,jp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ue(this.firestore,null,new lt(t))}withConverter(t){return new $n(this.firestore,t,this._path)}}function Rs(e,t,...n){if(e=Wr(e),Ng("collection","path",t),e instanceof _a){const r=Lt.fromString(t,...n);return yd(r),new $n(e,null,r)}{if(!(e instanceof Ue||e instanceof $n))throw new rt(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Lt.fromString(t,...n));return yd(r),new $n(e.firestore,null,r)}}function FI(e,t,...n){if(e=Wr(e),arguments.length===1&&(t=Vp.newId()),Ng("doc","path",t),e instanceof _a){const r=Lt.fromString(t,...n);return _d(r),new Ue(e,null,new lt(r))}{if(!(e instanceof Ue||e instanceof $n))throw new rt(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Lt.fromString(t,...n));return _d(r),new Ue(e.firestore,e instanceof $n?e.converter:null,new lt(r))}}/**
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
 */class UI{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new gg(this,"async_queue_retry"),this.hu=()=>{const n=rl();n&&nt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=rl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=rl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Un;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!bs(t))throw t;nt("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw _n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const i=eu.createAndSchedule(this,t,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ft()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class su extends _a{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new UI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mg(this),this._firestoreClient.terminate()}}function $I(e,t){const n=typeof e=="object"?e:Fw(),r=typeof e=="string"?e:"(default)",i=Nw(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=P2("firestore");s&&LI(i,...s)}return i}function Og(e){return e._firestoreClient||Mg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Mg(e){var t,n,r;const i=e._freezeSettings(),s=function(l,c,h,f){return new dT(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Dg(f.experimentalLongPollingOptions),f.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new xI(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ei{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ei(Ee.fromBase64String(t))}catch(n){throw new rt(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ei(Ee.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ou{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Lg{constructor(t){this._methodName=t}}/**
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
 */const BI=/^__.*__$/;class jI{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Er(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ts(t,this.data,n,this.fieldTransforms)}}function Fg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ft()}}class lu{constructor(t,n,r,i,s,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new lu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return jo(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Fg(this.fu)&&BI.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class zI{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||da(t)}Fu(t,n,r,i=!1){return new lu({fu:t,methodName:n,vu:r,path:fe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ug(e){const t=e._freezeSettings(),n=da(e._databaseId);return new zI(e._databaseId,!!t.ignoreUndefinedProperties,n)}function qI(e,t,n,r,i,s={}){const a=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);jg("Data must be an object, but it was:",a,r);const l=$g(r,a);let c,h;if(s.merge)c=new He(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=KI(t,m,n);if(!a.contains(g))throw new rt(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);WI(f,g)||f.push(g)}c=new He(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new jI(new Le(l),c,h)}function HI(e,t,n,r=!1){return cu(n,e.Fu(r?4:3,t))}function cu(e,t){if(Bg(e=Wr(e)))return jg("Unsupported field value:",t,e),$g(e,t);if(e instanceof Lg)return function(r,i){if(!Fg(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=cu(l,i.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Wr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ee.fromDate(r);return{timestampValue:Uo(i.serializer,s)}}if(r instanceof ee){const s=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(i.serializer,s)}}if(r instanceof au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ei)return{bytesValue:ag(i.serializer,r._byteString)};if(r instanceof Ue){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${ga(r)}`)}(e,t)}function $g(e,t){const n={};return Dp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oi(e,(r,i)=>{const s=cu(i,t.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Bg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ee||e instanceof au||e instanceof ei||e instanceof Ue||e instanceof Lg)}function jg(e,t,n){if(!Bg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ga(n);throw r==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function KI(e,t,n){if((t=Wr(t))instanceof ou)return t._internalPath;if(typeof t=="string")return zg(e,t);throw jo("Field path arguments must be of type string or ",e,!1,void 0,n)}const GI=new RegExp("[~\\*/\\[\\]]");function zg(e,t,n){if(t.search(GI)>=0)throw jo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ou(...t.split("."))._internalPath}catch{throw jo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jo(e,t,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new rt(U.INVALID_ARGUMENT,l+e+c)}function WI(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class qg{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new QI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(uu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QI extends qg{data(){return super.data()}}function uu(e,t){return typeof t=="string"?zg(e,t):t instanceof ou?t._internalPath:t._delegate._internalPath}/**
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
 */function YI(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new rt(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hu{}class XI extends hu{}function Hg(e,t,...n){let r=[];t instanceof hu&&r.push(t),r=r.concat(n),function(s){const a=s.filter(c=>c instanceof fu).length,l=s.filter(c=>c instanceof ya).length;if(a>1||a>0&&l>0)throw new rt(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class ya extends XI{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new ya(t,n,r)}_apply(t){const n=this._parse(t);return Gg(t._query,n),new ci(t.firestore,t.converter,zl(t._query,n))}_parse(t){const n=Ug(t.firestore);return function(s,a,l,c,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new rt(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){bd(m,f);const b=[];for(const C of m)b.push(Ed(c,s,C));g={arrayValue:{values:b}}}else g=Ed(c,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||bd(m,f),g=HI(l,a,m,f==="in"||f==="not-in");return Xt.create(h,f,g)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Kg(e,t,n){const r=t,i=uu("where",e);return ya._create(i,r,n)}class fu extends hu{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new fu(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ye.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)Gg(a,c),a=zl(a,c)}(t._query,n),new ci(t.firestore,t.converter,zl(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ed(e,t,n){if(typeof(n=Wr(n))=="string"){if(n==="")throw new rt(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zp(t)&&n.indexOf("/")!==-1)throw new rt(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Lt.fromString(n));if(!lt.isDocumentKey(r))throw new rt(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zf(e,new lt(r))}if(n instanceof Ue)return zf(e,n._key);throw new rt(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ga(n)}.`)}function bd(e,t){if(!Array.isArray(e)||e.length===0)throw new rt(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Gg(e,t){const n=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new rt(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new rt(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class JI{convertValue(t,n="none"){switch(_r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(gr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw ft()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return oi(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new au(Qt(t.latitude),Qt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Bc(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(us(t));default:return null}}convertTimestamp(t){const n=Kn(t);return new ee(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Lt.fromString(t);Nt(dg(r));const i=new hs(r.get(1),r.get(3)),s=new lt(r.popFirst(5));return i.isEqual(n)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ZI(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
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
 */class lo{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class t4 extends qg{constructor(t,n,r,i,s,a){super(t,n,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(uu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eo extends t4{data(t={}){return super.data(t)}}class e4{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Eo(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new rt(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Eo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Eo(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:n4(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function n4(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ft()}}class r4 extends JI{constructor(t){super(),this.firestore=t}convertBytes(t){return new ei(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function du(e){e=Bo(e,ci);const t=Bo(e.firestore,su),n=Og(t),r=new r4(t);return YI(e._query),OI(n,e._query).then(i=>new e4(t,r,e,i))}function Wg(e,t){const n=Bo(e.firestore,su),r=FI(e),i=ZI(e.converter,t);return i4(n,[qI(Ug(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function i4(e,t){return function(r,i){const s=new Un;return r.asyncQueue.enqueueAndForget(async()=>EI(await DI(r),i,s)),s.promise}(Og(e),t)}(function(t,n=!0){(function(i){si=i})(Lw),Do(new as("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new su(new Jw(r.getProvider("auth-internal")),new nT(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new rt(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Br(Uf,"4.6.3",t),Br(Uf,"4.6.3","esm2017")})();const s4={apiKey:"AIzaSyBDvuCqnWr0d3QX7bOmkBlM5dIFmmAAL6c",authDomain:"song-lyrics-29f0c.firebaseapp.com",projectId:"song-lyrics-29f0c",storageBucket:"song-lyrics-29f0c.appspot.com",messagingSenderId:"581822410871",appId:"1:581822410871:web:9262efbfcccbc92e5bd672",measurementId:"G-WZKND2ED1H"},o4=bp(s4),Ps=$I(o4);console.log("Firebase initialized");async function z4(e){try{return{id:(await Wg(Rs(Ps,"lyrics"),e)).id}}catch(t){throw console.error("Error creating lyrics:",t),t}}async function a4(e){try{const t=Hg(Rs(Ps,"lyrics"),Kg("youtubeId","==",e)),n=await du(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(t){throw console.error("Error getting lyrics:",t),t}}async function q4(e){try{return{id:(await Wg(Rs(Ps,"songs"),e)).id}}catch(t){throw console.error("Error creating song:",t),t}}async function l4(){try{const e=await du(Rs(Ps,"songs")),t=[];return e.forEach(n=>{const r={id:n.id,...n.data()};t.push(r)}),t}catch(e){throw console.error("Error getting songs:",e),e}}async function c4(e){try{const t=Hg(Rs(Ps,"songs"),Kg("youtubeId","==",e)),n=await du(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r.length===0?null:r[0]}catch(t){throw console.error("Error getting lyrics:",t),t}}class u4{constructor(t){Pr(this,"_findIndex",t=>{const n=this.startTimes.findIndex(r=>r>t);return n>=0?n-1:this.linesCount-1});Pr(this,"getPrevIndex",t=>{const n=this._findIndex(t);return n>=0?n-1:null});Pr(this,"getCurrIndex",t=>{const n=this._findIndex(t);return n>=0?n:null});Pr(this,"getNextIndex",t=>{const n=this._findIndex(t);return n<this.linesCount-1?n+1:null});Pr(this,"getTimestamp",t=>this.startTimes[t]);if(t.sort((r,i)=>r.language.localeCompare(i.language)),this.lyrics=[],this.supportedLangs=[],t.forEach(r=>{this.lyrics.push(r.lines),this.supportedLangs.push(r.language)}),this.supportedLangs.includes("jp_yomi")){const r=this.supportedLangs.indexOf("jp");r>=0&&(this.lyrics.splice(r,1),this.supportedLangs.splice(r,1))}const n=t.find(r=>r.language==="jp_yomi"||r.language==="jp");this.linesCount=n.lines.length,delete n.lines,Object.assign(this,n)}}const h4={class:"page single"},f4={class:"single-title animate__animated animate__flipInX"},d4={class:"single-subtitle"},m4={key:1,class:"single-title animate__animated animate__flipInX"},p4={class:"content",id:"content"},g4={class:"video-container"},_4={key:0,id:"lrc"},y4=["onClick","data-time"],v4=["innerHTML","data-lang"],E4={key:1},b4={id:"control-buttons"},w4={__name:"SongDetail",props:{youtubeId:{type:String,required:!0}},setup(e){const t=e,n=Gt(null),r=Gt(null),i=Gt(null),s=Gt("Loading..."),a=Gt(!1),l=Gt(null),c=Gt(null),h=Gt(!1),{instance:f,togglePlay:m,onReady:g,onStateChange:b}=yE(t.youtubeId,c,{}),C=Gt(0),k=Gt(null);ys(async()=>{r.value=await c4(t.youtubeId);const z=await a4(t.youtubeId);console.log(z),i.value=new u4(z)}),km(()=>{clearInterval(n.value)}),g(z=>{n.value=setInterval(()=>{if(i.value===null){console.log("Lyrics not ready");return}C.value=f==null?void 0:f.value.getCurrentTime(),k.value=i.value.getCurrIndex(C.value),a.value&&k.value!==l.value&&N(i.value.getTimestamp(l.value))},50),console.log("Player is ready",z)}),b(z=>{h.value=z.data!==Vc.PAUSED});const N=z=>{f==null||f.value.seekTo(z),f==null||f.value.playVideo()},x=z=>{N(z),a.value&&(l.value=i.value.getCurrIndex(z))},V=()=>{a.value=!a.value,l.value=k.value},F=z=>{const tt=z==="prev"?k.value-1:k.value+1;N(i.value.getTimestamp(tt)),a.value&&(l.value=tt)};return(z,tt)=>{var T;const W=qn("font-awesome-icon");return Wt(),Jt(Yt,null,[H("article",h4,[r.value?(Wt(),Jt(Yt,{key:0},[H("h1",f4,Ae(r.value.title),1),H("h2",d4,Ae(((T=r.value)==null?void 0:T.translateTitle)||"尚無歌名翻譯"),1),vt(dp,{song:r.value},null,8,["song"])],64)):(Wt(),Jt("h1",m4,"Loading...")),H("div",p4,[H("div",g4,[H("div",{ref_key:"playerRef",ref:c},null,512)]),vt(y2,{title:"譯者的話"},{default:Dn(()=>{var y;return[te(Ae(((y=r.value)==null?void 0:y.translatorWords)||"目前沒有東西"),1)]}),_:1}),i.value?(Wt(),Jt("div",_4,[(Wt(!0),Jt(Yt,null,rs(i.value.startTimes,(y,v)=>(Wt(),Jt("div",{class:"lrc__line",onClick:A=>x(y),"data-time":y,key:v},[(Wt(!0),Jt(Yt,null,rs(i.value.supportedLangs,(A,I)=>(Wt(),Jt("div",{innerHTML:i.value.lyrics[I][v],"data-lang":A,class:nn({active:v===k.value}),key:I},null,10,v4))),128))],8,y4))),128))])):(Wt(),Jt("div",E4,Ae(s.value),1))])]),H("div",b4,[H("a",{href:"#",class:"fixed-button",title:"Previous Line",onClick:tt[0]||(tt[0]=Mr(y=>F("prev"),["prevent"]))},[vt(W,{icon:["fas","backward"],"fixed-width":""})]),H("a",{href:"#",class:"fixed-button",title:"Toggle Player State",onClick:tt[1]||(tt[1]=Mr((...y)=>Ie(m)&&Ie(m)(...y),["prevent"]))},[vt(W,{icon:["fas",h.value?"pause":"play"],"fixed-width":""},null,8,["icon"])]),H("a",{href:"#",class:"fixed-button",title:"Next Line",onClick:tt[2]||(tt[2]=Mr(y=>F("next"),["prevent"]))},[vt(W,{icon:["fas","forward"],"fixed-width":""})]),H("a",{href:"#",class:nn(["fixed-button",a.value?"active":""]),id:"repeat",title:"Repeat Current Line",onClick:Mr(V,["prevent"])},[vt(W,{icon:["fas","undo-alt"],"fixed-width":""})],2)])],64)}}},T4={class:"page home",posts:""},A4=H("div",{class:"home-profile"},[H("h1",{class:"home-title"},"所有歌曲"),H("h2",{class:"home-subtitle"},"沉浸在Aimer音樂的世界")],-1),I4={class:"featured-image-preview"},S4=["src"],R4={class:"single-title"},P4=H("div",{class:"content"}," This post explains how you can create custom SVG diagrams in DoIt using GoAT or Mermaid. ",-1),C4={class:"post-footer"},x4={class:"post-tags"},k4=H("a",{href:"/tags/diagram/"},"diagram",-1),V4=H("a",{href:"/tags/markdown/"},"Markdown",-1),D4={__name:"SongList",setup(e){const t=ri([]);return ys(async()=>{const n=await l4();t.push(...n)}),(n,r)=>{const i=qn("router-link"),s=qn("font-awesome-icon");return Wt(),Jt("div",T4,[A4,(Wt(!0),Jt(Yt,null,rs(t,a=>(Wt(),Jt("article",{class:"single summary",key:a.id},[vt(i,{to:{name:"SongDetail",params:{youtubeId:a.youtubeId}}},{default:Dn(()=>[H("div",I4,[H("img",{src:`https://i.ytimg.com/vi_webp/${a.youtubeId}/sddefault.webp`,loading:"lazy"},null,8,S4)]),H("h2",R4,Ae(a.title),1)]),_:2},1032,["to"]),vt(dp,{song:a},null,8,["song"]),P4,H("div",C4,[vt(i,{to:{name:"SongDetail",params:{youtubeId:a.youtubeId}}},{default:Dn(()=>[te(" Read more... ")]),_:2},1032,["to"]),H("div",x4,[vt(s,{icon:["fas","tags"],"fixed-width":""}),te(" "),k4,te(", "),V4])])]))),128))])}}},N4=[{path:"/",name:"SongList",component:D4},{path:"/song/:youtubeId",name:"SongDetail",component:w4,props:!0},{path:"/edit",name:"EditLyrics",component:()=>l2(()=>import("./EditLyrics-B0JHo6cJ.js"),__vite__mapDeps([0,1]))}],O4=Db({history:lb("/"),routes:N4,scrollBehavior(){return{top:0}}});Jy.add(wv,nv,vv,_v,ov,Av,Iv,cv,gv,iv,dv,ev,bv,rv,lv,fv,Rv,Cv,Ev,yv,uv,mv);const va=X0(s2);va.use(O4);va.use(_E());va.component("font-awesome-icon",hE);va.mount("#app");export{Yt as F,Jt as a,H as b,ue as c,rs as d,F4 as e,q4 as f,z4 as g,FI as h,Ps as i,Wt as o,L4 as p,Gt as r,Ae as t,Ie as u,U4 as v,Pm as w};

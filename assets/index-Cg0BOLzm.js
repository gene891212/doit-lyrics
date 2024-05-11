const __vite__fileDeps=["assets/EditLyrics-CEHnH0hG.js","assets/EditLyrics-Bwkvqd0A.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ey=Object.defineProperty;var ny=(e,t,n)=>t in e?ey(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var vr=(e,t,n)=>(ny(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oh(Object(n),!0).forEach(function(r){Ft(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function po(e){"@babel/helpers - typeof";return po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},po(e)}function ry(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sy(e,t,n){return t&&iy(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ec(e,t){return ay(e)||cy(e,t)||Md(e,t)||hy()}function hs(e){return oy(e)||ly(e)||Md(e)||uy()}function oy(e){if(Array.isArray(e))return pl(e)}function ay(e){if(Array.isArray(e))return e}function ly(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cy(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Md(e,t){if(e){if(typeof e=="string")return pl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pl(e,t)}}function pl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function uy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ah=function(){},wc={},Ld={},Fd=null,Ud={mark:ah,measure:ah};try{typeof window<"u"&&(wc=window),typeof document<"u"&&(Ld=document),typeof MutationObserver<"u"&&(Fd=MutationObserver),typeof performance<"u"&&(Ud=performance)}catch{}var fy=wc.navigator||{},lh=fy.userAgent,ch=lh===void 0?"":lh,Vn=wc,It=Ld,uh=Fd,Ds=Ud;Vn.document;var pn=!!It.documentElement&&!!It.head&&typeof It.addEventListener=="function"&&typeof It.createElement=="function",$d=~ch.indexOf("MSIE")||~ch.indexOf("Trident/"),Os,Ns,Ms,Ls,Fs,cn="___FONT_AWESOME___",gl=16,Bd="fa",jd="svg-inline--fa",ir="data-fa-i2svg",_l="data-fa-pseudo-element",dy="data-fa-pseudo-element-pending",bc="data-prefix",Tc="data-icon",hh="fontawesome-i2svg",my="async",py=["HTML","HEAD","STYLE","SCRIPT"],zd=function(){try{return!0}catch{return!1}}(),wt="classic",kt="sharp",Ic=[wt,kt];function fs(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[wt]}})}var Ni=fs((Os={},Ft(Os,wt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ft(Os,kt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Os)),Mi=fs((Ns={},Ft(Ns,wt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ft(Ns,kt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ns)),Li=fs((Ms={},Ft(Ms,wt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ft(Ms,kt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ms)),gy=fs((Ls={},Ft(Ls,wt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ft(Ls,kt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ls)),_y=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qd="fa-layers-text",yy=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vy=fs((Fs={},Ft(Fs,wt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ft(Fs,kt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Fs)),Hd=[1,2,3,4,5,6,7,8,9,10],Ey=Hd.concat([11,12,13,14,15,16,17,18,19,20]),wy=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fi=new Set;Object.keys(Mi[wt]).map(Fi.add.bind(Fi));Object.keys(Mi[kt]).map(Fi.add.bind(Fi));var by=[].concat(Ic,hs(Fi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gn.GROUP,Gn.SWAP_OPACITY,Gn.PRIMARY,Gn.SECONDARY]).concat(Hd.map(function(e){return"".concat(e,"x")})).concat(Ey.map(function(e){return"w-".concat(e)})),Ei=Vn.FontAwesomeConfig||{};function Ty(e){var t=It.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Iy(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(It&&typeof It.querySelector=="function"){var Ay=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ay.forEach(function(e){var t=Ec(e,2),n=t[0],r=t[1],i=Iy(Ty(n));i!=null&&(Ei[r]=i)})}var Kd={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bd,replacementClass:jd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ei.familyPrefix&&(Ei.cssPrefix=Ei.familyPrefix);var Fr=L(L({},Kd),Ei);Fr.autoReplaceSvg||(Fr.observeMutations=!1);var z={};Object.keys(Kd).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){Fr[e]=n,wi.forEach(function(r){return r(z)})},get:function(){return Fr[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){Fr.cssPrefix=t,wi.forEach(function(n){return n(z)})},get:function(){return Fr.cssPrefix}});Vn.FontAwesomeConfig=z;var wi=[];function Ry(e){return wi.push(e),function(){wi.splice(wi.indexOf(e),1)}}var yn=gl,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sy(e){if(!(!e||!pn)){var t=It.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=It.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return It.head.insertBefore(t,r),e}}var Py="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ui(){for(var e=12,t="";e-- >0;)t+=Py[Math.random()*62|0];return t}function Xr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ac(e){return e.classList?Xr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Gd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cy(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Gd(e[n]),'" ')},"").trim()}function jo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Rc(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function xy(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function ky(e){var t=e.transform,n=e.width,r=n===void 0?gl:n,i=e.height,s=i===void 0?gl:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&$d?l+="translate(".concat(t.x/yn-r/2,"em, ").concat(t.y/yn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/yn,"em), calc(-50% + ").concat(t.y/yn,"em)) "):l+="translate(".concat(t.x/yn,"em, ").concat(t.y/yn,"em) "),l+="scale(".concat(t.size/yn*(t.flipX?-1:1),", ").concat(t.size/yn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Vy=`:root, :host {
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
}`;function Wd(){var e=Bd,t=jd,n=z.cssPrefix,r=z.replacementClass,i=Vy;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var fh=!1;function Ma(){z.autoAddCss&&!fh&&(Sy(Wd()),fh=!0)}var Dy={mixout:function(){return{dom:{css:Wd,insertCss:Ma}}},hooks:function(){return{beforeDOMElementCreation:function(){Ma()},beforeI2svg:function(){Ma()}}}},un=Vn||{};un[cn]||(un[cn]={});un[cn].styles||(un[cn].styles={});un[cn].hooks||(un[cn].hooks={});un[cn].shims||(un[cn].shims=[]);var xe=un[cn],Qd=[],Oy=function e(){It.removeEventListener("DOMContentLoaded",e),go=1,Qd.map(function(t){return t()})},go=!1;pn&&(go=(It.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(It.readyState),go||It.addEventListener("DOMContentLoaded",Oy));function Ny(e){pn&&(go?setTimeout(e,0):Qd.push(e))}function ds(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Gd(e):"<".concat(t," ").concat(Cy(r),">").concat(s.map(ds).join(""),"</").concat(t,">")}function dh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var La=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=n,l,c,u;for(r===void 0?(l=1,u=t[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,t[c],c,t);return u};function My(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function yl(e){var t=My(e);return t.length===1?t[0].toString(16):null}function Ly(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function mh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function vl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=mh(t);typeof xe.hooks.addPack=="function"&&!i?xe.hooks.addPack(e,mh(t)):xe.styles[e]=L(L({},xe.styles[e]||{}),s),e==="fas"&&vl("fa",t)}var Us,$s,Bs,Rr=xe.styles,Fy=xe.shims,Uy=(Us={},Ft(Us,wt,Object.values(Li[wt])),Ft(Us,kt,Object.values(Li[kt])),Us),Sc=null,Yd={},Xd={},Jd={},Zd={},tm={},$y=($s={},Ft($s,wt,Object.keys(Ni[wt])),Ft($s,kt,Object.keys(Ni[kt])),$s);function By(e){return~by.indexOf(e)}function jy(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!By(i)?i:null}var em=function(){var t=function(s){return La(Rr,function(o,a,l){return o[l]=La(a,s,{}),o},{})};Yd=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Xd=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),tm=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Rr||z.autoFetchSvg,r=La(Fy,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Jd=r.names,Zd=r.unicodes,Sc=zo(z.styleDefault,{family:z.familyDefault})};Ry(function(e){Sc=zo(e.styleDefault,{family:z.familyDefault})});em();function Pc(e,t){return(Yd[e]||{})[t]}function zy(e,t){return(Xd[e]||{})[t]}function Wn(e,t){return(tm[e]||{})[t]}function nm(e){return Jd[e]||{prefix:null,iconName:null}}function qy(e){var t=Zd[e],n=Pc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dn(){return Sc}var Cc=function(){return{prefix:null,iconName:null,rest:[]}};function zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?wt:n,i=Ni[r][e],s=Mi[r][e]||Mi[r][i],o=e in xe.styles?e:null;return s||o||null}var ph=(Bs={},Ft(Bs,wt,Object.keys(Li[wt])),Ft(Bs,kt,Object.keys(Li[kt])),Bs);function qo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Ft(t,wt,"".concat(z.cssPrefix,"-").concat(wt)),Ft(t,kt,"".concat(z.cssPrefix,"-").concat(kt)),t),o=null,a=wt;(e.includes(s[wt])||e.some(function(c){return ph[wt].includes(c)}))&&(a=wt),(e.includes(s[kt])||e.some(function(c){return ph[kt].includes(c)}))&&(a=kt);var l=e.reduce(function(c,u){var h=jy(z.cssPrefix,u);if(Rr[u]?(u=Uy[a].includes(u)?gy[a][u]:u,o=u,c.prefix=u):$y[a].indexOf(u)>-1?(o=u,c.prefix=zo(u,{family:a})):h?c.iconName=h:u!==z.replacementClass&&u!==s[wt]&&u!==s[kt]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var f=o==="fa"?nm(c.iconName):{},m=Wn(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||m||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Rr.far&&Rr.fas&&!z.autoFetchSvg&&(c.prefix="fas")}return c},Cc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===kt&&(Rr.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=Wn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Dn()||"fas"),l}var Hy=function(){function e(){ry(this,e),this.definitions={}}return sy(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),vl(a,o[a]);var l=Li[wt][a];l&&vl(l,o[a]),em()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),e}(),gh=[],Sr={},xr={},Ky=Object.keys(xr);function Gy(e,t){var n=t.mixoutsTo;return gh=e,Sr={},Object.keys(xr).forEach(function(r){Ky.indexOf(r)===-1&&delete xr[r]}),gh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),po(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Sr[o]||(Sr[o]=[]),Sr[o].push(s[o])})}r.provides&&r.provides(xr)}),n}function El(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Sr[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function sr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Sr[e]||[];i.forEach(function(s){s.apply(null,n)})}function hn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xr[e]?xr[e].apply(null,t):void 0}function wl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Dn();if(t)return t=Wn(n,t)||t,dh(rm.definitions,n,t)||dh(xe.styles,n,t)}var rm=new Hy,Wy=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,sr("noAuto")},Qy={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pn?(sr("beforeI2svg",t),hn("pseudoElements2svg",t),hn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Ny(function(){Xy({autoReplaceSvgRoot:n}),sr("watch",t)})}},Yy={icon:function(t){if(t===null)return null;if(po(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Wn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zo(t[0]);return{prefix:r,iconName:Wn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(_y))){var i=qo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Dn(),iconName:Wn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Dn();return{prefix:s,iconName:Wn(s,t)||t}}}},be={noAuto:Wy,config:z,dom:Qy,parse:Yy,library:rm,findIconDefinition:wl,toHtml:ds},Xy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?It:n;(Object.keys(xe.styles).length>0||z.autoFetchSvg)&&pn&&z.autoReplaceSvg&&be.dom.i2svg({node:r})};function Ho(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ds(r)})}}),Object.defineProperty(e,"node",{get:function(){if(pn){var r=It.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Jy(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Rc(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=jo(L(L({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Zy(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function xc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,h=e.extra,f=e.watchable,m=f===void 0?!1:f,E=r.found?r:n,v=E.width,I=E.height,_=i==="fak",y=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(St){return h.classes.indexOf(St)===-1}).filter(function(St){return St!==""||!!St}).concat(h.classes).join(" "),P={children:[],attributes:L(L({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(I)})},k=_&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/I*16*.0625,"em")}:{};m&&(P.attributes[ir]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Ui())},children:[l]}),delete P.attributes.title);var q=L(L({},P),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:L(L({},k),h.styles)}),F=r.found&&n.found?hn("generateAbstractMask",q)||{children:[],attributes:{}}:hn("generateAbstractIcon",q)||{children:[],attributes:{}},rt=F.children,xt=F.attributes;return q.children=rt,q.attributes=xt,a?Zy(q):Jy(q)}function _h(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,c=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[ir]="");var u=L({},o.styles);Rc(i)&&(u.transform=ky({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=jo(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function tv(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=jo(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fa=xe.styles;function bl(e){var t=e[0],n=e[1],r=e.slice(4),i=Ec(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Gn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Gn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Gn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var ev={found:!1,width:512,height:512};function nv(e,t){!zd&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Tl(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=Dn()),new Promise(function(r,i){if(hn("missingIconAbstract"),n==="fa"){var s=nm(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Fa[t]&&Fa[t][e]){var o=Fa[t][e];return r(bl(o))}nv(e,t),r(L(L({},ev),{},{icon:z.showMissingIcons&&e?hn("missingIconAbstract")||{}:{}}))})}var yh=function(){},Il=z.measurePerformance&&Ds&&Ds.mark&&Ds.measure?Ds:{mark:yh,measure:yh},mi='FA "6.5.2"',rv=function(t){return Il.mark("".concat(mi," ").concat(t," begins")),function(){return im(t)}},im=function(t){Il.mark("".concat(mi," ").concat(t," ends")),Il.measure("".concat(mi," ").concat(t),"".concat(mi," ").concat(t," begins"),"".concat(mi," ").concat(t," ends"))},kc={begin:rv,end:im},ro=function(){};function vh(e){var t=e.getAttribute?e.getAttribute(ir):null;return typeof t=="string"}function iv(e){var t=e.getAttribute?e.getAttribute(bc):null,n=e.getAttribute?e.getAttribute(Tc):null;return t&&n}function sv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function ov(){if(z.autoReplaceSvg===!0)return io.replace;var e=io[z.autoReplaceSvg];return e||io.replace}function av(e){return It.createElementNS("http://www.w3.org/2000/svg",e)}function lv(e){return It.createElement(e)}function sm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?av:lv:n;if(typeof e=="string")return It.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(sm(o,{ceFn:r}))}),i}function cv(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var io={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(sm(i),n)}),n.getAttribute(ir)===null&&z.keepOriginalSource){var r=It.createComment(cv(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ac(n).indexOf(z.replacementClass))return io.replace(t);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ds(a)}).join(`
`);n.setAttribute(ir,""),n.innerHTML=o}};function Eh(e){e()}function om(e,t){var n=typeof t=="function"?t:ro;if(e.length===0)n();else{var r=Eh;z.mutateApproach===my&&(r=Vn.requestAnimationFrame||Eh),r(function(){var i=ov(),s=kc.begin("mutate");e.map(i),s(),n()})}}var Vc=!1;function am(){Vc=!0}function Al(){Vc=!1}var _o=null;function wh(e){if(uh&&z.observeMutations){var t=e.treeCallback,n=t===void 0?ro:t,r=e.nodeCallback,i=r===void 0?ro:r,s=e.pseudoElementsCallback,o=s===void 0?ro:s,a=e.observeMutationsRoot,l=a===void 0?It:a;_o=new uh(function(c){if(!Vc){var u=Dn();Xr(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!vh(h.addedNodes[0])&&(z.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&z.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&vh(h.target)&&~wy.indexOf(h.attributeName))if(h.attributeName==="class"&&iv(h.target)){var f=qo(Ac(h.target)),m=f.prefix,E=f.iconName;h.target.setAttribute(bc,m||u),E&&h.target.setAttribute(Tc,E)}else sv(h.target)&&i(h.target)})}}),pn&&_o.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uv(){_o&&_o.disconnect()}function hv(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function fv(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=qo(Ac(e));return i.prefix||(i.prefix=Dn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=zy(i.prefix,e.innerText)||Pc(i.prefix,yl(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function dv(e){var t=Xr(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Ui()):(t["aria-hidden"]="true",t.focusable="false")),t}function mv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fv(e),r=n.iconName,i=n.prefix,s=n.rest,o=dv(e),a=El("parseNodeAttributes",{},e),l=t.styleParser?hv(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var pv=xe.styles;function lm(e){var t=z.autoReplaceSvg==="nest"?bh(e,{styleParser:!1}):bh(e);return~t.extra.classes.indexOf(qd)?hn("generateLayersText",e,t):hn("generateSvgReplacementMutation",e,t)}var On=new Set;Ic.map(function(e){On.add("fa-".concat(e))});Object.keys(Ni[wt]).map(On.add.bind(On));Object.keys(Ni[kt]).map(On.add.bind(On));On=hs(On);function Th(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pn)return Promise.resolve();var n=It.documentElement.classList,r=function(h){return n.add("".concat(hh,"-").concat(h))},i=function(h){return n.remove("".concat(hh,"-").concat(h))},s=z.autoFetchSvg?On:Ic.map(function(u){return"fa-".concat(u)}).concat(Object.keys(pv));s.includes("fa")||s.push("fa");var o=[".".concat(qd,":not([").concat(ir,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ir,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Xr(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=kc.begin("onTree"),c=a.reduce(function(u,h){try{var f=lm(h);f&&u.push(f)}catch(m){zd||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){om(f,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(f){l(),h(f)})})}function gv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;lm(e).then(function(n){n&&om([n],t)})}function _v(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:wl(i||{})),e(r,L(L({},n),{},{mask:i}))}}var yv=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ke:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,m=n.titleId,E=m===void 0?null:m,v=n.classes,I=v===void 0?[]:v,_=n.attributes,y=_===void 0?{}:_,P=n.styles,k=P===void 0?{}:P;if(t){var q=t.prefix,F=t.iconName,rt=t.icon;return Ho(L({type:"icon"},t),function(){return sr("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(f?y["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(E||Ui()):(y["aria-hidden"]="true",y.focusable="false")),xc({icons:{main:bl(rt),mask:l?bl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:F,transform:L(L({},Ke),i),symbol:o,title:f,maskId:u,titleId:E,extra:{attributes:y,styles:k,classes:I}})})}},vv={mixout:function(){return{icon:_v(yv)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Th,n.nodeCallback=gv,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?It:r,s=n.callback,o=s===void 0?function(){}:s;return Th(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(m,E){Promise.all([Tl(i,a),u.iconName?Tl(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var I=Ec(v,2),_=I[0],y=I[1];m([n,xc({icons:{main:_,mask:y},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=jo(a);l.length>0&&(i.style=l);var c;return Rc(o)&&(c=hn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Ev={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ho({type:"layer"},function(){sr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(hs(s)).join(" ")},children:o}]})}}}},wv={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return Ho({type:"counter",content:n},function(){return sr("beforeDOMElementCreation",{content:n,params:r}),tv({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(hs(a))}})})}}}},bv={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ke:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,f=r.styles,m=f===void 0?{}:f;return Ho({type:"text",content:n},function(){return sr("beforeDOMElementCreation",{content:n,params:r}),_h({content:n,transform:L(L({},Ke),s),title:a,extra:{attributes:h,styles:m,classes:["".concat(z.cssPrefix,"-layers-text")].concat(hs(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if($d){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_h({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Tv=new RegExp('"',"ug"),Ih=[1105920,1112319];function Iv(e){var t=e.replace(Tv,""),n=Ly(t,0),r=n>=Ih[0]&&n<=Ih[1],i=t.length===2?t[0]===t[1]:!1;return{value:yl(i?t[0]:t),isSecondary:r||i}}function Ah(e,t){var n="".concat(dy).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Xr(e.children),o=s.filter(function(rt){return rt.getAttribute(_l)===t})[0],a=Vn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(yy),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?kt:wt,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Mi[f][l[2].toLowerCase()]:vy[f][c],E=Iv(h),v=E.value,I=E.isSecondary,_=l[0].startsWith("FontAwesome"),y=Pc(m,v),P=y;if(_){var k=qy(v);k.iconName&&k.prefix&&(y=k.iconName,m=k.prefix)}if(y&&!I&&(!o||o.getAttribute(bc)!==m||o.getAttribute(Tc)!==P)){e.setAttribute(n,P),o&&e.removeChild(o);var q=mv(),F=q.extra;F.attributes[_l]=t,Tl(y,m).then(function(rt){var xt=xc(L(L({},q),{},{icons:{main:rt,mask:Cc()},prefix:m,iconName:P,extra:F,watchable:!0})),St=It.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(St,e.firstChild):e.appendChild(St),St.outerHTML=xt.map(function(Mt){return ds(Mt)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Av(e){return Promise.all([Ah(e,"::before"),Ah(e,"::after")])}function Rv(e){return e.parentNode!==document.head&&!~py.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_l)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Rh(e){if(pn)return new Promise(function(t,n){var r=Xr(e.querySelectorAll("*")).filter(Rv).map(Av),i=kc.begin("searchPseudoElements");am(),Promise.all(r).then(function(){i(),Al(),t()}).catch(function(){i(),Al(),n()})})}var Sv={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rh,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?It:r;z.searchPseudoElements&&Rh(i)}}},Sh=!1,Pv={mixout:function(){return{dom:{unwatch:function(){am(),Sh=!0}}}},hooks:function(){return{bootstrap:function(){wh(El("mutationObserverCallbacks",{}))},noAuto:function(){uv()},watch:function(n){var r=n.observeMutationsRoot;Sh?Al():wh(El("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ph=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Cv={mixout:function(){return{parse:{transform:function(n){return Ph(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ph(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:f};return{tag:"g",attributes:L({},m.outer),children:[{tag:"g",attributes:L({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),m.path)}]}]}}}},Ua={x:0,y:0,width:"100%",height:"100%"};function Ch(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xv(e){return e.tag==="g"?e.children:[e]}var kv={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?qo(i.split(" ").map(function(o){return o.trim()})):Cc();return s.prefix||(s.prefix=Dn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,f=o.icon,m=xy({transform:l,containerWidth:h,iconWidth:c}),E={tag:"rect",attributes:L(L({},Ua),{},{fill:"white"})},v=u.children?{children:u.children.map(Ch)}:{},I={tag:"g",attributes:L({},m.inner),children:[Ch(L({tag:u.tag,attributes:L(L({},u.attributes),m.path)},v))]},_={tag:"g",attributes:L({},m.outer),children:[I]},y="mask-".concat(a||Ui()),P="clip-".concat(a||Ui()),k={tag:"mask",attributes:L(L({},Ua),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,_]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:xv(f)},k]};return r.push(q,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(y,")")},Ua)}),{children:r,attributes:i}}}},Vv={provides:function(t){var n=!1;Vn.matchMedia&&(n=Vn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Dv={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Ov=[Dy,vv,Ev,wv,bv,Sv,Pv,Cv,kv,Vv,Dv];Gy(Ov,{mixoutsTo:be});be.noAuto;be.config;var Nv=be.library;be.dom;var Rl=be.parse;be.findIconDefinition;be.toHtml;var Mv=be.icon;be.layer;be.text;be.counter;var Lv={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},Fv={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},Uv={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"]},$v=Uv,Bv={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},jv={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},zv={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},qv=zv,Hv={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},Kv={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Gv={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Wv={prefix:"fas",iconName:"circle-half-stroke",icon:[512,512,[9680,"adjust"],"f042","M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Qv=Wv,Yv={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]};/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dc(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const vt={},kr=[],Re=()=>{},Xv=()=>!1,Ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Oc=e=>e.startsWith("onUpdate:"),Ht=Object.assign,Nc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Jv=Object.prototype.hasOwnProperty,ut=(e,t)=>Jv.call(e,t),Y=Array.isArray,Vr=e=>Go(e)==="[object Map]",cm=e=>Go(e)==="[object Set]",nt=e=>typeof e=="function",Ut=e=>typeof e=="string",hr=e=>typeof e=="symbol",Rt=e=>e!==null&&typeof e=="object",um=e=>(Rt(e)||nt(e))&&nt(e.then)&&nt(e.catch),hm=Object.prototype.toString,Go=e=>hm.call(e),Zv=e=>Go(e).slice(8,-1),fm=e=>Go(e)==="[object Object]",Mc=e=>Ut(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bi=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},t0=/-(\w)/g,Ne=Wo(e=>e.replace(t0,(t,n)=>n?n.toUpperCase():"")),e0=/\B([A-Z])/g,fr=Wo(e=>e.replace(e0,"-$1").toLowerCase()),Qo=Wo(e=>e.charAt(0).toUpperCase()+e.slice(1)),$a=Wo(e=>e?`on${Qo(e)}`:""),Je=(e,t)=>!Object.is(e,t),so=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},dm=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Sl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let xh;const mm=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lc(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ut(r)?s0(r):Lc(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ut(e)||Rt(e))return e}const n0=/;(?![^(]*\))/g,r0=/:([^]+)/,i0=/\/\*[^]*?\*\//g;function s0(e){const t={};return e.replace(i0,"").split(n0).forEach(n=>{if(n){const r=n.split(r0);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ge(e){let t="";if(Ut(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const r=Ge(e[n]);r&&(t+=r+" ")}else if(Rt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const o0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a0=Dc(o0);function pm(e){return!!e||e===""}const on=e=>Ut(e)?e:e==null?"":Y(e)||Rt(e)&&(e.toString===hm||!nt(e.toString))?JSON.stringify(e,gm,2):String(e),gm=(e,t)=>t&&t.__v_isRef?gm(e,t.value):Vr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Ba(r,s)+" =>"]=i,n),{})}:cm(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ba(n))}:hr(t)?Ba(t):Rt(t)&&!Y(t)&&!fm(t)?String(t):t,Ba=(e,t="")=>{var n;return hr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class l0{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function c0(e,t=Ce){t&&t.active&&t.effects.push(e)}function u0(){return Ce}let tr;class Fc{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,c0(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Fn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(h0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Un()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Rn,n=tr;try{return Rn=!0,tr=this,this._runnings++,kh(this),this.fn()}finally{Vh(this),this._runnings--,tr=n,Rn=t}}stop(){this.active&&(kh(this),Vh(this),this.onStop&&this.onStop(),this.active=!1)}}function h0(e){return e.value}function kh(e){e._trackId++,e._depsLength=0}function Vh(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)_m(e.deps[t],e);e.deps.length=e._depsLength}}function _m(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Rn=!0,Pl=0;const ym=[];function Fn(){ym.push(Rn),Rn=!1}function Un(){const e=ym.pop();Rn=e===void 0?!0:e}function Uc(){Pl++}function $c(){for(Pl--;!Pl&&Cl.length;)Cl.shift()()}function vm(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&_m(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Cl=[];function Em(e,t,n){Uc();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Cl.push(r.scheduler)))}$c()}const wm=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},xl=new WeakMap,er=Symbol(""),kl=Symbol("");function ye(e,t,n){if(Rn&&tr){let r=xl.get(e);r||xl.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=wm(()=>r.delete(n))),vm(tr,i)}}function an(e,t,n,r,i,s){const o=xl.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&Y(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!hr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":Y(e)?Mc(n)&&a.push(o.get("length")):(a.push(o.get(er)),Vr(e)&&a.push(o.get(kl)));break;case"delete":Y(e)||(a.push(o.get(er)),Vr(e)&&a.push(o.get(kl)));break;case"set":Vr(e)&&a.push(o.get(er));break}Uc();for(const l of a)l&&Em(l,4);$c()}const f0=Dc("__proto__,__v_isRef,__isVue"),bm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hr)),Dh=d0();function d0(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=mt(this);for(let s=0,o=this.length;s<o;s++)ye(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(mt)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Fn(),Uc();const r=mt(this)[t].apply(this,n);return $c(),Un(),r}}),e}function m0(e){hr(e)||(e=String(e));const t=mt(this);return ye(t,"has",e),t.hasOwnProperty(e)}class Tm{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?S0:Sm:s?Rm:Am).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=Y(t);if(!i){if(o&&ut(Dh,n))return Reflect.get(Dh,n,r);if(n==="hasOwnProperty")return m0}const a=Reflect.get(t,n,r);return(hr(n)?bm.has(n):f0(n))||(i||ye(t,"get",n),s)?a:ve(a)?o&&Mc(n)?a:a.value:Rt(a)?i?Cm(a):Jr(a):a}}class Im extends Tm{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const l=$i(s);if(!yo(r)&&!$i(r)&&(s=mt(s),r=mt(r)),!Y(t)&&ve(s)&&!ve(r))return l?!1:(s.value=r,!0)}const o=Y(t)&&Mc(n)?Number(n)<t.length:ut(t,n),a=Reflect.set(t,n,r,i);return t===mt(i)&&(o?Je(r,s)&&an(t,"set",n,r):an(t,"add",n,r)),a}deleteProperty(t,n){const r=ut(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&an(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!hr(n)||!bm.has(n))&&ye(t,"has",n),r}ownKeys(t){return ye(t,"iterate",Y(t)?"length":er),Reflect.ownKeys(t)}}class p0 extends Tm{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const g0=new Im,_0=new p0,y0=new Im(!0);const Bc=e=>e,Yo=e=>Reflect.getPrototypeOf(e);function js(e,t,n=!1,r=!1){e=e.__v_raw;const i=mt(e),s=mt(t);n||(Je(t,s)&&ye(i,"get",t),ye(i,"get",s));const{has:o}=Yo(i),a=r?Bc:n?qc:Bi;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function zs(e,t=!1){const n=this.__v_raw,r=mt(n),i=mt(e);return t||(Je(e,i)&&ye(r,"has",e),ye(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function qs(e,t=!1){return e=e.__v_raw,!t&&ye(mt(e),"iterate",er),Reflect.get(e,"size",e)}function Oh(e){e=mt(e);const t=mt(this);return Yo(t).has.call(t,e)||(t.add(e),an(t,"add",e,e)),this}function Nh(e,t){t=mt(t);const n=mt(this),{has:r,get:i}=Yo(n);let s=r.call(n,e);s||(e=mt(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?Je(t,o)&&an(n,"set",e,t):an(n,"add",e,t),this}function Mh(e){const t=mt(this),{has:n,get:r}=Yo(t);let i=n.call(t,e);i||(e=mt(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&an(t,"delete",e,void 0),s}function Lh(){const e=mt(this),t=e.size!==0,n=e.clear();return t&&an(e,"clear",void 0,void 0),n}function Hs(e,t){return function(r,i){const s=this,o=s.__v_raw,a=mt(o),l=t?Bc:e?qc:Bi;return!e&&ye(a,"iterate",er),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Ks(e,t,n){return function(...r){const i=this.__v_raw,s=mt(i),o=Vr(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?Bc:t?qc:Bi;return!t&&ye(s,"iterate",l?kl:er),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function vn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function v0(){const e={get(s){return js(this,s)},get size(){return qs(this)},has:zs,add:Oh,set:Nh,delete:Mh,clear:Lh,forEach:Hs(!1,!1)},t={get(s){return js(this,s,!1,!0)},get size(){return qs(this)},has:zs,add:Oh,set:Nh,delete:Mh,clear:Lh,forEach:Hs(!1,!0)},n={get(s){return js(this,s,!0)},get size(){return qs(this,!0)},has(s){return zs.call(this,s,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hs(!0,!1)},r={get(s){return js(this,s,!0,!0)},get size(){return qs(this,!0)},has(s){return zs.call(this,s,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ks(s,!1,!1),n[s]=Ks(s,!0,!1),t[s]=Ks(s,!1,!0),r[s]=Ks(s,!0,!0)}),[e,n,t,r]}const[E0,w0,b0,T0]=v0();function jc(e,t){const n=t?e?T0:b0:e?w0:E0;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ut(n,i)&&i in r?n:r,i,s)}const I0={get:jc(!1,!1)},A0={get:jc(!1,!0)},R0={get:jc(!0,!1)};const Am=new WeakMap,Rm=new WeakMap,Sm=new WeakMap,S0=new WeakMap;function P0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function C0(e){return e.__v_skip||!Object.isExtensible(e)?0:P0(Zv(e))}function Jr(e){return $i(e)?e:zc(e,!1,g0,I0,Am)}function Pm(e){return zc(e,!1,y0,A0,Rm)}function Cm(e){return zc(e,!0,_0,R0,Sm)}function zc(e,t,n,r,i){if(!Rt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=C0(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function Ti(e){return $i(e)?Ti(e.__v_raw):!!(e&&e.__v_isReactive)}function $i(e){return!!(e&&e.__v_isReadonly)}function yo(e){return!!(e&&e.__v_isShallow)}function xm(e){return e?!!e.__v_raw:!1}function mt(e){const t=e&&e.__v_raw;return t?mt(t):e}function x0(e){return Object.isExtensible(e)&&dm(e,"__v_skip",!0),e}const Bi=e=>Rt(e)?Jr(e):e,qc=e=>Rt(e)?Cm(e):e;class km{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fc(()=>t(this._value),()=>Ii(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=mt(this);return(!t._cacheable||t.effect.dirty)&&Je(t._value,t._value=t.effect.run())&&Ii(t,4),Hc(t),t.effect._dirtyLevel>=2&&Ii(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function k0(e,t,n=!1){let r,i;const s=nt(e);return s?(r=e,i=Re):(r=e.get,i=e.set),new km(r,i,s||!i,n)}function Hc(e){var t;Rn&&tr&&(e=mt(e),vm(tr,(t=e.dep)!=null?t:e.dep=wm(()=>e.dep=void 0,e instanceof km?e:void 0)))}function Ii(e,t=4,n){e=mt(e);const r=e.dep;r&&Em(r,t)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Wt(e){return Dm(e,!1)}function Vm(e){return Dm(e,!0)}function Dm(e,t){return ve(e)?e:new V0(e,t)}class V0{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:mt(t),this._value=n?t:Bi(t)}get value(){return Hc(this),this._value}set value(t){const n=this.__v_isShallow||yo(t)||$i(t);t=n?t:mt(t),Je(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Bi(t),Ii(this,4))}}function he(e){return ve(e)?e.value:e}const D0={get:(e,t,n)=>he(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ve(i)&&!ve(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Om(e){return Ti(e)?e:new Proxy(e,D0)}class O0{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Hc(this),()=>Ii(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function N0(e){return new O0(e)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sn(e,t,n,r){try{return r?e(...r):e()}catch(i){Xo(i,t,n)}}function De(e,t,n,r){if(nt(e)){const i=Sn(e,t,n,r);return i&&um(i)&&i.catch(s=>{Xo(s,t,n)}),i}if(Y(e)){const i=[];for(let s=0;s<e.length;s++)i.push(De(e[s],t,n,r));return i}}function Xo(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Fn(),Sn(l,null,10,[e,o,a]),Un();return}}M0(e,n,i,r)}function M0(e,t,n,r=!0){console.error(e)}let ji=!1,Vl=!1;const oe=[];let qe=0;const Dr=[];let wn=null,Kn=0;const Nm=Promise.resolve();let Kc=null;function Mm(e){const t=Kc||Nm;return e?t.then(this?e.bind(this):e):t}function L0(e){let t=qe+1,n=oe.length;for(;t<n;){const r=t+n>>>1,i=oe[r],s=zi(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function Gc(e){(!oe.length||!oe.includes(e,ji&&e.allowRecurse?qe+1:qe))&&(e.id==null?oe.push(e):oe.splice(L0(e.id),0,e),Lm())}function Lm(){!ji&&!Vl&&(Vl=!0,Kc=Nm.then(Um))}function F0(e){const t=oe.indexOf(e);t>qe&&oe.splice(t,1)}function U0(e){Y(e)?Dr.push(...e):(!wn||!wn.includes(e,e.allowRecurse?Kn+1:Kn))&&Dr.push(e),Lm()}function Fh(e,t,n=ji?qe+1:0){for(;n<oe.length;n++){const r=oe[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;oe.splice(n,1),n--,r()}}}function Fm(e){if(Dr.length){const t=[...new Set(Dr)].sort((n,r)=>zi(n)-zi(r));if(Dr.length=0,wn){wn.push(...t);return}for(wn=t,Kn=0;Kn<wn.length;Kn++)wn[Kn]();wn=null,Kn=0}}const zi=e=>e.id==null?1/0:e.id,$0=(e,t)=>{const n=zi(e)-zi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Um(e){Vl=!1,ji=!0,oe.sort($0);try{for(qe=0;qe<oe.length;qe++){const t=oe[qe];t&&t.active!==!1&&Sn(t,null,14)}}finally{qe=0,oe.length=0,Fm(),ji=!1,Kc=null,(oe.length||Dr.length)&&Um()}}function B0(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||vt;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||vt;f&&(i=n.map(m=>Ut(m)?m.trim():m)),h&&(i=n.map(Sl))}let a,l=r[a=$a(t)]||r[a=$a(Ne(t))];!l&&s&&(l=r[a=$a(fr(t))]),l&&De(l,e,6,i);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(c,e,6,i)}}function $m(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!nt(e)){const l=c=>{const u=$m(c,t,!0);u&&(a=!0,Ht(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(Rt(e)&&r.set(e,null),null):(Y(s)?s.forEach(l=>o[l]=null):Ht(o,s),Rt(e)&&r.set(e,o),o)}function Jo(e,t){return!e||!Ko(t)?!1:(t=t.slice(2).replace(/Once$/,""),ut(e,t[0].toLowerCase()+t.slice(1))||ut(e,fr(t))||ut(e,t))}let fe=null,Zo=null;function vo(e){const t=fe;return fe=e,Zo=e&&e.type.__scopeId||null,t}function oP(e){Zo=e}function aP(){Zo=null}function Qn(e,t=fe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Qh(-1);const s=vo(t);let o;try{o=e(...i)}finally{vo(s),r._d&&Qh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ja(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:E,inheritAttrs:v}=e,I=vo(e);let _,y;try{if(n.shapeFlag&4){const k=i||r,q=k;_=ze(c.call(q,k,u,h,m,f,E)),y=a}else{const k=t;_=ze(k.length>1?k(h,{attrs:a,slots:o,emit:l}):k(h,null)),y=t.props?a:j0(a)}}catch(k){Si.length=0,Xo(k,e,1),_=dt(Hi)}let P=_;if(y&&v!==!1){const k=Object.keys(y),{shapeFlag:q}=P;k.length&&q&7&&(s&&k.some(Oc)&&(y=z0(y,s)),P=Ur(P,y,!1,!0))}return n.dirs&&(P=Ur(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),_=P,vo(I),_}const j0=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ko(n))&&((t||(t={}))[n]=e[n]);return t},z0=(e,t)=>{const n={};for(const r in e)(!Oc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function q0(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Uh(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Jo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Uh(r,o,c):!0:!!o;return!1}function Uh(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Jo(n,s))return!0}return!1}function H0({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const K0="components";function or(e,t){return W0(K0,e,!0,t)||e}const G0=Symbol.for("v-ndc");function W0(e,t,n=!0,r=!1){const i=fe||Jt;if(i){const s=i.type;{const a=jE(s,!1);if(a&&(a===t||a===Ne(t)||a===Qo(Ne(t))))return s}const o=$h(i[e]||s[e],t)||$h(i.appContext[e],t);return!o&&r?s:o}}function $h(e,t){return e&&(e[t]||e[Ne(t)]||e[Qo(Ne(t))])}const Q0=e=>e.__isSuspense;function Y0(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):U0(e)}const X0=Symbol.for("v-scx"),J0=()=>Oe(X0);function Z0(e,t){return Wc(e,null,{flush:"sync"})}const Gs={};function nr(e,t,n){return Wc(e,t,n)}function Wc(e,t,{immediate:n,deep:r,flush:i,once:s,onTrack:o,onTrigger:a}=vt){if(t&&s){const F=t;t=(...rt)=>{F(...rt),q()}}const l=Jt,c=F=>r===!0?F:Yn(F,r===!1?1:void 0);let u,h=!1,f=!1;if(ve(e)?(u=()=>e.value,h=yo(e)):Ti(e)?(u=()=>c(e),h=!0):Y(e)?(f=!0,h=e.some(F=>Ti(F)||yo(F)),u=()=>e.map(F=>{if(ve(F))return F.value;if(Ti(F))return c(F);if(nt(F))return Sn(F,l,2)})):nt(e)?t?u=()=>Sn(e,l,2):u=()=>(m&&m(),De(e,l,3,[E])):u=Re,t&&r){const F=u;u=()=>Yn(F())}let m,E=F=>{m=P.onStop=()=>{Sn(F,l,4),m=P.onStop=void 0}},v;if(ra)if(E=Re,t?n&&De(t,l,3,[u(),f?[]:void 0,E]):u(),i==="sync"){const F=J0();v=F.__watcherHandles||(F.__watcherHandles=[])}else return Re;let I=f?new Array(e.length).fill(Gs):Gs;const _=()=>{if(!(!P.active||!P.dirty))if(t){const F=P.run();(r||h||(f?F.some((rt,xt)=>Je(rt,I[xt])):Je(F,I)))&&(m&&m(),De(t,l,3,[F,I===Gs?void 0:f&&I[0]===Gs?[]:I,E]),I=F)}else P.run()};_.allowRecurse=!!t;let y;i==="sync"?y=_:i==="post"?y=()=>ge(_,l&&l.suspense):(_.pre=!0,l&&(_.id=l.uid),y=()=>Gc(_));const P=new Fc(u,Re,y),k=u0(),q=()=>{P.stop(),k&&Nc(k.effects,P)};return t?n?_():I=P.run():i==="post"?ge(P.run.bind(P),l&&l.suspense):P.run(),v&&v.push(q),q}function tE(e,t,n){const r=this.proxy,i=Ut(e)?e.includes(".")?Bm(r,e):()=>r[e]:e.bind(r,r);let s;nt(t)?s=t:(s=t.handler,n=t);const o=ps(this),a=Wc(i,s.bind(r),n);return o(),a}function Bm(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Yn(e,t=1/0,n){if(t<=0||!Rt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ve(e))Yn(e.value,t,n);else if(Y(e))for(let r=0;r<e.length;r++)Yn(e[r],t,n);else if(cm(e)||Vr(e))e.forEach(r=>{Yn(r,t,n)});else if(fm(e))for(const r in e)Yn(e[r],t,n);return e}function jm(e,t){if(fe===null)return e;const n=ia(fe)||fe.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,o,a,l=vt]=t[i];s&&(nt(s)&&(s={mounted:s,updated:s}),s.deep&&Yn(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function zn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Fn(),De(l,n,8,[e.el,a,e,t]),Un())}}/*! #__NO_SIDE_EFFECTS__ */function Qc(e,t){return nt(e)?Ht({name:e.name},t,{setup:e}):e}const oo=e=>!!e.type.__asyncLoader,zm=e=>e.type.__isKeepAlive;function eE(e,t){qm(e,"a",t)}function nE(e,t){qm(e,"da",t)}function qm(e,t,n=Jt){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ta(t,r,n),n){let i=n.parent;for(;i&&i.parent;)zm(i.parent.vnode)&&rE(r,t,n,i),i=i.parent}}function rE(e,t,n,r){const i=ta(t,e,r,!0);ea(()=>{Nc(r[t],i)},n)}function ta(e,t,n=Jt,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Fn();const a=ps(n),l=De(t,n,e,o);return a(),Un(),l});return r?i.unshift(s):i.push(s),s}}const gn=e=>(t,n=Jt)=>(!ra||e==="sp")&&ta(e,(...r)=>t(...r),n),iE=gn("bm"),ms=gn("m"),sE=gn("bu"),oE=gn("u"),Hm=gn("bum"),ea=gn("um"),aE=gn("sp"),lE=gn("rtg"),cE=gn("rtc");function uE(e,t=Jt){ta("ec",e,t)}function qi(e,t,n,r){let i;const s=n;if(Y(e)||Ut(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(Rt(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=t(e[c],c,a,s)}}else i=[];return i}const Dl=e=>e?sp(e)?ia(e)||e.proxy:Dl(e.parent):null,Ai=Ht(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dl(e.parent),$root:e=>Dl(e.root),$emit:e=>e.emit,$options:e=>Yc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Gc(e.update)}),$nextTick:e=>e.n||(e.n=Mm.bind(e.proxy)),$watch:e=>tE.bind(e)}),za=(e,t)=>e!==vt&&!e.__isScriptSetup&&ut(e,t),hE={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(za(r,t))return o[t]=1,r[t];if(i!==vt&&ut(i,t))return o[t]=2,i[t];if((c=e.propsOptions[0])&&ut(c,t))return o[t]=3,s[t];if(n!==vt&&ut(n,t))return o[t]=4,n[t];Ol&&(o[t]=0)}}const u=Ai[t];let h,f;if(u)return t==="$attrs"&&ye(e.attrs,"get",""),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==vt&&ut(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,ut(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return za(i,t)?(i[t]=n,!0):r!==vt&&ut(r,t)?(r[t]=n,!0):ut(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==vt&&ut(e,o)||za(t,o)||(a=s[0])&&ut(a,o)||ut(r,o)||ut(Ai,o)||ut(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ut(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Bh(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ol=!0;function fE(e){const t=Yc(e),n=e.proxy,r=e.ctx;Ol=!1,t.beforeCreate&&jh(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:E,activated:v,deactivated:I,beforeDestroy:_,beforeUnmount:y,destroyed:P,unmounted:k,render:q,renderTracked:F,renderTriggered:rt,errorCaptured:xt,serverPrefetch:St,expose:Mt,inheritAttrs:Ue,components:tn,directives:Te,filters:jn}=t;if(c&&dE(c,r,null),o)for(const ot in o){const X=o[ot];nt(X)&&(r[ot]=X.bind(n))}if(i){const ot=i.call(n,n);Rt(ot)&&(e.data=Jr(ot))}if(Ol=!0,s)for(const ot in s){const X=s[ot],en=nt(X)?X.bind(n,n):nt(X.get)?X.get.bind(n,n):Re,_n=!nt(X)&&nt(X.set)?X.set.bind(n):Re,$e=Yt({get:en,set:_n});Object.defineProperty(r,ot,{enumerable:!0,configurable:!0,get:()=>$e.value,set:me=>$e.value=me})}if(a)for(const ot in a)Km(a[ot],r,n,ot);if(l){const ot=nt(l)?l.call(n):l;Reflect.ownKeys(ot).forEach(X=>{ao(X,ot[X])})}u&&jh(u,e,"c");function st(ot,X){Y(X)?X.forEach(en=>ot(en.bind(n))):X&&ot(X.bind(n))}if(st(iE,h),st(ms,f),st(sE,m),st(oE,E),st(eE,v),st(nE,I),st(uE,xt),st(cE,F),st(lE,rt),st(Hm,y),st(ea,k),st(aE,St),Y(Mt))if(Mt.length){const ot=e.exposed||(e.exposed={});Mt.forEach(X=>{Object.defineProperty(ot,X,{get:()=>n[X],set:en=>n[X]=en})})}else e.exposed||(e.exposed={});q&&e.render===Re&&(e.render=q),Ue!=null&&(e.inheritAttrs=Ue),tn&&(e.components=tn),Te&&(e.directives=Te)}function dE(e,t,n=Re){Y(e)&&(e=Nl(e));for(const r in e){const i=e[r];let s;Rt(i)?"default"in i?s=Oe(i.from||r,i.default,!0):s=Oe(i.from||r):s=Oe(i),ve(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function jh(e,t,n){De(Y(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Km(e,t,n,r){const i=r.includes(".")?Bm(n,r):()=>n[r];if(Ut(e)){const s=t[e];nt(s)&&nr(i,s)}else if(nt(e))nr(i,e.bind(n));else if(Rt(e))if(Y(e))e.forEach(s=>Km(s,t,n,r));else{const s=nt(e.handler)?e.handler.bind(n):t[e.handler];nt(s)&&nr(i,s,e)}}function Yc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Eo(l,c,o,!0)),Eo(l,t,o)),Rt(t)&&s.set(t,l),l}function Eo(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Eo(e,s,n,!0),i&&i.forEach(o=>Eo(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=mE[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const mE={data:zh,props:qh,emits:qh,methods:pi,computed:pi,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:pi,directives:pi,watch:gE,provide:zh,inject:pE};function zh(e,t){return t?e?function(){return Ht(nt(e)?e.call(this,this):e,nt(t)?t.call(this,this):t)}:t:e}function pE(e,t){return pi(Nl(e),Nl(t))}function Nl(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function pi(e,t){return e?Ht(Object.create(null),e,t):t}function qh(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Ht(Object.create(null),Bh(e),Bh(t??{})):t}function gE(e,t){if(!e)return t;if(!t)return e;const n=Ht(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function Gm(){return{app:null,config:{isNativeTag:Xv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _E=0;function yE(e,t){return function(r,i=null){nt(r)||(r=Ht({},r)),i!=null&&!Rt(i)&&(i=null);const s=Gm(),o=new WeakSet;let a=!1;const l=s.app={_uid:_E++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:HE,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&nt(c.install)?(o.add(c),c.install(l,...u)):nt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=dt(r,i);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,c):e(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ia(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Ri;Ri=l;try{return c()}finally{Ri=u}}};return l}}let Ri=null;function ao(e,t){if(Jt){let n=Jt.provides;const r=Jt.parent&&Jt.parent.provides;r===n&&(n=Jt.provides=Object.create(r)),n[e]=t}}function Oe(e,t,n=!1){const r=Jt||fe;if(r||Ri){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ri._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&nt(t)?t.call(r&&r.proxy):t}}const Wm={},Qm=()=>Object.create(Wm),Ym=e=>Object.getPrototypeOf(e)===Wm;function vE(e,t,n,r=!1){const i={},s=Qm();e.propsDefaults=Object.create(null),Xm(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Pm(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function EE(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=mt(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Jo(e.emitsOptions,f))continue;const m=t[f];if(l)if(ut(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const E=Ne(f);i[E]=Ml(l,a,E,m,e,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Xm(e,t,i,s)&&(c=!0);let u;for(const h in a)(!t||!ut(t,h)&&((u=fr(h))===h||!ut(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ml(l,a,h,void 0,e,!0)):delete i[h]);if(s!==a)for(const h in s)(!t||!ut(t,h))&&(delete s[h],c=!0)}c&&an(e.attrs,"set","")}function Xm(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(bi(l))continue;const c=t[l];let u;i&&ut(i,u=Ne(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Jo(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=mt(n),c=a||vt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ml(i,l,h,c[h],e,!ut(c,h))}}return o}function Ml(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=ut(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&nt(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=ps(i);r=c[n]=l.call(null,t),u()}}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===fr(n))&&(r=!0))}return r}function Jm(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!nt(e)){const u=h=>{l=!0;const[f,m]=Jm(h,t,!0);Ht(o,f),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return Rt(e)&&r.set(e,kr),kr;if(Y(s))for(let u=0;u<s.length;u++){const h=Ne(s[u]);Hh(h)&&(o[h]=vt)}else if(s)for(const u in s){const h=Ne(u);if(Hh(h)){const f=s[u],m=o[h]=Y(f)||nt(f)?{type:f}:Ht({},f);if(m){const E=Wh(Boolean,m.type),v=Wh(String,m.type);m[0]=E>-1,m[1]=v<0||E<v,(E>-1||ut(m,"default"))&&a.push(h)}}}const c=[o,a];return Rt(e)&&r.set(e,c),c}function Hh(e){return e[0]!=="$"&&!bi(e)}function Kh(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Gh(e,t){return Kh(e)===Kh(t)}function Wh(e,t){return Y(t)?t.findIndex(n=>Gh(n,e)):nt(t)&&Gh(t,e)?0:-1}const Zm=e=>e[0]==="_"||e==="$stable",Xc=e=>Y(e)?e.map(ze):[ze(e)],wE=(e,t,n)=>{if(t._n)return t;const r=Qn((...i)=>Xc(t(...i)),n);return r._c=!1,r},tp=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Zm(i))continue;const s=e[i];if(nt(s))t[i]=wE(i,s,r);else if(s!=null){const o=Xc(s);t[i]=()=>o}}},ep=(e,t)=>{const n=Xc(t);e.slots.default=()=>n},bE=(e,t)=>{const n=e.slots=Qm();if(e.vnode.shapeFlag&32){const r=t._;r?(Ht(n,t),dm(n,"_",r,!0)):tp(t,n)}else t&&ep(e,t)},TE=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=vt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Ht(i,t),!n&&a===1&&delete i._):(s=!t.$stable,tp(t,i)),o=t}else t&&(ep(e,t),o={default:1});if(s)for(const a in i)!Zm(a)&&o[a]==null&&delete i[a]};function Ll(e,t,n,r,i=!1){if(Y(e)){e.forEach((f,m)=>Ll(f,t&&(Y(t)?t[m]:t),n,r,i));return}if(oo(r)&&!i)return;const s=r.shapeFlag&4?ia(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===vt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ut(c)?(u[c]=null,ut(h,c)&&(h[c]=null)):ve(c)&&(c.value=null)),nt(l))Sn(l,a,12,[o,u]);else{const f=Ut(l),m=ve(l);if(f||m){const E=()=>{if(e.f){const v=f?ut(h,l)?h[l]:u[l]:l.value;i?Y(v)&&Nc(v,s):Y(v)?v.includes(s)||v.push(s):f?(u[l]=[s],ut(h,l)&&(h[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,ut(h,l)&&(h[l]=o)):m&&(l.value=o,e.k&&(u[e.k]=o))};o?(E.id=-1,ge(E,n)):E()}}}const ge=Y0;function IE(e){return AE(e)}function AE(e,t){const n=mm();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Re,insertStaticContent:E}=e,v=(d,p,g,T=null,w=null,x=null,M=void 0,C=null,V=!!p.dynamicChildren)=>{if(d===p)return;d&&!li(d,p)&&(T=b(d),me(d,w,x,!0),d=null),p.patchFlag===-2&&(V=!1,p.dynamicChildren=null);const{type:S,ref:$,shapeFlag:W}=p;switch(S){case na:I(d,p,g,T);break;case Hi:_(d,p,g,T);break;case Ha:d==null&&y(p,g,T,M);break;case qt:tn(d,p,g,T,w,x,M,C,V);break;default:W&1?q(d,p,g,T,w,x,M,C,V):W&6?Te(d,p,g,T,w,x,M,C,V):(W&64||W&128)&&S.process(d,p,g,T,w,x,M,C,V,H)}$!=null&&w&&Ll($,d&&d.ref,x,p||d,!p)},I=(d,p,g,T)=>{if(d==null)r(p.el=a(p.children),g,T);else{const w=p.el=d.el;p.children!==d.children&&c(w,p.children)}},_=(d,p,g,T)=>{d==null?r(p.el=l(p.children||""),g,T):p.el=d.el},y=(d,p,g,T)=>{[d.el,d.anchor]=E(d.children,p,g,T,d.el,d.anchor)},P=({el:d,anchor:p},g,T)=>{let w;for(;d&&d!==p;)w=f(d),r(d,g,T),d=w;r(p,g,T)},k=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},q=(d,p,g,T,w,x,M,C,V)=>{p.type==="svg"?M="svg":p.type==="math"&&(M="mathml"),d==null?F(p,g,T,w,x,M,C,V):St(d,p,w,x,M,C,V)},F=(d,p,g,T,w,x,M,C)=>{let V,S;const{props:$,shapeFlag:W,transition:K,dirs:Z}=d;if(V=d.el=o(d.type,x,$&&$.is,$),W&8?u(V,d.children):W&16&&xt(d.children,V,null,T,w,qa(d,x),M,C),Z&&zn(d,null,T,"created"),rt(V,d,d.scopeId,M,T),$){for(const yt in $)yt!=="value"&&!bi(yt)&&s(V,yt,null,$[yt],x,d.children,T,w,ne);"value"in $&&s(V,"value",null,$.value,x),(S=$.onVnodeBeforeMount)&&je(S,T,d)}Z&&zn(d,null,T,"beforeMount");const at=RE(w,K);at&&K.beforeEnter(V),r(V,p,g),((S=$&&$.onVnodeMounted)||at||Z)&&ge(()=>{S&&je(S,T,d),at&&K.enter(V),Z&&zn(d,null,T,"mounted")},w)},rt=(d,p,g,T,w)=>{if(g&&m(d,g),T)for(let x=0;x<T.length;x++)m(d,T[x]);if(w){let x=w.subTree;if(p===x){const M=w.vnode;rt(d,M,M.scopeId,M.slotScopeIds,w.parent)}}},xt=(d,p,g,T,w,x,M,C,V=0)=>{for(let S=V;S<d.length;S++){const $=d[S]=C?bn(d[S]):ze(d[S]);v(null,$,p,g,T,w,x,M,C)}},St=(d,p,g,T,w,x,M)=>{const C=p.el=d.el;let{patchFlag:V,dynamicChildren:S,dirs:$}=p;V|=d.patchFlag&16;const W=d.props||vt,K=p.props||vt;let Z;if(g&&qn(g,!1),(Z=K.onVnodeBeforeUpdate)&&je(Z,g,p,d),$&&zn(p,d,g,"beforeUpdate"),g&&qn(g,!0),S?Mt(d.dynamicChildren,S,C,g,T,qa(p,w),x):M||X(d,p,C,null,g,T,qa(p,w),x,!1),V>0){if(V&16)Ue(C,p,W,K,g,T,w);else if(V&2&&W.class!==K.class&&s(C,"class",null,K.class,w),V&4&&s(C,"style",W.style,K.style,w),V&8){const at=p.dynamicProps;for(let yt=0;yt<at.length;yt++){const At=at[yt],$t=W[At],Pe=K[At];(Pe!==$t||At==="value")&&s(C,At,$t,Pe,w,d.children,g,T,ne)}}V&1&&d.children!==p.children&&u(C,p.children)}else!M&&S==null&&Ue(C,p,W,K,g,T,w);((Z=K.onVnodeUpdated)||$)&&ge(()=>{Z&&je(Z,g,p,d),$&&zn(p,d,g,"updated")},T)},Mt=(d,p,g,T,w,x,M)=>{for(let C=0;C<p.length;C++){const V=d[C],S=p[C],$=V.el&&(V.type===qt||!li(V,S)||V.shapeFlag&70)?h(V.el):g;v(V,S,$,null,T,w,x,M,!0)}},Ue=(d,p,g,T,w,x,M)=>{if(g!==T){if(g!==vt)for(const C in g)!bi(C)&&!(C in T)&&s(d,C,g[C],null,M,p.children,w,x,ne);for(const C in T){if(bi(C))continue;const V=T[C],S=g[C];V!==S&&C!=="value"&&s(d,C,S,V,M,p.children,w,x,ne)}"value"in T&&s(d,"value",g.value,T.value,M)}},tn=(d,p,g,T,w,x,M,C,V)=>{const S=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:W,dynamicChildren:K,slotScopeIds:Z}=p;Z&&(C=C?C.concat(Z):Z),d==null?(r(S,g,T),r($,g,T),xt(p.children||[],g,$,w,x,M,C,V)):W>0&&W&64&&K&&d.dynamicChildren?(Mt(d.dynamicChildren,K,g,w,x,M,C),(p.key!=null||w&&p===w.subTree)&&np(d,p,!0)):X(d,p,g,$,w,x,M,C,V)},Te=(d,p,g,T,w,x,M,C,V)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?w.ctx.activate(p,g,T,M,V):jn(p,g,T,w,x,M,V):it(d,p,V)},jn=(d,p,g,T,w,x,M)=>{const C=d.component=ME(d,T,w);if(zm(d)&&(C.ctx.renderer=H),FE(C),C.asyncDep){if(w&&w.registerDep(C,st),!d.el){const V=C.subTree=dt(Hi);_(null,V,p,g)}}else st(C,d,p,g,w,x,M)},it=(d,p,g)=>{const T=p.component=d.component;if(q0(d,p,g))if(T.asyncDep&&!T.asyncResolved){ot(T,p,g);return}else T.next=p,F0(T.update),T.effect.dirty=!0,T.update();else p.el=d.el,T.vnode=p},st=(d,p,g,T,w,x,M)=>{const C=()=>{if(d.isMounted){let{next:$,bu:W,u:K,parent:Z,vnode:at}=d;{const yr=rp(d);if(yr){$&&($.el=at.el,ot(d,$,M)),yr.asyncDep.then(()=>{d.isUnmounted||C()});return}}let yt=$,At;qn(d,!1),$?($.el=at.el,ot(d,$,M)):$=at,W&&so(W),(At=$.props&&$.props.onVnodeBeforeUpdate)&&je(At,Z,$,at),qn(d,!0);const $t=ja(d),Pe=d.subTree;d.subTree=$t,v(Pe,$t,h(Pe.el),b(Pe),d,w,x),$.el=$t.el,yt===null&&H0(d,$t.el),K&&ge(K,w),(At=$.props&&$.props.onVnodeUpdated)&&ge(()=>je(At,Z,$,at),w)}else{let $;const{el:W,props:K}=p,{bm:Z,m:at,parent:yt}=d,At=oo(p);if(qn(d,!1),Z&&so(Z),!At&&($=K&&K.onVnodeBeforeMount)&&je($,yt,p),qn(d,!0),W&&Pt){const $t=()=>{d.subTree=ja(d),Pt(W,d.subTree,d,w,null)};At?p.type.__asyncLoader().then(()=>!d.isUnmounted&&$t()):$t()}else{const $t=d.subTree=ja(d);v(null,$t,g,T,d,w,x),p.el=$t.el}if(at&&ge(at,w),!At&&($=K&&K.onVnodeMounted)){const $t=p;ge(()=>je($,yt,$t),w)}(p.shapeFlag&256||yt&&oo(yt.vnode)&&yt.vnode.shapeFlag&256)&&d.a&&ge(d.a,w),d.isMounted=!0,p=g=T=null}},V=d.effect=new Fc(C,Re,()=>Gc(S),d.scope),S=d.update=()=>{V.dirty&&V.run()};S.id=d.uid,qn(d,!0),S()},ot=(d,p,g)=>{p.component=d;const T=d.vnode.props;d.vnode=p,d.next=null,EE(d,p.props,T,g),TE(d,p.children,g),Fn(),Fh(d),Un()},X=(d,p,g,T,w,x,M,C,V=!1)=>{const S=d&&d.children,$=d?d.shapeFlag:0,W=p.children,{patchFlag:K,shapeFlag:Z}=p;if(K>0){if(K&128){_n(S,W,g,T,w,x,M,C,V);return}else if(K&256){en(S,W,g,T,w,x,M,C,V);return}}Z&8?($&16&&ne(S,w,x),W!==S&&u(g,W)):$&16?Z&16?_n(S,W,g,T,w,x,M,C,V):ne(S,w,x,!0):($&8&&u(g,""),Z&16&&xt(W,g,T,w,x,M,C,V))},en=(d,p,g,T,w,x,M,C,V)=>{d=d||kr,p=p||kr;const S=d.length,$=p.length,W=Math.min(S,$);let K;for(K=0;K<W;K++){const Z=p[K]=V?bn(p[K]):ze(p[K]);v(d[K],Z,g,null,w,x,M,C,V)}S>$?ne(d,w,x,!0,!1,W):xt(p,g,T,w,x,M,C,V,W)},_n=(d,p,g,T,w,x,M,C,V)=>{let S=0;const $=p.length;let W=d.length-1,K=$-1;for(;S<=W&&S<=K;){const Z=d[S],at=p[S]=V?bn(p[S]):ze(p[S]);if(li(Z,at))v(Z,at,g,null,w,x,M,C,V);else break;S++}for(;S<=W&&S<=K;){const Z=d[W],at=p[K]=V?bn(p[K]):ze(p[K]);if(li(Z,at))v(Z,at,g,null,w,x,M,C,V);else break;W--,K--}if(S>W){if(S<=K){const Z=K+1,at=Z<$?p[Z].el:T;for(;S<=K;)v(null,p[S]=V?bn(p[S]):ze(p[S]),g,at,w,x,M,C,V),S++}}else if(S>K)for(;S<=W;)me(d[S],w,x,!0),S++;else{const Z=S,at=S,yt=new Map;for(S=at;S<=K;S++){const Ee=p[S]=V?bn(p[S]):ze(p[S]);Ee.key!=null&&yt.set(Ee.key,S)}let At,$t=0;const Pe=K-at+1;let yr=!1,rh=0;const ai=new Array(Pe);for(S=0;S<Pe;S++)ai[S]=0;for(S=Z;S<=W;S++){const Ee=d[S];if($t>=Pe){me(Ee,w,x,!0);continue}let Be;if(Ee.key!=null)Be=yt.get(Ee.key);else for(At=at;At<=K;At++)if(ai[At-at]===0&&li(Ee,p[At])){Be=At;break}Be===void 0?me(Ee,w,x,!0):(ai[Be-at]=S+1,Be>=rh?rh=Be:yr=!0,v(Ee,p[Be],g,null,w,x,M,C,V),$t++)}const ih=yr?SE(ai):kr;for(At=ih.length-1,S=Pe-1;S>=0;S--){const Ee=at+S,Be=p[Ee],sh=Ee+1<$?p[Ee+1].el:T;ai[S]===0?v(null,Be,g,sh,w,x,M,C,V):yr&&(At<0||S!==ih[At]?$e(Be,g,sh,2):At--)}}},$e=(d,p,g,T,w=null)=>{const{el:x,type:M,transition:C,children:V,shapeFlag:S}=d;if(S&6){$e(d.component.subTree,p,g,T);return}if(S&128){d.suspense.move(p,g,T);return}if(S&64){M.move(d,p,g,H);return}if(M===qt){r(x,p,g);for(let W=0;W<V.length;W++)$e(V[W],p,g,T);r(d.anchor,p,g);return}if(M===Ha){P(d,p,g);return}if(T!==2&&S&1&&C)if(T===0)C.beforeEnter(x),r(x,p,g),ge(()=>C.enter(x),w);else{const{leave:W,delayLeave:K,afterLeave:Z}=C,at=()=>r(x,p,g),yt=()=>{W(x,()=>{at(),Z&&Z()})};K?K(x,at,yt):yt()}else r(x,p,g)},me=(d,p,g,T=!1,w=!1)=>{const{type:x,props:M,ref:C,children:V,dynamicChildren:S,shapeFlag:$,patchFlag:W,dirs:K}=d;if(C!=null&&Ll(C,null,g,d,!0),$&256){p.ctx.deactivate(d);return}const Z=$&1&&K,at=!oo(d);let yt;if(at&&(yt=M&&M.onVnodeBeforeUnmount)&&je(yt,p,d),$&6)Vs(d.component,g,T);else{if($&128){d.suspense.unmount(g,T);return}Z&&zn(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,g,w,H,T):S&&(x!==qt||W>0&&W&64)?ne(S,p,g,!1,!0):(x===qt&&W&384||!w&&$&16)&&ne(V,p,g),T&&gr(d)}(at&&(yt=M&&M.onVnodeUnmounted)||Z)&&ge(()=>{yt&&je(yt,p,d),Z&&zn(d,null,p,"unmounted")},g)},gr=d=>{const{type:p,el:g,anchor:T,transition:w}=d;if(p===qt){_r(g,T);return}if(p===Ha){k(d);return}const x=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:C}=w,V=()=>M(g,x);C?C(d.el,x,V):V()}else x()},_r=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Vs=(d,p,g)=>{const{bum:T,scope:w,update:x,subTree:M,um:C}=d;T&&so(T),w.stop(),x&&(x.active=!1,me(M,d,p,g)),C&&ge(C,p),ge(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ne=(d,p,g,T=!1,w=!1,x=0)=>{for(let M=x;M<d.length;M++)me(d[M],p,g,T,w)},b=d=>d.shapeFlag&6?b(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let U=!1;const N=(d,p,g)=>{d==null?p._vnode&&me(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,g),U||(U=!0,Fh(),Fm(),U=!1),p._vnode=d},H={p:v,um:me,m:$e,r:gr,mt:jn,mc:xt,pc:X,pbc:Mt,n:b,o:e};let pt,Pt;return{render:N,hydrate:pt,createApp:yE(N,pt)}}function qa({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function qn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function RE(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function np(e,t,n=!1){const r=e.children,i=t.children;if(Y(r)&&Y(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=bn(i[s]),a.el=o.el),n||np(o,a)),a.type===na&&(a.el=o.el)}}function SE(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function rp(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:rp(t)}const PE=e=>e.__isTeleport,qt=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),Hi=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Si=[];let ke=null;function Bt(e=!1){Si.push(ke=e?null:[])}function CE(){Si.pop(),ke=Si[Si.length-1]||null}let Ki=1;function Qh(e){Ki+=e}function xE(e){return e.dynamicChildren=Ki>0?ke||kr:null,CE(),Ki>0&&ke&&ke.push(e),e}function jt(e,t,n,r,i,s){return xE(D(e,t,n,r,i,s,!0))}function Fl(e){return e?e.__v_isVNode===!0:!1}function li(e,t){return e.type===t.type&&e.key===t.key}const ip=({key:e})=>e??null,lo=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ut(e)||ve(e)||nt(e)?{i:fe,r:e,k:t,f:!!n}:e:null);function D(e,t=null,n=null,r=0,i=null,s=e===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ip(t),ref:t&&lo(t),scopeId:Zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:fe};return a?(Jc(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ut(n)?8:16),Ki>0&&!o&&ke&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ke.push(l),l}const dt=kE;function kE(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===G0)&&(e=Hi),Fl(e)){const a=Ur(e,t,!0);return n&&Jc(a,n),Ki>0&&!s&&ke&&(a.shapeFlag&6?ke[ke.indexOf(e)]=a:ke.push(a)),a.patchFlag|=-2,a}if(zE(e)&&(e=e.__vccOpts),t){t=VE(t);let{class:a,style:l}=t;a&&!Ut(a)&&(t.class=Ge(a)),Rt(l)&&(xm(l)&&!Y(l)&&(l=Ht({},l)),t.style=Lc(l))}const o=Ut(e)?1:Q0(e)?128:PE(e)?64:Rt(e)?4:nt(e)?2:0;return D(e,t,n,r,i,o,s,!0)}function VE(e){return e?xm(e)||Ym(e)?Ht({},e):e:null}function Ur(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=e,c=t?DE(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ip(c),ref:t&&t.ref?n&&s?Y(s)?s.concat(lo(t)):[s,lo(t)]:lo(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ur(e.ssContent),ssFallback:e.ssFallback&&Ur(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(u.transition=l.clone(u)),u}function _e(e=" ",t=0){return dt(na,null,e,t)}function ze(e){return e==null||typeof e=="boolean"?dt(Hi):Y(e)?dt(qt,null,e.slice()):typeof e=="object"?bn(e):dt(na,null,String(e))}function bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ur(e)}function Jc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Jc(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ym(t)?t._ctx=fe:i===3&&fe&&(fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else nt(t)?(t={default:t,_ctx:fe},n=32):(t=String(t),r&64?(n=16,t=[_e(t)]):n=8);e.children=t,e.shapeFlag|=n}function DE(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ge([t.class,r.class]));else if(i==="style")t.style=Lc([t.style,r.style]);else if(Ko(i)){const s=t[i],o=r[i];o&&s!==o&&!(Y(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function je(e,t,n,r=null){De(e,t,7,[n,r])}const OE=Gm();let NE=0;function ME(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||OE,s={uid:NE++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new l0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jm(r,i),emitsOptions:$m(r,i),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:r.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=B0.bind(null,s),e.ce&&e.ce(s),s}let Jt=null;const LE=()=>Jt||fe;let wo,Ul;{const e=mm(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};wo=t("__VUE_INSTANCE_SETTERS__",n=>Jt=n),Ul=t("__VUE_SSR_SETTERS__",n=>ra=n)}const ps=e=>{const t=Jt;return wo(e),e.scope.on(),()=>{e.scope.off(),wo(t)}},Yh=()=>{Jt&&Jt.scope.off(),wo(null)};function sp(e){return e.vnode.shapeFlag&4}let ra=!1;function FE(e,t=!1){t&&Ul(t);const{props:n,children:r}=e.vnode,i=sp(e);vE(e,n,i,t),bE(e,r);const s=i?UE(e,t):void 0;return t&&Ul(!1),s}function UE(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hE);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?BE(e):null,s=ps(e);Fn();const o=Sn(r,e,0,[e.props,i]);if(Un(),s(),um(o)){if(o.then(Yh,Yh),t)return o.then(a=>{Xh(e,a,t)}).catch(a=>{Xo(a,e,0)});e.asyncDep=o}else Xh(e,o,t)}else op(e,t)}function Xh(e,t,n){nt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Rt(t)&&(e.setupState=Om(t)),op(e,n)}let Jh;function op(e,t,n){const r=e.type;if(!e.render){if(!t&&Jh&&!r.render){const i=r.template||Yc(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ht(Ht({isCustomElement:s,delimiters:a},o),l);r.render=Jh(i,c)}}e.render=r.render||Re}{const i=ps(e);Fn();try{fE(e)}finally{Un(),i()}}}const $E={get(e,t){return ye(e,"get",""),e[t]}};function BE(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,$E),slots:e.slots,emit:e.emit,expose:t}}function ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Om(x0(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ai)return Ai[n](e)},has(t,n){return n in t||n in Ai}}))}function jE(e,t=!0){return nt(e)?e.displayName||e.name:e.name||t&&e.__name}function zE(e){return nt(e)&&"__vccOpts"in e}const Yt=(e,t)=>k0(e,t,ra);function qE(e,t,n=vt){const r=LE(),i=Ne(t),s=fr(t),o=N0((l,c)=>{let u;return Z0(()=>{const h=e[t];Je(u,h)&&(u=h,c())}),{get(){return l(),n.get?n.get(u):u},set(h){const f=r.vnode.props;!(f&&(t in f||i in f||s in f)&&(`onUpdate:${t}`in f||`onUpdate:${i}`in f||`onUpdate:${s}`in f))&&Je(h,u)&&(u=h,c()),r.emit(`update:${t}`,n.set?n.set(h):h)}}}),a="modelModifiers";return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?e[a]||{}:o,done:!1}:{done:!0}}}},o}function Zc(e,t,n){const r=arguments.length;return r===2?Rt(t)&&!Y(t)?Fl(t)?dt(e,null,[t]):dt(e,t):dt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fl(n)&&(n=[n]),dt(e,t,n))}const HE="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const KE="http://www.w3.org/2000/svg",GE="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,Zh=Tn&&Tn.createElement("template"),WE={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Tn.createElementNS(KE,e):t==="mathml"?Tn.createElementNS(GE,e):Tn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Tn.createTextNode(e),createComment:e=>Tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Zh.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Zh.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},QE=Symbol("_vtc");function YE(e,t,n){const r=e[QE];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const bo=Symbol("_vod"),ap=Symbol("_vsh"),lp={beforeMount(e,{value:t},{transition:n}){e[bo]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ci(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ci(e,!0),r.enter(e)):r.leave(e,()=>{ci(e,!1)}):ci(e,t))},beforeUnmount(e,{value:t}){ci(e,t)}};function ci(e,t){e.style.display=t?e[bo]:"none",e[ap]=!t}const XE=Symbol(""),JE=/(^|;)\s*display\s*:/;function ZE(e,t,n){const r=e.style,i=Ut(n);let s=!1;if(n&&!i){if(t)if(Ut(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&co(r,a,"")}else for(const o in t)n[o]==null&&co(r,o,"");for(const o in n)o==="display"&&(s=!0),co(r,o,n[o])}else if(i){if(t!==n){const o=r[XE];o&&(n+=";"+o),r.cssText=n,s=JE.test(n)}}else t&&e.removeAttribute("style");bo in e&&(e[bo]=s?r.display:"",e[ap]&&(r.display="none"))}const tf=/\s*!important$/;function co(e,t,n){if(Y(n))n.forEach(r=>co(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=t1(e,t);tf.test(n)?e.setProperty(fr(r),n.replace(tf,""),"important"):e[r]=n}}const ef=["Webkit","Moz","ms"],Ka={};function t1(e,t){const n=Ka[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return Ka[t]=r;r=Qo(r);for(let i=0;i<ef.length;i++){const s=ef[i]+r;if(s in e)return Ka[t]=s}return t}const nf="http://www.w3.org/1999/xlink";function e1(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(nf,t.slice(6,t.length)):e.setAttributeNS(nf,t,n);else{const s=a0(t);n==null||s&&!pm(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function n1(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=pm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function wr(e,t,n,r){e.addEventListener(t,n,r)}function r1(e,t,n,r){e.removeEventListener(t,n,r)}const rf=Symbol("_vei");function i1(e,t,n,r,i=null){const s=e[rf]||(e[rf]={}),o=s[t];if(r&&o)o.value=r;else{const[a,l]=s1(t);if(r){const c=s[t]=l1(r,i);wr(e,a,c,l)}else o&&(r1(e,a,o,l),s[t]=void 0)}}const sf=/(?:Once|Passive|Capture)$/;function s1(e){let t;if(sf.test(e)){t={};let r;for(;r=e.match(sf);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fr(e.slice(2)),t]}let Ga=0;const o1=Promise.resolve(),a1=()=>Ga||(o1.then(()=>Ga=0),Ga=Date.now());function l1(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(c1(r,n.value),t,5,[r])};return n.value=e,n.attached=a1(),n}function c1(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const of=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,u1=(e,t,n,r,i,s,o,a,l)=>{const c=i==="svg";t==="class"?YE(e,r,c):t==="style"?ZE(e,n,r):Ko(t)?Oc(t)||i1(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):h1(e,t,r,c))?n1(e,t,r,s,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),e1(e,t,r,c))};function h1(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&of(t)&&nt(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return of(t)&&Ut(n)?!1:t in e}const af=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>so(t,n):t};function f1(e){e.target.composing=!0}function lf(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Wa=Symbol("_assign"),lP={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Wa]=af(i);const s=r||i.props&&i.props.type==="number";wr(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=Sl(a)),e[Wa](a)}),n&&wr(e,"change",()=>{e.value=e.value.trim()}),t||(wr(e,"compositionstart",f1),wr(e,"compositionend",lf),wr(e,"change",lf))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e[Wa]=af(s),e.composing)return;const o=(i||e.type==="number")&&!/^0\d/.test(e.value)?Sl(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},d1=["ctrl","shift","alt","meta"],m1={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>d1.some(n=>e[`${n}Key`]&&!t.includes(n))},Pr=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<t.length;o++){const a=m1[t[o]];if(a&&a(i,t))return}return e(i,...s)})},p1=Ht({patchProp:u1},WE);let cf;function g1(){return cf||(cf=IE(p1))}const _1=(...e)=>{const t=g1().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=v1(r);if(!i)return;const s=t._component;!nt(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,y1(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function y1(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function v1(e){return Ut(e)?document.querySelector(e):e}function uf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uf(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function To(e){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},To(e)}function pe(e,t,n){return t=T1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function w1(e,t){if(e==null)return{};var n=E1(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function b1(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function T1(e){var t=b1(e,"string");return typeof t=="symbol"?t:String(t)}var I1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cp={exports:{}};(function(e){(function(t){var n=function(_,y,P){if(!c(y)||h(y)||f(y)||m(y)||l(y))return y;var k,q=0,F=0;if(u(y))for(k=[],F=y.length;q<F;q++)k.push(n(_,y[q],P));else{k={};for(var rt in y)Object.prototype.hasOwnProperty.call(y,rt)&&(k[_(rt,P)]=n(_,y[rt],P))}return k},r=function(_,y){y=y||{};var P=y.separator||"_",k=y.split||/(?=[A-Z])/;return _.split(k).join(P)},i=function(_){return E(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(y,P){return P?P.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var y=i(_);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(_,y){return r(_,y).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},h=function(_){return a.call(_)=="[object Date]"},f=function(_){return a.call(_)=="[object RegExp]"},m=function(_){return a.call(_)=="[object Boolean]"},E=function(_){return _=_-0,_===_},v=function(_,y){var P=y&&"process"in y?y.process:y;return typeof P!="function"?_:function(k,q){return P(k,_,q)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,y){return n(v(i,y),_)},decamelizeKeys:function(_,y){return n(v(o,y),_,y)},pascalizeKeys:function(_,y){return n(v(s,y),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(I1)})(cp);var A1=cp.exports,R1=["class","style"];function S1(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=A1.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function P1(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return up(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=P1(u);break;case"style":l.style=S1(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=w1(n,R1);return Zc(e.tag,rn(rn(rn({},t),{},{class:i.class,style:rn(rn({},i.style),o)},i.attrs),a),r)}var hp=!1;try{hp=!0}catch{}function C1(){if(!hp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qa(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function x1(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function hf(e){if(e&&To(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Rl.icon)return Rl.icon(e);if(e===null)return null;if(To(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var k1=Qc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Yt(function(){return hf(t.icon)}),s=Yt(function(){return Qa("classes",x1(t))}),o=Yt(function(){return Qa("transform",typeof t.transform=="string"?Rl.transform(t.transform):t.transform)}),a=Yt(function(){return Qa("mask",hf(t.mask))}),l=Yt(function(){return Mv(i.value,rn(rn(rn(rn({},s.value),o.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});nr(l,function(u){if(!u)return C1("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=Yt(function(){return l.value?up(l.value.abstract[0],{},r):null});return function(){return c.value}}});const V1="https://www.youtube-nocookie.com",D1="https://www.youtube.com",fp="vue-youtube";var tu=(e=>(e[e.UNSTARTED=-1]="UNSTARTED",e[e.ENDED=0]="ENDED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.BUFFERING=3]="BUFFERING",e[e.VIDEO_CUED=5]="VIDEO_CUED",e))(tu||{});function O1(e){const t=he(e);return(t==null?void 0:t.$el)??t}const N1=e=>({playerVars:e.playerVars??{},cookie:e.cookie??!0,height:e.height??720,width:e.width??1280}),M1=()=>{const e=Oe(fp);if(!e)throw new Error("You may forget to apply app.use(manager). See https://vue-youtube.github.io/docs/usage/manager.html for more information");return e},L1=e=>{const t={install(n){var r;n.provide(fp,t),(r=this._state.options.deferLoading)!=null&&r.enabled||this._insert()},register(n,r){var i;const s=n.id||`vue-youtube-${this._state.counter++}`,o=this._state.players.get(s);if(o!==void 0){o({factory:this._state.factory,id:s});return}this._state.factory===void 0?(this._state.backlog.set(s,r),(i=this._state.options.deferLoading)!=null&&i.enabled&&this._state.options.deferLoading.autoLoad&&this._insert()):r({factory:this._state.factory,id:s})},load(){this._state.factory===void 0&&this._insert()},_insert(){var n;const r=document.createElement("script");r.src="https://www.youtube.com/player_api";const i=document.querySelectorAll("script")[0];(n=i.parentNode)==null||n.insertBefore(r,i),window.onYouTubeIframeAPIReady=()=>{this._state.factory=window.YT;for(const[s,o]of this._state.backlog.entries())this._state.backlog.delete(s),this._state.players.set(s,o),o({factory:this._state.factory,id:s})}},_state:{backlog:new Map,players:new Map,options:e||{deferLoading:{enabled:!1,autoLoad:!1}},factory:void 0,counter:1}};return t},F1=(e,t,n={})=>{const{playerVars:r,cookie:i,height:s,width:o}=N1(n),a=i?D1:V1,l=M1(),c=new Array,u=new Array,h=new Array,f=new Array,m=new Array,E=new Array,v=Vm(),I=Wt(e),_=Wt(!1),y=Wt(!1),P=(it,st)=>{for(const ot of st)ot(it)},k=(...it)=>{c.push(...it)},q=(...it)=>{u.push(...it)},F=(...it)=>{h.push(...it)},rt=(...it)=>{f.push(...it)},xt=(...it)=>{m.push(...it)},St=(...it)=>{E.push(...it)},Mt=()=>{var it,st,ot;const X=(it=v.value)==null?void 0:it.getPlayerState();if(X&&X===tu.PLAYING){(st=v.value)==null||st.pauseVideo();return}(ot=v.value)==null||ot.playVideo()},Ue=()=>{var it,st;if((it=v.value)!=null&&it.isMuted()){v.value.unMute();return}(st=v.value)==null||st.mute()},tn=()=>{var it,st;if(_.value){(it=v.value)==null||it.setShuffle(!1),_.value=!1;return}(st=v.value)==null||st.setShuffle(!0),_.value=!0},Te=()=>{var it,st;if(y.value){(it=v.value)==null||it.setLoop(!1),y.value=!1;return}(st=v.value)==null||st.setLoop(!0),y.value=!0},jn=nr(I,it=>{var st;(st=v.value)==null||st.loadVideoById(it)});return ms(()=>{const it=O1(t);it&&l.register(it,({factory:st,id:ot})=>{it.id=ot,v.value=new st.Player(ot,{videoId:he(I),playerVars:r,height:s,width:o,host:a,events:{onPlaybackQualityChange:X=>{P(X,c)},onPlaybackRateChange:X=>{P(X,u)},onStateChange:X=>{P(X,h)},onApiChange:X=>{P(X,f)},onError:X=>{P(X,m)},onReady:X=>{P(X,E)}}})})}),ea(()=>{var it;(it=v.value)==null||it.destroy(),jn()}),{instance:v,togglePlay:Mt,toggleMute:Ue,toggleLoop:Te,toggleShuffle:tn,onPlaybackQualityChange:k,onPlaybackRateChange:q,onStateChange:F,onApiChange:rt,onError:xt,onReady:St}},U1={class:"footer"},$1={class:"footer-container"},B1=D("div",{class:"footer-line"},[_e(" Powered by "),D("a",{href:"https://gohugo.io/",target:"_blank",rel:"noopener noreferrer",title:"Hugo 0.113.0"},"Hugo"),_e(" | Theme - "),D("a",{href:"https://github.com/HEIGE-PCloud/DoIt",target:"_blank",rel:"noopener noreferrer",title:"DoIt 0.4.0"},[D("i",{class:"far fa-edit fa-fw"}),_e(" DoIt ")])],-1),j1={class:"footer-line"},z1=D("i",{class:"far fa-copyright fa-fw"},null,-1),q1={itemprop:"copyrightYear"},H1={class:"author",itemprop:"copyrightHolder"},K1=["href"],G1=D("span",{class:"license"},[D("a",{rel:"license external nofollow noopener noreffer",href:"https://creativecommons.org/licenses/by-nc/4.0/",target:"_blank"},"CC BY-NC 4.0")],-1),W1=D("div",{class:"footer-line"},null,-1),Q1=D("div",{class:"footer-line"},null,-1),Y1={__name:"Footer",setup(e){const t=Jr({name:"PCloud",url:"https://github.com/HEIGE-PCloud",copyrightYear:[2019,2023]});return(n,r)=>(Bt(),jt("footer",U1,[D("div",$1,[B1,D("div",j1,[z1,D("span",q1,on(t.copyrightYear[0])+" - "+on(t.copyrightYear[1]),1),D("span",H1,[_e("  "),D("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},on(t.name),9,K1)]),_e(" |  "),G1]),W1,Q1])]))}};class X1{constructor(){this.THEMES={light:{colorScheme:"light",nextTheme:"dark",nextColorScheme:"dark"},dark:{colorScheme:"dark",nextTheme:"black",nextColorScheme:"dark"},black:{colorScheme:"dark",nextTheme:"light",nextColorScheme:"light"}},this.currentTheme=localStorage.getItem("theme")||"light",this.currentColorScheme=this.THEMES[this.currentTheme].colorScheme,this._setTheme()}switchTheme(){this.currentTheme=this.THEMES[this.currentTheme].nextTheme,this.currentColorScheme=this.THEMES[this.currentTheme].nextColorScheme,this._setTheme(),localStorage.setItem("theme",this.currentTheme)}_setTheme(){document.body.setAttribute("theme",this.currentTheme),document.body.style.colorScheme=this.currentColorScheme}}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const br=typeof document<"u";function J1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const gt=Object.assign;function Ya(e,t){const n={};for(const r in t){const i=t[r];n[r]=Me(i)?i.map(e):e(i)}return n}const Pi=()=>{},Me=Array.isArray,dp=/#/g,Z1=/&/g,tw=/\//g,ew=/=/g,nw=/\?/g,mp=/\+/g,rw=/%5B/g,iw=/%5D/g,pp=/%5E/g,sw=/%60/g,gp=/%7B/g,ow=/%7C/g,_p=/%7D/g,aw=/%20/g;function eu(e){return encodeURI(""+e).replace(ow,"|").replace(rw,"[").replace(iw,"]")}function lw(e){return eu(e).replace(gp,"{").replace(_p,"}").replace(pp,"^")}function $l(e){return eu(e).replace(mp,"%2B").replace(aw,"+").replace(dp,"%23").replace(Z1,"%26").replace(sw,"`").replace(gp,"{").replace(_p,"}").replace(pp,"^")}function cw(e){return $l(e).replace(ew,"%3D")}function uw(e){return eu(e).replace(dp,"%23").replace(nw,"%3F")}function hw(e){return e==null?"":uw(e).replace(tw,"%2F")}function Gi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const fw=/\/$/,dw=e=>e.replace(fw,"");function Xa(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_w(r??t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:Gi(o)}}function mw(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ff(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function pw(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&$r(t.matched[r],n.matched[i])&&yp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function $r(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function yp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gw(e[n],t[n]))return!1;return!0}function gw(e,t){return Me(e)?df(e,t):Me(t)?df(t,e):e===t}function df(e,t){return Me(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function _w(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}var Wi;(function(e){e.pop="pop",e.push="push"})(Wi||(Wi={}));var Ci;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ci||(Ci={}));function yw(e){if(!e)if(br){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),dw(e)}const vw=/^[^#]+#/;function Ew(e,t){return e.replace(vw,"#")+t}function ww(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const sa=()=>({left:window.scrollX,top:window.scrollY});function bw(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=ww(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function mf(e,t){return(history.state?history.state.position-t:-1)+e}const Bl=new Map;function Tw(e,t){Bl.set(e,t)}function Iw(e){const t=Bl.get(e);return Bl.delete(e),t}let Aw=()=>location.protocol+"//"+location.host;function vp(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),ff(l,"")}return ff(n,e)+r+i}function Rw(e,t,n,r){let i=[],s=[],o=null;const a=({state:f})=>{const m=vp(e,location),E=n.value,v=t.value;let I=0;if(f){if(n.value=m,t.value=f,o&&o===E){o=null;return}I=v?f.position-v.position:0}else r(m);i.forEach(_=>{_(n.value,E,{delta:I,type:Wi.pop,direction:I?I>0?Ci.forward:Ci.back:Ci.unknown})})};function l(){o=n.value}function c(f){i.push(f);const m=()=>{const E=i.indexOf(f);E>-1&&i.splice(E,1)};return s.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(gt({},f.state,{scroll:sa()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function pf(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?sa():null}}function Sw(e){const{history:t,location:n}=window,r={value:vp(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:Aw()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(l,c){const u=gt({},t.state,pf(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=gt({},i.value,t.state,{forward:l,scroll:sa()});s(u.current,u,!0);const h=gt({},pf(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Pw(e){e=yw(e);const t=Sw(e),n=Rw(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=gt({location:"",base:e,go:r,createHref:Ew.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Cw(e){return typeof e=="string"||e&&typeof e=="object"}function Ep(e){return typeof e=="string"||typeof e=="symbol"}const En={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wp=Symbol("");var gf;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(gf||(gf={}));function Br(e,t){return gt(new Error,{type:e,[wp]:!0},t)}function nn(e,t){return e instanceof Error&&wp in e&&(t==null||!!(e.type&t))}const _f="[^/]+?",xw={sensitive:!1,strict:!1,start:!0,end:!0},kw=/[.+*?^${}()[\]/\\]/g;function Vw(e,t){const n=gt({},xw,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(kw,"\\$&"),m+=40;else if(f.type===1){const{value:E,repeatable:v,optional:I,regexp:_}=f;s.push({name:E,repeatable:v,optional:I});const y=_||_f;if(y!==_f){m+=10;try{new RegExp(`(${y})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${y}): `+k.message)}}let P=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(P=I&&c.length<2?`(?:/${P})`:"/"+P),I&&(P+="?"),i+=P,m+=20,I&&(m+=-8),v&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",E=s[f-1];h[E.name]=m&&E.repeatable?m.split("/"):m}return h}function l(c){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:v,optional:I}=m,_=E in c?c[E]:"";if(Me(_)&&!v)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const y=Me(_)?_.join("/"):_;if(!y)if(I)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function Dw(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ow(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=Dw(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(yf(r))return 1;if(yf(i))return-1}return i.length-r.length}function yf(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Nw={type:0,value:""},Mw=/[a-zA-Z0-9_]/;function Lw(e){if(!e)return[[]];if(e==="/")return[[Nw]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:Mw.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Fw(e,t,n){const r=Vw(Lw(e.path),n),i=gt(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Uw(e,t){const n=[],r=new Map;t=wf({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,h,f){const m=!f,E=$w(u);E.aliasOf=f&&f.record;const v=wf(t,u),I=[E];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of P)I.push(gt({},E,{components:f?f.record.components:E.components,path:k,aliasOf:f?f.record:E}))}let _,y;for(const P of I){const{path:k}=P;if(h&&k[0]!=="/"){const q=h.record.path,F=q[q.length-1]==="/"?"":"/";P.path=h.record.path+(k&&F+k)}if(_=Fw(P,h,v),f?f.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),m&&u.name&&!Ef(_)&&o(u.name)),E.children){const q=E.children;for(let F=0;F<q.length;F++)s(q[F],_,f&&f.children[F])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return y?()=>{o(y)}:Pi}function o(u){if(Ep(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Ow(u,n[h])>=0&&(u.record.path!==n[h].record.path||!bp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ef(u)&&r.set(u.record.name,u)}function c(u,h){let f,m={},E,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Br(1,{location:u});v=f.record.name,m=gt(vf(h.params,f.keys.filter(y=>!y.optional).concat(f.parent?f.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&vf(u.params,f.keys.map(y=>y.name))),E=f.stringify(m)}else if(u.path!=null)E=u.path,f=n.find(y=>y.re.test(E)),f&&(m=f.parse(E),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!f)throw Br(1,{location:u,currentLocation:h});v=f.record.name,m=gt({},h.params,u.params),E=f.stringify(m)}const I=[];let _=f;for(;_;)I.unshift(_.record),_=_.parent;return{name:v,path:E,params:m,matched:I,meta:jw(I)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function vf(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function $w(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bw(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bw(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ef(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function jw(e){return e.reduce((t,n)=>gt(t,n.meta),{})}function wf(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function bp(e,t){return t.children.some(n=>n===e||bp(e,n))}function zw(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(mp," "),o=s.indexOf("="),a=Gi(o<0?s:s.slice(0,o)),l=o<0?null:Gi(s.slice(o+1));if(a in t){let c=t[a];Me(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function bf(e){let t="";for(let n in e){const r=e[n];if(n=cw(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Me(r)?r.map(s=>s&&$l(s)):[r&&$l(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function qw(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Me(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Hw=Symbol(""),Tf=Symbol(""),nu=Symbol(""),ru=Symbol(""),jl=Symbol("");function ui(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function In(e,t,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Br(4,{from:n,to:t})):f instanceof Error?l(f):Cw(f)?l(Br(2,{from:t,to:f})):(o&&r.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>e.call(r&&r.instances[i],t,n,c));let h=Promise.resolve(u);e.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Ja(e,t,n,r,i=s=>s()){const s=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Kw(l)){const u=(l.__vccOpts||l)[t];u&&s.push(In(u,n,r,o,a,i))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=J1(u)?u.default:u;o.components[a]=h;const m=(h.__vccOpts||h)[t];return m&&In(m,n,r,o,a,i)()}))}}return s}function Kw(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function If(e){const t=Oe(nu),n=Oe(ru),r=Yt(()=>{const l=he(e.to);return t.resolve(l)}),i=Yt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex($r.bind(null,u));if(f>-1)return f;const m=Af(l[c-2]);return c>1&&Af(u)===m&&h[h.length-1].path!==m?h.findIndex($r.bind(null,l[c-2])):f}),s=Yt(()=>i.value>-1&&Yw(n.params,r.value.params)),o=Yt(()=>i.value>-1&&i.value===n.matched.length-1&&yp(n.params,r.value.params));function a(l={}){return Qw(l)?t[he(e.replace)?"replace":"push"](he(e.to)).catch(Pi):Promise.resolve()}return{route:r,href:Yt(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Gw=Qc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:If,setup(e,{slots:t}){const n=Jr(If(e)),{options:r}=Oe(nu),i=Yt(()=>({[Rf(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rf(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Zc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Ww=Gw;function Qw(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Yw(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Me(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Af(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rf=(e,t,n)=>e??t??n,Xw=Qc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Oe(jl),i=Yt(()=>e.route||r.value),s=Oe(Tf,0),o=Yt(()=>{let c=he(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Yt(()=>i.value.matched[o.value]);ao(Tf,Yt(()=>o.value+1)),ao(Hw,a),ao(jl,i);const l=Wt();return nr(()=>[l.value,a.value,e.name],([c,u,h],[f,m,E])=>{u&&(u.instances[h]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!$r(u,m)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return Sf(n.default,{Component:f,route:c});const m=h.props[u],E=m?m===!0?c.params:typeof m=="function"?m(c):m:null,I=Zc(f,gt({},E,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Sf(n.default,{Component:I,route:c})||I}}});function Sf(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Tp=Xw;function Jw(e){const t=Uw(e.routes,e),n=e.parseQuery||zw,r=e.stringifyQuery||bf,i=e.history,s=ui(),o=ui(),a=ui(),l=Vm(En);let c=En;br&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ya.bind(null,b=>""+b),h=Ya.bind(null,hw),f=Ya.bind(null,Gi);function m(b,U){let N,H;return Ep(b)?(N=t.getRecordMatcher(b),H=U):H=b,t.addRoute(H,N)}function E(b){const U=t.getRecordMatcher(b);U&&t.removeRoute(U)}function v(){return t.getRoutes().map(b=>b.record)}function I(b){return!!t.getRecordMatcher(b)}function _(b,U){if(U=gt({},U||l.value),typeof b=="string"){const p=Xa(n,b,U.path),g=t.resolve({path:p.path},U),T=i.createHref(p.fullPath);return gt(p,g,{params:f(g.params),hash:Gi(p.hash),redirectedFrom:void 0,href:T})}let N;if(b.path!=null)N=gt({},b,{path:Xa(n,b.path,U.path).path});else{const p=gt({},b.params);for(const g in p)p[g]==null&&delete p[g];N=gt({},b,{params:h(p)}),U.params=h(U.params)}const H=t.resolve(N,U),pt=b.hash||"";H.params=u(f(H.params));const Pt=mw(r,gt({},b,{hash:lw(pt),path:H.path})),d=i.createHref(Pt);return gt({fullPath:Pt,hash:pt,query:r===bf?qw(b.query):b.query||{}},H,{redirectedFrom:void 0,href:d})}function y(b){return typeof b=="string"?Xa(n,b,l.value.path):gt({},b)}function P(b,U){if(c!==b)return Br(8,{from:U,to:b})}function k(b){return rt(b)}function q(b){return k(gt(y(b),{replace:!0}))}function F(b){const U=b.matched[b.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let H=typeof N=="function"?N(b):N;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=y(H):{path:H},H.params={}),gt({query:b.query,hash:b.hash,params:H.path!=null?{}:b.params},H)}}function rt(b,U){const N=c=_(b),H=l.value,pt=b.state,Pt=b.force,d=b.replace===!0,p=F(N);if(p)return rt(gt(y(p),{state:typeof p=="object"?gt({},pt,p.state):pt,force:Pt,replace:d}),U||N);const g=N;g.redirectedFrom=U;let T;return!Pt&&pw(r,H,N)&&(T=Br(16,{to:g,from:H}),$e(H,H,!0,!1)),(T?Promise.resolve(T):Mt(g,H)).catch(w=>nn(w)?nn(w,2)?w:_n(w):X(w,g,H)).then(w=>{if(w){if(nn(w,2))return rt(gt({replace:d},y(w.to),{state:typeof w.to=="object"?gt({},pt,w.to.state):pt,force:Pt}),U||g)}else w=tn(g,H,!0,d,pt);return Ue(g,H,w),w})}function xt(b,U){const N=P(b,U);return N?Promise.reject(N):Promise.resolve()}function St(b){const U=_r.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(b):b()}function Mt(b,U){let N;const[H,pt,Pt]=Zw(b,U);N=Ja(H.reverse(),"beforeRouteLeave",b,U);for(const p of H)p.leaveGuards.forEach(g=>{N.push(In(g,b,U))});const d=xt.bind(null,b,U);return N.push(d),ne(N).then(()=>{N=[];for(const p of s.list())N.push(In(p,b,U));return N.push(d),ne(N)}).then(()=>{N=Ja(pt,"beforeRouteUpdate",b,U);for(const p of pt)p.updateGuards.forEach(g=>{N.push(In(g,b,U))});return N.push(d),ne(N)}).then(()=>{N=[];for(const p of Pt)if(p.beforeEnter)if(Me(p.beforeEnter))for(const g of p.beforeEnter)N.push(In(g,b,U));else N.push(In(p.beforeEnter,b,U));return N.push(d),ne(N)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),N=Ja(Pt,"beforeRouteEnter",b,U,St),N.push(d),ne(N))).then(()=>{N=[];for(const p of o.list())N.push(In(p,b,U));return N.push(d),ne(N)}).catch(p=>nn(p,8)?p:Promise.reject(p))}function Ue(b,U,N){a.list().forEach(H=>St(()=>H(b,U,N)))}function tn(b,U,N,H,pt){const Pt=P(b,U);if(Pt)return Pt;const d=U===En,p=br?history.state:{};N&&(H||d?i.replace(b.fullPath,gt({scroll:d&&p&&p.scroll},pt)):i.push(b.fullPath,pt)),l.value=b,$e(b,U,N,d),_n()}let Te;function jn(){Te||(Te=i.listen((b,U,N)=>{if(!Vs.listening)return;const H=_(b),pt=F(H);if(pt){rt(gt(pt,{replace:!0}),H).catch(Pi);return}c=H;const Pt=l.value;br&&Tw(mf(Pt.fullPath,N.delta),sa()),Mt(H,Pt).catch(d=>nn(d,12)?d:nn(d,2)?(rt(d.to,H).then(p=>{nn(p,20)&&!N.delta&&N.type===Wi.pop&&i.go(-1,!1)}).catch(Pi),Promise.reject()):(N.delta&&i.go(-N.delta,!1),X(d,H,Pt))).then(d=>{d=d||tn(H,Pt,!1),d&&(N.delta&&!nn(d,8)?i.go(-N.delta,!1):N.type===Wi.pop&&nn(d,20)&&i.go(-1,!1)),Ue(H,Pt,d)}).catch(Pi)}))}let it=ui(),st=ui(),ot;function X(b,U,N){_n(b);const H=st.list();return H.length?H.forEach(pt=>pt(b,U,N)):console.error(b),Promise.reject(b)}function en(){return ot&&l.value!==En?Promise.resolve():new Promise((b,U)=>{it.add([b,U])})}function _n(b){return ot||(ot=!b,jn(),it.list().forEach(([U,N])=>b?N(b):U()),it.reset()),b}function $e(b,U,N,H){const{scrollBehavior:pt}=e;if(!br||!pt)return Promise.resolve();const Pt=!N&&Iw(mf(b.fullPath,0))||(H||!N)&&history.state&&history.state.scroll||null;return Mm().then(()=>pt(b,U,Pt)).then(d=>d&&bw(d)).catch(d=>X(d,b,U))}const me=b=>i.go(b);let gr;const _r=new Set,Vs={currentRoute:l,listening:!0,addRoute:m,removeRoute:E,hasRoute:I,getRoutes:v,resolve:_,options:e,push:k,replace:q,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:st.add,isReady:en,install(b){const U=this;b.component("RouterLink",Ww),b.component("RouterView",Tp),b.config.globalProperties.$router=U,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>he(l)}),br&&!gr&&l.value===En&&(gr=!0,k(i.location).catch(pt=>{}));const N={};for(const pt in En)Object.defineProperty(N,pt,{get:()=>l.value[pt],enumerable:!0});b.provide(nu,U),b.provide(ru,Pm(N)),b.provide(jl,l);const H=b.unmount;_r.add(b),b.unmount=function(){_r.delete(b),_r.size<1&&(c=En,Te&&Te(),Te=null,l.value=En,gr=!1,ot=!1),H()}}};function ne(b){return b.reduce((U,N)=>U.then(()=>St(N)),Promise.resolve())}return Vs}function Zw(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(c=>$r(c,a))?r.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>$r(c,l))||i.push(l))}return[n,r,i]}function tb(){return Oe(ru)}const eb={class:"desktop",id:"header-desktop"},nb={class:"header-wrapper"},rb={class:"header-title"},ib={class:"menu"},sb={class:"menu-inner"},ob=D("span",{class:"menu-item delimiter"},null,-1),ab=D("div",{class:"search-dropdown desktop"},[D("div",{id:"search-dropdown-desktop"})],-1),lb=D("div",{class:"search-dropdown mobile"},[D("div",{id:"search-dropdown-mobile"})],-1),cb={class:"header-container"},ub={class:"header-wrapper"},hb={class:"header-title"},fb=D("span",null,null,-1),db=D("span",null,null,-1),mb=D("span",null,null,-1),pb=[fb,db,mb],gb=D("div",{class:"search-dropdown desktop"},[D("div",{id:"search-dropdown-desktop"})],-1),_b=D("div",{class:"search-dropdown mobile"},[D("div",{id:"search-dropdown-mobile"})],-1),yb={__name:"Header",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=tb(),n=["Albums","Tags"],r=Wt(!1),i=qE(e,"modelValue"),s=new X1,o=()=>{r.value=!r.value};return nr(t,()=>{r.value=!1}),(a,l)=>{const c=or("router-link"),u=or("font-awesome-icon");return Bt(),jt(qt,null,[D("div",{id:"mask",class:Ge({blur:r.value}),onClick:o},null,2),D("header",eb,[D("div",nb,[D("div",rb,[dt(c,{to:"/"},{default:Qn(()=>[_e("Desktop Title")]),_:1})]),D("div",ib,[D("div",sb,[(Bt(),jt(qt,null,qi(n,h=>dt(c,{key:h,class:"menu-item",to:"/"},{default:Qn(()=>[_e(on(h),1)]),_:2},1024)),64)),ob,D("a",{onClick:l[0]||(l[0]=Pr((...h)=>he(s).switchTheme&&he(s).switchTheme(...h),["prevent"])),href:"javascript:void(0);",class:"menu-item theme-switch",title:"switchTheme"},[dt(u,{icon:["fas","adjust"],transform:"rotate-225","fixed-width":""})])])])])]),ab,lb,jm(D("header",{class:Ge(["mobile animate__animated animate__faster",i.value?"animate__fadeInDown":"animate__fadeOutUp"]),id:"header-mobile"},[D("div",cb,[D("div",ub,[D("div",hb,[dt(c,{to:"/"},{default:Qn(()=>[_e(" Mobile Title ")]),_:1})]),D("div",{class:Ge(["menu-toggle",{active:r.value}]),onClick:o,id:"menu-toggle-mobile"},pb,2)]),D("div",{class:Ge(["menu",{active:r.value}]),id:"menu-mobile"},[(Bt(),jt(qt,null,qi(n,h=>dt(c,{key:h,class:"menu-item",to:"/"},{default:Qn(()=>[_e(on(h),1)]),_:2},1024)),64)),D("a",{href:"javascript:void(0);",class:"menu-item theme-switch",title:"Switch Theme",onClick:l[1]||(l[1]=Pr((...h)=>he(s).switchTheme&&he(s).switchTheme(...h),["prevent"]))},[dt(u,{icon:["fas","adjust"],transform:"rotate-225","fixed-width":""})])],2)])],2),[[lp,i.value]]),gb,_b],64)}}},vb=D("div",{id:"back-to-top"},null,-1),Eb={class:"wrapper","header-desktop":""},wb={class:"main"},bb={class:"container"},Tb={href:"#back-to-top",id:"back-to-top-button",class:"fixed-button",title:"Back to Top"},Ib={__name:"App",setup(e){const t=Wt(!0),n=Wt(!1);let r=0;const i=()=>{const s=window.scrollY,o=s===0,a=r-s>0;t.value=o||a,n.value=!o&&a,r=s};return ms(()=>{window.addEventListener("scroll",i)}),ea(()=>{window.removeEventListener("scroll",i)}),(s,o)=>{const a=or("font-awesome-icon");return Bt(),jt(qt,null,[vb,D("div",Eb,[dt(yb,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l)},null,8,["modelValue"]),D("main",wb,[D("div",bb,[dt(he(Tp))])]),dt(Y1),jm(D("div",{id:"fixed-buttons",style:{display:"block"},class:Ge(["animate__animated animate__faster",n.value?"animate__fadeIn":"animate__fadeOut"])},[D("a",Tb,[dt(a,{icon:["fas","arrow-up"],"fixed-width":""})])],2),[[lp,n.value]])])],64)}}},Ab="modulepreload",Rb=function(e){return"/"+e},Pf={},Sb=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(a=>{if(a=Rb(a),a in Pf)return;Pf[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Ab,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Pb={class:"post-meta"},Cb={class:"post-author"},xb={class:"author"},kb=["href"],Vb=D("span",{class:"post-"},"專輯：",-1),Db=D("span",null,"作詞：",-1),Ob=D("span",null,"作曲：",-1),Ip={__name:"SongMeta",props:{song:Object},setup(e){return(t,n)=>{const r=or("font-awesome-icon");return Bt(),jt("div",Pb,[D("span",Cb,[D("span",xb,[dt(r,{icon:["fas","music"],"fixed-width":""}),_e(" 歌手："),D("a",{href:"/artist/"+e.song.artist},on(e.song.artist),9,kb)])]),Vb,Db,Ob])}}};var Cf={};/**
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
 */const Ap=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Nb=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ap(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nb(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Mb;const f=s<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lb=function(e){const t=Ap(e);return Rp.encodeByteArray(t,!0)},Io=function(e){return Lb(e).replace(/\./g,"")},Fb=function(e){try{return Rp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ub(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $b=()=>Ub().__FIREBASE_DEFAULTS__,Bb=()=>{if(typeof process>"u"||typeof Cf>"u")return;const e=Cf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jb=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fb(e[1]);return t&&JSON.parse(t)},iu=()=>{try{return $b()||Bb()||jb()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zb=e=>{var t,n;return(n=(t=iu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qb=e=>{const t=zb(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Sp=()=>{var e;return(e=iu())===null||e===void 0?void 0:e.config};/**
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
 */class Hb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Kb(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),""].join(".")}/**
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
 */function Gb(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wb(){var e;const t=(e=iu())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qb(){return!Wb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yb(){try{return typeof indexedDB=="object"}catch{return!1}}function Xb(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Jb="FirebaseError";class Zr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Jb,Object.setPrototypeOf(this,Zr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pp.prototype.create)}}class Pp{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Zb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zr(i,a,r)}}function Zb(e,t){return e.replace(tT,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const tT=/\{\$([^}]+)}/g;function zl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(xf(s)&&xf(o)){if(!zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xf(e){return e!==null&&typeof e=="object"}/**
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
 */function jr(e){return e&&e._delegate?e._delegate:e}class Qi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class eT{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Hb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rT(t))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Hn){return this.instances.has(t)}getOptions(t=Hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nT(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Hn){return this.component?this.component.multipleInstances?t:Hn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nT(e){return e===Hn?void 0:e}function rT(e){return e.instantiationMode==="EAGER"}/**
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
 */class iT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new eT(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ht;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ht||(ht={}));const sT={debug:ht.DEBUG,verbose:ht.VERBOSE,info:ht.INFO,warn:ht.WARN,error:ht.ERROR,silent:ht.SILENT},oT=ht.INFO,aT={[ht.DEBUG]:"log",[ht.VERBOSE]:"log",[ht.INFO]:"info",[ht.WARN]:"warn",[ht.ERROR]:"error"},lT=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=aT[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cp{constructor(t){this.name=t,this._logLevel=oT,this._logHandler=lT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ht.DEBUG,...t),this._logHandler(this,ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ht.VERBOSE,...t),this._logHandler(this,ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ht.INFO,...t),this._logHandler(this,ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ht.WARN,...t),this._logHandler(this,ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ht.ERROR,...t),this._logHandler(this,ht.ERROR,...t)}}const cT=(e,t)=>t.some(n=>e instanceof n);let kf,Vf;function uT(){return kf||(kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hT(){return Vf||(Vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xp=new WeakMap,ql=new WeakMap,kp=new WeakMap,Za=new WeakMap,su=new WeakMap;function fT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Pn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xp.set(n,e)}).catch(()=>{}),su.set(t,e),t}function dT(e){if(ql.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ql.set(e,t)}let Hl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ql.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mT(e){Hl=e(Hl)}function pT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(tl(this),t,...n);return kp.set(r,t.sort?t.sort():[t]),Pn(r)}:hT().includes(e)?function(...t){return e.apply(tl(this),t),Pn(xp.get(this))}:function(...t){return Pn(e.apply(tl(this),t))}}function gT(e){return typeof e=="function"?pT(e):(e instanceof IDBTransaction&&dT(e),cT(e,uT())?new Proxy(e,Hl):e)}function Pn(e){if(e instanceof IDBRequest)return fT(e);if(Za.has(e))return Za.get(e);const t=gT(e);return t!==e&&(Za.set(e,t),su.set(t,e)),t}const tl=e=>su.get(e);function _T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pn(o.result),l.oldVersion,l.newVersion,Pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yT=["get","getKey","getAll","getAllKeys","count"],vT=["put","add","delete","clear"],el=new Map;function Df(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(el.get(t))return el.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=vT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return el.set(t,s),s}mT(e=>({...e,get:(t,n,r)=>Df(t,n)||e.get(t,n,r),has:(t,n)=>!!Df(t,n)||e.has(t,n)}));/**
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
 */class ET{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kl="@firebase/app",Of="0.10.2";/**
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
 */const ar=new Cp("@firebase/app"),bT="@firebase/app-compat",TT="@firebase/analytics-compat",IT="@firebase/analytics",AT="@firebase/app-check-compat",RT="@firebase/app-check",ST="@firebase/auth",PT="@firebase/auth-compat",CT="@firebase/database",xT="@firebase/database-compat",kT="@firebase/functions",VT="@firebase/functions-compat",DT="@firebase/installations",OT="@firebase/installations-compat",NT="@firebase/messaging",MT="@firebase/messaging-compat",LT="@firebase/performance",FT="@firebase/performance-compat",UT="@firebase/remote-config",$T="@firebase/remote-config-compat",BT="@firebase/storage",jT="@firebase/storage-compat",zT="@firebase/firestore",qT="@firebase/firestore-compat",HT="firebase",KT="10.11.1";/**
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
 */const Gl="[DEFAULT]",GT={[Kl]:"fire-core",[bT]:"fire-core-compat",[IT]:"fire-analytics",[TT]:"fire-analytics-compat",[RT]:"fire-app-check",[AT]:"fire-app-check-compat",[ST]:"fire-auth",[PT]:"fire-auth-compat",[CT]:"fire-rtdb",[xT]:"fire-rtdb-compat",[kT]:"fire-fn",[VT]:"fire-fn-compat",[DT]:"fire-iid",[OT]:"fire-iid-compat",[NT]:"fire-fcm",[MT]:"fire-fcm-compat",[LT]:"fire-perf",[FT]:"fire-perf-compat",[UT]:"fire-rc",[$T]:"fire-rc-compat",[BT]:"fire-gcs",[jT]:"fire-gcs-compat",[zT]:"fire-fst",[qT]:"fire-fst-compat","fire-js":"fire-js",[HT]:"fire-js-all"};/**
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
 */const Ao=new Map,WT=new Map,Wl=new Map;function Nf(e,t){try{e.container.addComponent(t)}catch(n){ar.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ro(e){const t=e.name;if(Wl.has(t))return ar.debug(`There were multiple attempts to register component ${t}.`),!1;Wl.set(t,e);for(const n of Ao.values())Nf(n,e);for(const n of WT.values())Nf(n,e);return!0}function QT(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const YT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new Pp("app","Firebase",YT);/**
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
 */class XT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const JT=KT;function Vp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=Sp()),!n)throw Cn.create("no-options");const s=Ao.get(i);if(s){if(zl(n,s.options)&&zl(r,s.config))return s;throw Cn.create("duplicate-app",{appName:i})}const o=new iT(i);for(const l of Wl.values())o.addComponent(l);const a=new XT(n,r,o);return Ao.set(i,a),a}function ZT(e=Gl){const t=Ao.get(e);if(!t&&e===Gl&&Sp())return Vp();if(!t)throw Cn.create("no-app",{appName:e});return t}function Or(e,t,n){var r;let i=(r=GT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Ro(new Qi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const tI="firebase-heartbeat-database",eI=1,Yi="firebase-heartbeat-store";let nl=null;function Dp(){return nl||(nl=_T(tI,eI,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Yi)}catch(n){console.warn(n)}}}}).catch(e=>{throw Cn.create("idb-open",{originalErrorMessage:e.message})})),nl}async function nI(e){try{const n=(await Dp()).transaction(Yi),r=await n.objectStore(Yi).get(Op(e));return await n.done,r}catch(t){if(t instanceof Zr)ar.warn(t.message);else{const n=Cn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ar.warn(n.message)}}}async function Mf(e,t){try{const r=(await Dp()).transaction(Yi,"readwrite");await r.objectStore(Yi).put(t,Op(e)),await r.done}catch(n){if(n instanceof Zr)ar.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function Op(e){return`${e.name}!${e.options.appId}`}/**
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
 */const rI=1024,iI=30*24*60*60*1e3;class sI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lf();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lf(),{heartbeatsToSend:r,unsentEntries:i}=oI(this._heartbeatsCache.heartbeats),s=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lf(){return new Date().toISOString().substring(0,10)}function oI(e,t=rI){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ff(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ff(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yb()?Xb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ff(e){return Io(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function lI(e){Ro(new Qi("platform-logger",t=>new ET(t),"PRIVATE")),Ro(new Qi("heartbeat",t=>new sI(t),"PRIVATE")),Or(Kl,Of,e),Or(Kl,Of,"esm2017"),Or("fire-js","")}lI("");var cI="firebase",uI="10.11.1";/**
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
 */Or(cI,uI,"app");var hI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,ou=ou||{},J=hI||self;function oa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function aa(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function fI(e){return Object.prototype.hasOwnProperty.call(e,rl)&&e[rl]||(e[rl]=++dI)}var rl="closure_uid_"+(1e9*Math.random()>>>0),dI=0;function mI(e,t,n){return e.call.apply(e.bind,arguments)}function pI(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ae(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ae=mI:ae=pI,ae.apply(null,arguments)}function Ws(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Gt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function $n(){this.s=this.s,this.o=this.o}var gI=0;$n.prototype.s=!1;$n.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),gI!=0)&&fI(this)};$n.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Np=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function au(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Uf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(oa(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function le(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var _I=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};J.addEventListener("test",n,t),J.removeEventListener("test",n,t)}catch{}return e}();function Xi(e){return/^[\s\xa0]*$/.test(e)}function la(){var e=J.navigator;return e&&(e=e.userAgent)?e:""}function He(e){return la().indexOf(e)!=-1}function lu(e){return lu[" "](e),e}lu[" "]=function(){};function yI(e,t){var n=hA;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var vI=He("Opera"),zr=He("Trident")||He("MSIE"),Mp=He("Edge"),Ql=Mp||zr,Lp=He("Gecko")&&!(la().toLowerCase().indexOf("webkit")!=-1&&!He("Edge"))&&!(He("Trident")||He("MSIE"))&&!He("Edge"),EI=la().toLowerCase().indexOf("webkit")!=-1&&!He("Edge");function Fp(){var e=J.document;return e?e.documentMode:void 0}var Yl;t:{var il="",sl=function(){var e=la();if(Lp)return/rv:([^\);]+)(\)|;)/.exec(e);if(Mp)return/Edge\/([\d\.]+)/.exec(e);if(zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(EI)return/WebKit\/(\S+)/.exec(e);if(vI)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(sl&&(il=sl?sl[1]:""),zr){var ol=Fp();if(ol!=null&&ol>parseFloat(il)){Yl=String(ol);break t}}Yl=il}var Xl;if(J.document&&zr){var $f=Fp();Xl=$f||parseInt(Yl,10)||void 0}else Xl=void 0;var wI=Xl;function Ji(e,t){if(le.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Lp){t:{try{lu(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:bI[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ji.$.h.call(this)}}Gt(Ji,le);var bI={2:"touch",3:"pen",4:"mouse"};Ji.prototype.h=function(){Ji.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ca="closure_listenable_"+(1e6*Math.random()|0),TI=0;function II(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++TI,this.fa=this.ia=!1}function ua(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function cu(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function AI(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Up(e){const t={};for(const n in e)t[n]=e[n];return t}const Bf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $p(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Bf.length;s++)n=Bf[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ha(e){this.src=e,this.g={},this.h=0}ha.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Zl(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new II(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Jl(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Np(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ua(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Zl(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var uu="closure_lm_"+(1e6*Math.random()|0),al={};function Bp(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Bp(e,t[s],n,r,i);return null}return n=qp(n),e&&e[ca]?e.O(t,n,aa(r)?!!r.capture:!!r,i):RI(e,t,n,!1,r,i)}function RI(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=aa(i)?!!i.capture:!!i,a=fu(e);if(a||(e[uu]=a=new ha(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=SI(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)_I||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(zp(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SI(){function e(n){return t.call(e.src,e.listener,n)}const t=PI;return e}function jp(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)jp(e,t[s],n,r,i);else r=aa(r)?!!r.capture:!!r,n=qp(n),e&&e[ca]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Zl(s,n,r,i),-1<n&&(ua(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=fu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zl(t,n,r,i)),(n=-1<e?t[e]:null)&&hu(n))}function hu(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ca])Jl(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(zp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=fu(t))?(Jl(n,e),n.h==0&&(n.src=null,t[uu]=null)):ua(e)}}}function zp(e){return e in al?al[e]:al[e]="on"+e}function PI(e,t){if(e.fa)e=!0;else{t=new Ji(t,this);var n=e.listener,r=e.la||e.src;e.ia&&hu(e),e=n.call(r,t)}return e}function fu(e){return e=e[uu],e instanceof ha?e:null}var ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(e){return typeof e=="function"?e:(e[ll]||(e[ll]=function(t){return e.handleEvent(t)}),e[ll])}function Kt(){$n.call(this),this.i=new ha(this),this.S=this,this.J=null}Gt(Kt,$n);Kt.prototype[ca]=!0;Kt.prototype.removeEventListener=function(e,t,n,r){jp(this,e,t,n,r)};function te(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new le(t,e);else if(t instanceof le)t.target=t.target||e;else{var i=t;t=new le(r,e),$p(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Qs(o,r,!0,t)&&i}if(o=t.g=e,i=Qs(o,r,!0,t)&&i,i=Qs(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Qs(o,r,!1,t)&&i}Kt.prototype.N=function(){if(Kt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ua(n[r]);delete e.g[t],e.h--}}this.J=null};Kt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Kt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Qs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Jl(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var du=J.JSON.stringify;class CI{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function xI(){var e=mu;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class kI{constructor(){this.h=this.g=null}add(t,n){const r=Hp.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hp=new CI(()=>new VI,e=>e.reset());class VI{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DI(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function OI(e){J.setTimeout(()=>{throw e},0)}let Zi,ts=!1,mu=new kI,Kp=()=>{const e=J.Promise.resolve(void 0);Zi=()=>{e.then(NI)}};var NI=()=>{for(var e;e=xI();){try{e.h.call(e.g)}catch(n){OI(n)}var t=Hp;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ts=!1};function fa(e,t){Kt.call(this),this.h=e||1,this.g=t||J,this.j=ae(this.qb,this),this.l=Date.now()}Gt(fa,Kt);O=fa.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),te(this,"tick"),this.ga&&(pu(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pu(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}O.N=function(){fa.$.N.call(this),pu(this),delete this.g};function gu(e,t,n){if(typeof e=="function")n&&(e=ae(e,n));else if(e&&typeof e.handleEvent=="function")e=ae(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:J.setTimeout(e,t||0)}function Gp(e){e.g=gu(()=>{e.g=null,e.i&&(e.i=!1,Gp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class MI extends $n{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gp(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(e){$n.call(this),this.h=e,this.g={}}Gt(es,$n);var jf=[];function Wp(e,t,n,r){Array.isArray(n)||(n&&(jf[0]=n.toString()),n=jf);for(var i=0;i<n.length;i++){var s=Bp(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qp(e){cu(e.g,function(t,n){this.g.hasOwnProperty(n)&&hu(t)},e),e.g={}}es.prototype.N=function(){es.$.N.call(this),Qp(this)};es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function da(){this.g=!0}da.prototype.Ea=function(){this.g=!1};function LI(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function FI(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Cr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+$I(e,n)+(r?" "+r:"")})}function UI(e,t){e.info(function(){return"TIMEOUT: "+t})}da.prototype.info=function(){};function $I(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return du(n)}catch{return t}}var dr={},zf=null;function ma(){return zf=zf||new Kt}dr.Ta="serverreachability";function Yp(e){le.call(this,dr.Ta,e)}Gt(Yp,le);function ns(e){const t=ma();te(t,new Yp(t))}dr.STAT_EVENT="statevent";function Xp(e,t){le.call(this,dr.STAT_EVENT,e),this.stat=t}Gt(Xp,le);function de(e){const t=ma();te(t,new Xp(t,e))}dr.Ua="timingevent";function Jp(e,t){le.call(this,dr.Ua,e),this.size=t}Gt(Jp,le);function gs(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){e()},t)}var pa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Zp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function _u(){}_u.prototype.h=null;function qf(e){return e.h||(e.h=e.i())}function tg(){}var _s={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yu(){le.call(this,"d")}Gt(yu,le);function vu(){le.call(this,"c")}Gt(vu,le);var tc;function ga(){}Gt(ga,_u);ga.prototype.g=function(){return new XMLHttpRequest};ga.prototype.i=function(){return{}};tc=new ga;function ys(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new es(this),this.P=BI,e=Ql?125:void 0,this.V=new fa(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new eg}function eg(){this.i=null,this.g="",this.h=!1}var BI=45e3,ng={},ec={};O=ys.prototype;O.setTimeout=function(e){this.P=e};function nc(e,t,n){e.L=1,e.A=ya(fn(t)),e.u=n,e.S=!0,rg(e,null)}function rg(e,t){e.G=Date.now(),vs(e),e.B=fn(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),hg(n.i,"t",r),e.o=0,n=e.l.J,e.h=new eg,e.g=Vg(e.l,n?t:null,!e.u),0<e.O&&(e.M=new MI(ae(e.Pa,e,e.g),e.O)),Wp(e.U,e.g,"readystatechange",e.nb),t=e.I?Up(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ns(),LI(e.j,e.v,e.B,e.m,e.W,e.u)}O.nb=function(e){e=e.target;const t=this.M;t&&We(e)==3?t.l():this.Pa(e)};O.Pa=function(e){try{if(e==this.g)t:{const u=We(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ql||this.g&&(this.h.h||this.g.ja()||Wf(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ns(3):ns(2)),_a(this);var n=this.g.da();this.ca=n;e:if(ig(this)){var r=Wf(this.g);e="";var i=r.length,s=We(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),xi(this);var o="";break e}this.h.i=new J.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,FI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xi(a)){var c=a;break e}}c=null}if(n=c)Cr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rc(this,n);else{this.i=!1,this.s=3,de(12),Xn(this),xi(this);break t}}this.S?(sg(this,u,o),Ql&&this.i&&u==3&&(Wp(this.U,this.V,"tick",this.mb),this.V.start())):(Cr(this.j,this.m,o,null),rc(this,o)),u==4&&Xn(this),this.i&&!this.J&&(u==4?Pg(this.l,this):(this.i=!1,vs(this)))}else lA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,de(12)):(this.s=0,de(13)),Xn(this),xi(this)}}}catch{}finally{}};function ig(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function sg(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=jI(e,n),i==ec){t==4&&(e.s=4,de(14),r=!1),Cr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ng){e.s=4,de(15),Cr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Cr(e.j,e.m,i,null),rc(e,i);ig(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,de(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Au(t),t.M=!0,de(11))):(Cr(e.j,e.m,n,"[Invalid Chunked Response]"),Xn(e),xi(e))}O.mb=function(){if(this.g){var e=We(this.g),t=this.g.ja();this.o<t.length&&(_a(this),sg(this,e,t),this.i&&e!=4&&vs(this))}};function jI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ec:(n=Number(t.substring(n,r)),isNaN(n)?ng:(r+=1,r+n>t.length?ec:(t=t.slice(r,r+n),e.o=r+n,t)))}O.cancel=function(){this.J=!0,Xn(this)};function vs(e){e.Y=Date.now()+e.P,og(e,e.P)}function og(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=gs(ae(e.lb,e),t)}function _a(e){e.C&&(J.clearTimeout(e.C),e.C=null)}O.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(UI(this.j,this.B),this.L!=2&&(ns(),de(17)),Xn(this),this.s=2,xi(this)):og(this,this.Y-e)};function xi(e){e.l.H==0||e.J||Pg(e.l,e)}function Xn(e){_a(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,pu(e.V),Qp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function rc(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ic(n.i,e))){if(!e.K&&ic(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Co(n),wa(n);else break t;Iu(n),de(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=gs(ae(n.ib,n),6e3));if(1>=mg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jn(n,11)}else if((e.K||n.g==e)&&Co(n),!Xi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Eu(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,bt(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=kg(r,r.J?r.pa:null,r.Y),o.K){pg(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(_a(a),vs(a)),r.g=o}else Rg(r);0<n.j.length&&ba(n)}else c[0]!="stop"&&c[0]!="close"||Jn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jn(n,7):Tu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ns(4)}catch{}}function zI(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(oa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function qI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(oa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ag(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(oa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=qI(e),r=zI(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var lg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HI(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof rr){this.h=e.h,So(this,e.j),this.s=e.s,this.g=e.g,Po(this,e.m),this.l=e.l;var t=e.i,n=new rs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Hf(this,n),this.o=e.o}else e&&(t=String(e).match(lg))?(this.h=!1,So(this,t[1]||"",!0),this.s=gi(t[2]||""),this.g=gi(t[3]||"",!0),Po(this,t[4]),this.l=gi(t[5]||"",!0),Hf(this,t[6]||"",!0),this.o=gi(t[7]||"")):(this.h=!1,this.i=new rs(null,this.h))}rr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_i(t,Kf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(_i(t,Kf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(_i(n,n.charAt(0)=="/"?WI:GI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_i(n,YI)),e.join("")};function fn(e){return new rr(e)}function So(e,t,n){e.j=n?gi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Po(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Hf(e,t,n){t instanceof rs?(e.i=t,XI(e.i,e.h)):(n||(t=_i(t,QI)),e.i=new rs(t,e.h))}function bt(e,t,n){e.i.set(t,n)}function ya(e){return bt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function gi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _i(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,KI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function KI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Kf=/[#\/\?@]/g,GI=/[#\?:]/g,WI=/[#\?]/g,QI=/[#\?@]/g,YI=/#/g;function rs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bn(e){e.g||(e.g=new Map,e.h=0,e.i&&HI(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=rs.prototype;O.add=function(e,t){Bn(this),this.i=null,e=ti(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function cg(e,t){Bn(e),t=ti(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ug(e,t){return Bn(e),t=ti(e,t),e.g.has(t)}O.forEach=function(e,t){Bn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};O.ta=function(){Bn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};O.Z=function(e){Bn(this);let t=[];if(typeof e=="string")ug(this,e)&&(t=t.concat(this.g.get(ti(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};O.set=function(e,t){return Bn(this),this.i=null,e=ti(this,e),ug(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function hg(e,t,n){cg(e,t),0<n.length&&(e.i=null,e.g.set(ti(e,t),au(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ti(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function XI(e,t){t&&!e.j&&(Bn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cg(this,r),hg(this,i,n))},e)),e.j=t}var JI=class{constructor(e,t){this.g=e,this.map=t}};function fg(e){this.l=e||ZI,J.PerformanceNavigationTiming?(e=J.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZI=10;function dg(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function mg(e){return e.h?1:e.g?e.g.size:0}function ic(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Eu(e,t){e.g?e.g.add(t):e.h=t}function pg(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}fg.prototype.cancel=function(){if(this.i=gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function gg(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return au(e.i)}var tA=class{stringify(e){return J.JSON.stringify(e,void 0)}parse(e){return J.JSON.parse(e,void 0)}};function eA(){this.g=new tA}function nA(e,t,n){const r=n||"";try{ag(e,function(i,s){let o=i;aa(i)&&(o=du(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function rA(e,t){const n=new da;if(J.Image){const r=new Image;r.onload=Ws(Ys,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ws(Ys,n,r,"TestLoadImage: error",!1,t),r.onabort=Ws(Ys,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ws(Ys,n,r,"TestLoadImage: timeout",!1,t),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ys(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Es(e){this.l=e.ec||null,this.j=e.ob||!1}Gt(Es,_u);Es.prototype.g=function(){return new va(this.l,this.j)};Es.prototype.i=function(e){return function(){return e}}({});function va(e,t){Kt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=wu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gt(va,Kt);var wu=0;O=va.prototype;O.open=function(e,t){if(this.readyState!=wu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,is(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||J).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=wu};O.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_g(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function _g(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}O.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ws(this):is(this),this.readyState==3&&_g(this)}};O.Za=function(e){this.g&&(this.response=this.responseText=e,ws(this))};O.Ya=function(e){this.g&&(this.response=e,ws(this))};O.ka=function(){this.g&&ws(this)};function ws(e){e.readyState=4,e.l=null,e.j=null,e.A=null,is(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function is(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var iA=J.JSON.parse;function Vt(e){Kt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yg,this.L=this.M=!1}Gt(Vt,Kt);var yg="",sA=/^https?$/i,oA=["POST","PUT"];O=Vt.prototype;O.Oa=function(e){this.M=e};O.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tc.g(),this.C=this.u?qf(this.u):qf(tc),this.g.onreadystatechange=ae(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Gf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=J.FormData&&e instanceof J.FormData,!(0<=Np(oA,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wg(this),0<this.B&&((this.L=aA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ae(this.ua,this)):this.A=gu(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Gf(this,s)}};function aA(e){return zr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}O.ua=function(){typeof ou<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,te(this,"timeout"),this.abort(8))};function Gf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vg(e),Ea(e)}function vg(e){e.F||(e.F=!0,te(e,"complete"),te(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Ea(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ea(this,!0)),Vt.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Eg(this):this.kb())};O.kb=function(){Eg(this)};function Eg(e){if(e.h&&typeof ou<"u"&&(!e.C[1]||We(e)!=4||e.da()!=2)){if(e.v&&We(e)==4)gu(e.La,0,e);else if(te(e,"readystatechange"),We(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(lg)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),r=!sA.test(i?i.toLowerCase():"")}n=r}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var s=2<We(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",vg(e)}}finally{Ea(e)}}}}function Ea(e,t){if(e.g){wg(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||te(e,"ready");try{n.onreadystatechange=r}catch{}}}function wg(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(J.clearTimeout(e.A),e.A=null)}O.isActive=function(){return!!this.g};function We(e){return e.g?e.g.readyState:0}O.da=function(){try{return 2<We(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),iA(t)}};function Wf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case yg:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function lA(e){const t={};e=(e.g&&2<=We(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Xi(e[r]))continue;var n=DI(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}AI(t,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bg(e){let t="";return cu(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function bu(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=bg(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):bt(e,t,n))}function hi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Tg(e){this.Ga=0,this.j=[],this.l=new da,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=hi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=hi("baseRetryDelayMs",5e3,e),this.hb=hi("retryDelaySeedMs",1e4,e),this.eb=hi("forwardChannelMaxRetries",2,e),this.xa=hi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new fg(e&&e.concurrentRequestLimit),this.Ja=new eA,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=Tg.prototype;O.ra=8;O.H=1;function Tu(e){if(Ig(e),e.H==3){var t=e.W++,n=fn(e.I);if(bt(n,"SID",e.K),bt(n,"RID",t),bt(n,"TYPE","terminate"),bs(e,n),t=new ys(e,e.l,t),t.L=2,t.A=ya(fn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&J.Image&&(new Image().src=t.A,n=!0),n||(t.g=Vg(t.l,null),t.g.ha(t.A)),t.G=Date.now(),vs(t)}xg(e)}function wa(e){e.g&&(Au(e),e.g.cancel(),e.g=null)}function Ig(e){wa(e),e.u&&(J.clearTimeout(e.u),e.u=null),Co(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&J.clearTimeout(e.m),e.m=null)}function ba(e){if(!dg(e.i)&&!e.m){e.m=!0;var t=e.Na;Zi||Kp(),ts||(Zi(),ts=!0),mu.add(t,e),e.C=0}}function cA(e,t){return mg(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=gs(ae(e.Na,e,t),Cg(e,e.C)),e.C++,!0)}O.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ys(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Up(s),$p(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ag(this,i,t),n=fn(this.I),bt(n,"RID",e),bt(n,"CVER",22),this.F&&bt(n,"X-HTTP-Session-Id",this.F),bs(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(bg(s)))+"&"+t:this.o&&bu(n,this.o,s)),Eu(this.i,i),this.bb&&bt(n,"TYPE","init"),this.P?(bt(n,"$req",t),bt(n,"SID","null"),i.aa=!0,nc(i,n,null)):nc(i,n,t),this.H=2}}else this.H==3&&(e?Qf(this,e):this.j.length==0||dg(this.i)||Qf(this))};function Qf(e,t){var n;t?n=t.m:n=e.W++;const r=fn(e.I);bt(r,"SID",e.K),bt(r,"RID",n),bt(r,"AID",e.V),bs(e,r),e.o&&e.s&&bu(r,e.o,e.s),n=new ys(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ag(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Eu(e.i,n),nc(n,r,t)}function bs(e,t){e.na&&cu(e.na,function(n,r){bt(t,r,n)}),e.h&&ag({},function(n,r){bt(t,r,n)})}function Ag(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ae(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{nA(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Rg(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Zi||Kp(),ts||(Zi(),ts=!0),mu.add(t,e),e.A=0}}function Iu(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=gs(ae(e.Ma,e),Cg(e,e.A)),e.A++,!0)}O.Ma=function(){if(this.u=null,Sg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=gs(ae(this.jb,this),e)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,de(10),wa(this),Sg(this))};function Au(e){e.B!=null&&(J.clearTimeout(e.B),e.B=null)}function Sg(e){e.g=new ys(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=fn(e.wa);bt(t,"RID","rpc"),bt(t,"SID",e.K),bt(t,"AID",e.V),bt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&bt(t,"TO",e.qa),bt(t,"TYPE","xmlhttp"),bs(e,t),e.o&&e.s&&bu(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ya(fn(t)),n.u=null,n.S=!0,rg(n,e)}O.ib=function(){this.v!=null&&(this.v=null,wa(this),Iu(this),de(19))};function Co(e){e.v!=null&&(J.clearTimeout(e.v),e.v=null)}function Pg(e,t){var n=null;if(e.g==t){Co(e),Au(e),e.g=null;var r=2}else if(ic(e.i,t))n=t.F,pg(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=ma(),te(r,new Jp(r,n)),ba(e)}else Rg(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&cA(e,t)||r==2&&Iu(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Jn(e,5);break;case 4:Jn(e,10);break;case 3:Jn(e,6);break;default:Jn(e,2)}}}function Cg(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Jn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ae(e.pb,e);n||(n=new rr("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||So(n,"https"),ya(n)),rA(n.toString(),r)}else de(2);e.H=0,e.h&&e.h.za(t),xg(e),Ig(e)}O.pb=function(e){e?(this.l.info("Successfully pinged google.com"),de(2)):(this.l.info("Failed to ping google.com"),de(1))};function xg(e){if(e.H=0,e.ma=[],e.h){const t=gg(e.i);(t.length!=0||e.j.length!=0)&&(Uf(e.ma,t),Uf(e.ma,e.j),e.i.i.length=0,au(e.j),e.j.length=0),e.h.ya()}}function kg(e,t,n){var r=n instanceof rr?fn(n):new rr(n);if(r.g!="")t&&(r.g=t+"."+r.g),Po(r,r.m);else{var i=J.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new rr(null);r&&So(s,r),t&&(s.g=t),i&&Po(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&bt(r,n,t),bt(r,"VER",e.ra),bs(e,r),r}function Vg(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Vt(new Es({ob:n})):new Vt(e.va),t.Oa(e.J),t}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function Dg(){}O=Dg.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function xo(){if(zr&&!(10<=Number(wI)))throw Error("Environmental error: no available transport.")}xo.prototype.g=function(e,t){return new we(e,t)};function we(e,t){Kt.call(this),this.g=new Tg(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Xi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Xi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ei(this)}Gt(we,Kt);we.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;de(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=kg(e,null,e.Y),ba(e)};we.prototype.close=function(){Tu(this.g)};we.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=du(e),e=n);t.j.push(new JI(t.fb++,e)),t.H==3&&ba(t)};we.prototype.N=function(){this.g.h=null,delete this.j,Tu(this.g),delete this.g,we.$.N.call(this)};function Og(e){yu.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Gt(Og,yu);function Ng(){vu.call(this),this.status=1}Gt(Ng,vu);function ei(e){this.g=e}Gt(ei,Dg);ei.prototype.Ba=function(){te(this.g,"a")};ei.prototype.Aa=function(e){te(this.g,new Og(e))};ei.prototype.za=function(e){te(this.g,new Ng)};ei.prototype.ya=function(){te(this.g,"b")};function uA(){this.blockSize=-1}function Le(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Gt(Le,uA);Le.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cl(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Le.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)cl(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){cl(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){cl(this,r),i=0;break}}this.h=i,this.i+=t};Le.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function _t(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var hA={};function Ru(e){return-128<=e&&128>e?yI(e,function(t){return new _t([t|0],0>t?-1:0)}):new _t([e|0],0>e?-1:0)}function Qe(e){if(isNaN(e)||!isFinite(e))return Nr;if(0>e)return Xt(Qe(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=sc;return new _t(t,0)}function Mg(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Xt(Mg(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qe(Math.pow(t,8)),r=Nr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Qe(Math.pow(t,s)),r=r.R(s).add(Qe(o))):(r=r.R(n),r=r.add(Qe(o)))}return r}var sc=4294967296,Nr=Ru(0),oc=Ru(1),Yf=Ru(16777216);O=_t.prototype;O.ea=function(){if(Ie(this))return-Xt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:sc+r)*t,t*=sc}return e};O.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(sn(this))return"0";if(Ie(this))return"-"+Xt(this).toString(e);for(var t=Qe(Math.pow(e,6)),n=this,r="";;){var i=Vo(n,t).g;n=ko(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,sn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function sn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ie(e){return e.h==-1}O.X=function(e){return e=ko(this,e),Ie(e)?-1:sn(e)?0:1};function Xt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new _t(n,~e.h).add(oc)}O.abs=function(){return Ie(this)?Xt(this):this};O.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _t(n,n[n.length-1]&-2147483648?-1:0)};function ko(e,t){return e.add(Xt(t))}O.R=function(e){if(sn(this)||sn(e))return Nr;if(Ie(this))return Ie(e)?Xt(this).R(Xt(e)):Xt(Xt(this).R(e));if(Ie(e))return Xt(this.R(Xt(e)));if(0>this.X(Yf)&&0>e.X(Yf))return Qe(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Xs(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Xs(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Xs(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Xs(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new _t(n,0)};function Xs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function fi(e,t){this.g=e,this.h=t}function Vo(e,t){if(sn(t))throw Error("division by zero");if(sn(e))return new fi(Nr,Nr);if(Ie(e))return t=Vo(Xt(e),t),new fi(Xt(t.g),Xt(t.h));if(Ie(t))return t=Vo(e,Xt(t)),new fi(Xt(t.g),t.h);if(30<e.g.length){if(Ie(e)||Ie(t))throw Error("slowDivide_ only works with positive integers.");for(var n=oc,r=t;0>=r.X(e);)n=Xf(n),r=Xf(r);var i=Er(n,1),s=Er(r,1);for(r=Er(r,2),n=Er(n,2);!sn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Er(r,1),n=Er(n,1)}return t=ko(e,i.R(t)),new fi(i,t)}for(i=Nr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Qe(n),o=s.R(t);Ie(o)||0<o.X(e);)n-=r,s=Qe(n),o=s.R(t);sn(s)&&(s=oc),i=i.add(s),e=ko(e,o)}return new fi(i,e)}O.gb=function(e){return Vo(this,e).h};O.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new _t(n,this.h&e.h)};O.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new _t(n,this.h|e.h)};O.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new _t(n,this.h^e.h)};function Xf(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new _t(n,e.h)}function Er(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new _t(i,e.h)}xo.prototype.createWebChannel=xo.prototype.g;we.prototype.send=we.prototype.u;we.prototype.open=we.prototype.m;we.prototype.close=we.prototype.close;pa.NO_ERROR=0;pa.TIMEOUT=8;pa.HTTP_ERROR=6;Zp.COMPLETE="complete";tg.EventType=_s;_s.OPEN="a";_s.CLOSE="b";_s.ERROR="c";_s.MESSAGE="d";Kt.prototype.listen=Kt.prototype.O;Vt.prototype.listenOnce=Vt.prototype.P;Vt.prototype.getLastError=Vt.prototype.Sa;Vt.prototype.getLastErrorCode=Vt.prototype.Ia;Vt.prototype.getStatus=Vt.prototype.da;Vt.prototype.getResponseJson=Vt.prototype.Wa;Vt.prototype.getResponseText=Vt.prototype.ja;Vt.prototype.send=Vt.prototype.ha;Vt.prototype.setWithCredentials=Vt.prototype.Oa;Le.prototype.digest=Le.prototype.l;Le.prototype.reset=Le.prototype.reset;Le.prototype.update=Le.prototype.j;_t.prototype.add=_t.prototype.add;_t.prototype.multiply=_t.prototype.R;_t.prototype.modulo=_t.prototype.gb;_t.prototype.compare=_t.prototype.X;_t.prototype.toNumber=_t.prototype.ea;_t.prototype.toString=_t.prototype.toString;_t.prototype.getBits=_t.prototype.D;_t.fromNumber=Qe;_t.fromString=Mg;var fA=function(){return new xo},dA=function(){return ma()},ul=pa,mA=Zp,pA=dr,Jf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gA=Es,Js=tg,_A=Vt,yA=Le,Mr=_t;const Zf="@firebase/firestore";/**
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
 */class ie{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
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
 */let ni="10.11.1";/**
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
 */const lr=new Cp("@firebase/firestore");function di(){return lr.logLevel}function B(e,...t){if(lr.logLevel<=ht.DEBUG){const n=t.map(Su);lr.debug(`Firestore (${ni}): ${e}`,...n)}}function dn(e,...t){if(lr.logLevel<=ht.ERROR){const n=t.map(Su);lr.error(`Firestore (${ni}): ${e}`,...n)}}function qr(e,...t){if(lr.logLevel<=ht.WARN){const n=t.map(Su);lr.warn(`Firestore (${ni}): ${e}`,...n)}}function Su(e){if(typeof e=="string")return e;try{/**
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
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+e;throw dn(t),new Error(t)}function Et(e,t){e||Q()}function et(e,t){return e}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Zr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Lg{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ie.UNAUTHENTICATED))}shutdown(){}}class EA{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wA{constructor(t){this.t=t,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Et(typeof r.accessToken=="string"),new Lg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Et(t===null||typeof t=="string"),new ie(t)}}class bA{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TA{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new bA(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AA{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Et(typeof n.token=="string"),this.R=n.token,new IA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function RA(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Fg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=RA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ft(e,t){return e<t?-1:e>t?1:0}function Hr(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Lt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Lt.fromMillis(Date.now())}static fromDate(t){return Lt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ft(this.nanoseconds,t.nanoseconds):ft(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class tt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new tt(t)}static min(){return new tt(new Lt(0,0))}static max(){return new tt(new Lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ss{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ss.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ss?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Tt extends ss{construct(t,n,r){return new Tt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new j(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Tt(n)}static emptyPath(){return new Tt([])}}const SA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends ss{construct(t,n,r){return new Zt(t,n,r)}static isValidIdentifier(t){return SA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Zt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new j(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Zt(n)}static emptyPath(){return new Zt([])}}/**
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
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(Tt.fromString(t))}static fromName(t){return new G(Tt.fromString(t).popFirst(5))}static empty(){return new G(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Tt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new Tt(t.slice()))}}function PA(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=tt.fromTimestamp(r===1e9?new Lt(n+1,0):new Lt(n,r));return new Nn(i,G.empty(),t)}function CA(e){return new Nn(e.readTime,e.key,-1)}class Nn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Nn(tt.min(),G.empty(),-1)}static max(){return new Nn(tt.max(),G.empty(),-1)}}function xA(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=G.comparator(e.documentKey,t.documentKey),n!==0?n:ft(e.largestBatchId,t.largestBatchId))}/**
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
 */const kA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ts(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==kA)throw e;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):R.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):R.reject(n)}static resolve(t){return new R((n,r)=>{n(t)})}static reject(t){return new R((n,r)=>{r(t)})}static waitFor(t){return new R((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=R.resolve(!1);for(const r of t)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new R((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new R((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function DA(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Is(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Pu{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Pu.oe=-1;function Ta(e){return e==null}function Do(e){return e===0&&1/e==-1/0}function OA(e){return typeof e=="number"&&Number.isInteger(e)&&!Do(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function td(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ri(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ug(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ct{constructor(t,n){this.comparator=t,this.root=n||Qt.EMPTY}insert(t,n){return new Ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(t){return new Ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zs(this.root,t,this.comparator,!0)}}class Zs{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Qt.RED,this.left=i??Qt.EMPTY,this.right=s??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Qt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Qt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Qt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(t){this.comparator=t,this.data=new Ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ed(this.data.getIterator())}getIteratorFrom(t){return new ed(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ee)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ee(this.comparator);return n.data=t,n}}class ed{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ve{constructor(t){this.fields=t,t.sort(Zt.comparator)}static empty(){return new Ve([])}unionWith(t){let n=new ee(Zt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ve(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Hr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $g extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ce{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $g("Invalid base64 string: "+s):s}}(t);return new ce(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ce(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ft(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ce.EMPTY_BYTE_STRING=new ce("");const NA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(e){if(Et(!!e),typeof e=="string"){let t=0;const n=NA.exec(e);if(Et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ot(e.seconds),nanos:Ot(e.nanos)}}function Ot(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function cr(e){return typeof e=="string"?ce.fromBase64String(e):ce.fromUint8Array(e)}/**
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
 */function Cu(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xu(e){const t=e.mapValue.fields.__previous_value__;return Cu(t)?xu(t):t}function os(e){const t=Mn(e.mapValue.fields.__local_write_time__.timestampValue);return new Lt(t.seconds,t.nanos)}/**
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
 */class MA{constructor(t,n,r,i,s,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class as{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new as("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof as&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const to={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ur(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cu(e)?4:LA(e)?9007199254740991:10:Q()}function Ze(e,t){if(e===t)return!0;const n=ur(e);if(n!==ur(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return os(e).isEqual(os(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Mn(i.timestampValue),a=Mn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return cr(i.bytesValue).isEqual(cr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Ot(i.geoPointValue.latitude)===Ot(s.geoPointValue.latitude)&&Ot(i.geoPointValue.longitude)===Ot(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ot(i.integerValue)===Ot(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ot(i.doubleValue),a=Ot(s.doubleValue);return o===a?Do(o)===Do(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Hr(e.arrayValue.values||[],t.arrayValue.values||[],Ze);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(td(o)!==td(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ze(o[l],a[l])))return!1;return!0}(e,t);default:return Q()}}function ls(e,t){return(e.values||[]).find(n=>Ze(n,t))!==void 0}function Kr(e,t){if(e===t)return 0;const n=ur(e),r=ur(t);if(n!==r)return ft(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ft(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Ot(s.integerValue||s.doubleValue),l=Ot(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return nd(e.timestampValue,t.timestampValue);case 4:return nd(os(e),os(t));case 5:return ft(e.stringValue,t.stringValue);case 6:return function(s,o){const a=cr(s),l=cr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ft(a[c],l[c]);if(u!==0)return u}return ft(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ft(Ot(s.latitude),Ot(o.latitude));return a!==0?a:ft(Ot(s.longitude),Ot(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Kr(a[c],l[c]);if(u)return u}return ft(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===to.mapValue&&o===to.mapValue)return 0;if(s===to.mapValue)return 1;if(o===to.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=ft(l[h],u[h]);if(f!==0)return f;const m=Kr(a[l[h]],c[u[h]]);if(m!==0)return m}return ft(l.length,u.length)}(e.mapValue,t.mapValue);default:throw Q()}}function nd(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ft(e,t);const n=Mn(e),r=Mn(t),i=ft(n.seconds,r.seconds);return i!==0?i:ft(n.nanos,r.nanos)}function Gr(e){return ac(e)}function ac(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Mn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return cr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return G.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ac(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ac(n.fields[o])}`;return i+"}"}(e.mapValue):Q()}function rd(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function lc(e){return!!e&&"integerValue"in e}function ku(e){return!!e&&"arrayValue"in e}function id(e){return!!e&&"nullValue"in e}function sd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function uo(e){return!!e&&"mapValue"in e}function ki(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ri(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ki(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ki(e.arrayValue.values[n]);return t}return Object.assign({},e)}function LA(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ae{constructor(t){this.value=t}static empty(){return new Ae({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!uo(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ki(n)}setAll(t){let n=Zt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ki(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ze(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];uo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){ri(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ae(ki(this.value))}}function Bg(e){const t=[];return ri(e.fields,(n,r)=>{const i=new Zt([n]);if(uo(r)){const s=Bg(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Ve(t)}/**
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
 */class se{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new se(t,0,tt.min(),tt.min(),tt.min(),Ae.empty(),0)}static newFoundDocument(t,n,r,i){return new se(t,1,n,tt.min(),r,i,0)}static newNoDocument(t,n){return new se(t,2,n,tt.min(),tt.min(),Ae.empty(),0)}static newUnknownDocument(t,n){return new se(t,3,n,tt.min(),tt.min(),Ae.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof se&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oo{constructor(t,n){this.position=t,this.inclusive=n}}function od(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Kr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ad(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ze(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class No{constructor(t,n="asc"){this.field=t,this.dir=n}}function FA(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class jg{}class Nt extends jg{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new $A(t,n,r):n==="array-contains"?new zA(t,r):n==="in"?new qA(t,r):n==="not-in"?new HA(t,r):n==="array-contains-any"?new KA(t,r):new Nt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new BA(t,r):new jA(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&ur(this.value)===ur(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends jg{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Fe(t,n)}matches(t){return zg(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zg(e){return e.op==="and"}function qg(e){return UA(e)&&zg(e)}function UA(e){for(const t of e.filters)if(t instanceof Fe)return!1;return!0}function cc(e){if(e instanceof Nt)return e.field.canonicalString()+e.op.toString()+Gr(e.value);if(qg(e))return e.filters.map(t=>cc(t)).join(",");{const t=e.filters.map(n=>cc(n)).join(",");return`${e.op}(${t})`}}function Hg(e,t){return e instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.field.isEqual(i.field)&&Ze(r.value,i.value)}(e,t):e instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Hg(o,i.filters[a]),!0):!1}(e,t):void Q()}function Kg(e){return e instanceof Nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Gr(n.value)}`}(e):e instanceof Fe?function(n){return n.op.toString()+" {"+n.getFilters().map(Kg).join(" ,")+"}"}(e):"Filter"}class $A extends Nt{constructor(t,n,r){super(t,n,r),this.key=G.fromName(r.referenceValue)}matches(t){const n=G.comparator(t.key,this.key);return this.matchesComparison(n)}}class BA extends Nt{constructor(t,n){super(t,"in",n),this.keys=Gg("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class jA extends Nt{constructor(t,n){super(t,"not-in",n),this.keys=Gg("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Gg(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class zA extends Nt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ku(n)&&ls(n.arrayValue,this.value)}}class qA extends Nt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ls(this.value.arrayValue,n)}}class HA extends Nt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ls(this.value.arrayValue,n)}}class KA extends Nt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ls(this.value.arrayValue,r))}}/**
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
 */class GA{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function ld(e,t=null,n=[],r=[],i=null,s=null,o=null){return new GA(e,t,n,r,i,s,o)}function Vu(e){const t=et(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>cc(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ta(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Gr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Gr(r)).join(",")),t.ue=n}return t.ue}function Du(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!FA(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Hg(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ad(e.startAt,t.startAt)&&ad(e.endAt,t.endAt)}function uc(e){return G.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class As{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function WA(e,t,n,r,i,s,o,a){return new As(e,t,n,r,i,s,o,a)}function Wg(e){return new As(e)}function cd(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Qg(e){return e.collectionGroup!==null}function Vi(e){const t=et(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ee(Zt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new No(s,r))}),n.has(Zt.keyField().canonicalString())||t.ce.push(new No(Zt.keyField(),r))}return t.ce}function Ye(e){const t=et(e);return t.le||(t.le=QA(t,Vi(e))),t.le}function QA(e,t){if(e.limitType==="F")return ld(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new No(i.field,s)});const n=e.endAt?new Oo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Oo(e.startAt.position,e.startAt.inclusive):null;return ld(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function hc(e,t){const n=e.filters.concat([t]);return new As(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function fc(e,t,n){return new As(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ia(e,t){return Du(Ye(e),Ye(t))&&e.limitType===t.limitType}function Yg(e){return`${Vu(Ye(e))}|lt:${e.limitType}`}function Tr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Kg(i)).join(", ")}]`),Ta(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gr(i)).join(",")),`Target(${r})`}(Ye(e))}; limitType=${e.limitType})`}function Aa(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Vi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=od(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Vi(r),i)||r.endAt&&!function(o,a,l){const c=od(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Vi(r),i))}(e,t)}function YA(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xg(e){return(t,n)=>{let r=!1;for(const i of Vi(e)){const s=XA(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XA(e,t,n){const r=e.field.isKeyField()?G.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Kr(l,c):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class ii{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ri(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Ug(this.inner)}size(){return this.innerSize}}/**
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
 */const JA=new Ct(G.comparator);function mn(){return JA}const Jg=new Ct(G.comparator);function yi(...e){let t=Jg;for(const n of e)t=t.insert(n.key,n);return t}function Zg(e){let t=Jg;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Zn(){return Di()}function t_(){return Di()}function Di(){return new ii(e=>e.toString(),(e,t)=>e.isEqual(t))}const ZA=new Ct(G.comparator),t2=new ee(G.comparator);function lt(...e){let t=t2;for(const n of e)t=t.add(n);return t}const e2=new ee(ft);function n2(){return e2}/**
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
 */function e_(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(t)?"-0":t}}function n_(e){return{integerValue:""+e}}function r2(e,t){return OA(t)?n_(t):e_(e,t)}/**
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
 */class Ra{constructor(){this._=void 0}}function i2(e,t,n){return e instanceof Mo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cu(s)&&(s=xu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof cs?i_(e,t):e instanceof us?s_(e,t):function(i,s){const o=r_(i,s),a=ud(o)+ud(i.Pe);return lc(o)&&lc(i.Pe)?n_(a):e_(i.serializer,a)}(e,t)}function s2(e,t,n){return e instanceof cs?i_(e,t):e instanceof us?s_(e,t):n}function r_(e,t){return e instanceof Lo?function(r){return lc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Mo extends Ra{}class cs extends Ra{constructor(t){super(),this.elements=t}}function i_(e,t){const n=o_(t);for(const r of e.elements)n.some(i=>Ze(i,r))||n.push(r);return{arrayValue:{values:n}}}class us extends Ra{constructor(t){super(),this.elements=t}}function s_(e,t){let n=o_(t);for(const r of e.elements)n=n.filter(i=>!Ze(i,r));return{arrayValue:{values:n}}}class Lo extends Ra{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function ud(e){return Ot(e.integerValue||e.doubleValue)}function o_(e){return ku(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function o2(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof cs&&i instanceof cs||r instanceof us&&i instanceof us?Hr(r.elements,i.elements,Ze):r instanceof Lo&&i instanceof Lo?Ze(r.Pe,i.Pe):r instanceof Mo&&i instanceof Mo}(e.transform,t.transform)}class a2{constructor(t,n){this.version=t,this.transformResults=n}}class ln{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ln}static exists(t){return new ln(void 0,t)}static updateTime(t){return new ln(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ho(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Sa{}function a_(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new c_(e.key,ln.none()):new Rs(e.key,e.data,ln.none());{const n=e.data,r=Ae.empty();let i=new ee(Zt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(e.key,r,new Ve(i.toArray()),ln.none())}}function l2(e,t,n){e instanceof Rs?function(i,s,o){const a=i.value.clone(),l=fd(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof mr?function(i,s,o){if(!ho(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=fd(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(l_(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Oi(e,t,n,r){return e instanceof Rs?function(s,o,a,l){if(!ho(s.precondition,o))return a;const c=s.value.clone(),u=dd(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof mr?function(s,o,a,l){if(!ho(s.precondition,o))return a;const c=dd(s.fieldTransforms,l,o),u=o.data;return u.setAll(l_(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return ho(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function c2(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=r_(r.transform,i||null);s!=null&&(n===null&&(n=Ae.empty()),n.set(r.field,s))}return n||null}function hd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hr(r,i,(s,o)=>o2(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Rs extends Sa{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends Sa{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l_(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function fd(e,t,n){const r=new Map;Et(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,s2(o,a,n[i]))}return r}function dd(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,i2(s,o,t))}return r}class c_ extends Sa{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u2 extends Sa{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class h2{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&l2(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Oi(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Oi(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=t_();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=a_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(tt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),lt())}isEqual(t){return this.batchId===t.batchId&&Hr(this.mutations,t.mutations,(n,r)=>hd(n,r))&&Hr(this.baseMutations,t.baseMutations,(n,r)=>hd(n,r))}}class Ou{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Et(t.mutations.length===r.length);let i=function(){return ZA}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ou(t,n,r,i)}}/**
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
 */class f2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class d2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Dt,ct;function m2(e){switch(e){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function u_(e){if(e===void 0)return dn("GRPC error has no .code"),A.UNKNOWN;switch(e){case Dt.OK:return A.OK;case Dt.CANCELLED:return A.CANCELLED;case Dt.UNKNOWN:return A.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return A.INTERNAL;case Dt.UNAVAILABLE:return A.UNAVAILABLE;case Dt.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Dt.NOT_FOUND:return A.NOT_FOUND;case Dt.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Dt.ABORTED:return A.ABORTED;case Dt.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Dt.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(ct=Dt||(Dt={}))[ct.OK=0]="OK",ct[ct.CANCELLED=1]="CANCELLED",ct[ct.UNKNOWN=2]="UNKNOWN",ct[ct.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ct[ct.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ct[ct.NOT_FOUND=5]="NOT_FOUND",ct[ct.ALREADY_EXISTS=6]="ALREADY_EXISTS",ct[ct.PERMISSION_DENIED=7]="PERMISSION_DENIED",ct[ct.UNAUTHENTICATED=16]="UNAUTHENTICATED",ct[ct.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ct[ct.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ct[ct.ABORTED=10]="ABORTED",ct[ct.OUT_OF_RANGE=11]="OUT_OF_RANGE",ct[ct.UNIMPLEMENTED=12]="UNIMPLEMENTED",ct[ct.INTERNAL=13]="INTERNAL",ct[ct.UNAVAILABLE=14]="UNAVAILABLE",ct[ct.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function p2(){return new TextEncoder}/**
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
 */const g2=new Mr([4294967295,4294967295],0);function md(e){const t=p2().encode(e),n=new yA;return n.update(t),new Uint8Array(n.digest())}function pd(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Mr([n,r],0),new Mr([i,s],0)]}class Nu{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vi(`Invalid padding: ${n}`);if(r<0)throw new vi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new vi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=Mr.fromNumber(this.Ie)}Ee(t,n,r){let i=t.add(n.multiply(Mr.fromNumber(r)));return i.compare(g2)===1&&(i=new Mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=md(t),[r,i]=pd(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Nu(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const n=md(t),[r,i]=pd(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pa{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ss.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Pa(tt.min(),i,new Ct(ft),mn(),lt())}}class Ss{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ss(r,n,lt(),lt(),lt())}}/**
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
 */class fo{constructor(t,n,r,i){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=i}}class h_{constructor(t,n){this.targetId=t,this.me=n}}class f_{constructor(t,n,r=ce.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gd{constructor(){this.fe=0,this.ge=yd(),this.pe=ce.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=lt(),n=lt(),r=lt();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Ss(this.pe,this.ye,t,n,r)}ve(){this.we=!1,this.ge=yd()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _2{constructor(t){this.Le=t,this.Be=new Map,this.ke=mn(),this.qe=_d(),this.Qe=new Ct(ft)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:Q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(t){const n=t.targetId,r=t.me.count,i=this.Je(n);if(i){const s=i.target;if(uc(s))if(r===0){const o=new G(s.path);this.Ue(n,o,se.newNoDocument(o,tt.min()))}else Et(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=cr(r).toUint8Array()}catch(l){if(l instanceof $g)return qr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Nu(o,i,s)}catch(l){return qr(l instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(t){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&uc(a.target)){const l=new G(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,se.newNoDocument(l,t))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=lt();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const i=new Pa(t,n,this.Qe,this.ke,r);return this.ke=mn(),this.qe=_d(),this.Qe=new Ct(ft),i}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new gd,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new ee(ft),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||B("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new gd),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function _d(){return new Ct(G.comparator)}function yd(){return new Ct(G.comparator)}const y2={asc:"ASCENDING",desc:"DESCENDING"},v2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E2={and:"AND",or:"OR"};class w2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function dc(e,t){return e.useProto3Json||Ta(t)?t:{value:t}}function Fo(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function d_(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function b2(e,t){return Fo(e,t.toTimestamp())}function Xe(e){return Et(!!e),tt.fromTimestamp(function(n){const r=Mn(n);return new Lt(r.seconds,r.nanos)}(e))}function Mu(e,t){return mc(e,t).canonicalString()}function mc(e,t){const n=function(i){return new Tt(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function m_(e){const t=Tt.fromString(e);return Et(v_(t)),t}function pc(e,t){return Mu(e.databaseId,t.path)}function hl(e,t){const n=m_(t);if(n.get(1)!==e.databaseId.projectId)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(g_(n))}function p_(e,t){return Mu(e.databaseId,t)}function T2(e){const t=m_(e);return t.length===4?Tt.emptyPath():g_(t)}function gc(e){return new Tt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function g_(e){return Et(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function vd(e,t,n){return{name:pc(e,t),fields:n.value.mapValue.fields}}function I2(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Et(u===void 0||typeof u=="string"),ce.fromBase64String(u||"")):(Et(u===void 0||u instanceof Buffer||u instanceof Uint8Array),ce.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:u_(c.code);return new j(u,c.message||"")}(o);n=new f_(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=hl(e,r.document.name),s=Xe(r.document.updateTime),o=r.document.createTime?Xe(r.document.createTime):tt.min(),a=new Ae({mapValue:{fields:r.document.fields}}),l=se.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new fo(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=hl(e,r.document),s=r.readTime?Xe(r.readTime):tt.min(),o=se.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=hl(e,r.document),s=r.removedTargetIds||[];n=new fo([],s,i,null)}else{if(!("filter"in t))return Q();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new d2(i,s),a=r.targetId;n=new h_(a,o)}}return n}function A2(e,t){let n;if(t instanceof Rs)n={update:vd(e,t.key,t.value)};else if(t instanceof c_)n={delete:pc(e,t.key)};else if(t instanceof mr)n={update:vd(e,t.key,t.data),updateMask:O2(t.fieldMask)};else{if(!(t instanceof u2))return Q();n={verify:pc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof us)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(e,t.precondition)),n}function R2(e,t){return e&&e.length>0?(Et(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Xe(i.updateTime):Xe(s);return o.isEqual(tt.min())&&(o=Xe(s)),new a2(o,i.transformResults||[])}(n,t))):[]}function S2(e,t){return{documents:[p_(e,t.path)]}}function P2(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p_(e,i);const s=function(c){if(c.length!==0)return y_(Fe.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(f){return{field:Ir(f.field),direction:k2(f.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=dc(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{_t:n,parent:i}}function C2(e){let t=T2(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Et(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const f=__(h);return f instanceof Fe&&qg(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(E){return new No(Ar(E.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Ta(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,m=h.values||[];return new Oo(m,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,m=h.values||[];return new Oo(m,f)}(n.endAt)),WA(t,i,o,s,a,"F",l,c)}function x2(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function __(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ar(n.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ar(n.unaryFilter.field);return Nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ar(n.unaryFilter.field);return Nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(n.unaryFilter.field);return Nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return Nt.create(Ar(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Fe.create(n.compositeFilter.filters.map(r=>__(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function k2(e){return y2[e]}function V2(e){return v2[e]}function D2(e){return E2[e]}function Ir(e){return{fieldPath:e.canonicalString()}}function Ar(e){return Zt.fromServerFormat(e.fieldPath)}function y_(e){return e instanceof Nt?function(n){if(n.op==="=="){if(sd(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NAN"}};if(id(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sd(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NAN"}};if(id(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(n.field),op:V2(n.op),value:n.value}}}(e):e instanceof Fe?function(n){const r=n.getFilters().map(i=>y_(i));return r.length===1?r[0]:{compositeFilter:{op:D2(n.op),filters:r}}}(e):Q()}function O2(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function v_(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class An{constructor(t,n,r,i,s=tt.min(),o=tt.min(),a=ce.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new An(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class N2{constructor(t){this.ut=t}}function M2(e){const t=C2({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?fc(t,t.limit,"L"):t}/**
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
 */class L2{constructor(){this.on=new F2}addToCollectionParentIndex(t,n){return this.on.add(n),R.resolve()}getCollectionParents(t,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return R.resolve()}deleteFieldIndex(t,n){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,n){return R.resolve()}getDocumentsMatchingTarget(t,n){return R.resolve(null)}getIndexType(t,n){return R.resolve(0)}getFieldIndexes(t,n){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,n){return R.resolve(Nn.min())}getMinOffsetFromCollectionGroup(t,n){return R.resolve(Nn.min())}updateCollectionGroup(t,n,r){return R.resolve()}updateIndexEntries(t,n){return R.resolve()}}class F2{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ee(Tt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ee(Tt.comparator)).toArray()}}/**
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
 */class Wr{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Wr(0)}static Nn(){return new Wr(-1)}}/**
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
 */class U2{constructor(){this.changes=new ii(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,se.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class $2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class B2{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Oi(r.mutation,i,Ve.empty(),Lt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,lt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=lt()){const i=Zn();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=yi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Zn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,lt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=mn();const o=Di(),a=function(){return Di()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof mr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Oi(u.mutation,c,u.mutation.getFieldMask(),Lt.now())):o.set(c.key,Ve.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new $2(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Di();let i=new Ct((o,a)=>o-a),s=lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ve.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||lt()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=t_();u.forEach(f=>{if(!s.has(f)){const m=a_(n.get(f),r.get(f));m!==null&&h.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Qg(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):R.resolve(Zn());let a=-1,l=s;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?R.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,lt())).next(u=>({batchId:a,changes:Zg(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new G(n)).next(r=>{let i=yi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=yi();return this.indexManager.getCollectionParents(t,s).next(a=>R.forEach(a,l=>{const c=function(h,f){return new As(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,se.newInvalidDocument(u)))});let a=yi();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&Oi(u.mutation,c,Ve.empty(),Lt.now()),Aa(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class j2{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(n)),R.resolve()}getNamedQuery(t,n){return R.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:M2(i.bundledQuery),readTime:Xe(i.readTime)}}(n)),R.resolve()}}/**
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
 */class z2{constructor(){this.overlays=new Ct(G.comparator),this.lr=new Map}getOverlay(t,n){return R.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Zn();return R.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),R.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(t,n,r){const i=Zn(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Zn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return R.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f2(n,r));let s=this.lr.get(n);s===void 0&&(s=lt(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Lu{constructor(){this.hr=new ee(zt.Pr),this.Ir=new ee(zt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new zt(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new zt(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new G(new Tt([])),r=new zt(n,t),i=new zt(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new G(new Tt([])),r=new zt(n,t),i=new zt(n,t+1);let s=lt();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new zt(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class zt{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return G.comparator(t.key,n.key)||ft(t.gr,n.gr)}static Tr(t,n){return ft(t.gr,n.gr)||G.comparator(t.key,n.key)}}/**
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
 */class q2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ee(zt.Pr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new h2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new zt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(t,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new zt(n,0),i=new zt(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ee(ft);return n.forEach(i=>{const s=new zt(i,0),o=new zt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new zt(new G(s),0);let a=new ee(ft);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),R.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Et(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,i=>{const s=new zt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new zt(n,0),i=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class H2{constructor(t){this.Cr=t,this.docs=function(){return new Ct(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():se.newInvalidDocument(n))}getEntries(t,n){let r=mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():se.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=mn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xA(CA(u),r)<=0||(i.has(u.key)||Aa(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Q()}vr(t,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new K2(this)}getSize(t){return R.resolve(this.size)}}class K2 extends U2{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class G2{constructor(t){this.persistence=t,this.Fr=new ii(n=>Vu(n),Du),this.lastRemoteSnapshotVersion=tt.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Lu,this.targetCount=0,this.Nr=Wr.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Wr(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(t,n){return this.kn(n),R.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(t,n){return R.resolve(this.Or.containsKey(n))}}/**
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
 */class W2{constructor(t,n){this.Lr={},this.overlays={},this.Br=new Pu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new G2(this),this.indexManager=new L2,this.remoteDocumentCache=function(i){return new H2(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new N2(n),this.Kr=new j2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new z2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new q2(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){B("MemoryPersistence","Starting transaction:",t);const i=new Q2(this.Br.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return R.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Q2 extends VA{constructor(t){super(),this.currentSequenceNumber=t}}class Fu{constructor(t){this.persistence=t,this.Gr=new Lu,this.zr=null}static jr(t){return new Fu(t)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const i=G.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,tt.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class Uu{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=lt(),i=lt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Uu(t,n.fromCache,r,i)}}/**
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
 */class Y2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class X2{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return Qb()?8:DA(Gb())>0?6:4}()}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Y2;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(di()<=ht.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Tr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):(di()<=ht.DEBUG&&B("QueryEngine","Query:",Tr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(di()<=ht.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Tr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ye(n))):R.resolve())}zi(t,n){if(cd(n))return R.resolve(null);let r=Ye(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fc(n,null,"F"),r=Ye(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=lt(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(t,fc(n,null,"F")):this.Xi(t,c,n,l)}))})))}ji(t,n,r,i){return cd(n)||i.isEqual(tt.min())?R.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?R.resolve(null):(di()<=ht.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tr(n)),this.Xi(t,o,n,PA(i,-1)).next(a=>a))})}Yi(t,n){let r=new ee(Xg(t));return n.forEach((i,s)=>{Aa(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return di()<=ht.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Tr(n)),this.Gi.getDocumentsMatchingQuery(t,n,Nn.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class J2{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new Ct(ft),this.ns=new ii(s=>Vu(s),Du),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new B2(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function Z2(e,t,n,r){return new J2(e,t,n,r)}async function E_(e,t){const n=et(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=lt();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function tR(e,t){const n=et(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let m=R.resolve();return f.forEach(E=>{m=m.next(()=>u.getEntry(l,E)).next(v=>{const I=c.docVersions.get(E);Et(I!==null),v.version.compareTo(I)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=lt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function w_(e){const t=et(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function eR(e,t){const n=et(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,u.addedDocuments,h)));let m=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(ce.EMPTY_BYTE_STRING,tt.min()).withLastLimboFreeSnapshotVersion(tt.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(v,I,_){return v.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,m,u)&&a.push(n.qr.updateTargetData(s,m))});let l=mn(),c=lt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(nR(s,o,t.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(tt.min())){const u=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ts=i,s))}function nR(e,t,n){let r=lt(),i=lt();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=mn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(tt.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function rR(e,t){const n=et(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function iR(e,t){const n=et(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,R.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new An(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function _c(e,t,n){const r=et(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Is(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Ed(e,t,n){const r=et(e);let i=tt.min(),s=lt();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=et(l),f=h.ns.get(u);return f!==void 0?R.resolve(h.ts.get(f)):h.qr.getTargetData(c,u)}(r,o,Ye(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:tt.min(),n?s:lt())).next(a=>(sR(r,YA(t),a),{documents:a,ls:s})))}function sR(e,t,n){let r=e.rs.get(t)||tt.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class wd{constructor(){this.activeTargetIds=n2()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class oR{constructor(){this.eo=new wd,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new wd,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class aR{ro(t){}shutdown(){}}/**
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
 */class bd{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eo=null;function fl(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
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
 */const lR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cR{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.lo()}send(t){this.co(t)}Vo(){this.Po()}mo(){this.To()}fo(t){this.Ao(t)}po(t){this.Ro(t)}}/**
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
 */const re="WebChannelConnection";class uR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${i}/databases/${s}`,this.So=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get bo(){return!1}Do(n,r,i,s,o){const a=fl(),l=this.Co(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(c,s,o),this.Fo(n,l,c,i).then(u=>(B("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Mo(n,r,i,s,o,a){return this.Do(n,r,i,s,o)}vo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Co(n,r){const i=lR[n];return`${this.yo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Fo(t,n,r,i){const s=fl();return new Promise((o,a)=>{const l=new _A;l.setWithCredentials(!0),l.listenOnce(mA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ul.NO_ERROR:const u=l.getResponseJson();B(re,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case ul.TIMEOUT:B(re,`RPC '${t}' ${s} timed out`),a(new j(A.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const h=l.getStatus();if(B(re,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const E=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(_)>=0?_:A.UNKNOWN}(m.status);a(new j(E,m.message))}else a(new j(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B(re,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);B(re,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}xo(t,n,r){const i=fl(),s=[this.yo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=fA(),a=dA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new gA({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");B(re,`Creating RPC '${t}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,m=!1;const E=new cR({co:I=>{m?B(re,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(f||(B(re,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),B(re,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},lo:()=>h.close()}),v=(I,_,y)=>{I.listen(_,P=>{try{y(P)}catch(k){setTimeout(()=>{throw k},0)}})};return v(h,Js.EventType.OPEN,()=>{m||(B(re,`RPC '${t}' stream ${i} transport opened.`),E.Vo())}),v(h,Js.EventType.CLOSE,()=>{m||(m=!0,B(re,`RPC '${t}' stream ${i} transport closed`),E.fo())}),v(h,Js.EventType.ERROR,I=>{m||(m=!0,qr(re,`RPC '${t}' stream ${i} transport errored:`,I),E.fo(new j(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,Js.EventType.MESSAGE,I=>{var _;if(!m){const y=I.data[0];Et(!!y);const P=y,k=P.error||((_=P[0])===null||_===void 0?void 0:_.error);if(k){B(re,`RPC '${t}' stream ${i} received error:`,k);const q=k.status;let F=function(St){const Mt=Dt[St];if(Mt!==void 0)return u_(Mt)}(q),rt=k.message;F===void 0&&(F=A.INTERNAL,rt="Unknown error status: "+q+" with message "+k.message),m=!0,E.fo(new j(F,rt)),h.close()}else B(re,`RPC '${t}' stream ${i} received:`,y),E.po(y)}}),v(a,pA.STAT_EVENT,I=>{I.stat===Jf.PROXY?B(re,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===Jf.NOPROXY&&B(re,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.mo()},0),E}}function dl(){return typeof document<"u"?document:null}/**
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
 */function Ca(e){return new w2(e,!0)}/**
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
 */class b_{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Oo=r,this.No=i,this.Lo=s,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(t){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.qo=Date.now(),t())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
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
 */class T_{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Wo=r,this.Go=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new b_(t,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(t){this.i_(),this.stream.send(t)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(t,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,t!==4?this.Jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(dn(n.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const t=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.zo===n&&this.a_(r,i)},r=>{t(()=>{const i=new j(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(i)})})}a_(t,n){const r=this.__(this.zo);this.stream=this.c_(t,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.u_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(t){return B("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}__(t){return n=>{this.si.enqueueAndForget(()=>this.zo===t?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hR extends T_{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}c_(t,n){return this.connection.xo("Listen",t,n)}onMessage(t){this.Jo.reset();const n=I2(this.serializer,t),r=function(s){if(!("targetChange"in s))return tt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?tt.min():o.readTime?Xe(o.readTime):tt.min()}(t);return this.listener.l_(n,r)}h_(t){const n={};n.database=gc(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=uc(l)?{documents:S2(s,l)}:{query:P2(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=d_(s,o.resumeToken);const c=dc(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(tt.min())>0){a.readTime=Fo(s,o.snapshotVersion.toTimestamp());const c=dc(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=x2(this.serializer,t);r&&(n.labels=r),this.r_(n)}P_(t){const n={};n.database=gc(this.serializer),n.removeTarget=t,this.r_(n)}}class fR extends T_{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(t,n){return this.connection.xo("Write",t,n)}onMessage(t){if(Et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.I_){this.Jo.reset();const n=R2(t.writeResults,t.commitTime),r=Xe(t.commitTime);return this.listener.d_(r,n)}return Et(!t.writeResults||t.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const t={};t.database=gc(this.serializer),this.r_(t)}E_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>A2(this.serializer,r))};this.r_(n)}}/**
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
 */class dR extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.V_=!1}m_(){if(this.V_)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}Do(t,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Do(t,mc(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(A.UNKNOWN,s.toString())})}Mo(t,n,r,i,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,mc(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(A.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class mR{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(dn(n),this.y_=!1):B("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class pR{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.ro(o=>{r.enqueueAndForget(async()=>{pr(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=et(l);c.M_.add(4),await Ps(c),c.N_.set("Unknown"),c.M_.delete(4),await xa(c)}(this))})}),this.N_=new mR(r,i)}}async function xa(e){if(pr(e))for(const t of e.x_)await t(!0)}async function Ps(e){for(const t of e.x_)await t(!1)}function I_(e,t){const n=et(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),zu(n)?ju(n):si(n).Zo()&&Bu(n,t))}function $u(e,t){const n=et(e),r=si(n);n.F_.delete(t),r.Zo()&&A_(n,t),n.F_.size===0&&(r.Zo()?r.t_():pr(n)&&n.N_.set("Unknown"))}function Bu(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(tt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}si(e).h_(t)}function A_(e,t){e.L_.xe(t),si(e).P_(t)}function ju(e){e.L_=new _2({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),si(e).start(),e.N_.w_()}function zu(e){return pr(e)&&!si(e).Yo()&&e.F_.size>0}function pr(e){return et(e).M_.size===0}function R_(e){e.L_=void 0}async function gR(e){e.N_.set("Online")}async function _R(e){e.F_.forEach((t,n)=>{Bu(e,t)})}async function yR(e,t){R_(e),zu(e)?(e.N_.D_(t),ju(e)):e.N_.set("Unknown")}async function vR(e,t,n){if(e.N_.set("Online"),t instanceof f_&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(e,t)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Uo(e,r)}else if(t instanceof fo?e.L_.Ke(t):t instanceof h_?e.L_.He(t):e.L_.We(t),!n.isEqual(tt.min()))try{const r=await w_(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.F_.get(c);u&&s.F_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.F_.get(l);if(!u)return;s.F_.set(l,u.withResumeToken(ce.EMPTY_BYTE_STRING,u.snapshotVersion)),A_(s,l);const h=new An(u.target,l,c,u.sequenceNumber);Bu(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Uo(e,r)}}async function Uo(e,t,n){if(!Is(t))throw t;e.M_.add(1),await Ps(e),e.N_.set("Offline"),n||(n=()=>w_(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await xa(e)})}function S_(e,t){return t().catch(n=>Uo(e,n,t))}async function ka(e){const t=et(e),n=Ln(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;ER(t);)try{const i=await rR(t.localStore,r);if(i===null){t.v_.length===0&&n.t_();break}r=i.batchId,wR(t,i)}catch(i){await Uo(t,i)}P_(t)&&C_(t)}function ER(e){return pr(e)&&e.v_.length<10}function wR(e,t){e.v_.push(t);const n=Ln(e);n.Zo()&&n.T_&&n.E_(t.mutations)}function P_(e){return pr(e)&&!Ln(e).Yo()&&e.v_.length>0}function C_(e){Ln(e).start()}async function bR(e){Ln(e).R_()}async function TR(e){const t=Ln(e);for(const n of e.v_)t.E_(n.mutations)}async function IR(e,t,n){const r=e.v_.shift(),i=Ou.from(r,t,n);await S_(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ka(e)}async function AR(e,t){t&&Ln(e).T_&&await async function(r,i){if(function(o){return m2(o)&&o!==A.ABORTED}(i.code)){const s=r.v_.shift();Ln(r).e_(),await S_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ka(r)}}(e,t),P_(e)&&C_(e)}async function Td(e,t){const n=et(e);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=pr(n);n.M_.add(3),await Ps(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await xa(n)}async function RR(e,t){const n=et(e);t?(n.M_.delete(2),await xa(n)):t||(n.M_.add(2),await Ps(n),n.N_.set("Unknown"))}function si(e){return e.B_||(e.B_=function(n,r,i){const s=et(n);return s.m_(),new hR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:gR.bind(null,e),Io:_R.bind(null,e),Eo:yR.bind(null,e),l_:vR.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.e_(),zu(e)?ju(e):e.N_.set("Unknown")):(await e.B_.stop(),R_(e))})),e.B_}function Ln(e){return e.k_||(e.k_=function(n,r,i){const s=et(n);return s.m_(),new fR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:()=>Promise.resolve(),Io:bR.bind(null,e),Eo:AR.bind(null,e),A_:TR.bind(null,e),d_:IR.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.e_(),await ka(e)):(await e.k_.stop(),e.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
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
 */class qu{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new qu(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(e,t){if(dn("AsyncQueue",`${t}: ${e}`),Is(e))return new j(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Lr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=yi(),this.sortedSet=new Ct(this.comparator)}static emptySet(t){return new Lr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Lr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Lr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Id{constructor(){this.q_=new Ct(G.comparator)}track(t){const n=t.doc.key,r=this.q_.get(n);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(n,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(n):t.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):Q():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Qr{constructor(t,n,r,i,s,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qr(t,n,Lr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ia(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class SR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class PR{constructor(){this.queries=new ii(t=>Yg(t),Ia),this.onlineState="Unknown",this.z_=new Set}}async function CR(e,t){const n=et(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.W_()&&t.G_()&&(r=2):(s=new SR,r=t.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Hu(o,`Initialization of query '${Tr(t.query)}' failed`);return void t.onError(a)}n.queries.set(i,s),s.U_.push(t),t.j_(n.onlineState),s.K_&&t.H_(s.K_)&&Ku(n)}async function xR(e,t){const n=et(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(t);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=t.G_()?0:1:!s.W_()&&t.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kR(e,t){const n=et(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Ku(n)}function VR(e,t,n){const r=et(e),i=r.queries.get(t);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(t)}function Ku(e){e.z_.forEach(t=>{t.next()})}var yc,Ad;(Ad=yc||(yc={})).J_="default",Ad.Cache="cache";class DR{constructor(t,n,r){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Qr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=Qr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==yc.Cache}}/**
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
 */class x_{constructor(t){this.key=t}}class k_{constructor(t){this.key=t}}class OR{constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=lt(),this.mutatedKeys=lt(),this.Ia=Xg(t),this.Ta=new Lr(this.Ia)}get Ea(){return this.la}da(t,n){const r=n?n.Aa:new Id,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const f=i.get(u),m=Aa(this.query,h)?h:null,E=!!f&&this.mutatedKeys.has(f.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;f&&m?f.data.isEqual(m.data)?E!==v&&(r.track({type:3,doc:m}),I=!0):this.Ra(f,m)||(r.track({type:2,doc:m}),I=!0,(l&&this.Ia(m,l)>0||c&&this.Ia(m,c)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),I=!0):f&&!m&&(r.track({type:1,doc:f}),I=!0,(l||c)&&(a=!0)),I&&(m?(o=o.add(m),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:s}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const o=t.Aa.Q_();o.sort((u,h)=>function(m,E){const v=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return v(m)-v(E)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Qr(this.query,t.Ta,s,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Id,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=lt(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return t.forEach(r=>{this.Pa.has(r)||n.push(new k_(r))}),this.Pa.forEach(r=>{t.has(r)||n.push(new x_(r))}),n}pa(t){this.la=t.ls,this.Pa=lt();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return Qr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class NR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class MR{constructor(t){this.key=t,this.wa=!1}}class LR{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ii(a=>Yg(a),Ia),this.Da=new Map,this.Ca=new Set,this.va=new Ct(G.comparator),this.Fa=new Map,this.Ma=new Lu,this.xa={},this.Oa=new Map,this.Na=Wr.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function FR(e,t,n=!0){const r=L_(e);let i;const s=r.ba.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await V_(r,t,n,!0),i}async function UR(e,t){const n=L_(e);await V_(n,t,!0,!1)}async function V_(e,t,n,r){const i=await iR(e.localStore,Ye(t)),s=i.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await $R(e,t,s,o==="current",i.resumeToken)),e.isPrimaryClient&&n&&I_(e.remoteStore,i),a}async function $R(e,t,n,r,i){e.Ba=(h,f,m)=>async function(v,I,_,y){let P=I.view.da(_);P.Zi&&(P=await Ed(v.localStore,I.query,!1).then(({documents:rt})=>I.view.da(rt,P)));const k=y&&y.targetChanges.get(I.targetId),q=y&&y.targetMismatches.get(I.targetId)!=null,F=I.view.applyChanges(P,v.isPrimaryClient,k,q);return Sd(v,I.targetId,F.fa),F.snapshot}(e,h,f,m);const s=await Ed(e.localStore,t,!0),o=new OR(t,s.ls),a=o.da(s.documents),l=Ss.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(a,e.isPrimaryClient,l);Sd(e,n,c.fa);const u=new NR(t,n,o);return e.ba.set(t,u),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),c.snapshot}async function BR(e,t,n){const r=et(e),i=r.ba.get(t),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Ia(o,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _c(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$u(r.remoteStore,i.targetId),vc(r,i.targetId)}).catch(Ts)):(vc(r,i.targetId),await _c(r.localStore,i.targetId,!0))}async function jR(e,t){const n=et(e),r=n.ba.get(t),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$u(n.remoteStore,r.targetId))}async function zR(e,t,n){const r=YR(e);try{const i=await function(o,a){const l=et(o),c=Lt.now(),u=a.reduce((m,E)=>m.add(E.key),lt());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=mn(),v=lt();return l.ss.getEntries(m,u).next(I=>{E=I,E.forEach((_,y)=>{y.isValidDocument()||(v=v.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,E)).next(I=>{h=I;const _=[];for(const y of a){const P=c2(y,h.get(y.key).overlayedDocument);P!=null&&_.push(new mr(y.key,P,Bg(P.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(m,c,_,a)}).next(I=>{f=I;const _=I.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(m,I.batchId,_)})}).then(()=>({batchId:f.batchId,changes:Zg(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Ct(ft)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cs(r,i.changes),await ka(r.remoteStore)}catch(i){const s=Hu(i,"Failed to persist write");n.reject(s)}}async function D_(e,t){const n=et(e);try{const r=await eR(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Et(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Et(o.wa):i.removedDocuments.size>0&&(Et(o.wa),o.wa=!1))}),await Cs(n,r,t)}catch(r){await Ts(r)}}function Rd(e,t,n){const r=et(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=et(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.U_)f.j_(a)&&(c=!0)}),c&&Ku(l)}(r.eventManager,t),i.length&&r.Sa.l_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function qR(e,t,n){const r=et(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fa.get(t),s=i&&i.key;if(s){let o=new Ct(G.comparator);o=o.insert(s,se.newNoDocument(s,tt.min()));const a=lt().add(s),l=new Pa(tt.min(),new Map,new Ct(ft),o,a);await D_(r,l),r.va=r.va.remove(s),r.Fa.delete(t),Gu(r)}else await _c(r.localStore,t,!1).then(()=>vc(r,t,n)).catch(Ts)}async function HR(e,t){const n=et(e),r=t.batch.batchId;try{const i=await tR(n.localStore,t);N_(n,r,null),O_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cs(n,i)}catch(i){await Ts(i)}}async function KR(e,t,n){const r=et(e);try{const i=await function(o,a){const l=et(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Et(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);N_(r,t,n),O_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Cs(r,i)}catch(i){await Ts(i)}}function O_(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function N_(e,t,n){const r=et(e);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function vc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Rr(t).forEach(r=>{e.Ma.containsKey(r)||M_(e,r)})}function M_(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&($u(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),Gu(e))}function Sd(e,t,n){for(const r of n)r instanceof x_?(e.Ma.addReference(r.key,t),GR(e,r)):r instanceof k_?(B("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||M_(e,r.key)):Q()}function GR(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(B("SyncEngine","New document in limbo: "+n),e.Ca.add(r),Gu(e))}function Gu(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new G(Tt.fromString(t)),r=e.Na.next();e.Fa.set(r,new MR(n)),e.va=e.va.insert(n,r),I_(e.remoteStore,new An(Ye(Wg(n.path)),r,"TargetPurposeLimboResolution",Pu.oe))}}async function Cs(e,t,n){const r=et(e),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Uu.Qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Sa.l_(i),await async function(l,c){const u=et(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(c,f=>R.forEach(f.ki,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>R.forEach(f.qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Is(h))throw h;B("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const m=u.ts.get(f),E=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(E);u.ts=u.ts.insert(f,v)}}}(r.localStore,s))}async function WR(e,t){const n=et(e);if(!n.currentUser.isEqual(t)){B("SyncEngine","User change. New user:",t.toKey());const r=await E_(n.localStore,t);n.currentUser=t,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new j(A.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cs(n,r._s)}}function QR(e,t){const n=et(e),r=n.Fa.get(t);if(r&&r.wa)return lt().add(r.key);{let i=lt();const s=n.Da.get(t);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function L_(e){const t=et(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=D_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=QR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qR.bind(null,t),t.Sa.l_=kR.bind(null,t.eventManager),t.Sa.ka=VR.bind(null,t.eventManager),t}function YR(e){const t=et(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=HR.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=KR.bind(null,t),t}class Pd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ca(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Z2(this.persistence,new X2,t.initialUser,this.serializer)}createPersistence(t){return new W2(Fu.jr,this.serializer)}createSharedClientState(t){return new oR}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WR.bind(null,this.syncEngine),await RR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new PR}()}createDatastore(t){const n=Ca(t.databaseInfo.databaseId),r=function(s){return new uR(s)}(t.databaseInfo);return function(s,o,a,l){return new dR(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new pR(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Rd(this.syncEngine,n,0),function(){return bd.D()?new bd:new aR}())}createSyncEngine(t,n){return function(i,s,o,a,l,c,u){const h=new LR(i,s,o,a,l,c);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=et(r);B("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ps(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class JR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):dn("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class ZR{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ie.UNAUTHENTICATED,this.clientId=Fg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Hu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ml(e,t){e.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await E_(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Cd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await eS(e);B("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Td(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Td(t.remoteStore,i)),e._onlineComponents=t}function tS(e){return e.name==="FirebaseError"?e.code===A.FAILED_PRECONDITION||e.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function eS(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ml(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!tS(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await ml(e,new Pd)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ml(e,new Pd);return e._offlineComponents}async function F_(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Cd(e,e._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Cd(e,new XR))),e._onlineComponents}function nS(e){return F_(e).then(t=>t.syncEngine)}async function rS(e){const t=await F_(e),n=t.eventManager;return n.onListen=FR.bind(null,t.syncEngine),n.onUnlisten=BR.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=UR.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=jR.bind(null,t.syncEngine),n}function iS(e,t,n={}){const r=new xn;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new JR({next:f=>{o.enqueueAndForget(()=>xR(s,h)),f.fromCache&&l.source==="server"?c.reject(new j(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new DR(a,u,{includeMetadataChanges:!0,ra:!0});return CR(s,h)}(await rS(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function U_(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const xd=new Map;/**
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
 */function $_(e,t,n){if(!n)throw new j(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sS(e,t,n,r){if(t===!0&&r===!0)throw new j(A.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function kd(e){if(!G.isDocumentKey(e))throw new j(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vd(e){if(G.isDocumentKey(e))throw new j(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Va(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function $o(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new j(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Va(e);throw new j(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Dd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new j(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new j(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sS("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=U_((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Da{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new j(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dd(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vA;switch(r.type){case"firstParty":return new TA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xd.get(n);r&&(B("ComponentProvider","Removing Datastore"),xd.delete(n),r.terminate())}(this),Promise.resolve()}}function oS(e,t,n,r={}){var i;const s=(e=$o(e,Da))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ie.MOCK_USER;else{a=Kb(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ie(c)}e._authCredentials=new EA(new Lg(a,l))}}/**
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
 */class oi{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new oi(this.firestore,t,this._query)}}class Se{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Se(this.firestore,t,this._key)}}class kn extends oi{constructor(t,n,r){super(t,n,Wg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Se(this.firestore,null,new G(t))}withConverter(t){return new kn(this.firestore,t,this._path)}}function xs(e,t,...n){if(e=jr(e),$_("collection","path",t),e instanceof Da){const r=Tt.fromString(t,...n);return Vd(r),new kn(e,null,r)}{if(!(e instanceof Se||e instanceof kn))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tt.fromString(t,...n));return Vd(r),new kn(e.firestore,null,r)}}function aS(e,t,...n){if(e=jr(e),arguments.length===1&&(t=Fg.newId()),$_("doc","path",t),e instanceof Da){const r=Tt.fromString(t,...n);return kd(r),new Se(e,null,new G(r))}{if(!(e instanceof Se||e instanceof kn))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tt.fromString(t,...n));return kd(r),new Se(e.firestore,e instanceof kn?e.converter:null,new G(r))}}/**
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
 */class lS{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new b_(this,"async_queue_retry"),this.hu=()=>{const n=dl();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const t=dl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new xn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(t){if(!Is(t))throw t;B("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const i=qu.createAndSchedule(this,t,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class Wu extends Da{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new lS}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||j_(this),this._firestoreClient.terminate()}}function cS(e,t){const n=typeof e=="object"?e:ZT(),r=typeof e=="string"?e:"(default)",i=QT(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qb("firestore");s&&oS(i,...s)}return i}function B_(e){return e._firestoreClient||j_(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function j_(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,c,u){return new MA(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,U_(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new ZR(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Yr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yr(ce.fromBase64String(t))}catch(n){throw new j(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Yr(ce.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Qu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new j(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class z_{constructor(t){this._methodName=t}}/**
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
 */class Yu{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new j(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new j(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ft(this._lat,t._lat)||ft(this._long,t._long)}}/**
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
 */const uS=/^__.*__$/;class hS{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new mr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Rs(t,this.data,n,this.fieldTransforms)}}function q_(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Xu{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Xu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Bo(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(q_(this.fu)&&uS.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class fS{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ca(t)}Fu(t,n,r,i=!1){return new Xu({fu:t,methodName:n,vu:r,path:Zt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H_(e){const t=e._freezeSettings(),n=Ca(e._databaseId);return new fS(e._databaseId,!!t.ignoreUndefinedProperties,n)}function dS(e,t,n,r,i,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);W_("Data must be an object, but it was:",o,r);const a=K_(r,o);let l,c;if(s.merge)l=new Ve(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=pS(t,h,n);if(!o.contains(f))throw new j(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_S(u,f)||u.push(f)}l=new Ve(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new hS(new Ae(a),l,c)}function mS(e,t,n,r=!1){return Ju(n,e.Fu(r?4:3,t))}function Ju(e,t){if(G_(e=jr(e)))return W_("Unsupported field value:",t,e),K_(e,t);if(e instanceof z_)return function(r,i){if(!q_(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ju(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=jr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return r2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Lt.fromDate(r);return{timestampValue:Fo(i.serializer,s)}}if(r instanceof Lt){const s=new Lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fo(i.serializer,s)}}if(r instanceof Yu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yr)return{bytesValue:d_(i.serializer,r._byteString)};if(r instanceof Se){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mu(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Va(r)}`)}(e,t)}function K_(e,t){const n={};return Ug(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ri(e,(r,i)=>{const s=Ju(i,t.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function G_(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Lt||e instanceof Yu||e instanceof Yr||e instanceof Se||e instanceof z_)}function W_(e,t,n){if(!G_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Va(n);throw r==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function pS(e,t,n){if((t=jr(t))instanceof Qu)return t._internalPath;if(typeof t=="string")return Q_(e,t);throw Bo("Field path arguments must be of type string or ",e,!1,void 0,n)}const gS=new RegExp("[~\\*/\\[\\]]");function Q_(e,t,n){if(t.search(gS)>=0)throw Bo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qu(...t.split("."))._internalPath}catch{throw Bo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bo(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(A.INVALID_ARGUMENT,a+e+l)}function _S(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Y_{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yS extends Y_{data(){return super.data()}}function Zu(e,t){return typeof t=="string"?Q_(e,t):t instanceof Qu?t._internalPath:t._delegate._internalPath}/**
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
 */function vS(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new j(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class th{}class ES extends th{}function X_(e,t,...n){let r=[];t instanceof th&&r.push(t),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof eh).length,a=s.filter(l=>l instanceof Oa).length;if(o>1||o>0&&a>0)throw new j(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Oa extends ES{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Oa(t,n,r)}_apply(t){const n=this._parse(t);return Z_(t._query,n),new oi(t.firestore,t.converter,hc(t._query,n))}_parse(t){const n=H_(t.firestore);return function(s,o,a,l,c,u,h){let f;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new j(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nd(h,u);const m=[];for(const E of h)m.push(Od(l,s,E));f={arrayValue:{values:m}}}else f=Od(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nd(h,u),f=mS(a,o,h,u==="in"||u==="not-in");return Nt.create(c,u,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function J_(e,t,n){const r=t,i=Zu("where",e);return Oa._create(i,r,n)}class eh extends th{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new eh(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Fe.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Z_(o,l),o=hc(o,l)}(t._query,n),new oi(t.firestore,t.converter,hc(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Od(e,t,n){if(typeof(n=jr(n))=="string"){if(n==="")throw new j(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qg(t)&&n.indexOf("/")!==-1)throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Tt.fromString(n));if(!G.isDocumentKey(r))throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rd(e,new G(r))}if(n instanceof Se)return rd(e,n._key);throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Va(n)}.`)}function Nd(e,t){if(!Array.isArray(e)||e.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Z_(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new j(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class wS{convertValue(t,n="none"){switch(ur(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(cr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Q()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ri(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Yu(Ot(t.latitude),Ot(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=xu(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(os(t));default:return null}}convertTimestamp(t){const n=Mn(t);return new Lt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Tt.fromString(t);Et(v_(r));const i=new as(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function bS(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
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
 */class no{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class TS extends Y_{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Zu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mo extends TS{data(t={}){return super.data(t)}}class IS{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new no(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new mo(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new mo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new no(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new mo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new no(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:AS(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class RS extends wS{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Se(this.firestore,null,n)}}function nh(e){e=$o(e,oi);const t=$o(e.firestore,Wu),n=B_(t),r=new RS(t);return vS(e._query),iS(n,e._query).then(i=>new IS(t,r,e,i))}function ty(e,t){const n=$o(e.firestore,Wu),r=aS(e),i=bS(e.converter,t);return SS(n,[dS(H_(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function SS(e,t){return function(r,i){const s=new xn;return r.asyncQueue.enqueueAndForget(async()=>zR(await nS(r),i,s)),s.promise}(B_(e),t)}(function(t,n=!0){(function(i){ni=i})(JT),Ro(new Qi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Wu(new wA(r.getProvider("auth-internal")),new AA(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Or(Zf,"4.6.1",t),Or(Zf,"4.6.1","esm2017")})();const PS={apiKey:"AIzaSyBDvuCqnWr0d3QX7bOmkBlM5dIFmmAAL6c",authDomain:"song-lyrics-29f0c.firebaseapp.com",projectId:"song-lyrics-29f0c",storageBucket:"song-lyrics-29f0c.appspot.com",messagingSenderId:"581822410871",appId:"1:581822410871:web:9262efbfcccbc92e5bd672",measurementId:"G-WZKND2ED1H"},CS=Vp(PS),ks=cS(CS);console.log("Firebase initialized");async function fP(e){try{return{id:(await ty(xs(ks,"lyrics"),e)).id}}catch(t){throw console.error("Error creating lyrics:",t),t}}async function xS(e){try{const t=X_(xs(ks,"lyrics"),J_("youtubeId","==",e)),n=await nh(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(t){throw console.error("Error getting lyrics:",t),t}}async function dP(e){try{return{id:(await ty(xs(ks,"songs"),e)).id}}catch(t){throw console.error("Error creating song:",t),t}}async function kS(){try{const e=await nh(xs(ks,"songs")),t=[];return e.forEach(n=>{const r={id:n.id,...n.data()};t.push(r)}),t}catch(e){throw console.error("Error getting songs:",e),e}}async function VS(e){try{const t=X_(xs(ks,"songs"),J_("youtubeId","==",e)),n=await nh(t),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r.length===0?null:r[0]}catch(t){throw console.error("Error getting lyrics:",t),t}}class DS{constructor(t){vr(this,"_findIndex",t=>{const n=this.startTimes.findIndex(r=>r>t);return n>=0?n-1:this.linesCount-1});vr(this,"getPrevIndex",t=>{const n=this._findIndex(t);return n>=0?n-1:null});vr(this,"getCurrIndex",t=>{const n=this._findIndex(t);return n>=0?n:null});vr(this,"getNextIndex",t=>{const n=this._findIndex(t);return n<this.linesCount-1?n+1:null});vr(this,"getTimestamp",t=>this.startTimes[t]);if(t.sort((r,i)=>r.language.localeCompare(i.language)),this.lyrics=[],this.supportedLangs=[],t.forEach(r=>{this.lyrics.push(r.lines),this.supportedLangs.push(r.language)}),this.supportedLangs.includes("jp_yomi")){const r=this.supportedLangs.indexOf("jp");r>=0&&(this.lyrics.splice(r,1),this.supportedLangs.splice(r,1))}const n=t.find(r=>r.language==="jp_yomi"||r.language==="jp");this.linesCount=n.lines.length,delete n.lines,Object.assign(this,n)}}const OS={class:"page single"},NS={class:"single-title animate__animated animate__flipInX"},MS=D("h2",{class:"single-subtitle"},"Create SVG diagrams using GoAT or Mermaid in DoIt",-1),LS={key:1,class:"single-title animate__animated animate__flipInX"},FS={class:"content",id:"content","lg-uid":"lg0"},US={class:"video-container"},$S={key:0,id:"lrc"},BS=["onClick","data-time"],jS=["innerHTML","data-lang"],zS={key:1},qS={id:"control-buttons"},HS={__name:"SongDetail",props:{youtubeId:{type:String,required:!0}},setup(e){const t=e,n=Wt(null),r=Wt(null),i=Wt(null),s=Wt("Loading..."),o=Wt(!1),a=Wt(null),l=Wt(null),c=Wt(!1),{instance:u,togglePlay:h,onReady:f,onStateChange:m}=F1(t.youtubeId,l,{}),E=Wt(0),v=Wt(null);ms(async()=>{r.value=await VS(t.youtubeId);const k=await xS(t.youtubeId);console.log(k),i.value=new DS(k)}),Hm(()=>{clearInterval(n.value)}),f(k=>{n.value=setInterval(()=>{if(i.value===null){console.log("Lyrics not ready");return}E.value=u==null?void 0:u.value.getCurrentTime(),v.value=i.value.getCurrIndex(E.value),console.log(v.value),o.value&&v.value!==a.value&&I(i.value.getTimestamp(a.value))},50),console.log("Player is ready",k)}),m(k=>{c.value=k.data!==tu.PAUSED});const I=k=>{u==null||u.value.seekTo(k),u==null||u.value.playVideo()},_=k=>{I(k),o.value&&(a.value=i.value.getCurrIndex(k))},y=()=>{o.value=!o.value,a.value=v.value},P=k=>{const q=k==="prev"?v.value-1:v.value+1;I(i.value.getTimestamp(q)),o.value&&(a.value=q)};return(k,q)=>{const F=or("font-awesome-icon");return Bt(),jt(qt,null,[D("article",OS,[r.value?(Bt(),jt(qt,{key:0},[D("h1",NS,on(r.value.title),1),MS,dt(Ip,{song:r.value},null,8,["song"])],64)):(Bt(),jt("h1",LS,"Loading...")),D("div",FS,[D("div",US,[D("div",{ref_key:"playerRef",ref:l},null,512)]),i.value?(Bt(),jt("div",$S,[(Bt(!0),jt(qt,null,qi(i.value.startTimes,(rt,xt)=>(Bt(),jt("div",{class:"lrc__line",onClick:St=>_(rt),"data-time":rt},[(Bt(!0),jt(qt,null,qi(i.value.supportedLangs,(St,Mt)=>(Bt(),jt("div",{innerHTML:i.value.lyrics[Mt][xt],"data-lang":St,class:Ge({active:xt===v.value})},null,10,jS))),256))],8,BS))),256))])):(Bt(),jt("div",zS,on(s.value),1))])]),D("div",qS,[D("a",{href:"#",class:"fixed-button",title:"Previous Line",onClick:q[0]||(q[0]=Pr(rt=>P("prev"),["prevent"]))},[dt(F,{icon:["fas","backward"],"fixed-width":""})]),D("a",{href:"#",class:"fixed-button",title:"Toggle Player State",onClick:q[1]||(q[1]=Pr((...rt)=>he(h)&&he(h)(...rt),["prevent"]))},[dt(F,{icon:["fas",c.value?"pause":"play"],"fixed-width":""},null,8,["icon"])]),D("a",{href:"#",class:"fixed-button",title:"Next Line",onClick:q[2]||(q[2]=Pr(rt=>P("next"),["prevent"]))},[dt(F,{icon:["fas","forward"],"fixed-width":""})]),D("a",{href:"#",class:Ge(["fixed-button",o.value?"active":""]),id:"repeat",title:"Repeat Current Line",onClick:Pr(y,["prevent"])},[dt(F,{icon:["fas","undo-alt"],"fixed-width":""})],2)])],64)}}},KS={class:"page home",posts:""},GS=D("div",{class:"home-profile"},[D("h1",{class:"home-title"},"所有歌曲"),D("h2",{class:"home-subtitle"},[D("div",{id:"id-1",class:"typeit"},"沉浸在Aimer音樂的世界")])],-1),WS={class:"featured-image-preview"},QS=["src"],YS={class:"single-title"},XS=D("div",{class:"content"}," This post explains how you can create custom SVG diagrams in DoIt using GoAT or Mermaid. ",-1),JS={class:"post-footer"},ZS={class:"post-tags"},tP=D("a",{href:"/tags/diagram/"},"diagram",-1),eP=D("a",{href:"/tags/markdown/"},"Markdown",-1),nP={__name:"SongList",setup(e){const t=Jr([]);return ms(async()=>{const n=await kS();t.push(...n),console.log(t.value)}),(n,r)=>{const i=or("router-link"),s=or("font-awesome-icon");return Bt(),jt("div",KS,[GS,(Bt(!0),jt(qt,null,qi(t,o=>(Bt(),jt("article",{class:"single summary",key:o.id},[dt(i,{to:{name:"SongDetail",params:{youtubeId:o.youtubeId}}},{default:Qn(()=>[D("div",WS,[D("img",{src:`https://i.ytimg.com/vi_webp/${o.youtubeId}/sddefault.webp`,loading:"lazy"},null,8,QS)]),D("h2",YS,on(o.title),1)]),_:2},1032,["to"]),dt(Ip,{song:o},null,8,["song"]),XS,D("div",JS,[dt(i,{to:{name:"SongDetail",params:{youtubeId:o.youtubeId}}},{default:Qn(()=>[_e(" Read more... ")]),_:2},1032,["to"]),D("div",ZS,[dt(s,{icon:["fas","tags"],"fixed-width":""}),_e(" "),tP,_e(", "),eP])])]))),128))])}}},rP=[{path:"/",name:"SongList",component:nP},{path:"/song/:youtubeId",name:"SongDetail",component:HS,props:!0},{path:"/edit",name:"EditLyrics",component:()=>Sb(()=>import("./EditLyrics-CEHnH0hG.js"),__vite__mapDeps([0,1]))}],iP=Jw({history:Pw("/"),routes:rP,scrollBehavior(){return{top:0}}});Nv.add(Gv,Lv,Kv,Hv,$v,Qv,Yv,Bv,qv,Fv,jv);const Na=_1(Ib);Na.use(iP);Na.use(L1());Na.component("font-awesome-icon",k1);Na.mount("#app");export{qt as F,jt as a,D as b,Yt as c,qi as d,_e as e,aP as f,dP as g,fP as h,aS as i,ks as j,Bt as o,oP as p,Wt as r,on as t,lP as v,jm as w};

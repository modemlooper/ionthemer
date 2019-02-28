/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='app']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(resourcesUrl){
})(resourcesUrl);


(function(resourcesUrl){const t=window.Ionic=window.Ionic||{};Object.defineProperty(t,"queue",{get:()=>Context.queue});const e=t.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,e){const o=this.m.get(t);return void 0!==o?o:e}getBoolean(t,e=!1){const o=this.m.get(t);return void 0===o?e:"string"==typeof o?"true"===o:!!o}getNumber(t,e){const o=parseFloat(this.m.get(t));return isNaN(o)?void 0!==e?e:NaN:o}set(t,e){this.m.set(t,e)}}(Object.assign({},t.config,function(){const t={};return window.location.search.slice(1).split("&").filter(t=>t.startsWith("ionic:")).map(t=>t.split("=")).forEach(e=>{t[e[0].slice(6)]=decodeURIComponent(e[1])}),t}())),o=document.documentElement,n=e.get("mode",o.getAttribute("mode")||(function(t,e){return/iPad|iPhone|iPod/i.test(t.navigator.userAgent)}(window)?"ios":"md"));t.mode=Context.mode=n,e.set("mode",n),o.setAttribute("mode",t.mode);
})(resourcesUrl);
(function(t,e,n,o){"use strict";function i(t,e,n,o,i,c,f){let l=n.t+(o||O),r=n[l];if(r||(r=n[l=n.t+O]),r){let o=e.e;if(e.n)if(1===n.encapsulation)o=i.shadowRoot;else for(;i=e.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=t.i.get(o)||{};if(!c[l]){f=r.content.cloneNode(!0);const n=o.querySelectorAll("[data-styles]");e.c(o,f,n.length&&n[n.length-1].nextSibling||o.f),c[l]=!0,t.i.set(o,c)}}}function c(t){return{l:t[0],r:t[1],s:!!t[2],u:!!t[3],a:!!t[4]}}function f(t,e){if(S(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function l(t,e,n,o){const i=t.p.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.p.delete(e))}function r(t,e,n){let o,i,c=null,f=!1,l=!1;for(var r=arguments.length;r-- >2;)L.push(arguments[r]);for(;L.length>0;)if((n=L.pop())&&void 0!==n.pop)for(r=n.length;r--;)L.push(n[r]);else"boolean"==typeof n&&(n=null),(l="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(l=!1)),l&&f?c[c.length-1].d+=n:null===c?c=[l?{d:n}:n]:c.push(l?{d:n}:n),f=l;if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(r in e.class)e.class[r]&&L.push(r);e.class=L.join(" "),L.length=0}null!=e.v&&(o=e.v),null!=e.name&&(i=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:c}),q):{b:t,m:c,d:void 0,y:e,w:o,g:i,M:void 0,k:!1}}function s(t,e,n,o){e.split(" ").forEach(e=>{t[e]=!0,n&&(t[`${e}-${n}`]=!0,o&&(t[`${e}-${n}-${o}`]=t[`${e}-${o}`]=!0))})}function u(t,e){t.j.has(e)||(t.j.set(e,!0),t.C?t.queue.write(()=>a(t,e)):t.queue.tick(()=>a(t,e)))}function a(t,e,n,o,i,c){if(t.j.delete(e),!t.W.has(e)){if(o=t.x.get(e),n=!o){if((i=t.p.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{a(t,e)}),void(i.$onRender=i["s-rc"]);o=function f(t,e,n,o,i,c,l){try{(function r(t,e,n,o,i,c,f){for(f in t.O.set(o,n),t.N.has(n)||t.N.set(n,{}),(c=Object.assign({color:{type:String}},e.properties)).mode={type:String},c)d(t,c[f],n,o,f,i)})(t,i=t.S(e).A,e,o=new i,n),function s(t,e,n){if(e){const o=t.O.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.T(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(c=t.R.get(e)){for(l=0;l<c.length;l+=2)o[c[l]](c[l+1]);t.R.delete(e)}}catch(n){t.L(n,2,e)}}catch(n){o={},t.L(n,7,e,!0)}return t.x.set(e,o),o}(t,e,t.q.get(e));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(n){t.L(n,3,e)}}c&&c.then?c.then(()=>p(t,e,o,n)):p(t,e,o,n)}}function p(t,e,n,o){(function i(t,e,n,o,c){try{const i=e.A.host;let f;if(o.render||o.hostData||i||f){t.B=!0;const f=o.render&&o.render();let l;l=o.hostData&&o.hostData(),t.B=!1,i&&(l=function f(t,e,n){return t=t||{},Object.keys(e).forEach(o=>{"theme"===o?s(t.class=t.class||{},e[o],n.mode,n.color):"class"===o?s(t[o]=t[o]||{},e[o]):t[o]=e[o]}),t}(l,i,o));const u=t.D.get(n)||{};u.M=n;const a=r(null,l,f);t.D.set(n,t.render(u,a,c,e.A.encapsulation))}t.P(t,t.F,e,o.mode,n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.B=!1,t.L(e,8,n,!0)}})(t,t.S(e),e,n,!o);try{o?e["s-init"]():g(t.D.get(e))}catch(n){t.L(n,6,e,!0)}}function d(t,e,n,o,i,c,l,r){if(e.type||e.state){const s=t.N.get(n);e.state||(!e.attr||void 0!==s[i]&&""!==s[i]||(l=c&&c.H)&&S(r=l[e.attr])&&(s[i]=f(e.type,r)),n.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=f(e.type,n[i])),delete n[i])),o.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=o[i]),e.watchCallbacks&&(s[B+i]=e.watchCallbacks.slice()),m(o,i,function s(e){return(e=t.N.get(t.O.get(this)))&&e[i]},function u(n,o){(o=t.O.get(this))&&(e.state||e.mutable)&&v(t,o,i,n)})}else if(e.elementRef)b(o,i,n);else if(e.method)b(n,i,o[i].bind(o));else if(e.context){const c=t.I(e.context);void 0!==c&&b(o,i,c.U&&c.U(n)||c)}else e.connect&&b(o,i,t.z(e.connect))}function v(t,e,n,o,i,c,f){(i=t.N.get(e))||t.N.set(e,i={});const l=i[n];if(o!==l&&(i[n]=o,c=t.x.get(e))){if(f=i[B+n])for(let t=0;t<f.length;t++)try{c[f[t]].call(c,o,l,n)}catch(t){}!t.B&&e["s-rn"]&&u(t,e)}}function b(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function m(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function h(t,e,n,o,i,c,f,l,r){if("class"!==n||c)if("style"===n){for(l in o=o||E,i=i||E,o)i[l]||(e.style[l]="");for(l in i)i[l]!==o[l]&&(e.style[l]=i[l])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.S(e);o&&o.Q&&o.Q[n]?y(e,n,i):"ref"!==n&&(y(e,n,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(n))}else null!=i?function s(t,e,n){const o=e!==(e=e.replace(/^xlink\:?/,"")),i=D[e];!i||n&&"false"!==n?"function"!=typeof n&&(i&&(n=""),o?t.setAttributeNS(P,T(e),n):t.setAttribute(e,n)):o?t.removeAttributeNS(P,T(e)):t.removeAttribute(e)}(e,n,i):!c||null!=i&&!1!==i||e.removeAttribute(n);else n=T(n)in e?T(n.substring(2)):T(n[2])+n.substring(3),i?i!==o&&t.F.Z(e,n,i):t.F.G(e,n);else if(o!==i){const t=null==o||""===o?N:o.trim().split(/\s+/),n=null==i||""===i?N:i.trim().split(/\s+/);let c=null==e.className||""===e.className?N:e.className.trim().split(/\s+/);for(l=0,r=t.length;l<r;l++)-1===n.indexOf(t[l])&&(c=c.filter(e=>e!==t[l]));for(l=0,r=n.length;l<r;l++)-1===t.indexOf(n[l])&&(c=[...c,n[l]]);e.className=c.join(" ")}}function y(t,e,n){try{t[e]=n}catch(t){}}function $(t,e,n,o,i){const c=11===n.M.nodeType&&n.M.host?n.M.host:n.M,f=e&&e.y||E,l=n.y||E;for(i in f)l&&null!=l[i]||null==f[i]||h(t,c,i,f[i],void 0,o,n.k);for(i in l)i in f&&l[i]===("value"===i||"checked"===i?c[i]:f[i])||h(t,c,i,f[i],l[i],o,n.k)}function w(t,e){function n(i,c,f,l,r,s,p,d,h){if(d=c.m[f],u||(v=!0,"slot"===d.b&&(a&&e.J(l,a+"-slot",""),d.m?d.K=!0:d.V=!0)),S(d.d))d.M=e.X(d.d);else if(d.V)d.M=e.X("");else{if(s=d.M=F||"svg"===d.b?e.Y("http://www.w3.org/2000/svg",d.b):e._(d.K?"slot-fb":d.b),F="svg"===d.b||"foreignObject"!==d.b&&F,$(t,null,d,F),S(a)&&s["s-si"]!==a&&e.J(s,s["s-si"]=a,""),d.m)for(r=0;r<d.m.length;++r)(p=n(i,d,r,s))&&e.tt(s,p);"svg"===d.b&&(F=!1)}return d.M["s-hn"]=b,(d.K||d.V)&&(d.M["s-sr"]=!0,d.M["s-cr"]=m,d.M["s-sn"]=d.g||"",(h=i&&i.m&&i.m[f])&&h.b===d.b&&i.M&&o(i.M)),d.M}function o(n,i,c,f){t.et=!0;const s=e.nt(n);for(c=s.length-1;c>=0;c--)(f=s[c])["s-hn"]!==b&&f["s-ol"]&&(e.ot(f),e.c(r(f),f,l(f)),e.ot(f["s-ol"]),f["s-ol"]=null,v=!0),i&&o(f,i);t.et=!1}function i(t,o,i,c,f,r,s,u){const a=t["s-cr"]||t.$defaultHolder;for((s=a&&e.o(a)||t).shadowRoot&&(s=s.shadowRoot);f<=r;++f)c[f]&&(u=S(c[f].d)?e.X(c[f].d):n(null,i,f,t))&&(c[f].M=u,e.c(s,u,l(o)))}function c(t,n,i,c){for(;n<=i;++n)S(t[n])&&(c=t[n].M,d=!0,c["s-ol"]?e.ot(c["s-ol"]):o(c,!0),e.ot(c))}function f(t,e){return t.b===e.b&&t.w===e.w&&("slot"!==t.b||t.g===e.g)}function l(t){return t&&t["s-ol"]?t["s-ol"]:t}function r(t){return e.o(t["s-ol"]?t["s-ol"]:t)}const s=[];let u,a,p,d,v,b,m;return function u(h,y,w,g,M,k,j,C,W){if(p=w,b=e.it(h.M),m=h.M["s-cr"],a="scoped"===g||"shadow"===g&&!e.n?"data-"+e.it(h.M):null,v=d=!1,p||a&&e.J(h.M,a+"-host",""),function s(u,a,p){const d=a.M=u.M,v=u.m,b=a.m;F=a.M&&S(e.ct(a.M))&&void 0!==a.M.ownerSVGElement,F="svg"===a.b||"foreignObject"!==a.b&&F,S(a.d)?(p=d["s-cr"]||d.$defaultHolder)?e.ft(e.o(p),a.d):u.d!==a.d&&e.ft(d,a.d):("slot"!==a.b&&$(t,u,a,F),S(v)&&S(b)?function m(t,u,a,p,d,v,b,h){let y=0,$=0,w=u.length-1,g=u[0],M=u[w],k=p.length-1,j=p[0],C=p[k];for(;y<=w&&$<=k;)if(null==g)g=u[++y];else if(null==M)M=u[--w];else if(null==j)j=p[++$];else if(null==C)C=p[--k];else if(f(g,j))s(g,j),g=u[++y],j=p[++$];else if(f(M,C))s(M,C),M=u[--w],C=p[--k];else if(f(g,C))"slot"!==g.b&&"slot"!==C.b||o(e.o(g.M)),s(g,C),e.c(t,g.M,e.lt(M.M)),g=u[++y],C=p[--k];else if(f(M,j))"slot"!==g.b&&"slot"!==C.b||o(e.o(M.M)),s(M,j),e.c(t,M.M,g.M),M=u[--w],j=p[++$];else{for(d=null,v=y;v<=w;++v)if(u[v]&&S(u[v].w)&&u[v].w===j.w){d=v;break}S(d)?((h=u[d]).b!==j.b?b=n(u&&u[$],a,d,t):(s(h,j),u[d]=void 0,b=h.M),j=p[++$]):(b=n(u&&u[$],a,$,t),j=p[++$]),b&&e.c(r(g.M),b,l(g.M))}y>w?i(t,null==p[k+1]?null:p[k+1].M,a,p,$,k):$>k&&c(u,y,w)}(d,v,a,b):S(b)?(S(u.d)&&e.ft(d,""),i(d,null,a,b,0,b.length-1)):S(v)&&c(v,0,v.length-1)),F&&"svg"===a.b&&(F=!1)}(h,y),v){for(function t(n,o,i,c,f,l,r,u,a,p){for(f=0,l=(o=e.nt(n)).length;f<l;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(u=e.nt(e.o(c)),a=i["s-sn"],r=u.length-1;r>=0;r--)(c=u[r])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(p=e.rt(c))||8===p)&&""===a||1===p&&null===e.st(c,"slot")&&""===a||1===p&&e.st(c,"slot")===a)&&(s.some(t=>t.ut===c)||(d=!0,c["s-sn"]=a,s.push({at:i,ut:c})));1===e.rt(i)&&t(i)}}(y.M),k=0;k<s.length;k++)(j=s[k]).ut["s-ol"]||((C=e.X(""))["s-nr"]=j.ut,e.c(e.o(j.ut),j.ut["s-ol"]=C,j.ut));for(t.et=!0,k=0;k<s.length;k++){j=s[k];const t=e.o(j.at);let n=e.lt(j.at);for(C=j.ut["s-ol"];C=e.pt(C);)if((W=C["s-nr"])&&W["s-sn"]===j.ut["s-sn"]&&t===e.o(W)){n=e.lt(W);break}(!n&&t!==e.o(j.ut)||e.lt(j.ut)!==n)&&j.ut!==n&&(e.ot(j.ut),e.c(t,j.ut,n))}t.et=!1}return d&&function t(n,o,i,c,f,l,r,s){for(c=0,f=(i=e.nt(n)).length;c<f;c++)if(o=i[c],1===e.rt(o)){if(o["s-sr"])for(r=o["s-sn"],o.hidden=!1,l=0;l<f;l++)if(i[l]["s-hn"]!==o["s-hn"])if(s=e.rt(i[l]),""!==r){if(1===s&&r===e.st(i[l],"slot")){o.hidden=!0;break}}else if(1===s||3===s&&""!==e.dt(i[l]).trim()){o.hidden=!0;break}t(o)}}(y.M),s.length=0,y}}function g(t,e){t&&(t.y&&t.y.ref&&t.y.ref(e?null:t.M),t.m&&t.m.forEach(t=>{g(t,e)}))}function M(t,e,n,o,i){const c=t.rt(e);let f,l,r,s;if(i&&1===c){(l=t.st(e,x))&&(r=l.split("."))[0]===o&&((s={}).b=t.it(s.M=e),n.m||(n.m=[]),n.m[r[1]]=s,n=s,i=""!==r[2]);for(let c=0;c<e.childNodes.length;c++)M(t,e.childNodes[c],n,o,i)}else 3===c&&(f=e.previousSibling)&&8===t.rt(f)&&"s"===(r=t.dt(f).split("."))[0]&&r[1]===o&&((s={d:t.dt(e)}).M=e,n.m||(n.m=[]),n.m[r[2]]=s)}function k(t,e,n,o,i){return n["s-cr"]||t.st(n,W)||function c(t,e){return t&&1===e.encapsulation}(t.n,e)||(n["s-cr"]=t.X(""),n["s-cr"]["s-cn"]=!0,t.c(n,n["s-cr"],t.nt(n)[0])),t.n||1!==e.encapsulation||(n.shadowRoot=n),o={vt:n["s-id"],H:{}},e.Q&&Object.keys(e.Q).forEach(c=>{(i=e.Q[c].bt)&&(o.H[i]=t.st(n,i))}),o}function j(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.mt.has(o)||(t.mt.set(o,!0),function i(t,e){const n=t.S(e);n.ht&&n.ht.forEach(n=>{n.s||t.F.Z(e,n.l,function o(t,e,n,i){return o=>{(i=t.x.get(e))?i[n](o):((i=t.R.get(e)||[]).push(n,o),t.R.set(e,i))}}(t,e,n.r),n.a,n.u)})}(t,o)),t.W.delete(o),t.yt.has(o)||(t.yt.set(o,!0),o["s-id"]||(o["s-id"]=t.$t()),function c(t,e,n){for(n=e;n=t.F.ct(n);)if(t.wt(n)){t.gt.has(e)||(t.p.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>t.Mt(e,o,k(t.F,e,o))))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,c,l,r){if(t&&o!==c)for(l in t)if((r=t[l]).bt&&T(r.bt)===T(n)){e[l]=f(r.kt,c);break}})(e.Q,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n,o){!t.et&&function i(t,e){for(;e;){if(!t.o(e))return 9!==t.rt(e);e=t.o(e)}}(t.F,n)&&(t.W.set(n,!0),l(t,n),g(t.D.get(n),!0),t.F.G(n),t.mt.delete(n),(o=t.x.get(n))&&o.componentDidUnload&&o.componentDidUnload(),[t.p,t.jt,t.q].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c){if(!t.gt.has(n)&&(i=t.x.get(n))&&!t.W.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.gt.set(n,!0);try{g(t.D.get(n)),(c=t.jt.get(n))&&(c.forEach(t=>t(n)),t.jt.delete(n)),i.componentDidLoad&&i.componentDidLoad()}catch(e){t.L(e,4,n)}n.classList.add(o),l(t,n)}})(t,this,o)},n.forceUpdate=function(){u(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],c=i.Ct;1===c||2===c?m(n,o,function e(){return(t.N.get(this)||{})[o]},function e(n){v(t,this,o,f(i.kt,n))}):6===c&&b(n,o,R)})}(t,e.Q,n)}function C(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){return new Promise(o=>{let i=e[n];i||(i=t.Wt.querySelector(n)),i||(i=e[n]=t._(n),t.tt(t.Wt,i)),i.componentOnReady(o)})}(t,e,n).then(t=>t[o].apply(t,i))}}const W="data-ssrv",x="data-ssrc",O="$",E={},N=[],A={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},S=t=>null!=t,T=t=>t.toLowerCase(),R=()=>{},L=[],q={getAttributes:function(t){return t.y},replaceAttributes:function(t,e){t.y=e}},B="wc-",D={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},P="http://www.w3.org/1999/xlink";let F=!1;(function H(t,e,n,o,f,l){const s={html:{}},a={},p=n[t]=n[t]||{},d=function v(t,e,n){t.xt||(t.xt=((t,e,n,o)=>t.addEventListener(e,n,o)),t.Ot=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={Et:n.documentElement,e:n.head,Wt:n.body,Nt:!1,rt:t=>t.nodeType,_:t=>n.createElement(t),Y:(t,e)=>n.createElementNS(t,e),X:t=>n.createTextNode(t),At:t=>n.createComment(t),c:(t,e,n)=>t.insertBefore(e,n),ot:t=>t.remove(),tt:(t,e)=>t.appendChild(e),nt:t=>t.childNodes,o:t=>t.parentNode,lt:t=>t.nextSibling,pt:t=>t.previousSibling,it:t=>T(t.nodeName),dt:t=>t.textContent,ft:(t,e)=>t.textContent=e,st:(t,e)=>t.getAttribute(e),J:(t,e,n)=>t.setAttribute(e,n),St:(t,e,n,o)=>t.setAttributeNS(e,n,o),Tt:(t,e)=>t.removeAttribute(e),Rt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.ct(t):"body"===o?i.Wt:"document"===o?n:"window"===o?e:t,Z:(e,n,c,f,l,r,s,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof r?p=i.Rt(e,r):"object"==typeof r?p=r:(u=n.split(":")).length>1&&(p=i.Rt(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===A[u[1]]&&c(t)})),s=i.Nt?{capture:!!f,passive:!!l}:!!f,t.xt(p,n,v,s),d||o.set(e,d={}),d[a]=(()=>{p&&t.Ot(p,n,v,s),d[a]=null})},G:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Lt:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o))};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Nt=!0}))}catch(t){}return i.ct=((t,e)=>(e=i.o(t))&&11===i.rt(e)?e.host:e),i}(p,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=f,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,f){if(e){const c=t.O.get(e),l=t.S(c);if(l&&l.ht)if(o){const o=l.ht.find(t=>t.l===n);o&&t.F.Z(c,n,t=>e[o.r](t),o.a,void 0===f?o.u:!!f,i)}else t.F.G(c,n)}})(h,t,e,n,o,i)),e.emit=((t,n,o)=>d.Lt(t,e.eventNameFn?e.eventNameFn(n):n,o)),p.h=r,p.Context=e;const b=n.$definedCmps=n.$definedCmps||{};let m=0;const h={F:d,qt:function y(t,e){if(!b[t.t]){b[t.t]=!0,j(h,t,e.prototype,l);{const n=[];for(const e in t.Q)t.Q[e].bt&&n.push(t.Q[e].bt);e.observedAttributes=n}n.customElements.define(t.t,e)}},T:e.emit,S:t=>s[d.it(t)],I:t=>e[t],isClient:!0,wt:t=>!(!b[d.it(t)]&&!h.S(t)),$t:()=>t+m++,L:(t,e,n)=>void 0,z:t=>(function e(t,n,o){return{create:C(t,n,o,"create"),componentOnReady:C(t,n,o,"componentOnReady")}})(d,a,t),queue:e.queue=function $(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&c()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(r);const e=c()+7*Math.ceil(a*(1/22));o(s,e),o(u,e),s.length>0&&(u.push(...s),s.length=0),(p=r.length+s.length+u.length>0)?t.raf(i):a=0}const c=()=>e.performance.now(),f=Promise.resolve(),l=[],r=[],s=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){l.push(t),1===l.length&&f.then(()=>n(l))},read(e){r.push(e),p||(p=!0,t.raf(i))},write(e){s.push(e),p||(p=!0,t.raf(i))}}}(p,n),Mt:function g(t,n){if(n.mode||(n.mode=d.st(n,"mode")||e.mode),k(h.F,t,n),t.A)u(h,n);else{const e="string"==typeof t.Bt?t.Bt:t.Bt[n.mode],o=f+e+(function o(t,e){return 2===e.encapsulation||1===e.encapsulation&&!t}(d.n,t)?".sc":"")+".js";import(o).then(e=>{try{t.A=e[(t=>T(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n){const o=n.style;if(o){const i=n.is+(n.styleMode||O);if(!e[i]){const n=t._("template");e[i]=n,n.innerHTML=`<style>${o}</style>`,t.tt(t.e,n)}}}(d,t,t.A)}catch(e){t.A=class{}}u(h,n)}).catch(t=>void 0)}},p:new WeakMap,i:new WeakMap,yt:new WeakMap,mt:new WeakMap,gt:new WeakMap,O:new WeakMap,q:new WeakMap,x:new WeakMap,W:new WeakMap,j:new WeakMap,jt:new WeakMap,R:new WeakMap,D:new WeakMap,N:new WeakMap};h.render=w(h,d);const x=d.Et;x["s-ld"]=[],x["s-rn"]=!0,x["s-init"]=(()=>{h.gt.set(x,p.loaded=h.C=!0),d.Lt(n,"appload",{detail:{namespace:t}})}),function E(t,e,n){const o=n.querySelectorAll(`[${W}]`),i=o.length;let c,f,l,r,s,u;if(i>0)for(t.gt.set(n,!0),r=0;r<i;r++)for(c=o[r],f=e.st(c,W),(l={}).b=e.it(l.M=c),t.D.set(c,l),s=0,u=c.childNodes.length;s<u;s++)M(e,c.childNodes[s],l,f,!0)}(h,d,x),h.P=i,(p.components||[]).map(t=>(function e(t,n,o,i){const f={t:t[0],Q:{color:{bt:"color"}}};f.Bt=t[1];const l=t[3];if(l)for(o=0;o<l.length;o++)i=l[o],f.Q[i[0]]={Ct:i[1],Dt:!!i[2],bt:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,kt:i[4]};return f.encapsulation=t[4],t[5]&&(f.ht=t[5].map(c)),n[f.t]=f})(t,s)).forEach(t=>h.qt(t,class extends HTMLElement{})),function N(t,e){e.componentOnReady=((e,n)=>{if(t.S(e)&&!t.gt.has(e)){const o=t.jt.get(e)||[];o.push(n),t.jt.set(e,o)}else n(e)}),e.$r&&e.$r.forEach(t=>e.componentOnReady(t[0],t[1])),e.$r=null}(h,p),p.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"App","hydrated");
/*! Built with http://stenciljs.com */
App.loadBundle("hwcdpdfc",["exports","./chunk-e404d330.js"],function(e,t){window.App.h;var i=function(){function e(){this.lastClick=-1e4,this.tapClick=!1}return e.prototype.tapClickChanged=function(e){this.enableListener(this,"parent:ionActivated",e),this.enableListener(this,"touchstart",!e),this.enableListener(this,"mousedown",!e)},e.prototype.ionActivated=function(e){this.addRipple(e.detail.x,e.detail.y)},e.prototype.touchStart=function(e){this.lastClick=t.now(e);var i=e.touches[0];this.addRipple(i.clientX,i.clientY)},e.prototype.mouseDown=function(e){var i=t.now(e);this.lastClick<i-1e3&&this.addRipple(e.pageX,e.pageY)},e.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},e.prototype.addRipple=function(e,t){var i,r,l,p=this;this.queue.read(function(){var n=p.el.getBoundingClientRect(),o=n.width,c=n.height;l=Math.min(2*Math.sqrt(o*o+c*c),a),i=e-n.left-l/2,r=t-n.top-l/2}),this.queue.write(function(){var e=p.doc.createElement("div");e.classList.add("ripple-effect");var t=e.style,a=Math.max(n*Math.sqrt(l),o);t.top=r+"px",t.left=i+"px",t.width=l+"px",t.height=l+"px",t.animationDuration=a+"ms",p.el.appendChild(e),setTimeout(function(){return e.remove()},a+50)})},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"parent:ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-ripple-effect{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:var(--ion-ripple-background-color,#000);opacity:0;will-change:transform,opacity;pointer-events:none;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;contain:strict}\@-webkit-keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}\@keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}"},enumerable:!0,configurable:!0}),e}(),n=35,o=260,a=550;e.IonRippleEffect=i,Object.defineProperty(e,"__esModule",{value:!0})});
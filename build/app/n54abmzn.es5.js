/*! Built with http://stenciljs.com */
App.loadBundle("n54abmzn",["exports"],function(e){var n=window.App.h,t=function(){function e(){}return e.prototype.componentWillLoad=function(){this.loadCode()},e.prototype.loadCode=function(){var e=":root { </br>";JSON.parse(window.localStorage.getItem("palettes"))[this.index].map(function(n){e+="&nbsp;&nbsp;"+n.property+": "+n.value+"; </br>"}),e+="}",this.value=e},e.prototype.render=function(){return n("div",null,n("ion-content",null,n("div",{class:"code-block",innerHTML:this.value})))},Object.defineProperty(e,"is",{get:function(){return"app-code"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},index:{type:"Any",attr:"index"},value:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".code-block{padding:15px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;min-height:200px}.code .popover-content{width:203px!important}"},enumerable:!0,configurable:!0}),e}();e.AppCode=t,Object.defineProperty(e,"__esModule",{value:!0})});
/*! Built with http://stenciljs.com */
App.loadBundle("chunk-8cfbbd86.js", ["exports"], function (n) { window.App.h, n.assert = function (n, e) { if (!n) {
    var n_1 = "ASSERT: " + e;
    throw console.error(n_1), new Error(n_1);
} }, n.now = function (n) { return n.timeStamp || Date.now(); }, n.debounce = function (n, e) {
    if (e === void 0) { e = 0; }
    var t;
    return function () {
        var o = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            o[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [n, e].concat(o));
    };
}, n.pointerCoord = function (n) { if (n) {
    var e = n.changedTouches;
    if (e && e.length > 0) {
        var n_2 = e[0];
        return { x: n_2.clientX, y: n_2.clientY };
    }
    if (void 0 !== n.pageX)
        return { x: n.pageX, y: n.pageY };
} return { x: 0, y: 0 }; }; });

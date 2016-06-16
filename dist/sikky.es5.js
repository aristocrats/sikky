(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.sikky = factory());
}(this, function () {

	function sikky (x, y) { return x + y; };

	return sikky;

}));
//# sourceMappingURL=sikky.es5.js.map
/**
 * sikky
 * @version 0.9.7
 * @copyright (c) 2016 KFlash
 * @license MIT <https://github.com/kflash/sikky/blob/master/LICENSE>
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, function () {

    (function (factory) {
        if (typeof module === 'object' && typeof module.exports === 'object') {
            var v = factory(require, exports); if (v !== undefined) module.exports = v;
        }
        else if (typeof define === 'function' && define.amd) {
            define(["require", "exports"], factory);
        }
    })(function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = function (x, y) { return x + y; };
    });

}));
//# sourceMappingURL=sikky.es5.js.map
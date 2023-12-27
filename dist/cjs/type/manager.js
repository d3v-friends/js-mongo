"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.getCol = function () {
        return this.db.collection(this.colNm);
    };
    return Manager;
}());
exports.Manager = Manager;

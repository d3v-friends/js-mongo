var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.getCol = function () {
        return this.db.collection(this.colNm);
    };
    return Manager;
}());
export { Manager };

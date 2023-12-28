"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.model = function (conn) {
        return conn.model(this.colNm, this.schema);
    };
    return Manager;
}());
exports.Manager = Manager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBlL21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFLSTtJQUF5QixDQUFDO0lBRW5CLHVCQUFLLEdBQVosVUFBYSxJQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZxQiwwQkFBTyJ9
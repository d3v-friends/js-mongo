"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager(colNm, schema, migrate) {
        this.colNm = colNm;
        this.schema = schema;
        this.migrate = migrate;
    }
    Manager.prototype.model = function (conn) {
        return conn.model(this.colNm, this.schema);
    };
    return Manager;
}());
exports.Manager = Manager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlL21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7SUFDSSxpQkFDb0IsS0FBYSxFQUNiLE1BQWlCLEVBQ2pCLE9BQXVCO1FBRnZCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQ3hDLENBQUM7SUFFRyx1QkFBSyxHQUFaLFVBQWEsSUFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSwwQkFBTyJ9
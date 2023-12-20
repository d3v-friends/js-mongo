"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connect_1 = __importDefault(require("./connect"));
var finder_1 = __importDefault(require("./finder"));
var reindex_1 = __importDefault(require("./reindex"));
var migrate_1 = __importDefault(require("./migrate"));
var fnMongo = __assign(__assign(__assign({}, connect_1.default), finder_1.default), { reindex: reindex_1.default, migrate: migrate_1.default });
exports.default = fnMongo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9mdW5jL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBZ0M7QUFDaEMsb0RBQThCO0FBQzlCLHNEQUFnQztBQUNoQyxzREFBZ0M7QUFFaEMsSUFBTSxPQUFPLGtDQUNOLGlCQUFPLEdBQ1AsZ0JBQU0sS0FDVCxPQUFPLG1CQUFBLEVBQ1AsT0FBTyxtQkFBQSxHQUNWLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==
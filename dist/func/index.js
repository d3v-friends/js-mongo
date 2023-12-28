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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnMongo = void 0;
var connect_1 = require("./connect");
var migrate_1 = require("./migrate");
var finder_1 = require("./finder");
exports.fnMongo = __assign(__assign(__assign({}, connect_1.fnConn), finder_1.fnFinder), { migrate: migrate_1.migrate });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZnVuYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFtQztBQUNuQyxxQ0FBb0M7QUFDcEMsbUNBQW9DO0FBRXZCLFFBQUEsT0FBTyxrQ0FDYixnQkFBTSxHQUNOLGlCQUFRLEtBQ1gsT0FBTyxtQkFBQSxJQUNUIn0=
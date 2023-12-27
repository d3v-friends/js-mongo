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
var finder_1 = require("./finder");
var reindex_1 = require("./reindex");
var migrate_1 = require("./migrate");
exports.fnMongo = __assign(__assign(__assign({}, connect_1.fnConn), finder_1.fnFinder), { reindex: reindex_1.reindex, migrate: migrate_1.migrate });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnVuYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFtQztBQUNuQyxtQ0FBb0M7QUFFcEMscUNBQW9DO0FBQ3BDLHFDQUFvQztBQUV2QixRQUFBLE9BQU8sa0NBQ2IsZ0JBQU0sR0FDTixpQkFBUSxLQUNYLE9BQU8sbUJBQUEsRUFDUCxPQUFPLG1CQUFBLElBQ1QifQ==
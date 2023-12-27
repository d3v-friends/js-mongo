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
import { fnConn } from "./connect";
import { fnFinder } from "./finder";
import { reindex } from "./reindex";
import { migrate } from "./migrate";
export var fnMongo = __assign(__assign(__assign({}, fnConn), fnFinder), { reindex: reindex, migrate: migrate });

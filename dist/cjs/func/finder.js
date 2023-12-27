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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fnFinder = void 0;
var _js_pure_1 = require("@js-pure");
function findOne(col, filter) {
    var sorts = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        sorts[_i - 2] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var opt, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opt = {};
                    if (sorts.length !== 0)
                        opt.sort = sorts[0];
                    return [4 /*yield*/, col.findOne(filter, opt)];
                case 1:
                    res = _a.sent();
                    if (!res) {
                        throw new _js_pure_1.JsError("not found model", {
                            colNm: col.collectionName,
                            filter: filter,
                            opt: opt,
                        }, {
                            ko: "데이터 조회 실패",
                        });
                    }
                    return [2 /*return*/, res];
            }
        });
    });
}
function findAll(col, filter) {
    var sorts = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        sorts[_i - 2] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var opt;
        return __generator(this, function (_a) {
            opt = {};
            if (sorts.length !== 0)
                opt.sort = sorts[0];
            return [2 /*return*/, parseCur(col.find(filter, opt))];
        });
    });
}
function findList(col, filter, pager) {
    var sorts = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        sorts[_i - 3] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var opt, list, total;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opt = {};
                    if (sorts.length !== 0)
                        opt.sort = sorts[0];
                    opt.skip = pager.page * pager.size;
                    opt.limit = pager.size;
                    return [4 /*yield*/, parseCur(col.find(filter, opt))];
                case 1:
                    list = _a.sent();
                    return [4 /*yield*/, col.countDocuments(filter)];
                case 2:
                    total = _a.sent();
                    return [2 /*return*/, __assign(__assign({}, pager), { total: total, list: list })];
            }
        });
    });
}
function parseCur(cur) {
    return __awaiter(this, void 0, void 0, function () {
        var res, doc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = [];
                    _a.label = 1;
                case 1: return [4 /*yield*/, cur.hasNext()];
                case 2:
                    if (!_a.sent()) return [3 /*break*/, 4];
                    return [4 /*yield*/, cur.next()];
                case 3:
                    doc = _a.sent();
                    if (!doc) {
                        throw new _js_pure_1.JsError("fail decode cursor", {
                            namespace: cur.namespace,
                            evName: cur.eventNames(),
                        }, {
                            ko: "리스트 조회 실패",
                        });
                    }
                    res.push(doc);
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, res];
            }
        });
    });
}
exports.fnFinder = {
    one: findOne,
    all: findAll,
    list: findList,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Z1bmMvZmluZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW1DO0FBSW5DLFNBQWUsT0FBTyxDQUFtQyxHQUFxQixFQUFFLE1BQWM7SUFBRSxlQUFnQjtTQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7UUFBaEIsOEJBQWdCOzs7Ozs7O29CQUN0RyxHQUFHLEdBQWdCLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLHFCQUFNLEdBQUcsQ0FBQyxPQUFPLENBQU8sTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFBOztvQkFBMUMsR0FBRyxHQUFHLFNBQW9DO29CQUNoRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ1AsTUFBTSxJQUFJLGtCQUFPLENBQ2IsaUJBQWlCLEVBQ2pCOzRCQUNJLEtBQUssRUFBRSxHQUFHLENBQUMsY0FBYzs0QkFDekIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsR0FBRyxLQUFBO3lCQUNOLEVBQ0Q7NEJBQ0ksRUFBRSxFQUFFLFdBQVc7eUJBQ2xCLENBQ0osQ0FBQztvQkFDTixDQUFDO29CQUNELHNCQUFPLEdBQUcsRUFBQzs7OztDQUNkO0FBRUQsU0FBZSxPQUFPLENBQW1DLEdBQXFCLEVBQUUsTUFBYztJQUFFLGVBQWdCO1NBQWhCLFVBQWdCLEVBQWhCLHFCQUFnQixFQUFoQixJQUFnQjtRQUFoQiw4QkFBZ0I7Ozs7O1lBQ3RHLEdBQUcsR0FBZ0IsRUFBRSxDQUFDO1lBQzVCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLHNCQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFPLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDOzs7Q0FDaEQ7QUFFRCxTQUFlLFFBQVEsQ0FDbkIsR0FBcUIsRUFDckIsTUFBYyxFQUNkLEtBQVk7SUFDWixlQUFnQjtTQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7UUFBaEIsOEJBQWdCOzs7Ozs7O29CQUVWLEdBQUcsR0FBZ0IsRUFBRSxDQUFDO29CQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQzt3QkFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ25DLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFFVixxQkFBTSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBTyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBQTs7b0JBQWxELElBQUksR0FBRyxTQUEyQztvQkFDMUMscUJBQU0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBQTs7b0JBQXhDLEtBQUssR0FBRyxTQUFnQztvQkFDOUMsNENBQ08sS0FBSyxLQUNSLEtBQUssT0FBQSxFQUNMLElBQUksTUFBQSxLQUNOOzs7O0NBQ0w7QUFFRCxTQUFlLFFBQVEsQ0FBbUMsR0FBcUI7Ozs7OztvQkFDckUsR0FBRyxHQUFXLEVBQUUsQ0FBQzs7d0JBRWhCLHFCQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7eUJBQW5CLFNBQW1CO29CQUNWLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQXRCLEdBQUcsR0FBRyxTQUFnQjtvQkFDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUNQLE1BQU0sSUFBSSxrQkFBTyxDQUNiLG9CQUFvQixFQUNwQjs0QkFDSSxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7NEJBQ3hCLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFO3lCQUMzQixFQUNEOzRCQUNJLEVBQUUsRUFBRSxXQUFXO3lCQUNsQixDQUNKLENBQUM7b0JBQ04sQ0FBQztvQkFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzt3QkFHbEIsc0JBQU8sR0FBRyxFQUFDOzs7O0NBQ2Q7QUFFWSxRQUFBLFFBQVEsR0FBSTtJQUNyQixHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcsRUFBRSxPQUFPO0lBQ1osSUFBSSxFQUFFLFFBQVE7Q0FDakIsQ0FBQyJ9
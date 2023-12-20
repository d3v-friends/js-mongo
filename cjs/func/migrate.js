"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var _js_pure_1 = require("@js-pure");
var doc_1 = require("../doc");
var keyMigration = "migration";
function createCollection(db, models) {
    return __awaiter(this, void 0, void 0, function () {
        var cur, ls, col, _i, models_1, model;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cur = db.listCollections({}, { nameOnly: true });
                    ls = [];
                    _a.label = 1;
                case 1: return [4, cur.hasNext()];
                case 2:
                    if (!_a.sent()) return [3, 4];
                    return [4, cur.next()];
                case 3:
                    col = _a.sent();
                    if (!col)
                        return [3, 1];
                    ls.push(col.name);
                    return [3, 1];
                case 4:
                    _i = 0, models_1 = models;
                    _a.label = 5;
                case 5:
                    if (!(_i < models_1.length)) return [3, 8];
                    model = models_1[_i];
                    if (ls.includes(model.colNm))
                        return [3, 7];
                    return [4, db.createCollection(model.colNm)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    _i++;
                    return [3, 5];
                case 8: return [2];
            }
        });
    });
}
function default_1(db) {
    var models = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        models[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var docKv, isMig, _a, models_2, model, key, idx, i, fn;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    docKv = new doc_1.DocKv(db);
                    return [4, createCollection(db, __spreadArray([docKv], models, true))];
                case 1:
                    _b.sent();
                    return [4, docKv.get(keyMigration, false)];
                case 2:
                    isMig = _b.sent();
                    if (isMig) {
                        throw new _js_pure_1.JsError("in processing migration", {}, {
                            ko: "마이그레이션이 이미 실행중입니다.",
                        });
                    }
                    return [4, docKv.set(keyMigration, true)];
                case 3:
                    _b.sent();
                    _a = 0, models_2 = models;
                    _b.label = 4;
                case 4:
                    if (!(_a < models_2.length)) return [3, 11];
                    model = models_2[_a];
                    key = "mig_".concat(model.colNm);
                    return [4, docKv.get(key, 0)];
                case 5:
                    idx = _b.sent();
                    i = idx;
                    _b.label = 6;
                case 6:
                    if (!(i < model.migrate.length)) return [3, 10];
                    fn = model.migrate[i];
                    return [4, fn(db.collection(model.colNm))];
                case 7:
                    _b.sent();
                    return [4, docKv.set(key, i + 1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9:
                    i++;
                    return [3, 6];
                case 10:
                    _a++;
                    return [3, 4];
                case 11: return [4, docKv.set(keyMigration, false)];
                case 12:
                    _b.sent();
                    return [2];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlncmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL2Z1bmMvbWlncmF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFtQztBQUVuQyw4QkFBK0I7QUFJL0IsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO0FBRWpDLFNBQWUsZ0JBQWdCLENBQUMsRUFBTSxFQUFFLE1BQWM7Ozs7OztvQkFDNUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ2pELEVBQUUsR0FBYSxFQUFFLENBQUM7O3dCQUNqQixXQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7eUJBQW5CLFNBQW1CO29CQUNWLFdBQU0sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBdEIsR0FBRyxHQUFHLFNBQWdCO29CQUM1QixJQUFJLENBQUMsR0FBRzt3QkFBRSxjQUFTO29CQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OzBCQUdFLEVBQU4saUJBQU07Ozt5QkFBTixDQUFBLG9CQUFNLENBQUE7b0JBQWYsS0FBSztvQkFDVixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFBRSxjQUFTO29CQUN2QyxXQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUE7O29CQUF0QyxTQUFzQyxDQUFDOzs7b0JBRnpCLElBQU0sQ0FBQTs7Ozs7O0NBSTNCO0FBRUQsbUJBQThCLEVBQU07SUFBRSxnQkFBaUI7U0FBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1FBQWpCLCtCQUFpQjs7Ozs7OztvQkFDN0MsS0FBSyxHQUFHLElBQUksV0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixXQUFNLGdCQUFnQixDQUFDLEVBQUUsaUJBQUcsS0FBSyxHQUFLLE1BQU0sUUFBRSxFQUFBOztvQkFBOUMsU0FBOEMsQ0FBQztvQkFFakMsV0FBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBQTs7b0JBQTVDLEtBQUssR0FBRyxTQUFvQztvQkFDbEQsSUFBSSxLQUFLLEVBQUUsQ0FBQzt3QkFDUixNQUFNLElBQUksa0JBQU8sQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLEVBQUU7NEJBQzdDLEVBQUUsRUFBRSxvQkFBb0I7eUJBQzNCLENBQUMsQ0FBQztvQkFDUCxDQUFDO29CQUVELFdBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUE7O29CQUFuQyxTQUFtQyxDQUFDOzBCQUVWLEVBQU4saUJBQU07Ozt5QkFBTixDQUFBLG9CQUFNLENBQUE7b0JBQWYsS0FBSztvQkFDTixHQUFHLEdBQUcsY0FBTyxLQUFLLENBQUMsS0FBSyxDQUFFLENBQUM7b0JBQ3JCLFdBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUE7O29CQUE3QixHQUFHLEdBQUcsU0FBdUI7b0JBQzFCLENBQUMsR0FBRyxHQUFHOzs7eUJBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7b0JBQ2hDLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixXQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFBOztvQkFBcEMsU0FBb0MsQ0FBQztvQkFDckMsV0FBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUE7O29CQUEzQixTQUEyQixDQUFDOzs7b0JBSFksQ0FBQyxFQUFFLENBQUE7OztvQkFIL0IsSUFBTSxDQUFBOzt5QkFVMUIsV0FBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBQTs7b0JBQXBDLFNBQW9DLENBQUM7Ozs7O0NBQ3hDO0FBeEJELDRCQXdCQyJ9
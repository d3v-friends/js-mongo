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
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
var _js_pure_1 = require("@js-pure");
var doc_1 = require("../doc");
var keyMigration = "migration";
function migrate(conn) {
    var models = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        models[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var docKv, isMig, _a, models_1, model, key, idx, i, fn;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    docKv = new doc_1.KvManager();
                    return [4 /*yield*/, docKv.get(conn, keyMigration, false)];
                case 1:
                    isMig = _b.sent();
                    if (isMig) {
                        throw new _js_pure_1.JsError("in processing migration", {}, {
                            ko: "마이그레이션이 이미 실행중입니다.",
                        });
                    }
                    return [4 /*yield*/, docKv.set(conn, keyMigration, true)];
                case 2:
                    _b.sent();
                    _a = 0, models_1 = models;
                    _b.label = 3;
                case 3:
                    if (!(_a < models_1.length)) return [3 /*break*/, 10];
                    model = models_1[_a];
                    key = "mig_".concat(model.colNm);
                    return [4 /*yield*/, docKv.get(conn, key, 0)];
                case 4:
                    idx = _b.sent();
                    i = idx;
                    _b.label = 5;
                case 5:
                    if (!(i < model.migrate.length)) return [3 /*break*/, 9];
                    fn = model.migrate[i];
                    return [4 /*yield*/, fn(conn.model(model.colNm, model.schema))];
                case 6:
                    _b.sent();
                    return [4 /*yield*/, docKv.set(conn, key, i + 1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 5];
                case 9:
                    _a++;
                    return [3 /*break*/, 3];
                case 10: return [4 /*yield*/, docKv.set(conn, keyMigration, false)];
                case 11:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.migrate = migrate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlncmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jL21pZ3JhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW1DO0FBRW5DLDhCQUFtQztBQUduQyxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUFFakMsU0FBc0IsT0FBTyxDQUFDLElBQWdCO0lBQUUsZ0JBQXlCO1NBQXpCLFVBQXlCLEVBQXpCLHFCQUF5QixFQUF6QixJQUF5QjtRQUF6QiwrQkFBeUI7Ozs7Ozs7b0JBQy9ELEtBQUssR0FBRyxJQUFJLGVBQVMsRUFBRSxDQUFDO29CQUNoQixxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUE7O29CQUFsRCxLQUFLLEdBQUcsU0FBMEM7b0JBQ3hELElBQUksS0FBSyxFQUFFLENBQUM7d0JBQ1IsTUFBTSxJQUFJLGtCQUFPLENBQ2IseUJBQXlCLEVBQ3pCLEVBQUUsRUFDRjs0QkFDSSxFQUFFLEVBQUUsb0JBQW9CO3lCQUMzQixDQUNKLENBQUM7b0JBQ04sQ0FBQztvQkFFRCxxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUE7O29CQUF6QyxTQUF5QyxDQUFDOzBCQUVoQixFQUFOLGlCQUFNOzs7eUJBQU4sQ0FBQSxvQkFBTSxDQUFBO29CQUFmLEtBQUs7b0JBQ04sR0FBRyxHQUFHLGNBQU8sS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDO29CQUNyQixxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUE7O29CQUFuQyxHQUFHLEdBQUcsU0FBNkI7b0JBQ2hDLENBQUMsR0FBRyxHQUFHOzs7eUJBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7b0JBQ2hDLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixxQkFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFBOztvQkFBL0MsU0FBK0MsQ0FBQztvQkFDaEQscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQTs7b0JBQWpDLFNBQWlDLENBQUM7OztvQkFITSxDQUFDLEVBQUUsQ0FBQTs7O29CQUgvQixJQUFNLENBQUE7O3lCQVUxQixxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUE7O29CQUExQyxTQUEwQyxDQUFDOzs7OztDQUM5QztBQTFCRCwwQkEwQkMifQ==
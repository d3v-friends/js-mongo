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
import { JsError } from "@js-pure";
export var fnFinder = {
    findOne: function (model, filter, sort) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, model.findOne(filter, {}, {
                        sort: sort,
                    })];
                case 1:
                    res = _a.sent();
                    if (!res) {
                        throw new JsError("not found data", {
                            filter: filter,
                            sort: sort,
                        }, {
                            ko: "서버에러. 다시 시도하여 주십시오.",
                        });
                    }
                    return [2 /*return*/, res];
            }
        });
    }); },
    findAll: function (model, filter, sort) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, model.find(filter, {}, { sort: sort })];
        });
    }); },
    findList: function (model, filter, p, sort) { return __awaiter(void 0, void 0, void 0, function () {
        var total, list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, model.countDocuments(filter)];
                case 1:
                    total = _a.sent();
                    return [4 /*yield*/, model.find(filter, {}, {
                            skip: p.size * p.page,
                            limit: p.size,
                            sort: sort,
                        })];
                case 2:
                    list = _a.sent();
                    return [2 /*return*/, __assign(__assign({}, p), { total: total, list: list })];
            }
        });
    }); },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Z1bmMvZmluZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUluQyxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUc7SUFDcEIsT0FBTyxFQUFFLFVBQVUsS0FBZSxFQUFFLE1BQWMsRUFBRSxJQUFZOzs7O3dCQUNoRCxxQkFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUU7d0JBQ3hDLElBQUksTUFBQTtxQkFDUCxDQUFDLEVBQUE7O29CQUZJLEdBQUcsR0FBRyxTQUVWO29CQUVGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDUCxNQUFNLElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFOzRCQUNoQyxNQUFNLFFBQUE7NEJBQUUsSUFBSSxNQUFBO3lCQUNmLEVBQUU7NEJBQ0MsRUFBRSxFQUFFLHFCQUFxQjt5QkFDNUIsQ0FBQyxDQUFDO29CQUNQLENBQUM7b0JBRUQsc0JBQU8sR0FBRyxFQUFDOzs7U0FDZDtJQUNELE9BQU8sRUFBRSxVQUFVLEtBQWUsRUFBRSxNQUFjLEVBQUUsSUFBWTs7WUFDNUQsc0JBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxFQUFDOztTQUMzQztJQUNELFFBQVEsRUFBRSxVQUFVLEtBQWUsRUFBRSxNQUFjLEVBQUUsQ0FBUSxFQUFFLElBQVk7Ozs7d0JBQ3pELHFCQUFNLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUE7O29CQUExQyxLQUFLLEdBQUcsU0FBa0M7b0JBQ25DLHFCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRTs0QkFDdEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUk7NEJBQ3JCLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSTs0QkFDYixJQUFJLE1BQUE7eUJBQ1AsQ0FBQyxFQUFBOztvQkFKSSxJQUFJLEdBQUcsU0FJWDtvQkFDRiw0Q0FDTyxDQUFDLEtBQ0osS0FBSyxPQUFBLEVBQ0wsSUFBSSxNQUFBLEtBQ047OztTQUNMO0NBQ0osQ0FBQyJ9
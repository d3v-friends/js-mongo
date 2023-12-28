var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Schema } from "mongoose";
import { Manager } from "../type";
var KvManager = /** @class */ (function (_super) {
    __extends(KvManager, _super);
    function KvManager(colNm) {
        if (colNm === void 0) { colNm = "kvs"; }
        return _super.call(this, colNm, new Schema({
            key: {
                type: String,
                unique: true,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
        }, {
            timestamps: true,
        }), []) || this;
    }
    KvManager.prototype.get = function (conn, key) {
        var defs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            defs[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var model, res, def;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = conn.model(this.colNm, this.schema);
                        return [4 /*yield*/, model.findOne({ key: key })];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            return [2 /*return*/, JSON.parse(res.value)];
                        }
                        if (defs.length === 0) {
                            throw new JsError("no has data", { key: key }, {
                                ko: "서버에러. 다시 시도하여 주십시오.",
                            });
                        }
                        def = defs[0];
                        return [4 /*yield*/, model.create({
                                key: key,
                                value: JSON.stringify(def),
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, def];
                }
            });
        });
    };
    KvManager.prototype.set = function (conn, key, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model(conn).updateOne({
                            key: key,
                        }, {
                            $set: {
                                value: JSON.stringify(value),
                            },
                        }, {
                            upsert: true,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return KvManager;
}(Manager));
export { KvManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZG9jL2t2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBVyxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBYyxNQUFNLFVBQVUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBT3BDO0lBQStCLDZCQUFXO0lBQ3RDLG1CQUFZLEtBQWE7UUFBYixzQkFBQSxFQUFBLGFBQWE7UUFDckIsT0FBQSxNQUFLLFlBQ0QsS0FBSyxFQUNMLElBQUksTUFBTSxDQUNOO1lBQ0ksR0FBRyxFQUFFO2dCQUNELElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1lBQ0QsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2pCO1NBQ0osRUFDRDtZQUNJLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQ0osRUFDRCxFQUFFLENBQ0wsU0FBQztJQUNOLENBQUM7SUFFWSx1QkFBRyxHQUFoQixVQUFvQixJQUFnQixFQUFFLEdBQVc7UUFBRSxjQUFZO2FBQVosVUFBWSxFQUFaLHFCQUFZLEVBQVosSUFBWTtZQUFaLDZCQUFZOzs7Ozs7O3dCQUNyRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdEMscUJBQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBQTs7d0JBQWxDLEdBQUcsR0FBRyxTQUE0Qjt3QkFDeEMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs0QkFDTixzQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQzt3QkFDakMsQ0FBQzt3QkFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7NEJBQ3BCLE1BQU0sSUFBSSxPQUFPLENBQ2IsYUFBYSxFQUNiLEVBQUUsR0FBRyxLQUFBLEVBQUUsRUFDUDtnQ0FDSSxFQUFFLEVBQUUscUJBQXFCOzZCQUM1QixDQUNKLENBQUM7d0JBQ04sQ0FBQzt3QkFFSyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixxQkFBTSxLQUFLLENBQUMsTUFBTSxDQUFDO2dDQUNmLEdBQUcsS0FBQTtnQ0FDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7NkJBQzdCLENBQUMsRUFBQTs7d0JBSEYsU0FHRSxDQUFDO3dCQUNILHNCQUFPLEdBQUcsRUFBQzs7OztLQUNkO0lBRVksdUJBQUcsR0FBaEIsVUFBb0IsSUFBZ0IsRUFBRSxHQUFXLEVBQUUsS0FBUTs7Ozs0QkFDdkQscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQzVCOzRCQUNJLEdBQUcsS0FBQTt5QkFDTixFQUNEOzRCQUNJLElBQUksRUFBRTtnQ0FDRixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7NkJBQy9CO3lCQUNKLEVBQ0Q7NEJBQ0ksTUFBTSxFQUFFLElBQUk7eUJBQ2YsQ0FDSixFQUFBOzt3QkFaRCxTQVlDLENBQUM7Ozs7O0tBQ0w7SUFDTCxnQkFBQztBQUFELENBQUMsQUFoRUQsQ0FBK0IsT0FBTyxHQWdFckMifQ==
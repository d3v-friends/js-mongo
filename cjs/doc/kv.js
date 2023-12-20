"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var _js_pure_1 = require("@js-pure");
var mongodb_1 = require("mongodb");
var type_1 = require("../type");
var DocKv = (function (_super) {
    __extends(DocKv, _super);
    function DocKv(db) {
        var colNms = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            colNms[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.db = db;
        _this.colNm = _js_pure_1.fnParam.string(colNms, "kvs");
        _this.migrate = [
            function (col) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, col.createIndex({
                                key: 1,
                            }, {
                                unique: true,
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            }); },
        ];
        return _this;
    }
    DocKv.prototype.get = function (key) {
        var defaults = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaults[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var col, res, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        col = this.getCol();
                        return [4, col.findOne({ key: key })];
                    case 1:
                        res = _a.sent();
                        if (!!res) return [3, 3];
                        if (defaults.length === 0) {
                            throw new _js_pure_1.JsError("not found value", { key: key }, {
                                ko: "내부서버오류",
                            });
                        }
                        value = JSON.stringify(defaults[0]);
                        return [4, col.insertOne({
                                _id: new mongodb_1.ObjectId(),
                                key: key,
                                value: value,
                                updatedAt: new Date(),
                            })];
                    case 2:
                        _a.sent();
                        return [2, defaults[0]];
                    case 3: throw new Error("not impl");
                }
            });
        });
    };
    DocKv.prototype.set = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var col;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        col = this.getCol();
                        return [4, col.updateOne({
                                key: key,
                            }, {
                                $set: {
                                    value: JSON.stringify(value),
                                    updatedAt: new Date(),
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return DocKv;
}(type_1.Docs));
exports.default = DocKv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9kb2Mva3YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNEM7QUFDNUMsbUNBQXVDO0FBQ3ZDLGdDQUEwQztBQVMxQztJQUFtQyx5QkFBUTtJQUt2QyxlQUFZLEVBQU07UUFBRSxnQkFBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLCtCQUFtQjs7UUFDbkMsWUFBQSxNQUFLLFdBQUUsU0FBQztRQUNSLEtBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSSxDQUFDLEtBQUssR0FBRyxrQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBRztZQUNYLFVBQU0sR0FBRzs7O2dDQUNMLFdBQU0sR0FBRyxDQUFDLFdBQVcsQ0FDakI7Z0NBQ0ksR0FBRyxFQUFFLENBQUM7NkJBQ1QsRUFDRDtnQ0FDSSxNQUFNLEVBQUUsSUFBSTs2QkFDZixDQUNKLEVBQUE7OzRCQVBELFNBT0MsQ0FBQzs7OztpQkFDTDtTQUNKLENBQUM7O0lBQ04sQ0FBQztJQUVZLG1CQUFHLEdBQWhCLFVBQXdCLEdBQVc7UUFBRSxrQkFBb0I7YUFBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1lBQXBCLGlDQUFvQjs7Ozs7Ozt3QkFDL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDZCxXQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLEVBQUE7O3dCQUFoQyxHQUFHLEdBQUcsU0FBMEI7NkJBQ2xDLENBQUMsR0FBRyxFQUFKLGNBQUk7d0JBQ0osSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDOzRCQUN4QixNQUFNLElBQUksa0JBQU8sQ0FDYixpQkFBaUIsRUFDakIsRUFBRSxHQUFHLEtBQUEsRUFBRSxFQUNQO2dDQUNJLEVBQUUsRUFBRSxRQUFROzZCQUNmLENBQUMsQ0FBQzt3QkFDWCxDQUFDO3dCQUVLLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUUxQyxXQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0NBQ2hCLEdBQUcsRUFBRSxJQUFJLGtCQUFRLEVBQUU7Z0NBQ25CLEdBQUcsS0FBQTtnQ0FDSCxLQUFLLE9BQUE7Z0NBQ0wsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFOzZCQUN4QixDQUFDLEVBQUE7O3dCQUxGLFNBS0UsQ0FBQzt3QkFFSCxXQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQzs0QkFHdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs7OztLQUMvQjtJQUVZLG1CQUFHLEdBQWhCLFVBQXdCLEdBQVcsRUFBRSxLQUFZOzs7Ozs7d0JBQ3ZDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQzFCLFdBQU0sR0FBRyxDQUFDLFNBQVMsQ0FDZjtnQ0FDSSxHQUFHLEtBQUE7NkJBQ04sRUFDRDtnQ0FDSSxJQUFJLEVBQUU7b0NBQ0YsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO29DQUM1QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7aUNBQ3hCOzZCQUNKLENBQUMsRUFBQTs7d0JBVE4sU0FTTSxDQUFDOzs7OztLQUNWO0lBQ0wsWUFBQztBQUFELENBQUMsQUFoRUQsQ0FBbUMsV0FBSSxHQWdFdEMifQ==
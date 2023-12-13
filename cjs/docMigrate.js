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
exports.docMango = void 0;
var mongodb_1 = require("mongodb");
exports.docMango = "mangos";
function init(m) {
    return __awaiter(this, void 0, void 0, function () {
        var ls, idx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, m.collection(exports.docMango).listIndexes()];
                case 1:
                    ls = _a.sent();
                    return [4 /*yield*/, ls.hasNext()];
                case 2:
                    if (!_a.sent()) return [3 /*break*/, 4];
                    return [4 /*yield*/, ls.next()];
                case 3:
                    idx = _a.sent();
                    //todo
                    throw new Error("not impl");
                case 4: return [2 /*return*/];
            }
        });
    });
}
function get(m, name) {
    return __awaiter(this, void 0, void 0, function () {
        var count, now;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, m.collection(exports.docMango).countDocuments({
                        name: name,
                    })];
                case 1:
                    count = _a.sent();
                    now = new Date();
                    if (!(count == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, m.collection(exports.docMango).insertOne({
                            _id: new mongodb_1.ObjectId(),
                            name: name,
                            createdAt: now,
                            updatedAt: now,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, m.collection(exports.docMango).findOne({ name: name })];
            }
        });
    });
}
function migrate(m, fns) {
    return __awaiter(this, void 0, void 0, function () {
        var doc, i, fn, memo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, init(m)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, get(m, "migrate")];
                case 2:
                    doc = _a.sent();
                    doc.nextIdx = doc.nextIdx || 0;
                    i = doc.nextIdx;
                    _a.label = 3;
                case 3:
                    if (!(i < fns.length)) return [3 /*break*/, 7];
                    fn = fns[i];
                    return [4 /*yield*/, fn(m)];
                case 4:
                    memo = _a.sent();
                    return [4 /*yield*/, m.collection(exports.docMango).updateOne({
                            _id: doc._id,
                        }, {
                            $set: {
                                updatedAt: new Date(),
                            },
                            $push: {
                                memo: memo,
                            },
                            $inc: {
                                nextIdx: 1,
                            },
                        })];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 3];
                case 7: return [2 /*return*/, get(m, "migrate")];
            }
        });
    });
}
exports.default = migrate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jTWlncmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2RvY01pZ3JhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXVDO0FBYzFCLFFBQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUlqQyxTQUFlLElBQUksQ0FBQyxDQUFLOzs7Ozt3QkFDVixxQkFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQTs7b0JBQS9DLEVBQUUsR0FBRyxTQUEwQztvQkFDakQscUJBQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt5QkFBbEIsU0FBa0IsRUFBbEIsd0JBQWtCO29CQUNOLHFCQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQXJCLEdBQUcsR0FBRyxTQUFlO29CQUMzQixNQUFNO29CQUVOLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7O0NBRW5DO0FBRUQsU0FBZSxHQUFHLENBQThCLENBQUssRUFBRSxJQUFlOzs7Ozt3QkFDcEQscUJBQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBUSxDQUFDLENBQUMsY0FBYyxDQUFDO3dCQUN0RCxJQUFJLE1BQUE7cUJBQ1AsQ0FBQyxFQUFBOztvQkFGSSxLQUFLLEdBQUcsU0FFWjtvQkFFSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzt5QkFDbkIsQ0FBQSxLQUFLLElBQUksQ0FBQyxDQUFBLEVBQVYsd0JBQVU7b0JBQ1YscUJBQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBUSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUNuQyxHQUFHLEVBQUUsSUFBSSxrQkFBUSxFQUFFOzRCQUNuQixJQUFJLE1BQUE7NEJBQ0osU0FBUyxFQUFFLEdBQUc7NEJBQ2QsU0FBUyxFQUFFLEdBQUc7eUJBQ2pCLENBQUMsRUFBQTs7b0JBTEYsU0FLRSxDQUFDOzt3QkFHUCxzQkFBTyxDQUFDLENBQUMsVUFBVSxDQUFNLGdCQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLEVBQUM7Ozs7Q0FDeEQ7QUFLRCxTQUE4QixPQUFPLENBQUMsQ0FBSyxFQUFFLEdBQWdCOzs7Ozt3QkFDekQscUJBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFBOztvQkFBYixTQUFhLENBQUM7b0JBQ0YscUJBQU0sR0FBRyxDQUFhLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBQTs7b0JBQXpDLEdBQUcsR0FBRyxTQUFtQztvQkFDL0MsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztvQkFFdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPOzs7eUJBQUUsQ0FBQSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtvQkFDOUIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFTCxxQkFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUE7O29CQUFsQixJQUFJLEdBQUcsU0FBVztvQkFDeEIscUJBQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBUSxDQUFDLENBQUMsU0FBUyxDQUNsQzs0QkFDSSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7eUJBQ2YsRUFDRDs0QkFDSSxJQUFJLEVBQUU7Z0NBQ0YsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFOzZCQUN4Qjs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0gsSUFBSSxNQUFBOzZCQUNQOzRCQUNELElBQUksRUFBRTtnQ0FDRixPQUFPLEVBQUUsQ0FBQzs2QkFDYjt5QkFDSixDQUFDLEVBQUE7O29CQWROLFNBY00sQ0FBQzs7O29CQWxCK0IsQ0FBQyxFQUFFLENBQUE7O3dCQXNCN0Msc0JBQU8sR0FBRyxDQUFhLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBQzs7OztDQUN4QztBQTVCRCwwQkE0QkMifQ==
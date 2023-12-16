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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { fnErr } from "@js-pure";
import { ObjectId } from "mongodb";
var colNm = "kvs";
var fn = {
    col: function (db) { return db.collection(colNm); },
    get: function (db, key) {
        var defaults = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            defaults[_i - 2] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            var col, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        col = fn.col(db);
                        return [4, col.findOne({ key: key })];
                    case 1:
                        res = _a.sent();
                        if (!!res) return [3, 3];
                        if (defaults.length === 0) {
                            throw new fnErr.Error("not found key value: key=".concat(key), {
                                ko: "KV \uC870\uD68C \uC2E4\uD328: key=".concat(key),
                            });
                        }
                        return [4, col.insertOne({
                                _id: new ObjectId(),
                                key: key,
                                value: JSON.stringify(defaults[0]),
                                updatedAt: new Date(),
                            })];
                    case 2:
                        _a.sent();
                        return [2, defaults[0]];
                    case 3: return [2, JSON.parse(res.value)];
                }
            });
        });
    },
    getString: function (db, key) {
        var defaults = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            defaults[_i - 2] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, fn.get.apply(fn, __spreadArray([db, key], defaults, false))];
            });
        });
    },
    getInt: function (db, key) {
        var defaults = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            defaults[_i - 2] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(defaults.length === 0)) return [3, 2];
                        _a = parseInt;
                        return [4, fn.getString(db, key)];
                    case 1: return [2, _a.apply(void 0, [_c.sent()])];
                    case 2:
                        _b = parseInt;
                        return [4, fn.getString(db, key, "".concat(defaults[0]))];
                    case 3: return [2, _b.apply(void 0, [_c.sent()])];
                }
            });
        });
    },
    getBool: function (db, key) {
        var defs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            defs[_i - 2] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, fn.get.apply(fn, __spreadArray([db, key], defs, false))];
            });
        });
    },
    set: function (db, key, value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fn.col(db).updateOne({
                        key: key,
                    }, {
                        $set: {
                            value: JSON.stringify(value),
                            updatedAt: new Date(),
                        },
                    }, {
                        upsert: true,
                    })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); },
    getAndSet: function (db, key, prev, next) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fn.col(db).findOneAndUpdate({
                        key: key,
                        value: JSON.stringify(prev),
                    }, {
                        $set: {
                            value: JSON.stringify(next),
                            updatedAt: new Date(),
                        },
                    })];
                case 1:
                    res = _a.sent();
                    if (!res) {
                        throw new fnErr.Error(fnErr.msg("not found key_value", {
                            key: key,
                        }), {
                            ko: "KV \uC5D0\uC11C \uC774\uC804 \uB370\uC774\uD130\uB97C \uCC3E\uC9C0 \uBABB\uD558\uC600\uC2B5\uB2C8\uB2E4: key=".concat(key),
                        });
                    }
                    return [2, next];
            }
        });
    }); },
    has: function (db, key) { return __awaiter(void 0, void 0, void 0, function () {
        var count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fn.col(db).countDocuments({ key: key })];
                case 1:
                    count = _a.sent();
                    return [2, 0 < count];
            }
        });
    }); },
};
var doc = __assign({ colNm: colNm, migrate: [
        function (col) { return __awaiter(void 0, void 0, void 0, function () {
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
    ] }, fn);
export default doc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9kb2Mva3YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBa0IsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBVW5ELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQztBQUVwQixJQUFNLEVBQUUsR0FBRztJQUNQLEdBQUcsRUFBRSxVQUFDLEVBQU0sSUFBcUIsT0FBQSxFQUFFLENBQUMsVUFBVSxDQUFLLEtBQUssQ0FBQyxFQUF4QixDQUF3QjtJQUN6RCxHQUFHLEVBQUUsVUFBdUQsRUFBTSxFQUFFLEdBQVc7UUFBRSxrQkFBa0I7YUFBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1lBQWxCLGlDQUFrQjs7Ozs7Ozt3QkFDekYsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ1gsV0FBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxFQUFBOzt3QkFBaEMsR0FBRyxHQUFHLFNBQTBCOzZCQUNsQyxDQUFDLEdBQUcsRUFBSixjQUFJO3dCQUNKLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQzs0QkFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsbUNBQTRCLEdBQUcsQ0FBRSxFQUFFO2dDQUNyRCxFQUFFLEVBQUUsNENBQWlCLEdBQUcsQ0FBRTs2QkFDN0IsQ0FBQyxDQUFDO3dCQUNQLENBQUM7d0JBRUQsV0FBTSxHQUFHLENBQUMsU0FBUyxDQUFDO2dDQUNoQixHQUFHLEVBQUUsSUFBSSxRQUFRLEVBQUU7Z0NBQ25CLEdBQUcsRUFBRSxHQUFHO2dDQUNSLEtBQUss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
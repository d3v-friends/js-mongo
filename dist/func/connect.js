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
exports.fnConn = void 0;
var _js_pure_1 = require("@js-pure");
var mongoose_1 = require("mongoose");
exports.fnConn = {
    connect: function (_a) {
        var host = _a.host, username = _a.username, password = _a.password, database = _a.database;
        return __awaiter(void 0, void 0, void 0, function () {
            var client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)("mongodb://".concat(host), {
                            user: username,
                            pass: password,
                            dbName: database,
                        })];
                    case 1:
                        client = _b.sent();
                        return [2 /*return*/, client.connection];
                }
            });
        });
    },
    connectByEnv: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, exports.fnConn.connect({
                    host: _js_pure_1.fnEnv.string("MG_HOST"),
                    username: _js_pure_1.fnEnv.string("MG_USERNAME"),
                    password: _js_pure_1.fnEnv.string("MG_PASSWORD"),
                    database: _js_pure_1.fnEnv.string("MG_DATABASE"),
                })];
        });
    }); },
    connectionFactory: function (v) {
        return function () {
            return exports.fnConn.connect(v);
        };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5jL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlDO0FBRWpDLHFDQUErQztBQUlsQyxRQUFBLE1BQU0sR0FBRztJQUNsQixPQUFPLEVBQUUsVUFBTyxFQUFrRDtZQUFoRCxJQUFJLFVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQUE7Ozs7OzRCQUNqQyxxQkFBTSxJQUFBLGtCQUFPLEVBQUMsb0JBQWEsSUFBSSxDQUFFLEVBQUU7NEJBQzlDLElBQUksRUFBRSxRQUFROzRCQUNkLElBQUksRUFBRSxRQUFROzRCQUNkLE1BQU0sRUFBRSxRQUFRO3lCQUNuQixDQUFDLEVBQUE7O3dCQUpJLE1BQU0sR0FBRyxTQUliO3dCQUNGLHNCQUFPLE1BQU0sQ0FBQyxVQUFVLEVBQUM7Ozs7S0FDNUI7SUFDRCxZQUFZLEVBQUU7O1lBQ1Ysc0JBQU8sY0FBTSxDQUFDLE9BQU8sQ0FBQztvQkFDbEIsSUFBSSxFQUFFLGdCQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDN0IsUUFBUSxFQUFFLGdCQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDckMsUUFBUSxFQUFFLGdCQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDckMsUUFBUSxFQUFFLGdCQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztpQkFDeEMsQ0FBQyxFQUFDOztTQUNOO0lBQ0QsaUJBQWlCLEVBQUUsVUFBQyxDQUFhO1FBQzdCLE9BQU87WUFDSCxPQUFPLGNBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKLENBQUMifQ==
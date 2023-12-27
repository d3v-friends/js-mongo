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
import { fnEnv } from "@js-pure";
import { connect } from "mongoose";
export var fnConn = {
    connect: function (_a) {
        var host = _a.host, username = _a.username, password = _a.password, database = _a.database;
        return __awaiter(void 0, void 0, void 0, function () {
            var client;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, connect("mongodb://".concat(host), {
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
            return [2 /*return*/, fnConn.connect({
                    host: fnEnv.string("MG_HOST"),
                    username: fnEnv.string("MG_USERNAME"),
                    password: fnEnv.string("MG_PASSWORD"),
                    database: fnEnv.string("MG_DATABASE"),
                })];
        });
    }); },
    connectionFactory: function (v) {
        return function () {
            return fnConn.connect(v);
        };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVqQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sVUFBVSxDQUFDO0FBSS9DLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRztJQUNsQixPQUFPLEVBQUUsVUFBTyxFQUFrRDtZQUFoRCxJQUFJLFVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQUE7Ozs7OzRCQUNqQyxxQkFBTSxPQUFPLENBQUMsb0JBQWEsSUFBSSxDQUFFLEVBQUU7NEJBQzlDLElBQUksRUFBRSxRQUFROzRCQUNkLElBQUksRUFBRSxRQUFROzRCQUNkLE1BQU0sRUFBRSxRQUFRO3lCQUNuQixDQUFDLEVBQUE7O3dCQUpJLE1BQU0sR0FBRyxTQUliO3dCQUNGLHNCQUFPLE1BQU0sQ0FBQyxVQUFVLEVBQUM7Ozs7S0FFNUI7SUFDRCxZQUFZLEVBQUU7O1lBQ1Ysc0JBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUM3QixRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDckMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2lCQUN4QyxDQUFDLEVBQUM7O1NBQ047SUFDRCxpQkFBaUIsRUFBRSxVQUFDLENBQWE7UUFDN0IsT0FBTztZQUNILE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0osQ0FBQyJ9
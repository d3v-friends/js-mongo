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
var mongodb_1 = require("mongodb");
exports.fnConn = {
    connect: function (_a) {
        var host = _a.host, username = _a.username, password = _a.password, database = _a.database, opts = _a.opts;
        return __awaiter(void 0, void 0, void 0, function () {
            var client;
            return __generator(this, function (_b) {
                if (!opts) {
                    opts = {};
                }
                opts.auth = {
                    username: username,
                    password: password,
                };
                client = new mongodb_1.MongoClient("mongodb://".concat(host), opts);
                return [2 /*return*/, client.db(database)];
            });
        });
    },
    connectionFactory: function (v) {
        return function () {
            return exports.fnConn.connect(v);
        };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mdW5jL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTBDO0FBSzdCLFFBQUEsTUFBTSxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxVQUFPLEVBQXdEO1lBQXRELElBQUksVUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBQTs7OztnQkFDdEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNSLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxJQUFJLENBQUMsSUFBSSxHQUFHO29CQUNSLFFBQVEsVUFBQTtvQkFDUixRQUFRLFVBQUE7aUJBQ1gsQ0FBQztnQkFFSSxNQUFNLEdBQUcsSUFBSSxxQkFBVyxDQUFDLG9CQUFhLElBQUksQ0FBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxzQkFBTyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDOzs7S0FDOUI7SUFDRCxpQkFBaUIsRUFBRSxVQUFDLENBQWE7UUFDN0IsT0FBTztZQUNILE9BQU8sY0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0osQ0FBQyJ9
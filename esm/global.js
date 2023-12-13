"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("./connect"));
class GlobalMongo {
    static ins = new GlobalMongo();
    db;
    constructor() {
    }
    async connect(i) {
        this.db = await (0, connect_1.default)(i);
        return this.db;
    }
    getDB() {
        if (!this.db)
            throw new Error("not connected mongodb");
        return this.db;
    }
}
exports.default = GlobalMongo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esd0RBQWdEO0FBRWhELE1BQXFCLFdBQVc7SUFDNUIsTUFBTSxDQUFVLEdBQUcsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUM3QyxFQUFFLENBQStCO0lBRXpDO0lBQ0EsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBYTtRQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBQSxpQkFBTyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7QUFmTCw4QkFnQkMifQ==
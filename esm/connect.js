"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
function parseConnectArgs({ host }) {
    return `mongodb://${host}?w=majority`;
}
function connect(i) {
    const client = new mongodb_1.MongoClient(parseConnectArgs(i), {
        auth: {
            username: i.username,
            password: i.password,
        },
    });
    return client.db(i.database);
}
exports.default = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2Nvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBMEM7QUFTMUMsU0FBUyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBYztJQUMxQyxPQUFPLGFBQWEsSUFBSSxhQUFhLENBQUM7QUFDMUMsQ0FBQztBQUVELFNBQXdCLE9BQU8sQ0FBQyxDQUFhO0lBQ3pDLE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoRCxJQUFJLEVBQUU7WUFDRixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7WUFDcEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1NBQ3ZCO0tBQ0osQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBVEQsMEJBU0MifQ==
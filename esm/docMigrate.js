"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docMango = void 0;
const mongodb_1 = require("mongodb");
exports.docMango = "mangos";
async function init(m) {
    const ls = await m.collection(exports.docMango).listIndexes();
    if (await ls.hasNext()) {
        const idx = await ls.next();
        //todo
        throw new Error("not impl");
    }
}
async function get(m, name) {
    const count = await m.collection(exports.docMango).countDocuments({
        name,
    });
    const now = new Date();
    if (count == 0) {
        await m.collection(exports.docMango).insertOne({
            _id: new mongodb_1.ObjectId(),
            name,
            createdAt: now,
            updatedAt: now,
        });
    }
    return m.collection(exports.docMango).findOne({ name });
}
async function migrate(m, fns) {
    await init(m);
    const doc = await get(m, "migrate");
    doc.nextIdx = doc.nextIdx || 0;
    for (let i = doc.nextIdx; i < fns.length; i++) {
        const fn = fns[i];
        const memo = await fn(m);
        await m.collection(exports.docMango).updateOne({
            _id: doc._id,
        }, {
            $set: {
                updatedAt: new Date(),
            },
            $push: {
                memo,
            },
            $inc: {
                nextIdx: 1,
            },
        });
    }
    return get(m, "migrate");
}
exports.default = migrate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jTWlncmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2RvY01pZ3JhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXVDO0FBYzFCLFFBQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUlqQyxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUs7SUFDckIsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0RCxJQUFJLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDckIsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTTtRQUVOLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztBQUNMLENBQUM7QUFFRCxLQUFLLFVBQVUsR0FBRyxDQUE4QixDQUFLLEVBQUUsSUFBZTtJQUNsRSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN0RCxJQUFJO0tBQ1AsQ0FBQyxDQUFDO0lBRUgsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2QixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNiLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBUSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ25DLEdBQUcsRUFBRSxJQUFJLGtCQUFRLEVBQUU7WUFDbkIsSUFBSTtZQUNKLFNBQVMsRUFBRSxHQUFHO1lBQ2QsU0FBUyxFQUFFLEdBQUc7U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBTSxnQkFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBS2MsS0FBSyxVQUFVLE9BQU8sQ0FBQyxDQUFLLEVBQUUsR0FBZ0I7SUFDekQsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZCxNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBYSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUUvQixLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM1QyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2xDO1lBQ0ksR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1NBQ2YsRUFDRDtZQUNJLElBQUksRUFBRTtnQkFDRixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7YUFDeEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSTthQUNQO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSixDQUFDLENBQUM7SUFFWCxDQUFDO0lBRUQsT0FBTyxHQUFHLENBQWEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUE1QkQsMEJBNEJDIn0=
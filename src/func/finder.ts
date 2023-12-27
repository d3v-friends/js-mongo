import { JsError } from "@js-pure";
import { Pager, ResultList } from "@src/type";
import { Model } from "mongoose";

export const fnFinder = {
    findOne: async <T>(model: Model<T>, filter: object, sort: object): Promise<T> => {
        const res = await model.findOne(filter, {}, {
            sort,
        });

        if (!res) {
            throw new JsError("not found data", {
                filter, sort,
            }, {
                ko: "서버에러. 다시 시도하여 주십시오.",
            });
        }

        return res;
    },
    findAll: async <T>(model: Model<T>, filter: object, sort: object): Promise<T[]> => {
        return model.find(filter, {}, { sort });
    },
    findList: async <T>(model: Model<T>, filter: object, p: Pager, sort: object): Promise<ResultList<T>> => {
        const total = await model.countDocuments(filter);
        const list = await model.find(filter, {}, {
            skip: p.size * p.page,
            limit: p.size,
            sort,
        });
        return {
            ...p,
            total,
            list,
        };
    },
};

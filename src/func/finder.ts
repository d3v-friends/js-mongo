import { JsError } from "@js-pure";
import { Pager, ResultList, MongooseModel } from "../type";

export const fnFinder = {
    findOne: async <T>(model: MongooseModel<T>, filter: object, sort: object): Promise<T> => {
        const res = await model.findOne(
            filter,
            {},
            {
                sort,
            },
        );

        if (!res) {
            throw new JsError(
                "not found data",
                {
                    filter,
                    sort,
                },
                {
                    ko: "서버에러. 다시 시도하여 주십시오.",
                },
            );
        }

        return res as T;
    },
    findAll: async <T>(model: MongooseModel<T>, filter: object, sort: object): Promise<T[]> => {
        return model.find(filter, {}, { sort });
    },
    findList: async <T>(model: MongooseModel<T>, filter: object, p: Pager, sort: object): Promise<ResultList<T>> => {
        const total = await model.countDocuments(filter);
        const list = (await model.find(
            filter,
            {},
            {
                skip: p.size * p.page,
                limit: p.size,
                sort,
            },
        )) as T[];
        return {
            ...p,
            total,
            list,
        };
    },
};

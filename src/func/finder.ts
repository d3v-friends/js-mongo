import { JsError } from "@js-pure";
import type { Pager, ResultList } from "../type";
import { Collection, FindCursor, FindOptions, Sort } from "mongodb";

export const findOne = async <RES extends object>(col: Collection<RES>, filter: object, ...sorts: Sort[]): Promise<RES> => {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    const res = await col.findOne<RES>(filter, opt);
    if (!res) {
        throw new JsError(
            "not found model",
            {
                colNm: col.collectionName,
                filter: filter,
                opt,
            },
            {
                ko: "데이터 조회 실패",
            },
        );
    }
    return res;
};

export const findAll = <RES extends object>(col: Collection<RES>, filter: object, ...sorts: Sort[]): Promise<RES[]> => {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    return readAll(col.find<RES>(filter, opt));
};

export const findList = async <RES extends object>(
    col: Collection<RES>,
    filter: object,
    pager: Pager,
    ...sorts: Sort[]
): Promise<ResultList<RES>> => {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    opt.skip = pager.page * pager.size;
    opt.limit = pager.size;

    const list = await readAll(col.find<RES>(filter, opt));
    const total = await col.countDocuments(filter);
    return {
        ...pager,
        total,
        list,
    };
};

export const readAll = async <RES extends object>(cur: FindCursor<RES>): Promise<RES[]> => {
    const res: RES[] = [];

    while (await cur.hasNext()) {
        const doc = await cur.next();
        if (!doc) {
            throw new JsError(
                "fail decode cursor",
                {
                    namespace: cur.namespace,
                    evName: cur.eventNames(),
                },
                {
                    ko: "리스트 조회 실패",
                },
            );
        }
        res.push(doc);
    }

    return res;
};

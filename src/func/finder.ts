import { JsError } from "@js-pure";
import type { Pager, ResultList } from "../type";
import { Collection, Document, FindCursor, FindOptions, Sort } from "mongodb";

async function findOne<DATA extends Document = Document>(col: Collection<DATA>, filter: object, ...sorts: Sort[]): Promise<DATA> {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    const res = await col.findOne<DATA>(filter, opt);
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
}

async function findAll<DATA extends Document = Document>(col: Collection<DATA>, filter: object, ...sorts: Sort[]): Promise<DATA[]> {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    return parseCur(col.find<DATA>(filter, opt));
}

async function findList<DATA extends Document = Document>(
    col: Collection<DATA>,
    filter: object,
    pager: Pager,
    ...sorts: Sort[]
): Promise<ResultList<DATA>> {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    opt.skip = pager.page * pager.size;
    opt.limit = pager.size;

    const list = await parseCur(col.find<DATA>(filter, opt));
    const total = await col.countDocuments(filter);
    return {
        ...pager,
        total,
        list,
    };
}

async function parseCur<DATA extends Document = Document>(cur: FindCursor<DATA>): Promise<DATA[]> {
    const res: DATA[] = [];

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
}

export const fnFinder =  {
    one: findOne,
    all: findAll,
    list: findList,
};

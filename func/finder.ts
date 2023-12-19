import { fnErr } from "@js-pure";
import { Pager, ResultList } from "@src/type";
import { Collection, FindCursor, FindOptions, Sort } from "mongodb";

async function findOne<RES extends object>(col: Collection<RES>, filter: object, ...sorts: Sort[]): Promise<RES> {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    const res = await col.findOne<RES>(filter, opt);
    if (!res) {
        throw new fnErr.Error(
            fnErr.getMsg("not found model", {
                colNm: col.collectionName,
                filter: filter,
                opt,
            }),
            {
                ko: "데이터 조회 실패",
            },
        );
    }
    return res;
}

async function findAll<RES extends object>(col: Collection<RES>, filter: object, ...sorts: Sort[]): Promise<RES[]> {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    return parseCur(col.find<RES>(filter, opt));
}

async function findList<RES extends object>(
    col: Collection<RES>,
    filter: object,
    pager: Pager,
    ...sorts: Sort[]
): Promise<ResultList<RES>> {
    const opt: FindOptions = {};
    if (sorts.length !== 0) opt.sort = sorts[0];
    opt.skip = pager.page * pager.size;
    opt.limit = pager.size;

    const list = await parseCur(col.find<RES>(filter, opt));
    const total = await col.countDocuments(filter);
    return {
        ...pager,
        total,
        list,
    };
}

async function parseCur<RES extends object>(cur: FindCursor<RES>): Promise<RES[]> {
    const res: RES[] = [];

    while (await cur.hasNext()) {
        const doc = await cur.next();
        if (!doc) {
            throw new fnErr.Error(
                fnErr.getMsg("fail decode cursor", {
                    namespace: cur.namespace,
                    evName: cur.eventNames(),
                }),
                {
                    ko: "리스트 조회 실패",
                },
            );
        }
        res.push(doc);
    }

    return res;
}

const fnFinder = {
    one: findOne,
    all: findAll,
    list: findList,
};

export default fnFinder;

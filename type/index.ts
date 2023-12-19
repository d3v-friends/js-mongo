import { fnParam } from "@js-pure";
import { Collection, Db } from "mongodb";

export type Pager = {
    page: number;
    size: number;
};

export type ResultList<RES extends object> = {
    page: number;
    size: number;
    total: number;
    list: RES[];
};

export type DateQuery = Partial<{
    $lt: Date;
    $lte: Date;
    $eq: Date;
    $gt: Date;
    $gte: Date;
}>;

export type FnMigrate<DATA extends object> = (col: Collection<DATA>) => Promise<void>;

export abstract class Docs<DATA extends object> {
    public readonly abstract colNm: string;
    public readonly abstract migrate: FnMigrate<DATA>[];

    protected getCol(db: Db): Collection<DATA> {
        return db.collection<DATA>(this.colNm);
    }
}

export type Bool = "true" | "false";


// todo 연구해보기 template literal types : https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
// type IsBool<T> = {
//     value<K extends string & keyof T>(): boolean;
// }
//
// declare function makeBoolObject<T>(v: T): T & IsBool<T>;
//
// const a = makeBoolObject({
//     elem: "true",
// });
//
// a.value()


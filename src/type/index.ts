import { Collection, Db, Document } from "mongodb";

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

export namespace QueryHelper {
    export type DateQuery = Partial<{
        $lt: Date;
        $lte: Date;
        $eq: Date;
        $gt: Date;
        $gte: Date;
    }>;
}

export type Migrate<DATA extends Document> = (col: Collection<DATA>) => Promise<void>;

export type Bool = "true" | "false";

export abstract class Docs<DATA extends Document> {
    public abstract readonly colNm: string;
    public abstract readonly migrate: Migrate<DATA>[];
    public abstract readonly db: Db;

    protected getCol(): Collection<DATA> {
        return this.db.collection<DATA>(this.colNm);
    }
}

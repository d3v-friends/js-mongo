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
export type Schema<DATA extends object> = {
    migrate: FnMigrate<DATA>[];
    colNm: string;
};

export interface IfModel<DATA extends object> {
    getColNm(): string;

    getMigrate(): FnMigrate<DATA>[];
}

export abstract class Model<DATA extends object> implements IfModel<DATA> {
    protected constructor(
        protected readonly colNm: string,
        protected readonly migrate: FnMigrate<DATA>[],
    ) {
    }

    protected getCol(db: Db): Collection<DATA> {
        return db.collection<DATA>(this.colNm);
    }

    public getColNm(): string {
        return this.colNm;
    }

    public getMigrate(): FnMigrate<DATA>[] {
        return this.migrate;
    }
}

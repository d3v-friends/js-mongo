// Generated by dts-bundle-generator v9.0.0

import { Collection, CreateIndexesOptions, Db, Document, IndexSpecification, ObjectId } from 'mongodb';

declare function migrate(db: Db, ...models: Manager[]): Promise<void>;
declare function reindex(col: Collection<any>, { list }: IdxArgs): Promise<void>;
export declare abstract class Manager<DOC extends Document = Document> {
	abstract readonly colNm: string;
	abstract readonly migrate: FnMigrate<DOC>[];
	protected getCol(db: Db): Collection<DOC>;
}
export declare class KvManager extends Manager<Kv> {
	readonly colNm: string;
	readonly migrate: FnMigrate<Kv>[];
	constructor(...colNms: string[]);
	get<Input>(db: Db, key: string, ...defaults: Input[]): Promise<Input>;
	set<Input>(db: Db, key: string, value: Input): Promise<void>;
}
export declare const fnMongo: {
	reindex: typeof reindex;
	migrate: typeof migrate;
	one: <RES extends object>(col: import("mongodb").Collection<RES>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<RES>;
	all: <RES_1 extends object>(col: import("mongodb").Collection<RES_1>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<RES_1[]>;
	list: <RES_2 extends object>(col: import("mongodb").Collection<RES_2>, filter: object, pager: Pager, ...sorts: import("mongodb").Sort[]) => Promise<ResultList<RES_2>>;
	connect: ({ host, username, password, database }: ConnectArg) => Promise<import("mongodb").Db>;
	connectionFactory: (v: ConnectArg) => () => Promise<import("mongodb").Db>;
};
export interface Kv {
	_id: ObjectId;
	key: string;
	value: string;
	updatedAt: Date;
}
export type Bool = "true" | "false";
export type ConnectArg = {
	host: string;
	username: string;
	password: string;
	database: string;
};
export type DateQuery = Partial<{
	$lt: Date;
	$lte: Date;
	$eq: Date;
	$gt: Date;
	$gte: Date;
}>;
export type FnMigrate<DATA extends object = Document> = (col: Collection<DATA>) => Promise<void>;
export type IdsElem = [
	IndexSpecification,
	CreateIndexesOptions
];
export type IdxArgs = {
	list: IdsElem[];
};
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

export {};

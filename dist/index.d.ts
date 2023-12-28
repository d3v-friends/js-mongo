// Generated by dts-bundle-generator v9.1.0

import { Connection, IndexDirection, Schema } from 'mongoose';

declare function migrate(conn: Connection, ...models: Manager<any>[]): Promise<void>;
export declare abstract class Manager<T> {
	readonly colNm: string;
	readonly schema: Schema<T>;
	readonly migrate: FnMigrate<T>[];
	protected constructor(colNm: string, schema: Schema<T>, migrate: FnMigrate<T>[]);
	model(conn: Connection): MongooseModel<T>;
}
export declare class KvManager extends Manager<Kv> {
	constructor(colNm?: string);
	get<T>(conn: Connection, key: string, ...defs: T[]): Promise<T>;
	set<T>(conn: Connection, key: string, value: T): Promise<void>;
}
export declare const fnMongo: {
	migrate: typeof migrate;
	findOne: <T>(model: import("mongoose").Model<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, {}, {}, {}, import("mongoose").IfAny<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, any, import("mongoose").Document<unknown, {}, import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>> & import("mongoose").Require_id<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>, import("mongoose").Schema<T, import("mongoose").Model<T, any, any, any, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, any, T> & import("mongoose").Require_id<T>>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, import("mongoose").IfAny<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>, any, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>> & import("mongoose").Require_id<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>>>>, filter: object, sort: object) => Promise<T>;
	findAll: <T_1>(model: import("mongoose").Model<import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, {}, {}, {}, import("mongoose").IfAny<import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, any, import("mongoose").Document<unknown, {}, import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>> & import("mongoose").Require_id<import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>, import("mongoose").Schema<T_1, import("mongoose").Model<T_1, any, any, any, import("mongoose").IfAny<T_1, any, import("mongoose").Document<unknown, any, T_1> & import("mongoose").Require_id<T_1>>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, import("mongoose").IfAny<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>, any, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>> & import("mongoose").Require_id<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T_1, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>>>>, filter: object, sort: object) => Promise<T_1[]>;
	findList: <T_2>(model: import("mongoose").Model<import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, {}, {}, {}, import("mongoose").IfAny<import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, any, import("mongoose").Document<unknown, {}, import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>> & import("mongoose").Require_id<import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>, import("mongoose").Schema<T_2, import("mongoose").Model<T_2, any, any, any, import("mongoose").IfAny<T_2, any, import("mongoose").Document<unknown, any, T_2> & import("mongoose").Require_id<T_2>>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, import("mongoose").IfAny<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>, any, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>> & import("mongoose").Require_id<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T_2, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>>>>, filter: object, p: Pager, sort: object) => Promise<ResultList<T_2>>;
	connect: ({ host, username, password, database }: ConnectArg) => Promise<import("mongoose").Connection>;
	connectByEnv: () => Promise<import("mongoose").Connection>;
	connectionFactory: (v: ConnectArg) => () => Promise<import("mongoose").Connection>;
};
export interface ConnectArg {
	host: string;
	username: string;
	password: string;
	database: string;
}
export interface Kv {
	key: string;
	value: string;
}
export interface MongooseIndex {
	v: number;
	key: {
		[key: string]: IndexDirection;
	};
	name: string;
	unique: boolean;
	background: boolean;
}
export interface ResultList<DATA> {
	page: number;
	size: number;
	total: number;
	list: DATA[];
}
export type Bool = "true" | "false";
export type DateQuery = Partial<{
	$lt: Date;
	$lte: Date;
	$eq: Date;
	$gt: Date;
	$gte: Date;
}>;
export type FnMigrate<T> = (model: MongooseModel<T>) => Promise<void>;
export type MongooseModel<T> = import("mongoose").Model<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, {}, {}, {}, import("mongoose").IfAny<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, any, import("mongoose").Document<unknown, {}, import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>> & import("mongoose").Require_id<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>, Schema<T, import("mongoose").Model<T, any, any, any, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, any, T> & import("mongoose").Require_id<T>>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, import("mongoose").IfAny<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>, any, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>> & import("mongoose").Require_id<import("mongoose").FlatRecord<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>>>>;
export type Pager = {
	page: number;
	size: number;
};

export {};

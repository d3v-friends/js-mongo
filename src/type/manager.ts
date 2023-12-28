import { Connection, Schema } from "mongoose";

export abstract class Manager<T extends object> {
    public abstract readonly colNm: string;
    public abstract readonly schema: Schema<T>;
    public abstract readonly migrate: FnMigrate<T>[];

    public model(conn: Connection): MongooseModel<T> {
        return conn.model(this.colNm, this.schema);
    }
}

export type MongooseModel<T> = import("mongoose").Model<
    import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>,
    {},
    {},
    {},
    import("mongoose").IfAny<
        import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>,
        any,
        import("mongoose").Document<
            unknown,
            {},
            import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>
        > &
            import("mongoose").Require_id<
                import("mongoose").ObtainDocumentType<
                    any,
                    T,
                    import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>
                >
            >
    >,
    Schema<
        T,
        import("mongoose").Model<
            T,
            any,
            any,
            any,
            import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, any, T> & import("mongoose").Require_id<T>>,
            any
        >,
        {},
        {},
        {},
        {},
        import("mongoose").DefaultSchemaOptions,
        import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>,
        import("mongoose").IfAny<
            import("mongoose").FlatRecord<
                import("mongoose").ObtainDocumentType<
                    any,
                    T,
                    import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>
                >
            >,
            any,
            import("mongoose").Document<
                unknown,
                {},
                import("mongoose").FlatRecord<
                    import("mongoose").ObtainDocumentType<
                        any,
                        T,
                        import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>
                    >
                >
            > &
                import("mongoose").Require_id<
                    import("mongoose").FlatRecord<
                        import("mongoose").ObtainDocumentType<
                            any,
                            T,
                            import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>
                        >
                    >
                >
        >
    >
>;

export type FnMigrate<T> = (model: MongooseModel<T>) => Promise<void>;

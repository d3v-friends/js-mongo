import { Db, MongoClient } from "mongodb";

export type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};

type ConnFactory = () => Promise<Db>;

export const fnConn = {
    connect: async ({ host, username, password, database }: ConnectArg): Promise<Db> => {
        const client = new MongoClient(`mongodb://${host}`, {
            auth: {
                username,
                password,
            },
        });
        return client.db(database);
    },
    connectionFactory: (v: ConnectArg): ConnFactory => {
        return () => {
            return fnConn.connect(v);
        };
    },
};

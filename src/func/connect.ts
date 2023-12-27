import { Db, MongoClient } from "mongodb";
import { ConnectArg } from "../type";

type ConnFactory = () => Promise<Db>;

export const fnConn = {
    connect: async ({ host, username, password, database, opts }: ConnectArg): Promise<Db> => {
        if (!opts) {
            opts = {};
        }

        opts.auth = {
            username,
            password,
        };

        const client = new MongoClient(`mongodb://${host}`, opts);
        return client.db(database);
    },
    connectionFactory: (v: ConnectArg): ConnFactory => {
        return () => {
            return fnConn.connect(v);
        };
    },
};

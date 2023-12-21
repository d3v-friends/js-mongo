import { Db, MongoClient } from "mongodb";

type ConnFactory = () => Promise<Db>;

export interface ConnectArg {
    host: string;
    username: string;
    password: string;
    database: string;
}

const connect = async ({ host, username, password, database }: ConnectArg): Promise<Db> => {
    const client = new MongoClient(`mongodb://${host}`, {
        auth: {
            username,
            password,
        },
    });
    return client.db(database);
};

export const connectFactory = (v: ConnectArg): ConnFactory => {
    return () => {
        return connect(v);
    };
};

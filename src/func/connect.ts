import { Db, MongoClient } from "mongodb";

type ConnFactory = () => Promise<Db>;

export type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};

export async function connect({ host, username, password, database }: ConnectArg): Promise<Db> {
    const client = new MongoClient(`mongodb://${host}`, {
        auth: {
            username,
            password,
        },
    });
    return client.db(database);
}

export function connectFactory(v: ConnectArg): ConnFactory {
    return () => {
        return connect(v);
    };
}

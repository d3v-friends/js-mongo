import { Db, MongoClient } from "mongodb";

type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};

type ConnFactory = () => Promise<Db>;

export function connFactory(v: ConnectArg): ConnFactory {
    return async () => {
        return connect(v);
    };
}

export async function connect({ host, username, password, database }: ConnectArg): Promise<Db> {
    const client = new MongoClient(`mongodb://${host}`, {
        auth: {
            username,
            password,
        },
    });
    return client.db(database);
}

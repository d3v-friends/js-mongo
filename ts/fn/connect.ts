import { Db, MongoClient } from "mongodb";

type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};

export default async function ({ host, username, password, database }: ConnectArg): Promise<Db> {
    const client = new MongoClient(`mongodb://${host}`, {
        auth: {
            username,
            password,
        },
    });

    const res = client.db(database);
    const doc = await res.stats();

    console.log(doc);
    return res;
}

import { Db, MongoClient } from "mongodb";

export type ConnectArg = {
    host: string,
    username: string;
    password: string;
    database: string;
}

function parseConnectArgs({ host }: ConnectArg): string {
    return `mongodb://${host}?w=majority`;
}

export default function connect(i: ConnectArg): Db {
    const client = new MongoClient(parseConnectArgs(i), {
        auth: {
            username: i.username,
            password: i.password,
        },
    });

    return client.db(i.database);
}

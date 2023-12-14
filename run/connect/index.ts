import { Db, MongoClient } from "mongodb";
import { ConnectArg } from "/type";


function parseConnectArgs({ host }: ConnectArg): string {
    return `mongodb://${host}?w=majority`;
}

export default function index(i: ConnectArg): Db {
    const client = new MongoClient(parseConnectArgs(i), {
        auth: {
            username: i.username,
            password: i.password,
        },
    });

    return client.db(i.database);
}

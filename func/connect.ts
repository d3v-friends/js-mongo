import { Db, MongoClient } from "mongodb";

type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};

type ConnFactory = () => Promise<Db>;

async function connect({ host, username, password, database }: ConnectArg): Promise<Db> {
    const client = new MongoClient(`mongodb://${host}`, {
        auth: {
            username,
            password,
        },
    });
    return client.db(database);
}

function createFactory(v: ConnectArg): ConnFactory {
    return () => {
        return connect(v);
    };
}

const fnConnect = {
    connect,
    createFactory,
};

export default fnConnect;

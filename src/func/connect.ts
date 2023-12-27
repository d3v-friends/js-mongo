import { fnEnv } from "@js-pure";
import { ConnectArg } from "@src/type";
import { connect, Connection } from "mongoose";

type ConnFactory = () => Promise<Connection>;

export const fnConn = {
    connect: async ({ host, username, password, database }: ConnectArg): Promise<Connection> => {
        const client = await connect(`mongodb://${host}`, {
            user: username,
            pass: password,
            dbName: database,
        });
        return client.connection;

    },
    connectByEnv: async (): Promise<Connection> => {
        return fnConn.connect({
            host: fnEnv.string("MG_HOST"),
            username: fnEnv.string("MG_USERNAME"),
            password: fnEnv.string("MG_PASSWORD"),
            database: fnEnv.string("MG_DATABASE"),
        });
    },
    connectionFactory: (v: ConnectArg): ConnFactory => {
        return () => {
            return fnConn.connect(v);
        };
    },
};

import { Db } from "mongodb";
type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};
type ConnFactory = () => Promise<Db>;
declare function connect({ host, username, password, database }: ConnectArg): Promise<Db>;
declare function createFactory(v: ConnectArg): ConnFactory;
declare const _default: {
    connect: typeof connect;
    createFactory: typeof createFactory;
};
export default _default;

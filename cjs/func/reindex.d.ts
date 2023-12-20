import { Collection, CreateIndexesOptions, IndexSpecification } from "mongodb";
export type IdsElem = [IndexSpecification, CreateIndexesOptions];
export type IdxArgs = {
    list: IdsElem[];
};
export default function (col: Collection<any>, { list }: IdxArgs): Promise<void>;

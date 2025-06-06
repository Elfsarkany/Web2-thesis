import { Feat } from "./feat";

export interface Background{
    id: string;
    name: string;
    publication: string;
    feats: Feat[];
    description: string;
}
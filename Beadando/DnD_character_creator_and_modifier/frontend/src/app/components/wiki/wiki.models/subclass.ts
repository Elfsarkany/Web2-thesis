import { Feat } from "./feat";

export interface SubClass{
    id: string;
    name: string;
    publication: string;
    origin: string;
    feats: Feat[];
    description: string;
}
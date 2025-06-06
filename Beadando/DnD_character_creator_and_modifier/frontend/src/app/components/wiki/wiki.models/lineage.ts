import { Feat } from "./feat";

export interface Lineage{
    id: string;
    name: string;
    publication: string;
    origin: string;
    feats: Feat;
    description: string;
}
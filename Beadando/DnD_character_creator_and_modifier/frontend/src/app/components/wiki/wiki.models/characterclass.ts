import { Feat } from "./feat";

export interface CharacterClass{
    id: string;
    name: string;
    publication: string;
    feats: Feat[];
    description: string;
    
}
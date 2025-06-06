import { Spell } from "./spell";

export interface Feat{
    id: string;
    name: string;
    publication: string;
    origin: string;
    requiredLvl: number;
    statBonuses: number[];
    skillProficiencis: boolean[];
    skillExpertises: boolean[];
    skillSavingProficiencis: boolean[];
    weaponProficiencis: boolean[];
    spells: Spell[];
    visions: number[];
    description: string;
}
import { Feat } from "../wiki/wiki.models/feat";
import { Item } from "../wiki/wiki.models/item";
import { Spell } from "../wiki/wiki.models/spell";

export interface Character {
  id: string;
  owner: string;
  level: number;
  baseStats: number[];
  feats: Feat[];
  chosenSpells: Spell[];
  items: Item[];
  biography: {
        name: {type: String},
        age: {type: String},
        alignment: {type: String},
        description: {type: String},
        looks: {type: string}
  };
}
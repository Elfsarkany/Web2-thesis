const mongoose = require("mongoose");
const Feat = require("./Feat");
const CharacterClass = require("./CharacterClass");
const SubClass = require("./SubClass");
const Lineage = require("./Lineage");
const Background = require("./Background");
const Spell = require("./Spell");
const Item = require("./Item");

const characterSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    name: {type: String, required: true},
    background: {type: Background, required: true},
    lineage: {type: Lineage, required: true},
    class: {type: CharacterClass, required: true},
    subClass: {type: SubClass},
    level: {type: Number, min:1, max:20, required: true},
    baseStats: {type: [Number], required: true},
    stats: {type: [Number], required: true},
    proficiencis: {type: [Boolean]},
    expertises: {type: [Boolean]},
    feats: {type: [Feat]},
    visions: {type: [Number]},
    chosenSpells: {type: [Spell]},
    items: {type: [Item]},
    biography: {
        name: {type: String},
        age: {type: String},
        alignment: {type: String},
        description: {type: String},
        required: true
    },
});

module.exports = mongoose.model("Character", characterSchema);
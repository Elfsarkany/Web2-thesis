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
    level: {type: Number, min:1, max:20, required: true},
    baseStats: {type: [Number], required: true},
    feats: {type: [Feat], required: true},
    chosenSpells: {type: [Spell], required: true},
    items: {type: [Item], required: true},
    biography: {
        name: {type: String},
        age: {type: String},
        alignment: {type: String},
        description: {type: String},
        looks: {type: Image},
        required: true
    },
});

module.exports = mongoose.model("Character", characterSchema);
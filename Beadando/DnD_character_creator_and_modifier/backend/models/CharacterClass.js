const mongoose = require("mongoose");
const Feat = require("./Feat");
const Spell = require("./Spell");

const characterClassSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    proficiencis: {type: [Boolean], required: true},
    savingProficiencis: {type: [Boolean], required: true},
    feats: {type: [Feat], required: true},
    spells: {type: [Spell]},
    description: {type: String, required: true},
});

module.exports = mongoose.model("CharacterClass", characterClassSchema);
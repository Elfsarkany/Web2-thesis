const mongoose = require("mongoose");
const Feat = require("./Feat");

const characterClassSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    proficiencis: {type: String, required: true},
    savingProficiencis: {type: String, required: true},
    feats: {type: String, required: true},
    spells: {type: String},
    description: {type: String, required: true},
});

module.exports = mongoose.model("CharacterClass", characterClassSchema);
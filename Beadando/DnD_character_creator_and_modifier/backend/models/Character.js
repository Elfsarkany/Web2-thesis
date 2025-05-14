const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    name: {type: String, required: true},
    background: {type: String, required: true},
    lineage: {type: String, required: true},
    baseStats: {type: String, required: true},
    stats: {type: String, required: true},
    proficiencis: {type: String},
    feats: {type: String},
    chosenSpells: {type: String},
    items: {type: String},
    biography: {type: String, required: true},
});

module.exports = mongoose.model("Character", characterSchema);
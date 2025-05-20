const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    name: {type: String, required: true},
    background: {type: String, required: true},
    lineage: {type: String, required: true},
    class: {type: String, required: true},
    subClass: {type: String},
    level: {type: Number, min:1, max:20, required: true},
    baseStats: {type: [Number], required: true},
    stats: {type: [Number], required: true},
    proficiencis: {type: [Boolean]},
    expertises: {type: [Boolean]},
    feats: {type: [String]},
    visions: {type: [Number]},
    chosenSpells: {type: [String]},
    items: {type: [String]},
    biography: {
        name: {type: String},
        age: {type: String},
        alignment: {type: String},
        description: {type: String},
        required: true
    },
});

module.exports = mongoose.model("Character", characterSchema);
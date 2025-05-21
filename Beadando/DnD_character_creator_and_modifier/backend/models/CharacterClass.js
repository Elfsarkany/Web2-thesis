const mongoose = require("mongoose");
const Feat = require("./Feat");
const Spell = require("./Spell");

const characterClassSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    feats: {type: [Feat], required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model("CharacterClass", characterClassSchema);
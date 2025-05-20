const mongoose = require("mongoose");

const featSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication: {type: String, required: true},
    origin: {type: String},
    requirementLvl: {type: Number, required: true},
    statBonuses: {type: [Number], required: true},
    proficiencis: {type: [String], required: true},
    visions: {type: [Number], required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Feat', featSchema);
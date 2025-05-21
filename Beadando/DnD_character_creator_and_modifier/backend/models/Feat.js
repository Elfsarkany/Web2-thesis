const mongoose = require("mongoose");
const Spell = require("./Spell");

const featSchema = new mongoose.Schema({
    name: {type: String, required: true},
    publication: {type: String, required: true},
    origin: {type: String, required: true},
    requirementLvl: {type: Number, required: true},
    statBonuses: {type: [Number], required: true},
    skillProficiencis: {type: [Boolean], required: true},
    skillExpertises: {type: [Boolean], required: true},
    skillSavingProficiencis: {type: [Boolean], required: true},
    weaponProficiencis: {type: [Boolean], required: true},
    spells: {type: [Spell], required: true},
    visions: {type: [Number], required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Feat', featSchema);
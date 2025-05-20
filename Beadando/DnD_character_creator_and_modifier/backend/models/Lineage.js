const mongoose = require("mongoose");

const lineageSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    origin: {type: String, required: true},
    statBonuses: {type: [Number], required: true},
    proficiencis: {type: [String], required: true},
    feat: {type: String},
    visions: {type: [Number], required},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Lineage', lineageSchema);
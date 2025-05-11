const mongoose = require("mongoose");

const lineageSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    origin: {type: String, required: true},
    statBonuses: {type: String, required: true},
    proficiencis: {type: String, required: true},
    feat: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Lineage', lineageSchema);
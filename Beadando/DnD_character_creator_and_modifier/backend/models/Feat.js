const mongoose = require("mongoose");

const featSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    origin: {type: String, required: true},
    statBonuses: {type: String, required: true},
    proficiencis: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Feat', featSchema);
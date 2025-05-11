const mongoose = require("mongoose");

const backgroundSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    statBonuses: {type: String, required: true},
    proficiencis: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Background', backgroundSchema);
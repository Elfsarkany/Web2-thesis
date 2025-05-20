const mongoose = require("mongoose");

const backgroundSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    statBonuses: {type: [Number], required: true},
    proficiencis: {type: [Boolean], required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Background', backgroundSchema);
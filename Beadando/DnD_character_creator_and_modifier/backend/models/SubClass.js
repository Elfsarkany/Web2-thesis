const mongoose = require("mongoose");
const Feat = require("./Feat");

const subClassSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    origin: {type: String, required: true},
    proficiencis: {type: [Boolean], required: true},
    feats: {type: [Feat], required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('SubClass', subClassSchema);
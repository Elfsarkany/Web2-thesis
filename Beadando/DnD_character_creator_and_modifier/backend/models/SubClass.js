const mongoose = require("mongoose");

const subClassSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    origin: {type: String, required: true},
    proficiencis: {type: String, required: true},
    feats: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('SubClass', subClassSchema);
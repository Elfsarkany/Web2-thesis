const mongoose = require("mongoose");

const spellSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    publication:{type: String, required: true},
    school: {type: String, required: true},
    components: {type: String, required: true},
    duration: {type: String, required: true},
    range: {type: String, required: true},
    target: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Spell', spellSchema);

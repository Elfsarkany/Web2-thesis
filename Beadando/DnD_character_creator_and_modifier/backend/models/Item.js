const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('Item', itemSchema);
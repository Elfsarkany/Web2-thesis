const express = require('express');
const router = express.Router();

const Authorization = require("../middleware/token_auth.js")
const Character = require("../models/Character.js")
const Background = require("../models/Background.js")
const CharacterClass = require("../models/CharacterClass.js")
const Feat = require("../models/Feat.js")
const Item = require("../models/Item.js")
const Lineage = require("../models/Lineage.js")
const Spell = require("../models/Spell.js")
const SubClass = require("../models/SubClass.js")

router.post("/", Authorization, async (req, res) => {
    try{
        const character  = new Character({
            owner: ,
            name: ,
            background: ,
            lineage: ,
            baseStats: ,
            stats: ,
            proficiencis:,
            feats: ,
            chosenSpells:,
            items: ,
            biography: ,
        });
        await character.save();
        
        res.status(201).json({message: 'Character created succesfully.'});
    } catch (error){
        console.error('Error during character creation', error);
        res.status(500).json({message: 'Server error during character creation'});
    }
});


module.exports = router;
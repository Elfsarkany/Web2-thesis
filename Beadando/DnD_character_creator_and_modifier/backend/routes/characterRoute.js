const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const Authorization = require("../middleware/token_auth.js")
const Character = require("../models/Character.js")
const Background = require("../models/Background.js")
const CharacterClass = require("../models/CharacterClass.js")
const Feat = require("../models/Feat.js")
const Item = require("../models/Item.js")
const Lineage = require("../models/Lineage.js")
const Spell = require("../models/Spell.js")
const SubClass = require("../models/SubClass.js")

router.post("/create", Authorization, async (req, res) => {
    try{
        const character  = new Character({
            owner: req.body.owner, 
            name: req.body.name,
            background: req.body.background,
            lineage: req.body.lineage,
            class: req.body.class,
            subClass: req.body.subClass,
            level: req.body.level,
            baseStats: req.body.baseStats,
            stats: req.body.stats,
            proficiencis: req.body.proficiencis,
            expertises: req.body.expertises,
            feats: req.body.feats,
            chosenSpells: req.body.chosenSpells,
            items: req.body.items,
            biography: req.body.biography,
        });
        await character.save();
        
        res.status(201).json({message: 'Character created succesfully.'});
    } catch (error){
        console.error('Error during character creation', error);
        res.status(500).json({message: 'Server error during character creation'});
    }
});

router.get("/fetch/:id", Authorization, async (req, res) => {
    try{
        const character = Character.findById(req.params.id);
        if (character){
        res.status(200).json(character);
        }else{
            res.status(400).json({message: "Character not found!"});
        }

    } catch (error){
        console.error('Error during character fetch', error);
        res.status(500).json({message: 'Server error during character fetch'});
    }
});


module.exports = router;
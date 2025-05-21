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

router.post("/create", Authorization, async (req, res) => {
    try{
        const character  = new Character({
            owner: req.user.email,
            level: req.body.level,
            baseStats: req.body.baseStats,
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
        const character = Character.where('owner').equals(req.user.email).findById(req.params.id).exec();
        if (character){
        res.status(200).json(character);
        }else{
            res.status(400).json({message: 'Character not found!'});
        }

    } catch (error){
        console.error('Error during character fetch', error);
        res.status(500).json({message: 'Server error during character fetch'});
    }
});

router.get("/fetchall", Authorization, async (req, res) => {
    try{
        const chs = Character.find().where('owner').equals(req.user.email).exec();
        res.status(200).json({message: 'Characters fecthed sucessfully.', characters: chs});
    } catch (error){
        console.error('Error during characters fetch', error);
        res.status(500).json({message: 'Server error during characters fetch'});
    }
});

router.put("/update/:id", Authorization, async (req, res) => {
    try{
        const character  = new Character({
            _id: req.body._id,
            owner: req.user.email,
            level: req.body.level,
            baseStats: req.body.baseStats,
            feats: req.body.feats,
            chosenSpells: req.body.chosenSpells,
            items: req.body.items,
            biography: req.body.biography,
        });
        await character.updateOne({_id: req.params.id, owner: req.user.email}, car).exec();
        res.status(200).json({message: 'Character updated succesfully.'});
    } catch (error){
        console.error('Error during character update', error);
        res.status(500).json({message: 'Server error during character update'});
    }
});

router.delete("/delete/:id", Authorization, async (req, res) => {
    try{
        await Character.deleteOne({_id: req.params.id, owner: req.user.email});
        res.status(200).json({message: 'Character deleted sucessfully.'});
    } catch (error){
        console.error('Error during character deletion', error);
        res.status(500).json({message: 'Server error during character deletion'});
    }
});

module.exports = router;
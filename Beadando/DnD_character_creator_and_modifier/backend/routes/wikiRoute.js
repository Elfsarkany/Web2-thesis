const express = require('express');
const router = express.Router();

const Background = require("../models/Background.js")
const CharacterClass = require("../models/CharacterClass.js")
const Feat = require("../models/Feat.js")
const Item = require("../models/Item.js")
const Lineage = require("../models/Lineage.js")
const Spell = require("../models/Spell.js")
const SubClass = require("../models/SubClass.js");
const Background = require('../models/Background.js');

router.get('/backgrounds', async (req, res) => {
    try{
        const documents = Background.find().select('_id name').exec();
        res.status(200).json({message: 'Backgrounds fecthed sucessfully.', backgrounds: documents});
    } catch (error){
        console.error('Error during backgrounds fetch', error);
        res.status(500).json({message: 'Server error during backgrounds fetch'});
    }
});

router.get('/backgrounds/:id', async (req, res) => {
    try{
        const document = Background.findById(req.params.id).exec();
        res.status(200).json({message: 'Background fecthed sucessfully.', background: document});
    } catch (error){
        console.error('Error during background fetch', error);
        res.status(500).json({message: 'Server error during background fetch'});
    }
});

router.get('/characterclasses', async (req, res) => {
    try{
        const documents = CharacterClass.find().select('_id name').exec();
        res.status(200).json({message: 'Classes fecthed sucessfully.', classes: documents});
    } catch (error){
        console.error('Error during classes fetch', error);
        res.status(500).json({message: 'Server error during classes fetch'});
    }
});

router.get('/characterclasses/:id', async (req, res) => {
    try{
        const document = CharacterClass.findById(req.params.id).exec();
        res.status(200).json({message: 'Background fecthed sucessfully.', characterclass: document});
    } catch (error){
        console.error('Error during background fetch', error);
        res.status(500).json({message: 'Server error during background fetch'});
    }
});

router.get('/feats', async (req, res) => {
    try{
        const documents = Feat.find().select('_id name').exec();
        res.status(200).json({message: 'Feats fecthed sucessfully.', feats: documents});
    } catch (error){
        console.error('Error during feats fetch', error);
        res.status(500).json({message: 'Server error during feats fetch'});
    }
});

router.get('/feats/:id', async (req, res) => {
    try{
        const document = Feat.findById(req.params.id).exec();
        res.status(200).json({message: 'Feat fecthed sucessfully.', feat: document});
    } catch (error){
        console.error('Error during feat fetch', error);
        res.status(500).json({message: 'Server error during feat fetch'});
    }
});

router.get('/items', async (req, res) => {
    try{
        const documents = Item.find().select('_id name').exec();
        res.status(200).json({message: 'Backgrounds fecthed sucessfully.', items: documents});
    } catch (error){
        console.error('Error during backgrounds fetch', error);
        res.status(500).json({message: 'Server error during backgrounds fetch'});
    }
});

router.get('/items/:id', async (req, res) => {
    try{
        const document = Item.findById(req.params.id).exec();
        res.status(200).json({message: 'Items fecthed sucessfully.', item: document});
    } catch (error){
        console.error('Error during item fetch', error);
        res.status(500).json({message: 'Server error during item fetch'});
    }
});

router.get('/lineages', async (req, res) => {
    try{
        const documents = Lineage.find().select('_id name').exec();
        res.status(200).json({message: 'Lineages fecthed sucessfully.', lineages: documents});
    } catch (error){
        console.error('Error during lineages fetch', error);
        res.status(500).json({message: 'Server error during lineages fetch'});
    }
});

router.get('/lineages/:id', async (req, res) => {
    try{
        const document = Lineage.findById(req.params.id).exec();
        res.status(200).json({message: 'Lineage fecthed sucessfully.', lineage: document});
    } catch (error){
        console.error('Error during lineage fetch', error);
        res.status(500).json({message: 'Server error during lineage fetch'});
    }
});

router.get('/spells', async (req, res) => {
    try{
        const documents = Spell.find().select('_id name').exec();
        res.status(200).json({message: 'Spells fecthed sucessfully.', spells: documents});
    } catch (error){
        console.error('Error during spells fetch', error);
        res.status(500).json({message: 'Server error during spells fetch'});
    }
});

router.get('/spells/:id', async (req, res) => {
    try{
        const document = Spell.findById(req.params.id).exec();
        res.status(200).json({message: 'Spell fecthed sucessfully.', spell: document});
    } catch (error){
        console.error('Error during spell fetch', error);
        res.status(500).json({message: 'Server error during spell fetch'});
    }
});

router.get('/subclasses', async (req, res) => {
    try{
        const documents = SubClass.find().select('_id name').exec();
        res.status(200).json({message: 'Subclasses fecthed sucessfully.', subclasses: documents});
    } catch (error){
        console.error('Error during Subclasses fetch', error);
        res.status(500).json({message: 'Server error during Subclasses fetch'});
    }
});

router.get('/subclasses/:id', async (req, res) => {
    try{
        const document = SubClass.findById(req.params.id).exec();
        res.status(200).json({message: 'Subclass fecthed sucessfully.', subclass: document});
    } catch (error){
        console.error('Error during Subclass fetch', error);
        res.status(500).json({message: 'Server error during Subclass fetch'});
    }
});



router.post("/create", Authorization, async (req, res) => {
    try{
        const msg = "";
        switch (req.body.what) {
            case 'background':
                const background  = new Background({
                    name: req.body.name,
                    publication: req.body.publication,
                    feats: req.body.feats,
                    description: req.body.description,
                });
                await background.save();
                msg = "Background created succesfully";
                break;
            case 'characterclass':
                const characterclass  = new CharacterClass({
                    name: req.body.name,
                    publication: req.body.publication,
                    feats: req.body.feats,
                    description: req.body.description,
                });
                await characterclass.save();
                msg = "Class created succesfully";
                break;
            case 'feat':
                const feat  = new Feat({
                    name: req.body.name,
                    publication: req.body.publication,
                    origin: req.body.origin,
                    requirementLvl: req.body.requirementLvl,
                    statBonuses: req.body.statBonuses,
                    skillProficiencis: req.body.skillProficiencis,
                    skillExpertises: req.body.skillExpertises,
                    skillSavingProficiencis: req.body.skillSavingProficiencis,
                    weaponProficiencis: req.body.weaponProficiencis,
                    spells: req.body.spells,
                    visions: req.body.visions,
                    description: req.body.description,
                });
                await feat.save();
                msg = "Feat created succesfully";
                break;
            case 'item':
                const item  = new Item({
                    name: req.body.name,
                    publication: req.body.publication,
                    weapontype: req.body.type,
                    description: req.body.description,
                });
                await item.save();
                msg = "Item created succesfully";
                break;
            case 'lineage':
                const lineage  = new Lineage({
                    name: req.body.name,
                    publication: req.body.publication,
                    origin: req.body.origin,
                    feats: req.body.feats,
                    description: req.body.description,
                });
                await lineage.save();
                msg = "Lineage created succesfully";
                break;
            case 'spell':
                const spell  = new Spell({
                    name: req.body.name,
                    publication: req.body.publication,
                    school: req.body.school,
                    components: req.body.components,
                    duration: req.body.duration,
                    range: req.body.range,
                    target: req.body.target,
                    description: req.body.description,
                });
                await spell.save();
                msg = "Spell created succesfully";
                break;
            case 'subClass':
                const subClass  = new Subclass({
                    name: req.body.name,
                    publication: req.body.publication,
                    origin: req.body.origin,
                    feats: req.body.feats,
                    description: req.body.description,
                });
                await subClass.save();
                msg = "SubClass created succesfully";
                break;
                
            default:
                res.status(401).json({message: 'No specification added therefore unable to create.'});
                break;
        }
        res.status(201).json({message: msg});
    } catch (error){
        console.error('Error during wiki element creation', error);
        res.status(500).json({message: 'Server error during wiki element creation'});
    }
});

module.exports = router;
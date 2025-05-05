const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require("./models/User.js");

router.post("/signup", async (req, res) => {
    try{
        const {email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(500).json({ message: "Email is already in use"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
    }
});



module.exports = router;
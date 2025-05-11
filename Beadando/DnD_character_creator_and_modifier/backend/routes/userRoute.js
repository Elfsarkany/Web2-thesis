const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const authorization = require("../middleware/token_auth.js")

const User = require("./models/User.js");
const UserProfile = require("./models/UserProfile.js");

router.post("/signup", async (req, res) => {
    try{
        const {email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(500).json({ message: "Email is already in use"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        await newUser.save();
        const newUserProfile = new UserProfile({
            email,
            email,
        });
        await newUserProfile.save();
        
        res.status(201).json({message: 'User created succesfully.'});
    } catch (error){
        console.error('Error during signup', error);
        res.status(500).json({message: 'Server error during signup'});
    }
});

router.post("/signin", async (req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({message: 'Invalid email or password'});
        }

        const token = jwt.sign({
            userId: user._id,
            email: user.email,
        }, 
        process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        const profile = await UserProfile.findOne({email});

        res.json({token, profile});
    } catch (error){
        console.error('Error during signin', error);
        res.status(500).json({message: 'Server error during signin'});
    }
});

router.get("/profile", authorization, async (req,res)=>{
    try{
        const userEmail = req.user.email;
        const userProfile = await UserProfile.findOne(userEmail);

        if (!userProfile){
            return res(404).json({message: "User not found"});
        }

        return res.json({userProfile});
    }catch (error){
        console.log("Error fetching profile", error);
        res.status(500).json({message: "Server error"});
    }
})

module.exports = router;
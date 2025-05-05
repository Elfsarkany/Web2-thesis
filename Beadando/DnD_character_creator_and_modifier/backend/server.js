const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');



dotenv.config();

const userRoute = require('./routes/userRoute');
const characterRoute = require('./routes/characterRoute');



app.use("/api/auth", auth);
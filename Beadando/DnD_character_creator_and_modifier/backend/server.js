const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to Database");
})
.catch((err) =>{
    console.error("Database connection error:", err);
})


const userRoute = require("./routes/userRoute");
const characterRoute = require("./routes/characterRoute");
const wikirRoute = require("./routes/wikiRoute");



app.use("/api/user", userRoute);
app.use("/api/character", characterRoute);
app.use("/api/wiki", wikirRoute);



app.listen(PORT, ()=>{
    console.log('Linstening on: ' + PORT);
}, );
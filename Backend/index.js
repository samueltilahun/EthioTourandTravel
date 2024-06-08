const routes = require("./routes/routes")
require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose"); 
const path = require('path')

const app = express();

// Serve static files from the 'server/uploads' directory
app.use('/server/uploads', express.static(path.join(__dirname, 'server', 'uploads')));

app.get('/', (req, res) => {
    res.json('working')
})

//middleware
app.use(express.json()); 
app.use("https://ethio-tourand-travel.vercel.app/api", routes)

mongoose.connect(process.env.DB)
    .then(() => { 
        console.log('connected successfully!')
})
    .catch((err) => console.log(err))

    // Export the Express app
module.exports = app;
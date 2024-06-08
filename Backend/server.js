const routes = require("./routes/routes")
require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose"); 
const path = require('path')

const app = express();

// Serve static files from the 'server/uploads' directory
app.use('/server/uploads', express.static(path.join(__dirname, 'server', 'uploads')));

//middleware
app.use(express.json()); 
app.use("/api", routes)

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { app.listen(process.env.PORT, () => {
        console.log(process.env.PORT)
    })
})
    .catch((err) => console.log(err))

module.exports = app;
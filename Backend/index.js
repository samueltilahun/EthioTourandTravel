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

app.get('/', (req, res) => {
    res.json('working')
})

// Test endpoint to ensure server is running
app.get('/test', (req, res) => {
    res.json({ message: "API is working" });
});

app.use("/api", routes)

mongoose.connect(process.env.DB)
    .then(() => { 
        console.log('connected successfully!')
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
})
    .catch((err) => console.log(err))

    // Export the Express app
module.exports = app;
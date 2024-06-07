const mongoose = require('mongoose')

const tourScheme = new mongoose.Schema({
    imgSrc: {
        type: "String",
        // required: true
    },
    destTitle: {
        type: "String",
        required: true
    },
    location: {
        type: "String",
        required: true
    },
    grade: {
        type: "String",
        required: true
    },
    fees: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('tourDetail', tourScheme);

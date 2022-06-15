const mongoose = require('mongoose')
const ingredient = require('../models/Ingredient')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    time: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    images: [{
        type: String,
    }],
    ingredients: [{
        type: String, //TODO: Add Ingredients Object
    }]

}, {timestamps: true})

module.exports = mongoose.model('Recipe', recipeSchema)
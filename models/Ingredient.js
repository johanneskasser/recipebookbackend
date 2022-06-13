const mongoose = require('mongoose')

const ingredient = new mongoose.Schema({
    quantity: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ingredient', ingredient)
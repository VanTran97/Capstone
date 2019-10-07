const mongoose = require('mongoose')
const validator = require('validator')

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    base: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
})

const Crypto = mongoose.model('Crypto', cryptoSchema)

module.exports = Crypto
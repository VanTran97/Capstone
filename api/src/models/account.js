const mongoose = require('mongoose')
const validator = require('validator')

const accountSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: false,
        default: 1000
    },
    assets: [{
        required: false,
        base: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }],
    transactions: [{
        required: false,
        type: {
            type: String,
            required: true
        },
        base: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        time: {
            type: Date,
            default: Date.now
        }
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

accountSchema.methods.addAsset = async function (data) {
    const account = this

    account.assets = account.assets.concat({
        base: data.base,
        name: data.name,
        amount: data.amount
    })
    await account.save()
}

accountSchema.methods.addTransaction = async function (data) {
    const account = this

    account.transactions = account.transactions.concat({
        type: data.type,
        base: data.base,
        name: data.name,
        amount: data.amount
    })
    await account.save()
}

const Account = mongoose.model('Account', accountSchema)

module.exports = Account
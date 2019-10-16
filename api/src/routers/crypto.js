const express = require('express')
const Crypto = require('../models/crypto')
const auth = require('../middleware/auth')
const router = new express.Router()

// Create crypto
router.post('/cryptos', auth, async (req, res) => {
    const crypto = new Crypto({
        ...req.body
    })

    try {
        await crypto.save()
        res.status(201).send(crypto)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update crypto rate
router.patch('/cryptos/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['rate']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const crypto = await Crypto.findOne({ _id: req.params.id })

        if (!crypto) {
            return res.status(404).send()
        }

        crypto.rate = req.body.rate
        await crypto.save()
        res.send(crypto)
    } catch (e) {
        res.status(400).send(e)
    }
})

// TODO: Justin
// Fix authentication for get requests
// Get all cryptos
router.get('/cryptos', async (req, res) => {
    try {
        const cryptos = await Crypto.find({})
        res.send(cryptos)
    } catch (e) {
        res.status(500).send()
    }
})

// Delete crypto
router.delete('/cryptos/:id', auth, async (req, res) => {
    try {
        const crypto = await Crypto.findOneAndDelete({ _id: req.params.id })

        if (!crypto) {
            res.status(404).send()
        }

        res.send(crypto)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
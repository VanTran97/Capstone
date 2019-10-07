const express = require('express')
const Account = require('../models/account')
const auth = require('../middleware/auth')
const router = new express.Router()

// Create account
router.post('/accounts', auth, async (req, res) => {
    const account = new Account({
        ...req.body,
        owner: req.user._id
    })

    try {
        await account.save()
        res.status(201).send(account)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Add asset to account
router.patch('/accounts/addasset/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['asset_id', 'asset_name', 'amount']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const account = await Account.findOne({ _id: req.params.id, owner: req.user._id})

        if (!account) {
            return res.status(404).send()
        }

        // updates.forEach((update) => account[update] = req.body[update])
        account.addAsset(req.body)
        res.send(account)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Add transaction to account
router.patch('/accounts/addtransaction/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['type', 'asset_id', 'asset_name', 'amount']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const account = await Account.findOne({ _id: req.params.id, owner: req.user._id})

        if (!account) {
            return res.status(404).send()
        }

        // updates.forEach((update) => account[update] = req.body[update])
        account.addTransaction(req.body)
        res.send(account)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Get all accounts for single user
// router.get('/accounts', auth, async (req, res) => {
//     try {
//         const accounts = await Account.find({ owner: req.user._id})
//         res.send(accounts)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// Get account
router.get('/accounts/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const account = await Account.findOne({ _id, owner: req.user._id })

        if (!account) {
            res.status(404).send()
        }

        res.send(account)
    } catch (e) {
        res.status(500).send()
    }
})

// Delete account
router.delete('/accounts/:id', auth, async (req, res) => {
    try {
        const account = await Account.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!account) {
            res.status(404).send()
        }

        res.send(account)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
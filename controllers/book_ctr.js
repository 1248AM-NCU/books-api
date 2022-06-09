//Yes, CTR is short for controller here
const express = require('express')
const router = express.Router()
const book = require('../models/book.js')

//Index
router.get('/', async (_, res) => {
    const lib = await book.find({})
    res.render('index', lib)
})

module.exports = router

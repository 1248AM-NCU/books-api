//Yes, CTR is short for controller here
const express = require('express')
const router = express.Router()
const cors = require('cors')
const book = require('../models/book.js')

//Index
router.get('/', async (_, res) => {
    try { 
        const lib = await book.find({}).lean()
        res.status(200).send(lib)
    }
    catch(e) { res.status(400).send({}); console.log(e) }
})
//Seeder
router.get('/seed', (_, res) => {
    book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})
//Add a book
router.post('/', async (req,res) => {
    try {
        const created = await book.create(req.body)
        res.status(201).send(created.id)
    }
    catch(e) {res.status(400).send({}); console.log(e)}
})
//Get Book by Id
router.get('/:id', async (req,res) => {
    try {
        const query = await book.findById(req.params.id)
        res.status(200).send(query)
    }
    catch(e) {res.status(400).send({}); console.log(e)}
})

//Update Book by Id
router.patch('/:id', async (req,res) => {
    try {
        const query = await book.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send(true)
    }
    catch(e) {res.status(400).send(false); console.log(e)}
})
router.delete('/:id', async(req, res) => {
    try {
        const query = await book.findByIdAndRemove(req.params.id).lean()
        if(Object.keys(query).length = 0) { res.status(400).send(false) }
        else { res.status(200).send(true) }
    }
    catch(e) {res.status(400).send(false)}
})
module.exports = router

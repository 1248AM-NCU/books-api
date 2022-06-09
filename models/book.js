//Book Schema for MongoDB
const mongo = require("mongoose")
const { Schema } = mongo
//Setup schema format
const book = new Schema({
    title: {type: String},
    year: {type: Number},
    description: {type: String},
    quantity: {type: Number},
    imageUrl: {type: String}
})
//Export model
const bookSchema = mongo.model('Book', book)
module.exports = bookSchema
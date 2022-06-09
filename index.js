//self-explanatory
const express = require('express')
const mongoose = require('mongoose')
const methOver = require('method-override')

//CONFIGURATIONS
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true},
    () => {console.log('connected to mongo: ', process.env.MONGO_URI)})

//MIDDLEWARE
app.use(methOver('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (_,res) => {res.send("yay, we managed near nothing")})

app.listen(PORT, ()=> {console.log('Listening on port:', PORT)})
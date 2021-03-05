const express = require('express')
const hbs = require('express-handlebars')
require ('dotenv').config()
const getPlaceholder = require('./lib/getPlaceholder')

const app = express()

app.engine('hbs', hbs({
    extname:'.hbs'
}))
app.set('view engine', '.hbs')

app.get('/', async(req, res) => {
    let data = await getPlaceholder()
    res.render('index', {data})
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})
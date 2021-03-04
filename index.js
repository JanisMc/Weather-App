const express = require('express')
const hbs = require('express-handlebars')
require ('dotenv').config()

const app = express()

app.engine('hbs', hbs({
    extname:'.hbs'
}))
app.set('view engine', '.hbs')

app.get('./', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})
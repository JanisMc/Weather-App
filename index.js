const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require ('body-parser')
require ('dotenv').config()
const {getWeather, getInfo, getDirection} = require('./lib/getWeatherInfo')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('hbs', hbs({
    extname:'.hbs'
}))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', async(req, res) => {
    let {city, countryCode} = req.body
    let data = await getWeather(city, countryCode)
    console.trace(data)
    if (data.message) {
        res.render('error')
    } else {
    let info = getInfo(data)
    let windDir = getDirection(data)
    res.render('index', {info, windDir})
}})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})
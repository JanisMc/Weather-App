const fetch = require('node-fetch')
const fs = require('fs')

const getWeather = async(city, countryCode) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${process.env.APIKEY}`
    let data = await fetch (url)
    data = await data.json()
    return data
    
}

const getInfo = (data) => {
    const display = {
        city: data.name,
        weather: data.weather[0].description,
        temp: Math.round(data.main.temp),
        feelslike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        windspeed: Math.round(data.wind.speed),
}
    return display
}

const getDirection = (data) => {
    let direction = data.wind.deg
    if (direction > 22.5 && direction < 67.5) {
            return "North-easterly"
        } else if 
        (direction > 67.5 && direction < 112.5) {
            return "Easterly"
        } else if
        (direction >112.5 && direction < 157.5) {
            return "South-easterly"
        } else if 
        (direction >157.5 && direction < 202.5) {
            return "Southerly"
        } else if 
        (direction >202.5 && direction < 247.5) {
            return "South-westerly"
        } else if 
        (direction >247.5 && direction < 292.5) {
            return "Westerly"
        } else if 
        (direction >292.5 && direction < 337.5) {
            return "North-westerly"
        } else {
            return "Northerly"
        }
    }


module.exports = {getWeather, getInfo, getDirection}
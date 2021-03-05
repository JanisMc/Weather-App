const fetch = require('node-fetch')
const fs = require('fs')

const getPlaceholder = async() => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=259221e5a1b98b8b0c097ad64ccb781a'
    let data = await fetch (url)
    console.log(data)
    data = await data.json()
    return data
}

module.exports = getPlaceholder
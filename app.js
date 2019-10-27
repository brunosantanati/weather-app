const request = require('request')

const url = 'https://api.darksky.net/forecast/70ff7c58595674b62c6cb99468310588/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    //console.log(response)
    const data = JSON.parse(response.body)
    //console.log(data)
    console.log(data.currently)
})
const request = require('request')

const url = 'https://api.darksky.net/forecast/70ff7c58595674b62c6cb99468310588/-23.633690,-46.472490?units=si'
//Parameters for request:
//units=si or units=us
//lang=es

request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!')
    }else if(response.body.error){
        console.log('Unable to find location!')
    }else{
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnJ1bm9zYW50YW5hdGkiLCJhIjoiY2s4ODFmMHB4MDBkeDNnbXNxOHhqYjBjaiJ9.mj3Dg_SMDKGbiOJ2oyT4Cw&limit=1'

request({ url: geocodeUrl, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to location service!')
    }else if(response.body.features.length === 0){
        console.log('Unable to find location. Try another search.')
    }else{
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude)
    }
})
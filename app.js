const geocode = require('./uitls/geocode')
const forecast = require('./uitls/forecast')

const place = process.argv[2]

if(!place){
    console.log('Please provide a place')
}else{
    geocode(place, (error, data) => {
        if(error){
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
}
const geocode = require('./uitls/geocode')
const forecast = require('./uitls/forecast')

const place = process.argv[2]

if(!place){
    console.log('Please provide a place')
}else{
    geocode(place, (error, { latitude, longitude, location } ) => {
        if(error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}
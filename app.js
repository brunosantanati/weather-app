const geocode = require('./uitls/geocode')

// const url = 'https://api.darksky.net/forecast/70ff7c58595674b62c6cb99468310588/-23.633690,-46.472490?units=si'
// //Parameters for request:
// //units=si or units=us
// //lang=es

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('Unable to find location!')
//     }else{
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

geocode('Pq. São Rafael, São Paulo', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
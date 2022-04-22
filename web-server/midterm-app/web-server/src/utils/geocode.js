const request = require('request');
const API_KEY = 'pk.eyJ1IjoiaWZzNSsImEiOiJjbDFveGZ2cjIxNjV3M2tvMm1kaW45MjF3In0.jakckr8Zkj8Xdbo8yQ05w'


const geocode = ( callback) => {
    const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bursa.json?access_token='+ API_KEY +'&limit=1';
    
    request({url : URL, json: true }, (err, res, body) => {
        if(err){
            callback('bir yerlerde hata yaptiniz...', undefined)
        }
        
        callback(undefined, {
            enlem : body.features[0].center[1],
            boylam : body.features[0].center[0],
        })

    })
}

module.exports = geocode
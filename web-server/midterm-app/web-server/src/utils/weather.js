const request = require('request');
const API_KEY = 'xxxxxxx'

const weather = (enlem, boylam, callback) => {
    const URL = 'http://api.weatherstack.com/current?access_key='+API_KEY+'&query=' + enlem + ',' + boylam + '&units=m';
    request({ url : URL, json: true}, (err, res, body) => {
        if(err){
            callback('bir yerlerde hata yaptiniz.', undefined);
        }
        callback(undefined, body.current)
    })
}

module.exports = weather
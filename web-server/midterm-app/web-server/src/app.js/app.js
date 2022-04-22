const express = require('express');
const geocode = require('.utils/geocode')
const weather = require('.utils/weather')

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hos geldiniz, anasayfam olustulurmustur!')
    res.send(index.html)
})

app.get('/test_text', (req, res) => {
    const number= 19360859013
    res.send(number)
})

app.get('/test_html', (req, res) => {

    res.send(<h1>adim:sefa enes ergin, numaram:19360859013</h1>)
})
app.get('/test_json', (req, res) => {
    const jsonData = {
        numara: 19360859013,
        adi   : sefaEnes,
        soyAdi: Ergin
    }
    res.send(jsonData)
})
app.get('/test_geocode', (req, res) => {

    geocode( (err, {enlem, boylam}) => {
        if(err){
            return res.send(err)
        }const invert = {
            enlem : enlem,
            boylam:boylam
        }
         res.send(invert)
})

app.get('/test_weather', (req, res) => {
        weather(enlem, boylam, (err, data) => {
            if(err) {
                return res.send(err);
            }
            const showData = {
                sicaklik : data.temperature,
                nem : data.humidity,
                basinc : data.pressure
            }
            res.send(showData)
        }) 
    })
})

app.listen(PORT, () => {
    console.log('Server su portta ayaktadir :.... ' + PORT)
})


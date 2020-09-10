require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    // res.send('hola mundo desde mi primer web server')
    let salida = {
        nombre: "jose",
        apellido: "cipagauta",
        edad: "25",
        url: req.url
    }
    res.send(salida);
})

app.get('/usuario', function(req, res) {
    res.json('get usuario');
})

app.post('/usuario', function(req, res) {
    let body = req.body;
    res.json(body);
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
})

app.listen(process.env.PORT, () => {
    console.log("escuchando puerto 3000")
});
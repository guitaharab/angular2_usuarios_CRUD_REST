
var app = require('./config/express')();
var path = require('path');
var mongo = require('./config/db')('localhost/db');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/../client/dist','index.html'))
});

app.listen(3000, function(req, res){
    console.log('Servidor rodando na porta 3000');
});

var app = require('./config/express')();

var mongo = require('./config/db')('localhost/db');

app.listen(3000, function(req, res){
    console.log('Servidor rodando na porta 3000');
});
var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');


module.exports = function(app){
    var app = express();

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    consign({cwd:'app'})
        .include('models')
        .then('api')
        .then('routes')
        .into(app);


    app.use('/',express.static(__dirname+'/../../client/dist'));
    
    app.use(function( req, res, next){
        var err = new Error("Not Found!");
        err.status = 404;
        next(err);
    });

    return app;
}

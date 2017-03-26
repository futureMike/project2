var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    app = express(),
    engines = require('consolidate'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    nunjucks = require('nunjucks'),
    path = require('path'),
    util = require('util'),
    multiparty = require('multiparty'),
    http = require('http');

app.set('views', './views');
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: false}));

MongoClient.connect('mongodb://localhost:27017/bonushw', function(err, db){


app.get('/movies', function(req,res){

    db.collection('movies').find({}).toArray(function(err,docs){

        res.render('show_movies', {'movies': docs});
    });
app.get('/add_movie', function(req,res){

    res.render('add_movie', {title: 'add movie to bonushw db'});
});

app.post('/show_movies', function(req, res, next){
    var name = req.body.name;
    var year = req.body.year;
    var url = req.body.url;
    db.collection('movies').insertOne({name: name, year: year, url: url});
    res.redirect('/movies');
});
});
    
});



http.createServer(app).listen(3000);
console.log('Express listening at port 3000');
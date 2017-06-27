/**
 * Created by ovsdb on 23/06/17.
 */

/*
var http = require('http');
var url  = require('url');

const port = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
    // res.end("My first server...");
}).listen(port);

console.log('Server is listening on http://localhost:'+port+'/');*/

var express     = require('express'),
    app         = express(),
    path        = require('path');


const port = 15951;

app.get('/Fecha', function(req, res){
    res.sendFile(path.join(__dirname + '/hola.html'))
});

app.get('/homepage', function(req, res){
    res.sendFile(path.join(__dirname + '/entries.html'))
});

app.get('/process_get', function(req, res){
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.get('/', function(req, res){
    res.send('Hola pruebas')
});

var server = app.listen(port, function(){
    var host = server.address().address;
    var puerto = server.address().port;
    console.log('Server is listening on http://%s:%s/', host, puerto);
});
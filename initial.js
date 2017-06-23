/**
 * Created by ovsdb on 23/06/17.
 */

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

console.log('Server is listening on http://localhost:'+port+'/');
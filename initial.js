/**
 * Created by ovsdb on 23/06/17.
 */

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Provecho en el almuerzo Wagner");
}).listen(8080);
/**
 * Created by ovsdb on 23/06/17.
 */

var http = require('http');
const port = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
    // res.end("My first server...");
}).listen(port);

console.log('Server is listening on http://localhost:'+port+'/');
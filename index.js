// import http library into http variable
var http = require('http');

// Creates server that responds to simple http requests
// Responds with 200 response and page content
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Hello World</h1></body></html>');
}).listen(3000);

console.log('Server running on port 3000');

// import libraries
var http = require('http'),
    express = require('express');

// Initialize Express app and set its port to 300 default
var app = express();
app.set('port', process.env.PORT || 3000);

// Routing for / root
app.get('/', function ( req, res) {
    // send formats various response headers for you, like content-type and status code
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

// Creates server that responds to simple http requests
// Responds with 200 response and page content
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

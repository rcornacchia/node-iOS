var http = require('http'),
    express = require('express'),
    path = require('path');

// Initialize Express app and set its port to 300 default
var app = express();
app.set('port', process.env.PORT || 3000);

// serve up static files in response to incoming requests
// Maps local subfolder public to the base route /
app.use(express.static(path.join(__dirname, 'public')));

// Routing for / root
app.get('/', function ( req, res) {
    // send formats various response headers for you, like content-type and status code
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.get('/:a?/:b?/:c?', function(req, res) {
    res.send(req.params.a + ' ' + req.params.b + ' ' + req.params.c);
});

// 404 request
// app.use is a catch-all, why it's at the end of the route
app.use(function(req, res) {
    res.render('404', {url:req.url}});
});

// Creates server that responds to simple http requests
// Responds with 200 response and page content
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

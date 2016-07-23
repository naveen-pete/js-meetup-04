var express = require('express');
var logger = require('morgan');

var app = express();
var port = 3000;

app.use(logger('common'));
app.use(express.static(__dirname + '/public'));

// app.all() method is used for loading middleware functions at a path for all request methods.
// The following handler will be executed for requests to “/customer” whether you are using 
// GET, POST, PUT, DELETE, or any other HTTP request method
app.all('/customers', function(req, res, next) {
    console.log('Invoked app.all() function for /customers route.');

    res.set('Content-Type', 'text/plain');
    next();
});

// Respond to GET requests on the /customers route
app.get('/customers', function (req, res) {
    res.end('Get Customer');
});

// Respond to POST requests on the /customers route
app.post('/customers', function (req, res) {
    res.end('Create Customer');
});

// Respond to PUT requests on the /customers route
app.put('/customers', function (req, res) {
    res.end('Update Customer');
});

// Respond to DELETE requests on the /customers route
app.delete('/customers', function (req, res) {
    res.end('Delete Customer');
});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});

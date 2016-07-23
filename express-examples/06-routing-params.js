var express = require('express');
var logger = require('morgan');

var app = express();
var port = 3000;

app.use(logger('common'));
app.use(express.static(__dirname + '/public'));

app.all('/customers', function(req, res, next) {
    console.log('Invoked app.all() function for /customers route.');

    res.set('Content-Type', 'text/plain');
    next();
});

app.all('/customers/:customerId', function(req, res, next) {
    console.log('Invoked app.all() function for /customers:customerId route.');

    res.set('Content-Type', 'text/plain');
    next();
});

// Use app.route() to create chainable route handlers for a route path
// Respond to GET and POST requests on the '/customers' route
app.route('/customers')
    .get(function (req, res) {
        res.end('Get All Customers');
    })
    .post(function (req, res) {
        res.end('Create Customer');
    });

// Respond to GET, PUT and DELETE requests on the '/customers/:customerId' route
app.route('/customers/:customerId')
    .get(function (req, res) {
        res.end('Get Customer for customer id: ' + req.params.customerId);
    })
    .put(function (req, res) {
        res.end('Update Customer for customer id: ' + req.params.customerId);
    })
    .delete(function (req, res) {
        res.end('Delete Customer for customer id: ' + req.params.customerId);
    });

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
  console.log('Example app listening on http://localhost:' + port);
});

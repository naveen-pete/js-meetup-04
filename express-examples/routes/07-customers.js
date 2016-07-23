var express = require("express");
var router = express.Router();

router.all('/', function(req, res, next) {
    console.log('Invoked router.all() function for /customers route.');

    res.set('Content-Type', 'text/plain');
    next();
});

router.all('/:customerId', function(req, res, next) {
    console.log('Invoked router.all() function for /customers:customerId route.');

    res.set('Content-Type', 'text/plain');
    next();
});

// Use router.route() to create chainable route handlers for a route path
// Respond to GET and POST requests on the '/customers' route
router.route('/')
    .get(function (req, res) {
        res.end('Get All Customers');
    })
    .post(function (req, res) {
        res.end('Create Customer');
    });

// Respond to GET, PUT and DELETE requests on the '/customers/:customerId' route
router.route('/:customerId')
    .get(function (req, res) {
        res.end('Get Customer for customer id: ' + req.params.customerId);
    })
    .put(function (req, res) {
        res.end('Update Customer for customer id: ' + req.params.customerId);
    })
    .delete(function (req, res) {
        res.end('Delete Customer for customer id: ' + req.params.customerId);
    });

module.exports = router;

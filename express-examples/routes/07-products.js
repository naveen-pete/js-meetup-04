var express = require("express");
var router = express.Router();

router.all('/', function(req, res, next) {
    console.log('Invoked router.all() function for /products route.');

    res.set('Content-Type', 'text/plain');
    next();
});

router.all('/:productId', function(req, res, next) {
    console.log('Invoked router.all() function for /products:productId route.');

    res.set('Content-Type', 'text/plain');
    next();
});

// Use router.route() to create chainable route handlers for a route path
// Respond to GET and POST requests on the '/products' route
router.route('/')
    .get(function (req, res) {
        res.end('Get All Products');
    })
    .post(function (req, res) {
        res.end('Create Product');
    });

// Respond to GET, PUT and DELETE requests on the '/products/:productId' route
router.route('/:productId')
    .get(function (req, res) {
        res.end('Get Product for product id: ' + req.params.productId);
    })
    .put(function (req, res) {
        res.end('Update Product for product id: ' + req.params.productId);
    })
    .delete(function (req, res) {
        res.end('Delete Product for product id: ' + req.params.productId);
    });

module.exports = router;

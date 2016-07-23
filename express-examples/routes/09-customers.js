var express = require("express");
var bodyParser = require('body-parser');
var customerService = require('../services/customerService')

var router = express.Router();

// Register the JSON body parser for parsing JSON data in request body 
router.use(bodyParser.json());

// Use router.route() to create chainable route handlers for a route path
// Respond to GET and POST requests on the '/customers' route
router.route('/')
    .get(function (req, res) {
        console.log('Get All Customers');
    
        var customers = customerService.getAll();
    
        res.json(customers);
    })
    .post(function (req, res) {
        console.log('Create Customer');
    
        // Use req.body.<field-name> for retrieving JSON fields from request body
        var name = req.body.name;
        var email = req.body.email;
        var phone = req.body.phone;
        var city = req.body.city;
        console.log('   name:', name, ', email:', email, ', phone:', phone, ', city:', city);

        var customer = customerService.create(name, email, phone, city);
    
        res.json(customer);
    });

// Respond to GET, PUT and DELETE requests on the '/customers/:customerId' route
router.route('/:customerId')
    .get(function (req, res) {
        console.log('Get Customer for customer id: ' + req.params.customerId);
    
        var customer = customerService.get(req.params.customerId);
    
        res.json(customer);
    })
    .put(function (req, res) {
        console.log('Update Customer for customer id: ' + req.params.customerId);
    
        // Use req.body.<field-name> for retrieving JSON fields from request body
        var name = req.body.name;
        var email = req.body.email;
        var phone = req.body.phone;
        var city = req.body.city;
        console.log('   name:', name, ', email:', email, ', phone:', phone, ', city:', city);
    
        var customer = customerService.update(req.params.customerId, name, 
                                      email, phone, city);
    
        res.json(customer);
    })
    .delete(function (req, res) {
        console.log('Delete Customer for customer id: ' + req.params.customerId);
    
        var deletedCustomers = customerService.delete(req.params.customerId);
    
        res.json(deletedCustomers);
    });

module.exports = router;

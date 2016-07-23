var express = require("express");
var router = express.Router();

// Use router.route() to create chainable route handlers for a route path
// Respond to GET and POST requests on the '/customers' route
router.route('/')
    .get(function (req, res) {
        console.log('Get All Customers');
    
        // res.json() sends a JSON response, internally uses JSON.stringify()
        res.json(customers);
    })
    .post(function (req, res) {
        res.end('Create Customer');
    });

// Respond to GET, PUT and DELETE requests on the '/customers/:customerId' route
router.route('/:customerId')
    .get(function (req, res) {
        var customerId = parseId(req.params.customerId);
        console.log('Get Customer for customer id: ' + customerId);
    
        // res.json() sends a JSON response, internally uses JSON.stringify()
        res.json(customers[customerId]);
    })
    .put(function (req, res) {
        var customerId = parseId(req.params.customerId);
        console.log('Update Customer for customer id: ' + customerId);
    
        // res.json() sends a JSON response, internally uses JSON.stringify()
        res.json(customers[customerId]);
    })
    .delete(function (req, res) {
        res.end('Delete Customer for customer id: ' + req.params.customerId);
    });

module.exports = router;

var parseId = function (id) {
    id = isNaN(parseInt(id)) ? 0 : id;
    return id;
}

//-----------------------------------------------------------------------------
// Customers array

var customers = [];
customers[0] = {
    id: 0,
    name: 'Amar',
    email: 'amar@xyz.com',
    phone: '+91-11111-22222',
    city: 'Bengaluru'
};
customers[1] = {
    id: 1,
    name: 'Akbar',
    email: 'akbar@xyz.com',
    phone: '+91-33333-44444',
    city: 'Hyderabad'
};
customers[2] = {
    id: 2,
    name: 'Anthony',
    email: 'anthony@xyz.com',
    phone: '+91-55555-66666',
    city: 'Chennai'
};

//-----------------------------------------------------------------------------
// Some more customers, if required

/*
customers[3] = {
  "id": 3,
  "name": "Hari",
  "email": "hari@xyz.com",
  "phone": "+91-12345-12345",
  "city": "Bengaluru"
};

customers[4] = {
  "id": 4,
  "name": "Krishna",
  "email": "krishna@xyz.com",
  "phone": "+91-99999-88888",
  "city": "Cochin"
};
*/

var express = require('express');
var logger = require('morgan');
var customers = require('./routes/07-customers');
var products = require('./routes/07-products');

var app = express();
var port = 3000;

app.use(logger('common'));
app.use(express.static(__dirname + '/public'));

app.use('/customers', customers);
app.use('/products', products);

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
  console.log('Example app listening on http://localhost:' + port);
});

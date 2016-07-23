var express = require('express');
var logger = require('morgan');
var customers = require('./routes/10-customers');

var app = express();
var port = 3000;

// Use app.set() method to set:
// (a) a directory that contains EJS views
// (b) the default engine extension to use when omitted
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(logger('common'));
app.use(express.static(__dirname + '/public'));

app.use('/customers', customers);

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
  console.log('Example app listening on http://localhost:' + port);
});

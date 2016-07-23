var express = require('express');

var app = express();
var port = 3000;

// Define a logging function for logging date
var dateLogger = function (req, res, next) {
    var requestDate = new Date();
    console.log('Request Date & Time: ' + requestDate);
    next();
};

// Use app.use() to log date for every single incoming request
app.use(dateLogger);

// Respond to GET request on the root route (/), the application’s home page
app.get('/', function (req, res) {
    res.end('Hello Express!');
});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});

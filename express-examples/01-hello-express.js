var express = require('express');

var app = express();
var port = 3000;

// Respond to GET request on the root route (/), the application’s home page
app.get('/', function (req, res) {
    res.end('Hello Express!');
});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});

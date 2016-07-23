var express = require('express');
var logger = require('morgan');

var app = express();
var port = 3000;

app.use(logger('common'));

// To serve static files, use the express.static() built-in middleware function
// Pass the name of the directory that contains the static assets to express.static() function

// Example #1 (http://localhost:3000/index.html)
app.use(express.static(__dirname + '/public'));

// Example #2 (http://localhost:3000/assets/index.html)
//app.use('/assets', express.static(__dirname + '/public'));

// Respond to GET request on the root route (/), the application’s home page
app.get('/', function (req, res) {
    res.end('Hello Express!');
});

// Wait and listen to incoming web requests on http://localhost:3000
app.listen(port, function () {
    console.log('Example app listening on http://localhost:' + port);
});

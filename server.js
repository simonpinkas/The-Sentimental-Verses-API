var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

app.listen(port);
console.log("Listening on port " + port);

app.get('/*', function(req, res) {
    var jsonResponse = [];
    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
    res.send(jsonResponse);
});
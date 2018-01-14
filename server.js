const express = require('express')
const app = express()
const routes = require('./routes');

var port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port);
console.log("Listening on port " + port);
//
//app.get('/*', (req, res) => {
//    var jsonResponse = [];
//    jsonResponse.push({ "text": "Hi. " + (Math.random() * 5 + 1).toFixed(0) + " is a lucky number..." });
//    res.send(jsonResponse);
//});
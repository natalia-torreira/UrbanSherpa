var express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})

app.get('/', function (req, res) {
  res.send('hello world from api');
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
})

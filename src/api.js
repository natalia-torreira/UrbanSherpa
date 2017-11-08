import express from 'express';
import path from 'path'; //this is used to redirect to a system file.
import bodyParser from 'body-parser'; //node.js body parsing middleware.


const app = express();
const path = '/api/v1/'

/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})

app.get('/', (req, res) => {
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });
  sequelize
    .authenticate()
    .then(() => res.send('hello world from api'));
})

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
})
*/

app.get('/api/v1', function (req, res){
  console.log("Got a GET request for the UrbanSherpa Rest API page");
  //use of path.resolve to make a path absolute.
  res.sendFile(path.resolve('src/views/api_client.htm'));
})


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("UrbanSherpa API listening at http://%s:%s", host, port)

})

/*This is the file that will be called when npm api is executed*/

import express from 'express';

const app = express();
const path = '/api/v1/'
var form_operations = require('./api/js/form_operations');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})

app.get('/api/v1', function (req, res){
  console.log("Got a GET request for the UrbanSherpa Rest API page");
})

app.get('/api/v1/forms', function (req, res){
  console.log("Got a GET request to retrieve the form with form_id: "+req.query.form_id);
  form_operations.getFormJsonStructureById(req.query.form_id, function(err, data){
    if(err){
      //In this case data will have the details of the error message.
      res.status(400).send(data);
    }
    else{
      console.log("Form structure: "+ data);
      res.send(data);
    }
  });
})


app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
})

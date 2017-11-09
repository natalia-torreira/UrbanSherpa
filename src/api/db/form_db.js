const Sequelize = require('sequelize');
var database = require('../config/database');
var Form = require('../models/form');
let form_db = {};
module.exports = form_db;

var myCon = database.development;

const sequelize = new Sequelize(myCon.database,
  myCon.username, myCon.password, {
  host: myCon.host,
  //port: process.env.POSTGRES_PORT,
  dialect: myCon.dialect,
  pool: myCon.pool
});

//Select form by form_id from forms table
form_db.selectFormById = function selectFormById(id, callback){
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    //retrieve data from db
    Form.findOne(id).then(form => {
        if (form == null) {
          callback("error", "form with id: " + id + " not found");
        }
        else {
          callback("success", form);
        }
   })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    //Callback (key,value -> Error, error details)
    callback('Unable to connect to the database:', err);
   });
 }

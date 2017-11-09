const Sequelize = require('sequelize');
var database = require('../config/database');
var Form_Structure = require('../models/form_structure');
let form_structure = {};
module.exports = form_structure;

var myCon = database.development;

const sequelize = new Sequelize(myCon.database,
  myCon.username, myCon.password, {
  host: myCon.host,
  //port: process.env.POSTGRES_PORT,
  dialect: myCon.dialect,
  pool: myCon.pool
});

//Select form_structure by form_id
form_structure.selectFormStructureById = function selectFormStructureById(id, callback){
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    //retrieve data from db
    Form_Structure.findOne(id).then(form_structure => {
        if (form_structure == null) {
          callback("error", "form_structure with id: " + id + " not found");
        }
        else {
          callback(form_structure);
        }
   })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    //Callback (key,value -> Error, error details)
    callback('Unable to connect to the database:', err);
   });
 }

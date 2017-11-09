const Sequelize = require('sequelize');
var database = require('../config/database');
var Vertical = require('../models/vertical');
let vertical_db = {};
module.exports = vertical_db;

var myCon = database.development;

const sequelize = new Sequelize(myCon.database,
  myCon.username, myCon.password, {
  host: myCon.host,
  //port: process.env.POSTGRES_PORT,
  dialect: myCon.dialect,
  pool: myCon.pool
});

//Select vertical by id.
vertical_db.selectVerticalById = function selectVerticalById(id, callback){
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    //retrieve data from db
    Vertical.findOne(id).then(vertical => {
        if (vertical == null) {
          callback("error", "vertical with id: " + id + " not found");
        }
        else {
          callback(vertical);
        }
   })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    //Callback (key,value -> Error, error details)
    callback('Unable to connect to the database:', err);
   });
 }

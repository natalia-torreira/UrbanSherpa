const Sequelize = require('sequelize');
var database = require('../config/database');
var User = require('../models/user');
let user_db = {};
module.exports = user_db;

var myCon = database.development;

const sequelize = new Sequelize(myCon.database,
  myCon.username, myCon.password, {
  host: myCon.host,
  //port: process.env.POSTGRES_PORT,
  dialect: myCon.dialect,
  pool: myCon.pool
});

//Select user by id.
user_db.selectUserById = function selectUserById(id, callback){
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    //retrieve data from db
    User.findOne(id).then(user => {
        if (user == null) {
          callback("error", "user with id: " + id + " not found");
        }
        else {
          callback(user);
        }
   })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    //Callback (key,value -> Error, error details)
    callback('Unable to connect to the database:', err);
   });
 }

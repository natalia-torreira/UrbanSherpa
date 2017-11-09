const Sequelize = require('sequelize');
var database = require('../config/database');
var Form_Submission = require('../models/form_submission');
let form_submission_db = {};
module.exports = form_submission_db;

var myCon = database.development;

const sequelize = new Sequelize(myCon.database,
  myCon.username, myCon.password, {
  host: myCon.host,
  //port: process.env.POSTGRES_PORT,
  dialect: myCon.dialect,
  pool: myCon.pool
});

//Select form_submission by id.
form_submission_db.selectFormSubmissionById = function selectFormSubmissionById(id, callback){
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    //retrieve data from db
    Form_Submission.findOne(id).then(form_submission => {
        if (form_submission == null) {
          callback("error", "form_submission with id: " + id + " not found");
        }
        else {
          callback(form_submission);
        }
   })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    //Callback (key,value -> Error, error details)
    callback('Unable to connect to the database:', err);
   });
 }

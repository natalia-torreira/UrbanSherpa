const Sequilize = require('sequelize');
var database = require('./config/database');
var Form_Submission_Answer = require('../models/form_submission_answer');
module.exports = form_submission_answer_db;

var myCon = database.development;

const sequilize = new Sequelize(myCon.database,
  myCon.username, myCon.password, {
  host: myCon.host,
  //port: process.env.POSTGRES_PORT,
  dialect: myCon.dialect,
  pool: myCon.pool
});

//Select form_submission_answer by id.
form_submission_answer_db.selectFormSubmissionById = function selectFormSubmissionById(id, callback){
  sequilize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    //retrieve data from db
    Form_Submission_Answer.findOne(id).then(form_submission_answer => {
        if (form_submission_answer == null) {
          callback("error", "form_submission_answer with id: " + id + " not found");
        }
        else {
          callback(form_submission_answer);
        }
   })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    //Callback (key,value -> Error, error details)
    callback('Unable to connect to the database:', err);
   });
 }

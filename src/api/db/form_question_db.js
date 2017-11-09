const Sequelize = require('sequelize');
var database = require('../config/database');
var Form_Question = require('../models/form_question');
let form_question = {};
module.exports = form_question;

var myCon = database.development;

const sequelize = new Sequelize(myCon.database,
  myCon.username, myCon.password, {
  host: myCon.host,
  //port: process.env.POSTGRES_PORT,
  dialect: myCon.dialect,
  pool: myCon.pool
});

//Select form_question by id.
form_question.selectQuestionById = function selectQuestionById(id, callback){
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    //retrieve data from db
    Form_Question.findOne(id).then(form_question => {
        if (form_question == null) {
          callback("error", "form_question with id: " + id + " not found");
        }
        else {
          callback(form_question);
        }
   })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    //Callback (key,value -> Error, error details)
    callback('Unable to connect to the database:', err);
   });
 }

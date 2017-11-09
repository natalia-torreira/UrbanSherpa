var form_db_models = require('../db/form_db_models');
var models = require('../models/index');

let form_operations = {};
module.exports = form_operations;

form_operations.getFormJsonStructureById = function getFormJsonStructureById(form_id, callback){
    //get form structure
    var form_structure = {}; //this variable will contain the final result, the structure for the form.
    form_operations.form_db.selectFormById(form_id, function(err, form){
      if(err){
        callback(err, err.message);
      }
      else{
        form_structure = {
          "form": {
            "vertical_id": form.vertical_id,
            "form_id": form_id,
            "form_submission_id": null,
            "title": form.title,
            "description": form.description,
            "type": "user_personal" //not sure what's the purpose of this field, it's not included in the schema
            },
            "questions": {
            }
          };
        //get form_questions from the structure
        //get form questions per each question in the form structure

        //build form_structure combining the results of form
        //this is gonna be the final result
        callback(null, form_structure);

      }
  });
};

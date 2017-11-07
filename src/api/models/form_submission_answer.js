'use strict';
module.exports = (sequelize, DataTypes) => {
  var form_submission_answer = sequelize.define('form_submission_answer', {
    form_submission_answer_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    form_submission_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    updated_by_user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    underscored: true
  });
  return form_submission_answer;
};

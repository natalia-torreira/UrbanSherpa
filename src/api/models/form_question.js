'use strict';
module.exports = (sequelize, DataTypes) => {
  var form_question = sequelize.define('form_question', {
    form_question_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    form_id: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer_type: DataTypes.STRING,
    answer_details: DataTypes.JSON,
    validation: DataTypes.JSON,
    updated_by_user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    underscored: true
  });
  return form_question;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var form_submission_answer = sequelize.define('form_submission_answer', {
    form_submission_answer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    form_submission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    form_question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20)
    },
    answer: {
      type: DataTypes.TEXT
    },
    is_file: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
    created_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_by_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    getterMethods: {},
    setterMethods: {},
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    underscored: true
  });
  return form_submission_answer;
};

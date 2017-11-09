'use strict';
module.exports = (sequelize, DataTypes) => {
  var form_question = sequelize.define('form_question', {
    form_question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    default_options: {
      type: DataTypes.JSON,
      allowNull: false
    },
    updated_by_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING
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
  return form_question;
};

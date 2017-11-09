'use strict';
module.exports = (sequelize, DataTypes) => {
  var form_submission = sequelize.define('form_submission', {
    form_submission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    form_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  return form_submission;
};

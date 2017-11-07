'use strict';
module.exports = (sequelize, DataTypes) => {
  var form_submission = sequelize.define('form_submission', {
    form_submission_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    form_id: DataTypes.INTEGER,
    updated_by_user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    underscored: true
  });
  return form_submission;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    vertical_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    updated_by_user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    underscored: true
  });
  return user;
};

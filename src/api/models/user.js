'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    updated_by_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  return user;
};

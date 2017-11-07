'use strict';
module.exports = (sequelize, DataTypes) => {
  var vertical = sequelize.define('vertical', {
    vertical_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
  return vertical;
};

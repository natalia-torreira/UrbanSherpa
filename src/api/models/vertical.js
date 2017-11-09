'use strict';
module.exports = (sequelize, DataTypes) => {
  var vertical = sequelize.define('vertical', {
    vertical_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
  return vertical;
};

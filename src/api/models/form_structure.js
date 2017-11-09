'use strict';
module.exports = (sequelize, DataTypes) => {
  var form_structure = sequelize.define('form_structure', {
    form_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    structure: {
      type: DataTypes.JSON,
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
  return form_structure;
};

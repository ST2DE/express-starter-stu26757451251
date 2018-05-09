'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
      title: DataTypes.STRING,
      deleted: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};
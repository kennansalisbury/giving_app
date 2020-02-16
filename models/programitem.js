'use strict';
module.exports = (sequelize, DataTypes) => {
  const programItem = sequelize.define('programItem', {
    name: DataTypes.STRING,
    goal_num: DataTypes.INTEGER,
    url: DataTypes.STRING,
    description: DataTypes.TEXT,
    programId: DataTypes.INTEGER
  }, {});
  programItem.associate = function(models) {
    models.programItem.belongsTo(models.program)
    models.programItem.hasMany(models.giverItem)
  };
  return programItem;
};
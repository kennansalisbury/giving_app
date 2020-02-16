'use strict';
module.exports = (sequelize, DataTypes) => {
  const giverItem = sequelize.define('giverItem', {
    num_purchased: DataTypes.INTEGER,
    dollars_spent: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    programItemId: DataTypes.INTEGER
  }, {});
  giverItem.associate = function(models) {
    models.giverItem.belongsTo(models.user)
    models.giverItem.belongsTo(models.programItem)
  };
  return giverItem;
};
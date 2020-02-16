'use strict';
module.exports = (sequelize, DataTypes) => {
  const program = sequelize.define('program', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    organizationId: DataTypes.INTEGER
  }, {});
  program.associate = function(models) {
    models.program.belongsToMany(models.user, {through: 'users_programs'})
    models.program.belongsTo(models.organization)
    models.program.hasMany(models.programItem)
  };
  return program;
};
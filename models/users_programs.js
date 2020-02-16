'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_programs = sequelize.define('users_programs', {
    userId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER
  }, {});
  users_programs.associate = function(models) {
    // associations can be defined here
  };
  return users_programs;
};
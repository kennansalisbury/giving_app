'use strict';
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define('organization', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    street_address: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 3],
          msg: 'State code must be 2 letters' //message if validate condition not met
        }
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      validate: {
        len: {
          args: [1, 6],
          msg: 'Please enter a valid zipcode' //message if validate condition not met
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 11],
          msg: 'Please enter a valid phone number' //message if validate condition not met
        }
      }
    },
    description: DataTypes.TEXT
  }, {});
  organization.associate = function(models) {
    models.organization.hasMany(models.program)
  };
  return organization;
};
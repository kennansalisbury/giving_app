'use strict';

let bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg: 'Please provide a first name' //message if validate condition not met
        }
      }
    },
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Please provide a valid email address.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 25], //min and max length
          msg: 'Your password must be between 6 and 25 characters'
        }
      }
    },
    profilePhoto:DataTypes.STRING,
    isDonor: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    organizationid: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  }, {
    hooks: {
      beforeCreate: pendingUser => {
        if (pendingUser && pendingUser.password) { //if there is a pending user and they have a truthy password (not empty or undefined)
          //Hash the password
          let hashedPassword = bcrypt.hashSync(pendingUser.password, 12) //hashSync forces it to wait until after the password is hashed, first argument is plaintext password you want to hash, second argument is number of times it is rehashed/number of rounds for generating the salt

          //Reassign the password field to the hashed value
          pendingUser.password = hashedPassword
        } 

      }
    }
  });
  user.associate = function(models) {
    models.user.belongsToMany(models.program, {through: 'users_programs'})
    models.user.hasMany(models.giverItem)
  };

  user.prototype.validPassword = function(typedInPassword) {
    // determine if typed-in password hashes to same thing as existing hash
    let correctPassword = bcrypt.compareSync(typedInPassword, this.password)
    // return result of that comparison
    return correctPassword
  }

  user.prototype.toJSON =  function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  }

  return user;
};
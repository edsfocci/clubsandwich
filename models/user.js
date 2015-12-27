module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    firstName:    DataTypes.STRING,
    lastName:     DataTypes.STRING,
    email: {
      type:       DataTypes.STRING,
      allowNull:  false,
      unique:     true,
      validate: {
        isEmail:  false
      }
    },
    password: {
      type:       DataTypes.STRING,
      allowNull:  false
    }
  });
};

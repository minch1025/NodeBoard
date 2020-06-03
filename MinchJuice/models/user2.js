
module.exports = function (sequelize, DataTypes) {
  let user2 = sequelize.define(
    "user2",
    {
      name: {
        type: DataTypes.STRING(50),
        unique: true,
      },
      modelnumber: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      series: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate: function (models) {},
      },
    }
  );
  return user2;
};

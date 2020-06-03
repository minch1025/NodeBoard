module.exports = function (sequelize, DataTypes) {
  let user = sequelize.define(
    "user",
    {
      name: {
        filed: "name",
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      modelnumber: {
        filed: "modelnumber",
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
      },
      series: {
        filed: "series",
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
      },
    },
    {
      undescored: true,
      freezeTableName: true,
      tableName: "products",
    }
  );
  return user;
};

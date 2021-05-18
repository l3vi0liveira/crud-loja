module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    "Categoria",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primarykey: true,
      },
      nome: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "categoria",
    }
  );
  Categoria.associate = (models) => {};
  return Categoria;
};

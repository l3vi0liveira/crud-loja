module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: DataTypes.STRING,
      valor: DataTypes.DOUBLE,
      quantidade: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "produto",
    }
  );

  Produto.associate = (models) => {
    Produto.belongsTo(models.Fornecedor, {
      foreignKey: "fornecedorId",
      as: "fornecedor",
    });

    Produto.belongsToMany(models.Pedido, {
      foreignKey: "produtoId",
      through: "pedido_produto",
      as: "pedidos",
    });
  };

  return Produto;
};

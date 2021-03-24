module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define(
    "Pedido",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      valorTotal: DataTypes.DOUBLE,
      status: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "pedido",
    }
  );

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, {
      foreignKey: "usuarioId",
      as: "usuario",
    });

    Pedido.belongsToMany(models.Produto, {
      foreignKey: "pedidoId",
      through: "pedido_produto",
      as: "produtos",
    });
  };

  return Pedido;
};

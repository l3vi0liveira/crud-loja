module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
      "Pedido",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        produto: DataTypes.STRING,
        valorTotal: DataTypes.DECIMAL(10,2),
        estadoDoPedido: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        tableName: "pedido",
      }
    );
  
    Pedido.associate = (models) => {
      Pedido.belongsTo(models.Usuario,{
        foreignKey:'usuarioId',
        as:'usuario'
      })
    };
  
    return Pedido;
  };
  
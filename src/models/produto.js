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
        quantidade: DataTypes.NUMERIC,
        valor: DataTypes.DECIMAL(10,4),
        descricao: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        tableName: "produto",
      }
    );
  
    Produto.associate = (models) => {
      Produto.belongsTo(models.Fornecedor,{
        foreignKey:'fornecedorId',
        as:'fornecedor'
      })
    };
  
    return Produto;
  };
  
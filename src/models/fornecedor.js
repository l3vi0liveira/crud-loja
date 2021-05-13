module.exports = (sequelize, DataTypes) => {
    const Fornecedor = sequelize.define(
      "Fornecedor",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        tableName: "fornecedor",
      }
    );
  
    
    Fornecedor.associate = (models) => {
      Fornecedor.hasMany(models.Produto,{
        foreignKey:'fornecedorId',
        as: 'produtos'
      })
    };
  
    return Fornecedor;
  };
  
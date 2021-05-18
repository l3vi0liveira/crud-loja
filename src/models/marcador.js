module.exports = (sequelize, DataTypes) => {
  const Marcador = sequelize.define(
    "Marcador",
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
      tabela: "marcador",
    }
  );
  Marcador.associate = (models) => {
    return Marcador;
  };
};

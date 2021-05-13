'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("endereco", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'id',
          model: 'usuario'
        }
      },
      rua: Sequelize.STRING,
      numero: Sequelize.STRING,
      complemento: Sequelize.STRING,
      bairro: Sequelize.STRING,
      cep: Sequelize.STRING,
      cidade: Sequelize.STRING,
      estado: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("endereco");
  }
};

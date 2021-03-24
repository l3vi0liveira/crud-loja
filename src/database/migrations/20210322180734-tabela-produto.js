"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("produto", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fornecedorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "fornecedor",
          key: "id",
        },
      },
      nome: Sequelize.STRING,
      valor: Sequelize.DOUBLE,
      quantidade: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("produto");
  },
};

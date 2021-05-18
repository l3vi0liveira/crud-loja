"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("post", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primarykey: true,
      },
      nome: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("post");
  },
};

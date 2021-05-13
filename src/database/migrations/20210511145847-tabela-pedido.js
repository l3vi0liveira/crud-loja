'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pedido", {
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
      produto: Sequelize.STRING,
      valorTotal: Sequelize.DECIMAL(10,2),
      estadoDoPedido: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pedido");
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('medico', {
      codmed: {
        type: Sequelize.BIGINT(15),
        primaryKey: true,

      },
      nomemed:{
        type: Sequelize.STRING(15)

      },
      genero: {
        type: Sequelize.STRING
      },
      telefone :{
        type: Sequelize.STRING(11)
      },
      e_mail: {
        type: Sequelize.STRING(55)
      },
      codespec:{
        type: Sequelize.BIGINT(15),
        references: {
          model: 'especialidade',
          key: 'codespec'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

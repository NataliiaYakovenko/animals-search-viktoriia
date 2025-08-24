'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      owner: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      ownerContacts: {
        type: Sequelize.STRING(13),
        field: 'owner_contacts',
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      petTypeId: {
        type: Sequelize.INTEGER,
        field: 'pet_type_id',
        references: {
          model: 'pet_types',
          id: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      city: {
        type: Sequelize.ENUM('Kyiv', 'Dnipro', 'New York'),
        allowNull: false,
      },
      isFound: {
        type: Sequelize.BOOLEAN,
        field: 'is_found',
        defaultValue: false,
      },
      lostDate: {
        type: Sequelize.DATEONLY,
        field: 'lost_date',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pets');
  },
};

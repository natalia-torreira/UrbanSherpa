'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('form_questions', {
      form_question_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      form_id: {
        type: Sequelize.INTEGER
      },
      order: {
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.TEXT
      },
      answer_type: {
        type: Sequelize.TEXT
      },
      answer_details: {
        type: Sequelize.JSON
      },
      validation: {
        type: Sequelize.JSON
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_by_user_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('form_questions');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`select count(*) from users where user_id = 1`).then((output) => {
      if (output[0][0].count === '1') {
        console.log("SKIP: Already seeded!");
      } else {
        return queryInterface.sequelize.query(insert_dummy_data);
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    console.log("Recreate DB to undo this seed");
  }
};

const insert_dummy_data = `
  /*Insert users dummy data*/
  INSERT INTO users (user_id, user_name, updated_by_user_id, created_at, updated_at) VALUES (1, 'daniel.cho@orahq.com', 1, '2017-11-09', '2017-11-09');
  INSERT INTO users (user_id, user_name, updated_by_user_id, created_at, updated_at) VALUES (2, 'natalia.torreira@foundryhq.com', 1, '2017-11-09', '2017-11-09');

  /*Insert dummy roles*/
  INSERT INTO roles (role_id, name, description, updated_by_user_id, created_at, updated_at) VALUES (1, 'dbAdmin', 'Database Administrator', 1, '2017-11-09', '2017-11-09');
  INSERT INTO roles (role_id, name, description, updated_by_user_id, created_at, updated_at) VALUES (2, 'owner', 'Person or commpany paying for the lincense to use US system', 1, '2017-11-09', '2017-11-09');
  INSERT INTO roles (role_id, name, description, updated_by_user_id, created_at, updated_at) VALUES (3, 'systemAdmin', 'Admin User', 1, '2017-11-09', '2017-11-09');
  INSERT INTO roles (role_id, name, description, updated_by_user_id, created_at, updated_at) VALUES (4, 'manager', 'User using the Management System', 1, '2017-11-09', '2017-11-09');
  INSERT INTO roles (role_id, name, description, updated_by_user_id, created_at, updated_at) VALUES (5, 'sherpa', 'Casual worker', 1, '2017-11-09', '2017-11-09');

  /*Insert user_roles dummy data*/
  INSERT INTO user_roles (user_id, role_id, updated_by_user_id, created_at, updated_at) VALUES (1, 1, 1, '2017-11-09', '2017-11-09');
  INSERT INTO user_roles (user_id, role_id, updated_by_user_id, created_at, updated_at) VALUES (2, 2, 1, '2017-11-09', '2017-11-09');


  /*Insert verticals dummy data*/
  INSERT INTO verticals (vertical_id, name, description, updated_by_user_id, created_at, updated_at) VALUES (1, 'basePlatform', 'Common base platform regardless the vertical used.', 1, '2017-11-09', '2017-11-09');


  /*Insert accounts dummy data*/
  INSERT INTO accounts (account_id, user_id, name, account_type_id, is_licensed, attributes, updated_by_user_id, created_at, updated_at) VALUES (1, 2, 'Foundry', null, true, null, 1, '2017-11-09', '2017-11-09');


  /*Insert account_verticals dummy data*/
  INSERT INTO account_verticals (account_id, vertical_id, is_licensed, updated_by_user_id, created_at, updated_at) VALUES (1, 1, true, 1, '2017-11-09', '2017-11-09');


  /*Insert user_verticals* dummy data*/
  INSERT INTO user_verticals (user_id, vertical_id, updated_by_user_id, created_at, updated_at) VALUES (2, 1, 1, '2017-11-09', '2017-11-09');


  /*Insert user_accounts dummy data*/
  INSERT INTO user_accounts (user_id, account_id, updated_by_user_id, created_at, updated_at) VALUES (2, 1, 1, '2017-11-09', '2017-11-09');


  /*Insert forms dummy data*/
  INSERT INTO forms (form_id, vertical_id, name, title, description, updated_by_user_id, notes, created_at, updated_at) VALUES (1, 1, 'myAge', 'My Age', 'Please, enter your age', 1, 'form to submit User''s age', '2017-11-09', '2017-11-09');


  /*Insert form_questions dummy data*/
  INSERT INTO form_questions (form_question_id, question, data_type, default_options, updated_by_user_id, notes, created_at, updated_at) VALUES (1, 'name', 'string', '{
    "required": true,
      "options": {
        "ui:title": "Name",
        "uiTitleAtributes": {
          "color": "Blue",
          "size": "normal",
          "fontStyle": "bold"
        },
        "ui:placeholder": "Enter your name",
        "maxLength": 255
      }
  }', 1, 'Field to enter user''s name', '2017-11-09', '2017-11-09');
  INSERT INTO form_questions (form_question_id, question, data_type, default_options, updated_by_user_id, notes, created_at, updated_at) VALUES (2, 'age', 'integer', '{
    "required": true,
      "options": {
        "ui:title": "Age",
        "uiTitleAtributes": {
          "color": "Blue",
          "size": "normal",
          "fontStyle": "bold"
        },
        "ui:widget": "updown",
        "ui:placeholder": "Enter your age",
        "maxLength": 2,
        "minimum": 1,
        "maximum": 99
      }
  }', 1, 'Field to enter user''s name', '2017-11-09', '2017-11-09');


  /*Insert form structure dummy data*/
  INSERT INTO form_structures (form_id, structure, updated_by_user_id, created_at, updated_at) VALUES (1, '{ "1":{ "questionOrder": 1},"2":{ "questionOrder": 2}}', 1, '2017-11-09', '2017-11-09');
`

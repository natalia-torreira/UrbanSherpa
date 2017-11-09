/*Urbansherpa db dummy data*/


/*Insert users dummy data*/
INSERT INTO "urbansherpa-prototype".users (user_id, user_name, updated_by_user_id) VALUES (1, 'daniel.cho@orahq.com', 1);
INSERT INTO "urbansherpa-prototype".users (user_id, user_name, updated_by_user_id) VALUES (2, 'natalia.torreira@foundryhq.com', 1);

/*Insert dummy roles*/
INSERT INTO "urbansherpa-prototype".roles (role_id, name, description, updated_by_user_id) VALUES (1, 'dbAdmin', 'Database Administrator', 1);
INSERT INTO "urbansherpa-prototype".roles (role_id, name, description, updated_by_user_id) VALUES (2, 'owner', 'Person or commpany paying for the lincense to use US system', 1);
INSERT INTO "urbansherpa-prototype".roles (role_id, name, description, updated_by_user_id) VALUES (3, 'systemAdmin', 'Admin User', 1);
INSERT INTO "urbansherpa-prototype".roles (role_id, name, description, updated_by_user_id) VALUES (4, 'manager', 'User using the Management System', 1);
INSERT INTO "urbansherpa-prototype".roles (role_id, name, description, updated_by_user_id) VALUES (5, 'sherpa', 'Casual worker', 1);

/*Insert user_roles dummy data*/
INSERT INTO "urbansherpa-prototype".user_roles (user_id, role_id, updated_by_user_id) VALUES (1, 1, 1);
INSERT INTO "urbansherpa-prototype".user_roles (user_id, role_id, updated_by_user_id) VALUES (2, 2, 1);


/*Insert verticals dummy data*/
INSERT INTO "urbansherpa-prototype".verticals (vertical_id, name, description, updated_by_user_id) VALUES (1, 'basePlatform', 'Common base platform regardless the vertical used.', '2017-11-09 11:53:21.996000', '2017-11-09 11:53:24.791000', 1);


/*Insert accounts dummy data*/
INSERT INTO "urbansherpa-prototype".accounts (account_id, user_id, name, account_type_id, is_licensed, attributes, updated_by_user_id) VALUES (1, 2, 'Foundry', null, true, null, '2017-11-09 11:54:59.788000', '2017-11-09 11:55:05.671000', 1);


/*Insert account_verticals dummy data*/
INSERT INTO "urbansherpa-prototype".account_verticals (account_id, vertical_id, is_licensed, updated_by_user_id) VALUES (1, 1, true, '2017-11-09 11:55:49.870425', '2017-11-09 11:55:49.870425', 1);


/*Insert user_verticals* dummy data*/
INSERT INTO "urbansherpa-prototype".user_verticals (user_id, vertical_id, updated_by_user_id) VALUES (2, 1, 1);


/*Insert user_accounts dummy data*/
INSERT INTO "urbansherpa-prototype".user_accounts (user_id, account_id, updated_by_user_id) VALUES (2, 1, 1);


/*Insert forms dummy data*/
INSERT INTO "urbansherpa-prototype".forms (form_id, vertical_id, name, title, description, updated_by_user_id, notes) VALUES (1, 1, 'myAge', 'My Age', 'Please, enter your age', 1, 'form to submit User''s age');


/*Insert form_questions dummy data*/
INSERT INTO "urbansherpa-prototype".form_questions (form_question_id, question, data_type, default_options, updated_by_user_id, notes) VALUES (1, 'name', 'string', '{
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
  }', 1, 'Field to enter user''s name');
INSERT INTO "urbansherpa-prototype".form_questions (form_question_id, question, data_type, default_options, updated_by_user_id, notes) VALUES (2, 'age', 'integer', '{
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
    }', 1, 'Field to enter user''s name');


/*Insert form structure dummy data*/
 INSERT INTO "urbansherpa-prototype".form_structure (form_id, structure, updated_by_user_id) VALUES (1, '{ "1":{ "questionOrder": 1},"2":{ "questionOrder": 2}}', 1);


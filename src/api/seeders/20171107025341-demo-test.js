'use strict';

let Bluebird = require('bluebird');
var db = require('../models/index');
let time = new Date(2017, 11, 7, 2, 53, 41);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Bluebird
      .delay(1000)
      .then(() => {
        return db.user.findOne({where: {user_id: 1}}).then((user) => {
          if (user == null) {
            return db.user.create({
              user_id: 1,
              name: 'Big Brother',
              updated_by_user_id: 1
            });
          } else {
            return user.update({
              name: 'Big Brother',
              updated_by_user_id: 1
            });
          }
        });
      })
      .then(() => {
        return db.vertical.findOne({where: {name: 'Flight Attandants'}}).then((vertical) => {
          return ((vertical) => {
            if (vertical == null) {
              return db.vertical.create({
                name: 'Flight Attandants',
                updated_by_user_id: 1
              });
            } else {
              return vertical.update({
                updated_by_user_id: 1
              });
            }
          })(vertical).then((vertical) => {
            return db.user.findOne({where: {name: 'flight attandant1'}}).then((user) => {
              return ((user) => {
                if (user == null) {
                  return db.user.create({
                    name: 'flight attandant1',
                    vertical_id: vertical.vertical_id,
                    updated_by_user_id: 1
                  });
                } else {
                  return user.update({
                    vertical_id: vertical.vertical_id,
                    updated_by_user_id: 1
                  });
                }
              })(user).then((user) => {
                return db.form.findOne({where: {name: 'Signup'}}).then((form) => {
                  return ((form) => {
                    if (form == null) {
                      return db.form.create({
                        name: 'Signup',
                        vertical_id: vertical.vertical_id,
                        updated_by_user_id: user.user_id
                      })
                    } else {
                      return form.update({
                        vertical_id: vertical.vertical_id,
                        updated_by_user_id: user.user_id
                      })
                    }
                  })(form).then((form) => {
                    return db.form_question.findOne({where: {question: 'note'}}).then((form_question) => {
                      if (form_question == null) {
                        return db.form_question.create({
                          form_id: form.form_id,
                          order: 1,
                          question: 'note',
                          answer_type: 'text',
                          answer_details: {},
                          validation: {},
                          updated_by_user_id: user.user_id
                        })
                      } else {
                        return form_question.update({
                          form_id: form.form_id,
                          order: 1,
                          answer_type: 'text',
                          answer_details: {},
                          validation: {},
                          updated_by_user_id: user.user_id
                        })
                      }
                    });
                  });
                });
              });
            });
          });
        });
      });
  },

  down: (queryInterface, Sequelize) => {
  }
};

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const db = require('./api/models/index');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });
  sequelize
    .authenticate()
    .then(() => res.send('hello world from api'));
})

app.get('/forms/:form_id', (req, res) => {
  db.form.findOne({where: {form_id: req.params.form_id}}).then((form) => {
    db.form_question.findAll({where: {form_id: req.params.form_id}, order: []}).then((questions) => {
      let formatQuestions = {};

      questions.each((aa, question) => {
        formatQuestions[question.question] = {
          required: true,
          properties: {
            'type': 'string',
            'title': question.question,
            'minLength': 2,
            'maxLength': 15
          },
          options: {
            "ui:title": question.question,
            "ui:placeholder": 'Enter'
          }
        }
      }

      let data = {
        form_id:   form.form_id,
        name:      form.name,
        questions: formatQuestions
      }

      res.json(data);
    });
  });
})

app.post('/forms/:form_id/form_submissions', (req, res) => {
  let current_user_id = 1; // TEST

  db.form_submission.create({
    user_id: current_user_id,
    form_id: req.params.form_id,
    updated_by_user_id: current_user_id
  }).then((form_submission) => {
    Promise.all(req.body.form_submission_answers.map((submission) => {
      db.form_submission_answer.create({
        form_submission_id: form_submission.form_submission_id,
        form_question_id:   submission.form_question_id,
        answer:             submission.answer,
        updated_by_user_id: current_user_id
      });
    })).then(() => {
      res.json({form_submission_id: form_submission.form_submission_id});
    });
  });
})

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
})

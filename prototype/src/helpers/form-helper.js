export const formSchema = (json) => {
  const form = json.form;
  const questions = json.questions;
  const properties = schemaProperties(json.questions);
  const required = schemaRequired(json.questions);
  const schema = {
    'title':      form.title,
    'type':       'object',
    'properties': properties,
    'required':   required
  };

  if (json.form.description && json.form.description.length > 0) {
    schema.description = form.description;
  };

  return schema;
};

export const formUISchema = (json) => {
  const form = json.form;
  const questions = json.questions;
  let uiSchema = {};

  for (const question in questions) {
    uiSchema[question] = questions[question].options;
  }

  uiSchema['ui:rootFieldId'] = json.form.type;

  return uiSchema;
};

export const formOnSubmit = (formData, formStructure) => {
  let answers     = [];
  let requestData = {
    form_submission_id:      formStructure.form.form_submission_id,
    form_submission_answers: null
  };

  for (const question in formData) {
    let answer    = {};
    const answer_id = formStructure.questions[question]['form_submission_answer_id'];

    answer['form_question_id']          = formStructure.questions[question]['form_question_id'];
    answer['answer']                    = formData[question];
    answer['form_submission_answer_id'] = answer_id;

    answers.push(answer);
  };

  requestData.form_submission_answers = answers;

  return requestData;
};

const schemaProperties = (questions) => {
  let properties = {};

  for (const question in questions) {
    properties[question] = questions[question].properties;
  }

  return properties;
};

const schemaRequired = (questions) => {
  let required = [];

  for (const question in questions) {
    if (questions[question].required) {
      required.push(question);
    }
  };

  return required;
};

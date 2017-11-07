let formApiData = {};

export const formSchema = (json) => {
  formApiData = json;

  let form = json.form;
  let questions = json.questions;
  let properties = schemaProperties(json.questions);
  let required = schemaRequired(json.questions);
  let schema = {
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
  let form = json.form;
  let questions = json.questions;
  let uiSchema = {};

  for (let question in questions) {
    uiSchema[question] = questions[question].options;
  }

  uiSchema['ui:rootFieldId'] = json.form.type;

  return uiSchema;
};

export const formOnSubmit = (formData) => {
  for (let question in formData.formData) {
    formApiData.questions[question]['answer'] = formData.formData[question];
  };

  console.log(formApiData);
};

const schemaProperties = (questions) => {
  let properties = {};

  for (let question in questions) {
    properties[question] = questions[question].properties;
  }

  return properties;
};

const schemaRequired = (questions) => {
  let required = [];

  for (let question in questions) {
    if (questions[question].required) {
      required.push(question);
    }
  };

  return required;
};

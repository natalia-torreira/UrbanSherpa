export const formSchema = (json) => {
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

  for (let q in questions) {
    uiSchema[schemaPropertyName(questions[q].title)] = questions[q].options;
  }

  uiSchema['ui:rootFieldId'] = json.form.type;

  return uiSchema;
};

const schemaProperties = (questions) => {
  let properties = {};

  for (let q in questions) {
    let property = properties[schemaPropertyName(questions[q].title)] = {};

    property.type = questions[q].type;
    property.title = questions[q].title;
  }

  return properties;
};

const schemaRequired = (questions) => {
  let required = [];

  for (let q in questions) {
    if (questions[q].required) {
      required.push(schemaPropertyName(questions[q].title));
    }
  };

  return required;
};

const schemaPropertyName = (title) => {
  return title.toLowerCase().split(' ').join('_');
};

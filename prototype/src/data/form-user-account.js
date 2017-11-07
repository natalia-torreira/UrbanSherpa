const userAccountForm = {
  'form': {
    'vertical_id': 1,
    'form_id': 1,
    'title': 'User Account',
    'description': 'Enter your personal info.',
    'type': 'user_personal'
  },
  'questions': {
    '1': {
      'type': 'string',
      'title': 'Name',
      'required': true,
      'options': {
        'ui:title': 'Your name',
        'ui:autofocus': true,
        'ui:placeholder': 'Enter your name'
      }
    },
    '2': {
      'type': 'integer',
      'title': 'Age',
      'required': true,
      'options': {
        'ui:title': 'Your age',
        'ui:widget': 'text',
        'ui:placeholder': 'Enter your age'
      }
    }
  }
};

export default userAccountForm;

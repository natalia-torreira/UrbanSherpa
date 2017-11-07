const userAccountForm = {
  'form': {
    'vertical_id': 1,
    'form_id': 1,
    'title': 'User Account',
    'description': 'Enter your personal info.',
    'type': 'user_personal'
  },
  'questions': {
    'name': {
      'questionId': 1,
      'required': true,
      'properties': {
        'type': 'string',
        'title': 'Name',
        'minLength': 2,
        'maxLength': 15
      },
      'options': {
        'ui:title': 'Your name',
        'ui:autofocus': true,
        'ui:placeholder': 'Enter your name'
      }
    },
    'age': {
      'questionId': 2,
      'required': true,
      'properties': {
        'type': 'integer',
        'title': 'Age',
        'minimum': 1,
        'maximum': 99
      },
      'options': {
        'ui:title': 'Your age',
        'ui:widget': 'updown',
        'ui:placeholder': 'Enter your age'
      }
    }
  }
};

export default userAccountForm;

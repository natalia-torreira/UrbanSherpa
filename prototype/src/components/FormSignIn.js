import React from 'react';
import { Link } from 'react-router';
import Form from 'react-jsonschema-form';

const Schema = {
  'title': 'Sign In',
  'type': 'object',
  'properties': {
    'username': {
      'type': 'string',
      'title': 'Username'
    },
    'password': {
      'type': 'string',
      'title': 'Password'
    }
  }
};

const UISchema = {
  'ui:rootFieldId': 'account',
  'username': {
    'ui:autofocus': true,
    'ui:placeholder': 'Enter your username'
  },
  'password': {
    'ui:widget': 'password',
    'ui:placeholder': 'Enter your password'
  }
};

export default class FormSignIn extends React.Component {
  render() {
    return (
      <div className="form-sign-in">
        <Form schema={Schema} uiSchema={UISchema}>
          <button type="submit" className="btn btn-primary form-control">Sign Me In</button>
        </Form>
      </div>
    );
  }
}

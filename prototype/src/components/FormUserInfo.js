import React from 'react';
import { Link } from 'react-router';
import Form from 'react-jsonschema-form';
import { formSchema, formUISchema } from '../helpers/form-helper';

export default class FormUserInfo extends React.Component {
  render() {
    return (
      <div className="form-sign-in">
        <Form
          schema={formSchema(this.props.formStructure)}
          uiSchema={formUISchema(this.props.formStructure)}
        >
          <button type="submit" className="btn btn-primary form-control">Save Personal Info</button>
        </Form>
      </div>
    );
  }
}

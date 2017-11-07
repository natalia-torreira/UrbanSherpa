import React from 'react';
import { Link } from 'react-router';
import Form from 'react-jsonschema-form';
import { formSchema, formUISchema, formOnSubmit } from '../helpers/form-helper';

export default class FormUserInfo extends React.Component {
  render() {
    const apiData = this.props.formStructure;

    return (
      <div className="form-sign-in">
        <Form
          schema={formSchema(apiData)}
          uiSchema={formUISchema(apiData)}
          onSubmit={formOnSubmit}
        >
          <button type="submit" className="btn btn-primary form-control">Save Personal Info</button>
        </Form>
      </div>
    );
  }
}

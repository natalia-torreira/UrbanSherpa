import React from 'react';
import { Link } from 'react-router';
import Form from 'react-jsonschema-form';
import Axios from 'axios';
import { formSchema, formUISchema, formOnSubmit } from '../helpers/form-helper';

export default class FormUserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    };

    this.formStructure = this.props.formStructure;
    this.onSubmit      = this.onSubmit.bind(this);
  }

  onSubmit(formData) {
    const requestData = formOnSubmit(formData.formData, this.formStructure);

    // Process API request here
    Axios.get('http://localhost:1234/api/forms/user_account_saved')
         .then(response => {
           this.formStructure = response.data;
           this.setState({ submitted: true }); // Change state if API request is successful
         });
  }

  render() {
    return (
      <div className="form-sign-in" id="formSignIn">
        {this.state.submitted &&
          <div className="alert alert-success" role="alert">
            Account successfully saved.
          </div>
        }
        <Form
          noHtml5Validate={true}
          showErrorList={false}
          schema={formSchema(this.formStructure)}
          uiSchema={formUISchema(this.formStructure)}
          onSubmit={this.onSubmit}
        >
          <button type="submit" className="btn btn-primary form-control">Save Personal Info</button>
        </Form>
      </div>
    );
  }
}

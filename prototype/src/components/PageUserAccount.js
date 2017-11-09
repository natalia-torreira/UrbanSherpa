import React from 'react';
import { Link } from 'react-router';
import FormUserInfo from './FormUserInfo';
import Axios from 'axios';

export default class PageUserAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userAccountForm: {}
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:1234/api/forms/user_account')
         .then(response => {
           const userAccountForm = response.data;
           this.setState({ userAccountForm });
         });
  }

  render() {
    const formStructure = this.state.userAccountForm;

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6 col-lg-4">
          {Object.keys(formStructure).length > 0 && formStructure.constructor === Object ? (
              <FormUserInfo formStructure={formStructure} />
            ) : (
              <p>Loading user account form...</p>
            )
          }
        </div>
      </div>
    );
  }
}

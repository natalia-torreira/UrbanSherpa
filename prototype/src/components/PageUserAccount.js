import React from 'react';
import { Link } from 'react-router';
import FormUserInfo from './FormUserInfo';
import userAccountForm from '../data/form-user-account';

export default class PageUserAccount extends React.Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6 col-lg-4">
          <FormUserInfo formStructure={userAccountForm} />
        </div>
      </div>
    );
  }
}

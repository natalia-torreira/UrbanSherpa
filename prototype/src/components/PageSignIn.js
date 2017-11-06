import React from 'react';
import { Link } from 'react-router';
import FormSignIn from './FormSignIn';

export default class PageSignIn extends React.Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6 col-lg-4">
          <FormSignIn />
        </div>
      </div>
    );
  }
}

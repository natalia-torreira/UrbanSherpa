import React from 'react';
import { Link } from 'react-router';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>404 Page Not Found</h1>
        <p className="lead">Ooops! Sorry, we didn't find what you are looking for.</p>
      </div>
    );
  }
}

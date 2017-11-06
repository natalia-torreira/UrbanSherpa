import React from 'react';
import { Link } from 'react-router';

export default class PageHeader extends React.Component {
  render() {
    return (
      <header className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">UrbanSherpa Prototype</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-link">Sign In</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

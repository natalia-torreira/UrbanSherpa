import React from 'react';
import { Link } from 'react-router';
import PageHeader from './PageHeader';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <PageHeader />
        <main role="main" className="app-content container">
          {this.props.children}
        </main>
      </div>
    );
  }
}

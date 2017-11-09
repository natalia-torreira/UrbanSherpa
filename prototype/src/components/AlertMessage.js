import React from 'react';

export default class AlertMessage extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.type}`} role="alert">
        {this.props.message}
      </div>
    );
  }
}

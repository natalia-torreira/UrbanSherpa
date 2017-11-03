import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IndexComponent from './indexComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {message: "loading ..."};
  }

  componentDidMount() {
    fetch("http://localhost:3001").then(res => res.text().then(message => this.setState({ message })));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            {this.state.message}
          </p>
          <Route exact path="/" component={IndexComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

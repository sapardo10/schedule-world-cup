import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Login from './components/Login.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loggedin:false,

    }
  }

  renderLogIn() {
    return (
      <div className="container row">
        <div className="col-sm-3"/>
        <Login />
        <div className="col-sm-3"/>
      </div>
        
      );
  }

  renderFilters() {
    return (
      <div className="conatiner">Filters</div>
      );
  }

  render() {
    return (
      <div className="App container">
        <h1>World cup scheduler</h1>
      {this.state.loggedin ? this.renderFilters() : this.renderLogIn()}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <Router>
      <div className="container">
         <Navbar />
      </div>
      </Router>
    );
  }
}

export default App;

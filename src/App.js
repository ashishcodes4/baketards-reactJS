import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
         <Navbar />
      </div>
      </Router>
    );
  }
}

export default App;

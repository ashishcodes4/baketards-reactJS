import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Home from './Components/pages/Home';
import Social from './Components/social/Social';
import About from './Components/pages/About';
import Menu from './Components/pages/Menu';
import Gallery from './Components/pages/Gallery';
import Contact from './Components/pages/Contact';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/')
  }

  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <Router>
      <div className="some-random-class">
         <Navbar />
         <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/social" component={Social} />
         <Route exact path="/menu" component={Menu} />
         <Route exact path="/about" component={About} />
         <Route exact path="/gallery" component={Gallery} />
         <Route exact path="/contact" component={Contact} />
         <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

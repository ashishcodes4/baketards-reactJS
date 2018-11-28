import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='container home'>
        <h1>Website coming soon...</h1>
        <Link to='/social'>Social </Link>
      </div>
    )
  }
}

export default Home;
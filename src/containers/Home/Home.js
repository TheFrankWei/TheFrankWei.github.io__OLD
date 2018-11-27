import React, { Component } from 'react';
import './Home.scss';

import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';
import Welcome from './Welcome/Welcome.js';

class Home extends Component {
  render() {
    return (
      <div className = 'Home' id= 'Home'>

      <Welcome/>
      <About/>
      <Portfolio />
      <Contact/>


        {/*  <Route path='/#Welcome' exact component = {Welcome} />
          <Route path='/#About' exact component={About}/>
          <Route path='/#Portfolio' exact component={Portfolio}/>
          <Route path='/#Contact' exact component={Contact}/>*/}



      </div>
    );
  }
}

export default Home;

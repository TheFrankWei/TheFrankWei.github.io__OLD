import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer.js'

import './App.scss';
import Home from './containers/Home/Home.js';
import Nav from './components/Nav/Nav.js';
import Background from './components/Background/Background.js';
import QRFound from './containers/Home/Portfolio/QRFound/QRFound.js';
import LiftSpotter from './containers/Home/Portfolio/LiftSpotter/LiftSpotter.js';
import SoundByte from './containers/Home/Portfolio/SoundByte/SoundByte.js';
import LittleEinstein from './containers/Home/Portfolio/LittleEinstein/LittleEinstein.js';
import OnePlaylist from './containers/Home/Portfolio/OnePlaylist/OnePlaylist.js';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className = 'App'>

            <Nav/>
            <Switch>
              <Route path='/' exact component = {Home} />
              <Route path='/Portfolio/QRFound' exact component={QRFound}/>
              <Route path='/Portfolio/LiftSpotter' exact component={LiftSpotter}/>
              <Route path='/Portfolio/SoundByte' exact component={SoundByte}/>
              <Route path='/Portfolio/LittleEinstein' exact component={LittleEinstein}/>
              <Route path='/Portfolio/OnePlaylist' exact component={OnePlaylist}/>
            </Switch>


          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

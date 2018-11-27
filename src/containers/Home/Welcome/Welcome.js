import React from 'react';
import './Welcome.scss'
import Letter from './../../../components/Letter/Letter.js';
const Welcome = () => {
    return (
      <div className = 'Welcome' id = 'Welcome'>
        <h1 className="WName">
          <Letter className = "WName" value="F"/>
          <Letter className = "WName" value="R"/>
          <Letter className = "WName" value="A"/>
          <Letter className = "WName" value="N"/>
          <Letter className = "WName" value="K"/>
          <br/>
          <Letter className = "WName" value="W"/>
          <Letter className = "WName" value="E"/>
          <Letter className = "WName" value="I"/>
        </h1>
        {/*<div className= 'bio'><p>Web Developer!<br/>Photographer!<br/>(click anywear to interact)</p></div>*/}
      </div>
    );

}

export default Welcome;

import React from 'react';
import Letter from './../../../components/Letter/Letter.js';
import Icon from './../../../components/Icon/Icon.js';
import GitHub from './../../../images/github.svg'
import Linkedin from './../../../images/linkedin.svg'
import Flickr from './../../../images/flickr.svg'

import './Contact.scss';

const Contact = () =>{
    return (
      <div className = 'Contact' id = 'Contact'>
      <h1 className='CTitle'>
        <Letter className = 'CTitle' value="C"/>
        <Letter className = 'CTitle' value="O"/>
        <Letter className = 'CTitle' value="N"/>
        <Letter className = 'CTitle' value="T"/>
        <Letter className = 'CTitle' value="A"/>
        <Letter className = 'CTitle' value="C"/>
        <Letter className = 'CTitle' value="T"/>
      </h1>

      <div className = 'contact_icons'>
        <Icon href='https://github.com/TheFrankWei' target="_blank" rel="noopener" src={GitHub} alt="Github"/>
        <Icon href='https://www.linkedin.com/in/TheFrankWei/' target="_blank" rel="noopener" src={Linkedin} alt="Linkedin"/>
        <Icon target="_blank" rel="noopener" src={Flickr} alt="Flickr -- Coming Soon!"/>
      </div>
      </div>
    );
  }


export default Contact;

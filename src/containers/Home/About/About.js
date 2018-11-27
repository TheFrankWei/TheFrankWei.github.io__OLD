import React from 'react';
import './About.scss';
import Letter from './../../../components/Letter/Letter.js';
import Portrait from './../../../images/portrait.jpg';
const About = () => {

    return (
      <div className = 'About' id = "About">
        <h1 className= "ATitle">
            <Letter className = 'ATitle' value="A"/>
            <Letter className = 'ATitle' value="B"/>
            <Letter className = 'ATitle' value="O"/>
            <Letter className = 'ATitle' value="U"/>
            <Letter className = 'ATitle' value="T"/>
            </h1>

            <div className = 'bioWrapper'>

              <div className = 'portrait'>
                <img src={Portrait} alt="this is me"/>
              </div>

              <div className = 'bio'>
                <p>Thanks for visiting my website! My name is Frank Wei and I currently live in New York City. I love coding, designing, and combining the two to make awesome creations.</p>
                <br/><p>I built this site from scratch, taking design inspiration other cool sites as well as learning React along the way. When I'm not coding you can find me out taking photos, at a concert, or exploring the city.</p>
                <br/><p>In this site, you can browse through my portfolio of design, projects and photography -- I plan on constantly updating it as I learn more (currently, I'm learning Redux -- maybe I can make toggleable themes? ).Hope you enjoy!</p>
              </div>


            </div>
      </div>
    );

}

export default About;

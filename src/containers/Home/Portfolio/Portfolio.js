import React from 'react';
import PortfolioItem from './../../../components/PortfolioItem/PortfolioItem.js';
import './Portfolio.scss';
import PortfolioItems from './PortfolioItems.js';
import Letter from './../../../components/Letter/Letter.js';

const Portfolio = () => {

  return (
   <div className="Portfolio" id = "Portfolio">
      <h1 className = "PTitle">
        <Letter className = 'PTitle' value="P"/>
        <Letter className = 'PTitle' value="O"/>
        <Letter className = 'PTitle' value="R"/>
        <Letter className = 'PTitle' value="T"/>
        <Letter className = 'PTitle' value="F"/>
        <Letter className = 'PTitle' value="O"/>
        <Letter className = 'PTitle' value="L"/>
        <Letter className = 'PTitle' value="I"/>
        <Letter className = 'PTitle' value="O"/>
      </h1>
     <div className="ContentGrid">
     {PortfolioItems.map((item, i) => (
           <PortfolioItem render={item.render} key={i} />
         ))}
     </div>


   </div>
 );

}
export default Portfolio;

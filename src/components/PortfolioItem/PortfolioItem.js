import React from 'react';
import './PortfolioItem.scss';

const PortfolioItem = (props) => {

  if (props.render) return props.render;
  else
    return (
      <div
        className="PortfolioItem"
      >
        <div className="PortfolioItem__title">Badass</div>

        <div className="PortfolioItem__desc">
          My description blah blah blah
        </div>
        <div className="PortfolioItem__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />

        </div>
        <div className="PortfolioItem__links">
          <div><a src="#">More</a></div>
          <div><a src="#">Github</a></div>
        </div>
      </div>
    );
};

export default PortfolioItem;

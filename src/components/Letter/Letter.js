import React from 'react';
import './Letter.scss';

const Letter = (props) => {

  let colors = ['#112F41','#068587','#4FB99F','#F2B134','#ED553B']
  let style = {
    color: colors[Math.floor(Math.random() * 5)]
  }

  return(

  <div
  id="Letter"
  style = {style}
  >
  {props.value}
  </div>
)
}

export default Letter;

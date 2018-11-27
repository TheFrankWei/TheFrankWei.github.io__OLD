import React from 'react';
import './Icon.scss';

const Icon = (props) => {
return(
  <a className='Icon' id = {props.id} href= {props.href} target="_blank" rel="noopener noreferrer" onClick ={props.onClick}><img src = {props.src}  alt = {props.alt}/></a>
)

}
export default Icon;

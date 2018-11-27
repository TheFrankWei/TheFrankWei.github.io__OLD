import React, {Component} from 'react';
import './Nav.scss';
import { HashLink as Link } from 'react-router-hash-link';
import UpIcon from './../../images/scroll_up_icon.svg';
import Icon from './../Icon/Icon.js'


class Nav extends Component{

  render(){
    const scrollToTop= () => {
      window.scrollTo({top:0, behavior:'smooth'});
  };
  return(
    <div className = 'Nav' id = 'Nav'>
    <div id = "Navbar">
    <ul>
      <li><Link smooth to='/#Contact'>Contact</Link></li>
      <li><Link smooth to='/#Portfolio'>Portfolio</Link></li>
      <li><Link smooth to='/#About'>About</Link></li>
      <li><Link smooth to='/#Welcome'>Home</Link></li>
    </ul>
    </div>

    <div className = 'toTopWrapper'>
    <Icon
      id = 'toTop'
      onClick={scrollToTop}
      src={UpIcon}
      alt='scroll up!'/>
    </div>

    </div>

  );
}
}
export default Nav;

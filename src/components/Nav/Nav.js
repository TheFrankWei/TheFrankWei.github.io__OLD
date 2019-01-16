import React, {Component} from 'react';
import './Nav.scss';
import { HashLink as Link } from 'react-router-hash-link';
import UpIcon from './../../images/scroll_up_icon.svg';
import Icon from './../Icon/Icon.js'


class Nav extends Component{
  constructor(props) {
   super(props);
   this.handleScroll = this.handleScroll.bind(this);
   this.state = {
     showScroll: false
   };

 }

  handleScroll() {
    const boundingRect = ((document || {}).documentElement || {}).getBoundingClientRect;
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100){
        this.setState({ showScroll: true });
      } else {
        this.setState({ showScroll: false });
      }
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    const scrollToTop= () => {
      window.scrollTo({top:0, behavior:'smooth'});
  };

  const hideArrow = this.state.showScroll ? '' : 'hide';
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

    <div className = {`toTopWrapper${hideArrow}`}>

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

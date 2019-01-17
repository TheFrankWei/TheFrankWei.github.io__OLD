import React, {Component} from 'react';
import './Letter.scss';

class Letter extends Component{
  constructor(props){
    super(props);
    this.state = {
      hovered : false
    }
    this.animDone = this.animDone.bind(this)
  }

  mouseOver(){
    this.setState({hovered: true})
  }

  // mouseOut(e){
  //   this.setState({hovered: false})
  // }
  animDone(){
    this.setState({hovered: false})
  }

  componentDidMount () {
    const elm = this.refs.Letter
  
    elm.addEventListener('animationend', this.animDone)
  }

  componentWillUnmount () {
    const elm = this.refs.Letter
    elm.removeEventListener('animationend', this.animDone)
  }

  render(){
  let colors = ['#112F41','#068587','#4FB99F','#F2B134','#ED553B']
  let style = {
    color: colors[Math.floor(Math.random() * 5)]
  }

  const hoverLetter = this.state.hovered ? 'hovered' : '' ;

  return(

  <div
  ref = 'Letter'
  id="Letter"
  style = {style}
  onMouseEnter={this.mouseOver.bind(this)}
  className={`letter${hoverLetter}`}
  >
  {this.props.value}
  </div>
)
}
}

export default Letter;

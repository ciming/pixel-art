
import {Component} from 'react'

class PixelItem extends Component{
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const domStyle = {
      color: 'white',
      backgroundColor: this.props.color || 'rgb(49, 49, 49)'
    }
    return (
      <div 
        className="pixel-canvas__item"  
        style={domStyle}
        onMouseDown={() => {this.props.onFill()}}
        onMouseEnter={this.handleMouseEnter}
        >
      </div>
    )
  }
  // 鼠标移入事件
  handleMouseEnter(evt) {

  }
}


export default PixelItem
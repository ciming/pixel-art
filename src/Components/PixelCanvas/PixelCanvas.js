import {Component} from 'react'
import {connect} from 'react-redux';
// import PixelItem from './PixelItem'
import {drawPixel} from '@store/PixelCanvas'

@connect(
  state => ({
    rowLength: state.PixelCanvas.rowLength,
    colLength: state.PixelCanvas.colLength,
    canvas: state.PixelCanvas.canvas,
    colorList: state.colorList,
    currentColorIndex: state.currentColorIndex
  })
)
class PixelCanvas extends Component{
  constructor() {
    super()
    this.isMouseDown = false
    this.fillColor = this.fillColor.bind(this)
  }
  render() {
    const domStyle = {
      gridTemplateColumns: `repeat(${this.props.colLength}, 1fr)`
    }
    return (
      <div className="pixel-canvas" style={domStyle}>
        {
          this.props.canvas.map((row, yIndex) => {
            return row.map((color, xIndex)=> {
              return (
                <div 
                  className="pixel-canvas__item" 
                  key={`${xIndex}-${yIndex}`}  
                  style={{backgroundColor: color || 'rgb(49, 49, 49)'}}
                  onMouseDown={() => {this.onMouseDown(xIndex, yIndex)}}
                  onMouseEnter={() => {this.onMouseEnter(xIndex, yIndex)}}
                  onMouseUp={() => {this.onMouseUp()}}
                  >
                </div>
              )
            })
          })
        }
      </div>
    )
  }
  // 鼠标点击事件
  onMouseDown(x, y) {
    this.isMouseDown = true
    this.fillColor(x, y)
  }
  // 鼠标移入事件
  onMouseEnter(x, y) {
    if(this.isMouseDown) {
      this.fillColor(x, y)
    }
  }
  // 鼠标松开事件
  onMouseUp(x, y) {
    this.isMouseDown = false
  }
  onMouseUp
  // 填充颜色
  fillColor(x, y) {
    const color = this.props.colorList[this.props.currentColorIndex] 
    this.props.dispatch(drawPixel(color, x,y))
  }
}

export default PixelCanvas
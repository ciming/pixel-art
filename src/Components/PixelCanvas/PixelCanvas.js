import {Component} from 'react'
import {connect} from 'react-redux';
// import PixelItem from './PixelItem'
import {setColor, fillColor} from '@store/PixelCanvas'

@connect(
  state => ({
    toolStatus: state.toolStatus,
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
    const cursorDict = {
      fill: 'crosshair',
      eyedropper: 'copy',
      eraser: 'context-menu',
      move: 'move'
    }
    const domStyle = {
      gridTemplateColumns: `repeat(${this.props.colLength}, 1fr)`,
      cursor: cursorDict[this.props.toolStatus] || 'crosshair'
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
    if(this.props.toolStatus === 'fill') {
      this.fillColor(x, y)
    } else if(this.props.toolStatus === 'eraser') {
      this.clearColor(x, y)
    } else {
      this.setColor(x, y)
    }
    
  }
  // 鼠标移入事件
  onMouseEnter(x, y) {
    if(!this.isMouseDown) return
    if(this.props.toolStatus === 'fill') {
      this.fillColor(x, y)
    } else if(this.props.toolStatus === 'eraser') {
      this.clearColor(x, y)
    } else {
      this.setColor(x, y)
    }
  }
  // 鼠标松开事件
  onMouseUp(x, y) {
    this.isMouseDown = false
  }
  onMouseUp
  // 设置颜色
  setColor(x, y) {
    const color = this.props.colorList[this.props.currentColorIndex] 
    this.props.dispatch(setColor(color, x,y))
  }
  // 填充颜色
  fillColor(x, y){
    const color = this.props.colorList[this.props.currentColorIndex] 
    this.props.dispatch(fillColor(color, x,y))
  }
  // 清除颜色
  clearColor(x, y) {
    this.props.dispatch(setColor(null, x,y))
  }
}

export default PixelCanvas
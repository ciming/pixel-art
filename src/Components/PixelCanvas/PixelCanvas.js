import {Component} from 'react'
import {connect} from 'react-redux';
// import PixelItem from './PixelItem'
import {initCanvas, setColor, fillColor, move, addHistory} from '@store/modules/pixelCanvas'
import {setCurrentColorIndex} from '@store/modules/currentColorIndex'
import {setCurrentToolState} from '@store/modules/toolStatus.js'
import {changeColor} from '@store/modules/colorList.js'

@connect(
  state => ({
    pixelCanvas: state.pixelCanvas.present,
    toolStatus: state.toolStatus,
    colLength: state.pixelCanvas.present.colLength,
    canvas: state.pixelCanvas.present.canvas,
    colorList: state.colorList,
    currentColorIndex: state.currentColorIndex,
    storage: state.storage
  })
)
class pixelCanvas extends Component{
  constructor(props) {
    super(props)
    this.isMouseDown = false
    this.startX = 0
    this.startY = 0
    this.fillColor = this.fillColor.bind(this)
    // 初始化历史记录
    const storage = props.storage
    if(storage.current >= 0) {
      props.dispatch(initCanvas(storage.store[storage.current]))
    }
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
      <div className="pixel-canvas" style={domStyle} onMouseLeave={() => {this.isMouseDown = false}}>
        {
          this.props.canvas.map((row, yIndex) => {
            return row.map((color, xIndex)=> {
              return (
                <div 
                  className="pixel-canvas__item" 
                  key={`${xIndex}-${yIndex}`}  
                  style={{backgroundColor: color || 'rgb(49, 49, 49)'}}
                  onMouseDown={() => {this.onMouseDown(xIndex, yIndex, color)}}
                  onMouseEnter={() => {this.onMouseEnter(xIndex, yIndex, color)}}
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
  onMouseDown(x, y, color) {
    this.isMouseDown = true
    if(this.props.toolStatus === 'fill') {
      this.props.dispatch(addHistory(this.props.pixelCanvas))
      this.fillColor(x, y)
    } else if(this.props.toolStatus === 'eraser') {
      this.props.dispatch(addHistory(this.props.pixelCanvas))
      this.clearColor(x, y)
    } else if(this.props.toolStatus === 'eyedropper' & color !== '') {
      this.absorbColor(color)
    } else if(this.props.toolStatus === 'move') {
      this.props.dispatch(addHistory(this.props.pixelCanvas))
      this.startX = x
      this.startY = y
    } else {
      this.props.dispatch(addHistory(this.props.pixelCanvas))
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
    } else if(this.props.toolStatus === 'move') {
      this.move(x, y)
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
  // 吸取颜色
  absorbColor(color) {
    const colorIndex = this.props.colorList.findIndex(item => item === color)
    if(colorIndex >= 0) {
      this.props.dispatch(setCurrentColorIndex(colorIndex))
    } else {
      this.props.dispatch(setCurrentColorIndex(this.props.colorList.length - 1))
      this.props.dispatch(changeColor(this.props.colorList.length - 1, color))
    }
    this.props.dispatch(setCurrentToolState(''))
    
  }
  /**
   * 移动像素画
   * @time 2020年11月27日 06:57:02 星期五
   * @param {Number} x - 鼠标经过的X轴
   * @param {Number} y - 鼠标经过的Y轴
   */
  move(x, y) {
    const offsetX = x - this.startX
    const OffsetY = y - this.startY
    console.log(offsetX, OffsetY);
    this.props.dispatch(move(offsetX, OffsetY))
    this.startX = x
    this.startY = y
  }
}

export default pixelCanvas
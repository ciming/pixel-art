import {Component} from 'react'
import {connect} from 'react-redux';
import PixelItem from './PixelItem'

@connect(
  state => ({
    rowLength: state.PixelCanvas.rowLength,
    colLength: state.PixelCanvas.colLength,
    canvas: state.PixelCanvas.canvas,
  })
)
class PixelCanvas extends Component{
  
  render() {
    const domStyle = {
      gridTemplateColumns: `repeat(${this.props.colLength}, 1fr)`
    }
    return (
      <div className="pixel-canvas" style={domStyle}>
        {
          this.props.canvas.map((row, yIndex) => {
            return row.map((item, xIndex)=> {
              return (
                <PixelItem key={`${xIndex}-${yIndex}`} x={xIndex} y={yIndex} color={item}/>
              )
            })
          })
        }
      </div>
    )
  }
}

export default PixelCanvas
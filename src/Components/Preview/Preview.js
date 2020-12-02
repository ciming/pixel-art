import React, {Component} from 'react'

class Preview extends Component {
  static defaultProps = {
    baseSize: 5
  }
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef();
  }
  render() {
    const {colLength, rowLength} = this.props.data
    const baseSize = this.props.baseSize 
    return (
      <canvas ref={this.canvasRef} width={baseSize * colLength} height={baseSize * rowLength}></canvas>
    )
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const gridData = this.props.data.canvas
    const ctx = this.canvasRef.current.getContext('2d');
    const baseSize = this.props.baseSize 
    gridData.forEach((rows, yIndex) => {
      rows.forEach((color, xIndex) => {
        if(color) {
          ctx.fillStyle = color
          ctx.fillRect(xIndex * baseSize,yIndex * baseSize, baseSize, baseSize);
        }
      });
    });
  }
}

export default Preview
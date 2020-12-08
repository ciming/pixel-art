import React, {Component} from 'react'

class Preview extends Component {
  static defaultProps = {
    size: 5
  }
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef();
  }
  render() {
    const {colLength, rowLength} = this.props.data
    const size = this.props.size 
    return (
      <canvas ref={this.canvasRef} width={size * colLength} height={size * rowLength}></canvas>
    )
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const gridData = this.props.data.canvas
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const size = this.props.size 
    gridData.forEach((rows, yIndex) => {
      rows.forEach((color, xIndex) => {
        if(color) {
          ctx.fillStyle = color
          ctx.fillRect(xIndex * size,yIndex * size, size, size);
          
        }
      });
    });
  }
  getsAsPNG() {
    return this.canvasRef.current.toDataURL("image/png");
  }
}

export default Preview
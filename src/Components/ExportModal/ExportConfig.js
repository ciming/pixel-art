import {Component} from 'react'
import {connect} from 'react-redux';

@connect(
  state => ({
    pixelCanvas: state.pixelCanvas.present,
  })
)
class ExportConfig extends Component{

  render() {
    const {canvas, rowLength, colLength} = this.props.pixelCanvas
    const restult = {
      rowLength,
      colLength,
      grid: [].concat(...canvas)
    }
    return (
      <div className="export-config mt20">
        {JSON.stringify(restult)}
      </div>
    )
  }
}

export default ExportConfig 
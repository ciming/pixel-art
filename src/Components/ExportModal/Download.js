import React, {Component} from 'react'
import Preview from '@components/Preview/Preview'
import {connect} from 'react-redux';

@connect(
  state => ({
    pixelCanvas: state.pixelCanvas.present,
    pixelSize: state.pixelSize
  })
)
class Download extends Component{
  constructor(props) {
    super(props)
    this.previewRef = React.createRef();
  }
  render() {
    return (
      <div className="download mt20">
        <div className="download__preview">
          <Preview data={this.props.pixelCanvas} size={this.props.pixelSize} ref={this.previewRef}/>
        </div>
        <div className="download__btn  mt20">
          <button className="button" onClick={() => {this.downLoad()}}>
            下载
          </button>
        </div>
      </div>
    )
  }
  downLoad() {
    const url =  this.previewRef.current.getsAsPNG()
    const oA = document.createElement('a');
    oA.download = 'pixel';
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove();
  }
}

export default Download 
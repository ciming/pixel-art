import React, {Component} from 'react'
import {connect} from 'react-redux';
import Preview from '@components/Preview/Preview'

class PreviewBox extends Component{
  constructor(props) {
    super(props)
    this.previewRef = React.createRef();
  }
  render () {
    return (
      <div className="preview-box">
        <Preview data={this.props.pixelCanvas} ref={this.previewRef}/>  
      </div>
    )
  }
  componentDidUpdate(){
    this.previewRef.current.updateCanvas()
  } 
}


export default connect(state=> ({
  pixelCanvas: state.pixelCanvas.present,
}), null, null, { forwardRef: true })(PreviewBox);
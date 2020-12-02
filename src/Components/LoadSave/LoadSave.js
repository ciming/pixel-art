import React, {Component} from 'react'
import {connect} from 'react-redux';
import {save} from '@store/modules/storage'
import ImportantModal from '@components/ImportantModal/ImportantModal'

@connect(
  state => ({
    pixelCanvas: state.pixelCanvas,
    
  })
)
class LoadSave extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.modalRef = React.createRef();
  }
  render() {
    return(
      <div className="row">
        <div className="col-md-6">
          <button className="button" onClick={() => {
            this.modalRef.current.open()
          }}>加载</button>
          <ImportantModal ref={this.modalRef}>
          </ImportantModal>
        </div>
        <div className="col-md-6">
          <button className="button" onClick={()=> {this.save()}}>保存</button>
        </div>
      </div>
    )
  }
  // 保存
  save() {
    this.props.dispatch(save(this.props.pixelCanvas.present))
  }
}

export default LoadSave
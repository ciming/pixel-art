import {Component} from 'react'
import {connect} from 'react-redux';
import {save} from '@store/modules/storage'

@connect(
  state => ({
    pixelCanvas: state.pixelCanvas
  })
)
class LoadSave extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-6">
          <button className="button" >加载</button>
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
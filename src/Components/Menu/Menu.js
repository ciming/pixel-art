import {Component} from 'react'
import store from '@store/store';
import {newCanvas, undo, redo} from '@store/modules/pixelCanvas'
import {save} from '@store/modules/storage'
import {connect} from 'react-redux';

@connect(
  state => ({
    pixelCanvas: state.pixelCanvas
  })
)
class Menu extends Component {
  render() {
    const {past, future} = this.props.pixelCanvas
    return (
      <div className="row">
        <div className="col-md-12">
          <button className="button" onClick={()=> {this.newCancal()}}>新建</button>
        </div>
        <div className="col-md-6">
          <button className="button" >加载</button>
        </div>
        <div className="col-md-6">
          <button className="button" onClick={()=> {this.save()}}>保存</button>
        </div>
        <div className="col-md-6">
          <button className="button" disabled={past.length === 0} onClick={()=> this.undo()}>重做</button>
        </div>
        <div className="col-md-6">
          <button className="button" disabled={future.length === 0} onClick={()=> this.redo()}>撤销</button>
        </div>
      </div>
    )
  }
  /**
   * 新建画布
   * @time 2020年11月29日 09:57:22 星期天
   */
  newCancal() {
    store.dispatch(newCanvas())
  }
 
  // 保存
  save() {
    this.props.dispatch(save(this.props.pixelCanvas.present))
  }
}

export default Menu
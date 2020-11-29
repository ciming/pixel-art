import {Component} from 'react'
import {connect} from 'react-redux';
import {newCanvas} from '@store/PixelCanvas'

@connect()
class Menu extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <button className="button" onClick={()=> {this.newCancal()}}>新建</button>
        </div>
        <div className="col-md-6">
          <button className="button">加载</button>
        </div>
        <div className="col-md-6">
          <button className="button">保存</button>
        </div>
      </div>
    )
  }
  /**
   * 新建画布
   * @time 2020年11月29日 09:57:22 星期天
   */
  newCancal() {
    this.props.dispatch(newCanvas())
  }
}

export default Menu
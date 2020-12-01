import {Component} from 'react'
import store from '@store/store';
import {newCanvas} from '@store/modules/pixelCanvas'

class NewProject extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-12">
          <button className="button" onClick={()=> {this.newCancal()}}>新建</button>
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
}

export default NewProject
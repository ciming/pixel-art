import {Component} from 'react'
import {connect} from 'react-redux';
import Icon from '@components/Icon/Icon'
import Preview from '@components/Preview/Preview'
import Store from '@store/store'
import {initCanvas} from '@store/modules/pixelCanvas'
import {deleteRecord} from '@store/modules/storage'
@connect(state=> ({
  storage: state.storage
}))
class ImportLocal extends Component{
  render() {
    return (
      <div className="import-pixel">
          {
            this.props.storage.store.map((item, index) => {
              return (
                <div className="import-pixel__item"  key={index} onClick={() => {this.select(item)}}>
                  <Preview data={item} />
                  <div className="import-pixel__del" onClick={(e) => {
                    e.stopPropagation()
                    this.delete(index)
                  }}>
                    <Icon icon="remove"/>
                  </div>
                </div>
              )
            })
          }
          
        </div>
    )
  }
  /**
   * 选择保存的像素画
   * @author 徐步星 <869313979@qq.com>
   * @time 2020年12月02日 09:22:14 星期三
   * @param {Object} data - 参数
   */
  select(data) {
    Store.dispatch(initCanvas(data))
    this.props.onClose()
  }
  // 删除记录
  delete(index) {
    Store.dispatch(deleteRecord(index))
  }
}

export default ImportLocal
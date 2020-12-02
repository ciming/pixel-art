import {Component} from 'react'
import {connect} from 'react-redux';
import Modal from 'react-modal';
import Preview from '@components/Preview/Preview'
import Store from '@store/store'
import {initCanvas} from '@store/modules/pixelCanvas'
import {deleteRecord} from '@store/modules/storage'
import Icon from '@components/Icon/Icon'
class ImportantModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    Modal.setAppElement('#root')
    return(
      <Modal
          isOpen={this.state.visible}
          contentLabel="加载"
        >
        <button className="ReactModal__close" onClick={() => {this.close()}}>X</button>

        <div className="ReactModal__title">
          <span>加载</span>
        </div>
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
      </Modal>
    )
  }
  // 打开弹窗
  open() {
    this.setState({
      visible: true
    })
  }
  close() {
    this.setState({
      visible: false
    })
  }
  /**
   * 选择保存的像素画
   * @author 徐步星 <869313979@qq.com>
   * @time 2020年12月02日 09:22:14 星期三
   * @param {Object} data - 参数
   */
  select(data) {
    Store.dispatch(initCanvas(data))
    this.close()
  }
  // 删除记录
  delete(index) {
    Store.dispatch(deleteRecord(index))
  }
}

export default connect(state=> ({
  storage: state.storage
}), null, null, { forwardRef: true })(ImportantModal);
import {Component} from 'react'
import Modal from 'react-modal';

class ExportModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    Modal.setAppElement('#root')
  }
  render() {
    return (
      <Modal
          isOpen={this.state.visible}
          contentLabel="导出"
        >
        <button className="ReactModal__close" onClick={() => {this.close()}}>X</button>

        <div className="ReactModal__title">
          <span>快捷键</span>
        </div>
        
        <div class="hot-key">
          <h2 class="hot-key__title">历史</h2>
          <div class="hot-key__list">
            <div class="hot-key__item">
              <span>
                撤销
              </span>
              <span>
                <kbd>Control</kbd>
                <kbd>z</kbd>
              </span>
            </div>
            <div class="hot-key__item">
              <span>
                重做
              </span>
              <span>
                <kbd>Control</kbd>
                <kbd>y</kbd>
              </span>
            </div>
          </div>
          <h2 class="hot-key__title">工具</h2>
          <div class="hot-key__list">
            <div class="hot-key__item">
              <span>
                填充
              </span>
              <span>
                <kbd>f</kbd>
              </span>
            </div>
            <div class="hot-key__item">
              <span>
                吸管
              </span>
              <span>
                <kbd>e</kbd>
              </span>
            </div>
            <div class="hot-key__item">
              <span>
                颜色选择
              </span>
              <span>
                <kbd>p</kbd>
              </span>
            </div>
            <div class="hot-key__item">
              <span>
                橡皮擦
              </span>
              <span>
                <kbd>D</kbd>
              </span>
            </div>
            <div class="hot-key__item">
              <span>
                移动
              </span>
              <span>
                <kbd>m</kbd>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    )
    
  }
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
}
export default ExportModal
import {Component} from 'react'
import Modal from 'react-modal';
import classnames from 'classnames'
import ImportLocal from './ImportLocal'
import ImportConfig from './ImportConfig'
class ImportantModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      tab: 'local'
    }
    Modal.setAppElement('#root')
  }
  render() {
    const currentTab = this.state.tab
    const itemClass = (code) => {
      return classnames({
        'tab__item': true,
        'is-active':currentTab === code
      })
    }
    return(
      <Modal
          isOpen={this.state.visible}
          contentLabel="加载"
        >
        <button className="ReactModal__close" onClick={() => {this.close()}}>X</button>

        <div className="ReactModal__title">
          <span>加载</span>
        </div>
        <div className="tab">
        <div className="tab__list">
          <div className={itemClass('local')} onClick={() => {this.setState({tab: 'local'})}}>
            本地
          </div>
          <div className={itemClass('config')} onClick={() => {this.setState({tab: 'config'})}}>
            导入配置
          </div>
        </div>
        <div className="tab__content">
            {currentTab === 'local' ? <ImportLocal onClose={()=> {this.close()}}/> : <ImportConfig onClose={()=> {this.close()}}/>}
          </div>
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
  
}

export default ImportantModal
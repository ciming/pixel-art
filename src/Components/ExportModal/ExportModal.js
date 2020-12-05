import {Component} from 'react'
import Modal from 'react-modal';
import classnames from 'classnames'
import Download from './Download'
import ExportConfig from './ExportConfig'

class ExportModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      tab: 'download'
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
    return (
      <Modal
          isOpen={this.state.visible}
          contentLabel="导出"
        >
        <button className="ReactModal__close" onClick={() => {this.close()}}>X</button>

        <div className="ReactModal__title">
          <span>导出</span>
        </div>
        <div className="tab">
          <div className="tab__list">
            <div className={itemClass('download')} onClick={() => {this.setState({tab: 'download'})}}>
              下载
            </div>
            <div className={itemClass('config')} onClick={() => {this.setState({tab: 'config'})}}>
              导出配置
            </div>
          </div>
          <div className="tab__content">
            {currentTab === 'download' ? <Download/> : <ExportConfig/>}
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
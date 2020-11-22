import {Component, createRef} from 'react'
import {connect} from 'react-redux';
import ColorPicker from '@components/ColorPicker/ColorPicker'
import classnames from 'classnames'
import {setCurrentToolState} from '@store/toolStatus.js'

@connect(
  state => ({
    toolStatus: state.toolStatus
  })
)
class ToolPaletee extends Component {
  constructor() {
    super();
    this.myRef = createRef();
    this.state = {};
  }
  render() {
    const itemClass = (code) => {
      return classnames({
        'app-tools__item': true,
        'is-active': this.props.toolStatus === code
      })
    }
    return (
      <div className="app-tools" ref={this.myRef}>
        <div className={itemClass('move')} onClick={() => {this.changeToolStatus('move')}}>
        </div>
        <div className={itemClass('move')} onClick={() => {this.changeToolStatus('move')}}>
        </div>
        <div className={itemClass('color-picker')}  onClick={() => {this.changeToolStatus('color-picker')}}>
          <ColorPicker/>
        </div>
      </div>
    )
  }
  // 更改工具选中状态
  changeToolStatus(code) {
    document.addEventListener('click', this.handleOutsideClick, false);
    if (this.props.toolStatus) {
      if(this.props.toolStatus === code) {
        this.props.dispatch(setCurrentToolState(null))    
      }
      
    } 
    this.props.dispatch(setCurrentToolState(code))
  }
  // 点击外部事件
  handleOutsideClick = e => {
    const node = this.myRef.current;
    if(!node.contains(e.target)){
      this.props.dispatch(setCurrentToolState(null))
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }
}

export default ToolPaletee
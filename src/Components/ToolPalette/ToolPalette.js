import {Component, createRef} from 'react'
import {connect} from 'react-redux';
import ColorPicker from './ColorPicker'
import classnames from 'classnames'
import Icon from '@components/Icon/Icon'
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
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
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
      <div className="app-tools" >
        <div className={itemClass('fill')} onClick={() => {this.changeToolStatus('fill')}}>
          <Icon icon="fill"/>
        </div>
        <div className={itemClass('eyedropper')} onClick={() => {this.changeToolStatus('eyedropper')}}>
          <Icon icon="eyedropper"/>
        </div>
        <div className={itemClass('color-picker')} ref={this.myRef}  onClick={() => {this.changeToolStatus('color-picker')}}>
          <ColorPicker/>
        </div>
        <div className={itemClass('eraser')} onClick={() => {this.changeToolStatus('eraser')}}>
          <Icon icon="eraser"/>
        </div>
        <div className={itemClass('move')} onClick={() => {this.changeToolStatus('move')}}>
          <Icon icon="move"/>
        </div>
      </div>
    )
  }
  // 更改工具选中状态
  changeToolStatus(code) {
    if(this.props.toolStatus === code) {
      this.props.dispatch(setCurrentToolState(null))
      if(code === 'color-picker') {
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    } else {
      this.props.dispatch(setCurrentToolState(code))
      if(code === 'color-picker') {
        document.addEventListener("click", this.handleOutsideClick, false);
      }
    } 
  }
  handleOutsideClick (e){
    if (!this.myRef.current.contains(e.target)) this.changeToolStatus('color-picker');
  }
}

export default ToolPaletee
import {Component} from 'react'
import {connect} from 'react-redux';
import Store from '@store/store'
import {changeSize} from '@store/modules/pixelSize.js'

@connect(
  state => ({
    pixelSize: state.pixelSize
  })
)
class PixelSize extends Component{
  render() {
    return (
      <div className="input">
        <label className="input__label">
          像素尺寸
        </label>
        <input value={this.props.pixelSize} onChange={this.changeHandle.bind(this)} className="input__control" />
      </div>
    )
  }
  changeHandle(evt) {
    const reg=/(^[1-9]{1}[0-9]*$)|(^[0-9]*\.[0-9]{2}$)/
    if(!reg.test(evt.target.value)){
      evt.target.value = this.props.pixelSize
      return false
    }
    Store.dispatch(changeSize(evt.target.value))
  }
}

export default PixelSize
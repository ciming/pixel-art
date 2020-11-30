import {Component} from 'react'
import Icon from '@components/Icon/Icon'
import {connect} from 'react-redux';
import { SketchPicker } from 'react-color';
import classnames from 'classnames'
import {setCurrentColorIndex} from '@store/modules/currentColorIndex'
import {changeColor} from '@store/modules/colorList.js'
@connect(
  state => ({
    toolStatus: state.toolStatus,
    colorList: state.colorList,
    currentColorIndex: state.currentColorIndex
  })
)
class ColorPicker extends Component{
  constructor() {
    super()
    this.state = {
      color: '#fff'
    }
    this.colorChange = this.colorChange.bind(this)
  }
  render() {
    const className =  classnames({
      'color-picker__plane': true,
      'd-none': this.props.toolStatus !== 'color-picker'
    })
    return (
      <div className="color-picker">
        <Icon icon="pen"/>
        <div onClick={(e)=>{e.stopPropagation()}} >
        <SketchPicker 
          className={className} 
          color={this.props.colorList[this.props.currentColorIndex === null ? -1 : this.props.currentColorIndex]} 
          onChangeComplete={this.colorChange}
          ></SketchPicker>
        </div>
      </div>
    )
  }
  colorChange(color) {
    if(this.props.currentColorIndex === null) {
      this.props.dispatch(setCurrentColorIndex(this.props.colorList.length - 1))
    }
    this.props.dispatch(changeColor(this.props.currentColorIndex, `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b},${color.rgb.a})`))
  }
}
export default ColorPicker
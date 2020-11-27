import {Component} from 'react'
import Icon from '@components/Icon/Icon'
import NumberInput from './NumberInput'
import {connect} from 'react-redux';
import {changeColSize, changeRowSize} from '@store/PixelCanvas'

@connect(
  state => ({
    rowLength: state.PixelCanvas.rowLength,
    colLength: state.PixelCanvas.colLength,
  })
)
class Dimensions extends Component {
  constructor(){
    super()
    this.colChange = this.colChange.bind(this)
    this.rowChange = this.rowChange.bind(this)
  }
  render(h) {
    return (
      <div className="dimensions">
        <div className="dimensions__item">
          <div className="dimensions__icon">
            <Icon icon="left-right"/>
          </div>
          <div className="dimensions__input">
            <NumberInput value={this.props.colLength} onChange={this.colChange}/>
          </div>
        </div>
        <div className="dimensions__item">
          <div className="dimensions__icon">
          <Icon icon="up-down"/>
          </div>
          <div className="dimensions__input">
          <NumberInput value={this.props.rowLength}  onChange={this.rowChange}/>
          </div>
        </div>
      </div>
    )
  }
  /**
   * 列变化
   * @time 2020年11月28日 06:52:44 星期六
   * @param {Strignt} type - 操作类型
   */
  colChange(type) {
    console.log(type);
    this.props.dispatch(changeColSize(type))
  }
  /**
   * 行变化
   * @time 2020年11月28日 06:52:44 星期六
   * @param {Strignt} type - 操作类型
   */
  rowChange(type) {
    this.props.dispatch(changeRowSize(type))
  }
}

export default Dimensions
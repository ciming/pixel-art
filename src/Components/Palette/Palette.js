import {Component} from 'react'
import {connect} from 'react-redux';
import PaletteItem from './PaletteItem'
import {setCurrentColorIndex} from '@store/modules/currentColorIndex'

@connect(
  state => ({
    colorList: state.colorList,
    currentColorIndex: state.currentColorIndex
  })
)
class Platette extends Component {
  render() {
    return (
      <div className="palette">
        {
          this.props.colorList.map((color, index) => {
            return (
              <PaletteItem 
                key={index} 
                isSelect={this.props.currentColorIndex === index} 
                onClick={() => {
                  this.props.dispatch(setCurrentColorIndex(index))
                }}
                color={color}>
              </PaletteItem>
            )
          })
        }
      </div>
    )
  }
}

export default Platette;
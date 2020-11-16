import {Component} from 'react'
import colors from './colors'
import PaletteItem from './PaletteItem'
class Platette extends Component {
  constructor(props) {
    super(props)
    this.states = {

    }
  }
  render() {
    return (
      <div className="palette">
        {
          colors.map((color, index) => {
            return (
              <PaletteItem key={index} color={color}/>
            )
          })
        }
      </div>
    )
  }
}

export default Platette;
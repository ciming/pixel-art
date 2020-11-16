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
      <div class="palette">
        {
          colors.map(color => {
            return (
              <PaletteItem color={color}></PaletteItem>
            )
          })
        }
      </div>
    )
  }
}

export default Platette;
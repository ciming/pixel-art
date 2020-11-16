import {Component} from 'react'

class PaletteItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.props)
    const styles = {
      backgroundColor: this.props.color
    }
    return (
      
      <button class="palette__item" style={styles}>
      </button>
    )
  }
}

export default PaletteItem
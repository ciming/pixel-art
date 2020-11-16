import {Component} from 'react'
import { useGlobal }from '@store'
class PaletteItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, actions] = useGlobal(['currentColor']);
    console.log(state);
    const styles = {
      backgroundColor: this.props.color
    }
    return (
      
      <button className="palette__item" style={styles}>
      </button>
    )
  }
}

export default PaletteItem
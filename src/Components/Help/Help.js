import React, {Component} from 'react'
import HelpModal from './HelpModal'

class Help extends Component{
  constructor(props) {
    super(props)
    this.state = {
    }
    this.modalRef = React.createRef();
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <button className="button" onClick={() => {
            this.modalRef.current.open()
          }}>快捷键</button>
          <HelpModal ref={this.modalRef}/>
        </div>
      </div>
    )
  }
}

export default Help 

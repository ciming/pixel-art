import React, {Component} from 'react'
import ExportModal from '@components/ExportModal/ExportModal'

class Export extends Component{
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
          }}>导出</button>
          <ExportModal ref={this.modalRef}/>
        </div>
      </div>
    )
  }
}
export default Export
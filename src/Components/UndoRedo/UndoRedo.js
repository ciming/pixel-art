import {Component} from 'react'
import {connect} from 'react-redux';
import {undo, redo} from '@store/modules/pixelCanvas'
import hotkeys from 'hotkeys-js';
@connect(
  state => ({
    pixelCanvas: state.pixelCanvas
  })
)
class UndoRedo extends Component {
  constructor(props) {
    console.log(111);
    super(props)
    
  }
  componentDidMount() {
    // 撤销
    hotkeys('ctrl+z', (e, handler) => {
      this.undo()
    })
    hotkeys('ctrl+y', (e, handler) => {
      this.redo()
    })
  }
  render() {
    const {past, future} = this.props.pixelCanvas
    return(
      <div className="row">
        <div className="col-md-6 col-xs-6">
          <button className="button" disabled={past.length === 0} onClick={()=> this.undo()}>撤销</button>
        </div>
        <div className="col-md-6 col-xs-6">
          <button className="button" disabled={future.length === 0} onClick={()=> this.redo()}>重做</button>
        </div>
      </div>
    )
  }
   /**
   * 撤销
   * @time 2020年11月30日 09:24:14 星期一
   */
  undo() {
    const {past} = this.props.pixelCanvas
    if(past.length === 0) return
    this.props.dispatch(undo())
  }
  /**
   * 重做
   * @time 2020年11月30日 09:24:14 星期一
   */
  redo() {
    const {future} = this.props.pixelCanvas
    if(future.length === 0) return
    this.props.dispatch(redo())
  }

}

export default UndoRedo
import {Component} from 'react'
import Store from '@store/store'
import {initCanvas} from '@store/modules/pixelCanvas'

class importConfig extends Component{
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  render() {
    return (
      <div className="import-config">
        <textarea 
          value={this.state.content} 
          onChange={(evt) => {this.setState({content: evt.target.value});}}
          className="import-config__input"  
          placeholder="请黏贴代码" 
          rows="10"
          ></textarea>

          <div className="import-config__btn mt20">
            <button className="button" onClick={this.renderCanvas.bind(this)}>
              确定
            </button>
          </div>
      </div>
    )
  }
  renderCanvas() {
    const content = this.state.content.trim()
    if(content === '') {
      return alert('不能为空')
    }
   
    try {
      let pixelConfig = JSON.parse(content)
      const {rowLength, colLength, grid} = pixelConfig
      const canvas = []
      while(grid.length) canvas.push(grid.splice(0,colLength));
      const result = {
        rowLength,
        colLength,
        canvas
      }
      Store.dispatch(initCanvas(result))
      this.props.onClose()
    } catch (error) {
      return alert('格式错误')
    }
  }
}

export default importConfig

import './App.css';
import Platette from '@components/Palette/Palette'
import ToolPalette from '@components/ToolPalette/ToolPalette'
function App() {
  return (
      <div className="App">
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <div className="app-module">
              <ToolPalette/>
            </div>
            <div className="app-module">
            <Platette/>
            </div>
          </div>
          <div className="col-md-7">
            wqw
          </div>
          <div className="col-md-3">
            wqw
          </div>
        </div>
      </div>
  );
}

export default App;

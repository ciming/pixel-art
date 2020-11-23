
import './App.css';
import Platette from '@components/Palette/Palette'
import ToolPalette from '@components/ToolPalette/ToolPalette'
import PixelCanvas from '@components/PixelCanvas/PixelCanvas'
function App() {
  return (
      <div className="App">
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
        <div className="row between-md">
          <div className="col-md-2">
            <div className="app-module">
              <ToolPalette/>
            </div>
            <div className="app-module">
            <Platette/>
            </div>
          </div>
          <div className="col-md-5">
            <PixelCanvas/>
          </div>
          <div className="col-md-3">
            
          </div>
        </div>
      </div>
  );
}

export default App;

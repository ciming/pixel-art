
import './App.css';
import Platette from '@components/Palette/Palette'
import ToolPalette from '@components/ToolPalette/ToolPalette'
import PixelCanvas from '@components/PixelCanvas/PixelCanvas'
import Dimensions from '@components/Dimensions/Dimensions'
import NewProject from '@components/NewProject/NewProject'
import LoadSave from '@components/LoadSave/LoadSave'
import UndoRedo from '@components/UndoRedo/UndoRedo'
import PreviewBox from '@components/PreviewBox/PreviewBox'
import Export from '@components/Export/Export'
import PixelSize from '@components/PixelSize/PixelSize'
import Help from '@components/Help/Help'

function App() {
  return (
      <div className="App">
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
        <div className="row between-md">
          <div className="col-md-2 col-xs-12">
            <div className="row">
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <NewProject/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <LoadSave/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <UndoRedo/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <Export/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <ToolPalette/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <Platette/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <Help/>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-md-5 col-xs-12">
            <PixelCanvas/>
          </div>
          <div className="col-md-2 col-xs-12">
            <div className="row end-md">
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <PreviewBox/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <Dimensions/>
                </div>
              </div>
              <div className="col-md-12 col-xs-6">
                <div className="app-module">
                  <PixelSize/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default App;

import { combineReducers } from 'redux';

import colorList from './colorList'
import currentColorIndex from './currentColorIndex'
import toolStatus from './toolStatus'
import PixelCanvas from './PixelCanvas'

export default combineReducers({
  colorList,
  currentColorIndex,
  toolStatus,
  PixelCanvas
})
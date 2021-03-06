import { combineReducers } from 'redux';

import colorList from './colorList'
import currentColorIndex from './currentColorIndex'
import toolStatus from './toolStatus'
import pixelCanvas from './pixelCanvas'
import storage from './storage'
import pixelSize from './pixelSize'

export default combineReducers({
  colorList,
  currentColorIndex,
  toolStatus,
  pixelCanvas,
  storage,
  pixelSize
})
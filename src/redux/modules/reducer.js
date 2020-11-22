import { combineReducers } from 'redux';

import colorList from './colorList'
import currentColorIndex from './currentColorIndex'
import toolStatus from './toolStatus'

export default combineReducers({
  colorList,
  currentColorIndex,
  toolStatus
})
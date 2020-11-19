import { combineReducers } from 'redux';

import colorList from './colorsList'
import currentColorIndex from './currentColorIndex'

export default combineReducers({
  colorList,
  currentColorIndex
})
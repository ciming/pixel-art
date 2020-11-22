import { createStore, createHooks } from "react-global-hook"
import colors from './colors'
const initialState = {
  currentColorIndex: 0,
  pixelData: [],
  colors
}

const actions = ({ setState, getState }) => ({
  setCurrentColor(index) {
    setState({
      currentColorIndex: index
    })
  }
})

export const Store = createStore(initialState, actions);

export const useGlobal = createHooks(Store);


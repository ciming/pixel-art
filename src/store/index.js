import { createStore, createHooks } from "react-global-hook"

const initialState = {
  currentColor: null,
  pixelData: []
}

const actions = ({ setState, getState }) => ({
  setCurrentColor(color) {
    setState({
      currentColor: color
    })
  }
})

export const Store = createStore(initialState, actions);

export const useStore = createHooks(Store);


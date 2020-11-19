const initialState = 0;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_CURRENT_COLOR_INDEX':
      return action.index
    default:
      return state
  }
}

export const setCurrentColorIndex = index => {
  return {
    type: 'SET_CURRENT_COLOR_INDEX',
    index
  }
}
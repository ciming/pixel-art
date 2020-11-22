const initialState = null

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_CURRENT_TOOL_STATE':
      return action.status
    default:
      return state
  }
}

export const setCurrentToolState = status => {
  return {
    type: 'SET_CURRENT_TOOL_STATE',
    status
  }
}
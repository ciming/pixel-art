const initialState = 3;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.value
    default:
      return state
  }
}

export const changeSize = value => {
  return {
    type: 'CHANGE_SIZE',
    value
  }
}
const initialState = {
  current: -1,
  store: []
}

export default function reducer(state = initialState, action = {}) {
  const {current, store} = state
  switch (action.type) {
    case 'SAVE':
      return {
        current: current + 1,
        store: [...store, action.data]
      }
    default:
      return state
  }
}

export const save = (data) => {
  return {
    type: 'SAVE',
    data
  }
}
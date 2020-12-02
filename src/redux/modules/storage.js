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
    case 'DELETE_RECORD': 
      return {
        current: current - 1,
        store: [
          ...store.slice(0, action.index),
          ...store.slice(action.index + 1)
        ]
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
export const deleteRecord = (index) => {
  return {
    type: 'DELETE_RECORD',
    index
  }
}
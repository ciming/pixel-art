const initialState = {
  rowLength: 20,
  colLength: 20,
  canvas: []
}
// 根据长宽高创建像素画
for(let i = 0; i < initialState.rowLength; i ++) {
  initialState.canvas.push(Array(initialState.colLength).fill(null))
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state
  }
}
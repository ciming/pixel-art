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
    case 'DRAW_PIXEL':
      return action.draw(state)
    default:
      return state
  }
}

// 
export const drawPixel = (color, x, y) => {
  return {
    type: 'DRAW_PIXEL',
    draw(state) {
      const {canvas} = state
      return {
        ...state,
        canvas: canvas.map((innerArray, yIndex) => {
          return innerArray.map((item, xIndex) => {
            if(xIndex === x & yIndex === y) {
              return color
            }
            return item
          }) 
        })
      }
    }
  }
}
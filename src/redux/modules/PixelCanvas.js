import {clone2DArray} from '@utils'

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

// 设置颜色
export const setColor = (color, x, y) => {
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

// 设置颜色
export const fillColor = (color, x, y) => {
 
  return {
    type: 'DRAW_PIXEL',
    draw(state) {
      const {canvas, rowLength, colLength} = state
      const canvasClone = clone2DArray(canvas)
      const currentColor =  canvasClone[y][x]
      console.log(canvasClone);
      const fill = (x, y) => {
        canvasClone[y][x] = color
        if((y - 1) >= 0 && canvasClone[y - 1][x] === currentColor && canvasClone[y-1][x] !== color) {
          canvasClone[y-1][x] = color
          fill(x, y - 1)
        }
        if((y + 1) < rowLength && canvasClone[y + 1][x] === currentColor && canvasClone[y+1][x] !== color) {
          canvasClone[y + 1][x] = color
          fill(x, y+1)
        }
        if((x - 1) >= 0 && canvasClone[y][x - 1] === currentColor && canvasClone[y][x - 1] !== color) {
          canvasClone[y][x - 1] = color
          fill(x - 1, y)
        }
        if((x + 1)< colLength && canvasClone[y][x + 1] === currentColor && canvasClone[y][x + 1] !== color) {
          canvasClone[y][x + 1] = color
          fill(x + 1, y)
        }
      }
      fill(x, y)
      return {
        ...state,
        canvas: canvasClone.map((innerArray, yIndex) => {
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

// 清除颜色

export const clearColor = (x, y) => {
  return {
    type: 'DRAW_PIXEL',
    draw(state) {

    }
  }
}

import {clone2DArray} from '@utils'

const initialState = {
  rowLength: 20,
  colLength: 20,
  canvas: []
}

const renderCanvas = (rowLength, colLength) => {
  const canvas = []
  for(let i = 0; i < rowLength; i ++) {
    canvas.push(Array(colLength).fill(null))
  }
  return canvas
}

initialState.canvas = renderCanvas(initialState.rowLength, initialState.colLength)
// 根据长宽高创建像素画


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


/**
 * 移动
 * @time 2020年11月27日 07:00:40 星期五
 * @param {Number} xOffset - X轴偏移量
 * @param {Number} YOffset - Y轴偏移量
 */

export const move = (offsetX, offsetY) => {
  return {
    type: 'DRAW_PIXEL',
    draw(state) {
      const {canvas} = state
      const canvasClone = clone2DArray(canvas)
      if(offsetX > 0 ) {
        for(let i = 0; i < canvasClone.length; i++) {
          canvasClone[i].splice(0, 0, canvasClone[i].pop())
        }
      }
      if(offsetX < 0 ) {
        for(let i = 0; i < canvasClone.length; i++) {
          canvasClone[i].push(canvasClone[i].shift())
        }
      }
      if(offsetY > 0){
        canvasClone.splice(0, 0, canvasClone.pop())
      }
      if(offsetY < 0){
        canvasClone.push(canvasClone.shift())
      }
      return {
        ...state,
        canvas: canvasClone
      }
    }
  }
}

/**
 * 更改列尺寸
 * @author 徐步星 <869313979@qq.com>
 * @time 2020年11月28日 06:57:11 星期六
 * @param {*} param - 任意类型参数
 */
export const changeColSize = (type) => {
  return {
    type: 'DRAW_PIXEL',
    draw(state) {
      let {canvas, colLength} = state
      const canvasClone = clone2DArray(canvas)
      if(type === 'add') {
        colLength += 1
        for (let i = 0; i < canvasClone.length; i++) {
          const innerArray = canvasClone[i];
          innerArray.push(null)
        }
      } else if(type === 'remove') {
        colLength -= 1
        for (let i = 0; i < canvasClone.length; i++) {
          const innerArray = canvasClone[i];
          innerArray.pop()
        }
       
      }
      return {
        ...state,
        colLength,
        canvas: canvasClone
      }
    }
  }
}
/**
 * 更改行尺寸
 * @author 徐步星 <869313979@qq.com>
 * @time 2020年11月28日 06:57:11 星期六
 * @param {*} param - 任意类型参数
 */
export const changeRowSize = (type) => {
  return {
    type: 'DRAW_PIXEL',
    draw(state) {
      let {canvas, colLength, rowLength} = state
      const canvasClone = clone2DArray(canvas)
      if(type === 'add') {
        rowLength += 1
        canvasClone.push(Array(colLength).fill(null))
      } else if(type === 'remove') {
        rowLength -= 1
        canvasClone.pop()
      }
      return {
        ...state,
        rowLength,
        canvas: canvasClone
      }
    }
  }
}

/**
 * 新建画布
 * @time 2020年11月29日 10:02:17 星期天
 */

export const newCanvas = () => {
  return {
    type: 'DRAW_PIXEL',
    draw(state) {
      let {colLength, rowLength} = state
      return {
        ...state,
        canvas: renderCanvas(rowLength, colLength)
      }
    }
  }
}
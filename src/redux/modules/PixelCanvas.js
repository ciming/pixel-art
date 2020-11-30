import {clone2DArray} from '@utils'

const initialState = {
  past: [],
  present: {
    rowLength: 20,
    colLength: 20,
    canvas: []
  },
  future: []
}

const renderCanvas = (rowLength, colLength) => {
  const canvas = []
  for(let i = 0; i < rowLength; i ++) {
    canvas.push(Array(colLength).fill(null))
  }
  return canvas
}

initialState.present.canvas = renderCanvas(initialState.present.rowLength, initialState.present.colLength)
// 根据长宽高创建像素画


export default function reducer(state = initialState, action = {}) {
  const { past, present, future } = state
  switch (action.type) {
    case 'NEW_CANVAS': 
      return {
        past: [],
        present: action.draw(present),
        future: []
      }
    case 'DRAW_PIXEL':
      return {
        ...state,
        present: action.draw(present)
      }
    case 'ADD_HISTORY':
      return {
        ...state,
        past: [...past, action.data],
        future: []
      }
    case 'UNDO':
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: JSON.parse(previous),
        future: [JSON.stringify(present), ...future]
      }
    case 'REDO':
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, JSON.stringify(present)],
        present: JSON.parse(next),
        future: newFuture
      }
    default:
      return state
  }
}

// 重绘
export const repaint = (data) => {
  return {
    type: 'REPAINT',
    data: JSON.parse(data)
  }
}

// 设置颜色
export const setColor = (color, x, y) => {
  return {
    type: 'DRAW_PIXEL',
    draw(present) {
      const {canvas} = present
      return {
        ...present,
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
    draw(present) {
      const {canvas, rowLength, colLength} = present
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
        ...present,
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
    draw(present) {
      const {canvas} = present
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
        ...present,
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
    draw(present) {
      let {canvas, colLength} = present
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
        ...present,
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
    draw(present) {
      let {canvas, colLength, rowLength} = present
      const canvasClone = clone2DArray(canvas)
      if(type === 'add') {
        rowLength += 1
        canvasClone.push(Array(colLength).fill(null))
      } else if(type === 'remove') {
        rowLength -= 1
        canvasClone.pop()
      }
      return {
        ...present,
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
    type: 'NEW_CANVAS',
    draw(present) {
      let {colLength, rowLength} = present
      return {
        ...present,
        canvas: renderCanvas(rowLength, colLength)
      }
    }
  }
}
// 添加历史
export const addHistory = (data) => {
  return {
    type: 'ADD_HISTORY',
    data: JSON.stringify(data)
  }
}

export const undo = (data) => {
  return {
    type: 'UNDO',
  }
}

export const redo = (data) => {
  return {
    type: 'REDO',
  }
}
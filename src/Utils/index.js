// 深度拷贝二位数组
export const clone2DArray = function name(obj) {
  var out = [],i = 0,len = obj.length;
  for (; i < len; i++) {
    if (obj[i] instanceof Array){
        out[i] = clone2DArray(obj[i]);
    }
    else out[i] = obj[i];
  }
  return out;
}
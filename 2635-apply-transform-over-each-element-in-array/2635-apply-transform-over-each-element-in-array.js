/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const newArray=new Array(arr.length)
  for(const i in arr){
    newArray[i]=(fn(arr[i],Number(i)))
  }
  return newArray;
};
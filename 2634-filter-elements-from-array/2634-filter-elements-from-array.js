/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  // return  arr.filter(fn)
    const result=[];
    for(const i in arr){
        if(fn(arr[i],Number(i))){
            result.push(arr[i]);
        }
    }
    return result;
};
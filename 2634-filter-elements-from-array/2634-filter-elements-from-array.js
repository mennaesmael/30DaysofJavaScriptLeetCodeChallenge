/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filtredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { 
            filtredArray.push(arr[i]); 
        }
    }
    return filtredArray;
};

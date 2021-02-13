/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let result = arr.filter(function(num){if(num >= a && num <= b) return num;})
    return result;
}

function getMinMax(str) {
 
 let result = {
  min: 0,
  max: 0,
}

let n = /,\s*/;
let strList = str.split(n).join(' ').split(' ');
let resultList = strList.filter(function(num){if(isNaN(+num) == false  ){return +num;}});

result.max = Math.max(...resultList);
result.min = Math.min(...resultList);

return result;
}

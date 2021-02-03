/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  
  if(str==''){return ('')}
		else{
  let str2 = str[0].toUpperCase() + str.slice(1);
  return str2;}
}

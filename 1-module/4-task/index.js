/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  	let loStr = str.toLowerCase() 
	if(loStr.includes("1xbet") || loStr.includes("xxx")){
		return true;
	}
	else{
		return false;
	}
}

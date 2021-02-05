/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  	let loStr = str.toLowerCase() 
	return loStr.includes("1xbet") || loStr.includes("xxx")
}

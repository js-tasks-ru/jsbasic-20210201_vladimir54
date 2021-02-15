/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
	let arr = str.split('-');
	arr = arr.map (function(word, index){if (index>0){word = word[0].toUpperCase() + word.slice(1);} return word;});
	let str_end = arr.join('');
	return str_end;
	}

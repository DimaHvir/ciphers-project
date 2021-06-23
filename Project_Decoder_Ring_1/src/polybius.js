// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
    // you can add any code you want within this function scope

    function polybius(input, encode = true) {
	// your solution code here
	let ans = ""
	const arr = [['a','b','c','d','e'],['f','g','h','(i/j)','k'],['l','m','n','o','p'],['q','r','s','t','u'],['v','w','x','y','z']] //populated 2d array
	if (encode) {
	    for (let i = 0; i < input.length; i++) {
		if (' ' == input[i]) {
		    ans += ' '
		}
		else {
		    if (input[i] == 'i' || input[i] == 'j') {ans += 42}
		    else {
			let res = arr.indexOf(arr.find(array => array.includes(input[i]))) //finds array containing letter and records the index to res
			res += arr[res].indexOf(input[i]) * 10 //uses recorded index to find index of letter within the array, multiplying by 10 to make it the first enter (as per syntax defined by problem)
			ans += res + 11 //adding 11 corrects disparity between 0-justified array and 1-justified array
		    }
		}
	    }  
	}
	else {
	    for (let i = 0; i < input.length; i++) {
		if (i == input.length - 1) return false //incorrect amount of numbers if you ever get to the last number in the string
		if (input[i] == ' ') {ans += ' '}
		else {
		    if(arr[input[i + 1] - 1] == ' ') return false //inline check
		    ans += arr[input[i + 1] - 1][input[i] - 1]
		    i++ //increment to skip over second digit if not ' '
		}
	    }
	}
	return ans
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

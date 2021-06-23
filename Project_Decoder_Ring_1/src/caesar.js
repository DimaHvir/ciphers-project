// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
	// your solution code here
	if (shift == 0 || shift > 25 || shift < -25) return false
	let str = input.toLowerCase()
	let ans = ""
	let alphabet = []
	for (let i=0;alphabet.length<26;i++) {
	    alphabet.push(String.fromCharCode(i + 97))
	}
	if (!encode) { //when decoding, reversing the order of the alphabet is equivalent to reversing the shift, without the problems with modulo
	    alphabet.reverse()
	}
	if (shift < 0) { //when shift is negative, the inverse will be equivalentto the original, which relieves modulo issues
	    alphabet.reverse()
	    shift *= -1
	}
	for (let i = 0; i < str.length;  i++) {
	    if (alphabet.includes(str[i])) {
		ans += alphabet[(alphabet.indexOf(str[i]) + shift) % 26] 
	    }
	    else ans += str[i]
	}
	return ans
    }


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

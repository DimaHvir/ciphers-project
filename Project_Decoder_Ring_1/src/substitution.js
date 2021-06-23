// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
      // your solution code here
      if (!alphabet || alphabet.replace(/(.)(?=.*\1)/g, "").length != 26 || alphabet.length != 26) return false //regular expression find and removes duplicate entries
      let alphabet2 = "abcdefghijklmnopqrstuvwxyz"
      let ans = ""
      if (!encode) { //switch the alphabet when decoding to keep consistency
	  alphabet2 = alphabet
	  alphabet = "abcdefghijklmnopqrstuvwxyz"
      }
      for(let i = 0; i < input.length; i++) {
	  if (input[i] == " ") ans += " "
	  else ans += alphabet[alphabet2.indexOf(input[i])]
      }
      return ans
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

// Write your tests here!
const expect = require("chai").expect
const polybiusModule = require("../src/polybius")

describe("polybius", () => {
    it("should properly encode", () => {
	const input = "lets get shwifty"
	const encode = true

	const expected = "13514434 225144 34322542124445"
	const actual = polybiusModule.polybius(input, encode)
	expect(actual).to.equal(expected)
    })
    it("should properly decode to (i/j)", () => {
	const input = "224344 3432254212445141"
	const encode = false

	const expected = "got shw(i/j)fted"
	const actual = polybiusModule.polybius(input, encode)
	expect(actual).to.equal(expected)
    })
})

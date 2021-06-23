// Write your tests here!
const expect = require("chai").expect
const substitutionModule = require("../src/substitution")

describe("polybius", () => {
    it("should properly encode", () => {
	const input = "heeeey wow heheeey"
	const alphabet = "abcdhijkefglmntuvwxyzopqrs"
	const encode = true

	const expected = "khhhhr ptp khkhhhr"
	const actual = substitutionModule.substitution(input, alphabet, encode)
	expect(actual).to.equal(expected)
    })
    it("should properly decode", () => {
	const input = "rnmf ogf gd ogrrhm ono hm ly dahehm qajs"
	const alphabet = "abqrstuvhijklmnocdefgpwxyz"
	const encode = false

	const expected = "dont put ur puddin pop in my raisin cake"
	const actual = substitutionModule.substitution(input, alphabet, encode)
	expect(actual).to.equal(expected)
    })
    it("should reutrn false if alphabet given doesn't have 26 characters", () => {
	const input = "ahhhhh whatever"
	const alphabet = "abqrstuvhijklmnocdefgpwxyz~"
	const encode = true

	const actual = substitutionModule.substitution(input,alphabet, encode)
	expect(actual).to.be.false
    })
    it("should return false if there are duplicate character in the alphabet", () => {
	const input = "ahhhhh whatever"
	const alphabet = "abqrstuvhijnoccccdewxyzzzz"
	const encode = true

	const actual = substitutionModule.substitution(input,alphabet, encode)
	expect(actual).to.be.false
    })
})

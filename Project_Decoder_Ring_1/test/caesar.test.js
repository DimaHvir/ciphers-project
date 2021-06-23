// Write your tests here!
const expect = require("chai").expect
const caesarModule = require("../src/caesar")

describe("caesar", () => {
    it("should properly encode", () => {
	const input = "eyyy this is the input"
	const shift = 5
	const encode = true

	const expected = "JDDD YMNX NX YMJ NSUZY".toLowerCase()
	const actual = caesarModule.caesar(input, shift, encode)
	expect(actual).to.equal(expected)
    })
    it("should properly decode", () => {
	const input = "DRSC SC DRO SXZED GYG FOBI MYYV"
	const shift = 10
	const encode = false

	const expected = "this is the input wow very cool"
	const actual = caesarModule.caesar(input, shift, encode)
	expect(actual).to.equal(expected)
    })
    it("should return false with improper shift", () => {
	const input = "who cares, right?"
	const shift = 42
	const encode = true

	const expected = false
	const actual = caesarModule.caesar(input, shift, encode)
	expect(actual).to.equal(expected)
    })
    it("should allow negative shift", () => {
	const input = "dont be so negative maaaaaan"
	const shift = -7
	const encode = true

	const expected = "WHGM UX LH GXZTMBOX FTTTTTTG".toLowerCase()
	const actual = caesarModule.caesar(input, shift, encode)
	expect(actual).to.equal(expected)
    })
})

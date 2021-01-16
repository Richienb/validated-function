"use strict"

const assertFunction = value => {
	if (typeof value !== "function") {
		throw new TypeError(`Expected a function, got ${typeof value}`)
	}
}

module.exports = (function_, check, {
	maximumTries = Infinity
} = {}) => {
	assertFunction(function_)
	assertFunction(check)

	return () => {
		let tries = 0

		while (tries < maximumTries) {
			const value = function_()
			if (check(value)) {
				return value
			}

			tries++
		}

		throw new Error(`Exceeded maximum tries of ${maximumTries}`)
	}
}

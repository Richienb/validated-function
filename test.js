const test = require("ava")
const validatedFunction = require(".")

test("main", t => {
	let invocations = 0

	const validated = validatedFunction(() => invocations++, value => value === 2)

	t.is(validated(), 2)
})

test("maximumRetries option", t => {
	let invocations = 0

	const validated = validatedFunction(() => invocations++, value => value === 2, {
		maximumTries: 1
	})

	t.throws(validated, {
		instanceOf: Error,
		message: "Exceeded maximum tries of 1"
	})
	t.is(invocations, 1)
})


declare namespace validatedFunction {
	export interface Options {
		/**
		The maximum amount of times to invoke the function.

		@default Infinity
		*/
		maximumTries?: number
	}
}

/**
Invoke a function until it's return value satisfies a check.

@param function_ The function to invoke.
@param check The function to check the return value.

@example
```
const validatedFunction = require("validated-function")

const uniqueId = validatedFunction(randomId, id => !currentIds.includes(id))

console.log(uniqueId())
```
*/
declare function validatedFunction<FunctionReturnValue>(function_: () => FunctionReturnValue, check: (value: FunctionReturnValue) => boolean, options?: validatedFunction.Options): FunctionReturnValue

export = validatedFunction

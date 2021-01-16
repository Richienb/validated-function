# validated-function

Invoke a function until it's return value satisfies a check. Useful for ensuring random IDs are unique within a database.

[![NPM Badge](https://nodei.co/npm/validated-function.png)](https://npmjs.com/package/validated-function)

## Install

```sh
npm install validated-function
```

## Usage

```js
const validatedFunction = require("validated-function")

const uniqueId = validatedFunction(randomId, id => !currentIds.includes(id))

console.log(uniqueId())
```

## API

### validateFunction(function_, check, options?)

#### function_

Type: `() => any`

The function to invoke.

#### check

Type: `(value) => boolean`

The function to check the return value.

#### options

Type: `object`

##### maximumTries

Type: `number`\
Default: `Infinity`

The maximum amount of times to invoke the function.

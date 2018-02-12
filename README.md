# USD Formatter

Lightweight number to currency formatter. Accepts any kind of string or number and formats it to a USD string.

## Installation

```
$ npm i -S usd-formatter
```

## Usage

```
const formatter = require('usd-formatter')

let currency = formatter(12345678.9)
console.log(currency)

// Logs "$12,345,678.90"
```

## Options

The following options can be passed for the second argument.

```
formatter(12345678.9, {
	prepend: '$',
})
```
/*! usd-formatter | Copyright 2017 Escalade Sports, INC | krose@escaladesports.com | Freely distributable under the MIT license. */

'use strict'

const defaults = {
	prepend: '$',	
	thousandsSize: 3,
	thousandsDelimiter: ',',
	decimalSize: 2,
	decimalDelimiter: '.'
}

module.exports = function(n, opt){
	// Get options
	if(opt){
		for(let i in defaults){
			if(!(i in opt)){
				opt[i] = defaults[i]
			}
		}
	}
	else{
		opt = defaults
	}

	// Create regexp
	let re = '\\d(?=(\\d{' + (opt.thousandsSize || 3) + '})+' + (opt.decimalSize > 0 ? '\\D' : '$') + ')'
	re = new RegExp(re, 'g')

	// Create number
	let num = n.toFixed(Math.max(0, ~~opt.decimalSize))
	num = (opt.decimalDelimiter ? num.replace('.', opt.decimalDelimiter) : num).replace(re, '$&' + (opt.thousandsDelimiter || ','))

	// Currency unit
	if(opt.prepend) num = opt.prepend + num

	return num
}
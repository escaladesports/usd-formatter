import numToUsd from 'usd-please'

export default function(unformatted, options){

	options = {
		prepend: `$`,
		...options
	}

	let price = unformatted

	if (typeof price === `string`){
		price = price.replace(/[^0-9.]/g, '')
		if(unformatted.charAt(0) === '-'){
			price = `-${price}`
		}
		price = Number(price)
	}

	price = numToUsd(price, true)
	if(options.prepend){
		price = `$${price}`
	}

	return price
}
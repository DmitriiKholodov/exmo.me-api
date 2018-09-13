'use strict'

const baseUrl = 'https://api.exmo.com/v1/' // {api_name}?{api_params}

function getData(url) {
	fetch(url)
	  .then(function(response) {
	    return response.json()
	  })
	  .then(function(data) {
	  	  return data
	  })
	  .catch(alert)
}
  

const exmo = {}

exmo.ticker = function ticker() {
	const url = baseUrl + 'ticker'
	return getData(url) 
} // example - https://api.exmo.com/v1/ticker
exmo.trades = function trades(...pairs){
	const url = baseUrl + 'trades/' + '?pair=' + pairs
	return getData(url)
} // example - https://api.exmo.com/v1/trades/?pair=BTC_USD,BTC_EUR
exmo.order_book = function order_book(limit, ...pairs){
	const url = baseUrl + 'trades/' + '?pair=' + pairs + '&limit=' + limit
	return getData(url)
} // example - https://api.exmo.com/v1/order_book/?pair=BTC_USD,BTC_EUR&limit=1000
exmo.pair_settings = function pair_settings(){
	const url = baseUrl + 'pair_settings'
	return getData(url)
} // example - https://api.exmo.com/v1/pair_settings
exmo.currency = function currency(){
	const url = baseUrl + 'currency'
	return getData(url)
} // example - https://api.exmo.com/v1/currency

let v = function a(a,b) {
	return a + b
}

export default { v };
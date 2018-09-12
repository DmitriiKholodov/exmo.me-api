'use strict'
const url = 'https://api.exmo.com/v1/trades/?pair=BTC_USD'
// const url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR'
fetch(url)
.then(function(response) {
	 alert(response.json)
    return response.json()

   })
  .then(function(data) {
    console.log(data) // iliakan
  })
  .catch(alert)

  
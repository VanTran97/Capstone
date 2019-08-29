const https = require('https')
const fs = require('fs')

const getData = () => {
  var options = {
      "method": "GET",
      "hostname": "rest.coinapi.io",
      "path": "/v1/exchangerate/BTC",
      "headers": {'X-CoinAPI-Key': '67FA93DD-C576-4CAE-9DC6-5B15559C436B'}
    }

  const request = https.request(options, (response) => {
      let data = ''

      response.on('data', (chunk) => {
          data = data + chunk.toString()
      })

      response.on('end', () => {
          const body = JSON.parse(data)
          const cryptoData = JSON.stringify(body, null, 2)
          fs.writeFileSync('crypto-data.json', cryptoData)
          console.log('Current BTC rates successfully retrieved')
      })

  })
  request.on('error', (error) => {
      console.log(error)
  })

  request.end()
}

module.exports = {
  getData: getData
}
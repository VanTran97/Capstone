const https = require('https')
const fs = require('fs')

const getData = ()=>{

var options = {
    "method": "GET",
    "hostname": "rest.coinapi.io",
    "path": "/v1/exchangerate/BTC",
    "headers": {'X-CoinAPI-Key': '67FA93DD-C576-4CAE-9DC6-5B15559C436B'}
  }
  
  var request = https.request(options, function (response) {
    var chunks = []
    response.on("data", function (chunk) {
      chunks.push(chunk)
      const stuff = JSON.stringify(chunk)
      fs.writeFileSync('stuff.json', chunk)
    });
  });
  
  request.end()
}

module.exports = {
    getData: getData
}
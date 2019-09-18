const request = require('request')

const getRateData = (crypto, currency, callback) => {
    var url = 'https://rest.coinapi.io/v1/exchangerate/' + crypto + '/' + currency + '?apikey=67FA93DD-C576-4CAE-9DC6-5B15559C436B'
    request({ url, json: true, gzip: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service', undefined)
        } else if (body.message) {
            callback(body.message, undefined)
        } else {
            callback(undefined, {
                rate: body.rate,
                time: body.time
            })
        }
    })
}

module.exports = getRateData
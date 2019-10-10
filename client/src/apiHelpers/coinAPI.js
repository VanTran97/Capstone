import axios from 'axios';

export const getOpeningRate = (coin, currency) => {
    let date = new Date();
    const dd = String(date.getDate()-1).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    date = yyyy + '-' + mm + '-' + dd + 'T00:00:00';

    const hostname = 'https://rest.coinapi.io';
    const apiKey = '67FA93DD-C576-4CAE-9DC6-5B15559C436B';

    var options = {
        method: 'GET',
        url: hostname + '/v1/ohlcv/' + coin + '/' + currency + '/history?period_id=1DAY&time_start=' + date,
        headers: {
            'X-CoinAPI-Key': apiKey,
        },
    };

    return (
        axios(options)
            .then(response => {
                if (response.status === 200) {
                    return response;
                } else {
                    throw new Error(JSON.stringify(response));
                }
            })
            .then(result => {
                return result.data[0].price_open;
            })
            .catch(error => console.log(error))
    );
}
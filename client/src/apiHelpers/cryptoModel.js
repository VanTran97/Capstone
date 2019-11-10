import axios from 'axios';

export const getCryptos = () => {

    var options = {
        method: 'GET',
        url: 'https://crypto-game-development.herokuapp.com/cryptos'
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
    );
}
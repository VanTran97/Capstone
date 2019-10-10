import axios from 'axios';
import AuthHelpers from '../components/AuthHelpers';

const Auth = new AuthHelpers();

const getAccount = () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:3001/accounts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Auth.getToken(),
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
    )
};

const updateBalance = (id, balance) => {
    const options = {
        method: 'PATCH',
        data: { balance },
        url: 'http://localhost:3001/accounts/' + id,
        headers: {
            'Authorization': Auth.getToken(),
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
    )
}

const addTransaction = (id, type, base, name, amount) => {
    const options = {
        method: 'PATCH',
        data: { type, base, name, amount },
        url: 'http://localhost:3001/accounts/addtransaction/' + id,
        headers: {
            'Authorization': Auth.getToken(),
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
    )
}

const addAsset = (id, base, name, amount) => {
    const options = {
        method: 'PATCH',
        data: { base, name, amount },
        url: 'http://localhost:3001/accounts/addAsset/' + id,
        headers: {
            'Authorization': Auth.getToken(),
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
    )
}

export {
    getAccount,
    updateBalance,
    addTransaction,
    addAsset
}
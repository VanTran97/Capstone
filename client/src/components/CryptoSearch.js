import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class CryptoSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: [],
            timeStamp: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        var url = 'https://rest.coinapi.io/v1/exchangerate/' + this.props.crypto + '/' + this.props.currency + '?apikey=67FA93DD-C576-4CAE-9DC6-5B15559C436B'

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error, please try again');
                }
            })
            .then(data => this.setState({ rate: data.rate, timeStamp: data.time, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { rate, timeStamp, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return (
                <Loader
                type="ThreeDots"
                color="#000000"
                height={40}
                width={40}

             />
            );
        }
        return (
            <div>
                <p>{rate}</p>
                <p>{'Rate correct as of: ' + timeStamp}</p>
            </div>
        );
    }
}

export default CryptoSearch;
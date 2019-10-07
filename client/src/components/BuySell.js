import React, { Component } from 'react';
import Header from './Header';
import withAuth from './withAuth';
import BuySellRow from './BuySellRow';
import { getCryptos } from '../actions/cryptos';

class BuySell extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            cryptos: null
        }
    }

    componentDidMount() {
        this._isMounted = true;
        getCryptos()
            .then((result) => {
                this.setState({ cryptos: result.data });
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    mapRows() {
        return (
            this.state.cryptos.map((crypto) =>
                <BuySellRow
                    key={crypto._id}
                    name={crypto.name}
                    base={crypto.base}
                    currency={crypto.currency}
                    rate={crypto.rate} />
            )
        );
    }

    render() {
        let rows = null;
        this._isMounted && (rows = this.mapRows());
        return (
            <div>
                <Header />
                <div className="body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Coin</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withAuth(BuySell);
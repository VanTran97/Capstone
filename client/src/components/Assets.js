import React, { Component } from 'react';
import Asset from './Asset';
import { getAccount } from '../apiHelpers/accountModel';

class Assets extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            assets: null
        }
    }

    componentDidMount() {
        this._isMounted = true;
        getAccount()
        .then((response) => {
            this.setState({ assets: response.data.assets })
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    mapAssets() {
        return (
            this.state.assets.map((asset) =>
                <Asset
                    key={crypto._id}
                    asset={{
                        base: asset.base,
                        name: asset.name,
                        amount: asset.amount
                    }}
                />
            )
        );
    }

    render() {
        let assets = null;
        this._isMounted && (assets = this.mapAssets());
        return (
            <div>{assets}</div>
        );
    }
}

export default Assets;
import React, { Component } from 'react';

class Asset extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="body">
                    <div className="assets">
                        <label className="asset-label">Base: {this.props.asset.base}</label>
                        <label className="asset-label">Name: {this.props.asset.name}</label>
                        <label className="asset-label">Amount: {this.props.asset.amount}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Asset;
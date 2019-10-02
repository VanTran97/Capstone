import React, { Component } from 'react';

class CryptoSearch extends Component {
    constructor(){
        super();
        this.state = {
            rateData: [],
        };
    }

    // componentDidMount() {
    //     fetch('')
    //     .then(results => {
    //         return results.json;
    //     }).then(data => {
    //         let rateData = data.results.map((rate) => {
    //             return(
    //                 <div key={rate.results}></div>
    //             )
    //         })
    //         this.setState({rate:rateData});
    //         console.log("rate", this.state);
    //     })
    // }

    render() {
        return (
            <div>
                <p>a</p>
            </div>
        )
    }

}

export default CryptoSearch;
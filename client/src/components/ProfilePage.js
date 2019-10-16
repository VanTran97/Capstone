import React, { Component } from 'react';
import Header from './Header';
import Assets from './Assets';
import withAuth from './withAuth';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            display: {
                profile: false,
                assets: false,
                trans: false,
                stats: false
            }
        }
        this.handleAssetsClick = this.handleAssetsClick.bind(this);
    }

    handleAssetsClick(e) {
        e.preventDefault();
        this.setState({
            display: {
                assets: true
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <div className="vertical-menu">
                        <button >Edit Profile</button>
                        <button onClick={this.handleAssetsClick}>Assets</button>
                        <button >Transaction History</button>
                        <button >Your Stats</button>
                    </div>
                    {this.state.display.assets && <Assets />}
                </div>
            </div>
        );
    }
}

export default withAuth(ProfilePage);
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import CryptoSearchPage from '../components/CryptoSearchPage';
import BuySell from '../components/BuySell';
import BuyPage from '../components/BuyPage';
import ProfilePage from '../components/ProfilePage';
import Footer from '../components/Footer';
import Register from '../components/Register';
import Login from '../components/Login';
import Graph from '../components/Graph';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <div className="main-content">
                <div className="body-content">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/about" component={About} exact={true} />
                        <Route path="/cryptosearch" component={CryptoSearchPage} exact={true} />
                        <Route path="/graph" component={Graph} exact={true} />
                        <Route path="/buysell" component={BuySell} exact={true} />
                        <Route path="/profile" component={ProfilePage} exact={true} />
                        <Route path="/buy" component={BuyPage} exact={true} />
                        <Route path="/register" component={Register} exact={true} />
                        <Route path="/login" component={Login} exact={true} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import CryptoSearchPage from '../components/CryptoSearchPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Graph from '../components/Graph';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/about" component={AboutPage} />
                <Route path="/cryptosearch" component={CryptoSearchPage} />
                <Route path="/graph" component={Graph} />
                <Route path="/header" component={Header} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
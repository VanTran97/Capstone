import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import CryptoSearchPage from '../components/CryptoSearchPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <div className="main-content">
                <Header />
                <div className="body-content">
                    <Switch>
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/cryptosearch" component={CryptoSearchPage} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
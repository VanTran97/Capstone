import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import CryptoSearchPage from '../components/CryptoSearchPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Register from '../components/Register';
import Login from '../components/Login';

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
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
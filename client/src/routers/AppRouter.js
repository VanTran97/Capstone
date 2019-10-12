import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import CryptoSearchPage from '../components/CryptoSearchPage';
import Footer from '../components/Footer';
import Register from '../components/Register';
import Login from '../components/Login';
import FAQ from '../components/FAQ';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <div className="main-content">
                <div className="body-content">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/about" component={About} exact={true} />
                        <Route path="/cryptosearch" component={CryptoSearchPage} exact={true} />
                        <Route path="/register" component={Register} exact={true} />
                        <Route path="/login" component={Login} exact={true} />
                        <Route path="/faq" component={FAQ} exact={true} />
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
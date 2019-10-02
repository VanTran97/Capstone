import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import CryptoSearch from '../components/CryptoSearch';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/cryptosearch" component={CryptoSearch} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
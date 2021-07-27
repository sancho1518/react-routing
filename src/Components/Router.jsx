import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import ServicesDetails from '../Pages/ServicesDetails';


const Router = () => {
    return (
        <BrowserRouter>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            </div>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/services/:id" component={ServicesDetails} />
        </BrowserRouter>
    );
}

export default Router;

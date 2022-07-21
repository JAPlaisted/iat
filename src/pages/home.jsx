import React, { Component } from 'react';
import Nav from "../components/nav";
import Hero from '../components/hero';
import Products from '../components/products';
import Mission from '../components/mission';

class Home extends Component {
    render() { 
        return (
            <div>
                <Nav />
                <Hero />
                <Products />
                <Mission />
            </div>
        );
    }
}
 
export default Home;
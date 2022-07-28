import React, { Component } from 'react';
import Nav from "../components/nav";
import Hero from '../components/hero';
import Products from '../components/products';
import Mission from '../components/mission';
import Footer from '../components/footer'

class Home extends Component {
    render() { 
        return (
            <div>
                <Nav />
                <Hero />
                <Products />
                <Mission />
                <Footer />
            </div>
        );
    }
}
 
export default Home;
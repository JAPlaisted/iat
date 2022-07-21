import React, { Component } from 'react';
import Nav from "../components/nav";
import Hero from '../components/hero';
import Products from '../components/products';

class Home extends Component {
    render() { 
        return (
            <div>
                <Nav />
                <Hero />
                <Products />
      {/* TODO: */}
      {/* Plans */}
      {/* Features */}
      {/* Showcase */}
      {/* Testimonials */}
      {/* Callout */}
      {/* Footer */}
            </div>
        );
    }
}
 
export default Home;
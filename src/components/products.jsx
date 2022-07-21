import React from "react";
import "../css/products.css";


const Products = () => {
  return (
    <section className="products">
        <div className="grid grid--1x3">
            <div className="grid--block virtual--block"><h3>Virtual Customer Service</h3>
            <div className="bot">
                <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="Random User" />
                <h3>Hi, I'm Tom how can I help you?</h3>
            </div>
            <h4>Explore</h4>
            </div>
            <div className="grid--block communication--block"><h3>Mass Communication</h3></div>
            <div className="grid--block content--block"><h3>Content Creation</h3></div>
        </div>
    </section>
  );
};

export default Products;
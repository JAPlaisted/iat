import React from "react";
import "../css/products.css";


const Products = () => {

    const handleSubmit = event => {
        event.preventDefault();
    };

  return (
    <section className="products">
        <div className="grid grid--1x3">
            <div className="grid--block virtual--block"><h3>Virtual Customer Service</h3>
            <div className="bot">
                <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="Random User" />
                <h3>Hi, I'm Stacy. How can I help you?</h3>
            </div>
            <h4>Explore</h4>
            </div>
            <div className="grid--block communication--block"><h3>Mass Communication</h3>
            <div className="email">
                <h3 className="email--header">New Message</h3>
                <form onSubmit={handleSubmit}>
                <input type="text" id="recipients" name="recipients" placeholder="All Businesses in San Francisco"/>
                <input type="text" id="fname" name="fname" placeholder="Catering Services Offer"/>
                <textarea name="input-text" id="input-text" cols="30" rows="5" placeholder="Send thousands of targeted emails in just a few clicks!">
                </textarea> <br/>
                <input className="btn" type="submit" value="Send"/>
                </form>
            </div>
            <h4>Explore</h4></div>
            <div className="grid--block content--block"><h3>Content Creation</h3>
            <p>"Look on  my works <br/> ye mighty, and <br/> <strong class="typing"></strong>!"</p>
            <h4>Explore</h4></div>
        </div>
    </section>
  );
};

export default Products;
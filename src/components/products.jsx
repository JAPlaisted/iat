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
                <div className="random--user"><img src="https://randomuser.me/api/portraits/women/79.jpg" alt="Random User" />
                <h3>Stacy</h3>
                <div className="green--circle"></div>
                </div>
                <p className="message--bot">Hi, I'm Stacy. How can I help you?</p>
                <p className="message--user">Hi, I was hoping to get <br/> a quote on something.</p>
                <p className="message--bot">Sure, what are you looking to get a quote on?</p>
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
            <div className="blog--post">
                <div className="blog--header"></div>
                <div className="blog--body">8 Companies to Follow in 2023</div>
                <div className="blog--footer">
                    <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Random User" />
                    <p>Troy Young, <br/>
                    Mar 19, 2022</p>
                </div>
            </div>
            <h4>Explore</h4></div>
        </div>
    </section>
  );
};

export default Products;
import React from "react";
import "../css/products.css";


const Products = () => {

    const handleSubmit = event => {
        event.preventDefault();
    };

  return (
    <section id="products" className="products">
        <div className="grid grid--1x3">
            <div className="grid--block virtual--block"><h3>Virtual Customer Service</h3>
            <div className="bot" data-aos="zoom-in">
                <div className="random--user"><img src="https://randomuser.me/api/portraits/women/79.jpg" alt="Random User" />
                <div className="green--circle"></div>
                <h3>Stacy</h3>
            
                </div>
                <p className="message--bot" data-aos="fade-up">Hi, I'm Stacy. How can I help you?</p>
                <p className="message--user" data-aos="fade-up">Hi, how many pieces come in the medium box? </p>
                <p className="message--bot" data-aos="fade-up">10 pieces, however, this varies by the size of each piece. You may have more or less total, but always 12oz of material.</p>
                <p className="message--bot" data-aos="fade-up">Does that answer your question? </p>
                <p className="message--user" data-aos="fade-up">For sure, thanks!</p>
                <p className="message--bot" data-aos="fade-up">Happy tp help, have a great rest of your day! </p>
            </div>
            <h4>Explore</h4>
            </div>
            <div className="grid--block communication--block"><h3>Mass Communication</h3>
            <div className="email" data-aos="zoom-in">
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
            <div className="blog--post" data-aos="zoom-in">
                <div className="blog--header"></div>
                <div className="blog--body"><h4>8 Companies to Follow in 2023</h4><p>These eight companies have been changing the way I think about business. From disrupting long-standing industries to finding new markets among consumers, these companies are worth learning more about to inspire your own entrepreneurial efforts.</p></div>
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
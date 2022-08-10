import React from "react";
import "../css/products.css";
import Prompt from "./prompt";
import BOT from "./bot";
import EMAIL from "./email";


const Products = () => {


  return (
    <section id="products" className="products">
        <div className="grid grid--1x3">
            <div className="grid--block virtual--block"><h3>Virtual Customer Service</h3>
            <BOT/>
            <h4>Explore</h4>
            </div>
            <div className="grid--block communication--block"><h3>Mass Communication</h3>
            <EMAIL/>
            <h4>Explore</h4></div>
            <div className="grid--block content--block"><h3>Prompt Engineering</h3>
            <Prompt/>
            <h4><a href="/products">Explore</a></h4></div>
        </div>
    </section>
  );
};

export default Products;
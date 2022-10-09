import React from "react";
import "../css/products.css";
import PopupSite from "./popupSite";
import BOT from "./bot";
import EMAIL from "./email";


const Products = () => {


  return (
    <section id="products" className="products">
        <div className="grid grid--1x3">
            <div className="grid--block communication--block">
              <h3>Web Development</h3>
              <div className="center--m">
                <PopupSite/>
                </div>
                <h4><a href="mailto:jon@intelligentautomationtech.com?subject=Automation Inquiry - Web Development&body=Hello, I would like to schedule a free consultation for my business!">Inquire</a></h4>
              </div>
            <div className="grid--block virtual--block">
              <h3>Virtual Customer Service</h3>
              <div className="center--m">
                <BOT/>
                </div>
                <h4><a href="mailto:jon@intelligentautomationtech.com?subject=Automation Inquiry - Virtual Customer Service&body=Hello, I would like to schedule a free consultation for my business!">Inquire</a></h4>
              </div>
            <div className="grid--block content--block">
              <h3>Email Marketing</h3>
                <EMAIL/>
                <h4><a href="mailto:jon@intelligentautomationtech.com?subject=Automation Inquiry - Email Marketing&body=Hello, I would like to schedule a free consultation for my business!">Inquire</a></h4>
              </div>
        </div>
    </section>
  );
};

export default Products;
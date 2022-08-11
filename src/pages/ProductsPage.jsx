import React from 'react';
import EMAIL from '../components/email';
import BOT from '../components/bot';
import Footer from '../components/footer';
import Nav from "../components/nav";
import "../css/ProductsPage.css";
import PROMPTS from '../components/prompts';

const ProductsPage = () => {
    return ( 
        <div>
            <Nav />
            <section className="header">
                <h2 className='center'><a href="#products">Products</a><a href="#services">Services</a></h2>
                <p className='center'>Intelligent Automation Technologies is dedicated to creating an autonomous future. A future where work is optional and humans are free to dedicate their lives to discovering their passions. To do our part, IAT is obsessed with the automation of boring, tedious, and dangerous jobs. If you are interested in discussing possible automation solutions for your business, submit and inquiry <a href="mailto:IAT-Inquiry@outlook.com?subject=Automation Inquiry">HERE</a></p>
            </section>
            <section id="products" className='products'>
                <h3>Products</h3>
                <div className="product center">
                    <EMAIL/>
                    <div className='desc-1'>
                        <h2>Mass Communication</h2>
                        <p>Are you tired of scouring the internet for potential clients, creating excell sheets <br/>
                         with all their information, then tediously reaching out to each potential client? <br/>
                         Does building a web scraping app sound like too daunting of a task? This tool <br/>
                         allows you to send messages to a curated list of potential clients instantly.</p>
                        <h4>Coming Soon</h4>
                    </div>
                </div>
            </section>
            <section id='services' className='services'>
            <h3>Services</h3>
                <div className="product center">
                    <div className='desc-2'>
                        <h2>Virtual Customer Service</h2>
                        <p>Keep up with your growing customer service needs <br/> 
                         without the trouble of paying a new employee salary. <br/> 
                         Or extend your customer service to 24 hours a day with <br/>
                         these custom made Virtual Customer Assistants.</p>
                        <h4><a href="mailto:IAT-Inquiry@outlook.com?subject=Automation Inquiry - Virtual Customer Service">Inquire</a></h4>
                    </div>
                    <BOT/>
                </div>

                <div className="product center">
                    <div className='desc-3'>
                        <h2>Prompt Engineering</h2>
                        <p>Artifically generated images are the future of art. <br/> 
                         Unfortuneatly AI is a bit of a black-box. It can be <br/> 
                         difficult to prompt these AI tools effectively. With <br/>
                         Prompt Engineering, you can save time and money <br/>
                         with and achieve repeatable results.</p>
                        <h4><a href="mailto:IAT-Inquiry@outlook.com?subject=Automation Inquiry - Prompt Engineering">Inquire</a></h4>
                    </div>
                    <PROMPTS/>
                </div>
            </section>
            <Footer/>
        </div>
            
      
     );
}
 
export default ProductsPage;
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
                <p className='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita soluta natus libero dolor modi cumque maiores quam. Nesciunt magnam similique aspernatur amet facere ut totam magni voluptatem error dolor ad minima quam consequuntur, fugiat ipsam velit expedita unde molestias recusandae nam corporis quas? Quia reprehenderit nostrum impedit fuga veritatis.</p>
            </section>
            <section id="products" className='products'>
                <h3>Products</h3>
                <div className="product center">
                    <EMAIL/>
                    <div className='desc-1'>
                        <h2>Mass Communication</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio <br/> 
                         impedit quisquam dolorum suscipit dolorem neque earum. <br/> 
                         Iusto doloribus exercitationem quaerat.</p>
                        <h4>Coming Soon</h4>
                    </div>
                </div>
            </section>
            <section id='services' className='services'>
            <h3>Services</h3>
                <div className="product center">
                    <div className='desc-2'>
                        <h2>Virtual Customer Service</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio <br/> 
                         impedit quisquam dolorum suscipit dolorem neque earum. <br/> 
                         Iusto doloribus exercitationem quaerat.</p>
                        <h4>Inquire</h4>
                    </div>
                    <BOT/>
                </div>

                <div className="product center">
                    <div className='desc-3'>
                        <h2>Prompt Engineering</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio <br/> 
                         impedit quisquam dolorum suscipit dolorem neque earum. <br/> 
                         Iusto doloribus exercitationem quaerat.</p>
                        <h4>Inquire</h4>
                    </div>
                    <PROMPTS/>
                </div>
            </section>
            <Footer/>
        </div>
            
      
     );
}
 
export default ProductsPage;
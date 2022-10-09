import React from 'react';
import shoes from "../assets/sneakers.png"


const PopupSite = () => {

    return ( 
        <div className="popup" data-aos="zoom-in">
            <header data-aos="fade-up">
                <nav>
                    <p>Home</p>
                    <p>About</p>
                    <p>Cart</p>
                </nav>
            </header>
            <div data-aos="fade-up">
                <h3>Nike Air</h3>
                <img className='shoes' src={shoes} alt="A pair of sneakers" />
            </div>
            <div className='popup-text'>
                <h4 data-aos="fade-up">Product Details: </h4>
                <p data-aos="fade-up">Foam midsole.</p>
                <p data-aos="fade-up">Perforations on the toe.</p>
                <p data-aos="fade-up">Rubber sole.</p>
            </div>
        </div>
     );
}
export default PopupSite;
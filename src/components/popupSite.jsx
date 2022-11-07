import React from 'react';
import pacifica from "../assets/PacificaLogo.png"

const PopupSite = () => {

    return ( 
        <div data-aos="zoom-in">
            <div className="popup">
                <header data-aos="fade-up">
                    <nav>
                        <p>Menu</p>
                        <p>Order</p>
                        <p>Contact</p>
                    </nav>
                </header>
                <div data-aos="fade-up">
                    <img className='popup-logo' src={pacifica} alt="Pacifica Pizza logo" />
                </div>
                <div className='popup-text'>
                    <span data-aos="fade-up">
                        <p>The Best Pizza Can Get</p>
                        <h4>Pizza</h4>
                        <h4>Sandwhiches</h4>
                        <h4>Salad</h4>
                        <h4>Appetizers</h4>
                        <h4>Beverages</h4>
                    </span>
                </div>
            </div>
        </div>
     );
}
export default PopupSite;
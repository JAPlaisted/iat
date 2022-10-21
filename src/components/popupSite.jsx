import React from 'react';
import zoa from "../assets/zoa-tropical.webp"


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
                <h3>ZOA ENERGY</h3>
                <img className='popup-logo' src={zoa} alt="A can of Zoa energy" />
            </div>
            <div className='popup-text'>
                
            <span data-aos="fade-up">
                <h4>IMMUNITY SUPPORT</h4>
                <p>ZOA fights for you with immunity-promoting vitamin C
                    from ascorbic acid and superfoods camu camu and
                    acerola. With an excellent source of vitamin C, you're
                    helping protect your cells against damage and bolstering your immune system.</p>
            </span>
            <span data-aos="fade-up">
                <h4>WARRIOR STRENGTH</h4>
                <p>Even the strongest warriors need support. That's why ZOA
                    contains a unique blend of vitamins, caffeine and other
                    ingredients to support your workout.</p>
            </span>
            </div>
        </div>
     );
}
export default PopupSite;
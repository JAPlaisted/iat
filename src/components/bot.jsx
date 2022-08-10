import React from 'react';

const BOT = () => {
    return ( 
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
     );
}
 
export default BOT;
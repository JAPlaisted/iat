import React from 'react';

const EMAIL = () => {

    const handleSubmit = event => {
        event.preventDefault();
    };
    
    return ( 
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
     );
}
 
export default EMAIL;
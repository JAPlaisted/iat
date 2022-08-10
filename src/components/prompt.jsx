import React from 'react';
import chair from "../assets/armchair.png"

const Prompt = () => {
    return ( 
    <div className="prompt" data-aos="zoom-in">
        <img src={chair} alt="" />
        <p>“An armchair in the shape <br/> of a slice of pizza”</p>
    </div> 
    );
}
 
export default Prompt;
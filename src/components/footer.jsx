import React from 'react';
import "../css/footer.css";
import Sprite from '../assets/sprite.svg'

const Footer = () => {
    

    return ( 
        <section id="footer" className="footer container">
                   <div className="social--icons" data-aos="fade-up">
        
        <svg className="icon">
         <use xlinkHref={`${Sprite}#linkedin`}></use>
         </svg>
 
         <svg className="icon">
         <use xlinkHref={`${Sprite}#youtube-svgrepo-com`}></use>
         </svg>
   
         <svg className="icon">
         <use xlinkHref={`${Sprite}#twitter`}></use>
         </svg>
         
         <svg className="icon">
         <use xlinkHref={`${Sprite}#instagram`}></use>
         </svg>
   
    </div>
       <h3 data-aos="fade-up" className='tagline-2' ><a href="https://www.instagram.com/">#ALL INPUT IS ERROR</a></h3>
       <div className="footer--body vertical-center" data-aos="fade-up">
           <div className="logo--footer">
            <a href="https://incredible-cactus-081ef1.netlify.app/"><div className="logo-f"></div>
            <h2>&copy; Intelligent Automation Technologies<br/>&nbsp;&nbsp;&nbsp;&nbsp;2022, ALL RIGHTS RESERVED.
            </h2></a>
            <div className="contact">
           <a href="mailto:jonathan.plaisted@outlook.com">@IAT</a>  
           </div>
           </div>
       </div>
        </section>
     );
}
 
export default Footer;

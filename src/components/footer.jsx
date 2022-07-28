import React from 'react';
import "../css/footer.css";
import Sprite from '../assets/sprite.svg'

const Footer = () => {
    

    return ( 
        <section id="footer" className="footer container">
                   <div className="social--icons">
        
        <span data-aos="fade-up" data-aos-duration="500">
            <svg className="icon" >
             <use xlinkHref={`${Sprite}#linkedin`}></use>
             </svg>
        </span>
 
         <span data-aos="fade-up" data-aos-duration="750">
             <svg className="icon">
             <use xlinkHref={`${Sprite}#youtube-svgrepo-com`}></use>
             </svg>
         </span>
   
         <span data-aos="fade-up" data-aos-duration="1000">
             <svg className="icon">
             <use xlinkHref={`${Sprite}#twitter`}></use>
             </svg>
         </span>
         
         <span data-aos="fade-up" data-aos-duration="1250">
             <svg className="icon">
             <use xlinkHref={`${Sprite}#instagram`}></use>
             </svg>
         </span>
   
    </div>
       <h3 className='tagline-2' ><a href="https://www.instagram.com/">#ALL INPUT IS ERROR</a></h3>
       <div data-aos="fade-up" className="footer--body vertical-center">
           <div className="logo--footer">
            <a href="/"><div className="logo-f"></div>
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

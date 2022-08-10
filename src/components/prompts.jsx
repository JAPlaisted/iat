import React from 'react'
import dog from "../assets/malinois.png"
import chair from "../assets/armchair.png"
import pyramid from "../assets/pyramid.png"
import shake from "../assets/moonshake.png"
import chess from "../assets/chess.png"
import robot from "../assets/ancientrobot.png"

const PROMPTS = () => {
    return ( 
        <div className="prompt--images">
            <figure className='gallery__item gallery__item--1'>
            <img className='propmt--image' data-aos="fade-up" src={shake} alt="A Milkshake overlooking the moon" />
            </figure>
            <figure className='gallery__item gallery__item--2'>
            <img className='propmt--image' data-aos="fade-up" src={chess} alt="An AI rendered photo of a pizza shaped armchair" />
            </figure>
            <figure className='gallery__item gallery__item--3'>
            <img className='propmt--image' data-aos="fade-up" src={pyramid} alt="An AI rendered photo of a Monkey skateboarding near the Pyramids in Egypt" />
            </figure>
            <figure className='gallery__item gallery__item--4'>
            <img className='propmt--image' data-aos="fade-up" src={dog} alt="An AI rendered photo of a dog" />
            </figure>
            <figure className='gallery__item gallery__item--5'>
            <img className='propmt--image' data-aos="fade-up" src={chair} alt="An AI rendered photo of a pizza shaped armchair" />
            </figure>
            <figure className='gallery__item gallery__item--6'>
            <img className='propmt--image' data-aos="fade-up" src={robot} alt="An AI rendered photo of a Monkey skateboarding near the Pyramids in Egypt" />
            </figure>
            </div>
     );
}
 
export default PROMPTS;
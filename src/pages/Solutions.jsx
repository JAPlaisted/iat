import React from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import "../css/Solutions.css";

const Solutions = () => {
    return ( 
    <section id='solutions' className='solutions'>
        <Nav/>
        <section className="header">
                <h2 className='center'><span>SOLUTIONS</span></h2>
            </section>
        <section className='solutions--body'>
        <h3>Master Plan:</h3>
        <span className='center'>
            <p>Build automation tools and services for IAT clients to alleviate common repetitive tasks.  Build capitol through the sale of these tools to re-invest and expand offered tools and services. </p>

            <p>Expand to robotic autonomous processes that can alleviate production demand on companies, help keep supply chain management by manufacturing more products in the US, and replace low skill jobs with high skills jobs. </p>

            <p>Invest in concrete 3D printing technology to achieve rapid autonomous development. Leverage the low cost of materials, labor, and efficiency of 3D printed homes to bring the national average home price to approximately $50,000.</p>

            <p>Create a free accredited education platform to help humans earn STEM degrees and increase their potential earnings and life satisfaction. </p>
        </span>
        </section>
        <Footer/>
    </section> 
    );
}
 
export default Solutions;
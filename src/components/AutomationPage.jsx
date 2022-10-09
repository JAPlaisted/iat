import React from "react";
import robot from "../assets/robot.gif"

import "../css/AutomationPage.css";


const AutomationPage = () => {
  return (
    <section className="automation">
        <div className="paragraph">
            <h2 data-aos="fade-right">Intelligent Automation Technologies</h2>
            <p data-aos="fade-right">Intelligent Automation Technologies (IAT) is focused on providing small businesses with efficient automation software and hardware to replace your most boring, tedious, and dangerous processes. IAT helps you save money on salaries while scaling your business with products like virtual customer service or automated email marketing campaigns. Your business should be working for you, now it can. In today’s economy, every business is a software business, don’t get left in the past. <br/><br/>Don’t know where to start? Get a free consultation on how IAT can save you time and your businesses money with custom automation technologies that fit your specific needs.
            </p>
        </div>
        <div>
            <img className='robot-dance' data-aos="fade-up" src={robot} alt="A robot and human dancing together" />
            <a href="mailto:jon@intelligentautomationtech.com?subject=Free%20Automation%20Consultation&body=Hello, I would like to schedule a free consultation for my business!">
                <button className="btn--secondary">
                    Free Consultation
                </button>
            </a>
        </div>
    </section>
  );
};

export default AutomationPage;

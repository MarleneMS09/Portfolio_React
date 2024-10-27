import React, { useState } from 'react';
import "./services.css";

export const Services = () => {
    const [toggleState, setToggleState ] = useState (0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">

        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I offer</span>
        <div className="services__container container grid">
        <div className="services__content">
        <div className="services__tools">
    <div className="services__circle red"></div>
    <div className="services__circle yellow"></div>
    <div className="services__circle green"></div>
</div>
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title"> 
               Full Stack <br /> Developer</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab (1) }>View More <i className="ui ui-arrow-right services__button-icon"></i> </span>
            <div className= {toggleState === 1 ?  "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
    <h3 className="services__modal-title"> Full Stack Developer </h3>
    <p className="services__modal-description">I deliver innovative and user-centered solutions, ensuring quality and sociological insights that enhance the user experience</p>
    <div className="services__modal-services grid">
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info">Crafting responsive and engaging interfaces. </p>
        </div>
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info"> Building seamless user interactions. </p>
        </div>
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info"> Analyzing user needs for tailored solutions.</p>
        </div>
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info"> Designing and prototyping impactful products. </p>
        </div>
    </div>
</div>

            </div>
            
        </div>
        <div className="services__content">
        <div className="services__tools">
    <div className="services__circle red"></div>
    <div className="services__circle yellow"></div>
    <div className="services__circle green"></div>
</div>
            
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                    UX/UI < br /> Designer </h3>
            </div>
            <span onClick={() => toggleTab (2) } className="services__button">View More <i className="ui ui-arrow-right services__button-icon"></i> </span>
            <div className= {toggleState === 2 ?  "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">UX /UX Designer</h3>
                    <p className="services__modal-description">Crafting seamless and impactful user experiences through innovative design solutions focused on user needs and behavior</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> Designing intuitive and engaging user interfaces. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> Developing interactive elements for effective user journeys. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Conducting user analysis to drive insightful solutions. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> Creating detailed mockups and prototypes for impactful product designs.</p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
        <div className="services__content">
        <div className="services__tools">
    <div className="services__circle red"></div>
    <div className="services__circle yellow"></div>
    <div className="services__circle green"></div>
</div>
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                    Software < br /> Engineering </h3>
            </div>
            <span onClick={() => toggleTab (3) } className="services__button">View More <i className="ui ui-arrow-right services__button-icon"></i> </span>
            <div className= {toggleState === 3 ?  "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Software Engineer</h3>
                    <p className="services__modal-description">Delivering robust and scalable software solutions with a focus on innovation, efficiency, and user-centered design.</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Architecting and developing reliable software applications.</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Implementing user-centric features and interfaces.</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Ensuring high-quality code through testing and optimization.</p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">Collaborating to create impactful solutions for complex challenges.</p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
      
        </div>
         





    </section>
  )
}

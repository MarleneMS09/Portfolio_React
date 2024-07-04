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
    <p className="services__modal-description">I provide quality work and a sociological perspective with innovate solution centered in user experiences</p>
    <div className="services__modal-services grid">
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info"> I develop the user interface. </p>
        </div>
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info"> I create UX element interactions. </p>
        </div>
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info"> I create analyzes about your needs. </p>
        </div>
        <div className="services__modal-service">
            <i className="uil uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info"> Design and mockups of products for companies. </p>
        </div>
    </div>
</div>

            </div>
            
        </div>
        <div className="services__content">
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
                    <p className="services__modal-description">I provide quality work and a sociological perspective with innovate solution centered in user experiences</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> I develop the user interface. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> I create UX element interactions. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> I create analyzes about your needees. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> Design and mockups of products for companies. </p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                    Software < br /> Engineering </h3>
            </div>
            <span onClick={() => toggleTab (3) } className="services__button">View More <i className="ui ui-arrow-right services__button-icon"></i> </span>
            <div className= {toggleState === 3 ?  "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">DevOps Engineer</h3>
                    <p className="services__modal-description">I provide quality work and a sociological perspective with innovate solution centered in user experiences</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> I develop the user interface. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> I create UX element interactions. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> I create analyzes about your needees. </p>
                    </li>
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info"> Design and mockups of products for companies. </p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
      
        </div>
         





    </section>
  )
}

import React, { useState } from 'react';
import './Header.css';

export const Header = () => {

  /* Toggle  */
  const [Toggle, showMenu] = useState(false); 


  return (
    <header className="header">
      <nav className="nav container">

      <a href="../../../public/index.html" className="nav__logo">
  <span class="nav__logo-letter">M</span>
  <span class="nav__logo-letter">S</span>
</a>



        <div className= {Toggle ? "nav__menu showMenu" : "nav__menu"}> 

          <ul className="nav__list grid">


            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

     

  <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
  <i className="uil uil-apps"></i>
</div>


        </div>

      </nav>

    </header>
  );
}

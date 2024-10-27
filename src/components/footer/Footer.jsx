import React from 'react';
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
        <a href="#home">
  <h1 class="footer__title">MS</h1>
</a>
 <p className="footer__description">
          A Full Stack Developer, delivering modern, scalable solutions.
        </p>

            <ul className="footer__list">
              <li>
                <a href="#about" className="footer__link">About</a>
              </li>
              <li>
                <a href="#projects" className="footer__link">Projects</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">Contact</a>
              </li>
            </ul>
            <div className="footer__social">
            <a href=" https://www.instagram.com/mar_mmsz?igsh=cGJmdTd1N29xbTls " className="footer__social-link" target="_blank"><i className= "uil uil-instagram"></i></a>
            <a href=" https://www.linkedin.com/in/vanessamarlenemsanchez/ " className="footer__social-link" target="_blank"><i className="uil uil-linkedin"></i></a>
            <a href=" https://github.com/MarleneMS09 " className="footer__social-link" target="_blank"><i className= "uil uil-github-alt"></i></a>

            </div>
           
            <span className = "footer__copy"> &#169; Vanessa Marlene Sanchez </span>
 
        </div>
    </footer>
  )
}
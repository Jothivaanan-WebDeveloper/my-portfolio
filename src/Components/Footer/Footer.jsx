import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {

  return (
    <div className='footer'>
      <img src={Wave} alt='footerImage' className='footer-img' />
      <div className="f-content">
        <span>jothivaananwebdeveloper@gmail.com</span>
        <div className="f-icons">
          <a href='https://github.com/Jothivaanan-WebDeveloper' target='_blank'>
            <Github color="white" size="3rem" />
          </a>
          <a href='https://www.instagram.com/jman_and_channy/' target='_blank'>
            <Insta color="white" size="3rem" />
          </a>
          <a href='https://www.linkedin.com/in/jothivanan/' target='_blank'>
            <Linkedin color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
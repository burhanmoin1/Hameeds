import logo from './Hameedslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="footer-logo">
          <img src={logo.src} alt="Hameed's Logo" />
        </div>
          <div className="footer-number">
          <a style={{textDecoration: 'none',
              color: 'white', display: 'block', marginTop: '12px', marginBottom: '10px'}}>
          <FontAwesomeIcon icon={faPhone} /> +923454845555
        </a>
        <a style={{textDecoration: 'none',
              color: 'white',
              display: 'block',
              marginLeft: '-1px'
              }}>
          <FontAwesomeIcon icon={faEnvelope}/> info@thehameeds.com
          </a>
    </div>
      </div>

      <div className="footer-column">
        <ul className="footer-nav">
          <li><Link href="/#aboutus" className="footer-link">About Us</Link></li>
          <li><Link href="/#contactus" className="footer-link">Contact Us</Link></li>
          <li><Link href="/#products" className="footer-link">Products</Link></li>
        </ul>
      </div>

      <div className="footer-text">
        <p>© Copyright Hameeds 2024. All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;

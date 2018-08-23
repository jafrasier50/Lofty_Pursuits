import React from 'react';
import './component.css';
import inventorylogo from "../images/inventorylogo.svg";


const Footer = props => (
    <footer className="footer">
        <div className="footer-content">
            <img id="footer-logo" src={inventorylogo}/>
            <br/>
        
            <p>1355 Market Street #A11 in Tallahassee, FL.</p>
        </div>
     
        <div className="copyright"><p>Lofty Pursuits© 2018</p></div>
    </footer>
);

export default Footer;

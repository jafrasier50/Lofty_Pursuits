import React from 'react';
import './component.css'

const Footer = props => (
    <footer className="footer">
        <div className="footer-content">
           <h3> Looks like you found a footer. At least it doesn't smell.</h3>
        </div>
     
                <ul className="footer_navigation-items footer_navigation ">
                    <li><a href="/toys">Toys</a></li>
                    <li><a href="/icecream">Ice Cream</a></li>
                    <li><a href="/candy">Candy</a></li>
                    <li><a href="/menu">Our Menu</a></li>
                    <li><a href="/parties">Parties</a></li>
                    <li><a href="/catering">Catering</a></li>
                    <li><a href="/marchingband">Marching Band</a></li>
                    <li><a href="/tours">Tour Groups</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="copyright"><p>Lofty Pursuits© 2018</p></div>
    </footer>
);

export default Footer;
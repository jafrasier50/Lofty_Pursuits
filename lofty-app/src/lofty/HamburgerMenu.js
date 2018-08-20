import React from 'react';
import './component.css'


const HamburgerMenu = props => {
    let hamMenuClasses = ['hamburger-menu']
    if (props.show) {
        hamMenuClasses = 'hamburger-menu open';
    }
return (
    <nav className={hamMenuClasses}>
        <ul>
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
    </nav>
    );
};
export default HamburgerMenu;
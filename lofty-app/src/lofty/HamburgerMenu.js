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
            <h2><li><a href="/">Home</a></li></h2>
            <h2><li><a href="/toys">Toys</a></li></h2>
            <h2><li><a href="/icecream">Ice Cream</a></li></h2>
            <h2><li><a href="/candy">Candy</a></li></h2>
            <h2><li><a href="/menu">Our Menu</a></li></h2>
            <h2><li><a href="/parties">Parties</a></li></h2>
            <h2><li><a href="/catering">Catering</a></li></h2>
            <h2><li><a href="/contact">Contact</a></li></h2>
        </ul>
    </nav>
    );
};
export default HamburgerMenu;
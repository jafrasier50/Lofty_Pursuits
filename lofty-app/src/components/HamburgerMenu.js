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
            <li><a href="/">Toys</a></li>
            <li><a href="/">Ice Cream</a></li>
            <li><a href="/">Candy</a></li>
            <li><a href="/">Our Menu</a></li>
            <li><a href="/">Parties</a></li>
            <li><a href="/">Catering</a></li>
            <li><a href="/">Marching Band</a></li>
            <li><a href="/">Tour Groups</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
    );
};
export default HamburgerMenu;
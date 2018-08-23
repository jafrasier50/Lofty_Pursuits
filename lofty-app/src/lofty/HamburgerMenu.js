import React from 'react';
import './component.css'


const HamburgerMenu = props => {
    let hamMenuClasses = ['hamburger-menu']
    if (props.show) {
        hamMenuClasses = 'hamburger-menu open';
    }
return (
    <div className="hambackdrop">
    <nav className={hamMenuClasses}>
        <ul>
            <h2><li><a href="/">Home</a></li></h2>
            <h2><li><a href="/icecream">Ice Cream</a></li></h2>
            <h2><li><a href="/candy">Candy</a></li></h2>
            <h2><li><a href="/menu">Our Menu</a></li></h2>
        </ul>
    </nav>
    </div>
    );
};
export default HamburgerMenu;
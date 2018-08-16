import React from 'react';
import HamMenuButton from "./HamMenuButton"
import './component.css'

const Menubar = props => (
    <header className="menubar">
        <nav className="menubar_navigaton">
            <div className="hamMenu_toggle-button">
                <HamMenuButton click={props.HamMenuClickHandler}/>
            </div>
            <div className="menubar_logo"><a href="/">Lofty Pursuits</a></div>
            <div className="spacer"></div>
            <div className="menubar_navigation-items">
                <ul >
                    <li><a href="/">Route1</a></li>
                    <li><a href="/">Route2</a></li>
                    <li><a href="/">Route3</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Menubar;
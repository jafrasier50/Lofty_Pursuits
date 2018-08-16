import React from 'react';
import HamMenuButton from "./HamMenuButton"
import './component.css'
import loftylogo from '../images/loftylogo.svg'

const Menubar = props => (
    <header className="menubar">
        <nav className="menubar_navigaton">
            <div className="hamMenu_toggle-button">
                <HamMenuButton click={props.HamMenuClickHandler}/>
            </div>
            <div className="menubar_logo"><a href="/"><img style={{ paddingTop: '.5rem', paddingBottom: '.1rem', width: '120px', height: 'auto'}} src={loftylogo}/></a></div>
            <div className="spacer"></div>
            <div className="menubar_navigation-items">
                <ul >
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
            </div>
        </nav>
    </header>
);

export default Menubar;
import React from 'react';
import './component.css'
import BreakfastMenu from "./BreakfastMenu";
import MenuParallax from "./MenuParallax"
const OurMenu = props => (
   <div className="breakfastMenu_container"><br/>

   <MenuParallax id="our_menu-Parallax"/>
 
    <div className="breakfast-info">
        
        <h3>North Florida is home to some of the best ingredients in the world.
            <br/>
           We work with our local Farmers to bring this goodness to our table.
           <br/>
           Support the food that makes Tallahassee taste like Tallahassee.
        </h3>
    
    </div>
    <BreakfastMenu />
   </div>
);

export default OurMenu;
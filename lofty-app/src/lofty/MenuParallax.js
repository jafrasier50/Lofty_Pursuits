import React from 'react';
import { Parallax } from 'react-parallax';
import './component.css'


const MenuParallax = () => (
  <div classNames="menuParallax">
    <Parallax 
      blur={1}
      bgImage={require('../images/LoftyBreakfast.jpg')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="menu_headline">Come on in for a Lofty Breakfast</h1>
      <div style={{ height: '110px' }} />
    </Parallax>
  </div>
);
export default MenuParallax;
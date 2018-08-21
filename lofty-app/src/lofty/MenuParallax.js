import React from 'react';
import { Parallax } from 'react-parallax';

const MenuParallax = () => (
  <div classNames="menuParallax">
    <Parallax 
      blur={1}
      bgImage={require('../images/LoftyBreakfast.jpg')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 classNames="menu_headline">Come on in for a Lofty Breakfast</h1>
      <div style={{ height: '500px' }} />
    </Parallax>
  </div>
);
export default MenuParallax;
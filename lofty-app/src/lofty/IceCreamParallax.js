import React from 'react';
import { Parallax } from 'react-parallax';
import './component.css'


const IceCreamParallax = () => (
  <div className="icecream-parallax">
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/ice_cream.jpg')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="icecream_headline">Ice Cream For Daes</h1>
      <div style={{ height: '100px' }} />
    </Parallax>
  </div>
);
export default IceCreamParallax;
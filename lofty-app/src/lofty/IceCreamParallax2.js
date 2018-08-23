import React from 'react';
import { Parallax } from 'react-parallax';
import './component.css'


const IceCreamParallax2 = () => (
  <div className="menuParallax">
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/superman.png')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="icecream_headline3">LOFTY PURSUITS</h1>
      <div style={{ height: '200px' }} />
    </Parallax>
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/birthdaycake.png')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="icecream_headline3">Tallahassee</h1>
      <div style={{ height: '200px' }} />
    </Parallax>
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/icecream2.png')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="icecream_headline3">Florida</h1>
      <div style={{ height: '200px' }} />
    </Parallax>
  </div>
);
export default IceCreamParallax2;
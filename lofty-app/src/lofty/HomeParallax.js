import React from 'react';
import { Parallax } from 'react-parallax';
import './component.css'


const HomeParallax = () => (
  <div className="homeParallax">
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/superman.png')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="Home_headline1">LOFTY<br/>PURSUITS</h1>
      <div style={{ height: '250px' }} />
    </Parallax>
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/humbug.jpg')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="Home_headline2">Tallahassee</h1>
      <div style={{ height: '250px' }} />
    </Parallax>
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/LoftyBreakfast.jpg')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="Home_headline1">Florida</h1>
      <div style={{ height: '250px' }} />
    </Parallax>
  </div>
);
export default HomeParallax;
import React from 'react';
import { Parallax } from 'react-parallax';
import './component.css'


const HomeParallax = () => (
  <div className="homeParallax">
    <Parallax 
      className="home-1-parallax"
      blur={0}
      bgWidth={'100vw'}
      bgHeight={'120vw'}
      bgImage={require('../images/superman1.jpg')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="Home_headline1">LOFTY PURSUITS</h1>
      <div style={{ height: '70px' }} />

     
    </Parallax>
    <Parallax 
      className="home-1-parallax"
      blur={0}
      bgWidth={'100vw'}
      bgHeight={'auto'}
      bgImage={require('../images/humbugs1.png')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}

    >
      <h1 className="Home_headline2">Tallahassee</h1>  
      <div style={{ height: '70px' }} />

     
    </Parallax>
    <Parallax 
      className="home-1-parallax"
      blur={0}
      bgWidth={'100vw'}
      bgHeight={'auto'}
      bgImage={require('../images/LoftyBreakfast3.jpg')}
      bgImageAlt="Custom Waffle Creation by Josh Frasier"
      strength={200}
    >
      <h1 className="Home_headline1">Florida</h1>
      <div style={{ height: '70px' }} />
     
    </Parallax>
  </div>
);
export default HomeParallax;
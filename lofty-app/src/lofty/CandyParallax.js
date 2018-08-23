import React from 'react';
import { Parallax } from 'react-parallax';
import './component.css'


const CandyParallax = () => (
  <div className="candy-parallax">
    <Parallax 
      blur={0}
      bgWidth={'100%'}
      bgHeight={'auto'}
      bgImage={require('../images/imagecandy.jpg')}
      bgImageAlt="imgr"
      strength={200}
    >
      <h1 className="candy_headline">EAT<br/>MORE<br/>CANDY<br/></h1>
      <div style={{ height: '100px' }} />
    </Parallax>
  </div>
);
export default CandyParallax;
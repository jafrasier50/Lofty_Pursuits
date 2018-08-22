import React from 'react';
import './component.css'
import IceCreamParallax from './IceCreamParallax'
import IceCreamParallax2 from './IceCreamParallax2'

const IceCream = props => (
    <div className="icecream-route">
        <div><IceCreamParallax/></div>
        <div className="feature content"></div>
        <h2>We rotate through almost 200 flavors at Lofty Pursuits. Some are here every day;
            some visit us for a while and go away. Our Master List of flavors can show what
            we bring in from time to time, and the list below lets you know what we have right 
            now. We are currently working on the recipes for our very own homemade ice cream. 
            So feel free to ask our soda jerks what is out that we've made in house!
            <br/>
            <br/>
            Want to know what comes out when we put it out? Follow us on Facebook, Twitter, 
            or text "Lofty flavor" to <strong style={{color:"#ff4e42"}}>99629</strong>  to get daily SMS updates.
            <br/>
            <br/>
            <strong style={{color:"#ff4e42"}}>All</strong> of our ice cream is rated <strong style={{color:"#ff4e42"}}>Super Premium</strong>.
        </h2>
        <div><IceCreamParallax2/></div>
        <div className="feature content"></div>
     </div>
    );

export default IceCream;
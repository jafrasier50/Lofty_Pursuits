import React from 'react';
import './component.css'
import HomeParallax from "./HomeParallax"

const Home = props => (
    <div style={{height: '100%'}}>
       
        
   
        <main style={{marginTop: '61px'}}>
            <HomeParallax id="home_parallax"/>
            <div className="quote-container">
            <div className="quotes">
                <div className="quote">
                    <p>"Cheating on my diet with this chocolate babe never felt so good #deathbychocolate @ Lofty Pursuits"<br/><br/>
                        - Emily J.
                    </p>
                </div>
                <div className="quote">
                    <p>"What does a girl have to do around here to have a lofty pursuits date like really?"<br/><br/>
                        - Hanna B.
                    </p>
                </div>
                <div className="quote">
                    <p>"Best girls night out ever at lofty pursuits. Reliving my childhood!! Squeeeeeeeee"<br/><br/>
                        - Laura J.
                    </p>
                </div>
            </div>
            </div>
        </main>
        
        </div>
);

export default Home;
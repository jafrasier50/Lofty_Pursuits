import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import './components/component.css'
import Menubar from './components/Menubar';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import Toys from './components/Toys';
import IceCream from './components/IceCream';
import Candy from './components/Candy';
import OurMenu from './components/OurMenu';
import Parties from './components/Parties';
import Catering from './components/Catering';
import MarchingBand from './components/MarchingBand';
import TourGroups from './components/TourGroups';
import Contact from './components/Contact';



ReactDOM.render((
   
    <div>
    <Menubar />
    
    <BrowserRouter>
    
           
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/toys" component={Toys}/>
            <Route path="/icecream" component={IceCream}/>
            <Route path="/candy" component={Candy}/>
            <Route path="/menu" component={OurMenu}/>
            <Route path="/parties" component={Parties}/>
            <Route path="/catering" component={Catering}/>
            <Route path="/marchingband" component={MarchingBand}/>
            <Route path="/tours" component={TourGroups}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
        
    </BrowserRouter>
    <Footer />
    </div>
    

), document.getElementById('root'));
registerServiceWorker();

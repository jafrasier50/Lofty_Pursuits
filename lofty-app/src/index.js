import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import './candy_machine/css/style.css'
import './lofty/component.css'
import Menubar from './lofty/Menubar';
import Footer from './lofty/Footer';
import registerServiceWorker from './registerServiceWorker';
import Home from './lofty/Home';
import Toys from './lofty/Toys';
import IceCream from './lofty/IceCream';
import Candy from './lofty/Candy';
import OurMenu from './lofty/OurMenu';
import Parties from './lofty/Parties';
import Catering from './lofty/Catering';
import MarchingBand from './lofty/MarchingBand';
import TourGroups from './lofty/TourGroups';
import Contact from './lofty/Contact';
import App from './candy_machine/App'
import StorePicker from "./candy_machine/StorePicker"


ReactDOM.render((
   
    <div>
    <Menubar />
    
    <BrowserRouter>
    
           
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/toys" component={Toys}/>
            <Route path="/icecream" component={IceCream}/>
            {/* <Route path="/candy" component={App}/> */}
            <Route path="/menu" component={OurMenu}/>
            <Route path="/parties" component={Parties}/>
            <Route path="/catering" component={Catering}/>
            <Route path="/marchingband" component={MarchingBand}/>
            <Route path="/tours" component={TourGroups}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/candy" component={App} />
        </Switch>
        
    </BrowserRouter>
    <Footer />
    </div>
    

), document.getElementById('root'));
registerServiceWorker();

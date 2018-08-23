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
import IceCream from './lofty/IceCream';
import OurMenu from './lofty/OurMenu';
import App from './candy_machine/App'


ReactDOM.render((
   
    <div>
    <Menubar />
    
    <BrowserRouter>
    
           
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/icecream" component={IceCream}/>
            <Route path="/menu" component={OurMenu}/>
            <Route path="/candy" component={App} />
        </Switch>
        
    </BrowserRouter>
    <Footer />
    </div>
    

), document.getElementById('root'));
registerServiceWorker();

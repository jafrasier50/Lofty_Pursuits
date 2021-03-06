import React from 'react';
import './component.css'
import loftylogo from '../images/loftylogo.svg'
import Backdrop from './Backdrop'
import HamburgerMenu from './HamburgerMenu.js'

class Menubar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { HamMenuOpen: false};
    }
    HamMenuToggleClickHandler = () => {
        
        this.setState((prevState) => {
          return {HamMenuOpen: !prevState.HamMenuOpen};
        });
      };
    
      backdropClickHandler = () => {
        this.setState({HamMenuOpen: false});
      }
    
    // ...
    render(){



        let backdrop;

        if (this.state.HamMenuOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }


        return (
        <header className="menubar">
            {backdrop}
            <nav className="menubar_navigaton">
                <div className="hamMenu_toggle-button">
                <button className="toggle-button" onClick={this.HamMenuToggleClickHandler}>
                    <div className="toggle-button_line"/>
                    <div className="toggle-button_line"/>
                    <div className="toggle-button_line"/>                
                </button>
                </div>
                <div className="menubar_logo"><a href="/"><img style={{ paddingTop: '.5rem', paddingBottom: '.1rem', width: '120px', height: 'auto'}} src={loftylogo} alt="Lofty Pursuits"/></a></div>
                <HamburgerMenu show={this.state.HamMenuOpen} />
                <div className="spacer"></div>
                <div className="menubar_navigation-items">
                    <ul>
                        <li><a href="/"><strong>Home</strong></a></li>
                        <li><a href="/icecream"><strong>Ice Cream</strong></a></li>
                        <li><a href="/candy"><strong>Candy</strong></a></li>
                        <li><a href="/menu"><strong>Our Menu</strong></a></li>
                    </ul>
                </div>
            </nav>
        </header>
        )
}
}

export default Menubar;
import React, { Component } from 'react';
import Menubar from "./components/Menubar";
import HamburgerMenu from "./components/HamburgerMenu";
import Backdrop from "./components/Backdrop";

class App extends Component {

  state ={
    HamMenuOpen: false
  };

  HamMenuToggleClickHandler = () => {
    this.setState((prevState) => {
      return {HamMenuOpen: !prevState.HamMenuOpen};
    });
  };

  render() {
    let hamMenu;
    let backdrop;
    if (this.state.HamMenuOpen){
      hamMenu =  <HamburgerMenu />;
      backdrop = <Backdrop />
    }
    return (
      <div style={{height: '100%'}}>
        <Menubar HamMenuClickHandler={this.HamMenuToggleClickHandler} />
        {hamMenu}
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <h2>THIS IS WHERE STORE INFO WILL BE</h2>
          </main>
      </div>
    );
  }
}

export default App;

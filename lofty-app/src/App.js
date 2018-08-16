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

  backdropClickHandler = () => {
    this.setState({HamMenuOpen: false});
  }

  render() {
    let backdrop;
    if (this.state.HamMenuOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Menubar HamMenuClickHandler={this.HamMenuToggleClickHandler} />
        <HamburgerMenu show={this.state.HamMenuOpen}/>
        {backdrop}
        <main style={{marginTop: '75px'}}>
          <h2>THIS IS WHERE STORE INFO WILL BE</h2>
          </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Menubar from "./components/Menubar";
import HamburgerMenu from "./components/HamburgerMenu";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

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
     
    );
  }
}

export default App;

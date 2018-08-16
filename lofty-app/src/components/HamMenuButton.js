import React from 'react';
import "./component.css";

const HamMenuButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>                
    </button>
);

export default HamMenuButton
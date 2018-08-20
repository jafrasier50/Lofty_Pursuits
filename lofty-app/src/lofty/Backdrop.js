import React from 'react';
import './component.css';


const Backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
);

export default Backdrop
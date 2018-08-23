import React, { Component } from 'react';

import table_Menu from "../images/table_Menu.pdf";

 
class BreakfastMenu extends Component {
  
 
    render() {
    
 
        return (
            <div>
                <embed classNames="breakfastpdf" src={table_Menu} style={{width: "100%", height: "auto" }}/>
            </div>
        );
    };
};

export default BreakfastMenu;

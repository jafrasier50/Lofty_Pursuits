import React from 'react';
import PropTypes from "prop-types"
import inventorylogo from "../images/inventorylogo.svg";

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>See this button down over here? If you own the store you can push it.</p>
        <button onClick={() => props.authenticate("Facebook")}>
            Inventory Login
        </button>
        <div className="inventory-logo">
            <img src={inventorylogo}/>
        </div>
    </nav>

);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;
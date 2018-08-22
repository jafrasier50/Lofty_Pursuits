import React from 'react';
import PropTypes from "prop-types"

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's Inventory</p>
        <button onClick={() => props.authenticate("Facebook")}>
            Inventory Login
        </button>
        <div className="inventory-logo">
        
        </div>
    </nav>

);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;
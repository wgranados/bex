import React, { Component } from 'react';
import Select from 'react-select';

class Login extends Component  {
    render() {
        return (
            <center>
                <div id="login">
                    <h3>Login</h3>
                    <p>Email: <input></input></p>
                    <p>Password: <input></input> </p>
                    <button>reset password</button>
                    <button>link facebook</button>
                </div>
            </center>
        );
    }
}

export default Login;
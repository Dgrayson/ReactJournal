import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import "./Login.css"; 

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { authenticated: false };

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event){
        console.log("Handling submit"); 
        this.setState({ authenticated: true}); 
        console.log(this.state.authenticated); 
        event.preventDefault(); 
    }

    render() {
        if (this.state.authenticated) {
            console.log("Redirecting"); 
            return <Redirect to="/Home" />
        }

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="Email" bsSize="Large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus   
                            type="Email"
                        />
                    </FormGroup>
                    <FormGroup controlId="Password">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type="password"
                        />
                    </FormGroup>
                    <Button bsSize="large" type="submit" block>
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;

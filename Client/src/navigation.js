import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav} from "react-bootstrap";
import './Style.css';

class TopBar extends Component {
    render(){
        return <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React Journal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>

                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default TopBar;
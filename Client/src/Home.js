import React, { Component } from 'react';
import logo from './logo.svg';
import './Style.css';
import { Redirect } from 'react-router';
import Entries from './Entries'; 
import { Button } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { entries: [], addEntry: false, logout: false };

        this.handleOnClick = this.handleOnClick.bind(this); 
        this.logout = this.logout.bind(this); 
    }

    /*callAPI() {
        fetch("http://localhost:9000/api")
            .then(res => res.text())
            .then(res => this.setState({ entries: res }));
    }*/

    handleOnClick(event) {
        this.setState({addEntry: true});
        console.log("ON CLikc"); 
        event.preventDefault(); 
    }

    logout(event) {
        this.setState({ logout: true });
        console.log("ON CLikc");
        event.preventDefault(); 
    }

    render() {

        if(this.state.addEntry)
            return <Redirect to="/New" />
        
        if(this.state.logout)
            return <Redirect to="/" />

        return (
            <div className="home">
                <h2>Your Journal Entries</h2>
                <Entries />
                <span id="addButton">
                    <Button size="md" block onClick={this.handleOnClick} inline>Add Entry</Button>
                </span>
                <Button size="md" block onClick={this.logout} inline>Logout</Button>
            </div>
        );
    }
}

export default Home;
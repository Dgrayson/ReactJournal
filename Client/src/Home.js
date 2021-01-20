import React, { Component } from 'react';
import './Style.css';
import { Redirect } from 'react-router';
import Entries from './Entries'; 
import { Button } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { entries: [], addEntry: false, logout: false, delete: false, edit: false };

        this.handleOnClick = this.handleOnClick.bind(this); 
        this.logout = this.logout.bind(this); 
        this.handleEdit = this.handleEdit.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
    }

    handleOnClick(event) {
        this.setState({addEntry: true});
        console.log("ON CLikc"); 
        event.preventDefault(); 
    }

    handleEdit(event){
        this.setState({edit: true}); 
        event.preventDefault(); 
    }

    handleDelete(event){
        
        this.setState({delete: true})
        event.preventDefault(); 
    }

    logout(event) {
        this.setState({ logout: true });
        event.preventDefault(); 
    }

    render() {

        if(this.state.addEntry)
            return <Redirect to="/New" />
        
        else if(this.state.logout)
            return <Redirect to="/" />
        else if(this.state.edit)
            return <Redirect to="/Edit" />
        else if(this.state.delete)
            return <Redirect to="/Delete" />
        

        return (
            <div className="home">
                <h2>Your Journal Entries</h2>
                <Entries />

                <div id="buttons">
                    <Button size="md" onClick={this.handleOnClick} inline>Add Entry</Button>
                    <Button size="md" onClick={this.handleEdit} inline>Edit</Button>
                    <Button size="md" onClick={this.handleDelete} inline>Delete</Button>
                </div>
            </div>
        );
    }
}

export default Home;
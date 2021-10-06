import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios'; 
import './Style.css';

class Entry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entry: {title: "", description: ""},
            edit: false, 
            home: false, 
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        console.log(event.target.name); 

        if(event.target.name === 'edit')
            this.setState({edit: true}); 
        else if(event.target.name === 'back')
            this.setState({home: true}); 

        event.preventDefault();
    }

    handleSubmit(event){
        event.preventDefault(); 

        const entry = {
            title: this.state.entry.title,
            Entrytext: this.state.entry.description,
        }

        axios.post("http://localhost:3001/api", {entry})
        .then(res => {
            console.log(res); 
        })
    }

    async componentDidMount() {
        axios.get();
    }

    render() {

        const entry = this.state.entry
        const handleOnClick = e => this.handleOnClick(e.target.name); 
        console.log(this.state.edit); 
        if(this.state.edit)
            return <Redirect to={{pathname: '/Edit', state:{entry}}} />
        else if(this.state.home)
            return <Redirect to="/Home" />
        else{
            return (
                <div className="entry">
                    <h1>{entry.title}</h1>
                    
                    <hr />
                    <p>
                        {entry.description}
                    </p>

                    <Button variant="primary" onClick={this.handleOnClick} name="edit">
                        Edit
                    </Button>
                    <Button variant="primary" onClick={this.handleOnClick} name="back">
                        Back
                    </Button>
                </div>
            );
        }
    }
}

export default Entry;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './Style.css';

class Entry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entry: {title: "title1", description: "Early on, most Western accounts of all this had a heavy subtext of “Isn’t Japan wacky?” This tone has slowly given way to a realization that the country’s experience might be less a curiosity than a cautionary tale. Dismal employment prospects played an initial role in driving many men to solitary pursuits—but the culture has since moved to accommodate and even encourage those pursuits. Roland Kelts, a Japanese American writer and longtime Tokyo resident, has described “a generation that found the imperfect or just unexpected demands of real-world relationships with women less enticing than the lure of the virtual libido.”"},
            edit: false, 
            home: false, 
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        console.log(event.target.name); 

        if(event.target.name == 'edit')
            this.setState({edit: true}); 
        else if(event.target.name == 'back')
            this.setState({home: true}); 

        event.preventDefault();
    }

    async componentDidMount() {

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
                <div className="entryBackground">
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
                </div>
            );
        }
    }
}

export default Entry;

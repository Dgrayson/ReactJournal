import React, { Component } from 'react';
import './Style.css'; 
import { Redirect , withRouter} from 'react-router';
import {Form, FormControl, Button} from 'react-bootstrap'; 

class NewEntry extends Component {

  constructor(props) {
    super(props);
    this.state = { entry: {}, submitted: false , goBack: false};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this); 

  }

  checkProps(newProps){

    console.log(newProps.location.entry); 
    if(null != newProps)  
      this.setState({entry: newProps}); 
  }

  handleSubmit(event) {
    console.log("ahndling se");
    this.setState({ submitted: true });
    event.preventDefault();
  }

  handleOnClick(event){
    this.setState({goBack: true}); 
    event.preventDefault(); 
  }

  render(){

    if(this.state.submitted)
      return <Redirect to="/Home" />
    else if(this.state.goBack)
      return <Redirect to="/Home" />

    return (
      <Form onSubmit={this.handleSubmit} className="Form">
        <Form.Group>
          <Form.Label inline>Title
          </Form.Label>
          <Form.Control as="input" inline defaultValue={this.state.entry.title}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Journal Text: 

            
          </Form.Label>
          <Form.Control as="textarea" rows="5" defaultValue={this.state.entry.description}></Form.Control>
        </Form.Group>
        <input className = "btn btn-primary" type="submit" value="Submit" />
        <Button onClick={this.handleOnClick}>Go Back</Button>
      </Form>
    );
  }
}

export default withRouter(NewEntry);
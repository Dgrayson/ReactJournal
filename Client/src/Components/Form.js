import React, { Component, useState } from 'react';
import '../Style.css'; 
import { Redirect , withRouter} from 'react-router';
import {Form, Button} from 'react-bootstrap'; 
import axios from 'axios'; 

const NewEntry = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [goBack, setBack] = useState(false)

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const entry = {title: title, Entrytext: description}

    axios.post("http://localhost:3001/api", {entry})
    .then(res => {
        console.log("Posting data: " + entry.title); 
    }).catch(
      error => {if(error.response){
        console.log(error.response.data); 
      }
    }
    )
  }

  const handleOnClick = (e) => {
    setBack(true)
  }

  if(submitted)
    return <Redirect to="/Home" />
  else if(goBack)
    return <Redirect to="/Home" />

  return (
    <Form onSubmit={handleSubmit} className="Form">
        <Form.Group>
          <Form.Label>Title
          </Form.Label>
          
          <input defaultValue={title} onChange={handleTitleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Journal Text: 

            
          </Form.Label>
          <Form.Control as="textarea" rows="5" defaultValue={description} onChange={handleDescriptionChange}></Form.Control>
        </Form.Group>
        <input className = "btn btn-primary" type="submit" value="Submit" />
        <Button onClick={handleOnClick}>Go Back</Button>
      </Form>
  )
}

// class NewEntry extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { title: "test", description: "test", submitted: false , goBack: false};

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleOnClick = this.handleOnClick.bind(this); 
//     //this.handleTitleChange = this.handleTitleChange(this); 
//     //this.handleDescriptionChange = this.handleDescriptionChange(this); 
//   }


//   handleTitleChange(e)
//   {
//     this.setState({title: e.target.value}); 
//   }

//   handleDescriptionChange(e){
//     this.setState({description: e.target.value}); 
//   }

//   checkProps(newProps){
//     console.log(newProps.location.title); 
//     if(null != newProps)  
//       this.setState({entry: newProps}); 
//   }

//   handleSubmit(event) {
//     event.preventDefault(); 

//     const entry = {
//       title: this.state.title,
//       Entrytext: this.state.description,
//     }

//     console.log("Current Entry is: " + entry.title); 

//     axios.post("http://localhost:3001/api", {entry})
//     .then(res => {
//         console.log("Posting data: " + entry.title); 
//     }).catch(
//       error => {if(error.response){
//         console.log(error.response.data); 
//       }
//     }
//     )
//   }

//   handleOnClick(event){
//     this.setState({goBack: true}); 
//     event.preventDefault(); 
//   }

//   render(){

//     if(this.state.submitted)
//       return <Redirect to="/Home" />
//     else if(this.state.goBack)
//       return <Redirect to="/Home" />

//     return (
//       <Form onSubmit={this.handleSubmit} className="Form">
//         <Form.Group>
//           <Form.Label>Title
//           </Form.Label>
          
//           <input defaultValue={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>
//             Journal Text: 

            
//           </Form.Label>
//           <Form.Control as="textarea" rows="5" defaultValue={this.state.description} onChange={this.handleDescriptionChange.bind(this)}></Form.Control>
//         </Form.Group>
//         <input className = "btn btn-primary" type="submit" value="Submit" />
//         <Button onClick={this.handleOnClick}>Go Back</Button>
//       </Form>
//     );
//   }
// }

export default withRouter(NewEntry);
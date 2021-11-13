import React, { Component, useState } from 'react';
import '../Style.css';
import { Redirect } from 'react-router';
import Entries from './Entries'; 
import { Button } from 'react-bootstrap';

const Home  = () => {

    const [entries, setEntries] = useState([])
    const [addEntry, setAddEntry] = useState(false)
    const [logout, setLogout] = useState(false)
    const [del, setDelete] = useState(false)
    const [edit, setEdit] = useState(false)

    const handleOnClick = (e) => {
        setAddEntry(true)
        e.preventDefault(); 
    }

    const handleDelete = (e) => {
        setDelete(true); 
        e.preventDefault(); 
    }

    const handleLogout = (e) => {
        setLogout(true); 
        e.preventDefault()
    }

    if(addEntry)
        return <Redirect to="/New " />
    else if(logout)
        return <Redirect to="/" />
    else if(del)
        return <Redirect to="/Delete" />
    
    return ( <div id="flex-container">
                <div className="home">
                    <h2>Your Journal Entries</h2>
                    <Entries />

                    <div id="buttons">
                        <Button size="md" onClick={handleOnClick}>Add Entry</Button>
                        <Button size="md" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>

            </div>
    )
}

// class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { entries: [], addEntry: false, logout: false, delete: false, edit: false };

//         this.handleOnClick = this.handleOnClick.bind(this); 
//         this.logout = this.logout.bind(this); 
//         this.handleDelete = this.handleDelete.bind(this); 
//     }

//     handleOnClick(event) {
//         this.setState({addEntry: true});
//         console.log("ON CLikc"); 
//         event.preventDefault(); 
//     }


//     handleDelete(event){
        
//         this.setState({delete: true})
//         event.preventDefault(); 
//     }

//     logout(event) {
//         this.setState({ logout: true });
//         event.preventDefault(); 
//     }

//     render() {

//         if(this.state.addEntry)
//             return <Redirect to="/New" />
        
//         else if(this.state.logout)
//             return <Redirect to="/" />
//         else if(this.state.delete)
//             return <Redirect to="/Delete" />
        

//         return (
//             <div id="flex-container">
//                 <div className="home">
//                     <h2>Your Journal Entries</h2>
//                     <Entries />

//                     <div id="buttons">
//                         <Button size="md" onClick={this.handleOnClick}>Add Entry</Button>
//                         <Button size="md" onClick={this.handleDelete}>Delete</Button>
//                     </div>
//                 </div>

//             </div>
//         );
//     }
// }

export default Home;
import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import {Table} from "react-bootstrap"; 
import {Link} from "react-router-dom"; 
import '../Style.css';
import axios from 'axios'; 


const Entries = () => {
    const [entriesList, setEntries] = useState([])

    const renderTable = (entry) => {
        // return (
        //     <tr key={entry.id}>
        //         <td><span><Link to="/entry/:id">{entry.title}</Link></span></td>
        //     </tr>
        // )
    }

    useEffect(() => {
        axios("http://localhost:3001/api/entries")
            .then(res => {
                setEntries(res.data)       
                console.log("Setting entries")          
            }).catch(
                error => {if(error.response){
                console.log(error.response.data); 
            }
        }); 
    }, [])

    return (
        <div id="table">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>Title</th>
                    </tr>

                    {
                        if(entriesList !== undefined)
                            entriesList.map(entry => this.renderTable(entry.entry))
                    }

                </tbody>
            </Table>

        </div>
    )
}

// class Entries extends Component {

//     constructor(props){
//         super(props); 
//         this.state = {entries: []}; 

//     }

//     async componentDidMount() {

//         var entriesList = [{"title":"test","Entrytext":"test"}]; 

//         await axios("http://localhost:3001/api")
//             .then(res => {
//                 entriesList = res.data; 
//                 this.setState({entries: entriesList});                 
//             }).catch(
//                 error => {if(error.response){
//                   console.log(error.response.data); 
//                 }
//         }); 
        
//         console.log("Entries are: " + entriesList);
//         this.setState({entries: entriesList});   
//     }



//     renderTable(entry) {
//         return (
//             <tr key={entry.id}>
//                 <td><span onClick=""><Link to="/entry/:id">{entry.title}</Link></span></td>
//             </tr>
//         )
//     }

//     render() {

//         const entries = this.state.entries; 
//         return (

//             <div id="table">
//                 <Table striped bordered hover>
//                     <tbody>
//                         <tr>
//                             <th>Title</th>
//                         </tr>

//                         {entries.map(entry =>
//                             this.renderTable(entry)                           
//                         )}

//                     </tbody>
//                 </Table>

//             </div>
//         );  
//     }
// }

export default Entries;
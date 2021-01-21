import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "react-bootstrap"; 
import {Link} from "react-router-dom"; 
import './Style.css';
import axios from 'axios'; 

class Entries extends Component {

    constructor(props){
        super(props); 
        this.state = {entries: []}; 

    }

    async componentDidMount() {

        let entriesList = []; 

        await axios("http://localhost:9000/api")
            .then(res => {
                entriesList = res.data; 
                this.setState({entries: entriesList}); 
                console.log("Entries are " + entriesList); 
                
            })

        console.log("Entries are " + entriesList); 
        console.log("Component did mou8tn run"); 
    }



    renderTable(entry) {
        return (
            <tr key={entry.id}>
                <td><input type="checkbox" /></td>
                <td><Link to={"/Entry"}>{entry.Title}</Link></td>
            </tr>
        );
    }

    render() {

        const entries = this.state.entries; 
        return (

            <div id="table">
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>

                        {entries.map(entry =>
                            this.renderTable(entry)
                        )}

                    </tbody>
                </Table>

            </div>
        );  
    }
}

export default Entries;
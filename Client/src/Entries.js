import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "react-bootstrap"; 
import {Link} from "react-router-dom"; 

class Entries extends Component {

    constructor(props){
        super(props); 
        this.state = {entries: [
            {id: 1, title: "Entry 1"}, 
            { id: 2, title: "Entry 2" }, 
            { id: 3, title: "Entry 3" }, 
            { id: 4, title: "Entry 4" }, 
            { id: 5, title: "Entry 5" }, 
        ]}; 
    }

    callAPI(){
        fetch("http://localhost:9000/api")
            .then(res => res.text())
            .then(res => this.setState({ entries: res }));
    }

    renderTable(entry) {
        return (
            <tr key={entry.id}>
                <td>{entry.id}</td>
                <td><Link to={"/Entry"}>{entry.title}</Link></td>
            </tr>
        );
    }

    render() {

        const entries = this.state.entries; 
        return (

            <div>
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
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProjectPage extends Component {
    constructor() {
        super();

        this.state = {
            project: ''
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:7001/api/projects/${this.props.match.params.id}`)
            .then(response => {
                this.setState({project: response.data})
            })
    }

    render() {
        if (this.state.project) {

            return (
                <div>
                <p>Project ID: {this.state.project.id}</p>
                <h2>Name: {this.state.project.name}</h2>
                <p>Description: {this.state.project.description}</p>
                <p>Completed: {this.state.project.completed.toString()}</p>
                <h3>Actions:</h3> {this.state.project.actions.map(action => 
                <div>
                    <p>Action ID: {action.id}</p>
                    {/* <p>Project ID: {action.project_id}</p> */}
                    <p>Description: {action.description}</p>
                    <p>Notes: {action.notes}</p>
                    <p>Completed: {action.completed.toString()}</p>
                    <hr/>
                    
                </div>
                )}
                <Link to="/">Home</Link>
            </div>
        )
    } else {
        return (<div>Loading...</div>)
    }
    }
}

export default ProjectPage;
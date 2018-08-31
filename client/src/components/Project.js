import React, { Component } from 'react';

class Project extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>Project ID: {this.props.project.id}</p>
                <h2>Name: {this.props.project.name}</h2>
                <p>Description: {this.props.project.description}</p>
                <p>Completed: {this.props.project.completed.toString()}</p>
                <hr/>
            </div>
        )
    }
}

export default Project;
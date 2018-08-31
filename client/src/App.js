import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Project from './components/Project';
import ProjectPage from './components/ProjectPage';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:7001/api/projects')
      .then(response => {
        this.setState({projects: response.data})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>My list of projects:</h1>
        {this.state.projects.map(project => <Route exact path="/" render={props => (<div className="linkToRoute"><Link to={`/${project.id}`}><Project project={project} {...props} /></Link></div>)} />)}
        <Route path="/:id" render={props => <ProjectPage {...props} />} />
      </div>
    );
  }
}

export default App;

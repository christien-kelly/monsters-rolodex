import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // When a component method renders do this function.
  componentDidMount()  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users}))
    .catch(error => console.log("API endpoint was unreachable."))
  }

  render() {
    return (
      <div className="App">
      <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;

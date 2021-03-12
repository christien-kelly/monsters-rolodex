import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // make sure the context of this is correct | USE ARROW FUNCTIONS
    // this.handleChange = this.handleChange.bind(this);
  }

  // When a component method renders do this function.
  componentDidMount()  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users}))
    .catch(error => console.log("API endpoint was unreachable."))
  }

  // arrow functions give a lexical scoping...
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    const filteredMonsters  = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SearchBox 
          placeholder='search monsters'
          handleChange ={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

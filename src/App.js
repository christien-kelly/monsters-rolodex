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
  }

  // When a component method renders do this function.
  componentDidMount()  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users}))
    .catch(error => console.log("API endpoint was unreachable."))
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
          handleChange ={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {render} from '@testing-library/react';
import './card-list.component';
import {CardList} from './card-list.component';
import './search-box.component';
import { SearchBox } from './search-box.component';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      monsters: [],
      searchField: '',
      searchField1: '',
    };
  }
   

  componentDidMount () {
    fetch ('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json ())
      .then (users => this.setState ({monsters: users}));
  }
  handleChange=e=>{
    this.setState({searchField:e.target.value});
    this.setState({searchField1:e.target.value});
  };
  render () {
    //concept of destructuring 
    //pull properties of an object and set them as constant.


    const {monsters,searchField} =this.
    state;
    const filteredMonster=monsters.filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()),monster=>monster.email.toLowerCase().includes(searchField.toLocaleLowerCase()))


    


    //passing flitered monster to the cardlist below.

    //we are pulling searchfield value and monsters value in the const.


    //this is equal to 
    //const monster=this.state.monster;
    //const searchfield =this.state.searchField;

    return (
      <div className="App">

      <SearchBox
      placeholder='search monster'
      handleChange={e=>this.setState({searchField:e.target.value})}
      
       />
       <h1>MONSTERS ROLODEX</h1>
        < CardList monsters={filteredMonster} />

      </div>
    );
  }
}

export default App;

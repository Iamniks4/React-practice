import React, { Component } from 'react';
import Person from './Person';

class App extends React.Component {
  state = {
    persons: [
      {id: 'hgchgc', name: 'nikhil', age: 23},
      {id: 'uubcfh', name: 'pooja', age: 45},
      {id: 'ytydjh', name: 'ved', age: 47},
    ],
    showPersons: false
  }
  showOrHideToggle = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  deletePersonHandler = (personIndex) => {
    const olderPersons = [...this.state.persons]
    //alternatively do this:- const olderPersons = this.state.olderPersons.splice()
    olderPersons.splice(personIndex, 1);
    this.setState({ persons: olderPersons })
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    //alternatively do this const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }
  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            )
          })}
      </div>
      )
    }
    return (
      <div className='App'>
        <button
          onClick={this.showOrHideToggle}
        >
          Toggle
        </button>
       {persons}
      </div>
    )
  }
}
export default App;
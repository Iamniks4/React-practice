import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
      { id: 'hgchgc', name: 'nikhil', age: 23 },
      { id: 'uubcfh', name: 'pooja', age: 45 },
      { id: 'ytydjh', name: 'ved', age: 47 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('App.js componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js should component update')
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
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
    // this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 })
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }
  loginHandler = () => {
    this.setState({ authenticated: true })
  }
  render() {
    console.log('App.js render')
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
      )
    }
    return (
      <div className='App'>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
        {this.state.showCockpit && <Cockpit 
          toggle={this.showOrHideToggle}
          showPersons={this.state.showPersons}
          title={this.props.appTitle}
          persons={this.state.persons} />}
        {persons}
        </AuthContext.Provider>
      </div>
    )
  }
}
export default App;
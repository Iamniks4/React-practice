import React from 'react';
import Person from './Person/Person';


class Persons extends React.Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('Persons.js getDerivedStateFromProps');
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons.js shpuldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true
        }
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons.js getSnapShotBeforeUpdate');
        return {previousProps: prevProps};
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log('Persons.js componentDidUpdate');
        console.log(snapShot,'-------------------///');
    }
    componentWillUnmount() {
        console.log('Persons.js component unmount')
    }
    render() {
        console.log('Persons.js rendering...');
        return this.props.persons.map((person, index) => {
            return (
            <Person
                click={() => this.props.clicked(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} />
            )
        });
    }
}
// const Persons = (props) => {
//     console.log('Persons.js rendering...');
//     return props.persons.map((person, index) => {
//         return (
//         <Person
//             click={() => props.clicked(index)}
//             key={person.id}
//             name={person.name}
//             age={person.age}
//             changed={(event) => props.changed(event, person.id)} />
//         )
//     });
// }
export default Persons;
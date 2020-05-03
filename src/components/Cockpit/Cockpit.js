import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('Cockpit.js useEffect---------');
        // setTimeout(() => {
        //     alert('SavedData from the cloud')
        // }, 1000)
        toggleButtonRef.current.click();
        return (()=>{
            console.log('cleanup work using the useEffect React Hook');
        })
    }, []);
    useEffect(() => {
        console.log('Cockpit.js 2nd useEffect');
        return(() => {
            console.log('cleanup work in 2nd useEffect');
        })
    })
    let textToBeDisplayed = 'This is really working!!!';
    const classes = [];

    if (props.persons.length <= 2) {
        classes.push('red');
    }

    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    if (props.persons.length < 1) {
        textToBeDisplayed = 'This is really not working anymore!!';
    }

    const style = {
        backgroundColor: 'green',
        color: 'white',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }
    if (props.showPersons) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }
    return (
        <div>
            <p><b>{props.title}</b></p>
            <p className={classes.join(' ')}>{textToBeDisplayed}</p>
            <button
                ref={toggleButtonRef}
                style={style}
                onClick={props.toggle}
            >
                Toggle
        </button>
        {/* <AuthContext.Consumer>
            {(context) => <button onClick={context.login}>Log in</button>}
        </AuthContext.Consumer> */}
        <button onClick={authContext.login}>Log in</button>
        </div>
    );
}
export default Cockpit;
import React from 'react';
import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
const StyledDiv = styled.div`
width: 60%:
margin: 16px auto;
border: 1px solid black:
box-shadow: 0 2px 3px black;
padding: 16px;
text-align: center;
@media (min-width : 500px) {
    width: 450px
}
`

class Person extends React.Component {
    
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js rendering...!!');
        const style = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }
        return (
            <Aux>
            <StyledDiv>
            {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>}
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>}
                </AuthContext.Consumer> */}
                <p onClick={this.props.click}>My name is {this.props.name} and i am {this.props.age} years old</p>
                <input
                    type='text'
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    placeholder='enter name if blank'
                    onChange={this.props.changed}
                    value={this.props.name} />
                {/* </div> */}
            </StyledDiv></Aux>
        )
    }
}
// const Person = (props) => {
//     console.log('Person.js rendering...!!');
//     const style = {
//         '@media (min-width: 500px)': {
//             width: '450px'
//         }
//     }
//     return (
//         //  <div> 
//         <StyledDiv>
//             <p onClick={props.click}>My name is {props.name} and i am {props.age} years old</p>
//             <input type='text' placeholder='enter name if blank' onChange={props.changed} value={props.name} />
//             {/* </div> */}
//         </StyledDiv>
//     );
// }

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number

};

export default withClass(Person, 'testClassName');
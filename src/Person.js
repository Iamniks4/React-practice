import React from 'react';
import styled from 'styled-components';
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

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    const rnd = Math.random();
    if(rnd > 0.7) {
        throw new Error('Something Went Wrong!!')
    }
     return (
        //  <div> 
        <StyledDiv>
             <p onClick={props.click}>My name is {props.name} and i am {props.age} years old</p>
             <input type='text' placeholder='enter name if blank' onChange={props.changed} value={props.name}/>
         {/* </div> */}
         </StyledDiv>
     );
 }
 export default Person;
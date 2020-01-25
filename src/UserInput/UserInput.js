import React from 'react';
const UserInput = (props) => {
    return (
        <div className='userInputClass'>
            <label>username : </label><input type='text' onChange={props.changed} />
        </div>
    )
}
export default UserInput;
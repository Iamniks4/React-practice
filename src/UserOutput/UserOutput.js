import React from 'react';
const UserOutput = (props) => {
    return (
        <div className='userOutputClass'>
            <p>this text which shows the user name will get overwritten as shown in the text</p>
            <p>{props.userName ? props.userName : 'nikhil'}</p>
        </div> 
    )
}
export default UserOutput;
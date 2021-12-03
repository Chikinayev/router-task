import React from 'react';
import {Navigate} from 'react-router-dom';

const Friends = ({isLoggedIn}) =>{
    return(
        <div className="friends">
            <h1><strong>My friends</strong></h1>
            {isLoggedIn ? <Friends />:<Navigate to="/login" replace />}
        </div>
    )
}  


export default Friends;
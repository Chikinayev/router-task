import React from 'react';
import {Navigate} from 'react-router-dom';

const Profile =({isLoggedIn})=>{
    return(
        <div className="profile">
            <h1><strong>Profile Page</strong></h1>
            {isLoggedIn ? <Profile />:<Navigate to="/login" replace />}
        </div>
    )
}


export default Profile;
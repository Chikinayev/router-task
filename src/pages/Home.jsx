import React from 'react';
import { useNavigate,Navigate } from 'react-router-dom';


const Home = ({isLoggedIn}) =>{
    
    const navigate =useNavigate()
    return(
        <div className="home">
            <h1><strong>Welcome to the homepage!</strong></h1>
            <h2>You are not authed! Please login in to the system</h2>
            {isLoggedIn ? <button onClick={()=>{navigate('/profile')}}>Profile</button>:<Navigate to="/login" replace />}
        </div>
    )
}  


export default Home;
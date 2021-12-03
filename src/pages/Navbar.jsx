import React from 'react';
import {Link} from "react-router-dom";


const linkStyle = {
  textDecoration: "none",
  color: 'white'
};

const Navbar = ()=>{
    return(
      <div className='navbars'>
        <Link style={linkStyle} to='/'>Home</Link>
        <Link style={linkStyle} to='/Profile'>Profile</Link>
        <Link style={linkStyle} to='/Friends'>Friends</Link>
        <Link style={linkStyle} to='/login'>Login</Link>
      </div>
    )
}
export default Navbar;
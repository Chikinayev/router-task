import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './pages/Navbar';
import Error from './pages/Error';
import Friends from './pages/Friends';
// import {useAuth} from 'react';
import Login from './pages/Login';
import './App.css';



// function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }


function App() {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
            <Route path="*" element={<Error />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

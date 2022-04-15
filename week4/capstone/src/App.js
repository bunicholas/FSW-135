import './App.css'
import React from 'react';
import About from './About.js'
import Contact from './Contact.js'
import Home from './Home.js'
import './'
import './Contact.js'
import Axios from 'axios'
import {
  BrowserRouter,
  Routes,
  Route,
  renderMatches,
} from "react-router-dom";
function App() {
  return (
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
    </Routes>
</BrowserRouter>
  );
}
export default App;
  
  // return(
  //  <div className="App">
  //    <h1>Profile</h1>
  //    <nav className="navbar">
  //   <ul>
  //      <li><a className="link"href="home.js">Home</a></li>
  //      <li><a className="link"href="about.js">About</a></li>
  //      <li><a className="link"href="contact.js">Contact</a></li>
  //      <li><a className="link"href="#signup">Signup</a></li>
  //      <li><a className="link"href="#login">Login</a></li>
  //   </ul>
  //    </nav>
  //   </div> 
  // );
  // }



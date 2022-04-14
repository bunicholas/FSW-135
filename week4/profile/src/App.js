import './App.css';
import { render } from "react-dom";
function App() {
  return (
    <div className="App">
     <h1>Profile</h1>
     <nav class="navbar">
    <ul>
       <li><a class="link"nav="home.js">Home</a></li>
       <li><a class="link"href="about.js">About</a></li>
       <li><a class="link"href="contact.js">Contact</a></li>
       <li><a class="link"href="#signup">Signup</a></li>
       <li><a class="link"href="#login">Login</a></li>
    </ul>
     </nav>
    </div>
  );
}

export default App;

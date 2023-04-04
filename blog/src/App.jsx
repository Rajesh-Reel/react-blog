import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  const mainTitle = "Welcome to the react blog";
  const likes = 76;

  return (
    <div className="App">
    <Navbar></Navbar>
      <div>
        <h1>{mainTitle}</h1>
        <p>Post liked by {likes} people</p>
      </div>
    </div>
  )
}

export default App

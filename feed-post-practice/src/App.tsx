import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/HomePage/Homepage';
import {Route, Routes} from 'react-router-dom';
import Signup from './components/Signin/Signup';
import Login from './components/Signin/Login';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Signin" element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App;

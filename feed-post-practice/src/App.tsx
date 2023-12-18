import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './components/Signin/Login';
import Homepage from './components/HomePage/Homepage';
import {Route, Routes} from 'react-router-dom';
import Signup from './components/Signin/Signup';


function App() {
  return (
    <div>
      <Homepage></Homepage>
      <Routes>
      <Route path="/" element={ <Homepage /> }/>
        {/* <Route path='/' element={<Homepage/>}></Route> */}
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default App;

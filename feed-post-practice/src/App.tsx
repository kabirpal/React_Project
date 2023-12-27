import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/HomePage/Homepage';
import {Route, Routes} from 'react-router-dom';
import Signup from './components/Signin/Signup';
import Login from './components/Signin/Login';
import Navbar from './components/Navbar/Navbar';
import Feed from './components/Feed/Feed';
import DeleteAlert from './components/Alerts/DeleteAlert';


function App() {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <Routes>
                <Route path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/Signup" element={<Signup></Signup>}></Route>
                <Route path="/Signin" element={<Login></Login>}></Route>
                <Route path='/Feed' element={<Feed/>}></Route>
                <Route path='/Delete' element={<DeleteAlert/>}></Route>
                </Routes>
            </div>
        </>
    )
}

//style={{justifyContent: "center", display: "flex"}}
export default App;

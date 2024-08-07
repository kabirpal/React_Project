import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus?'🟢':'🔴'}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <li onClick={()=>( 
                        btnName==='Login'?
                        setBtnName('Logout'):
                        setBtnName('Login'))}>{btnName}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGlobe,faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = (props) => {

    console.log("here is navbar "+ props.loginUser)

    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    // logout user the logout function is coming from App.js and it is passed as props to Homestay.js and then to Navbar.js

    const handleLogout = () => {
        props.logoutUser();
        navigate('/')
    }

    const backHome = () => {
        navigate('/')
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="navLogo" onClick={backHome}> BookMyHomestay</span>
                <div className="navMenu">
                    {/* <button className="navButton">Register</button> */}
                    {props.loginUser ? (
                        <button className="navButton" onClick={handleLogout}>Logout</button>
                    ) : (
                        <button className="navButton" onClick={handleLogin}>Login</button>
                    )}


                    {/* implement favorite list logic here */}
                    <div className="favoriteList">
                        <FontAwesomeIcon icon={faHeart} className="favoriteIcon" />
                        <span className="favoriteCount">0</span>
                    </div>
                    {/* implement multiple language logic here */}
                    <div className="languageSelection">
                        <FontAwesomeIcon icon={faGlobe} className="languageIcon" onClick={() => setShowDropdown(!showDropdown)} />
                        {showDropdown && (
                            <div className="languageDropdown">
                                <div className="languageOption" onClick={() => alert('English Selected')}>Korean</div>
                                <div className="languageOption" onClick={() => alert('Chinese Selected')}>Chinese</div>
                                <div className="languageOption" onClick={() => alert('Brazilian Selected')}>Brazilian</div>
                            </div>
                        )}
                    </div>
                    {/*Welcome message*/}
                    <div className="welcomeMessage">
                        {/* if login user is null then show welcome guest else show welcome user */}
                        {props.loginUser? (
                            <span>Welcome {props.loginUser && props.loginUser.fname} {props.loginUser && props.loginUser.lname}</span>
                        ) : (
                            <span>Welcome Guest</span>
                        
                        )}
                        
                        <FontAwesomeIcon icon={faUser} style={{ marginLeft: '20px', fontSize: '1.5rem' }}/>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Navbar;
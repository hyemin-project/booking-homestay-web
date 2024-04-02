import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGlobe } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);


    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="navLogo">BookMyHomestay</span>
                <div className="navMenu">
                    {/* <button className="navButton">Register</button> */}
                    <button className="navButton">Login</button>


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
                    <div className="welcomeMessage">Welcome, Guest</div>

                </div>

            </div>
        </div>
    )
}


export default Navbar;
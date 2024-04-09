import Footer from "../footer/Footer";
import Header from "../header/Header"; import Navbar from "../navbar/Navbar";
import "./favoriteList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FavoriteList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.loginUser == null) {
            navigate('/login');
        }
    }, [])

    const saveHandler = () => {
        console.log(props.favorites);
        props.favorites.toSave();
        alert("Favorite List saved");
    }

    return (
        <>
            {/* pass login user and logout function to navbar */}
            <Navbar loginUser={props.loginUser} logoutUser={props.logout} countFav={props.countFav} />
            <div className="listContainer">
                <div className="listWrapper">

                    <div className="favoriteList_page">
                        <div className="fav_title_div">
                            <h1>Favorite List</h1>
                            <button
                                type="button"
                                className="btn btn-outline-primary fav_save" onClick={saveHandler}>
                                Save
                            </button>
                        </div>

                        <div className="favoriteDisplay">
                            {/* check if props.favorites is not null, then map through the favorites array and display each favorite */}

                            {props.favorites?.favorite ? (props.favorites.favorite.map((item, index) => {
                                return (
                                    //searchItem
                                    <div className="favoriteCard" key={item.id}>
                                        <p>{index+1}</p>
                                        <div className="siImg-wrapper">
                                            <img src={item.image_path} alt="favorite" className="siImg_fav" />
                                        </div>

                                        <div className="favoriteInfo-wrapper">
                                            <div className="favoriteInfo">
                                                <h5 className="favoriteTitle">{item.title}</h5>
                                                {/* <h5 className="favoriteRate">{item.rating}</h5> */}
                                                {/* <p className="favoriteDescription">{item.desc}</p> */}
                                                <button className="seeAvailability">Book this Home</button>
                                            </div>

                                            <div className="favoriteDetails">
                                                <h5 className="favoritePrice">$ {item.price_per_month}/month</h5>
                                                <p className="favoriteIncludeMsg">Include tax and fee</p>
                                            </div>
                                        </div>



                                    </div>
                                )
                            })) : (
                                <p>List is empty!</p>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )


}

export default FavoriteList;
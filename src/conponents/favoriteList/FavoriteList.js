
import Navbar from "../navbar/Navbar";
import "./favoriteList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FavoriteList = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.loginUser == null) {
            alert("Please login first!!");
            navigate('/login');
        }
    }, [])

    // const saveHandler = () => {
    //     console.log(props.favorites);
    //     props.favorites.toSave();
    //     alert("Favorite List saved");
    // }
    console.log("favorite list page" + props.favorites.getFavoritesList())
    console.log("is empty "  + props.favorites.isFavoriteEmpty())

    function convertRatingToStar(rating) {
        rating = Number(rating)
        let star = '';
        for (let i = 0; i < rating; i++) {
            star += '★';
        }
        return star;
    }

    const backHome = () => {
        navigate('/');
    }
    return (
        <>
            {/* pass login user and logout function to navbar */}
            <Navbar loginUser={props.loginUser} logoutUser={props.logout} countLike={props.countLike} />
            <div className="listContainer">
                <div className="listWrapper">

                    <div className="favoriteList_page">
                        {/* <div className="fav_title_div">
                            <h1>Favorite List</h1>
                            <button
                                type="button"
                                className="btn btn-outline-primary fav_save" onClick={saveHandler}>
                                Save
                            </button>
                        </div> */}
                        < div className="wishlist-header">
                                    <h1>♥ My Dream Homestay Wishlist ♥</h1>
                        </div>
                        <div className="favoriteDisplay">
                            {/* check if props.favorites is not null, then map through the favorites array and display each favorite */}

                            {
                                props.favorites && !props.favorites.isFavoriteEmpty() ? (
                                    props.favorites.getFavoritesList().map((favHome, index) => {
                                    return (
                                        //searchItem
                                      
                                        <div className="favoriteCard" key={favHome.id}>

                                            <p>{index + 1}</p>
                                            <div className="siImg-wrapper">
                                                <img src={favHome.image_path} alt="favorite" className="siImg_fav" />
                                            </div>
                                            <div className="favoriteInfo-wrapper">
                                                <div className="favoriteInfo">
                                                <h5 className="favoriteTitle">{favHome.title}</h5>
                                                <h5 className="favoriteRate"> {convertRatingToStar(favHome.rating)}
                                                <span className="homestayRatetext">&nbsp;{favHome.rating}</span>
                                                </h5> 
                                                <p className="favoriteDescription">{favHome.desc}</p>
                                                <p className="amenities">{favHome.amenities.join(", ")}</p>
                                                <button className="seeAvailability">Book this Home</button>
                                                </div>
                                                <div className="favoriteDetails">
                                                    <h5 className="favoritePrice">$ {favHome.price_per_month}/month</h5>
                                                    <p className="favoriteIncludeMsg">Include tax and fee</p>
                                                </div>
                                            </div>
           
                                        </div>
                                            
                                    );
                                    })
                                ) : (
                                    <button className="emptyListMessage" onClick={backHome}>Make your dream come true !</button>
                                )
                                }
                        </div>
                    </div>
                </div>
            </div>
                
        </>
    )


}

export default FavoriteList;
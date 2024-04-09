import "./homestayList.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HomestayObj } from "../../class/Favorite";
import Pagination from './Pagination';

const HomestayList = (props) => {
    const navigate = useNavigate();
    const [favoriteMark, setFavoriteMark] = useState(false);

    const [postsNum, setPostsNum] = useState(props.homestays);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
  
    const firstPostIndex = (currentPage - 1) * postsPerPage;
    const lastPostIndex = firstPostIndex + postsPerPage;

    function convertRatingToStar(rating) {
        rating = Number(rating)
        let star = '';
        for (let i = 0; i < rating; i++) {
            star += '★';
        }
        return star;
    }

    const clickFavorite = (homestay) => {
        if (props.loginUser != null) {
            setFavoriteMark(!favoriteMark);
            let homeObj = new HomestayObj(homestay.id, homestay.title, homestay.desc, homestay.location, homestay.rating, homestay.price_per_month, homestay.amenities, homestay.vegetarian_friendly, homestay.image_path);
            props.favorite(homeObj);

        } else {
            alert("Only login user can use the favorite list!");
            navigate('/login');
        }
    }


    return (
        <>
            <div className="homestayList">
                <div className="listResultTitle">

                    {/* search bar */}
                    <div className="searchResult">
                        <h4>Vancouver: 20 search results found</h4>
                    </div>

                    {/* sorted button here */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sorted by recommended
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Sorted by price (high to low)</Dropdown.Item>
                            <Dropdown.Item >Sorted by price (low to high)</Dropdown.Item>
                            <Dropdown.Item >Sorted by rate&nbsp;  (high to low)</Dropdown.Item>
                            <Dropdown.Item >Sorted by rate&nbsp; (low to high)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="homestayDisplay">
                    {/* check if props.homestays is not null, then map through the homestays array and display each homestay */}
                    {props.homestays && props.homestays.map((homestay) => {
                        return (
                            //searchItem
                            <div className="homestayCard" key={homestay.id}>

                                {/* implement add to like list logic here */}
                                <div className={favoriteMark ? "likeIcon" : "likeIcon liked clicked"} onClick={() => clickFavorite(homestay)}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>

                                <div className="siImg-wrapper">
                                    <img src={homestay.image_path} alt="homestay" className="siImg" />
                                </div>

                                <div className="homestayInfo-wrapper">
                                    <div className="homestayInfo">
                                        <h5 className="homestayTitle">{homestay.title}</h5>
                                        <h5 className="homestayRate"> {convertRatingToStar(homestay.rating)}<span className="homestayRatetext">&nbsp;{homestay.rating}</span></h5>
                                        <p className="homestayDescription">{homestay.desc}</p>
                                        <button className="seeAvailability">See Availability</button>
                                    </div>

                                    <div className="homestayDetails">
                                        <h5 className="homestayPrice">$ {homestay.price_per_month}/month</h5>
                                        <p className="homestayIncludeMsg">Include tax and fee</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                    {/* <Pagination
                        postsNum={postsNum.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    /> */}
                </div>
            </div>
        </>
    )


}

export default HomestayList;
import "./homestayList.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {useState,useEffect} from 'react';
const HomestayList = (props) => {
    
    const [homestayCount, setHomestayCount] = useState(null);
    

    useEffect(() => {
        if (props.matchingHomestays) {
            setHomestayCount(props.matchingHomestays.length);
        }
    }, [props.matchingHomestays]);

    

    function convertRatingToStar(rating) {
        rating = Number(rating)
        let star = '';
        for (let i = 0; i < rating; i++) {
            star += '★';
        }
        return star;
    }

  
    return (
        <>
            <div className="homestayList">
                <div className="listResultTitle">
                    {/* search bar */}
                    <div className="searchResult">
                        {props.loginUser == null ? (
                            <h3>We've found {homestayCount} results for you!</h3>
                        ) : (
                            <>
                                <h4>Hi {props.loginUser.fname}, we've found {homestayCount} results based on your preferences.</h4>
                                {props.matchingHomestays.length > 0 && (
                                     <h4 className="mostValuableHomestay">
                                     <span className="mostValuableHomestayTitle">{props.matchingHomestays[0].title}</span> stands out as the perfect homestay for you!
                                 </h4>
                                 
                                )}
                            </>
                        )}
                    </div>


                    {/* sorted button here */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sorted by recommended
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        {/* check if user is logged in, if yes, display recommended by score */}
                        {props.loginUser && (
                                <Dropdown.Item onClick={() => props.handleSort('recommended')}>
                                    Recommended by Score
                                </Dropdown.Item>
                            )}
                            <Dropdown.Item onClick={()=>props.handleSort('priceHigh')} >Sorted by price (high to low)</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.handleSort('priceLow')}>Sorted by price (low to high)</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.handleSort('rateHigh')}>Sorted by rate&nbsp;  (high to low)</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.handleSort('rateLow')}>Sorted by rate&nbsp; (low to high)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="homestayDisplay">
                    {/* check if props.homestays is not null, then map through the homestays array and display each homestay */}
                    {props.matchingHomestays && props.matchingHomestays.map((homestay) => {
                        return (
                            //searchItem
                            <div className="homestayCard" key={homestay.id}>

                                {/* implement add to like list logic here */}
                                <div className="likeIcon" onClick={() => alert('like')}>
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
                                        <p className = "amenities">{homestay.amenities.join(", ")}</p>
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

                </div>
            </div>
        </>
    )


}

export default HomestayList;
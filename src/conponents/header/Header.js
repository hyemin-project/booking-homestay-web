import "./header.css";
import { LoremIpsum } from 'lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    // Create an instance of the LoremIpsum class
     const lorem = new LoremIpsum();
    // Generate 25 "words" of Lorem Ipsum text
    const loremText = lorem.generateWords(25);

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        {/* <div className ="headerListItem">
                        </div> */}
                    </div>
                </div>



                <h1 className ="headerTitle">Start to find your amazing homestay</h1>
                <p className="headerDesc">
                        {loremText}
                </p>
                <button className="headerButton">Sign in / Register</button>

                <div className="headerSearch">
                    <div className ="headerSearchItem">
                        <FontAwesomeIcon icon={faHouse} className="headerIcon" />
                        <input type="text" placeholder="Search for your homestay" className="headerSearchInput" />
                    </div>

                    <div className ="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText">date to date</span>
                    </div>

                    <div className ="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">1 people</span>
                    </div>

                    <div className ="headerSearchItem">
                        <button className="headerButton-1">Search</button>
                    </div>
                </div>
            
            </div>
        </div>
   
    )
}

export default Header;
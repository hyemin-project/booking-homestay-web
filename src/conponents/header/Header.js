import "./header.css";
import { LoremIpsum } from 'lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const Header = (props) => {

    // Create an instance of the LoremIpsum class
     const lorem = new LoremIpsum();
    // Generate 25 "words" of Lorem Ipsum text
    const loremText = lorem.generateWords(25);

    const [headerText, setHeaderText] = useState("Search by homestay name");

    useEffect(() => {
        if (props.language === 'kr') {
            setHeaderText("최고의 홈스테이를 찾아보세요");
        } else if (props.language === 'ch') {
            setHeaderText("开始寻找您惊艳的民宿");
        } else if (props.language === 'br') {
            setHeaderText("Comece a encontrar sua incrível hospedagem");
        } else {
            setHeaderText("Start to find your amazing homestay");
        }
    }, [props.language]);


    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        {/* <div className ="headerListItem">
                        </div> */}
                    </div>
                </div>



                <h1 className ="headerTitle">{headerText}</h1>
                <p className="headerDesc">
                        {loremText}
                </p>
                <button className="headerButton">Sign in / Register</button>

                <div className="headerSearch">
                    <div className ="headerSearchItem">
                        <FontAwesomeIcon icon={faHouse} className="headerIcon" />
                        <input type="text" placeholder="Vancouver" className="headerSearchInput" />
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
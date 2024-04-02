import "./header.css";
import { LoremIpsum } from 'lorem-ipsum';

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
            </div>
        </div>
   
    )
}

export default Header;
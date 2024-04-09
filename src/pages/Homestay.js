import Header from '../conponents/header/Header';
import Navbar from '../conponents/navbar/Navbar';
import Footer from '../conponents/footer/Footer';   
import HomestayList from '../conponents/homestayList/HomestayList';
import "./css/homestay.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import FileService from "../services/FileService"

const Homestay = (props) => {

    const [language, setLanguage] = useState(null);

    const [homestays,setHomestay] = useState(null);

    const [favorite, setFavorite] = useState(props.favorite);

    const [searchPlaceholder, setSearchPlaceholder] = useState("Search by homestay name");

    let jsonFileName = "homestay";
    // read user data from json file
    useEffect(() => {
        
        if(language!=null){
            jsonFileName = "homestay_"+language;
        }

        FileService.read(jsonFileName).then(
            (response) => {
                setHomestay(response.data);
                console.log(response.data);
            },

            (rej) => {
                console.log(rej);
            }
        )

        if (language === 'kr') {
            setSearchPlaceholder("홈스테이 이름으로 검색");
        } else if (language === 'ch') {
            setSearchPlaceholder("按民宿名称搜索");
        } else if (language === 'br') {
            setSearchPlaceholder("Pesquisar pelo nome da hospedagem");
        } else {
            setSearchPlaceholder("Search by homestay name");
        }

    }, [language]);

    const getLanguage =(newVal)=>{
        setLanguage(newVal);
    }

    const clickFavorite =(newVal)=>{
        setFavorite((prevFavorite) => {
            prevFavorite.addOrRemoveFavorite(newVal);
            return prevFavorite;
          });
          props.favorites(favorite);
          
    };

    return (
      
        <div>
            {/* pass login user and logout function to navbar */}
            <Navbar loginUser={props.loginUser} logoutUser={props.logout} language={getLanguage} countFav={props.countFav} />
            <Header language={language}/>
            <div className ="listContainer">
                <div className="listWrapper">

                    {/* display homestay search bar  */}
                    <div className ="listSearch">
                        <div className="searchBar">
                            <h5>{searchPlaceholder}</h5>
                            <div className="searchInput">
                                <input type="text" placeholder="eg. Sky High Condo" />
                                <button type="button" className="searchButton">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* display homestay list */}
                    <div className="listResult">

                        <HomestayList homestays={homestays} loginUser={props.loginUser} favorite={clickFavorite} />

                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
           
    )
}


export default Homestay;
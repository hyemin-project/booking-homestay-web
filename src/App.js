import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homestay from "./pages/Homestay";
import FileService from "./services/FileService";
import Link from "./conponents/link/Link";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Favorite from "./class/Favorite";
import FavoriteList from "./conponents/favoriteList/FavoriteList";




function App() {

  const [users, setUsers] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  const [favorite, setFavorite] = useState(null);
  const [countFav, setCountFav] = useState(0);
  // const [homestays, setHomestay] = useState(null);

  // read user data from json file
  useEffect(() => {
    FileService.read("user").then(
      (response) => {
        setUsers(response.data);
        console.log(response.data);
      },
      (rej) => {
        console.log(rej);
      }
    )

  }, [])


  // login 
  const Auth = (userObj) => {
    for (let user of users) {
      if (user.email === userObj.email && user.pass === userObj.pass) {
        setLoginUser(user);
        setFavorite(new Favorite(user.id));
      }
    }
    console.log("login success");
    console.log("user login logniUser is " + loginUser + " " + userObj.fname + " " + userObj.lname);
  }

  // log out user
  const logoutUser = () => {
    setLoginUser(null);

  }

  const moveFavoriteList = (newVal) => {
    setFavorite(newVal);
    setCountFav(newVal.favorite.length);
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link loginUser={loginUser} />}>
          <Route index element={<Homestay loginUser={loginUser} logout={logoutUser} favorites={moveFavoriteList} favorite={favorite} countFav={countFav}/>} />
          <Route path="fav" element={<FavoriteList loginUser={loginUser} logout={logoutUser} favorites={favorite} countFav={countFav} />} />
          <Route path="login" element={<Login auth={Auth} loginUser={loginUser} />} />

          {/* <Route path="logout" element={<Logout  />} />
              <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homestay from "./pages/Homestay";
import FileService from "./services/FileService";
import Link from "./conponents/link/Link";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import { AES, enc } from "crypto-js";
import { client, admin } from "./class/user";
import Favorite, { HomestayObj } from './class/favoriteList'

import FavoriteList from "./conponents/favoriteList/FavoriteList"
import { set } from "mongoose";



function App() {

  const [countLike, setCountLike] = useState(0);
  const [users, setUsers] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  // user favorite list object -> initialize empty favorite list to avoid null pointer exception
  const [favoriteListObj, setFavoriteListObj] = useState(new Favorite(null));

  // const [homestays, setHomestay] = useState(null);

  // read user data from json file
  useEffect(() => {
    FileService.read("user").then(
      (response) => {
        setUsers(response.data);
        // console.log(response.data);
      },
      (rej) => {
        console.log(rej);
      }
    )

    const encryptedUser = sessionStorage.getItem("loginUser");
    // console.log("encrypted user is "+ encryptedUser)
    if (encryptedUser) {
      const decryptedUser = AES.decrypt(encryptedUser, 'webdev').toString(enc.Utf8);
      // console.log("decrypted user is "+ decryptedUser)
      if (decryptedUser) {
        let tmpUser = JSON.parse(decryptedUser);
        // console.log("decrypted user is "+ tmpUser)
        setLoginUser(tmpUser);
      }
    }

  }, [])


  useEffect(() => {
    if (loginUser) {
      const cipherUser = AES.encrypt(JSON.stringify(loginUser), 'webdev').toString();
      sessionStorage.setItem('loginUser', cipherUser);
    } else {
      sessionStorage.removeItem('loginUser');
    }

  }, [loginUser]);




  // login 
  const Auth = (userObj) => {

    let foundUser = null;
    // iterate through the users array to find the user
    for (let user of users) {
      if (user.email === userObj.email && user.pass === userObj.pass) {
        foundUser = user;
        break;
      }
    }

    let tmpUser = null;
    // if user is found, set the loginUser state to the found user
    if (foundUser) {

      if (foundUser.type === 'admin') {

        tmpUser = new admin(foundUser.id, foundUser.fname, foundUser.lname, foundUser.email, foundUser.pass, foundUser.gender, foundUser.type);
        console.log(" new admin tmpUser created " + tmpUser.fname + " " + tmpUser.lname + " " + tmpUser.email + " " + tmpUser.pass + " " + tmpUser.gender + " " + tmpUser.type + "" + tmpUser.budget)
        
     
      }

      if (foundUser.type === 'client') {

        tmpUser = new client(foundUser.id, foundUser.fname, foundUser.lname, foundUser.email, foundUser.pass, foundUser.gender, foundUser.vegetarian, foundUser.budget, foundUser.location, foundUser.type);
      
       
      }

      console.log("founder user is " + foundUser.id + " " + foundUser.fname + " " + foundUser.lname + " " + foundUser.email + " " )

      const tmpFavoriteList = new Favorite(foundUser.id);
      const storedFavoriteList = localStorage.getItem(tmpUser.id);
      console.log("data from local storage " + storedFavoriteList)


      if (storedFavoriteList) {

        const favoritesArray = JSON.parse(storedFavoriteList);
        console.log("user id " + tmpUser.id + " read favorite list from local storage" + favoritesArray)
        for (let fav of favoritesArray) {
          try {
            let homeObj = new HomestayObj(
              fav.hid, fav.title, fav.desc, fav.location, fav.rating,
              fav.price_per_month, fav.amenities, fav.vegetarian_friendly, fav.image_path
            );
            console.log("Created HomestayObj:", homeObj.title);
            // add the homestay object to the favorite list
            tmpFavoriteList.populateDataToObj(homeObj); 
            console.log("list size " + tmpFavoriteList.getFavoriteSize());

            // set the count of likes to the size of the favorite list
            setCountLike(tmpFavoriteList.getFavoriteSize());
           
            
          } catch (error) {
            console.error("Failed to create HomestayObj:", error);
          }

     
        }


      }
      // set the favorite list object to the temporary favorite list
      setFavoriteListObj(tmpFavoriteList);
      console.log("login success");
    }

    if (tmpUser) {
      setLoginUser(tmpUser);
      console.log("login success");
    }
    // if user is not found, alert user not found
    else {
      console.log("login failed");
      alert("Login failed: User not found or incorrect password")
      setLoginUser(null);
    }

    console.log("user login logniUser is " + loginUser + " " + userObj.fname + " " + userObj.lname);
  }


  // log out user
  const logoutUser = () => {
    setLoginUser(null);
    setFavoriteListObj(new Favorite(null));
    setCountLike(0);
    sessionStorage.removeItem('loginUser');
  }

  //handle count like 
  const handleCountLike = (isLike) => {
    if (isLike) {
      setCountLike(countLike + 1);
   
    } else {

      setCountLike(countLike - 1);

    }
    console.log("click like number " + countLike);
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link loginUser={loginUser} />}>
          <Route index element={<Homestay loginUser={loginUser} logout={logoutUser} countLike={countLike} handleCountLike={handleCountLike} favoriteListObj={favoriteListObj} />} />
          <Route path="login" element={<Login auth={Auth} loginUser={loginUser} countLike={countLike} />} />
          <Route path="admin" element={<Admin loginUser={loginUser} logout={logoutUser} users={users} countLike={countLike} />} />
          <Route path="fav" element={<FavoriteList loginUser={loginUser} logout={logoutUser} countLike={countLike} favorites={favoriteListObj} handleCountLike={handleCountLike}  />} />
          {/* <Route path="logout" element={<Logout  />} />
              <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

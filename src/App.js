import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Homestay from "./pages/Homestay";
import FileService from "./services/FileService";
import Link from "./conponents/link/Link";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";
import {AES, enc} from "crypto-js";
import {client, admin} from "./class/user";


function App() {

  const [users,setUsers] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
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

      const encryptedUser = sessionStorage.getItem("loginUser");
      console.log("encrypted user is "+ encryptedUser)
      if (encryptedUser) {
        const decryptedUser = AES.decrypt(encryptedUser, 'webdev').toString(enc.Utf8);
        console.log("decrypted user is "+ decryptedUser)
        if (decryptedUser) {
          let tmpUser = JSON.parse(decryptedUser);
          console.log("decrypted user is "+ tmpUser)
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

        let foundUser = null ;
        // iterate through the users array to find the user
        for (let user of users){
          if(user.email === userObj.email && user.pass === userObj.pass){
            foundUser = user;
            break; 
          }
        }

        let tmpUser = null;
        // if user is found, set the loginUser state to the found user
        if(foundUser){

          if (foundUser.type === 'admin') {
            
            tmpUser = new admin(foundUser.id,foundUser.fname,foundUser.lname,foundUser.email,foundUser.pass,foundUser.gender,foundUser.type);
            console.log(" new admin tmpUser created " + tmpUser.fname + " " + tmpUser.lname + " " + tmpUser.email + " " + tmpUser.pass + " " + tmpUser.gender+ " " + tmpUser.type)
          }

          if (foundUser.type === 'client') {
            tmpUser = new client(foundUser.id,foundUser.fname,foundUser.lname,foundUser.email,foundUser.pass,foundUser.gender,foundUser.vegetarian,foundUser.budget,foundUser.location,foundUser.type);
           
      
          }
          
          console.log("login success");
        }

        if (tmpUser) {
          setLoginUser(tmpUser);
          console.log("login success");
        }
        // if user is not found, alert user not found
        else{
          console.log("login failed");
          alert("Login failed: User not found or incorrect password")
          setLoginUser(null);
        }
      
        console.log("user login logniUser is "+ loginUser+" "+userObj.fname + " " + userObj.lname);
      }

  // log out user
  const logoutUser =() =>{
    setLoginUser(null);
    sessionStorage.removeItem('loginUser');
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link loginUser={loginUser} />}>
              <Route index element={<Homestay loginUser={loginUser} logout={logoutUser} />}/>  
              <Route path="login" element={<Login auth={Auth} loginUser={loginUser} />} />
              <Route path="admin" element={<Admin loginUser={loginUser} logout={logoutUser} users={users}/>} />
              {/* <Route path="logout" element={<Logout  />} />
              <Route path="*" element={<NoPage />} /> */} 
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;

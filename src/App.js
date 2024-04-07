import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Homestay from "./pages/Homestay";
import FileService from "./services/FileService";
import Link from "./conponents/link/Link";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";




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

  }, [])


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

        
        // if user is found, set the loginUser state to the found user
        if(foundUser){
          setLoginUser(foundUser);
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

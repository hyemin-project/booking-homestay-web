import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Homestay from "./pages/Homestay";
import FileService from "./services/FileService";
import Link from "./conponents/link/Link";
import Login from "./pages/Login";
import Logout from "./pages/Logout";




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
    for (let user of users){
      if(user.email === userObj.email && user.pass === userObj.pass){
        setLoginUser(user);
      
      }
    }
    console.log("login success");
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

              {/* <Route path="logout" element={<Logout  />} />
              <Route path="*" element={<NoPage />} /> */} 
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;

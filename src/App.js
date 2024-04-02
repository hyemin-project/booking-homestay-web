import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Homestay from "./pages/Homestay";
// import Link from "./pages/Links";
import Login from "./pages/Login";
import Logout from "./pages/Logout";








function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homestay />}>
              <Route index element={<Homestay />}/>  
         
              {/* <Route path="login" element={<Login  />} />
              <Route path="logout" element={<Logout  />} />
              <Route path="*" element={<NoPage />} /> */}
          </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;

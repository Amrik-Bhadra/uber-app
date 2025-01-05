import React from "react";
import Home from "./pages/Home";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
import CaptainLogin from "./pages/Captain/CaptainLogin";
import CaptainSignup from "./pages/Captain/CaptainSignup";
import UserDashboard from "./pages/User/UserDashboard";
import { Route, Routes } from "react-router-dom";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/User/UserLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainsignup" element={<CaptainSignup />} />
        <Route
          path="/userdashboard"
          element={
            <UserProtectWrapper>
              <UserDashboard />
            </UserProtectWrapper>
          }
        />

        <Route path='/userlogout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        }/>
      </Routes>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import logo from "../assets/uberlogo.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const handleSubmit = (e)=>{
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUserData({
            email: email,
            password: password
        });
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between gap-y-3">
      <div>
        <img src={logo} alt="Uber Logo" className="w-14 mb-10" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            required
            className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold w-full rounded px-4 py-3">
            Login
          </button>

          <p className="text-center mt-5">
            New Here? <Link to='/usersignup' className="text-blue-600 ml-1">Create new account</Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captainlogin"
          className="flex justify-center bg-[#2fbf71] text-white font-semibold w-full rounded px-4 py-3"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

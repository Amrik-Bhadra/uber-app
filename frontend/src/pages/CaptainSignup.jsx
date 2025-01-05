import React, { useState } from "react";
import logo from "../assets/uber-driver.svg";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
    });
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between gap-y-3">
      <div>
        <img src={logo} alt="Uber Logo" className="w-14 mb-6" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What's your Name?</h3>
          <div className="flex gap-x-2">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              required
              className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              required
              className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            required
            className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <h3 className="text-lg font-medium mb-2">Confirm Password</h3>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            required
            className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold w-full rounded px-4 py-3">
            Register
          </button>

          <p className="text-center mt-5">
            Already have account?{" "}
            <Link to="/captainlogin" className="text-blue-600 ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;

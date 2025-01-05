import React, { useContext, useState } from "react";
import logo from "../../assets/uberlogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../context/UserContext";
import toast from "react-hot-toast";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        newUser
      );
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setConfirmPassword("");
        toast.success("User Registered Successfully!");
        navigate("/userlogin");
      }
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between gap-y-3">
      <div>
        <img src={logo} alt="Uber Logo" className="w-14 mb-10" />
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
            <Link to="/userlogin" className="text-blue-600 ml-1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;

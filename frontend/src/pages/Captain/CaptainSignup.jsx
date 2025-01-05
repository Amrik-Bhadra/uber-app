import React, { useContext, useState } from "react";
import logo from "../../assets/uber-driver.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../../context/CaptainContext";
import toast from "react-hot-toast";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState(null);
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        type: vehicleType,
        number: vehicleNumber,
        color: vehicleColor,
        capacity: vehicleCapacity,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData
      );
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setConfirmPassword("");
        toast.success("Captain Registered Successfully!");
        navigate("/captainlogin");
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between gap-y-3">
      <div>
        <img src={logo} alt="Uber Logo" className="w-14 mb-6" />
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-2">
          <span>
            <h3 className="text-base font-medium mb-2">What's your Name?</h3>
            <div className="flex gap-x-2">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                required
                className="bg-[#f9f9f9] mb-4 rounded px-4 py-2 w-1/2 text-lg placeholder:text-sm"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                required
                className="bg-[#f9f9f9] mb-4 rounded px-4 py-2 w-1/2 text-lg placeholder:text-sm"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </span>

          <span>
            <h3 className="text-base font-medium mb-2">What's your email?</h3>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              required
              className="bg-[#f9f9f9] mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>

          <span>
            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              className="bg-[#f9f9f9] mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>

          {/* New Vehicle Fields */}
          <div className="flex gap-x-3">
            <span className="w-1/2">
              <h3 className="text-base font-medium mb-2">Vehicle Type</h3>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="bg-[#f9f9f9] mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-sm"
              >
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </span>

            <span className="w-1/2">
              <h3 className="text-base font-medium mb-2">Vehicle Number</h3>
              <input
                type="text"
                placeholder="Enter Vehicle Number"
                value={vehicleNumber}
                required
                className="bg-[#f9f9f9] mb-4 rounded px-4 py-2 w-full text-sm placeholder:text-sm"
                onChange={(e) => setVehicleNumber(e.target.value)}
              />
            </span>
          </div>

          <div className="flex gap-x-3">
            <span className="w-1/2">
              <h3 className="text-base font-medium mb-2">Vehicle Color</h3>
              <input
                type="text"
                placeholder="Enter Vehicle Color"
                value={vehicleColor}
                required
                className="bg-[#f9f9f9] mb-4 rounded px-4 py-2 w-full text-sm placeholder:text-sm"
                onChange={(e) => setVehicleColor(e.target.value)}
              />
            </span>

            <span className="w-1/2">
              <h3 className="text-base font-medium mb-2">Vehicle Capacity</h3>
              <select
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="bg-[#f9f9f9] mb-7 rounded px-4 py-2 w-full text-sm"
              >
                {[1, 2, 3, 4, 5, 6].map((capacity) => (
                  <option key={capacity} value={capacity}>
                    {capacity}
                  </option>
                ))}
              </select>
            </span>
          </div>

          <button className="bg-[#111] text-white font-semibold w-full rounded px-4 py-3">
            Register
          </button>

          <p className="text-center mt-5">
            Already have an account?{" "}
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

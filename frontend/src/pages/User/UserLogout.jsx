import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 201) {
        localStorage.removeItem("token");
        navigate("/userlogin");
        toast.success("User Loggedout Successfully!");
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Logout Failed');
    });

  return <div></div>;
};

export default UserLogout;

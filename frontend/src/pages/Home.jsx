import React from 'react';
import logo from '../assets/logo-white.png';
import homeimage from '../assets/home-image.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
        className="h-screen w-full bg-red-400 flex justify-between flex-col pt-8 bg-cover"
        style={{ backgroundImage: `url(${homeimage})` }} 
      >
        <img src={logo} alt="Uber Logo" className="w-14 ml-8" />
        <div className="bg-white px-4 py-4">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link to='/userlogin' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-3">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

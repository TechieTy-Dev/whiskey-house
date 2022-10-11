import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="w-full nav">
    <ul className="text-white text-[18px] w-[350px] gap-[60px] flex flex-row text-center">
      <img src={logo} alt="logo" className="w-18 mt-4 ml-8" />
      <li className="absolute right-[63%] mt-6 hover:underline"><a href="/">Home</a></li>
      <li className="absolute right-[50%] mt-6 hover:underline"><a href="/Products">Products</a></li>
      <li className="absolute right-[36%] mt-6 hover:underline"><a href="/About">Our Story</a></li>
      <button className="hover:scale-110 w-32 text-center border-solid px-1 py-1 border-2 border-white bg-black float-right mt-6 right-6 absolute ">Contact Us</button>
    </ul>
  </div>
  )
}

export default Navbar
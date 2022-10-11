import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer w-full h-[30vh] flex">
    <div className='w-[50%] text-white ml-12 mt-8'>
      <img src={logo} alt="logo" />
      <p>1234 Grand Square</p>
      <p> Austin, Texas 78701</p>
      <p>512-501-2022</p>
    </div>
    <div className='w-[50%] text-white text-right mt-8 mr-4 my-2 gap-y-4'>
      <ul>
        <li className="my-4"><a className="text-[18px]" href="/">Home</a></li>
        <li className="my-4"><a className="text-[18px]" href="/Products">Products</a></li>
        <li className="my-4 "><a className="text-[18px]" href="/About">Our Story</a></li>
        <li className="my-4"><a className="text-[18px]" href="/">Contact Us</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Footer
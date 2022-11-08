import React from 'react'
import bottle from '../assets/Whisky.png'
const Card = () => {
  return (
    <div className="card w-3/4 mt-[2.5rem] ml-[6.25rem] text-center ">
    <img src={bottle} alt="bottle" className='ml-12' />
    <p className="w-[87px] h-[19px] text-[16px] font-light ml-[85px] mb-[-10px]">15 Year Old</p>
    <p className="w-[270px] h-[48px] font-light text-[26px] text-center mt-[30px] ">Malted Barley & New American Oak</p>
    <p className="w-[8rem] h-[1rem] font-normal text-[.75rem] text-center mt-[2rem] ml-16">ABV: 45% | VOL: 750 ML</p>
    <p className="font-normal mt-[2rem] ml-16 text-[1.5rem] w-1/3 h-[2rem]">$295.00</p>
    <div className="flex w-60">
    <input type="number" className=" mt-6 w-[4.5rem] ml-6 border-2 border-solid text-center border-black h-[4rem]" placeholder='Qty.' />
    <button className='ml-2 mt-6 w-[9rem] h-[4rem] bg-black text-white hover:opacity-90'>Add to Cart</button>
    </div>
  </div>
  )
}

export default Card
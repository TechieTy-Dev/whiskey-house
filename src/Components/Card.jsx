import React from 'react'
import bottle from '../assets/Whisky.png'
const Card = () => {
  return (
    <div className="card w-1/3 mt-[40px]  ml-[100px] ">
    <img src={bottle} alt="bottle" className='ml-8' />
    <p className="w-[87px] h-[19px] text-[16px] font-light ml-[85px] mb-[-10px]">15 Year Old</p>
    <p className="w-[270px] h-[48px] font-light text-[26px] text-center mt-[30px] ">Malted Barley & New American Oak</p>
    <p className="w-[144px] h-[14px] font-normal text-[12px] text-center mt-[30px] ml-12">ABV: 45% | VOL: 750 ML</p>
    <p className="font-normal mt-[32px] ml-16 text-[26px] w-[103px] h-[31px]">$295.00</p>
    <div className="flex w-60">
    <input type="number" className=" mt-6 w-[75px] border-2 border-solid text-center border-black h-[63px]" placeholder='Qty.' />
    <button className='ml-4 mt-6 w-[150px] h-[63px] bg-black text-white hover:opacity-90'>Add to Cart</button>
    </div>
  </div>
  )
}

export default Card
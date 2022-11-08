import React from 'react'

import product from '../assets/ProductImage.png'
import pic1 from '../assets/flavor1.png'
import pic2 from '../assets/flavor2.png'
import Navbar from './Navbar'
import Footer from './Footer'

const Hero = () => {
  return (
    <div>
    <div className="background w-full h-[110vh] bg-blend-overlay">
      <Navbar />
      <div className="h-[100vh] w-full relative ">
      <h1 className=" w-[750px] absolute top-[15%] left-[25%]">MAKING WHISKEY THE OLD FASHIONED WAY SINCE 1887.</h1>
      <div>
      <div className="vl"></div>
      <span className=" h-[2.25rem] absolute left-[45.5%] top-[88%] text-white"> DISCOVER MORE</span>
      </div>
      </div>
    



    </div>
    <section className="bg-black w-full h-[110vh]">
      <div className='flex'>
      <div className="left w-[50%]">
      <img src={product} alt="product bottle" className="absolute ml-16 blur" />
        <img src={product} alt="product bottle" className="absolute mt-12 ml-32 product " />
      </div>
      <div className="w-[45%] text-center ">
        <hr className="mt-16 line" />
        <span className=" mt-[-12px] mb-16 text-white text-center"> WHO WE ARE</span>
        <h1 className=" h-[230px]">Focused on creating whiskey the right way...</h1>
        <p className=" mt-16 h-[145px] ml-auto mr-auto text-white">Our team has dedicated hours to perfecting the craftsmanship of aging whiskey. With time and patience, we are proud to say the best old fashioned is made from here.</p>
        <button className="text-white mx-4 border-2 border-solid border-white w-[180px] h-[60px] ">Learn More</button>
        <button className="w-[180px] h-[60px] bg-[#A94319] p-1 text-white border-2 border-solid mx-4 border-white mt-12 ">Shop Products</button>
      </div>
      </div>
</section>

<section className="bg-white w-full h-[120vh]">
  <div className="flex ">
  <div className="w-[50%] text-black text-center mt-12">
  <hr className='black-line' />
    <span className='mb-8 font-normal' >WHERE WE COME FROM</span>
    
    <h1 className="font-normal text-black ">The finest barrels sourced straight from Scotland’s local distilleries. </h1>
    <p className="mx-auto mb-4 font-light ">Excellence begins with the best products, from there we outsource the highest quality barrels from Scotland. Our perfectly blended liquor gets added into the barrels and set to age and get better with time.</p>
    <button className='text-white bg-black shadow-md mt-6 w-[180px] h-[60px]'>Schedule a tour</button>
  </div>
  <div className="w-[50%] h-[120vh] barrel"></div>
  </div>
</section>

<section>
  <div className="flex bg-black w-full text-white h-[120vh]" >
    <div className="w-[50%]">
      <img className="mt-6 ml-12 flavor2" src={pic2} alt="pic-2" />
      <img className="flavor1 ml-48 mt-[-150px]  " src={pic1} alt="pic 1"/>
     
    </div>
    <div className="w-[50%] mt-8">
      <hr className="mt-12 line" />
      <span className=" mt-[-12px] ml-[250px] h-[35px] font-normal">WHAT WE OFFER</span>
      <h1 className=' mt-6 text-center h-[216px] font-normal'>Enjoy the best experience with exquisite flavors</h1>
      <p className="mx-auto mt-16 font-light w-100 ">Taste up to 10 different seasonal whiskeys while touring our facility for an experience of a lifetime. We bring delicious and distinct flavors while crafting up an entertaining presentation of drinks.</p>
      <h2 className="font-normal ml-32 mt-4 text-[36px]">Seasonal Whiskey Selections</h2>
      <ul className="mb-4 ml-40 font-light list-disc ">
        <li>Roasted Pecan Whiskey</li>
        <li>Smoked Maple Bourbon</li>
        <li>Ginger Spiced Whiskey</li>
        <li>Peanut Butter Whiskey</li>
        <li>Salted Caramel Whiskey</li>
      </ul>
    </div>
  </div>
</section>
<section>
<Footer />
</section>

    </div>
  )
}

export default Hero
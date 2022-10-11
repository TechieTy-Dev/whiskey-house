import React from 'react'

import product from '../assets/ProductImage.png'
import pic1 from '../assets/flavor1.png'
import pic2 from '../assets/flavor2.png'
import Navbar from './Navbar'
import Footer from './Footer'

const Hero = () => {
  return (
    <div>
    <div className="background w-full h-[120vh] bg-blend-overlay">
      <Navbar />
      <div className=" h-[1000px] w-[460px] ">
      <h1 className="w-[939px] h-[460px] absolute left-[20%] top-[30%]">MAKING WHISKEY THE OLD FASHIONED WAY SINCE 1887.</h1>
      <div>
      <div className="vl"></div>
      <p className="w-[230px] h-[36px] absolute left-[46.5%] top-[98%] text-white"> Discover More</p>
      </div>
      </div>
    



    </div>
    <section className="bg-black w-full h-[120vh]">
      <div className='flex'>
      <div className="left w-[50%]">
      <img src={product} alt="product bottle" className="absolute ml-16 blur" />
        <img src={product} alt="product bottle" className="absolute mt-12 ml-32 product " />
      </div>
      <div className="w-[50%] ">
        <hr className="mt-20 line" />
        <p className="text-[20px] mt-[-12px] mb-16 text-white text-center mr-40"> WHO WE ARE</p>
        <h1 className=" mb-12 text-[80px] w-[740px] h-[230px]">Focused on creating whiskey to right way...</h1>
        <p className="w-[680px] text-[24px]  h-[145px] text-white mb-8">Our team has dedicated hours to perfecting the craftsmanship of aging whiskey. With time and patience, we are proud to say the best old fashioned is made from here.</p>
        <button className="text-white mx-4 border-2 border-solid border-white w-[220px] h-[60px] ">Learn More</button>
        <button className="bg-[#A94319] p-1 text-white border-2 border-solid mx-4 border-white mt-12 w-[220px] h-[60px]">Shop Products</button>
      </div>
      </div>
</section>

<section className="bg-white w-full h-[110vh]">
  <div className="container flex">
  <div className="w-[50%] text-black mt-12">
  <hr className='black-line' />
    <p className='mb-8 font-normal text-center' >WHERE WE COME FROM</p>
    
    <h1 className="my-8 font-normal text-black">The finest barrels sourced straight from Scotland’s local distilleries. </h1>
    <p className="font-light text-[24px] ml-20 w-[595px] h-[175px] mb-2">Excellence begins with the best products, from there we outsource the highest quality barrels from Scotland. Our perfectly blended liquor gets added into the barrels and set to age and get better with time.</p>
    <button className='text-white ml-20 bg-black w-[220px] h-[60px]'>Schedule a tour</button>
  </div>
  <div className="w-[50%] h-[110vh] barrel"></div>
  </div>
</section>

<section>
  <div className="flex bg-black w-full text-white h-[120vh]" >
    <div className="w-[50%]">
    <img className="flavor2 w-[548px] ml-12 mt-6 h-[455px]" src={pic2} alt="pic-2" />
      <img className="flavor1 ml-72 mt-[-150px] w-[485px] h-[544px] " src={pic1} alt="pic 1"/>
     
    </div>
    <div className="w-[50%] mt-8">
      <hr className="mt-12 line" />
      <p className="w-[161px] mt-[-12px] ml-[250px] h-[35px] text-[20px] font-normal">WHAT WE OFFER</p>
      <h1 className='w-[635px] mt-12 text-center h-[216px] text-[75px] font-normal'>Enjoy the best experience with exquisite flavors</h1>
      <p className="w-[510px] mt-20 ml-12 h-[215px] font-[24px] font-light">Taste up to 10 different seasonal whiskeys while touring our facility for an experience of a lifetime. We bring delicious and distinct flavors while crafting up an entertaining presentation of drinks.</p>
      <p className="font-normal mt-[-60px] ml-12 text-[36px]">Seasonal Whiskey Selections</p>
      <ul className=" list-disc text-[20px] font-light ml-24 my-4 ">
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
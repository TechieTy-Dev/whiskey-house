import React from 'react'
import logo from '../assets/logo.png'
import Card from '../Components/Card'
import bottle from '../assets/Whisky.png'
import Footer from '../Components/Footer'
import glass from '../assets/unsplash_woLpKjQisW8.png'

const Products = () => {
  return (
    <div>
      
      <section className="w-full h-[100vh] bg-[#E4CAB5] overflow-hidden">
      <div className="w-full nav">
    <ul className="text-[#66361E] text-[18px] w-[350px] gap-[60px] flex flex-row text-center">
      <img src={logo} alt="logo" className="mt-4 ml-8 w-18" />
      <li className="absolute right-[63%] mt-6 hover:underline"><a href="/">Home</a></li>
      <li className="absolute right-[50%] mt-6 hover:underline"><a href="/Products">Products</a></li>
      <li className="absolute right-[36%] mt-6 hover:underline"><a href="/About">Our Story</a></li>
      <button className="absolute float-right w-32 px-1 py-1 mt-6 text-center bg-[#66361E] text-white border-2 border-white border-solid hover:scale-110 right-6 ">Contact Us</button>
    </ul>
  </div>
        <div className="relative">
        <h1 className="bottle-font  text-[#66361E] font-normal text-center w-full lg:text-[9.5rem] lg:tracking-[.5rem] lg:mt-[9rem] relative z-10 lg:leading-[140px] md:text-[8.125rem] md:mt-[9rem]"> Malted  Barley & <br/>  New American Oak</h1>
        <img src={bottle} alt="whisky" className='z-20 w-[600px]  h-[800px] mx-auto relative mt-[-240px]' />
          
         
        </div>
      </section>
      <section className=''>
        <h1 className="text-[#66361E] font-normal mt-10">Our Products</h1>
        <div className="grid grid-cols-1 gap-6 mb-20 card-group md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          <Card />
          <Card/>
          <Card />
          <Card />
          <Card/>
          <Card />
        </div>
      </section>
      <section className="w-full">
        <div className="bg w-full h-[100vh]">
          <div className="flex justify-center w-1/2 mx-[275px] items-center h-screen">
            <div className="flex flex-row newsletter h-[450px]">
            <img src={glass} alt="glass" className="object-cover w-1/3 h-[450px]"/>
            <div className="bg-black newsletter opacity-90 ">
              <h1 className="text-white font-normal text-[60px] leading-[56px] tracking-[10px] w-[605px] mt-5 h-[141px]">Join our Newsletter</h1>
              <p className="text-white font-light text-[24px] leading-[27px] mb-4 text-center w-[555px] h-[57px] tracking-[1px]">And be the first to know about our deals and upcoming events.</p>
              <div className="flex flex-col w-1/2 h-2 mx-auto">
                <form>
              <input 
              type="text"
              placeholder='Name'  
              required
              className="bg-[#E4CAB5] my-2 p-1 w-[230px] text-black" />
              <input 
              type="email"
              placeholder='Email'  
              required  
              className="bg-[#E4CAB5] my-2 p-1 w-[230px] "/>
                <button className="text-white bg-[#A94319] w-[200px] h-[50px] border-2 border-solid border-white mt-4 ml-4">Get Notified</button>
              </form>
              </div>
            
            </div>
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Products
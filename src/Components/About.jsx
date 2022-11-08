import React from 'react' 
import Navbar from './Navbar'
import meeting from '../assets/image 5.png'
import bg4 from '../assets/CurrentImage-2.png'
import barrels from '../assets/CurrentImage-1.png'
import stills from '../assets/stills.png'
import town from '../assets/CurrentImage.png'
import Card from './Card'
import Footer from './Footer'

import '../App.css'

const About = () => {
  return (
<div>
 <section className="w-full h-[110vh] about">
  <Navbar/>
  <div>
    <h1 className="w-[1310px] mt-[40px] mx-[65px] h-[162px] text-[75px]">Whiskey makers from a small town with a big dream</h1>
  </div>
 </section>
 <section className="w-full h-[100vh] bg-black">
  <h1 className='w-[1024px] h-[145px] font-normal text-[75px] tracking-[10px] text-left ml-[93px]'>Behind the scenes of<br/> how the vision began</h1>
  <div className="flex">
    <div className="w-[35%] mt-[75px] ml-[93px]">
      <img src={meeting} alt="meeting" />
    </div>
    <div className="w-[65%] mt-12 ml-[76px]">
      <p className="text-white w-[671px] h-[220px] mt-[24px] mb-[272px] font-light text-[26px]">Qui officia deleniti repellendus ea quia dolorum inventore omnis error. Ut hic rem ut voluptatum sequi nulla eos natus est. Quae inventore esse quaerat quas consequuntur omnis illo reiciendis eos. Harum dignissimos quia aut voluptatibus error similique. Nisi aperiam necessitatibus.</p>
      <p className="text-white text-[26px] font-light w-[671px] h-[140px] mt-[-299px]">Qui officia deleniti repellendus ea quia dolorum inventore omnis error. Ut hic rem ut voluptatum sequi nulla eos natus est. </p>
    </div>
  </div>
 </section>
 
 <section className="flex flex-col w-full ">
   
    
  <div className="flex history h-[100vh]" >
    <div className='z-20 w-[300px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[80px]'>1887</h1>
    </div>
    <div className='w-[700px]'>
      <img src={town} alt="town" className="w-[700px]  mt-[18px] h-[700px]" />
    
    </div>
    <div className='w-[400px]'>
      <p className="text-white mt-[275px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
    

  </div>
  
  <div className="flex history-2 h-[100vh]" >
    <div className='z-20 w-[300px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[80px]'>1957</h1>
    </div>
    <div className='w-[700px]'>
      <img src={stills} alt="town" className="w-[540px] ml-[80px] mt-[80px] h-[515px]" />
    </div>
    <div className='w-[400px]'>
      <p className="text-white mt-[275px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
    <div className="vertical-line"></div>
  </div>
  
  <div className="flex history-3 h-[100vh]" >
    <div className='z-20 w-[300px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[80px]'>1997</h1>
    </div>
    <div className='w-[700px]'>
      <img src={barrels} alt="town" className="w-[700px] mt-[18px] h-[700px]" />
    </div>
    <div className='w-[400px]'>
      <p className="text-white mt-[275px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
    <div className="vertical-line-2"></div>
  </div>

  <div className="flex history-4 h-[100vh]" >
    <div className='z-20 w-[300px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[80px]'>2017</h1>
    </div>
    <div className='w-[700px]'>
      <img src={bg4} alt="town" className="w-[700px] mt-[18px] h-[700px]" />
    </div>
    <div className='w-[400px]'>
      <p className="text-white mt-[275px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
    <div className="vertical-line-3"></div>
  </div>
   
 </section>
 <section  className="w-full mt-auto mb-5 bg-white">
 <h1 className="mt-4 text-center text-black">Most Popular Whiskey</h1>
  <div className='grid grid-cols-3 card-group'>
   
   <Card/>
   <Card/>
   <Card/>
  </div>
 </section>
 <Footer />
 </div>
  )
}

export default About
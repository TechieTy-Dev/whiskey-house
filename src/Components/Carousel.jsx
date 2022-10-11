import React from 'react'
import bg4 from '../assets/CurrentImage-2.png'
import barrels from '../assets/CurrentImage-1.png'
import stills from '../assets/stills.png'
import town from '../assets/CurrentImage.png'

const Carousel = () => {
  return (
   <section>
    <div  className=" carousel w-full h-[100vh] flex flex-col">
    
  <div className=" carousel-item history" >
    <div className='z-20 w-[300px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[120px]'>1887</h1>
    </div>
    <div className='w-[700px]'>
      <img src={town} alt="town" className="w-[700px]  mt-[18px] h-[700px]" />
    
    </div>
    <div className='w-[400px] mr-[200px]'>
      <p className="text-white mt-[275px] text-[24px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
    

  </div>
  
  <div className="flex w-full history-2 carousel-item" >
    <div className='z-20 w-[380px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[120px]'>1957</h1>
    </div>
    <div className='w-[700px]'>
      <img src={stills} alt="town" className="w-[480px] ml-[100px] mt-[80px] h-[505px]" />
    </div>
    <div className='w-[440px]'>
      <p className="text-white mt-[275px] mr-[32px] text-[24px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
  </div>
  
  <div className="flex history-3 carousel-item" >
    <div className='z-20 w-[380px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[120px]'>1997</h1>
    </div>
    <div className='w-[700px]'>
      <img src={barrels} alt="town" className="w-[700px] mt-[18px] h-[700px]" />
    </div>
    <div className='w-[440px]'>
      <p className="text-white mt-[275px] mr-[32px] text-[24px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
  </div>

  <div className="flex history-4 carousel-item" >
    <div className='z-20 w-[380px]'>
      <h1 className='w-[486px] h-[216px] font-normal text-[300px] mt-[324px] ml-[80px]'>2017</h1>
    </div>
    <div className='w-[700px]'>
      <img src={bg4} alt="town" className="w-[700px] mt-[18px] h-[700px]" />
    </div>
    <div className='w-[440px]'>
      <p className="text-white mt-[275px] mr-[32px] text-[24px]">Starting as a small idea from an overly ambitious father and son duo, the business was started at a small town outside Austin. With one single barrel the dream was put into motion, and they never looked back from that moment on.</p>
    </div>
  </div>
  </div>
   </section>
  )
}

export default Carousel
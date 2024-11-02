import React from 'react'

function IntroCard() {
  return (
    <div className="p-[1px] bg-gradient-to-b from-[#0C95C1] to-[#ffff] rounded-2xl">
    <div className="w-min-[119px] px-2  bg-RightSidbar-gradient rounded-2xl w-full">
        <div className='flex'>
            <div className='w-1/3 flex justify-center items-center'>
                <img src='/Depth 4, Frame 0.png' alt='image' />
            </div>
            <div className='w-auto'>
    <p className='gradient-background'>John Cusack</p>

    <p className='text-[10px] text-[#E1B239]'>Primary Admin</p>
    <p className='text-[10px] gradient-background'>Acct #: 8751458851</p>
            </div>

        </div>
      {/* <span className="text-xs gradient-background">National Friends Day 
      
      </span>
      <br/>
      <span className="w-full  text-xs flex justify-center text-[#0C95C1]">
      09/04/2020
      </span> */}
    </div>
  </div>
  )
}

export default IntroCard

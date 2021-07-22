import React from 'react'

function Hero() {
    return (
        <div className= 'h-screen'>
            <div className="relative top-28 text-7xl text-white text-center italic">Party Swipes
            <span className="text-2xl ">®</span></div>

                <div className='relative top-72 text-xl text-center text-white italic hover: cursor-pointer'>
                    Shop <span className="underline">fire merch</span> Lude Made™ for you
                            <div className="create-account pt-10">
                                <a class="
                                absolute left-20 right-20 py-2 mb-10 text-black bg-white 
                                rounded-full text-xl not-italic hover:bg-blue-700
                                transition-all duration-300  ease-in-out  transform  
                                font-extrabold hover:-translate-y-1" href="/#">CREATE ACCOUNT</a>
                             </div>
                             <div className="create-account pt-16">
                                <a class="border-solid border-2 border-white 
                                absolute left-20 right-20 py-2 mb-10 not-italic text-white bg-none 
                                rounded-full text-xl  
                                hover:bg-blue-700
                                transition-all duration-300  ease-in-out  transform  
                                font-extrabold hover:-translate-y-1" href="/#">LOG IN</a>
                             </div>
                
                        </div>
        </div>
    )
}

export default Hero

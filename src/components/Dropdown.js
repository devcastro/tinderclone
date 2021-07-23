import React from 'react'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <>
        <div
             className={
          isOpen
            ? "pl-4 pt-20 -mt-14 flex flex-col justify-start bg-white h-screen"
            : "hidden"
        }
        onClick={toggle}
      > <svg
      className="absolute text-black top-4 right-10 w-5 h-5 sm:w-7 sm:h-7 hover:cursor-pointer lg:invisible" onClick={toggle}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
        <div className='absolute top-4 left-20 text-2xl sm:text-4xl'>lude</div>
        <div className="text-2xl">
            <div className= 'cursor-pointer hover:text-blue-500'>Products</div>
            <div className= 'cursor-pointer hover:text-blue-500'>Learn</div>
            <div className= 'cursor-pointer hover:text-blue-500'>Contact</div>
            </div>
        </div>
        </>
    )
}

export default Dropdown

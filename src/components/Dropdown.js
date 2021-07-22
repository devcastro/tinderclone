import React from 'react'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <>
        <div
             className={
          isOpen
            ? "flex flex-col text-center items-center bg-white h-screen"
            : "hidden"
        }
        onClick={toggle}
      > 
        
            <div className="">
            <div>Products</div>
            <div>Learn</div>
            <div>Contact</div>
            </div>
            </div>
        </>
    )
}

export default Dropdown

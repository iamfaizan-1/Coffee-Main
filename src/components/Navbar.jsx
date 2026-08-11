import React, { useLayoutEffect, useState } from 'react'
import logo from "../assets/coffee-final.png"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useEffect } from "react";


function Navbar() {


 const[isOpen,setIsOpen] = useState(false)





useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) { // lg breakpoint
      setIsOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);






  return (
    <div>




<nav className=" bg-secondary text-white md:px-15 px-6 flex items-center justify-between">

{/* logo */}
  <div className="flex justify-center items-center ">
<img src={logo} className="w-30"  alt="" />
Coffee
  </div>

  {/*Dekstop list */}

<ul className="md:flex hidden gap-5 text-[14px]">
  <li className="hover:scale-[1.05] transition-transform ease-in-out duration-300">Home</li>
  <li className="hover:scale-[1.05] transition-transform ease-in-out duration-300" >Features</li>
  <li className="hover:scale-[1.05] transition-transform ease-in-out duration-300" >Products</li>
  <li className="hover:scale-[1.05] transition-transform ease-in-out duration-300" >Clients</li>
</ul>

{/* button */}

<div className="md:hidden" onClick={()=>{setIsOpen(!isOpen)}}>
 <span className={`transition-transform duration-300  ease-in-out  inline-block ${isOpen ? "rotate-180" : "rotate-0"}`} >
{
  isOpen ? <RxCross2 /> : <RxHamburgerMenu/>
}
 </span>
</div>

</nav>


<ul className={`md:hidden absolute text-white top-[48px]  h-90 gap-5 transtion-tansfrom duration-1000 ease-in-out left-0 w-full z-40 flex flex-col items-center justify-center  overflow-hidden bg-black ${isOpen ? "max-h-90 py-3 " : "max-h-0  py-0"} `} >
     <li>Home</li>
    <li>Features</li>
    <li>Products</li>
    <li>Clients</li>

</ul>



    </div>
  )
}

export default Navbar
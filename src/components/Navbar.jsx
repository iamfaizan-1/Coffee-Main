import React, { useRef, useState } from 'react'
import mylogo from "../assets/coffee-final.png"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from "split-type";

function Navbar() {


const logo  = useRef(null)

const nav = useRef(null)

useGSAP(()=>{
const lists = gsap.utils.toArray(".reveal")

const t1 = gsap.timeline()
t1.from(logo.current,{
  opacity:0,
  duration:1,

})


t1.from(lists,{
  y:10,
  opacity:0,
  stagger:0.3,
  ease:"back.out",
  duration:1.5
})

})


// useGSAP(
//   () => {
//     const lists = gsap.utils.toArray(".reveal");
//     const splits = [];

//     const tl = gsap.timeline();

//     lists.forEach((list) => {
//       const split = new SplitType(list, {
//         types: "chars",
//       });

//       // Store SplitType instance for cleanup
//       splits.push(split);

//       // Initial state
//       gsap.set(split.chars, {
//         yPercent: 100,
//         opacity: 0,
//         clipPath: "inset(100% 0% 0% 0%)",
//         display: "inline-block",
//       });

//       // Animate characters
//       tl.to(
//         split.chars,
//         {
//           yPercent: 0,
//           opacity: 1,
//           clipPath: "inset(0% 0% 0% 0%)",
//           stagger: 0.02,
//           duration: 0.5,
//           ease: "back.out",
          
//         },
//         ">"
//       );
//     });

//     // Logo animation
//     tl.from(
//       logo.current,
//       {
//         opacity: 0,
//         duration: 2,
//       },
//       0
//     );

//     // Cleanup
//     return () => {
//       splits.forEach((split) => {
//         split.revert();
//       });
//     };
//   },
//   {
//     scope: container,
//   }
// );

  
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




<nav ref={nav} className=" bg-secondary text-white md:px-15 px-6 flex items-center justify-between">

{/* logo */}
  <div ref={logo} className="flex justify-center items-center ">
<img src={mylogo} className="w-30"  alt="" />
Coffee
  </div>

  {/*Dekstop list */}

<ul className="md:flex hidden gap-5 text-[14px]">
 <li className="reveal">Home</li>
    <li className="reveal">Features</li>
    <li className="reveal">Products</li>
    <li className="reveal">Clients</li>
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
import React, { useRef, useState, useEffect } from 'react'
import mylogo from "../assets/coffee-final.png"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {

  const container = useRef(null);
  const logo = useRef(null);
  const nav = useRef(null);
  const mobileListRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  // Entrance animation — logo + desktop nav items
  useGSAP(() => {
    const lists = gsap.utils.toArray(".reveal");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // Signal to any listeners (e.g. Hero) that the navbar intro is done
        window.dispatchEvent(new CustomEvent("navbarIntroComplete"));
      },
    });

    tl.from(logo.current, {
      opacity: 0,
      y: -10,
      duration: 0.8,
    }).from(
      lists,
      {
        y: 10,
        opacity: 0,
        stagger: 0.12,
        ease: "back.out(1.7)",
        duration: 0.8,
      },
      "-=0.4"
    );
  }, { scope: container });

  // Mobile menu open/close animation
  useGSAP(() => {
    const items = mobileListRef.current.querySelectorAll("li");

    if (isOpen) {
      gsap.fromTo(
        items,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    } else {
      gsap.set(items, { opacity: 0, y: 20 });
    }
  }, { scope: container, dependencies: [isOpen] });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
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

const handleNavClick = () => {
  setIsOpen(false);
};


  return (
    <div ref={container} id="navbar" >

      <nav ref={nav} className=" bg-secondary text-white md:px-15 px-6 flex items-center justify-between">

        {/* logo */}
        <div ref={logo} className="flex justify-center items-center ">
          <img src={mylogo} className="w-30" alt="" />
          Coffee
        </div>

        {/* Desktop list */}
        <ul className="md:flex hidden gap-5 text-[14px]">
          <a href="#navbar" className="reveal">Home</a>
          <a href="#blogs" className="reveal">Blogs</a>
          <a href="#gallery" className="reveal">Gallery</a>
          <a href="#rating" className="reveal">Ratings</a>
        </ul>

        {/* button */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className={`transition-transform duration-300  ease-in-out  inline-block ${isOpen ? "rotate-180" : "rotate-0"}`}>
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </span>
        </div>

      </nav>

      <ul
        ref={mobileListRef}
        className={`md:hidden absolute text-white top-[80px]  h-90 gap-5 transition-all duration-1000 ease-in-out left-0 w-full z-40 flex flex-col items-center justify-center  overflow-hidden bg-secondary ${isOpen ? "max-h-90 py-3 " : "max-h-0  py-0"} `}
      >
        <a href="#navbar"    onClick={handleNavClick} >Home</a>
          <a href="#blogs"   onClick={handleNavClick} >Blogs</a>
          <a href="#gallery" onClick={handleNavClick} >Gallery</a>
          <a href="#rating"  onClick={handleNavClick} >Ratings</a>
      </ul>

    </div>
  )
}

export default Navbar
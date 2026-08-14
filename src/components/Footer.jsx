import React, { useState, useRef, useLayoutEffect } from 'react'
import coffee from "../assets/final-hero.jpg";
import coffee2 from "../assets/coffee-final.png"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

  const [isOpen, setIsOpen] = useState(null)
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="  section-padding text-white" style={{


      backgroundImage: `
                 linear-gradient(
                   to right,
                   rgba(0, 0, 0, 0.5),
                   rgba(0, 0, 0, 0.5)
                 ),
                 url(${coffee})
               `,
      backgroundPosition: 'center'
    }}>


      {/* footer for desktop screen */}

      <div className=" hidden md:grid md:grid-cols-4">
        <div>
          <img src={coffee2} alt="" />

          <p className="paraSize mt-3">A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="flex flex-col items-center">

          <div>
            <p className="text-white mb-4">Community</p>
            <ul className="paraSize">
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Partners</li>
              <li className="mb-2">Suggestions</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Newsletters</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center">

          <div>
            <p className="text-white mb-4">Useful Links</p>
            <ul className="paraSize">
              <li className="mb-2">Content</li>
              <li className="mb-2">How it works</li>
              <li className="mb-2">Create</li>
              <li className="mb-2">Explore</li>
              <li className="mb-2">Terms and Services</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center">

          <div>
            <p className="text-white mb-4">Partner</p>
            <ul className="paraSize">
              <li className="mb-2">Our partner</li>
              <li className="mb-2">Become a partner</li>
            </ul>
          </div>

        </div>
      </div>

      {/* footer for mobile screen */}

      <div className="md:hidden flex flex-col">
        <div>
          <img src={coffee2} className="max-w-[150px] mb-5" alt="" />
        </div>

        <div className="border-b border-white pb-2" onClick={() => setIsOpen(isOpen === "community" ? null : "community")}>
          <div className="flex justify-between">
            <p className="text-white mb-4">Community</p>
            <RiArrowDownSLine className={`text-white transition-transform duration-600 ${isOpen === 'community' ? 'rotate-180' : 'rotate-0'}  `} />
          </div>

          <div
            className={`overflow-hidden transition-all duration-600 ease-in-out ${isOpen === "community" ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
          >
            <ul className="paraSize">
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Partners</li>
              <li className="mb-2">Suggestions</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Newsletters</li>
            </ul>
          </div>
        </div>

        {/* useful links */}

        <div className="border-b border-white py-3">


          <div className="flex justify-between" onClick={() => setIsOpen(isOpen === "useful" ? null : "useful")}>
            <p className="text-white mb-4">useful links</p>
            <RiArrowDownSLine className={`text-white transition-transform duration-600 ${isOpen === 'useful' ? 'rotate-180' : 'rotate-0'}  `} />
          </div>

          <div
            className={`overflow-hidden transition-all duration-600 ease-in-out ${isOpen === "useful" ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
          >
            <ul className="paraSize">
              <li className="mb-2">Content</li>
              <li className="mb-2">How it works</li>
              <li className="mb-2">Create</li>
              <li className="mb-2">Explore</li>
              <li className="mb-2">Terms and Services</li>
            </ul>
          </div>

        </div>

        {/* partner */}

        <div className=" py-3">


          <div className="flex justify-between" onClick={() => setIsOpen(isOpen === "partner" ? null : "partner")}>
            <p className="text-white mb-4">Partner</p>
            <RiArrowDownSLine className={`text-white transition-transform duration-600 ${isOpen === 'partner' ? 'rotate-180' : 'rotate-0'}  `} />
          </div>

          <div
            className={`overflow-hidden transition-all duration-600 ease-in-out ${isOpen === "partner" ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
          >
            <ul className="paraSize">
              <li className="mb-2">Our partner</li>
              <li className="mb-2">Become a partner</li>
            </ul>
          </div>

        </div>

      </div>

      <div>
        <hr className="border-white mt-5" />
      </div>

      {/* copyright section */}
      <div className="mt-10 flex justify-between">

        <p className='paraSize'>
          Copyright
          2021 Faizan. All Rights Reserved.
        </p>

        <div className="flex gap-5">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaTiktok />
        </div>
      </div>


    </section>
  )
}

export default Footer
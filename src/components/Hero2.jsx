import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
    const sectionRef = useRef(null);
    const imgWrapRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                defaults: { ease: "power3.out", duration: 0.9 },
            });

            tl.fromTo(imgWrapRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1 })
                .fromTo(textRef.current.children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15 }, "-=0.6");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="text-gray-600 body-font">
            <div className="container mx-auto flex container-padding md:flex-row flex-col items-center">
                <div ref={imgWrapRef} className=" md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-start w-full">

                    <img src="https://media.istockphoto.com/id/1337280332/photo/portafilter-with-%D1%81offee-tablet-temper-and-espresso-cup-on-the-background-of-crumbled-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=qn_-FppDF2HArpDvD9_U8PEgGBtHtmpS8X3VJ1o8afY=" className="object-cover max-h-[400px]" width="100%" alt="" />

                </div>
                <div ref={textRef} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start md:text-left  text-start">
                    <p className="text-para">We will Provide you the best</p>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We are here
                        <br className="hidden lg:inline-block" />for you
                    </h1>
                    <p className="mb-8 leading-relaxed text-para2">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex buttonStyle bg-btn text-white">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2
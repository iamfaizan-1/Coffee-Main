import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headingRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            const cards = cardsRef.current.querySelectorAll(".blogCard");
            gsap.fromTo(
                cards,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className=" body-font flex justify-center container-padding w-full ">
            <div className="container w-full  ">

                <div ref={headingRef} className="text-center pb-20">
                    <h1 className="headingSize font-semibold mb-2">What kind of Coffee we serve for you</h1>
                    <p className="paraSize text-para2">Who are in extremely love with eco friendly system.</p>
                </div>

                <div ref={cardsRef} className="flex flex-wrap -mx-4 -mb-10 text-start">
                    <div className="blogCard sm:w-1/2 mb-10 px-4">

                        <div className="rounded-lg h-64 overflow-hidden">
                            <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1577590835286-1cdd24c08fd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNvZmZlfGVufDB8fDB8fHww" alt="" />
                        </div>

                        <div className="pt-5 flex gap-3">
                            <button style={{ border: "1px solid #eee" }} className="bg-white  text-black  transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white  buttonStyle2  ">
                                Travel
                            </button>

                            <button style={{ border: "1px solid #eee" }} className="bg-white  text-black  buttonStyle2  ">
                                Lifestyle
                            </button>
                        </div>

                        <h2 className="title-font text-2xl smallHeading font-semibold mt-6 mb-3">Buy YouTube Videos</h2>
                        <p className="leading-relaxed text-para2 paraSize">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>

                    </div>
                    <div className="blogCard sm:w-1/2 mb-10 px-4 w-[50%]">
                        <div className="rounded-lg h-64 overflow-hidden w-full ">
                            <img src="https://images.unsplash.com/photo-1634465474088-e82e29b64ecc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxjb2ZmZXxlbnwwfHwwfHx8MA%3D%3D" className="w-full h-full object-cover object-center " alt="" />
                        </div>

                        <div className="pt-5 flex gap-3">
                            <button style={{ border: "1px solid #eee" }} className="bg-white  text-black  transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white  buttonStyle2  ">
                                Travel
                            </button>

                            <button style={{ border: "1px solid #eee" }} className="bg-white  text-black  buttonStyle2  ">
                                Lifestyle
                            </button>
                        </div>
                        <h2 className="title-font smallHeading text-gray-900 mt-6  font-semibold mb-3">The Catalyzer</h2>
                        <p className="leading-relaxed paraSize text-para2">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
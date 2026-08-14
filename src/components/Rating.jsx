import React, { useRef, useLayoutEffect } from 'react'
import { CiStar } from 'react-icons/ci'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Rating = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

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

      gsap.fromTo(
        gridRef.current.querySelectorAll(".part1"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary text-white container-padding">

      <div ref={headingRef} className="text-center pb-20">
        <h1 className="headingSize font-semibold mb-2">What kind of Coffee we serve for you</h1>
        <p className="paraSize ">Who are in extremely love with eco friendly system.</p>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
        <div className="part1">
          <div>
            <p className="smallHeading flex gap-2 items-center">
              Lorem Ipsum
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic at repellendus atque eius voluptas explicabo nostrum harum accusantium molestiae, consectetur molestias, officiis assumenda non ut, facilis ratione eligendi tenetur distinctio.
            </p>
          </div>
        </div>

        <div className="part1">
          <div>
            <p className="smallHeading flex gap-2 items-center">
              Lorem Ipsum
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic at repellendus atque eius voluptas explicabo nostrum harum accusantium molestiae, consectetur molestias, officiis assumenda non ut, facilis ratione eligendi tenetur distinctio.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Rating
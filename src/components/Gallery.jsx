import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftImgsRef = useRef([]);
  const rightTopRef = useRef(null);
  const bottomRowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap.fromTo(
        leftRef.current.querySelectorAll("img"),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightRef.current.querySelectorAll("img"),
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Differential scroll parallax — each column drifts at a different rate
      gsap.to(leftRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(rightTopRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(bottomRowRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Hover zoom on every image
      const imgs = sectionRef.current.querySelectorAll("img");
      imgs.forEach((img) => {
        img.style.overflow = "hidden";
        const onEnter = () =>
          gsap.to(img, { scale: 1.05, duration: 0.7, ease: "power3.out" });
        const onLeave = () =>
          gsap.to(img, { scale: 1, duration: 0.7, ease: "power3.out" });
        img.addEventListener("mouseenter", onEnter);
        img.addEventListener("mouseleave", onLeave);
        img._onEnter = onEnter;
        img._onLeave = onLeave;
      });

      return () => {
        imgs.forEach((img) => {
          img.removeEventListener("mouseenter", img._onEnter);
          img.removeEventListener("mouseleave", img._onLeave);
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="flex lg:flex-row flex-col gap-5 container-padding overflow-hidden">

      <div ref={leftRef} className="lg:w-[40%] w-[100%] flex flex-col gap-5 pb-5 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1643045430990-fe81ba737677?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8"
          className="w-full rounded-lg object-cover transition-none"
          alt=""
        />
        <img
          src="https://preview.colorlib.com/theme/coffee/img/g1.avif"
          className="w-full rounded-lg object-cover transition-none"
          alt=""
        />
      </div>

      <div ref={rightRef} className="lg:w-[55%] w-[100%] flex flex-col gap-5">
        <div ref={rightTopRef} className="will-change-transform">
          <img
            className="w-full lg:max-h-[405px] rounded-lg object-cover transition-none"
            src="https://images.unsplash.com/photo-1691442097203-aa897a8632e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>

        <div ref={bottomRowRef} className="lg:flex-row flex-col gap-5 flex w-full will-change-transform">
          <img
            className="lg:w-[49%] w-full rounded-lg object-cover transition-none"
            src="https://plus.unsplash.com/premium_photo-1663012978924-5bfd443ac932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwOHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="lg:w-[49%] w-full rounded-lg object-cover transition-none"
            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>

    </section>
  )
}

export default Gallery
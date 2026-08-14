import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { name: "Cappuccino", price: "$49" },
  { name: "Americano", price: "$49" },
  { name: "Espresso", price: "$49" },
  { name: "Macchiato", price: "$49" },
  { name: "Mocha", price: "$49" },
  { name: "Piccolo Latte", price: "$49" },
  { name: "Ristretto", price: "$49" },
  { name: "Affogato", price: "$49" },
  { name: "Coffee Latte", price: "$49" },
];

const Serve = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Masked heading reveal
      const split = new SplitType(titleRef.current, { types: "words" });
      gsap.set(split.words, { yPercent: 110, opacity: 0, display: "inline-block" });

      gsap.to(split.words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        headingRef.current.querySelector("p"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Card entrance
      const cards = gridRef.current.querySelectorAll(".cards");

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: { each: 0.08, grid: "auto", from: "start" },
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Magnetic tilt on each card
      cards.forEach((card) => {
        const priceEl = card.querySelector(".price");
        const nameEl = card.querySelector(".cardName");

        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotateX: relY * -10,
            rotateY: relX * 10,
            scale: 1.03,
            duration: 0.5,
            ease: "power3.out",
            transformPerspective: 600,
          });
          gsap.to(priceEl, {
            x: relX * 8,
            y: relY * 8,
            scale: 1.1,
            color: "#fff",
            duration: 0.5,
            ease: "power3.out",
          });
          gsap.to(nameEl, {
            x: relX * 4,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
          gsap.to(priceEl, {
            x: 0,
            y: 0,
            scale: 1,
            color: "",
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
          gsap.to(nameEl, {
            x: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);

        card._onMove = onMove;
        card._onLeave = onLeave;
      });

      return () => {
        cards.forEach((card) => {
          card.removeEventListener("mousemove", card._onMove);
          card.removeEventListener("mouseleave", card._onLeave);
        });
        split.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-heading container-padding">

      <div ref={headingRef} className="text-center pb-10">
        <div className="overflow-hidden">
          <h1 ref={titleRef} className="headingSize font-semibold mb-2">
            What kind of Coffee we serve for you
          </h1>
        </div>
        <p className="paraSize text-para2">Who are in extremely love with eco friendly system.</p>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-3  grid-cols-1 gap-5" style={{ perspective: "1000px" }}>
        {items.map((item) => (
          <div
            key={item.name}
            className="cards px-8 py-5 bg-white rounded-lg flex flex-col gap-4 will-change-transform cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="rate flex justify-between">
              <h3 className="cardName smallHeading font-semibold">{item.name}</h3>
              <p className="price text-primary font-bold">{item.price}</p>
            </div>
            <p className="paraSize text-para2">Usage of the Internet is becoming more common due to rapid advance.</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Serve
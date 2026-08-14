import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import coffee from "../assets/final-hero.jpg";
import coffee2 from "../assets/coffee-final.png";

function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const btnTextRef = useRef(null);
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const blurRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const scrollCueRef = useRef(null);
  const tagRef = useRef(null);
  const lineRef = useRef(null);

  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split headings into characters for masked reveal
      const splitH1 = new SplitType(h1Ref.current, { types: "chars" });
      const splitH2 = new SplitType(h2Ref.current, { types: "chars" });
      const splitH3 = new SplitType(h3Ref.current, { types: "chars" });
      const allChars = [...splitH1.chars, ...splitH2.chars, ...splitH3.chars];

      gsap.set(allChars, {
        yPercent: 120,
        opacity: 0,
        display: "inline-block",
      });
      gsap.set([tagRef.current, lineRef.current, paraRef.current, btnRef.current], {
        opacity: 0,
      });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(tagRef.current, { y: 20 });
      gsap.set(paraRef.current, { y: 24 });
      gsap.set(btnRef.current, { y: 20, scale: 0.92 });
      gsap.set(imgWrapRef.current, { x: 100, opacity: 0, scale: 0.9, rotate: 4 });
      gsap.set(blurRef.current, { opacity: 0 });
      gsap.set(scrollCueRef.current, { opacity: 0, y: -10 });

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.out" },
        onComplete: () => {
          // ambient loops once the intro is done
          gsap.to(imgWrapRef.current, {
            y: 14,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(orb1Ref.current, {
            x: 40,
            y: -30,
            duration: 8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(orb2Ref.current, {
            x: -50,
            y: 40,
            duration: 10,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(scrollCueRef.current.querySelector(".cueDot"), {
            y: 14,
            duration: 1.4,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      });

      tl.to(blurRef.current, { opacity: 1, duration: 1.4 }, 0)
        .to(tagRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.15)
        .to(
          allChars,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.018,
            ease: "power4.out",
          },
          0.35
        )
        .to(lineRef.current, { scaleX: 1, opacity: 1, duration: 0.8, ease: "power3.inOut" }, "-=0.5")
        .to(paraRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(btnRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.8)" }, "-=0.35")
        .to(
          imgWrapRef.current,
          { x: 0, opacity: 1, scale: 1, rotate: 0, duration: 1.3, ease: "power4.out" },
          0.5
        )
        .to(scrollCueRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");

      const playHero = () => tl.play();

      if (window.__navbarIntroDone) {
        playHero();
      } else {
        window.addEventListener("navbarIntroComplete", playHero, { once: true });
      }
      const markDone = () => (window.__navbarIntroDone = true);
      window.addEventListener("navbarIntroComplete", markDone, { once: true });

      // Mouse parallax across the hero
      const onMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / innerHeight - 0.5) * 2;

        gsap.to(imgWrapRef.current, {
          x: x * 18,
          y: y * 14,
          duration: 1.1,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(orb1Ref.current, {
          x: x * -30,
          y: y * -20,
          duration: 1.6,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(orb2Ref.current, {
          x: x * 25,
          y: y * 18,
          duration: 1.6,
          ease: "power3.out",
          overwrite: "auto",
        });
        gsap.to(bgRef.current, {
          x: x * -10,
          y: y * -6,
          duration: 1.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      };
      sectionRef.current.addEventListener("mousemove", onMouseMove);

      // Magnetic button
      const btn = btnRef.current;
      const onBtnMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: relX * 0.35,
          y: relY * 0.5,
          duration: 0.5,
          ease: "power3.out",
        });
        gsap.to(btnTextRef.current, {
          x: relX * 0.15,
          y: relY * 0.2,
          duration: 0.5,
          ease: "power3.out",
        });
      };
      const onBtnLeave = () => {
        gsap.to([btn, btnTextRef.current], {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
        });
      };
      btn.addEventListener("mousemove", onBtnMove);
      btn.addEventListener("mouseleave", onBtnLeave);

      setReady(true);

      return () => {
        window.removeEventListener("navbarIntroComplete", playHero);
        window.removeEventListener("navbarIntroComplete", markDone);
        sectionRef.current?.removeEventListener("mousemove", onMouseMove);
        btn.removeEventListener("mousemove", onBtnMove);
        btn.removeEventListener("mouseleave", onBtnLeave);
        splitH1.revert();
        splitH2.revert();
        splitH3.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen section-padding overflow-hidden bg-[#0b0705]"
    >
      {/* Background image layer — slightly oversized for parallax headroom */}
      <div
        ref={bgRef}
        className="absolute inset-0 -m-6 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(6, 3, 2, 0.75),
              rgba(6, 3, 2, 0.45)
            ),
            url(${coffee})
          `,
        }}
      />

      {/* Grain / noise overlay for texture */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient gradient orbs */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute -top-20 left-[10%] w-[420px] h-[420px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle, rgba(214,138,64,0.35), transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute bottom-[-10%] right-[15%] w-[380px] h-[380px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main Container */}
      <div className="relative z-20 w-full min-h-screen flex flex-col lg:flex-row items-center">

        {/* LEFT - CONTENT */}
        <div className="w-full lg:w-1/2 flex gap-3 flex-col justify-center items-center lg:items-start text-center lg:text-left">

          <span
            ref={tagRef}
            className="uppercase tracking-[0.3em] text-[11px] sm:text-xs text-white/60 font-medium mb-1"
          >
            Small batch &middot; Slow roasted
          </span>

          <div className="overflow-hidden">
            <h1
              ref={h1Ref}
              className="heading1 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            >
              Start Your
            </h1>
          </div>

          <div className="overflow-hidden">
            <h2
              ref={h2Ref}
              className="heading2 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
            >
              <span className=" text-white bg-clip-text ">
                Coffee
              </span>
            </h2>
          </div>

          <div className="overflow-hidden">
            <h3
              ref={h3Ref}
              className="heading3 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            >
              Journey
            </h3>
          </div>

          <div ref={lineRef} className="h-[2px] w-24 bg-white/40 my-3" />

          <p
            ref={paraRef}
            className="text-white/70 text-sm sm:text-base md:text-lg max-w-lg font-light"
          >
            Experience the rich taste and aroma of freshly brewed coffee.
            Every cup is made with passion and carefully selected beans.
          </p>

          <button
            ref={btnRef}
            className="group relative mt-4 overflow-hidden rounded-full bg-btn text-white uppercase buttonStyle will-change-transform"
          >
            <span ref={btnTextRef} className="relative z-10 flex items-center gap-2">
              Explore Coffee
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </button>

        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">

          <div ref={imgWrapRef} className="relative will-change-transform">
            <img
              ref={imgRef}
              src={coffee2}
              alt="Coffee"
              className="w-[100%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
            />
          </div>

          <div
            ref={blurRef}
            className="absolute z-0 top-0 w-[40%] h-[50%]"
            style={{
              background: `rgba(255, 255, 255, 1.5)`,
              filter: "blur(750px)",
            }}
          />
        </div>

      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-[0.25em] text-[10px] text-white/50">Scroll</span>
        <div className="w-[1px] h-10 bg-white/25 relative overflow-hidden">
          <div className="cueDot absolute top-0 left-0 w-full h-3 bg-white/80" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
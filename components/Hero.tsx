"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Shapes from "./Shapes";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".animatedName",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1.5,0.3)",
          duration: 1,
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".animatedDev",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1.1,0.3)",
        }
      );
      tl.fromTo(
        ".magicButton",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1.5,0.3)",
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pb-20 pt-0 sm:pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <section
        ref={component}
        className="justify-end sm:content-normal sm:max-w-[1800px] mx-auto w-full flex flex-col-reverse sm:flex-row sm:items-center top-0 max-h-[100dvh] sm:h-[70vh]"
      >
        <div className="flex flex-col px-0 sm:px-20 text-6xl sm:text-[120px] leading-none font-extrabold">
          <div className=" text-slate-300 flex">
            <div className="animatedName opacity-0">L</div>
            <div className="animatedName opacity-0">e</div>
            <div className="animatedName opacity-0">v</div>
            <div className="animatedName opacity-0">i</div>
          </div>
          <div className="text-slate-500 flex text-5xl sm:text-[110px]">
            <div className="animatedName opacity-0">H</div>
            <div className="animatedName opacity-0">i</div>
            <div className="animatedName opacity-0">n</div>
            <div className="animatedName opacity-0">n</div>
            <div className="animatedName opacity-0">e</div>
            <div className="animatedName opacity-0">n</div>
            <div className="animatedName opacity-0">t</div>
            <div className="animatedName opacity-0">h</div>
            <div className="animatedName opacity-0">a</div>
            <div className="animatedName opacity-0">l</div>
          </div>
          <div className="animatedDev text-white text-3xl sm:text-[40px] font-bold sm:mt-2 opacity-0 animatedDev">
            Frontend Developer
          </div>
            <MagicButton />
        </div>
        <div className="shapes w-full">
          <Shapes />
        </div>
      </section>
    </div>
  );
};

export default Hero;

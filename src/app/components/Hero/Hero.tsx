import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Highlight } from "@/components/ui/hero-highlight";

const Hero = () => {
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHighlight(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".name-title",
      { x: -10 },
      { delay: 0.1, x: 0, opacity: 1, stagger: 0.8 }
    );
  }, []);

  return (
    <div className="mt-12 w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex w-full ">
        <div className="corner-shape w-[80%]">
          <div className="jersey-10-regular h-full flex flex-col justify-center space-y-2">
            <h2 className="name-title opacity-0 text-2xl md:text-3xl text-zinc-500">
              Hello!
            </h2>
            <h1 className="name-title opacity-0 text-5xl md:text-6xl">
              {showHighlight && (
                <div className="hidden md:block">
                  I'm Yassine,{" "}
                  <Highlight className="text-white px-5 text-5xl hidden">
                    Full-Stack Web Developer
                  </Highlight>
                </div>
              )}
              <div className="block md:hidden">
                I'm Yassine, Full-Stack Web Developer
              </div>
            </h1>
            <div className="pt-10 space-y-2">
              <h3 className="name-title opacity-0 text-2xl md:text-3xl uppercase">
                MY PRIORITY IS...
              </h3>
              <h4 className="name-title opacity-0 text-xl md:text-2xl uppercase">
                PERFORMANCE • PROCESS • QUALITY • SATISFACTION
              </h4>
              <p className="name-title opacity-0 text-zinc-400 text-base md:text-xl">
                I prioritize high-performance web solutions using leading
                technologies, ensuring fast and responsive applications. With
                over 2+ years of experience in the field, I bring a proven track
                record of leveraging cutting-edge tools and techniques to
                deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
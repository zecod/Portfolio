import React from "react";
import { Palette } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const Hobby = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hobby-intro",
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: ".hobby-intro",
          start: "bottom bottom",
          end: "start start",
          onEnter: () => {
            gsap.fromTo(
              ".stagger-hobby",
              { opacity: 0 },
              { opacity: 1, stagger: 0.5 }
            );
          },
          once: true,
        },
        opacity: 1,
        x: 0,
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="md:h-[50vh] mt-20 space-y-5 mb-20 hobby-intro">
      <h2 className="flex items-center gap-1 stagger-hobby">
        <Palette />
        HOBBIES
      </h2>
      <h1 className="text-2xl font-bold stagger-hobby">
        Discover My Interests
      </h1>
      <p className="text-md text-zinc-500 mb-5 stagger-hobby">
        I dedicate my spare time to exploring mobile development with Swift UI
        and React Native. Additionally, I am starting to learn Python and PHP,
        embracing the challenges of being a beginner. I am also passionate about
        football, enjoying both spectating and participating. This hobby has
        nurtured vital teamwork abilities and a mindset focused on achieving
        success, both crucial in sports and in my software development career.
        Watching movies and series also enhances my understanding of the
        filmmaking process. Beyond these interests, I excel in making
        well-informed decisions and have developed a versatile skill set that
        spans from coding to project management.
      </p>

      <div className="stagger-intro flex gap-5 flex-wrap stagger-hobby">
        <img
          src="https://www.vectorlogo.zone/logos/swift/swift-icon.svg"
          alt="Swift UI logo"
          className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
        />
        <img
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          alt="React Native logo"
          className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
        />
        <img
          src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
          alt="Python programming language logo"
          className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
        />
        <img
          src="https://www.vectorlogo.zone/logos/php/php-ar21.svg"
          alt="PHP programming language logo"
          className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
        />
      </div>
    </div>
  );
};
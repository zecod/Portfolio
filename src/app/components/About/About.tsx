import React from "react";
import { User } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".scroll-info",
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: ".scroll-info",
          start: "bottom bottom",
          end: "start start",
          onEnter: () => {
            gsap.fromTo(
              ".stagger-info",
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
    <div className="mb-60 space-y-5 scroll-info">
      <h2 className="stagger-info flex gap-1 items-center">
        <User />
        ABOUT ME
      </h2>
      <h1 className="stagger-info text-2xl font-bold">
        Full-Stack Developer & Cybersecurity Enthusiast
      </h1>

      <p className="stagger-info text-md text-zinc-500 mb-5">
        Hey, my name is Yassine, and I use Yass as my nickname across social
        media. I’m a full-stack web developer based in Italy. With a strong
        background in both front-end and back-end technologies, I specialize in
        creating seamless, robust, and scalable web applications. My passion for
        the entire development stack drives my continuous learning and mastery
        of new technologies. Beyond coding, I have a keen interest in
        cybersecurity, particularly in identifying vulnerabilities within big
        companies' systems. I am always eager to explore and integrate the
        latest innovations in tech to enhance my projects and ensure they are
        secure and efficient.
      </p>

      <h2 className="stagger-info text-md text-zinc-500">
        Companies Where I've Found Vulnerabilities:
      </h2>

      <div className="stagger-info flex items-center flex-wrap gap-5">
        <a href="https://www.edenred.it/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ticket-restaurant.edenred.it/exp/int/img/logo.svg"
            alt="Edenred company logo"
            className="grayscale aspect-auto w-20 h-16 object-contain transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.netflix.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg"
            alt="Netflix company logo"
            className="grayscale aspect-auto transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg"
            alt="Microsoft Azure logo"
            className="grayscale aspect-auto transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.atm.it" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.atm.it/SiteCollectionImages/logo83.60.jpg"
            alt="ATM Milano company logo"
            className="grayscale aspect-auto transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.enel.it/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.enel.com/etc.clientlibs/enel-common/clientlibs/clientlib-bundle/resources/img/logo/logo.svg"
            alt="Enel company logo"
            className="grayscale aspect-auto w-20 h-16 object-contain transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.windtre.it/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.windtre.it/content/experience-fragments/windtre/it/it/site/header/master/_jcr_content/root/header/aem-footer-fixed-icon__desktop.coreimg.svg/1698759224713/big.svg"
            alt="Wind Tre company logo"
            className="grayscale aspect-auto w-20 h-12 object-contain transition-all hover:grayscale-0"
          />
        </a>
      </div>
    </div>
  );
};
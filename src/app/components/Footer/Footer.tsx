import React from "react";
import { Github, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full bg-black">
      <footer className="container text-white h-auto p-5 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold jersey-10-regular">Yass.</h1>
          <p className="text-sm text-zinc-400">
            &copy; 2024 Yass. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <Github className="transition-all hover:text-white cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
            <Youtube className="transition-all hover:text-white cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="transition-all hover:text-white cursor-pointer" />
          </a>
        </div>
      </footer>
    </div>
  );
};
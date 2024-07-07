import React from "react";
import { Link, NavLink } from "react-router-dom";
import AutoType from "../../../components/Imported/AutoType";

const Hero = () => {
  return (
  
      <div className="hero relative  bg-[#F9FAFB] min-h-screen">
        <div className="hero-content text-center text-neutral-content">
          <div className="hero-all-content">
            <h1 className="mb-4 text-5xl font-bold text-slate-950">Hello,It's Me</h1>
            <h1 className="mb-4 text-8xl font-extrabold text-slate-950">NOMAN DIPTO</h1>
            <h6 className="mb-12 text-5xl font-medium ">
              {" "}
              <span className="text-slate-950">I am </span>
              {<AutoType />}
            </h6>

            <a
              href="https://drive.google.com/file/d/1izNRchK0uSYqMPkZu7aCagw8CoIcDKNa/view?usp=drive_link"
              target="_blank"
              className=" resume " 
              
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
  
  );
};

export default Hero;

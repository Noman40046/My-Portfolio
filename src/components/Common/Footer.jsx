import React from "react";
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center py-10 bg-[#0F0F0F] text-primary-content">
        <aside>
          <h2 className="font-bold mb-1 text-xl text-[#EF4444]">CONTACT ME</h2>
          <h1 className="font-bold mb-1 text-5xl">Got a Project ? Lets Talk !</h1>
          <h1 className="font-bold mb-1 text-4xl">noman40046@gmail.com</h1>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/dipto.dipto.589583" target="_blank">
            <FaFacebookF className="footer-icon"  />
            </a>
            <a href="https://www.linkedin.com/in/noman-dipto-a8b7b3263/"
                  target="_blank">
            <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://github.com/Noman40046"
                  target="_blank">
            <FaGithub className="footer-icon" />
            </a>
            <a href="https://twitter.com/noman40046"
                  target="_blank">
            <FaTwitter className="footer-icon" />
            </a>
           
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

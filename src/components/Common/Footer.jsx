import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center py-10 bg-gray-50 text-primary-content">
        <aside>
          <h2 className="font-bold mb-3 text-5xl my-mail">
            noman40046@gmail.com
          </h2>
          <h1 className="font-bold  text-4xl text-gray-400">
            Got a Project ? Lets Talk !
          </h1>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/dipto.dipto.589583"
              target="_blank"
            >
              <img src="/facebook.png" className=" w-12"  alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/noman-dipto-a8b7b3263/"
              target="_blank"
            >
              <img src="/linkrdin.png" className=" w-12"  alt="" />
            </a>
            <a href="https://github.com/Noman40046" target="_blank">
            <img src="/github.png" className=" w-12"  alt="" />
            </a>
            <a href="https://twitter.com/noman40046" target="_blank">
            <img src="/twitter.png" className=" w-12"  alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
